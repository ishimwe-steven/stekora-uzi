import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "stekora-dev-secret";

export function requireStudent(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    res.status(401).json({ message: "Student authorization required" });
    return;
  }

  try {
    const payload = jwt.verify(token, jwtSecret);

    if (payload.role !== "student") {
      res.status(403).json({ message: "Student account required" });
      return;
    }

    req.student = { id: Number(payload.id), role: payload.role };
    next();
  } catch {
    res.status(401).json({ message: "Student session is invalid or expired" });
  }
}
