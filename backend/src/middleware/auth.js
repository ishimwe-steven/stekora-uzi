import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "stekora-dev-secret";

export function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    return res.status(401).json({ message: "Admin authorization required" });
  }

  try {
    const payload = jwt.verify(token, jwtSecret);

    if (payload.role !== "admin") {
      return res.status(403).json({ message: "Admin account required" });
    }

    req.admin = { id: Number(payload.id), role: payload.role };
    next();
  } catch {
    return res.status(401).json({ message: "Admin session is invalid or expired" });
  }
}
