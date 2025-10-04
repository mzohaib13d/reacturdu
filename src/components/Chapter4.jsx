import React, { useState } from 'react';

function Chapter4() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
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
    <div className="card urdu-text">
      <h2>Chapter 4.React ایپ کی بنیادی فائلیں اور ان کا کردار</h2>
      <p>
        اب میں یہ بتاؤں گا کہ جو فائلیں عموماً React پروجیکٹ میں ہوتی ہیں (خاص
        طور پر CRA یا Vite بیسڈ) — ان کا مقصد کیا ہے، اور آپ کا "Hello World"
        کیسے دکھایا جائے۔
      </p>
      
      <h3>ذیل میں وہ عام فائلیں ہیں:</h3>
      
      <div className="file-table">
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '15px 0'}}>
          <thead>
            <tr style={{backgroundColor: '#f0f4ff'}}>
              <th style={{padding: '10px', border: '1px solid #ddd', textAlign: 'right'}}>فائل / فولڈر</th>
              <th style={{padding: '10px', border: '1px solid #ddd', textAlign: 'right'}}>مقام</th>
              <th style={{padding: '10px', border: '1px solid #ddd', textAlign: 'right'}}>مقصد / وضاحت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>public/index.html</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>عمومی HTML ٹیمپلیٹ</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>یہ وہ HTML صفحہ ہے جو براؤزر میں سب سے پہلے لوڈ ہوتا ہے۔ اس میں <code>&lt;div id="root"&gt;&lt;/div&gt;</code> رکھا جاتا ہے، جہاں React اپنا کام کرے گی۔</td>
            </tr>
            <tr>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>src/index.js یا src/main.jsx</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>انٹری پوائنٹ JS/JSX</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>یہ وہ فائل ہے جو React ایپ کو start کرتی ہے — یہ root div کو تلاش کرتی ہے اور React component کو وہاں رینڈر کرتی ہے۔</td>
            </tr>
            <tr>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>src/App.js یا src/App.jsx</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>مرکزی Component</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>یہ آپ کا بنیادی React component ہے جہاں آپ UI logic لکھتے ہیں۔ آپ اسے چھوٹے components کی شکل میں تقسیم کریں گے۔</td>
            </tr>
            <tr>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>src/index.css</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>گلوبل CSS</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>یہ CSS وہ اسٹائل ہیں جو پوری ایپ پر لاگو ہوتے ہیں — عام اسٹائلز، reset styles وغیرہ۔</td>
            </tr>
            <tr>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>src/App.css</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>Component-specific CSS</td>
              <td style={{padding: '10px', border: '1px solid #ddd'}}>یہ وہ اسٹائل ہے جو App component کے لیے مخصوص ہوتی ہے۔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>نوٹ:</strong> اگر آپ Vite پر جائیں گے، serviceWorker.js وغیرہ ڈیفالٹ میں نہ ہوں گے (وہ CRA-specific چیزیں ہیں)۔</p>

      <h3>Hello World مثال — Vite + React سیٹ اپ</h3>
      <p>نیچے ایک سادہ مثال ہے جسے آپ اپنا tutorial کا حصہ بنا سکتے ہیں:</p>

      <h4>public/index.html</h4>
      <pre className="english-code">
        <code>{htmlCode}</code>
      </pre>
      <button onClick={() => handleCopy(htmlCode)} className="copy-btn">
        کاپی کریں
      </button>

      <h4>src/main.jsx (یا index.jsx)</h4>
      <pre className="english-code">
        <code>{mainJsxCode}</code>
      </pre>
      <button onClick={() => handleCopy(mainJsxCode)} className="copy-btn">
        کاپی کریں
      </button>

      <h4>src/App.jsx</h4>
      <pre className="english-code">
        <code>{appJsxCode}</code>
      </pre>
      <button onClick={() => handleCopy(appJsxCode)} className="copy-btn">
        کاپی کریں
      </button>

      <h4>src/index.css + src/App.css</h4>
      <pre className="english-code">
        <code>{cssCode}</code>
      </pre>
      <button onClick={() => handleCopy(cssCode)} className="copy-btn">
        کاپی کریں
      </button>

      <p>اگر آپ یہ تمام فائلیں صحیح ترتیب میں رکھیں اور <code>npm run dev</code> کریں، تو آپ براؤزر میں جاکر دیکھیں گے: <strong>ہیلو ورلڈ!</strong></p>
      <p>یہ وہ بنیادی ترتیب ہے۔</p>
      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default Chapter4;