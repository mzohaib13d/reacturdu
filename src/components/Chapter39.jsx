import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Chapter39() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
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

  // تمام کوڈز
  const installCommand = `npm install framer-motion`;

  const pageVariantsCode = `// src/components/animations/pageVariants.js
// یہاں ہم نے variants کو الگ فائل میں رکھا ہے تاکہ کہیں بھی استعمال کر سکیں
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    rotateX: 10
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0
  },
  out: {
    opacity: 0,
    scale: 1.1,
    y: -20,
    rotateX: -10
  }
};

// ٹرانزیشن سیٹنگز بھی الگ کر دیں
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

// چاہیں تو مختلف پیجز کے لیے مختلف variants بنا سکتے ہیں
export const slideFromLeft = {
  initial: { x: -300, opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: 300, opacity: 0 }
};

export const slideFromRight = {
  initial: { x: 300, opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: -300, opacity: 0 }
};

export const fadeScale = {
  initial: { scale: 0.8, opacity: 0 },
  in: { scale: 1, opacity: 1 },
  out: { scale: 1.2, opacity: 0 }
};`;

  const animatedRoutesCode = `// src/components/layout/AnimatedRoutes.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, useLocation } from 'react-router-dom';

const AnimatedRoutes = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;`;

  const chapterHeadingCode = `// src/components/animations/chapterHeading.jsx
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './pageVariants';

// اگر آپ variants کو ریٹرن سے پہلے ڈیفائن کرنا چاہتے ہیں:
const ChapterHeading = ({ title, description, variant = "default" }) => {
  
  // یہاں variants کو ریٹرن سے پہلے ڈیفائن کر رہے ہیں
  const headingVariants = {
    hidden: { 
      scale: 2, 
      opacity: 0,
      y: -50
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const descVariants = {
    hidden: { 
      scale: 1.5, 
      opacity: 0,
      y: 50
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // اب ریٹرن میں استعمال کریں
  return (
    <div className="chapter-heading" style={{ marginBottom: '2rem' }}>
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '0.5rem'
        }}
      >
        {title}
      </motion.h1>
      
      <motion.p
        variants={descVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: '1.2rem',
          color: '#666',
          lineHeight: '1.6'
        }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default ChapterHeading;`;

  const chapter1Code = `// src/components/pages/Chapter1.jsx
import { motion } from 'framer-motion';
import ChapterHeading from '../animations/chapterHeading';
import { pageVariants, pageTransition } from '../animations/pageVariants';

const Chapter1 = () => {
  return (
    // یہاں pageVariants کو استعمال کر رہے ہیں
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* چیپٹر ہیڈنگ اپنے اندر سے اینیمیشن لے کر آئے گی */}
      <ChapterHeading 
        title="باب 1: ری ایکٹ کیا ہے؟"
        description="اس باب میں ہم ری ایکٹ کی بنیادی باتیں سیکھیں گے۔ جانیں گے کہ یہ کیوں اتنا مقبول ہے اور کیسے کام کرتا ہے۔"
      />
      
      {/* باقی کنٹینٹ */}
      <div className="chapter-content">
        <h2>ری ایکٹ کا تعارف</h2>
        <p>
          ری ایکٹ ایک جاوااسکرپٹ لائبریری ہے جو یوزر انٹرفیس بنانے میں مدد کرتی ہے۔
          اسے Facebook نے بنایا اور اب یہ دنیا کی سب سے مقبول لائبریری ہے۔
        </p>
        
        {/* مزید مواد */}
        <div style={{ marginTop: '2rem' }}>
          <h3>اہم خصوصیات:</h3>
          <ul>
            <li>کمپوننٹ بیسڈ آرکیٹیکچر</li>
            <li>ورچوئل ڈوم</li>
            <li>یک طرفہ ڈیٹا فلو</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Chapter1;`;

  const appCode = `// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import Chapter1 from './components/pages/Chapter1';
import Chapter2 from './components/pages/Chapter2';
// ... باقی 37 پیجز امپورٹ کریں

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes>
        
        {/* باب 1 */}
        <Route path="/chapter-1" element={<Chapter1 />} />
        
        {/* باب 2 */}
        <Route path="/chapter-2" element={<Chapter2 />} />
        
        {/* باب 3 */}
        <Route path="/chapter-3" element={<Chapter3 />} />
        
        {/* اسی طرح 39وں پیجز */}
        
        {/* اگر ہوم پیج چاہیے */}
        <Route path="/" element={<HomePage />} />
        
      </AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;`;

  const mainJsxCode = `// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // اپنی CSS فائل

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  const slideUpCode = `// سلائیڈ اپ افیکٹ:
<motion.h1
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  {title}
</motion.h1>`;

  const flip3dCode = `// 3D فلپ افیکٹ:
<motion.h1
  initial={{ rotateX: -90, opacity: 0 }}
  animate={{ rotateX: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {title}
</motion.h1>`;

  const textRevealCode = `// ٹیکسٹ ریویل افیکٹ:
<motion.h1
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  animate={{ clipPath: "inset(0 0% 0 0)" }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  {title}
</motion.h1>`;

  const option1Code = `// Option 1: Fade In with Slide Up (Most Common)
<motion.p
  className="chapter-subtitle2"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option2Code = `// Option 2: Fade In with Scale (Dramatic Entry)
<motion.p
  className="chapter-subtitle2"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option3Code = `// Option 3: Slide In from Left
<motion.p
  className="chapter-subtitle2"
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option4Code = `// Option 4: Slide In from Right
<motion.p
  className="chapter-subtitle2"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option5Code = `// Option 5: With Spring Animation (Bouncy Effect)
<motion.p
  className="chapter-subtitle2"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 10 }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option6Code = `// Option 6: Letter by Letter Animation (For Urdu Text)
<motion.p
  className="chapter-subtitle2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.2 }}
  style={{ ... }}
>
  {Array.from("Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      {char}
    </motion.span>
  ))}
</motion.p>`;

  const option7Code = `// Option 7: With Stagger Children (If using variants)
const pVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3 // Delay after h1 animation
    }
  }
};

<motion.p
  className="chapter-subtitle2"
  variants={pVariants}
  initial="hidden"
  animate="visible"
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option8Code = `// Option 8: Fade In with Blur Effect
<motion.p
  className="chapter-subtitle2"
  initial={{ opacity: 0, filter: "blur(10px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option9Code = `// Option 9: With WhileHover Effect
<motion.p
  className="chapter-subtitle2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  style={{ ... }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے...
</motion.p>`;

  const option10Code = `// Option 10: Recommended Combination (Best for this context)
<motion.p
  className="chapter-subtitle2"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ 
    duration: 0.8, 
    delay: 0.2, // Starts after h1 animation
    ease: [0.25, 0.1, 0.25, 1] // Custom easing
  }}
  style={{
    fontSize: "clamp(0.95rem, 3vw, 1.4rem)",
    lineHeight: "1.8",
    opacity: 0.95,
    maxWidth: "800px",
    margin: "0 auto",
    letterSpacing: "0.005em",
    wordSpacing: "0.4rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    fontWeight: "400",
    padding: "0 15px",
    direction: "ltr",
  }}
>
  Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے جو ویب سائٹ پر اسکرولنگ کو ہموار (Smooth) اور خوبصورت بناتی ہے۔
</motion.p>`;

  const folderStructure = `src/
├── components/
│   ├── animations/
│   │   ├── pageVariants.js        // تمام پیج ویریئنٹس ایک جگہ
│   │   └── chapterHeading.jsx      // چیپٹر ہیڈنگ کمپوننٹ
│   ├── layout/
│   │   └── AnimatedRoutes.jsx      // اینیمیٹڈ روٹس
│   └── pages/
│       ├── Chapter1.jsx
│       ├── Chapter2.jsx
│       └── ... (39 پیجز)
├── App.jsx
└── index.js`;

  return (
    <div className="chapter-container">
      <motion.header
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <motion.h1
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em",
              wordSpacing: "0.3rem",
              lineHeight: "1.4",
              padding: "0 15px",
            }}
          >
            Chapter 39 — ری ایکٹ میں فریمرموشن اینیمیشن کے ساتھ پیج ٹرانزیشن
          </motion.h1>
          <motion.p
            className="chapter-subtitle2"
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.95rem, 3vw, 1.4rem)",
              lineHeight: "1.8",
              opacity: 0.95,
              maxWidth: "800px",
              margin: "0 auto",
              letterSpacing: "0.005em",
              wordSpacing: "0.4rem",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              fontWeight: "400",
              padding: "0 15px",
            }}
          >
            (Framer Motion Page Transitions in React) <br />
            "پہلے یہ سمجھ لیں ہم کیا کرنے جارہے ہیں۔ 1. ہر پیج پر آنے/جانے والی اینیمیشن (Page Transitions) 2. چیپٹر ہیڈنگ اور ڈسکرپشن کا زوم آؤٹ افیکٹ"
          </motion.p>
        </div>
      </motion.header>

      <div className="card section-card">
        <h3 className="section-title">موضوع: 🎬 Framer Motion Page Transitions (React Router Animations)</h3>
        <h4 className="chapter-subtitle">زبان: آسان اردو + خوبصورت مثالیں + کوڈ کے ساتھ وضاحت</h4>
        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚙ Framer Motion کا مقصد</h4>
        <p className="section-text urdu-text">
          Framer Motion ری ایکٹ کی سب سے مشہور اینیمیشن لائبریری ہے۔ اتنی آسان کہ آپ اسے چائے پیتے پیتے بھی سیکھ سکتے ہیں۔
        </p>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧩 Step 1: Framer Motion انسٹال کریں</h4>
        <p className="section-text urdu-text">اپنے پروجیکٹ میں یہ کمانڈ چلائیں:</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>npm command</span>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(installCommand, "Install Command")
              }
            >
              {copiedCode === "Install Command" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">npm install framer-motion</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🗂 Step 2: فولڈر اسٹرکچر</h4>
        
        <div className="code-section">
          <div className="code-header">
            <span>Folder Structure</span>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(folderStructure, "Folder Structure")
              }
            >
              {copiedCode === "Folder Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{folderStructure}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 1: pageVariants.js — تمام پیج ویریئنٹس ایک جگہ</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/components/animations/pageVariants.js</strong>
        </p>
        <p className="section-text urdu-text">
          یہ وہ جگہ ہے جہاں ہم سارے پیج ویریئنٹس ایکسپورٹ کریں گے۔ اگر ایک ہی پیج ویریئنٹ ہے تو اسے ریٹرن اسٹیٹمینٹ سے پہلے لکھ دیں جس فائل میں استعمال کرنا ہے اس میں ہی۔
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>pageVariants.js</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(pageVariantsCode, "pageVariants.js")}
            >
              {copiedCode === "pageVariants.js" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{pageVariantsCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 2: AnimatedRoutes.jsx — اینیمیٹڈ روٹس</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/components/layout/AnimatedRoutes.jsx</strong>
        </p>
        <p className="section-text urdu-text">یہ روٹنگ ہینڈل کرے گا</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>AnimatedRoutes.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(animatedRoutesCode, "AnimatedRoutes.jsx")}
            >
              {copiedCode === "AnimatedRoutes.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{animatedRoutesCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 3: chapterHeading.jsx — چیپٹر ہیڈنگ اور ڈسکرپشن کا زوم آؤٹ افیکٹ</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/components/animations/chapterHeading.jsx</strong>
        </p>
        <p className="section-text urdu-text">اب بناتے ہیں جب پیج کھلے تو ہیڈنگ اور ڈسکرپشن زوم آؤٹ ہو کر آئیں - بالکل فلموں کی طرح۔</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>chapterHeading.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(chapterHeadingCode, "chapterHeading.jsx")}
            >
              {copiedCode === "chapterHeading.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{chapterHeadingCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 4: Chapter1.jsx — ایک مثال پیج جہاں دونوں چیزیں استعمال ہوں گی</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/components/pages/Chapter1.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Chapter1.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(chapter1Code, "Chapter1.jsx")}
            >
              {copiedCode === "Chapter1.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{chapter1Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 5: App.jsx — مین ایپ فائل جہاں سب امپورٹ ہو گا</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/App.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>App.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(appCode, "App.jsx")}
            >
              {copiedCode === "App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{appCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📄 فائل 6: main.jsx — انٹری پوائنٹ</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/main.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>main.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
            >
              {copiedCode === "main.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{mainJsxCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🚀 اسٹیپ 7: اگر آپ چاہیں تو مزید پرو افیکٹس</h4>
        <p className="section-text urdu-text">یہ کچھ اور افیکٹس ہیں جو آپ کے ٹٹوریل کو اور بھی پیشہ ورانہ بنا دیں گے:</p>
        
        <h5 className="chapter-subtitle-small">سلائیڈ اپ افیکٹ:</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Slide Up Effect</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(slideUpCode, "Slide Up Effect")}
            >
              {copiedCode === "Slide Up Effect" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{slideUpCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">3D فلپ افیکٹ:</h5>
        <div className="code-section">
          <div className="code-header">
            <span>3D Flip Effect</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(flip3dCode, "3D Flip Effect")}
            >
              {copiedCode === "3D Flip Effect" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{flip3dCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">ٹیکسٹ ریویل افیکٹ:</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Text Reveal Effect</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(textRevealCode, "Text Reveal Effect")}
            >
              {copiedCode === "Text Reveal Effect" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{textRevealCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🎭 Framer Motion Animations for the p Tag (Any tag)</h4>
        <p className="section-text urdu-text">
          یہاں مختلف موشن اینیمیشنز دی گئی ہیں جو آپ p ٹیگ پر لاگو کر سکتے ہیں۔ وہ اینیمیشن منتخب کریں جو آپ کے ڈیزائن کے لیے سب سے زیادہ موزوں ہو۔
        </p>

        <h5 className="chapter-subtitle-small">Option 1: Fade In with Slide Up (Most Common)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 1</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option1Code, "Option 1")}
            >
              {copiedCode === "Option 1" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option1Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 2: Fade In with Scale (Dramatic Entry)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 2</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option2Code, "Option 2")}
            >
              {copiedCode === "Option 2" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option2Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 3: Slide In from Left</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 3</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option3Code, "Option 3")}
            >
              {copiedCode === "Option 3" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option3Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 4: Slide In from Right</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 4</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option4Code, "Option 4")}
            >
              {copiedCode === "Option 4" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option4Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 5: With Spring Animation (Bouncy Effect)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 5</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option5Code, "Option 5")}
            >
              {copiedCode === "Option 5" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option5Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 6: Letter by Letter Animation (For Urdu Text)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 6</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option6Code, "Option 6")}
            >
              {copiedCode === "Option 6" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option6Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 7: With Stagger Children (If using variants)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 7</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option7Code, "Option 7")}
            >
              {copiedCode === "Option 7" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option7Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 8: Fade In with Blur Effect</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 8</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option8Code, "Option 8")}
            >
              {copiedCode === "Option 8" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option8Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 9: With WhileHover Effect</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 9</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option9Code, "Option 9")}
            >
              {copiedCode === "Option 9" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option9Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <h5 className="chapter-subtitle-small">Option 10: Recommended Combination (Best for this context)</h5>
        <div className="code-section">
          <div className="code-header">
            <span>Option 10</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(option10Code, "Option 10")}
            >
              {copiedCode === "Option 10" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{option10Code}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📊 Animation Comparison Table:</h4>
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Animation</th>
                <th>Effect</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fade + Slide Up</strong></td>
                <td>Smooth, professional</td>
                <td>Most content</td>
              </tr>
              <tr>
                <td><strong>Scale</strong></td>
                <td>Dramatic, attention-grabbing</td>
                <td>Headlines</td>
              </tr>
              <tr>
                <td><strong>Spring</strong></td>
                <td>Playful, bouncy</td>
                <td>Creative sites</td>
              </tr>
              <tr>
                <td><strong>Letter-by-letter</strong></td>
                <td>Elegant, detailed</td>
                <td>Short text</td>
              </tr>
              <tr>
                <td><strong>Blur</strong></td>
                <td>Modern, sleek</td>
                <td>Tech products</td>
              </tr>
              <tr>
                <td><strong>Staggered</strong></td>
                <td>Coordinated with parent</td>
                <td>Multi-element layouts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🎯 میری تجویز:</h4>
        <div className="info-box">
          <blockquote className="section-text urdu-text">
            آپ کے چیپٹر ہیڈر کے لیے میں Option 10 تجویز کرتا ہوں کیونکہ:
            <br />
            1. اس میں ہلکی سی تاخیر (delay: 0.2) ہے، اس لیے یہ h1 اینیمیشن کے بعد ظاہر ہوتا ہے۔
            <br />
            2. اوپر کی طرف سلائیڈ ہونے والا اثر (slide-up effect)، h1 کی scale اینیمیشن کے ساتھ بہت اچھا میل کھاتا ہے۔
            <br />
            3. کسٹم easing ایک پیشہ ورانہ (professional) احساس فراہم کرتی ہے۔
            <br />
            4. یہ پڑھنے میں آسانی (readability) برقرار رکھتے ہوئے بصری کشش (visual interest) بھی پیدا کرتی ہے۔
          </blockquote>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧠 خلاصہ (Summary Box)</h4>
        <div className="info-box">
          <blockquote className="section-text urdu-text">
            🔹 Framer Motion ری ایکٹ کی سب سے مشہور اینیمیشن لائبریری ہے۔
            <br />
            🔹 pageVariants سے ہم مختلف پیج ٹرانزیشن افیکٹس بنا سکتے ہیں۔
            <br />
            🔹 AnimatePresence سے ہم pages کے درمیان exit animations بھی بنا سکتے ہیں۔
            <br />
            🔹 چیپٹر ہیڈنگ کو زوم آؤٹ افیکٹ سے لانچ کیا جا سکتا ہے۔
            <br />
            🔹 p ٹیگ کے لیے 10 مختلف اینیمیشن آپشنز دستیاب ہیں۔
          </blockquote>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📦 یاد رکھنے کی باتیں:</h4>
        <ol className="section-text urdu-text">
          <li>پرفارمنس کا خیال رکھیں: پیجز میں بہت زیادہ اینیمیشن لگانے سے سائٹ سست ہو سکتی ہے۔</li>
          <li>موبائل صارفین کو نہ بھولیں: موبائل پر بھی چیک کریں کہ اینیمیشنز ٹھیک کام کر رہی ہیں۔</li>
          <li>سادگی بہتر ہے: ہر چیز کو ایک ساتھ اینیمیشن نہ دیں، صرف اہم عناصر کو۔</li>
        </ol>
        <p className="section-text urdu-text">بس یہ ہے بھائی! اب آپ کا ملٹی پیج کا ری ایکٹ ٹٹوریل بھی تیار ہے اور اس میں موشن اینیمیشن بھی لگ گئی ہے۔</p>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} کوڈ کاپی ہوگیا!
        </div>
      )}
    </div>
  );
}

export default Chapter39;