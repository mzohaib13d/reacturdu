import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chapter36 = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const toggleDemo = () => {
    setShowDemo(!showDemo);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const demoVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 50,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 120, 255, 0.4)",
    },
    tap: { scale: 0.95 },
  };

  // SQL Code Examples
  const createTableSQL = `CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT,
  phone VARCHAR(12),
  address TEXT,
  course TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  const createUsersTableSQL = `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  phone VARCHAR(12),
  address TEXT,
  role TEXT CHECK (role IN ('admin','teacher')) NOT NULL,
  can_edit_students BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  const insertSQL = `INSERT INTO students (name, age, phone, address, course, created_by)
VALUES ('Ali', 20, '03001234567', 'Karachi Block A', 'Mobile Repairing', 1);`;

  const selectSQL = `SELECT * FROM students;`;

  const whereSQL = `SELECT * FROM students WHERE course = 'Mobile Repairing';`;

  const orderBySQL = `SELECT * FROM students ORDER BY age ASC;`;

  const limitSQL = `SELECT * FROM students LIMIT 5;`;

  const paginationSQL = `SELECT * FROM students LIMIT 5 OFFSET 5;`;

  const createCoursesSQL = `CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration TEXT
);`;

  const createEnrollmentsSQL = `CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  course_id INT REFERENCES courses(id),
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  const innerJoinSQL = `SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON courses.id = enrollments.course_id;`;

  const leftJoinSQL = `SELECT students.name, courses.title
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON courses.id = enrollments.course_id;`;

  const rightJoinSQL = `SELECT students.name, courses.title
FROM students
RIGHT JOIN enrollments ON students.id = enrollments.student_id
RIGHT JOIN courses ON courses.id = enrollments.course_id;`;

  const backendDBCode = `import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zohaibtech",
  password: "password",
  port: 5432,
});`;

  const backendStudentsRoute = `import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query(\`
    SELECT students.id, students.name, students.phone, students.course
    FROM students
    ORDER BY students.id DESC
  \`);
  res.json(result.rows);
});

export default router;`;

  const frontendStudentsCode = `import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      {students.map((s) => (
        <p key={s.id}>
          {s.name} — {s.course}
        </p>
      ))}
    </div>
  );
}

export default Students;`;

  const backendServerCode = `import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentsRoutes from "./routes/students.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Zohaibtech backend running on http://localhost:5000");
});`;

  return (
    <motion.div
      className="sql-guide chapter-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: "100vh",
        direction: "rtl",
        fontFamily:
          '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Verdana, Tahoma, sans-serif',
        background: "#fdfdfd",
        color: "#222",
      }}
    >
      {/* Header Section */}
      <motion.header
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
          color: "white",
          padding: "60px 0",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h1
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              fontSize: "2.2rem",
              marginBottom: "20px",
              lineHeight: "2.5rem",
              textAlign: "center",
              width: "100%",
            }}
            dir="rtl"
          >
            📘 Chapter 36 — SQL کی بنیاد + SQL زبان مکمل
          </motion.h1>
          <motion.p
            className="chapter-subtitle2"
            variants={itemVariants}
            style={{
              fontSize: "1.2rem",
              opacity: "0.9",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            PostgreSQL + React Backend Focus — Zohaibtech Project
          </motion.p>
        </div>
      </motion.header>

      {/* Part 2.1: Database Review */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.1 — ڈیٹا بیس کیا ہوتا ہے؟ (مختصر ریویژن)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                ڈیٹا بیس ایک ایسا نظام ہے جہاں ہم:
                <br />
                <br />
                ✅ ڈیٹا محفوظ کرتے ہیں
                <br />
                ✅ ڈیٹا تلاش کرتے ہیں
                <br />
                ✅ ڈیٹا اپڈیٹ کرتے ہیں
                <br />
                ✅ ڈیٹا ڈیلیٹ کرتے ہیں
                <br />
                <br />
                <strong>Zohaibtech سسٹم میں:</strong>
                <br />
                • Students
                <br />
                • Courses
                <br />
                • Teachers
                <br />
                • Users (Admin / Teacher)
                <br />
                • Enrollments
                <br />
                <br />
                یہ سب PostgreSQL ڈیٹا بیس میں محفوظ ہوں گے۔
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.2: What is SQL? */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.2 — SQL کیا ہے؟
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                SQL = Structured Query Language
                <br />
                <br />
                یہ زبان ہم PostgreSQL جیسے ڈیٹا بیس سے بات کرنے کے لیے استعمال
                کرتے ہیں:
              </motion.p>

              <motion.div
                className="file-table"
                variants={itemVariants}
                style={{ marginTop: "20px" }}
              >
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">کام</th>
                      <th className="urdu-text-left">SQL Command</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا داخل کرنا</td>
                      <td className="urdu-text-left">
                        <code>INSERT</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا نکالنا</td>
                      <td className="urdu-text-left">
                        <code>SELECT</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا بدلنا</td>
                      <td className="urdu-text-left">
                        <code>UPDATE</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا مٹانا</td>
                      <td className="urdu-text-left">
                        <code>DELETE</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ٹیبل بنانا</td>
                      <td className="urdu-text-left">
                        <code>CREATE</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ٹیبل ختم کرنا</td>
                      <td className="urdu-text-left">
                        <code>DROP</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.3: Data Types */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.3 — Data Types (ڈیٹا کی اقسام)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                جب ہم table بناتے ہیں تو ہر column کا type بتانا ہوتا ہے۔
              </motion.p>

              <motion.div
                className="file-table"
                variants={itemVariants}
                style={{ marginTop: "20px" }}
              >
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">Type</th>
                      <th className="urdu-text-left">مطلب</th>
                      <th className="urdu-text-left">مثال</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">TEXT</td>
                      <td className="urdu-text-left">الفاظ / جملے</td>
                      <td className="urdu-text-left">name, address</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">INT</td>
                      <td className="urdu-text-left">نمبر</td>
                      <td className="urdu-text-left">age</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">SERIAL</td>
                      <td className="urdu-text-left">خود بڑھنے والا نمبر</td>
                      <td className="urdu-text-left">id</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">BOOLEAN</td>
                      <td className="urdu-text-left">true / false</td>
                      <td className="urdu-text-left">can_edit</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">TIMESTAMP</td>
                      <td className="urdu-text-left">تاریخ اور وقت</td>
                      <td className="urdu-text-left">created_at</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">VARCHAR(12)</td>
                      <td className="urdu-text-left">محدود حروف والا text</td>
                      <td className="urdu-text-left">phone</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/students_table.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(createTableSQL, "create-table")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT,
  phone VARCHAR(12),
  address TEXT,
  course TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.4: Constraints */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.4 — Constraints (قوانین / پابندیاں)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                Constraints وہ rules ہوتے ہیں جو ڈیٹا کو غلط ہونے سے بچاتے ہیں۔
              </motion.p>

              <motion.div
                className="file-table"
                variants={itemVariants}
                style={{ marginTop: "20px" }}
              >
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">Constraint</th>
                      <th className="urdu-text-left">مطلب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">NOT NULL</td>
                      <td className="urdu-text-left">خالی نہیں ہو سکتا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">UNIQUE</td>
                      <td className="urdu-text-left">
                        ایک جیسا دوبارہ نہیں ہو سکتا
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">PRIMARY KEY</td>
                      <td className="urdu-text-left">ہر row کی unique پہچان</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">FOREIGN KEY</td>
                      <td className="urdu-text-left">کسی اور table سے تعلق</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">CHECK</td>
                      <td className="urdu-text-left">شرط لگانا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">DEFAULT</td>
                      <td className="urdu-text-left">default value دینا</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/users_table.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(createUsersTableSQL, "create-users")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  phone VARCHAR(12),
  address TEXT,
  role TEXT CHECK (role IN ('admin','teacher')) NOT NULL,
  can_edit_students BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.5: Primary Key */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.5 — Primary Key کیا ہوتی ہے؟
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                Primary Key وہ column ہوتا ہے جو:
                <br />
                <br />
                ✅ ہر row کو uniquely پہچانتا ہے
                <br />
                ✅ repeat نہیں ہو سکتا
                <br />
                ✅ خالی نہیں ہو سکتا
                <br />
                <br />
                مثال:
                <br />
                <code>id SERIAL PRIMARY KEY</code>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.6: Relationships */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.6 — Relationships (Tables کا آپس میں تعلق)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                Real backend میں tables الگ الگ نہیں ہوتیں — وہ آپس میں جڑی ہوتی
                ہیں۔
                <br />
                <br />
                <strong>مثال:</strong>
                <br />
                • ایک user کئی students create کر سکتا ہے
                <br />• ایک student کئی courses میں enroll ہو سکتا ہے
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/students_relation.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT,
  phone VARCHAR(12),
  address TEXT,
  course TEXT,
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.7: INSERT */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.7 — INSERT (ڈیٹا داخل کرنا)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/insert_students.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(insertSQL, "insert-data")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`INSERT INTO students (name, age, phone, address, course, created_by)
VALUES ('Ali', 20, '03001234567', 'Karachi Block A', 'Mobile Repairing', 1);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.8: SELECT */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.8 — SELECT (ڈیٹا نکالنا)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/select_students.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(selectSQL, "select-data")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT * FROM students;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.9: WHERE */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.9 — WHERE (شرط کے ساتھ ڈیٹا نکالنا)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/where_students.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(whereSQL, "where-clause")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT * FROM students WHERE course = 'Mobile Repairing';`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.10: ORDER BY */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.10 — ORDER BY (ترتیب دینا)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                ASC = چھوٹے سے بڑے
                <br />
                DESC = بڑے سے چھوٹے
              </motion.p>

              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/order_students.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(orderBySQL, "order-by")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT * FROM students ORDER BY age ASC;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.11: LIMIT */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.11 — LIMIT (ریکارڈ محدود کرنا)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                LIMIT page number نہیں ہوتا —<br />
                یہ صرف بتاتا ہے کہ کتنے records واپس چاہئیں۔
              </motion.p>

              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/limit_students.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(limitSQL, "limit")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT * FROM students LIMIT 5;`}
                  </pre>
                </div>
              </motion.div>

              <motion.p
                className="urdu-text"
                variants={itemVariants}
                style={{ marginTop: "15px" }}
              >
                Pagination کے لیے LIMIT + OFFSET
              </motion.p>

              <motion.div
                className="code-block-container"
                variants={itemVariants}
                style={{ marginTop: "10px" }}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(paginationSQL, "pagination")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT * FROM students LIMIT 5 OFFSET 5;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.12: Multiple Tables */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.12 — Multiple Tables کا تصور
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                Real systems میں ایک ہی table کافی نہیں ہوتی۔
                <br />
                <br />
                <strong>Zohaibtech جیسے انسٹیٹیوٹ سسٹم میں:</strong>
                <br />
                • students
                <br />
                • courses
                <br />
                • enrollments
                <br />
                <br />
                الگ الگ tables ہوتی ہیں تاکہ:
                <br />
                ✅ ڈیٹا repeat نہ ہو
                <br />
                ✅ structure صاف رہے
                <br />✅ relationships مضبوط ہوں
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/courses_table.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(createCoursesSQL, "create-courses")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration TEXT
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/enrollments_table.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(
                        createEnrollmentsSQL,
                        "create-enrollments",
                      )
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  course_id INT REFERENCES courses(id),
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.13: JOIN */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.13 — JOIN کیا ہے؟
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                JOIN دو یا زیادہ tables کو جوڑ کر ایک ہی query میں data دکھانے
                کے لیے استعمال ہوتا ہے۔
                <br />
                <br />
                <strong>مثال:</strong>
                <br />
                • Student کا نام
                <br />
                • کون سا course لیا
                <br />
                • کب enroll ہوا
                <br />
                <br />
                یہ سب الگ tables میں ہوتے ہیں —<br />
                JOIN انہیں ایک result میں لے آتا ہے۔
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.14: INNER JOIN */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.14 — INNER JOIN
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                INNER JOIN صرف وہ records دکھاتا ہے جو دونوں tables میں match
                ہوں۔
                <br />
                <br />
                <strong>مطلب:</strong>
                <br />
                👉 صرف وہ students دکھاؤ جو کسی course میں enroll ہیں
              </motion.p>

              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/inner_join.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(innerJoinSQL, "inner-join")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON courses.id = enrollments.course_id;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.15: LEFT JOIN */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.15 — LEFT JOIN
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                LEFT JOIN left table کے سارے records دکھاتا ہے،
                <br />
                چاہے دوسری table میں match ہو یا نہ ہو۔
                <br />
                <br />
                <strong>مطلب:</strong>
                <br />
                👉 تمام students دکھاؤ —<br />
                course ہو تو دکھاؤ، نہ ہو تو NULL
              </motion.p>

              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/left_join.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(leftJoinSQL, "left-join")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT students.name, courses.title
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON courses.id = enrollments.course_id;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.16: RIGHT JOIN */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.16 — RIGHT JOIN
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                RIGHT JOIN right table کے سارے records دکھاتا ہے،
                <br />
                چاہے left table میں match ہو یا نہ ہو۔
                <br />
                <br />
                <strong>مطلب:</strong>
                <br />
                👉 تمام courses دکھاؤ —<br />
                student ہو تو دکھاؤ، نہ ہو تو NULL
              </motion.p>

              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: sql/right_join.sql
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>SQL Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(rightJoinSQL, "right-join")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`SELECT students.name, courses.title
FROM students
RIGHT JOIN enrollments ON students.id = enrollments.student_id
RIGHT JOIN courses ON courses.id = enrollments.course_id;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.17: Backend API with SQL */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.17 — Backend API میں SQL کا استعمال
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: backend/db.js
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>JavaScript Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(backendDBCode, "backend-db")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zohaibtech",
  password: "password",
  port: 5432,
});`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="step-card"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: backend/routes/students.js
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>JavaScript Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(backendStudentsRoute, "backend-route")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query(\`
    SELECT students.id, students.name, students.phone, students.course
    FROM students
    ORDER BY students.id DESC
  \`);
  res.json(result.rows);
});

export default router;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.18: React API Call */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.18 — React سے API call
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: frontend/src/pages/Students.jsx
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>React Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(frontendStudentsCode, "frontend-react")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      {students.map((s) => (
        <p key={s.id}>
          {s.name} — {s.course}
        </p>
      ))}
    </div>
  );
}

export default Students;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2.19: Main Backend Engine */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧩 حصہ 2.19 — Backend کا مین انجن: server.js
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                📄 فائل: backend/server.js
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>JavaScript Code</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(backendServerCode, "server-js")
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentsRoutes from "./routes/students.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Zohaibtech backend running on http://localhost:5000");
});`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Question & Live Demo */}
      <motion.section
        className="demo-section card"
        variants={cardVariants}
        style={{ marginTop: "40px" }}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#0f2027" }}
          >
            🧠 کیا LIMIT اور JOIN واقعی backend میں ضروری ہیں؟
          </motion.h2>

          <motion.div
            className="info-box urdu-text-right success-box"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <strong>✔ LIMIT → Pagination کے لیے</strong>
            <br />
            • جب 1000 students ہوں، تو سب ایک ساتھ نہ دکھائیں
            <br />
            • صرف 10-10 دکھائیں
            <br />
            • User experience بہتر بنائیں
            <br />
            <br />
            <strong>✔ JOIN → Related data دکھانے کے لیے</strong>
            <br />
            • Student کے ساتھ ان کا course دکھائیں
            <br />
            • Teacher کے ساتھ ان کے students دکھائیں
            <br />
            • Enrollments کے ساتھ details دکھائیں
            <br />
            <br />
            <strong>🎯 نتیجہ:</strong> Production backend میں یہ دونوں لازمی
            ہیں!
          </motion.div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <motion.button
              className="pulse-button"
              onClick={toggleDemo}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "sans-serif",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(15, 32, 39, 0.4)",
                margin: "20px 0",
              }}
            >
              {showDemo ? "❌ Close Demo" : "🚀 Live SQL + Backend Demo دیکھیں"}
            </motion.button>
          </div>

          <AnimatePresence>
            {showDemo && (
              <motion.div
                className="portfolio-demo"
                variants={demoVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  background:
                    "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
                  color: "white",
                  padding: "40px",
                  borderRadius: "15px",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                <motion.h3
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "24px",
                  }}
                  variants={itemVariants}
                >
                  🗃️ Zohaibtech Institute System - Live SQL Demo
                </motion.h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "20px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h4 style={{ color: "#00ff88", marginBottom: "10px" }}>
                      📊 CREATE TABLES
                    </h4>
                    <p>Database structure setup</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      CREATE TABLE students (...)
                    </code>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "20px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h4 style={{ color: "#00ff88", marginBottom: "10px" }}>
                      🔗 JOIN OPERATIONS
                    </h4>
                    <p>Multiple tables connection</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      INNER JOIN students...
                    </code>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "20px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h4 style={{ color: "#00ff88", marginBottom: "10px" }}>
                      ⚡ BACKEND API
                    </h4>
                    <p>Express.js with PostgreSQL</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      pool.query('SELECT...')
                    </code>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "20px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h4 style={{ color: "#00ff88", marginBottom: "10px" }}>
                      🎯 REACT FRONTEND
                    </h4>
                    <p>Fetch data from API</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      fetch('/api/students')
                    </code>
                  </motion.div>
                </div>

                <motion.div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "25px",
                    borderRadius: "10px",
                    marginTop: "20px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 style={{ color: "#ffd700", marginBottom: "15px" }}>
                    🚀 Complete Workflow
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    {[
                      "PostgreSQL Database",
                      "SQL Queries",
                      "Express.js Backend",
                      "React Frontend",
                      "API Integration",
                    ].map((feature, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        style={{
                          background: "rgba(255,255,255,0.3)",
                          padding: "8px 15px",
                          borderRadius: "20px",
                          fontSize: "14px",
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    opacity: "0.9",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  یہ مکمل system PostgreSQL database پر چلتا ہے اور React
                  frontend کے ساتھ integrate ہوتا ہے۔ ہر SQL query کا ایک React
                  component ہوتا ہے۔
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section
        className="summary-section summary-card"
        variants={cardVariants}
        style={{
          background:
            "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#fefefe" }}
          >
            🎯 Chapter 36 کا خلاصہ
          </motion.h2>
          <div className="summary-content2">
            <motion.p
              className="urdu-text"
              style={{ color: "#fefefe", fontSize: "16px", lineHeight: "1.8" }}
              variants={itemVariants}
            >
              اس chapter کے بعد آپ:
              <br />
              <br />
              ✅ SQL کی مکمل language سمجھ چکے ہیں
              <br />
              ✅ PostgreSQL میں tables بنانا سیکھ چکے ہیں
              <br />
              ✅ Constraints اور Data Types کا استعمال جان چکے ہیں
              <br />
              ✅ INSERT, SELECT, UPDATE, DELETE queries لکھنا آتا ہے
              <br />
              ✅ JOIN operations کا مفہوم سمجھ چکے ہیں
              <br />
              ✅ Backend API میں SQL استعمال کرنا سیکھ چکے ہیں
              <br />
              ✅ React frontend سے database connect کرنا آتا ہے
              <br />✅ Complete institute system design کر سکتے ہیں
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <div className="container">
          <motion.p
            style={{ marginBottom: "15px", fontSize: "16px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            🗃️ Built with PostgreSQL + Express.js + React
          </motion.p>
          <motion.p
            style={{ fontSize: "14px", opacity: "0.8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            © 2025 زوہیب فاروق - تمام حقوق محفوظ ہیں
          </motion.p>
        </div>
      </motion.footer>

      {/* Copy Notification */}
      <AnimatePresence>
        {copiedCode && (
          <motion.div
            className="copy-notification"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            ✓ {copiedCode} کاپی ہو گیا ہے!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-5px);}
            60% {transform: translateY(-2px);}
          }
          
          @keyframes pulse {
            0%, 100% {opacity: 1;}
            50% {opacity: 0.7;}
          }
          
          .copy-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
          }
          
          .pulse-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(15, 32, 39, 0.5) !important;
          }
          
          .pulse-button:active {
            transform: translateY(0);
          }
        `}
      </style>
    </motion.div>
  );
};

export default Chapter36;
