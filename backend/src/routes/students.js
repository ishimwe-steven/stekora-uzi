import bcrypt from "bcryptjs";
import express from "express";
import { pool, query } from "../db.js";
import { requireStudent } from "../middleware/studentAuth.js";

const router = express.Router();
const MODULE_PASS_MARK = 60;

async function hasIncompletePreviousModule(studentId, courseId, moduleId) {
  const currentRows = await query(
    "SELECT order_number FROM modules WHERE id = ? AND course_id = ? LIMIT 1",
    [moduleId, courseId]
  );
  const currentOrder = currentRows[0]?.order_number;
  if (currentOrder === undefined) return false;

  const rows = await query(
    `
      SELECT COUNT(*) AS total
      FROM modules m
      LEFT JOIN module_completions mc
        ON mc.module_id = m.id AND mc.student_id = ?
      WHERE m.course_id = ?
        AND m.order_number < ?
        AND mc.id IS NULL
    `,
    [studentId, courseId, currentOrder]
  );

  return Number(rows[0]?.total || 0) > 0;
}

router.post("/register", async (req, res) => {
  try {
    const { full_name, email, phone = "", password } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "Full name, email, and password are required" });
    }

    const existing = await query("SELECT id FROM students WHERE email = ? LIMIT 1", [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "Student email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const result = await query(
      "INSERT INTO students (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)",
      [full_name, email, phone, passwordHash]
    );

    res.status(201).json({
      message: "Registration successful",
      student: { id: result.insertId, full_name, email, phone, status: "active" }
    });
  } catch (error) {
    console.error("Student registration failed", error);
    res.status(500).json({ message: "Student registration failed" });
  }
});

router.use(requireStudent);

router.get("/dashboard", async (req, res, next) => {
  try {
    const students = await query(
      "SELECT id, full_name, email, phone, status, created_at FROM students WHERE id = ? LIMIT 1",
      [req.student.id]
    );

    if (!students[0]) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    const courses = await query(
      `
        SELECT
          c.id,
          c.title,
          c.description,
          c.category,
          c.image_url,
          sc.status AS enrollment_status
        FROM courses c
        LEFT JOIN student_courses sc
          ON sc.course_id = c.id AND sc.student_id = ?
        ORDER BY c.id DESC
      `,
      [req.student.id]
    );

    const decoratedCourses = [];

    for (const course of courses) {
      const modules = await query(
        `
          SELECT
            m.id,
            m.title,
            m.order_number,
            CASE WHEN mc.id IS NULL THEN 0 ELSE 1 END AS completed,
            (
              SELECT smg.score
              FROM student_module_grades smg
              WHERE smg.student_id = ? AND smg.module_id = m.id
              ORDER BY smg.created_at DESC, smg.id DESC
              LIMIT 1
            ) AS score
          FROM modules m
          LEFT JOIN module_completions mc
            ON mc.module_id = m.id AND mc.student_id = ?
          WHERE m.course_id = ?
          ORDER BY m.order_number ASC, m.id ASC
        `,
        [req.student.id, req.student.id, course.id]
      );

      const completedModules = modules.filter((module) => Number(module.completed) === 1).length;
      const isCompleted = modules.length > 0 && completedModules === modules.length;
      const status = isCompleted ? "completed" : course.enrollment_status ? "in_progress" : "not_started";

      decoratedCourses.push({
        ...course,
        name: course.title,
        status,
        modules,
        modules_count: modules.length,
        completed_modules: completedModules,
        progress: modules.length > 0 ? Math.round((completedModules / modules.length) * 100) : 0
      });
    }

    const certificates = await query(
      "SELECT COUNT(*) AS total FROM student_certificates WHERE student_id = ? AND status = 'verified'",
      [req.student.id]
    );

    res.json({
      student: students[0],
      courses: decoratedCourses,
      certificates_count: Number(certificates[0]?.total || 0)
    });
  } catch (error) {
    next(error);
  }
});

router.post("/courses/:courseId/start", async (req, res, next) => {
  try {
    await pool.execute(
      `
        INSERT INTO student_courses (student_id, course_id, status)
        VALUES (?, ?, 'started')
        ON DUPLICATE KEY UPDATE status = IF(status = 'completed', status, 'started')
      `,
      [req.student.id, req.params.courseId]
    );

    res.json({ message: "Course started", courseId: Number(req.params.courseId) });
  } catch (error) {
    next(error);
  }
});

router.get("/courses/:courseId/modules/:moduleId", async (req, res, next) => {
  try {
    if (await hasIncompletePreviousModule(req.student.id, req.params.courseId, req.params.moduleId)) {
      res.status(403).json({ message: "Pass the previous module assessment before opening this module" });
      return;
    }

    const rows = await query(
      `
        SELECT
          m.id,
          m.course_id,
          m.title,
          m.order_number,
          c.title AS course_title,
          c.category,
          CASE WHEN mc.id IS NULL THEN 0 ELSE 1 END AS completed
        FROM modules m
        JOIN courses c ON c.id = m.course_id
        LEFT JOIN module_completions mc
          ON mc.module_id = m.id AND mc.student_id = ?
        WHERE m.id = ? AND m.course_id = ?
        LIMIT 1
      `,
      [req.student.id, req.params.moduleId, req.params.courseId]
    );

    if (!rows[0]) {
      res.status(404).json({ message: "Module not found" });
      return;
    }

    const materials = await query(
      "SELECT id, title, content, youtube_url, file_url FROM materials WHERE module_id = ? ORDER BY id ASC",
      [req.params.moduleId]
    );
    const quizCount = await query("SELECT COUNT(*) AS total FROM module_quizzes WHERE module_id = ?", [req.params.moduleId]);
    const grades = await query(
      "SELECT score, passed, created_at FROM student_module_grades WHERE student_id = ? AND module_id = ? ORDER BY created_at DESC, id DESC LIMIT 1",
      [req.student.id, req.params.moduleId]
    );
    const moduleList = await query(
      `
        SELECT
          m.id,
          m.title,
          m.order_number,
          CASE WHEN mc.id IS NULL THEN 0 ELSE 1 END AS completed
        FROM modules m
        LEFT JOIN module_completions mc
          ON mc.module_id = m.id AND mc.student_id = ?
        WHERE m.course_id = ?
        ORDER BY m.order_number ASC, m.id ASC
      `,
      [req.student.id, req.params.courseId]
    );

    res.json({
      module: rows[0],
      materials,
      has_assessment: Number(quizCount[0]?.total || 0) > 0,
      latest_grade: grades[0] || null,
      modules: moduleList
    });
  } catch (error) {
    next(error);
  }
});

router.post("/modules/:moduleId/complete", async (req, res, next) => {
  try {
    const quizCount = await query("SELECT COUNT(*) AS total FROM module_quizzes WHERE module_id = ?", [req.params.moduleId]);
    const message = Number(quizCount[0]?.total || 0) > 0
      ? `Pass the module assessment with at least ${MODULE_PASS_MARK}% to complete this module`
      : "This module is waiting for the admin to add its required assessment";
    res.status(400).json({ message });
  } catch (error) {
    next(error);
  }
});

router.get("/modules/:moduleId/assessment", async (req, res, next) => {
  try {
    const moduleRows = await query(
      `
        SELECT m.id, m.title, m.course_id, c.title AS course_title
        FROM modules m
        JOIN courses c ON c.id = m.course_id
        WHERE m.id = ?
        LIMIT 1
      `,
      [req.params.moduleId]
    );

    if (!moduleRows[0]) {
      res.status(404).json({ message: "Module not found" });
      return;
    }

    if (
      await hasIncompletePreviousModule(
        req.student.id,
        moduleRows[0].course_id,
        req.params.moduleId
      )
    ) {
      res.status(403).json({ message: "Pass the previous module assessment first" });
      return;
    }

    const questions = await query(
      "SELECT id, question, question_type, options_json, marks FROM module_quizzes WHERE module_id = ? ORDER BY id ASC",
      [req.params.moduleId]
    );

    res.json({
      module: moduleRows[0],
      pass_mark: MODULE_PASS_MARK,
      questions: questions.map((question) => {
        let options = {};
        try {
          options = typeof question.options_json === "string"
            ? JSON.parse(question.options_json || "{}")
            : question.options_json || {};
        } catch {
          options = {};
        }
        return { ...question, options };
      })
    });
  } catch (error) {
    next(error);
  }
});

router.post("/modules/:moduleId/assessment", async (req, res, next) => {
  const answers = Array.isArray(req.body.answers) ? req.body.answers : [];

  try {
    const moduleRows = await query(
      "SELECT course_id FROM modules WHERE id = ? LIMIT 1",
      [req.params.moduleId]
    );
    if (!moduleRows[0]) {
      res.status(404).json({ message: "Module not found" });
      return;
    }

    if (
      await hasIncompletePreviousModule(
        req.student.id,
        moduleRows[0].course_id,
        req.params.moduleId
      )
    ) {
      res.status(403).json({ message: "Pass the previous module assessment first" });
      return;
    }

    const questions = await query(
      "SELECT id, question_type, correct_answer, marks FROM module_quizzes WHERE module_id = ? ORDER BY id ASC",
      [req.params.moduleId]
    );

    if (questions.length === 0) {
      res.status(404).json({ message: "No assessment exists for this module" });
      return;
    }

    let totalMarks = 0;
    let awardedMarks = 0;

    for (const question of questions) {
      const marks = Number(question.marks || 1);
      totalMarks += marks;
      const submitted = answers.find((answer) => Number(answer.question_id) === Number(question.id));
      const answer = String(submitted?.answer || "").trim();

      if (
        question.question_type === "mcq" &&
        answer.toUpperCase() === String(question.correct_answer || "").trim().toUpperCase()
      ) {
        awardedMarks += marks;
      }
    }

    const score = totalMarks > 0 ? Math.round((awardedMarks / totalMarks) * 100) : 0;
    const passed = score >= MODULE_PASS_MARK;

    await pool.execute(
      "INSERT INTO student_module_grades (student_id, module_id, score, passed) VALUES (?, ?, ?, ?)",
      [req.student.id, req.params.moduleId, score, passed]
    );

    if (passed) {
      await pool.execute(
        "INSERT IGNORE INTO module_completions (student_id, module_id) VALUES (?, ?)",
        [req.student.id, req.params.moduleId]
      );

      const courseId = moduleRows[0]?.course_id;
      if (courseId) {
        const counts = await query(
          `
            SELECT
              COUNT(m.id) AS total_modules,
              COUNT(mc.id) AS completed_modules
            FROM modules m
            LEFT JOIN module_completions mc
              ON mc.module_id = m.id AND mc.student_id = ?
            WHERE m.course_id = ?
          `,
          [req.student.id, courseId]
        );

        if (
          Number(counts[0]?.total_modules || 0) > 0 &&
          Number(counts[0]?.total_modules) === Number(counts[0]?.completed_modules)
        ) {
          await pool.execute(
            "UPDATE student_courses SET status = 'completed' WHERE student_id = ? AND course_id = ?",
            [req.student.id, courseId]
          );
        }
      }
    }

    res.json({
      message: passed ? "Assessment passed" : "Assessment not passed",
      score,
      passed,
      pass_mark: MODULE_PASS_MARK
    });
  } catch (error) {
    next(error);
  }
});

router.get("/courses/:courseId/final-exam", async (req, res, next) => {
  try {
    const counts = await query(
      `
        SELECT
          COUNT(m.id) AS total_modules,
          COUNT(mc.id) AS completed_modules
        FROM modules m
        LEFT JOIN module_completions mc
          ON mc.module_id = m.id AND mc.student_id = ?
        WHERE m.course_id = ?
      `,
      [req.student.id, req.params.courseId]
    );
    const totalModules = Number(counts[0]?.total_modules || 0);
    const completedModules = Number(counts[0]?.completed_modules || 0);
    const unlocked = totalModules > 0 && totalModules === completedModules;

    const attempts = await query(
      "SELECT id, score, status, allow_reexam, created_at FROM final_exam_submissions WHERE student_id = ? AND course_id = ? ORDER BY created_at DESC, id DESC LIMIT 1",
      [req.student.id, req.params.courseId]
    );
    const latestAttempt = attempts[0] || null;
    const canAttempt = unlocked && (!latestAttempt || Boolean(latestAttempt.allow_reexam));

    const courseRows = await query("SELECT id, title FROM courses WHERE id = ? LIMIT 1", [req.params.courseId]);
    const questions = await query(
      "SELECT id, question, question_type, options_json, marks FROM final_exam_questions WHERE course_id = ? ORDER BY id ASC",
      [req.params.courseId]
    );

    res.json({
      course: courseRows[0] || null,
      unlocked,
      can_attempt: canAttempt,
      total_modules: totalModules,
      completed_modules: completedModules,
      latest_attempt: latestAttempt,
      questions: questions.map((question) => {
        let options = {};
        try {
          options = typeof question.options_json === "string"
            ? JSON.parse(question.options_json || "{}")
            : question.options_json || {};
        } catch {
          options = {};
        }
        return { ...question, options };
      })
    });
  } catch (error) {
    next(error);
  }
});

router.post("/courses/:courseId/final-exam", async (req, res, next) => {
  const answers = Array.isArray(req.body.answers) ? req.body.answers : [];
  const connection = await pool.getConnection();

  try {
    const counts = await query(
      `
        SELECT COUNT(m.id) AS total_modules, COUNT(mc.id) AS completed_modules
        FROM modules m
        LEFT JOIN module_completions mc
          ON mc.module_id = m.id AND mc.student_id = ?
        WHERE m.course_id = ?
      `,
      [req.student.id, req.params.courseId]
    );

    if (
      Number(counts[0]?.total_modules || 0) === 0 ||
      Number(counts[0]?.total_modules) !== Number(counts[0]?.completed_modules)
    ) {
      res.status(403).json({ message: "Complete every module before taking the final exam" });
      return;
    }

    const attempts = await query(
      "SELECT id, allow_reexam FROM final_exam_submissions WHERE student_id = ? AND course_id = ? ORDER BY created_at DESC, id DESC LIMIT 1",
      [req.student.id, req.params.courseId]
    );
    if (attempts[0] && !attempts[0].allow_reexam) {
      res.status(403).json({ message: "A new final exam attempt has not been allowed" });
      return;
    }

    const questions = await query(
      "SELECT id, question_type, correct_answer, marks FROM final_exam_questions WHERE course_id = ? ORDER BY id ASC",
      [req.params.courseId]
    );
    if (questions.length === 0) {
      res.status(404).json({ message: "Final exam questions are not available yet" });
      return;
    }

    let totalMcqMarks = 0;
    let awardedMcqMarks = 0;

    for (const question of questions) {
      if (question.question_type !== "mcq") continue;
      const marks = Number(question.marks || 1);
      totalMcqMarks += marks;
      const submitted = answers.find((answer) => Number(answer.question_id) === Number(question.id));
      if (
        String(submitted?.answer || "").trim().toUpperCase() ===
        String(question.correct_answer || "").trim().toUpperCase()
      ) {
        awardedMcqMarks += marks;
      }
    }

    const autoScore = totalMcqMarks > 0 ? Math.round((awardedMcqMarks / totalMcqMarks) * 100) : 0;

    await connection.beginTransaction();
    const [result] = await connection.execute(
      "INSERT INTO final_exam_submissions (student_id, course_id, score, status, allow_reexam) VALUES (?, ?, ?, 'pending_review', 0)",
      [req.student.id, req.params.courseId, autoScore]
    );

    for (const question of questions) {
      const submitted = answers.find((answer) => Number(answer.question_id) === Number(question.id));
      const answer = String(submitted?.answer || "");
      const marksAwarded =
        question.question_type === "mcq" &&
        answer.trim().toUpperCase() === String(question.correct_answer || "").trim().toUpperCase()
          ? Number(question.marks || 1)
          : 0;

      await connection.execute(
        "INSERT INTO final_exam_answers (submission_id, question_id, answer, marks_awarded) VALUES (?, ?, ?, ?)",
        [result.insertId, question.id, answer, marksAwarded]
      );
    }

    if (attempts[0]) {
      await connection.execute("UPDATE final_exam_submissions SET allow_reexam = 0 WHERE id = ?", [attempts[0].id]);
    }

    await connection.commit();
    res.status(201).json({
      message: "Final exam submitted for admin review",
      submission_id: result.insertId,
      auto_score: autoScore,
      status: "pending_review"
    });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

router.get("/certificates", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          cert.id,
          cert.certificate_code,
          cert.status,
          cert.issued_date,
          st.full_name AS student_name,
          c.id AS course_id,
          c.title AS course_title
        FROM student_certificates cert
        JOIN students st ON st.id = cert.student_id
        JOIN courses c ON c.id = cert.course_id
        WHERE cert.student_id = ?
        ORDER BY cert.issued_date DESC, cert.id DESC
      `,
      [req.student.id]
    );

    res.json(rows);
  } catch (error) {
    next(error);
  }
});

export default router;
