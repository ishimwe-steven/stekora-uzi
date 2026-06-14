import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { pool, query } from "../db.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../../uploads/courses");
const materialUploadDir = path.join(__dirname, "../../uploads/materials");

fs.mkdirSync(uploadDir, { recursive: true });
fs.mkdirSync(materialUploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, "-");
    cb(null, `${Date.now()}-${safeName}`);
  }
});

const upload = multer({ storage });

const materialStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, materialUploadDir),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, "-");
    cb(null, `${Date.now()}-${safeName}`);
  }
});

const materialUpload = multer({ storage: materialStorage });

function normalizeCourse(row) {
  return {
    ...row,
    name: row.title,
    modules_count: Number(row.modules_count || 0)
  };
}

function parseModules(value) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => String(item || "").trim()).filter(Boolean);
  } catch {
    return [];
  }
}

router.get("/", async (_req, res, next) => {
  try {
    const rows = await query(`
      SELECT
        c.id,
        c.title,
        c.description,
        c.category,
        c.image_url,
        c.created_at,
        COUNT(m.id) AS modules_count
      FROM courses c
      LEFT JOIN modules m ON m.course_id = c.id
      GROUP BY c.id
      ORDER BY c.id DESC
    `);

    res.json(rows.map(normalizeCourse));
  } catch (error) {
    next(error);
  }
});

router.post("/", upload.single("image"), async (req, res, next) => {
  const title = String(req.body.title || req.body.name || "").trim();
  const description = String(req.body.description || "").trim();
  const category = String(req.body.category || "Development").trim();
  const imageUrl = req.file
    ? `/uploads/courses/${req.file.filename}`
    : String(req.body.image_url || "").trim();
  const modules = parseModules(req.body.modules);

  if (!title) {
    res.status(400).json({ message: "Course title is required" });
    return;
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.execute(
      "INSERT INTO courses (title, description, category, image_url) VALUES (?, ?, ?, ?)",
      [title, description, category, imageUrl]
    );

    const courseId = result.insertId;

    for (let index = 0; index < modules.length; index += 1) {
      await connection.execute(
        "INSERT INTO modules (course_id, title, order_number) VALUES (?, ?, ?)",
        [courseId, modules[index], index + 1]
      );
    }

    await connection.commit();
    res.status(201).json({ id: courseId, title, name: title, description, category, image_url: imageUrl });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

router.put("/:id", upload.single("image"), async (req, res, next) => {
  const title = String(req.body.title || req.body.name || "").trim();
  const description = String(req.body.description || "").trim();
  const category = String(req.body.category || "Development").trim();
  const imageUrl = req.file
    ? `/uploads/courses/${req.file.filename}`
    : String(req.body.image_url || "").trim();

  if (!title) {
    res.status(400).json({ message: "Course title is required" });
    return;
  }

  try {
    const [result] = await pool.execute(
      "UPDATE courses SET title = ?, description = ?, category = ?, image_url = ? WHERE id = ?",
      [title, description, category, imageUrl, req.params.id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.json({ id: Number(req.params.id), title, name: title, description, category, image_url: imageUrl });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const [result] = await pool.execute("DELETE FROM courses WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.json({ message: "Course deleted" });
  } catch (error) {
    next(error);
  }
});

router.get("/:courseId/modules", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          m.id,
          m.course_id,
          m.title,
          m.order_number,
          COUNT(mt.id) AS materials_count
        FROM modules m
        LEFT JOIN materials mt ON mt.module_id = m.id
        WHERE m.course_id = ?
        GROUP BY m.id
        ORDER BY m.order_number ASC, m.id ASC
      `,
      [req.params.courseId]
    );

    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.post("/:courseId/modules", async (req, res, next) => {
  const title = String(req.body.title || "").trim();

  if (!title) {
    res.status(400).json({ message: "Module title is required" });
    return;
  }

  try {
    const rows = await query("SELECT COALESCE(MAX(order_number), 0) + 1 AS next_order FROM modules WHERE course_id = ?", [
      req.params.courseId
    ]);
    const orderNumber = rows[0]?.next_order || 1;
    const [result] = await pool.execute("INSERT INTO modules (course_id, title, order_number) VALUES (?, ?, ?)", [
      req.params.courseId,
      title,
      orderNumber
    ]);

    res.status(201).json({ id: result.insertId, course_id: Number(req.params.courseId), title, order_number: orderNumber });
  } catch (error) {
    next(error);
  }
});

router.get("/modules/:moduleId/materials", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          mt.id,
          mt.module_id,
          mt.title,
          mt.content,
          mt.youtube_url,
          mt.file_url,
          m.title AS module_title,
          c.title AS course_title
        FROM materials mt
        JOIN modules m ON m.id = mt.module_id
        JOIN courses c ON c.id = m.course_id
        WHERE mt.module_id = ?
        ORDER BY mt.id DESC
      `,
      [req.params.moduleId]
    );

    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.post("/modules/:moduleId/materials", materialUpload.single("file"), async (req, res, next) => {
  const title = String(req.body.title || "").trim();
  const content = String(req.body.content || "").trim();
  const youtubeUrl = String(req.body.youtube_url || "").trim();
  const fileUrl = req.file
    ? `/uploads/materials/${req.file.filename}`
    : String(req.body.file_url || "").trim();

  if (!title) {
    res.status(400).json({ message: "Material title is required" });
    return;
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO materials (module_id, title, content, youtube_url, file_url) VALUES (?, ?, ?, ?, ?)",
      [req.params.moduleId, title, content, youtubeUrl, fileUrl]
    );

    res.status(201).json({
      id: result.insertId,
      module_id: Number(req.params.moduleId),
      title,
      content,
      youtube_url: youtubeUrl,
      file_url: fileUrl
    });
  } catch (error) {
    next(error);
  }
});

router.put("/materials/:id", materialUpload.single("file"), async (req, res, next) => {
  const title = String(req.body.title || "").trim();
  const content = String(req.body.content || "").trim();
  const youtubeUrl = String(req.body.youtube_url || "").trim();
  const fileUrl = req.file
    ? `/uploads/materials/${req.file.filename}`
    : String(req.body.file_url || "").trim();

  if (!title) {
    res.status(400).json({ message: "Material title is required" });
    return;
  }

  try {
    const [result] = await pool.execute(
      "UPDATE materials SET title = ?, content = ?, youtube_url = ?, file_url = ? WHERE id = ?",
      [title, content, youtubeUrl, fileUrl, req.params.id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Material not found" });
      return;
    }

    res.json({ id: Number(req.params.id), title, content, youtube_url: youtubeUrl, file_url: fileUrl });
  } catch (error) {
    next(error);
  }
});

router.delete("/materials/:id", async (req, res, next) => {
  try {
    const [result] = await pool.execute("DELETE FROM materials WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Material not found" });
      return;
    }

    res.json({ message: "Material deleted" });
  } catch (error) {
    next(error);
  }
});

router.get("/modules/:moduleId/quiz", async (req, res, next) => {
  try {
    const rows = await query(
      `
        SELECT
          q.id,
          q.module_id,
          q.question,
          q.question_type,
          q.options_json,
          q.correct_answer,
          q.marks,
          m.title AS module_title,
          c.title AS course_title
        FROM module_quizzes q
        JOIN modules m ON m.id = q.module_id
        JOIN courses c ON c.id = m.course_id
        WHERE q.module_id = ?
        ORDER BY q.id ASC
      `,
      [req.params.moduleId]
    );

    res.json(
      rows.map((row) => {
        let options = {};
        try {
          options = typeof row.options_json === "string" ? JSON.parse(row.options_json || "{}") : row.options_json || {};
        } catch {
          options = {};
        }

        return {
          ...row,
          options,
          option_a: options.A || "",
          option_b: options.B || "",
          option_c: options.C || "",
          option_d: options.D || "",
          correct_option: row.correct_answer || ""
        };
      })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/modules/:moduleId/quiz", async (req, res, next) => {
  const questions = Array.isArray(req.body.questions) ? req.body.questions : [];
  const cleanQuestions = questions
    .map((question) => ({
      question: String(question.question || "").trim(),
      question_type: String(question.question_type || "mcq").trim(),
      option_a: String(question.option_a || "").trim(),
      option_b: String(question.option_b || "").trim(),
      option_c: String(question.option_c || "").trim(),
      option_d: String(question.option_d || "").trim(),
      correct_option: String(question.correct_option || question.correct_answer || "").trim(),
      marks: Number(question.marks || 1)
    }))
    .filter((question) => question.question);

  if (cleanQuestions.length < 3) {
    res.status(400).json({ message: "Assessment must have at least 3 questions" });
    return;
  }

  const hasInvalidQuestion = cleanQuestions.some((question) => {
    if (question.question_type === "open") return !question.question;
    return !question.option_a || !question.option_b || !question.correct_option;
  });

  if (hasInvalidQuestion) {
    res.status(400).json({ message: "Each MCQ needs a question, option A, option B, and correct answer" });
    return;
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    await connection.execute("DELETE FROM module_quizzes WHERE module_id = ?", [req.params.moduleId]);

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
        "INSERT INTO module_quizzes (module_id, question, question_type, options_json, correct_answer, marks) VALUES (?, ?, ?, ?, ?, ?)",
        [req.params.moduleId, item.question, item.question_type, options, item.correct_option, item.marks]
      );
    }

    await connection.commit();
    res.status(201).json({ message: "Assessment saved", count: cleanQuestions.length });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

router.delete("/quiz/:id", async (req, res, next) => {
  try {
    const [result] = await pool.execute("DELETE FROM module_quizzes WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Question not found" });
      return;
    }

    res.json({ message: "Question deleted" });
  } catch (error) {
    next(error);
  }
});

router.delete("/modules/:id", async (req, res, next) => {
  try {
    const [result] = await pool.execute("DELETE FROM modules WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Module not found" });
      return;
    }

    res.json({ message: "Module deleted" });
  } catch (error) {
    next(error);
  }
});

export default router;
