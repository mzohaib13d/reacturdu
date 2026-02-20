import React, { useState } from 'react';
import "../App.css";

function Chapter4() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const fileStructureCode = `public/index.html
src/main.jsx (یا index.jsx)
src/App.jsx
src/index.css
src/App.css`;

  const htmlCode = `<!DOCTYPE html>
<html lang="ur">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React اردو ٹیوٹوریل</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  const mainJsxCode = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  const appJsxCode = `import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>ہیلو ورلڈ!</h1>
    </div>
  );
}

export default App;`;

  const cssCode = `/* گلوبل اسٹائلز */
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f5f5f5;
}

/* App اسٹائلز */
.app-container {
  text-align: center;
  margin-top: 100px;
  color: #333;
}`;

  return (
    <div className="chapter-container">
      {/* Chapter Header */}
      <div className="chapter-header">
        <h1 className="chapter-title urdu-heading">Chapter 4. React ایپ کی بنیادی فائلیں اور ان کا کردار</h1>
        <div className="chapter-duration">⏱️ تخمینی وقت: 15 منٹ</div>
        <div className="chapter-number">باب 4</div>
      </div>

      {/* Learning Outcomes */}
      <div className="learning-outcomes urdu-text">
        <h3 className="chapter-subtitle">📚 اس باب میں آپ سیکھیں گے:</h3>
        <ul>
          <li>React پروجیکٹ میں اہم فائلوں کا کردار</li>
          <li>public/index.html کی اہمیت</li>
          <li>entry point (main.jsx/index.js) کا کام</li>
          <li>App.jsx component کی ساخت</li>
          <li>CSS فائلوں کا انتظام</li>
        </ul>
      </div>

      {/* Main Content Card */}
      <div className="card section-card">
        <h3 className="section-title">React پروجیکٹ کی بنیادی فائلیں</h3>
        
        <div className="section-text urdu-text">
          <p>
            اب میں یہ بتاؤں گا کہ جو فائلیں عموماً React پروجیکٹ میں ہوتی ہیں (خاص طور پر CRA یا Vite بیسڈ) — ان کا مقصد کیا ہے، اور آپ کا "Hello World" کیسے دکھایا جائے۔
          </p>
          
          <div className="info-box">
            <p>
              <strong>نوٹ:</strong> ذیل میں وہ عام فائلیں ہیں جو ہر React پروجیکٹ میں ضروری ہوتی ہیں۔
            </p>
          </div>
        </div>

        {/* File Structure Table */}
        <div className="file-table">
          <h4 className="chapter-subtitle2">📁 React پروجیکٹ فائل اسٹرکچر</h4>
          <div className="code-section">
            <div className="code-header">
              <span>فائل سٹرکچر</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(fileStructureCode, "File Structure")}
              >
                {copiedCode === "File Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{fileStructureCode}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          {/* Detailed Table */}
          <h4 className="chapter-subtitle2 mt-20">📋 فائلوں کا تفصیلی تعارف</h4>
          <table>
            <thead>
              <tr>
                <th>فائل / فولڈر</th>
                <th>مقام</th>
                <th>مقصد / وضاحت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>public/index.html</code></td>
                <td>عمومی HTML ٹیمپلیٹ</td>
                <td>یہ وہ HTML صفحہ ہے جو براؤزر میں سب سے پہلے لوڈ ہوتا ہے۔ اس میں <code>{"<div id=\"root\"></div>"}</code> رکھا جاتا ہے، جہاں React اپنا کام کرے گی۔</td>
              </tr>
              <tr>
                <td><code>src/index.js</code> یا <code>src/main.jsx</code></td>
                <td>انٹری پوائنٹ JS/JSX</td>
                <td>یہ وہ فائل ہے جو React ایپ کو start کرتی ہے — یہ root div کو تلاش کرتی ہے اور React component کو وہاں رینڈر کرتی ہے۔</td>
              </tr>
              <tr>
                <td><code>src/App.js</code> یا <code>src/App.jsx</code></td>
                <td>مرکزی Component</td>
                <td>یہ آپ کا بنیادی React component ہے جہاں آپ UI logic لکھتے ہیں۔ آپ اسے چھوٹے components کی شکل میں تقسیم کریں گے۔</td>
              </tr>
              <tr>
                <td><code>src/index.css</code></td>
                <td>گلوبل CSS</td>
                <td>یہ CSS وہ اسٹائل ہیں جو پوری ایپ پر لاگو ہوتے ہیں — عام اسٹائلز، reset styles وغیرہ۔</td>
              </tr>
              <tr>
                <td><code>src/App.css</code></td>
                <td>Component-specific CSS</td>
                <td>یہ وہ اسٹائل ہے جو App component کے لیے مخصوص ہوتی ہے۔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="success-box mt-3">
          <p>
            <strong>نوٹ:</strong> اگر آپ Vite پر جائیں گے، serviceWorker.js وغیرہ ڈیفالٹ میں نہ ہوں گے (وہ CRA-specific چیزیں ہیں)۔
          </p>
        </div>

        {/* Hello World Example */}
        <div className="lesson-section urdu-text">
          <h4 className="section-title">🔹 Hello World مثال — Vite + React سیٹ اپ</h4>
          
          <div className="section-text">
            <p>
              نیچے ایک سادہ مثال ہے جسے آپ اپنا tutorial کا حصہ بنا سکتے ہیں:
            </p>
          </div>

          {/* HTML Example */}
          <div className="code-section">
            <div className="code-header">
              <span>public/index.html</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(htmlCode, "HTML Template")}
              >
                {copiedCode === "HTML Template" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{htmlCode}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          {/* Main.jsx Example */}
          <div className="code-section">
            <div className="code-header">
              <span>src/main.jsx (یا index.jsx)</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(mainJsxCode, "Main JSX")}
              >
                {copiedCode === "Main JSX" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
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

          {/* App.jsx Example */}
          <div className="code-section">
            <div className="code-header">
              <span>src/App.jsx</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(appJsxCode, "App JSX")}
              >
                {copiedCode === "App JSX" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{appJsxCode}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          {/* CSS Example */}
          <div className="code-section">
            <div className="code-header">
              <span>src/index.css + src/App.css</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(cssCode, "CSS Styles")}
              >
                {copiedCode === "CSS Styles" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{cssCode}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          <div className="explanation-box mt-3">
            <h5>یہ مثال کیا کرتی ہے؟</h5>
            <ul>
              <li><code>index.html</code> میں root container بناتا ہے</li>
              <li><code>main.jsx</code> React کو start کرتا ہے</li>
              <li><code>App.jsx</code> بنیادی component ہے جو "ہیلو ورلڈ!" دکھاتا ہے</li>
              <li>CSS فائلیں UI کو سجانے کے لیے استعمال ہوتی ہیں</li>
            </ul>
          </div>

          <p className="mt-3">
            اگر آپ یہ تمام فائلیں صحیح ترتیب میں رکھیں اور <span className="coding">npm run dev</span> کریں، تو آپ براؤزر میں جاکر دیکھیں گے: <strong>ہیلو ورلڈ!</strong>
          </p>
          
          <p>
            یہ وہ بنیادی ترتیب ہے جس پر آپ مزید components اور فیچرز build کریں گے۔
          </p>
        </div>

        {/* Key Points */}
        <div className="methods-grid">
          <div className="method-card">
            <h3>📄 HTML</h3>
            <p>Root container اور metadata</p>
          </div>
          <div className="method-card">
            <h3>🚀 Entry Point</h3>
            <p>React ایپ شروع کرنے والی فائل</p>
          </div>
          <div className="method-card">
            <h3>⚛️ App Component</h3>
            <p>مرکزی UI component</p>
          </div>
          <div className="method-card">
            <h3>🎨 CSS</h3>
            <p>اسٹائلنگ اور ڈیزائن</p>
          </div>
        </div>

        {/* Homework Section */}
        <div className="homework-section urdu-text">
          <h4>📝 ہوم ورک:</h4>
          <ol>
            <li>Vite یا CRA استعمال کرتے ہوئے ایک نیا React پروجیکٹ بنائیں</li>
            <li>اوپر دی گئی تمام فائلوں کو اپنے پروجیکٹ میں ڈھونڈیں</li>
            <li>App.jsx میں "ہیلو ورلڈ!" کو اپنا نام تبدیل کریں</li>
            <li>App.css میں نئے اسٹائلز شامل کریں (رنگ، فونٹ سائز، margins)</li>
            <li>index.html میں صفحے کا title تبدیل کریں</li>
          </ol>
        </div>

        {/* Summary */}
        <div className="summary-card">
          <h3 className="section-title">📖 خلاصہ</h3>
          <div className="summary-content2">
            <p>ہر React پروجیکٹ کی کچھ بنیادی فائلیں ہوتی ہیں جو اس کے کام کرنے کے لیے ضروری ہیں۔</p>
            <p><strong>index.html</strong> وہ صفحہ ہے جسے براؤزر دیکھتا ہے اور اس میں React کا root container ہوتا ہے۔</p>
            <p><strong>main.jsx/index.js</strong> React ایپ کو start کرتا ہے اور component کو root میں رینڈر کرتا ہے۔</p>
            <p><strong>App.jsx</strong> آپ کا مرکزی component ہے جہاں سے آپ UI development شروع کرتے ہیں۔</p>
          </div>
          <div className="summary-points">
            <div className="summary-item">
              <div className="summary-icon">📄</div>
              <div>HTML ٹیمپلیٹ</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <div>Entry Point</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">⚛️</div>
              <div>مرکزی Component</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🎨</div>
              <div>CSS اسٹائلنگ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} کوڈ کاپی ہوگیا!
        </div>
      )}
    </div>
  );
}

export default Chapter4;