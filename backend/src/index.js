import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import adminRoutes from "./routes/adminPanel.js";
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";
import finalExamRoutes from "./routes/finalExam.js";
import paymentSettingsRoutes from "./routes/paymentSettings.js";
import productRoutes from "./routes/products.js";
import studentRoutes from "./routes/students.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// backend/uploads
const uploadsDir = path.resolve(__dirname, "../uploads");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://stekoratech.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(uploadsDir));
app.use("/api/uploads", express.static(uploadsDir));

// Debug route for checking uploads path
app.get("/api/debug/uploads", (_req, res) => {
  res.json({
    uploadsDir,
    uploadsDirExists: fs.existsSync(uploadsDir),
    productsDir: path.join(uploadsDir, "products"),
    productsDirExists: fs.existsSync(path.join(uploadsDir, "products")),
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    app: "Stekora Tech API",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/final-exam", finalExamRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

// Public manual payment settings
app.use("/api/payment-settings", paymentSettingsRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.path}`,
  });
});

app.listen(port, () => {
  console.log(`Stekora Tech API running on port ${port}`);
});