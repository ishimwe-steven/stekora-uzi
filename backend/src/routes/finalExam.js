import express from "express";
import { pool, query } from "../db.js";
import { createCertificateCode } from "../utils/certificateCode.js";

const router = express.Router();

function normalizeQuestion(row) {
  let options = {};
  try {
    options = typeof row.options_json === "string" ? JSON.parse(row.options_json || "{}") : row.options_json || {};
  } catch {
    options = {};
  }

  return {
    ...row,
    type: row.question_type,
    options,
    option_a: options.A || "",
    option_b: options.B || "",
    option_c: options.C || "",
    option_d: options.D || "",
    correct_option: row.correct_answer || ""
  };
}

function cleanQuestion(question) {
  return {
    question: String(question.question || "").trim(),
    question_type: String(question.question_type || question.type || "mcq").trim(),
    option_a: String(question.option_a || "").trim(),
    option_b: String(question.option_b || "").trim(),
    option_c: String(question.option_c || "").trim(),
    option_d: String(question.option_d || "").trim(),
    correct_option: String(question.correct_option || question.correct_answer || "").trim(),
    marks: Number(question.marks || 1)
  };
}

router.get("/questions/:courseId", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          q.id,
          q.course_id,
          q.question,
          q.question_type,
          q.options_json,
          q.correct_answer,
          q.marks,
          c.title AS course_title
        FROM final_exam_questions q
        JOIN courses c ON c.id = q.course_id
        WHERE q.course_id = ?
        ORDER BY q.id ASC
      `,
      [req.params.courseId]
    );

    res.json(rows.map(normalizeQuestion));
  } catch (error) {
    next(error);
  }
});

router.post("/questions/:courseId", async (req, res, next) => {
  const questions = Array.isArray(req.body.questions) ? req.body.questions.map(cleanQuestion) : [];
  const cleanQuestions = questions.filter((question) => question.question);

  if (cleanQuestions.length === 0) {
    res.status(400).json({ message: "Add at least one final exam question" });
    return;
  }

  const invalid = cleanQuestions.some((question) => {
    if (question.question_type === "open") return false;
    return !question.option_a || !question.option_b || !question.correct_option;
  });

  if (invalid) {
    res.status(400).json({ message: "Each MCQ needs option A, option B, and a correct answer" });
    return;
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    await connection.execute("DELETE FROM final_exam_questions WHERE course_id = ?", [req.params.courseId]);

    for (const item of cleanQuestions) {
      const options = item.question_type === "mcq"
        ? JSON.stringify({
            A: item.option_a,
            B: item.option_b,
            C: item.option_c,
            D: item.option_d
          })
        : JSON.stringify({});

      await connection.execute(
        "INSERT INTO final_exam_questions (course_id, question, question_type, options_json, correct_answer, marks) VALUES (?, ?, ?, ?, ?, ?)",
        [req.params.courseId, item.question, item.question_type, options, item.correct_option, item.marks]
      );
    }

    await connection.commit();
    res.status(201).json({ message: "Final exam questions saved", count: cleanQuestions.length });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

router.delete("/questions/:questionId", async (req, res, next) => {
  try {
    const [result] = await pool.execute("DELETE FROM final_exam_questions WHERE id = ?", [req.params.questionId]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Question not found" });
      return;
    }

    res.json({ message: "Question deleted" });
  } catch (error) {
    next(error);
  }
});

router.get("/submissions", async (_req, res, next) => {
  try {
    const rows = await query(`
      SELECT
        s.id,
        s.student_id,
        st.full_name AS student_name,
        st.email AS student_email,
        c.title AS course_title,
        s.course_id,
        s.score,
        s.status,
        s.allow_reexam,
        s.reviewed_at,
        s.created_at,
        cert.certificate_code
      FROM final_exam_submissions s
      JOIN students st ON st.id = s.student_id
      JOIN courses c ON c.id = s.course_id
      LEFT JOIN student_certificates cert ON cert.submission_id = s.id
      ORDER BY s.created_at DESC
    `);

    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.post("/submit", async (req, res, next) => {
  const studentId = Number(req.body.student_id || req.body.studentId);
  const courseId = Number(req.body.course_id || req.body.courseId);
  const answers = Array.isArray(req.body.answers) ? req.body.answers : [];

  if (!studentId || !courseId) {
    res.status(400).json({ message: "Student and course are required" });
    return;
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const [result] = await connection.execute(
      "INSERT INTO final_exam_submissions (student_id, course_id, score, status) VALUES (?, ?, ?, 'pending_review')",
      [studentId, courseId, 0]
    );

    const submissionId = result.insertId;

    for (const answer of answers) {
      await connection.execute(
        "INSERT INTO final_exam_answers (submission_id, question_id, answer, marks_awarded) VALUES (?, ?, ?, ?)",
        [submissionId, answer.question_id || answer.questionId, String(answer.answer || ""), Number(answer.marks_awarded || 0)]
      );
    }

    await connection.commit();
    res.status(201).json({ message: "Final exam submitted", status: "pending_review", submissionId });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

router.patch("/submissions/:submissionId/review", async (req, res, next) => {
  const score = Number(req.body.score || 0);
  const status = String(req.body.status || (score >= 80 ? "approved" : "rejected"));
  const allowReexam = Boolean(req.body.allow_reexam || req.body.allowReexam);

  try {
    const [result] = await pool.execute(
      "UPDATE final_exam_submissions SET score = ?, status = ?, allow_reexam = ?, reviewed_at = NOW() WHERE id = ?",
      [score, status, allowReexam, req.params.submissionId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Submission not found" });
      return;
    }

    res.json({ message: "Submission reviewed", submissionId: Number(req.params.submissionId), score, status, allow_reexam: allowReexam });
  } catch (error) {
    next(error);
  }
});

router.post("/submissions/:submissionId/certificate", async (req, res, next) => {
  try {
    const rows = await query("SELECT * FROM final_exam_submissions WHERE id = ?", [req.params.submissionId]);
    const submission = rows[0];

    if (!submission) {
      res.status(404).json({ message: "Submission not found" });
      return;
    }

    const existing = await query("SELECT certificate_code FROM student_certificates WHERE submission_id = ?", [req.params.submissionId]);
    if (existing.length > 0) {
      res.json({ message: "Certificate already assigned", certificateCode: existing[0].certificate_code });
      return;
    }

    const certificateCode = createCertificateCode();
    await pool.execute(
      "INSERT INTO student_certificates (student_id, course_id, submission_id, certificate_code, status, issued_date) VALUES (?, ?, ?, ?, 'verified', CURDATE())",
      [submission.student_id, submission.course_id, submission.id, certificateCode]
    );

    await pool.execute("UPDATE final_exam_submissions SET status = 'approved', reviewed_at = NOW() WHERE id = ?", [submission.id]);

    res.status(201).json({ message: "Certificate assigned", submissionId: submission.id, certificateCode });
  } catch (error) {
    next(error);
  }
});

router.get("/certificate/:certificateCode", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          st.full_name AS studentName,
          c.title AS courseName,
          cert.certificate_code AS certificateCode,
          cert.issued_date AS issuedDate,
          cert.status
        FROM student_certificates cert
        JOIN students st ON st.id = cert.student_id
        JOIN courses c ON c.id = cert.course_id
        WHERE cert.certificate_code = ?
      `,
      [req.params.certificateCode]
    );

    if (rows.length === 0) {
      res.status(404).json({ message: "Certificate not found" });
      return;
    }

    res.json({ ...rows[0], companyName: "Stekora Tech Academy" });
  } catch (error) {
    next(error);
  }
});

export default router;
