import React, { useState } from "react";

function Chapter8() {
  const [copiedCode, setCopiedCode] = useState("");

  const students = ["احمد", "فاطمہ", "سارہ", "زید"];

  const headingStyle = {
    color: "blue",
    backgroundColor: "#f8f9fa",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "right",
    margin: "20px 0",
  };

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Code blocks for copy functionality
  const codeBlocks = {
    basicList: `// App.jsx
import React from "react";
import "./App.css";

function App() {
  const students = ["احمد", "فاطمہ", "سارہ", "زید"];

  return (
    <div className="app-container">
      <h1 className="title">🔹 لسٹس اور کیز</h1>
      <ul>
        {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;`,

    inlineStyle: `function InlineExample() {
  const headingStyle = {
    color: "blue",
    backgroundColor: "#f8f9fa",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "right"
  };

  return <h2 style={headingStyle}>یہ Inline Style ہے</h2>;
}`,

    separateCSS: `/* App.css */
.title {
  color: #0d6efd;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: right;
}

// App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">یہ Separate CSS فائل ہے</h1>
    </div>
  );
}

export default App;`,

    cssModules: `/* MyComponent.module.css */
.heading {
  color: green;
  font-size: 1.5rem;
  text-align: right;
}

// MyComponent.jsx
import React from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  return <h3 className={styles.heading}>یہ CSS Module ہے</h3>;
}

export default MyComponent;`,
  };

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          📚 چیپٹر 8: لسٹس اور کیز + React میں CSS اسٹائلنگ
        </h1>
        <p className="chapter-subtitle2">Lists & Keys + CSS Styling in React</p>
      </div>

      {/* Part 1: Lists & Keys */}
      <section className="section-card">
        <h2 className="section-title">🔹 حصہ 1 — Lists & Keys</h2>
        <p className="section-text">
          React میں جب ہم <strong>array</strong> کے ڈیٹا کو UI میں دکھانا چاہتے
          ہیں تو ہم <code>.map()</code> استعمال کرتے ہیں۔ لیكن React کو ہر item
          کو <strong>پہچاننے</strong> کے لئے ایک <code>key</code> چاہیے ہوتی ہے،
          ورنہ React کو معلوم نہیں ہوتا کہ کون سا element بدلا ہے۔
        </p>

        <div className="code-section">
          <div className="code-block-container">
            <div className="code-header">
              <h3>✍️ Basic List Example:</h3>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.basicList}</code>
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">Please scroll → </div>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.basicList, "Basic List Example")
              }
            >
              {copiedCode === "Basic List Example" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
        </div>

        <div className="demo-section">
          <h3>🎯 عملی نمونہ:</h3>
          <div className="demo-card">
            <h4
              style={{
                color: "#0d6efd",
                textAlign: "right",
                marginBottom: "15px",
              }}
            >
              طلباء کی فہرست:
            </h4>
            <ul className="student-list">
              {students.map((name, index) => (
                <li key={index} className="student-item">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="explanation-box">
          <h4>🔹 وضاحت:</h4>
          <ul>
            <li>
              <code>students.map()</code> array کے ہر element پر چلے گا۔
            </li>
            <li>
              <code>key=&#123;index&#125;</code> ایک unique key دے رہا ہے (اصل
              پروجیکٹ میں <code>id</code> بہتر ہے)۔
            </li>
            <li>یہ React کو DOM efficiently update کرنے میں مدد دیتا ہے۔</li>
          </ul>
        </div>
      </section>

      {/* Part 2: CSS Styling */}
      <section className="section-card">
        <h2 className="section-title">🔹 حصہ 2 — CSS Styling in React</h2>
        <p className="section-text">
          React میں تین مشہور طریقے ہیں CSS اسٹائلنگ کے:
        </p>

        <div className="methods-grid">
          <div className="method-card">
            <h3>1️⃣ Inline Style</h3>
            <p>style object براہ راست عنصر پر لگانا</p>
          </div>
          <div className="method-card">
            <h3>2️⃣ Separate CSS File</h3>
            <p>
              <code>App.css</code> جیسی فائل استعمال کرنا
            </p>
          </div>
          <div className="method-card">
            <h3>3️⃣ CSS Modules</h3>
            <p>خاص طور پر بڑی apps میں scoped styling</p>
          </div>
        </div>

        {/* Inline Style Example */}
        <div className="code-section">
          <div className="code-block-container">
            <div className="code-header">
              <h3>1. Inline Style Example:</h3>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.inlineStyle}</code>
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">Please scroll → </div>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.inlineStyle, "Inline Style")
              }
            >
              {copiedCode === "Inline Style" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
        </div>

        <div className="demo-section">
          <h3>🎯 Inline Style Demo:</h3>
          <div className="demo-card">
            <h2 style={headingStyle}>یہ Inline Style ہے</h2>
          </div>
        </div>

        <div className="explanation-box">
          <h4>🔹 وضاحت:</h4>
          <ul>
            <li>
              ہم نے ایک JS object بنایا <code>headingStyle</code>۔
            </li>
            <li>
              پھر <code>style=&#123;headingStyle&#125;</code> لگایا۔
            </li>
            <li>
              Property نام camelCase میں ہیں (<code>background-color</code> نہیں
              بلکہ <code>backgroundColor</code>)۔
            </li>
          </ul>
        </div>

        {/* Separate CSS File Example */}
        <div className="code-section">
          <div className="code-block-container">
            <div className="code-header">
              <h3>2. Separate CSS File Example:</h3>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.separateCSS}</code>
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">Please scroll → </div>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.separateCSS, "Separate CSS")
              }
            >
              {copiedCode === "Separate CSS" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
        </div>

        <div className="explanation-box">
          <h4>🔹 وضاحت:</h4>
          <ul>
            <li>
              ہم نے الگ <code>App.css</code> میں کلاس بنائی۔
            </li>
            <li>
              پھر JSX میں <code>className="title"</code> دیا۔
            </li>
          </ul>
        </div>

        {/* CSS Modules Example */}
        <div className="code-section">
          <div className="code-block-container">
            <div className="code-header">
              <h3>3. CSS Modules Example:</h3>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.cssModules}</code>
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">Please scroll → </div>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.cssModules, "CSS Modules")
              }
            >
              {copiedCode === "CSS Modules" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
        </div>

        <div className="explanation-box">
          <h4>🔹 وضاحت:</h4>
          <ul>
            <li>
              <code>.module.css</code> فائل کا import کیا۔
            </li>
            <li>
              <code>className=&#123;styles.heading&#125;</code> سے ہم نے class
              apply کی۔
            </li>
            <li>یہ class globally نہیں جاتی بلکہ scoped رہتی ہے۔</li>
          </ul>
        </div>
      </section>

      {/* Summary Section */}
      <section className="summary-card">
        <h2 className="section-title">📌 خلاصہ</h2>
        <div className="summary-points">
          <div className="summary-item">
            <span className="summary-icon">🗺️</span>
            <span>
              <code>.map()</code> سے array کو لسٹ بناتے ہیں
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🔑</span>
            <span>
              <code>key</code> ہر item کو دیتے ہیں
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🎨</span>
            <span>CSS تین طریقوں سے apply کر سکتے ہیں</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">📱</span>
            <span>Responsive design تمام devices کے لئے</span>
          </div>
        </div>
      </section>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter8;