// Chapter35.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chapter35 = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [showPortfolio, setShowPortfolio] = useState(false);

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
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

  const portfolioVariants = {
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

  return (
    <motion.div
      className="database-guide chapter-container"
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
          background: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
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
              lineHeight: "2.2",
              fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Verdana',
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Chapter 35 — ڈیٹا بیس، SQL اور PostgreSQL — مکمل بنیاد
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
            }}
          >
            React کے ساتھ PostgreSQL بطور Backend
          </motion.p>
        </div>
      </motion.header>

      {/* Introduction Section */}
      <motion.section
        className="intro-section lesson-section"
        variants={itemVariants}
      >
        <div className="container">
          <motion.h2 className="urdu-heading" variants={itemVariants}>
            🎯 مقصد
          </motion.h2>
          <div className="content-grid">
            <div className="text-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                اس چیپٹر کا مقصد یہ ہے کہ:
                <br />
                <br />
                ✅ ڈیٹا بیس کی اصل سمجھ بنے
                <br />
                ✅ تینوں اقسام واضح ہو جائیں
                <br />
                ✅ SQL کی ضرورت سمجھ میں آ جائے
                <br />
                ✅ PostgreSQL کو industry-level context میں دیکھا جائے
                <br />
                ✅ pgAdmin میں عملی طور پر SQL چلانا آ جائے
                <br />
                <br />
                یہ بنیاد آگے چل کر:
                <br />
                • Authentication
                <br />
                • Role-based systems
                <br />
                • Real-world APIs
                <br />
                • Secure backend development
                <br />
                کے لیے استعمال ہوگی۔
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Part 1: What is Data and Why Database */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#1a2980" }}
          >
            🧠 حصہ 1: ڈیٹا کیا ہے اور ڈیٹا بیس کیوں ضروری ہے؟
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                🔹 ڈیٹا کیا ہوتا ہے؟
              </motion.h3>
              <motion.p className="urdu-text" variants={itemVariants}>
                ڈیٹا کا مطلب ہے:
                <br />
                وہ معلومات جن پر کوئی بھی سسٹم چلتا ہے۔
                <br />
                <br />
                مثالیں:
                <br />
                • کسی طالب علم کا نام
                <br />
                • موبائل نمبر
                <br />
                • ای میل ایڈریس
                <br />
                • عمر
                <br />
                • ایڈریس
                <br />
                • کورس کا نام
                <br />
                • فیس ریکارڈ
                <br />
                یہ سب ڈیٹا کہلاتا ہے۔
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                🔹 ڈیٹا بیس کی درست اور سادہ تعریف:
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header2">
                  <span className="text-right text-end">تعریف</span>
                </div>
                <div className="code-block-wrapper">
                  <pre
                    className="english-code2"
                    style={{ textAlign: "right", direction: "rtl" }}
                  >
                    {`ڈیٹا بیس ایک ایسا منظم نظام ہے جہاں معلومات کو 
محفوظ، ترتیب وار اور محفوظ طریقے سے رکھا جاتا ہے
تاکہ ضرورت کے وقت فوراً استعمال ہو سکیں۔`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-right" variants={itemVariants}>
                🌍 حقیقی دنیا کی مثالیں:
              </motion.h3>
              <motion.div className="file-table" variants={itemVariants}>
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">سسٹم</th>
                      <th className="urdu-text-left">ڈیٹا کی قسم</th>
                      <th className="urdu-text-left">ڈیٹا بیس کی اہمیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">📱 موبائل فون</td>
                      <td className="urdu-text-left">
                        Contacts, Messages, Photos
                      </td>
                      <td className="urdu-text-left">
                        سب ڈیٹا بیس میں محفوظ ہوتے ہیں
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">🏦 بینک</td>
                      <td className="urdu-text-left">
                        اکاؤنٹس، بیلنس، ٹرانزیکشنز
                      </td>
                      <td className="urdu-text-left">
                        سب ڈیٹا بیس پر چلتے ہیں
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">🏫 ادارے</td>
                      <td className="urdu-text-left">
                        Students, Teachers, Courses, Fees
                      </td>
                      <td className="urdu-text-left">
                        سب ڈیٹا بیس کے بغیر ممکن نہیں
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 2: Database Types */}
      <motion.section
        className="comparison-section card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            🧠 حصہ 2: ڈیٹا بیس کی تین اقسام (مکمل وضاحت کے ساتھ)
          </motion.h2>

          <motion.div className="file-table" variants={itemVariants}>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">
                ← → Scroll horizontally to view complete table
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="urdu-text-left">قسام</th>
                  <th className="urdu-text-left">تفصیل</th>
                  <th className="urdu-text-left">مثالیں</th>
                  <th className="urdu-text-left">فوائد / نقصانات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="urdu-text-left">1️⃣ File-Based Systems</td>
                  <td className="urdu-text-left">
                    پرانا طریقہ - Excel, Word فائلوں میں ڈیٹا
                  </td>
                  <td className="urdu-text-left">Excel, Text Files</td>
                  <td className="urdu-text-left">
                    ❌ ڈیٹا خراب ہونے کا خطرہ
                    <br />❌ کئی لوگ استعمال نہیں کر سکتے
                    <br />❌ کوئی proper security نہیں
                  </td>
                </tr>
                <tr>
                  <td className="urdu-text-left">2️⃣ Relational Databases</td>
                  <td className="urdu-text-left">
                    Tables میں ڈیٹا، Rows اور Columns کی شکل میں
                  </td>
                  <td className="urdu-text-left">
                    PostgreSQL, MySQL, SQL Server
                  </td>
                  <td className="urdu-text-left">
                    ✅ Enterprise-level
                    <br />✅ Secure
                    <br />✅ Complex relationships
                    <br />✅ Industry standard
                  </td>
                </tr>
                <tr>
                  <td className="urdu-text-left">3️⃣ NoSQL Databases</td>
                  <td className="urdu-text-left">
                    JSON objects, Documents, Key-value pairs
                  </td>
                  <td className="urdu-text-left">MongoDB, Firebase, Redis</td>
                  <td className="urdu-text-left">
                    ✅ Flexible structure
                    <br />✅ بعض cases میں تیز
                    <br />❌ Complex relationships مشکل
                    <br />❌ SQL جیسی querying نہیں
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="info-box urdu-text-left success-box"
            variants={itemVariants}
            style={{ marginTop: "20px" }}
          >
            <strong>نتیجہ:</strong>
            <br />
            Institute systems، ERP، Banking، LMS جیسے سسٹمز کے لیے Relational
            Database زیادہ مناسب ہوتا ہے — یعنی PostgreSQL
          </motion.div>
        </div>
      </motion.section>

      {/* Part 3: SQL Introduction */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#1a2980" }}
          >
            🧠 حصہ 3: SQL کیا ہے؟ (Database سے بات کرنے کی زبان)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🔹 SQL ہمیں کیا کرنے دیتی ہے؟
              </motion.h3>
              <motion.div className="file-table" variants={itemVariants}>
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">کام</th>
                      <th className="urdu-text-left">SQL Command</th>
                      <th className="urdu-text-left">تفصیل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا ڈالنا</td>
                      <td className="urdu-text-left">
                        <code>INSERT</code>
                      </td>
                      <td className="urdu-text-left">نیا ریکارڈ شامل کرنا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا دیکھنا</td>
                      <td className="urdu-text-left">
                        <code>SELECT</code>
                      </td>
                      <td className="urdu-text-left">ڈیٹا پڑھنا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا بدلنا</td>
                      <td className="urdu-text-left">
                        <code>UPDATE</code>
                      </td>
                      <td className="urdu-text-left">موجودہ ڈیٹا اپڈیٹ کرنا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ڈیٹا مٹانا</td>
                      <td className="urdu-text-left">
                        <code>DELETE</code>
                      </td>
                      <td className="urdu-text-left">ریکارڈ ڈیلیٹ کرنا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ٹیبل بنانا</td>
                      <td className="urdu-text-left">
                        <code>CREATE</code>
                      </td>
                      <td className="urdu-text-left">نیا ٹیبل بنانا</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ٹیبل ختم کرنا</td>
                      <td className="urdu-text-left">
                        <code>DROP</code>
                      </td>
                      <td className="urdu-text-left">ٹیبل ڈیلیٹ کرنا</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                📌 SQL عملی مثال
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>query.sql</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard("SELECT * FROM students;", "sql-example")
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
                    {`-- طلباء کا تمام ڈیٹا دیکھیں
SELECT * FROM students;

-- نئے طالب علم کا اضافہ کریں
INSERT INTO students (name, age) 
VALUES ('علی', 21);

-- طالب علم کی عمر اپڈیٹ کریں
UPDATE students 
SET age = 22 
WHERE name = 'علی';

-- طالب علم ڈیلیٹ کریں
DELETE FROM students 
WHERE name = 'علی';`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice">
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 4: PostgreSQL */}
      <motion.section
        className="teacher-method-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            🧠 حصہ 4: PostgreSQL کیا ہے؟ (Industry-level تعریف)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.p className="urdu-text" variants={itemVariants}>
                <strong>PostgreSQL</strong> ایک Free، Open-source، اور
                Enterprise-grade Relational Database ہے جو بڑے پیمانے پر حقیقی
                دنیا کے سسٹمز میں استعمال ہوتا ہے۔
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                PostgreSQL کیوں منتخب کیا گیا؟
              </motion.h3>
              <motion.div className="file-table" variants={itemVariants}>
                <table>
                  <thead>
                    <tr>
                      <th className="urdu-text-left">وجہ</th>
                      <th className="urdu-text-left">عملی فائدہ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="urdu-text-left">Free</td>
                      <td className="urdu-text-left">کوئی لائسنس فیس نہیں</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">Secure</td>
                      <td className="urdu-text-left">بینک لیول سیکیورٹی</td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">Fast</td>
                      <td className="urdu-text-left">
                        لاکھوں ریکارڈز پر بھی تیز
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">ACID Compliance</td>
                      <td className="urdu-text-left">
                        ڈیٹا corruption سے محفوظ
                      </td>
                    </tr>
                    <tr>
                      <td className="urdu-text-left">React / Node Friendly</td>
                      <td className="urdu-text-left">
                        Modern stack کے لیے بہترین
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="info-box urdu-text-left success-box"
            variants={itemVariants}
          >
            <strong>PostgreSQL کہاں استعمال ہوتا ہے؟</strong>
            <br />
            • Banking systems
            <br />
            • Hospital systems
            <br />
            • Government portals
            <br />
            • Large-scale SaaS platforms
            <br />
            • School / Institute management systems
            <br />• Zohaibtech کے پروجیکٹس میں
          </motion.div>
        </div>
      </motion.section>

      {/* Part 5: Official Website */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#1a2980" }}
          >
            🧠 حصہ 5: PostgreSQL کی آفیشل ویب سائٹ اور اکاؤنٹ
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>آفیشل ویب سائٹ</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(
                        "https://www.postgresql.org",
                        "postgres-url",
                      )
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy URL
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`https://www.postgresql.org`}
                  </pre>
                </div>
              </motion.div>

              <motion.div
                className="info-box urdu-text-left"
                variants={itemVariants}
                style={{ marginTop: "15px" }}
              >
                <strong>❌ اکاؤنٹ ضروری نہیں:</strong>
                <br />
                PostgreSQL open-source ہے، free ہے، بغیر سائن اپ کے ڈاؤن لوڈ اور
                استعمال ہو سکتا ہے۔
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 6: Installation Guide */}
      <motion.section
        className="complete-installation-section learning-outcomes"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            🧠 حصہ 6: PostgreSQL ڈاؤن لوڈ اور انسٹالیشن (Windows)
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🔽 Step 1: ڈاؤن لوڈ پیج کھولیں
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Browser میں جائیں</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(
                        "https://www.postgresql.org/download/",
                        "download-url",
                      )
                    }
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy URL
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`https://www.postgresql.org/download/`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🔽 Steps 2-8: انسٹالیشن پروسیس
              </motion.h3>
              <motion.div
                className="info-box urdu-text-left"
                variants={itemVariants}
              >
                <strong>انسٹالیشن گائیڈ:</strong>
                <br />
                1. Windows منتخب کریں
                <br />
                2. Installer ڈاؤن لوڈ کریں
                <br />
                3. .exe فائل Run کریں
                <br />
                4. Next, Next کرتے جائیں
                <br />
                5. یہ components منتخب رہنے دیں:
                <br />
                • PostgreSQL Server
                <br />
                • pgAdmin 4<br />
                • Command Line Tools
                <br />
                • Stack Builder
                <br />
                6. Password سیٹ کریں (postgres)
                <br />
                7. Port: 5432 (default رہنے دیں)
                <br />
                8. Install پر کلک کریں
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">3</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🔐 پاسورڈ سیٹ کرنا (اہم)
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>پاسورڈ سیٹ کریں</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard("postgres", "password")}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Password
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`Enter password for database superuser:
postgres

⚠️ یہ پاسورڈ یاد رکھیں — 
آگے ہر جگہ استعمال ہوگا۔`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 7: Running PostgreSQL */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#1a2980" }}
          >
            🧠 حصہ 7: PostgreSQL چلانا — pgAdmin اور SQL Shell
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                طریقہ 1️⃣: pgAdmin
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Steps</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`1. Start Menu → pgAdmin 4
2. Open کریں
3. Password لکھیں → Login کریں

اگر Left Panel میں یہ نظر آئے:

Servers
  └── PostgreSQL

تو PostgreSQL صحیح چل رہا ہے ✅`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                طریقہ 2️⃣: SQL Shell (psql)
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Steps</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`Start Menu → SQL Shell (psql)

Defaults قبول کریں:
Server: localhost
Database: postgres
Port: 5432
Username: postgres
Password: postgres

اگر یہ نظر آئے:
postgres=#

تو PostgreSQL صحیح چل رہا ہے ✅`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 8: Practical SQL Commands */}
      <motion.section
        className="usage-section homework-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            🧠 حصہ 8: pgAdmin میں عملی SQL کمانڈز
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🟢 مرحلہ 1-4: Database بنانا اور Select کرنا
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Steps</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`1. pgAdmin کھولیں → Login کریں
2. Servers → PostgreSQL Expand کریں
3. Databases → Create → Database
4. نام لکھیں: school_db
5. Save کریں ✅
6. school_db پر کلک کریں (active database)`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🟢 مرحلہ 5: Query Tool کھولنا
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Method</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
                    {`Menu: Tools → Query Tool
یا: F7 دبائیں

اب سفید Editor کھلے گا — 
یہی اصل SQL لکھنے کی جگہ ہے۔`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">3</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🟢 مرحلہ 6: پہلی عملی SQL کمانڈ — Table بنانا
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>create_table.sql</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(
                        `CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INT
);`,
                        "create-table",
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
                    {`CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INT
);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">4</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🟢 مرحلہ 7: ڈیٹا ڈالنا
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>insert_data.sql</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard(
                        `INSERT INTO students (name, age)
VALUES ('علی', 21);`,
                        "insert-data",
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
                    {`INSERT INTO students (name, age)
VALUES ('علی', 21);`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-number">5</div>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                🟢 مرحلہ 8: ڈیٹا دیکھنا
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>select_data.sql</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard("SELECT * FROM students;", "select-data")
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
                    {`SELECT * FROM students;`}
                  </pre>
                </div>
              </motion.div>
              <motion.div
                className="info-box urdu-text-left warning-box"
                variants={itemVariants}
                style={{ marginTop: "15px" }}
              >
                <strong>⚠️ بہت اہم بات:</strong>
                <br />
                ❌ اگر Database select کیے بغیر Query Tool کھولا گیا
                <br />
                تو SQL غلط database میں چلے گی یا error آئے گا۔
                <br />
                <br />
                <strong>✔️ صحیح طریقہ:</strong>
                <br />
                1. پہلے Database select کریں
                <br />
                2. پھر Query Tool کھولیں
                <br />
                3. پھر SQL لکھیں
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 9: SQL Shell Commands */}
      <motion.section
        className="part-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{ color: "#1a2980" }}
          >
            🧠 حصہ 9: SQL Shell میں پہلی کمانڈ
          </motion.h2>

          <motion.div className="step-card" variants={itemVariants}>
            <div className="step-content">
              <motion.h3 className="urdu-text-left" variants={itemVariants}>
                PostgreSQL ورژن چیک کریں
              </motion.h3>
              <motion.div
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>version_check.sql</span>
                  <motion.button
                    className="copy-btn pulse-button"
                    onClick={() =>
                      copyToClipboard("SELECT version();", "version-check")
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
                    {`-- SQL Shell میں لکھیں:
SELECT version();

-- Output:
PostgreSQL 16.x on x86_64-windows...

یہ confirm کرتا ہے کہ 
PostgreSQL صحیح چل رہا ہے ✅`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Part 10: CRUD Operations */}
      <motion.section
        className="demo-live-section card"
        variants={cardVariants}
        style={{ marginTop: "40px" }}
      >
        <div className="container">
          <motion.h2
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            🧠 حصہ 10: SQL زبان کا اصل مقصد — CRUD
          </motion.h2>

          <motion.div className="file-table" variants={itemVariants}>
            <table>
              <thead>
                <tr>
                  <th className="urdu-text-left">کام</th>
                  <th className="urdu-text-left">مطلب</th>
                  <th className="urdu-text-left">SQL Command</th>
                  <th className="urdu-text-left">React APIs میں استعمال</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="urdu-text-left">Create</td>
                  <td className="urdu-text-left">نیا ڈیٹا ڈالنا</td>
                  <td className="urdu-text-left">
                    <code>INSERT</code>
                  </td>
                  <td className="urdu-text-left">POST API</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">Read</td>
                  <td className="urdu-text-left">ڈیٹا دیکھنا</td>
                  <td className="urdu-text-left">
                    <code>SELECT</code>
                  </td>
                  <td className="urdu-text-left">GET API</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">Update</td>
                  <td className="urdu-text-left">ڈیٹا بدلنا</td>
                  <td className="urdu-text-left">
                    <code>UPDATE</code>
                  </td>
                  <td className="urdu-text-left">PUT/PATCH API</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">Delete</td>
                  <td className="urdu-text-left">ڈیٹا مٹانا</td>
                  <td className="urdu-text-left">
                    <code>DELETE</code>
                  </td>
                  <td className="urdu-text-left">DELETE API</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <motion.button
              className="pulse-button"
              onClick={togglePortfolio}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "sans-serif",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(26, 41, 128, 0.3)",
                margin: "20px 0",
              }}
            >
              {showPortfolio
                ? "❌ Close Demo"
                : "🚀 PostgreSQL Live Demo دیکھیں"}
            </motion.button>
          </div>

          <AnimatePresence>
            {showPortfolio && (
              <motion.div
                className="portfolio-demo"
                variants={portfolioVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  background:
                    "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
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
                  🗃️ PostgreSQL Live CRUD Demo
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
                      📝 CREATE (INSERT)
                    </h4>
                    <p>نیا طالب علم شامل کریں</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      INSERT INTO students...
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
                      👁️ READ (SELECT)
                    </h4>
                    <p>تمام طلباء دیکھیں</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      SELECT * FROM students
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
                      ✏️ UPDATE
                    </h4>
                    <p>طالب علم کی معلومات اپڈیٹ کریں</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      UPDATE students SET...
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
                      🗑️ DELETE
                    </h4>
                    <p>طالب علم ریکارڈ ڈیلیٹ کریں</p>
                    <code style={{ fontSize: "12px", color: "#ccc" }}>
                      DELETE FROM students...
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
                    🚀 React APIs سے تعلق
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
                      "POST → INSERT",
                      "GET → SELECT",
                      "PUT → UPDATE",
                      "DELETE → DELETE",
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
                  یہ CRUD operations آگے چل کر React Backend میں APIs کی شکل
                  اختیار کریں گی۔ ہر SQL command کا ایک React API endpoint ہوگا۔
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
            🏁 چیپٹر 1 کا خلاصہ
          </motion.h2>
          <div className="summary-content2">
            <motion.p
              className="urdu-text"
              style={{ color: "#fefefe", fontSize: "16px", lineHeight: "1.8" }}
              variants={itemVariants}
            >
              اس چیپٹر کے بعد آپ:
              <br />
              <br />
              ✅ ڈیٹا بیس کی اصل concept سمجھ چکے ہیں
              <br />
              ✅ ڈیٹا بیس کی تینوں اقسام مکمل وضاحت کے ساتھ جان چکے ہیں
              <br />
              ✅ SQL کیا ہے اور کیوں ضروری ہے سمجھ چکے ہیں
              <br />
              ✅ PostgreSQL کی industry-level اہمیت جان چکے ہیں
              <br />
              ✅ PostgreSQL ڈاؤن لوڈ، انسٹال اور رن کر چکے ہیں
              <br />
              ✅ pgAdmin میں SQL لکھنے کی صحیح جگہ استعمال کرنا سیکھ چکے ہیں
              <br />✅ اپنی پہلی حقیقی SQL کمانڈ خود چلا چکے ہیں
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
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
            🗃️ Built with React & PostgreSQL
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
    </motion.div>
  );
};

export default Chapter35;
