import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { query } from "../db.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.resolve(__dirname, "../../uploads/products");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname);
    const safeBase = path
      .basename(file.originalname, extension)
      .replace(/[^a-z0-9_-]/gi, "-")
      .toLowerCase();
    cb(null, `${Date.now()}-${safeBase}${extension}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed"));
    }
    cb(null, true);
  }
});

router.get("/", async (_req, res) => {
  try {
    const products = await query(
      `SELECT id, title, description, price, discount, image_url, created_at
       FROM products
       ORDER BY created_at DESC`
    );

    res.json(products);
  } catch (error) {
    console.error("Failed to load products", error);
    res.status(500).json({ message: "Failed to load products" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description = "", price, discount = 0, image_url = "" } = req.body;
    const savedImageUrl = req.file ? `/uploads/products/${req.file.filename}` : image_url;

    if (!title || price === undefined || price === "") {
      return res.status(400).json({ message: "Title and price are required" });
    }

    const result = await query(
      `INSERT INTO products (title, description, price, discount, image_url)
       VALUES (?, ?, ?, ?, ?)`,
      [title, description, price, discount, savedImageUrl]
    );

    res.status(201).json({
      message: "Product created",
      product: {
        id: result.insertId,
        title,
        description,
        price,
        discount,
        image_url: savedImageUrl
      }
    });
  } catch (error) {
    console.error("Failed to create product", error);
    res.status(500).json({ message: "Failed to create product" });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description = "", price, discount = 0, image_url = "" } = req.body;
    const savedImageUrl = req.file ? `/uploads/products/${req.file.filename}` : image_url;

    if (!title || price === undefined || price === "") {
      return res.status(400).json({ message: "Title and price are required" });
    }

    const result = await query(
      `UPDATE products
       SET title = ?, description = ?, price = ?, discount = ?, image_url = ?
       WHERE id = ?`,
      [title, description, price, discount, savedImageUrl, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated",
      product: { id: Number(id), title, description, price, discount, image_url: savedImageUrl }
    });
  } catch (error) {
    console.error("Failed to update product", error);
    res.status(500).json({ message: "Failed to update product" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await query("DELETE FROM products WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (error) {
    console.error("Failed to delete product", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;
