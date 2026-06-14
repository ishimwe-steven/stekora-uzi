import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config({ path: new URL("../.env", import.meta.url) });

const admin = {
  name: "Stekora Admin",
  email: "admin@stekoratech.com",
  password: "Admin@12345"
};

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "stekora_tech"
});

try {
  const [existing] = await connection.execute(
    "SELECT id FROM admins WHERE email = ? LIMIT 1",
    [admin.email]
  );

  const passwordHash = await bcrypt.hash(admin.password, 10);

  if (existing.length > 0) {
    await connection.execute(
      "UPDATE admins SET name = ?, password_hash = ? WHERE email = ?",
      [admin.name, passwordHash, admin.email]
    );
    console.log(`Admin updated: ${admin.email}`);
  } else {
    await connection.execute(
      "INSERT INTO admins (name, email, password_hash) VALUES (?, ?, ?)",
      [admin.name, admin.email, passwordHash]
    );
    console.log(`Admin created: ${admin.email}`);
  }

  console.log(`Admin password: ${admin.password}`);
} finally {
  await connection.end();
}
