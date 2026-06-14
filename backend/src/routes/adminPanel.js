import express from "express";
import { pool, query } from "../db.js";

const router = express.Router();

router.get("/overview", async (_req, res, next) => {
  try {
    const [students, courses, submissions, certificates] = await Promise.all([
      query("SELECT COUNT(*) AS total FROM students"),
      query("SELECT COUNT(*) AS total FROM courses"),
      query("SELECT COUNT(*) AS total FROM final_exam_submissions"),
      query("SELECT COUNT(*) AS total FROM student_certificates")
    ]);

    res.json({
      students: Number(students[0]?.total || 0),
      courses: Number(courses[0]?.total || 0),
      submissions: Number(submissions[0]?.total || 0),
      certificates: Number(certificates[0]?.total || 0)
    });
  } catch (error) {
    next(error);
  }
});

router.get("/students", async (_req, res, next) => {
  try {
    const rows = await query(`
      SELECT
        st.id,
        st.full_name,
        st.email,
        st.phone,
        st.status,
        st.created_at,
        COUNT(DISTINCT sc.course_id) AS courses_started,
        COUNT(DISTINCT CASE WHEN sc.status = 'completed' THEN sc.course_id END) AS courses_completed,
        COUNT(DISTINCT cert.id) AS certificates_count
      FROM students st
      LEFT JOIN student_courses sc ON sc.student_id = st.id
      LEFT JOIN student_certificates cert ON cert.student_id = st.id
      GROUP BY st.id
      ORDER BY st.created_at DESC, st.id DESC
    `);

    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.patch("/students/:studentId/status", async (req, res, next) => {
  const status = String(req.body.status || "").trim();

  if (!["active", "blocked"].includes(status)) {
    res.status(400).json({ message: "Status must be active or blocked" });
    return;
  }

  try {
    const [result] = await pool.execute(
      "UPDATE students SET status = ? WHERE id = ?",
      [status, req.params.studentId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.json({ message: "Student status updated", status });
  } catch (error) {
    next(error);
  }
});

export default router;
