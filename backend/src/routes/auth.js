import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import { query } from "../db.js";
import { requireAdmin } from "../middleware/auth.js";
import { requireStudent } from "../middleware/studentAuth.js";

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || "stekora-dev-secret";

function createToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
}

router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const admins = await query(
      "SELECT id, name, email, password_hash FROM admins WHERE email = ? LIMIT 1",
      [email]
    );

    const admin = admins[0];
    if (!admin) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    const passwordMatches = await bcrypt.compare(password, admin.password_hash);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    const token = createToken({ id: admin.id, role: "admin" });

    res.json({
      token,
      user: { id: admin.id, email: admin.email, role: "admin", name: admin.name }
    });
  } catch (error) {
    console.error("Admin login failed", error);
    res.status(500).json({ message: "Admin login failed" });
  }
});

router.post("/student/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const students = await query(
      "SELECT id, full_name, email, phone, password_hash, status FROM students WHERE email = ? LIMIT 1",
      [email]
    );

    const student = students[0];
    if (!student) {
      return res.status(401).json({ message: "Invalid student credentials" });
    }

    if (student.status === "blocked") {
      return res.status(403).json({ message: "Your account is blocked" });
    }

    const passwordMatches = await bcrypt.compare(password, student.password_hash);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid student credentials" });
    }

    const token = createToken({ id: student.id, role: "student" });

    res.json({
      token,
      student: {
        id: student.id,
        full_name: student.full_name,
        email: student.email,
        phone: student.phone,
        role: "student"
      }
    });
  } catch (error) {
    console.error("Student login failed", error);
    res.status(500).json({ message: "Student login failed" });
  }
});

async function changePassword(req, res, account) {
  try {
    const currentPassword = String(req.body.currentPassword || "");
    const newPassword = String(req.body.newPassword || "");

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "Current and new passwords are required" });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: "New password must contain at least 8 characters" });
    }

    const isAdmin = account === "admin";
    const accountId = isAdmin ? req.admin.id : req.student.id;
    const table = isAdmin ? "admins" : "students";
    const rows = await query(
      `SELECT id, password_hash FROM ${table} WHERE id = ? LIMIT 1`,
      [accountId]
    );
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }

    const passwordMatches = await bcrypt.compare(currentPassword, user.password_hash);
    if (!passwordMatches) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    const samePassword = await bcrypt.compare(newPassword, user.password_hash);
    if (samePassword) {
      return res.status(400).json({ message: "New password must be different from the current password" });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await query(`UPDATE ${table} SET password_hash = ? WHERE id = ?`, [
      passwordHash,
      accountId
    ]);

    return res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(`${account} password change failed`, error);
    return res.status(500).json({ message: "Password change failed" });
  }
}

router.patch("/admin/password", requireAdmin, (req, res) =>
  changePassword(req, res, "admin")
);

router.patch("/student/password", requireStudent, (req, res) =>
  changePassword(req, res, "student")
);

export default router;
