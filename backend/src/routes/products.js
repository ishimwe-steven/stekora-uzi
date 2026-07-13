import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { query } from "../db.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.resolve(__dirname, "../../uploads/products");

fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
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
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image files are allowed"));
      return;
    }
    cb(null, true);
  }
});

const normalizeProduct = (body, uploadedFile) => ({
  title: String(body.title || "").trim(),
  description: String(body.description || "").trim(),
  full_description: String(body.full_description || "").trim(),
  category: String(body.category || "Product").trim() || "Product",
  price: Number(body.price || 0),
  discount: Number(body.discount || 0),
  stock_quantity: Math.max(0, Number.parseInt(body.stock_quantity || "0", 10) || 0),
  specifications: String(body.specifications || "").trim(),
  image_url: uploadedFile
    ? `/uploads/products/${uploadedFile.filename}`
    : String(body.image_url || "").trim()
});

router.get("/", async (_req, res) => {
  try {
    const products = await query(
      `SELECT
         id,
         title,
         description,
         full_description,
         category,
         price,
         discount,
         stock_quantity,
         specifications,
         image_url,
         created_at
       FROM products
       ORDER BY created_at DESC, id DESC`
    );

    res.json(products);
  } catch (error) {
    console.error("Failed to load products", error);
    res.status(500).json({ message: "Failed to load products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await query(
      `SELECT
         id,
         title,
         description,
         full_description,
         category,
         price,
         discount,
         stock_quantity,
         specifications,
         image_url,
         created_at
       FROM products
       WHERE id = ?
       LIMIT 1`,
      [req.params.id]
    );

    if (!products.length) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(products[0]);
  } catch (error) {
    console.error("Failed to load product", error);
    res.status(500).json({ message: "Failed to load product" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const product = normalizeProduct(req.body, req.file);

    if (!product.title || !Number.isFinite(product.price) || product.price < 0) {
      res.status(400).json({ message: "Title and a valid price are required" });
      return;
    }

    const result = await query(
      `INSERT INTO products
         (title, description, full_description, category, price, discount,
          stock_quantity, specifications, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        product.title,
        product.description,
        product.full_description,
        product.category,
        product.price,
        product.discount,
        product.stock_quantity,
        product.specifications,
        product.image_url
      ]
    );

    res.status(201).json({
      message: "Product created",
      product: { id: result.insertId, ...product }
    });
  } catch (error) {
    console.error("Failed to create product", error);
    res.status(500).json({ message: error.message || "Failed to create product" });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const product = normalizeProduct(req.body, req.file);

    if (!product.title || !Number.isFinite(product.price) || product.price < 0) {
      res.status(400).json({ message: "Title and a valid price are required" });
      return;
    }

    const result = await query(
      `UPDATE products
       SET title = ?, description = ?, full_description = ?, category = ?,
           price = ?, discount = ?, stock_quantity = ?, specifications = ?, image_url = ?
       WHERE id = ?`,
      [
        product.title,
        product.description,
        product.full_description,
        product.category,
        product.price,
        product.discount,
        product.stock_quantity,
        product.specifications,
        product.image_url,
        req.params.id
      ]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json({
      message: "Product updated",
      product: { id: Number(req.params.id), ...product }
    });
  } catch (error) {
    console.error("Failed to update product", error);
    res.status(500).json({ message: error.message || "Failed to update product" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await query("DELETE FROM products WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json({ message: "Product deleted" });
  } catch (error) {
    console.error("Failed to delete product", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;
