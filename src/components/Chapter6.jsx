import React, { useState, useRef } from "react";

function Chapter6() {
  const [copiedCode, setCopiedCode] = useState("");
  const [activeSection, setActiveSection] = useState("lesson");
  
  // Refs for scrolling to sections
  const lessonRef = useRef(null);
  const example1Ref = useRef(null);
  const example2Ref = useRef(null);
  const cssRef = useRef(null);
  const homeworkRef = useRef(null);

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Navigation function
  const scrollToSection = (section) => {
    setActiveSection(section);
    
    let refToScroll = null;
    switch(section) {
      case "lesson":
        refToScroll = lessonRef.current;
        break;
      case "example1":
        refToScroll = example1Ref.current;
        break;
      case "example2":
        refToScroll = example2Ref.current;
        break;
      case "css":
        refToScroll = cssRef.current;
        break;
      case "homework":
        refToScroll = homeworkRef.current;
        break;
      default:
        refToScroll = lessonRef.current;
    }
    
    if (refToScroll) {
      refToScroll.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Example 1 Code
  const example1Code = `import React, { useState } from "react";
import "./App.css";

export default function App() {
  // اردو: دو الگ state بنائیں
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">useState Hook – دو Counter</h1>

      <div className="counter-section">
        <h2>Counter A: {countA}</h2>
        <button onClick={() => setCountA(countA + 1)}>اضافہ A</button>
        <button onClick={() => setCountA(countA - 1)}>کمی A</button>
      </div>

      <div className="counter-section">
        <h2>Counter B: {countB}</h2>
        <button onClick={() => setCountB(countB + 1)}>اضافہ B</button>
        <button onClick={() => setCountB(countB - 1)}>کمی B</button>
      </div>
    </div>
  );
}`;

  // Example 2 Code
  const example2Code = `import React, { useState } from "react";
import "./App.css";

export default function ToggleBackground() {
  // اردو: ایک state بنائیں true/false کیلئے
  const [dark, setDark] = useState(false);

  return (
    <div
      className="toggle-container"
      style={{
        backgroundColor: dark ? "#212529" : "#f8f9fa",
        color: dark ? "#ffffff" : "#000000",
      }}
    >
      <h2>Toggle Background</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "لائٹ موڈ کریں" : "ڈارک موڈ کریں"}
      </button>
    </div>
  );
}`;

  // App.jsx usage code
  const appUsageCode = `import ToggleBackground from "./ToggleBackground";

function App() {
  // اوپر والا Counter کوڈ یہاں بھی ہو سکتا ہے
  return (
    <div className="app-container">
      <h1 className="title">useState Hook</h1>
      {/* Counter کمپوننٹ */}
      <ToggleBackground />
    </div>
  );
}`;

  // CSS Code
  const cssCode = `/* اضافی کلاسیں useState کیلئے */
.counter-section {
  margin-bottom: 2rem;
  text-align: right;
}

.counter-section button {
  margin-left: 10px;
  padding: 5px 12px;
  font-size: 1rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.counter-section button:hover {
  background-color: #0b5ed7;
}

.toggle-container {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.toggle-container button {
  padding: 6px 14px;
  font-size: 1rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toggle-container button:hover {
  background-color: #0b5ed7;
}`;

  return (
    <div className="chapter-container">
      {/* Chapter Header - UPDATED with big font size */}
      <div className="chapter-header urdu-text">
        <div className="chapter-header-top">
          <div className="chapter-number-large">Chapter 6</div>
          <div className="chapter-duration">
            <span className="react-logo">⚛️</span> تخمینی وقت: 30-40 منٹ
          </div>
        </div>
        <h1 className="chapter-title-main urdu-heading">React Hooks کا آغاز – useState Hook</h1>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Sidebar */}
        <div className="sidebar urdu-text">
          <h3 className="urdu-heading">مثالوں کی فہرست</h3>
          <ul className="example-list">
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "lesson" ? "active" : ""}`}
                onClick={() => scrollToSection("lesson")}
              >
                1. سبق کا تعارف
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "example1" ? "active" : ""}`}
                onClick={() => scrollToSection("example1")}
              >
                2. دو Counter بٹن
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "example2" ? "active" : ""}`}
                onClick={() => scrollToSection("example2")}
              >
                3. Toggle Background
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "css" ? "active" : ""}`}
                onClick={() => scrollToSection("css")}
              >
                4. CSS اسٹائلز
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "homework" ? "active" : ""}`}
                onClick={() => scrollToSection("homework")}
              >
                5. ہوم ورک
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* Lesson Section */}
          <div ref={lessonRef} className="section-card lesson-section urdu-text">
            <h2 className="section-title urdu-heading">📝 سبق: useState Hook کا تعارف</h2>
            
            <div className="section-text">
              <h4 className="color-blue">⿡ Hook کیا ہے؟</h4>
              <p>
                React میں <em>Hook</em> وہ فنکشن ہے جو ہمیں Functional Components میں
                state یا دوسری React کی خصوصیات استعمال کرنے دیتا ہے۔
              </p>

              <h4 className="color-blue">⿢ useState Hook کیا کرتا ہے؟</h4>
              <p>
                یہ ایک React Hook ہے جو کسی کمپوننٹ کے اندر <em>state</em> (یعنی
                اندرونی ڈیٹا جو بدل سکتا ہے) رکھتا ہے۔
              </p>

              <p>
                <strong>ہم اس سے دو چیزیں حاصل کرتے ہیں:</strong>
              </p>
              <ul className="urdu-list">
                <li>
                  <em>state variable</em> (موجودہ ویلیو)
                </li>
                <li>
                  <em>set function</em> (state کو بدلنے والا فنکشن)
                </li>
              </ul>

              <div className="english-quote">
                <code>const [value, setValue] = useState(initialValue);</code>
              </div>
              <button
                className="copy-btn pulse-button"
                onClick={() =>
                  copyToClipboard(
                    "const [value, setValue] = useState(initialValue);",
                    "useState Syntax"
                  )
                }
              >
                {copiedCode === "useState Syntax" ? "کاپی ہوگیا ✅" : "📋 Syntax کاپی کریں"}
              </button>
            </div>
          </div>

          {/* Example 1: Two Counters */}
          <div ref={example1Ref} className="section-card code-section urdu-text">
            <h2 className="section-title urdu-heading">🧑‍💻 مثال 1: دو Counter بٹن</h2>
            
            <div className="section-text">
              <p><strong>📁 src/App.jsx</strong></p>
              
              <div className="code-block-container">
                <div className="code-header">
                  <span>App.jsx - Counter Example</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code2">
                    <code>{example1Code}</code>
                  </pre>
                </div>
              </div>
              
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(example1Code, "Counter Example")}
              >
                {copiedCode === "Counter Example" ? "کاپی ہوگیا ✅" : "📋 کوڈ کاپی کریں"}
              </button>
            </div>
          </div>

          {/* Example 2: Toggle Background */}
          <div ref={example2Ref} className="section-card code-section urdu-text">
            <h2 className="section-title urdu-heading">🧑‍💻 مثال 2: Toggle Background Button</h2>
            
            <div className="section-text">
              <p><strong>📁 src/ToggleBackground.jsx</strong></p>
              
              <div className="code-block-container">
                <div className="code-header">
                  <span>ToggleBackground.jsx</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code2">
                    <code>{example2Code}</code>
                  </pre>
                </div>
              </div>
              
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice">Please scroll →</div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(example2Code, "Toggle Example")}
                >
                  {copiedCode === "Toggle Example" ? "کاپی ہوگیا ✅" : "📋 کوڈ کاپی کریں"}
                </button>
              </div>

              <p className="mt-3">
                <strong>اور App.jsx میں آپ اسے اس طرح استعمال کر سکتے ہیں:</strong>
              </p>
              
              <div className="code-block-container">
                <div className="code-header">
                  <span>App.jsx - Component Usage</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code2 " dir="ltr">
                    <code dir="ltr" styl="direction: ltr">{appUsageCode}</code>
                  </pre>
                </div>
              </div>
              
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice">Please scroll →</div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(appUsageCode, "App Usage")}
                >
                  {copiedCode === "App Usage" ? "کاپی ہوگیا ✅" : "📋 کوڈ کاپی کریں"}
                </button>
              </div>
            </div>
          </div>

          {/* CSS Styles */}
          <div ref={cssRef} className="section-card code-section urdu-text">
            <h2 className="section-title urdu-heading">📁 src/App.css (اضافی کلاسیں)</h2>
            
            <div className="section-text">
              <div className="code-block-container">
                <div className="code-header">
                  <span>App.css - Additional Styles</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="css-code">
                    <code>{cssCode}</code>
                  </pre>
                </div>
              </div>
              
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(cssCode, "CSS Styles")}
              >
                {copiedCode === "CSS Styles" ? "کاپی ہوگیا ✅" : "📋 CSS کاپی کریں"}
              </button>

              <p className="mt-3">
                <em>
                  (آپ کا پچھلا CSS بھی لگا رہے گا، یہ اضافی کلاسیں اس پر کام کریں گی۔)
                </em>
              </p>
            </div>
          </div>

          {/* Explanation Section */}
          <div className="section-card explanation-section urdu-text">
            <h2 className="section-title urdu-heading">🔹 وضاحت</h2>
            
            <div className="section-text">
              <ul className="urdu-list">
                <li>
                  <strong>دو Counter:</strong> ہر ایک کیلئے الگ useState استعمال کیا۔
                </li>
                <li>
                  <strong>Toggle Background:</strong> ایک boolean state dark رکھا، ہر
                  کلک پر true/false بدلتا ہے اور background تبدیل ہوتا ہے۔
                </li>
                <li>
                  <strong>useState Syntax:</strong>{" "}
                  <code className="coding">const [state, setState] = useState(initialValue)</code>
                </li>
                <li>
                  <strong>State Update:</strong> set function استعمال کر کے state کو
                  update کریں۔
                </li>
              </ul>
            </div>
          </div>

          {/* Homework Section */}
          <div ref={homeworkRef} className="section-card homework-section urdu-text">
            <h2 className="section-title urdu-heading">📝 ہوم ورک (طلبہ کیلئے)</h2>
            
            <div className="section-text">
              <ol className="urdu-list">
                <li>
                  ایک <em>User Profile</em> Component بنائیں جس میں نام اور عمر کی
                  state ہو۔
                </li>
                <li>
                  دو بٹن بنائیں: ایک نام تبدیل کرنے کیلئے، دوسرا عمر بڑھانے کیلئے۔
                </li>
                <li>
                  ایک <em>Theme Switcher</em> بنائیں جو 3 مختلف themes میں toggle کر
                  سکے۔
                </li>
              </ol>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="section-card learning-outcomes urdu-text">
            <h2 className="section-title urdu-heading">اس سبق کے بعد طلبہ:</h2>
            
            <div className="section-text">
              <ul className="urdu-list">
                <li>✅ useState Hook کا concept سمجھیں گے</li>
                <li>✅ State variable اور set function کا استعمال سیکھیں گے</li>
                <li>✅ Multiple states کو manage کرنا سیکھیں گے</li>
                <li>✅ Conditional rendering کے ساتھ state کا استعمال سیکھیں گے</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter6;