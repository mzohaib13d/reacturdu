import React, { useState } from "react";

function Chapter7() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Event Handling Example Code
  const eventHandlingCode = `// 🌸 سب سے پہلے ہم React کو import کر رہے ہیں تاکہ React کا code استعمال کر سکیں۔
// React کے ساتھ ہم { useState } بھی لے رہے ہیں کیونکہ ہمیں data (نام اور ای میل) یاد رکھنا ہے۔
import React, { useState } from "react";

// 🌼 اپنی CSS فائل import کر رہے ہیں تاکہ صفحہ خوبصورت لگے۔
import "./App.css";

// 🌷 یہ ہمارا main component ہے جسے "App" کہا گیا ہے۔
// ہر React ایپ میں ایک main component ہوتا ہے جو پورا صفحہ سنبھالتا ہے۔
function App() {

  // 🩵 useState ایک خاص React Hook ہے جو data کو یاد رکھتا ہے۔
  // یہاں ہم دو چیزیں یاد رکھ رہے ہیں:
  // (1) name → user کا نام
  // (2) email → user کی ای میل
  // شروع میں دونوں خالی ("") ہیں کیونکہ ابھی user نے کچھ نہیں لکھا۔
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 💛 یہ function تب چلے گا جب user فارم کو submit کرے گا۔
  // فارم submit کرنے کا مطلب ہے "بھیجنا" یعنی user نے لکھ لیا اور بٹن دبا دیا۔
  const handleSubmit = (e) => {
    // 🚫 e.preventDefault() صفحے کو دوبارہ reload ہونے سے روکتا ہے۔
    // ورنہ فارم submit ہوتے ہی پورا صفحہ ریفریش ہو جاتا ہے اور data ختم ہو جاتا ہے۔
    e.preventDefault(); 

    // 🩷 alert() ایک چھوٹا popup box کھولتا ہے جس میں ہم user کا نام اور ای میل دکھا رہے ہیں۔
    // \`\${name}\` اور \`\${email}\` وہی values ہیں جو user نے input میں لکھی تھیں۔
    alert(\`نام: \${name} \\nای میل: \${email}\`);

    // 🧹 فارم submit ہونے کے بعد ان دونوں input فیلڈز کو خالی کر رہے ہیں
    // تاکہ اگلی بار نیا نام اور نئی ای میل لکھی جا سکے۔
    setName("");
    setEmail("");
  };

  // 💜 اب ہم return کے اندر وہ HTML نما code لکھتے ہیں جو browser میں دکھائی دیتا ہے۔
  // React میں اس طرح کا code JSX کہلاتا ہے۔
  return (
    // 📦 یہ ایک container div ہے — اس کے اندر ہمارا پورا فارم رکھا گیا ہے۔
    <div className="app-container">

      {/* 🏷️ یہ فارم کا Title (سرخی) ہے۔ */}
      <h1 className="title">ایونٹس ہینڈلنگ – سادہ فارم</h1>

      {/* 🌷 فارم شروع ہو رہا ہے۔
          onSubmit کا مطلب ہے کہ جب فارم submit کیا جائے تو handleSubmit function چلے۔ */}
      <form onSubmit={handleSubmit} className="form-section">

        {/* 🩵 پہلا input field — user یہاں اپنا نام لکھے گا۔ */}
        <label>
          نام:
          <input
            type="text"                  // input کا مطلب ہے text لکھنے کی جگہ
            value={name}                 // value وہی دکھائے گی جو state میں محفوظ ہے
            onChange={(e) => setName(e.target.value)} // جیسے ہی user کچھ لکھے، وہ state میں محفوظ ہو جائے
          />
        </label>

        {/* 💛 دوسرا input field — user یہاں اپنی ای میل لکھے گا۔ */}
        <label>
          ای میل:
          <input
            type="email"                 // اس سے browser کو پتہ چلتا ہے کہ یہ email فیلڈ ہے
            value={email}                // value وہی دکھائے گی جو state میں محفوظ ہے
            onChange={(e) => setEmail(e.target.value)} // user کے لکھتے ہی state اپڈیٹ ہو جائے
          />
        </label>

        {/* 🌸 یہ Submit بٹن ہے۔
            type="submit" کا مطلب ہے کہ فارم بھیج دیا جائے۔
            فارم بھیجنے پر اوپر والا handleSubmit function خود بخود چل جائے گا۔ */}
        <button type="submit">بھیجیں</button>
      </form>
    </div>
  );
}

export default App;
`;

  // Form CSS Code
  const formCssCode = `.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: system-ui;
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
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

function ConditionalExample() {
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
}

export default ConditionalExample;
`;

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
  const appUsageCode = `import React from "react";
import ConditionalExample from "./ConditionalExample";
import "./App.css";

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
        <p>
          React میں ایونٹ وہی کام کرتے ہیں جو HTML میں ہوتے ہیں، لیکن ان کے نام
          camelCase میں ہوتے ہیں، جیسے onClick، onChange وغیرہ۔
        </p>
        <p>
          ہم ایونٹ ہینڈلرز کو فنکشن کی شکل میں لکھتے ہیں اور کمپوننٹ کے اندر
          استعمال کرتے ہیں۔
        </p>
      </div>

      <div className="code-section">
        <h4>🧑‍💻 مثال: ایک سادہ فارم (onChange + onClick)</h4>
        <p>
          <strong>📁 src/App.jsx</strong>
        </p>
        <pre className="english-code">
          <code>{eventHandlingCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-noice">Please scroll →</div>
          <button
            className="copy-btn"
            onClick={() =>
              copyToClipboard(eventHandlingCode, "Event Handling Form")
            }
          >
            {copiedCode === "Event Handling Form"
              ? "کاپی ہوگیا ✅"
              : "📋 کاپی کریں"}
          </button>
        </div>
        <p className="mt-3">
          <strong>📁 src/App.css میں فارم کے لئے کلاسیں:</strong>
        </p>
        <pre className="english-code">
          <code>{formCssCode}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(formCssCode, "Form CSS")}
        >
          {copiedCode === "Form CSS" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>
      </div>

      <div className="explanation-section">
        <h4>🔹 وضاحت:</h4>
        <ul>
          <li>
            <strong>onChange</strong> ہر کی-اسٹروک پر state اپڈیٹ کر رہا ہے۔
          </li>
          <li>
            <strong>onSubmit</strong> بٹن دبانے پر فارم سبمٹ کر رہا ہے اور alert
            دکھا رہا ہے۔
          </li>
          <li>
            <strong>e.preventDefault()</strong> صفحہ کو ری لوڈ ہونے سے روکتا ہے۔
          </li>
        </ul>
      </div>

      <div className="lesson-section">
        <h3>📝 ۲۔ Conditional Rendering (شرطی طور پر UI بدلنا)</h3>
        <p>React میں ہم کسی شرط پر UI بدل سکتے ہیں:</p>
        <ul>
          <li>
            <strong>if</strong> استعمال کر کے
          </li>
          <li>
            یا <strong>ternary operator ? :</strong> سے
          </li>
        </ul>
      </div>

      <div className="code-section">
        <h4>🧑‍💻 مثال: لاگ اِن / لاگ آؤٹ بٹن (if / ternary)</h4>
        <p>
          <strong>📁 src/ConditionalExample.jsx</strong>
        </p>
        <pre className="english-code">
          <code>{conditionalRenderingCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-noice"> Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() =>
              copyToClipboard(conditionalRenderingCode, "Conditional Rendering")
            }
          >
            {copiedCode === "Conditional Rendering"
              ? "کاپی ہوگیا ✅"
              : "📋 کاپی کریں"}
          </button>
        </div>
        <p className="mt-3">
          <strong>📁 src/App.jsx میں اس کو استعمال کریں:</strong>
        </p>
        <pre className="english-code">
          <code>{appUsageCode}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(appUsageCode, "App Usage")}
        >
          {copiedCode === "App Usage" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <p className="mt-3">
          <strong>📁 src/App.css میں کلاسیں:</strong>
        </p>
        <pre className="english-code">
          <code>{conditionalCssCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-noice"> → Please scroll </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(conditionalCssCode, "Conditional CSS")}
          >
            {copiedCode === "Conditional CSS" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
      </div>

      <div className="explanation-section">
        <h4>🔹 وضاحت:</h4>
        <ul>
          <li>
            ہم نے state <code>loggedIn</code> رکھی۔
          </li>
          <li>
            <strong>if</strong> کے ذریعے پیغام بدلتے ہیں۔
          </li>
          <li>
            <strong>ternary</strong> کے ذریعے بٹن کا متن بدلتے ہیں۔
          </li>
          <li>
            <strong>toggleLogin</strong> فنکشن state کو true/false کرتا ہے۔
          </li>
        </ul>
      </div>

      <div className="homework-section">
        <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
        <ol>
          <li>
            ایک <em>Todo List</em> بنائیں جس میں add اور delete کے buttons ہوں۔
          </li>
          <li>
            ایک <em>Theme Switcher</em> بنائیں جو light/dark mode کے علاوہ
            blue/green themes بھی switch کر سکے۔
          </li>
          <li>
            ایک <em>User Registration</em> فارم بنائیں جس میں password strength
            دکھائی جائے (weak/medium/strong)۔
          </li>
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

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter7;