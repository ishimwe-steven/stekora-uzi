CREATE DATABASE IF NOT EXISTS stekora_tech;
USE stekora_tech;

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(140) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  phone VARCHAR(40),
  password_hash VARCHAR(255) NOT NULL,
  status ENUM('active','blocked') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  description TEXT,
  category VARCHAR(80),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS modules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(160) NOT NULL,
  order_number INT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS materials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  module_id INT NOT NULL,
  title VARCHAR(160) NOT NULL,
  content TEXT,
  youtube_url VARCHAR(255),
  file_url VARCHAR(255),
  FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS module_quizzes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  module_id INT NOT NULL,
  question TEXT NOT NULL,
  question_type ENUM('mcq','open') DEFAULT 'mcq',
  options_json JSON,
  correct_answer TEXT,
  marks INT DEFAULT 1,
  FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS module_completions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  module_id INT NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_completion (student_id, module_id)
);

CREATE TABLE IF NOT EXISTS student_module_grades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  module_id INT NOT NULL,
  score DECIMAL(5,2) NOT NULL,
  passed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  status ENUM('started','completed') DEFAULT 'started',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_student_course (student_id, course_id)
);

CREATE TABLE IF NOT EXISTS final_exam_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  question TEXT NOT NULL,
  question_type ENUM('mcq','open') NOT NULL,
  options_json JSON,
  correct_answer TEXT,
  marks INT DEFAULT 1,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS final_exam_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  score DECIMAL(5,2) DEFAULT 0,
  status ENUM('pending_review','approved','rejected') DEFAULT 'pending_review',
  allow_reexam BOOLEAN DEFAULT FALSE,
  reviewed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS final_exam_answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  submission_id INT NOT NULL,
  question_id INT NOT NULL,
  answer TEXT,
  marks_awarded DECIMAL(5,2) DEFAULT 0,
  FOREIGN KEY (submission_id) REFERENCES final_exam_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_certificates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  submission_id INT NOT NULL,
  certificate_code VARCHAR(80) NOT NULL UNIQUE,
  status ENUM('verified','revoked') DEFAULT 'verified',
  issued_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  discount DECIMAL(10,2) DEFAULT 0,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
