import React, { useState } from 'react';

function Chapter6() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
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
    <div className="card urdu-text">
      <h2>Chapter 6. React Hooks کا آغاز – useState Hook</h2>
      
      <div className="lesson-section">
        <h3>📝 سبق: React Hooks کا آغاز – useState Hook</h3>

        <h4>⿡ Hook کیا ہے؟</h4>
        <p>React میں <em>Hook</em> وہ فنکشن ہے جو ہمیں Functional Components میں state یا دوسری React کی خصوصیات استعمال کرنے دیتا ہے۔</p>

        <h4>⿢ useState Hook کیا کرتا ہے؟</h4>
        <p>یہ ایک React Hook ہے جو کسی کمپوننٹ کے اندر <em>state</em> (یعنی اندرونی ڈیٹا جو بدل سکتا ہے) رکھتا ہے۔</p>
        
        <p><strong>ہم اس سے دو چیزیں حاصل کرتے ہیں:</strong></p>
        <ul>
          <li><em>state variable</em> (موجودہ ویلیو)</li>
          <li><em>set function</em> (state کو بدلنے والا فنکشن)</li>
        </ul>

        <div className="english-code">
          <code>const [value, setValue] = useState(initialValue);</code>
        </div>
        <button onClick={() => handleCopy("const [value, setValue] = useState(initialValue);")} className="copy-btn">
          کاپی کریں
        </button>
      </div>

      <div className="code-section">
        <h3>🧑‍💻 مثال 1: دو Counter بٹن</h3>
        <p><strong>📁 src/App.jsx</strong></p>
        <pre className="english-code">
          <code>{example1Code}</code>
        </pre>
        <button onClick={() => handleCopy(example1Code)} className="copy-btn">
          کاپی کریں
        </button>
      </div>

      <div className="code-section">
        <h3>🧑‍💻 مثال 2: Toggle Background Button</h3>
        <p><strong>📁 src/ToggleBackground.jsx</strong></p>
        <pre className="english-code">
          <code>{example2Code}</code>
        </pre>
        <button onClick={() => handleCopy(example2Code)} className="copy-btn">
          کاپی کریں
        </button>

        <p className="mt-3"><strong>اور App.jsx میں آپ اسے اس طرح استعمال کر سکتے ہیں:</strong></p>
        <pre className="english-code">
          <code>{appUsageCode}</code>
        </pre>
        <button onClick={() => handleCopy(appUsageCode)} className="copy-btn">
          کاپی کریں
        </button>
      </div>

      <div className="code-section">
        <h3>📁 src/App.css (اضافی کلاسیں)</h3>
        <pre className="english-code">
          <code>{cssCode}</code>
        </pre>
        <button onClick={() => handleCopy(cssCode)} className="copy-btn">
          کاپی کریں
        </button>
        
        <p className="mt-3"><em>(آپ کا پچھلا CSS بھی لگا رہے گا، یہ اضافی کلاسیں اس پر کام کریں گی۔)</em></p>
      </div>

      <div className="explanation-section">
        <h3>🔹 وضاحت:</h3>
        <ul>
          <li><strong>دو Counter:</strong> ہر ایک کیلئے الگ useState استعمال کیا۔</li>
          <li><strong>Toggle Background:</strong> ایک boolean state dark رکھا، ہر کلک پر true/false بدلتا ہے اور background تبدیل ہوتا ہے۔</li>
          <li><strong>useState Syntax:</strong> <code>const [state, setState] = useState(initialValue)</code></li>
          <li><strong>State Update:</strong> set function استعمال کر کے state کو update کریں۔</li>
        </ul>
      </div>

      <div className="homework-section">
        <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
        <ol>
          <li>ایک <em>User Profile</em> Component بنائیں جس میں نام اور عمر کی state ہو۔</li>
          <li>دو بٹن بنائیں: ایک نام تبدیل کرنے کیلئے، دوسرا عمر بڑھانے کیلئے۔</li>
          <li>ایک <em>Theme Switcher</em> بنائیں جو 3 مختلف themes میں toggle کر سکے۔</li>
        </ol>
      </div>

      <div className="learning-outcomes">
        <h3>اس سبق کے بعد طلبہ:</h3>
        <ul>
          <li>✅ useState Hook کا concept سمجھیں گے</li>
          <li>✅ State variable اور set function کا استعمال سیکھیں گے</li>
          <li>✅ Multiple states کو manage کرنا سیکھیں گے</li>
          <li>✅ Conditional rendering کے ساتھ state کا استعمال سیکھیں گے</li>
        </ul>
      </div>

      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default Chapter6;