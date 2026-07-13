import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { query } from "../db.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.resolve(
  __dirname,
  "../../uploads/products"
);

fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, uploadsDir);
  },

  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname);

    const safeBase = path
      .basename(file.originalname, extension)
      .replace(/[^a-z0-9_-]/gi, "-")
      .toLowerCase();

    callback(
      null,
      `${Date.now()}-${safeBase}${extension.toLowerCase()}`
    );
  },
});

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (_req, file, callback) => {
    if (!file.mimetype.startsWith("image/")) {
      callback(new Error("Only image files are allowed"));
      return;
    }

    callback(null, true);
  },
});

const normalizeProduct = (body, uploadedFile) => ({
  title: String(body.title || "").trim(),

  description: String(body.description || "").trim(),

  full_description: String(
    body.full_description || ""
  ).trim(),

  category:
    String(body.category || "Product").trim() ||
    "Product",

  price: Number(body.price || 0),

  discount: Number(body.discount || 0),

  stock_quantity: Math.max(
    0,
    Number.parseInt(
      body.stock_quantity || "0",
      10
    ) || 0
  ),

  specifications: String(
    body.specifications || ""
  ).trim(),

  image_url: uploadedFile
    ? `/uploads/products/${uploadedFile.filename}`
    : String(body.image_url || "").trim(),
});

function validateProductId(req, res, next) {
  const productId = Number.parseInt(req.params.id, 10);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      message: "Invalid product ID",
    });
  }

  req.productId = productId;
  next();
}

/*
|--------------------------------------------------------------------------
| GET ALL PRODUCTS
|--------------------------------------------------------------------------
*/

router.get("/", async (_req, res) => {
  try {
    const products = await query(`
      SELECT
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
      ORDER BY created_at DESC, id DESC
    `);

    res.json(products);
  } catch (error) {
    console.error("Failed to load products", error);

    res.status(500).json({
      message: "Failed to load products",
    });
  }
});

/*
|--------------------------------------------------------------------------
| GET ONE PRODUCT
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  validateProductId,
  async (req, res) => {
    try {
      const products = await query(
        `
          SELECT
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
          LIMIT 1
        `,
        [req.productId]
      );

      const product = products[0];

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json(product);
    } catch (error) {
      console.error(
        "Failed to load product details",
        error
      );

      res.status(500).json({
        message: "Failed to load product details",
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| CREATE PRODUCT
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    try {
      const product = normalizeProduct(
        req.body,
        req.file
      );

      if (
        !product.title ||
        !Number.isFinite(product.price) ||
        product.price < 0
      ) {
        return res.status(400).json({
          message:
            "Title and a valid price are required",
        });
      }

      const result = await query(
        `
          INSERT INTO products
          (
            title,
            description,
            full_description,
            category,
            price,
            discount,
            stock_quantity,
            specifications,
            image_url
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
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
        ]
      );

      res.status(201).json({
        message: "Product created",

        product: {
          id: result.insertId,
          ...product,
        },
      });
    } catch (error) {
      console.error(
        "Failed to create product",
        error
      );

      res.status(500).json({
        message:
          error.message ||
          "Failed to create product",
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| UPDATE PRODUCT
|--------------------------------------------------------------------------
*/

router.put(
  "/:id",
  validateProductId,
  upload.single("image"),
  async (req, res) => {
    try {
      const product = normalizeProduct(
        req.body,
        req.file
      );

      if (
        !product.title ||
        !Number.isFinite(product.price) ||
        product.price < 0
      ) {
        return res.status(400).json({
          message:
            "Title and a valid price are required",
        });
      }

      const result = await query(
        `
          UPDATE products
          SET
            title = ?,
            description = ?,
            full_description = ?,
            category = ?,
            price = ?,
            discount = ?,
            stock_quantity = ?,
            specifications = ?,
            image_url = ?
          WHERE id = ?
        `,
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
          req.productId,
        ]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json({
        message: "Product updated",

        product: {
          id: req.productId,
          ...product,
        },
      });
    } catch (error) {
      console.error(
        "Failed to update product",
        error
      );

      res.status(500).json({
        message:
          error.message ||
          "Failed to update product",
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| DELETE PRODUCT
|--------------------------------------------------------------------------
*/

router.delete(
  "/:id",
  validateProductId,
  async (req, res) => {
    try {
      const products = await query(
        `
          SELECT image_url
          FROM products
          WHERE id = ?
          LIMIT 1
        `,
        [req.productId]
      );

      const product = products[0];

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      const result = await query(
        "DELETE FROM products WHERE id = ?",
        [req.productId]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (
        product.image_url &&
        product.image_url.startsWith(
          "/uploads/products/"
        )
      ) {
        const imageName = path.basename(
          product.image_url
        );

        const imagePath = path.join(
          uploadsDir,
          imageName
        );

        if (fs.existsSync(imagePath)) {
          try {
            fs.unlinkSync(imagePath);
          } catch (fileError) {
            console.error(
              "Failed to delete product image",
              fileError
            );
          }
        }
      }

      res.json({
        message: "Product deleted",
      });
    } catch (error) {
      console.error(
        "Failed to delete product",
        error
      );

      res.status(500).json({
        message: "Failed to delete product",
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| MULTER / ROUTE ERROR HANDLER
|--------------------------------------------------------------------------
*/

router.use((error, _req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      message:
        error.code === "LIMIT_FILE_SIZE"
          ? "Product image must not exceed 5 MB"
          : error.message,
    });
  }

  if (
    error?.message ===
    "Only image files are allowed"
  ) {
    return res.status(400).json({
      message: error.message,
    });
  }

  next(error);
});

export default router;