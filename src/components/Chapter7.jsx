import React, { useState } from 'react';

function Chapter7() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  // Event Handling Example Code
  const eventHandlingCode = `import React, { useState } from "react";
import "./App.css";

export default function App() {
  // اردو: نام اور ای میل رکھنے کیلئے state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // اردو: فارم سبمٹ ہونے پر کال ہونے والا فنکشن
  const handleSubmit = (e) => {
    e.preventDefault(); // صفحہ ری لوڈ نہ ہو
    alert(\`نام: \${name}\\nای میل: \${email}\`);
    setName("");
    setEmail("");
  };

  return (
    <div className="app-container">
      <h1 className="title">ایونٹس ہینڈلنگ – سادہ فارم</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <label>
          نام:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // onChange
          />
        </label>
        <label>
          ای میل:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // onChange
          />
        </label>
        <button type="submit">بھیجیں</button> {/* onClick فارم سبمٹ */}
      </form>
    </div>
  );
}`;

  // Form CSS Code
  const formCssCode = `.form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
}

.form-section label {
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 1rem;
  color: #333;
}

.form-section input {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
}

.form-section button {
  padding: 8px 14px;
  font-size: 1rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-section button:hover {
  background-color: #0b5ed7;
}`;

  // Conditional Rendering Example Code
  const conditionalRenderingCode = `import React, { useState } from "react";
import "./App.css";

export default function ConditionalExample() {
  // اردو: یوزر لاگ ان ہے یا نہیں
  const [loggedIn, setLoggedIn] = useState(false);

  // اردو: حالت بدلنے والا فنکشن
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  // if سے UI بدلنا
  let message;
  if (loggedIn) {
    message = <h2>آپ لاگ ان ہیں</h2>;
  } else {
    message = <h2>براہ کرم لاگ ان کریں</h2>;
  }

  return (
    <div className="conditional-section">
      {message}

      {/* ternary operator */}
      <button onClick={toggleLogin}>
        {loggedIn ? "لاگ آؤٹ کریں" : "لاگ ان کریں"}
      </button>
    </div>
  );
}`;

  // Conditional CSS Code
  const conditionalCssCode = `.conditional-section {
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background-color: #f8f9fa;
  margin-top: 20px;
}

.conditional-section button {
  padding: 6px 14px;
  font-size: 1rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.conditional-section button:hover {
  background-color: #0b5ed7;
}`;

  // App.jsx Usage Code
  const appUsageCode = `import ConditionalExample from "./ConditionalExample";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Conditional Rendering</h1>
      <ConditionalExample />
    </div>
  );
}

export default App;`;

  return (
    <div className="card urdu-text">
      <h2>Chapter 7. ایونٹس ہینڈلنگ + Conditional Rendering</h2>
      <p className="chapter-subtitle">(دو اہم concepts ایک ہی سبق میں)</p>

      <div className="lesson-section">
        <h3>📝 ۱۔ ایونٹس ہینڈلنگ (Event Handling)</h3>
        <p>React میں ایونٹ وہی کام کرتے ہیں جو HTML میں ہوتے ہیں، لیکن ان کے نام camelCase میں ہوتے ہیں، جیسے onClick، onChange وغیرہ۔</p>
        <p>ہم ایونٹ ہینڈلرز کو فنکشن کی شکل میں لکھتے ہیں اور کمپوننٹ کے اندر استعمال کرتے ہیں۔</p>
      </div>

      <div className="code-section">
        <h4>🧑‍💻 مثال: ایک سادہ فارم (onChange + onClick)</h4>
        <p><strong>📁 src/App.jsx</strong></p>
        <pre className="english-code">
          <code>{eventHandlingCode}</code>
        </pre>
        <button onClick={() => handleCopy(eventHandlingCode)} className="copy-btn">
          کاپی کریں
        </button>

        <p className="mt-3"><strong>📁 src/App.css میں فارم کے لئے کلاسیں:</strong></p>
        <pre className="english-code">
          <code>{formCssCode}</code>
        </pre>
        <button onClick={() => handleCopy(formCssCode)} className="copy-btn">
          کاپی کریں
        </button>
      </div>

      <div className="explanation-section">
        <h4>🔹 وضاحت:</h4>
        <ul>
          <li><strong>onChange</strong> ہر کی-اسٹروک پر state اپڈیٹ کر رہا ہے۔</li>
          <li><strong>onSubmit</strong> بٹن دبانے پر فارم سبمٹ کر رہا ہے اور alert دکھا رہا ہے۔</li>
          <li><strong>e.preventDefault()</strong> صفحہ کو ری لوڈ ہونے سے روکتا ہے۔</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h3>📝 ۲۔ Conditional Rendering (شرطی طور پر UI بدلنا)</h3>
        <p>React میں ہم کسی شرط پر UI بدل سکتے ہیں:</p>
        <ul>
          <li><strong>if</strong> استعمال کر کے</li>
          <li>یا <strong>ternary operator ? :</strong> سے</li>
        </ul>
      </div>

      <div className="code-section">
        <h4>🧑‍💻 مثال: لاگ اِن / لاگ آؤٹ بٹن (if / ternary)</h4>
        <p><strong>📁 src/ConditionalExample.jsx</strong></p>
        <pre className="english-code">
          <code>{conditionalRenderingCode}</code>
        </pre>
        <button onClick={() => handleCopy(conditionalRenderingCode)} className="copy-btn">
          کاپی کریں
        </button>

        <p className="mt-3"><strong>📁 src/App.jsx میں اس کو استعمال کریں:</strong></p>
        <pre className="english-code">
          <code>{appUsageCode}</code>
        </pre>
        <button onClick={() => handleCopy(appUsageCode)} className="copy-btn">
          کاپی کریں
        </button>

        <p className="mt-3"><strong>📁 src/App.css میں کلاسیں:</strong></p>
        <pre className="english-code">
          <code>{conditionalCssCode}</code>
        </pre>
        <button onClick={() => handleCopy(conditionalCssCode)} className="copy-btn">
          کاپی کریں
        </button>
      </div>

      <div className="explanation-section">
        <h4>🔹 وضاحت:</h4>
        <ul>
          <li>ہم نے state <code>loggedIn</code> رکھی۔</li>
          <li><strong>if</strong> کے ذریعے پیغام بدلتے ہیں۔</li>
          <li><strong>ternary</strong> کے ذریعے بٹن کا متن بدلتے ہیں۔</li>
          <li><strong>toggleLogin</strong> فنکشن state کو true/false کرتا ہے۔</li>
        </ul>
      </div>

      <div className="homework-section">
        <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
        <ol>
          <li>ایک <em>Todo List</em> بنائیں جس میں add اور delete کے buttons ہوں۔</li>
          <li>ایک <em>Theme Switcher</em> بنائیں جو light/dark mode کے علاوہ blue/green themes بھی switch کر سکے۔</li>
          <li>ایک <em>User Registration</em> فارم بنائیں جس میں password strength دکھائی جائے (weak/medium/strong)۔</li>
        </ol>
      </div>

      <div className="learning-outcomes">
        <h3>اس سبق کے بعد طلبہ:</h3>
        <ul>
          <li>✅ onClick، onChange اور فارم ہینڈلنگ سیکھیں گے</li>
          <li>✅ if اور ternary سے UI کو شرطی طور پر بدلنا سیکھیں گے</li>
          <li>✅ Event handlers کو functions میں لکھنا سیکھیں گے</li>
          <li>✅ Multiple events کو ایک ساتھ manage کرنا سیکھیں گے</li>
          <li>✅ Conditional styling اور rendering میں مہارت حاصل کریں گے</li>
        </ul>
      </div>

      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default Chapter7;