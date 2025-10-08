import React, { useState } from 'react';

function Chapter5() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const chapter2AppCode = `// اردو وضاحت: یہ مین کمپوننٹ ہے جو سب کچھ اسکرین پر دکھائے گا۔
import React from 'react'
import Greeting from './Greeting' // اردو: ہم نے نیچے بنایا ہوا Greeting کمپوننٹ امپورٹ کیا ہے۔

function App() {
  // اردو: ہم Greeting کمپوننٹ کو دو مختلف props کے ساتھ کال کر رہے ہیں۔
  return (
    <div>
      <h1>React Functional Components + Props</h1>
      
      {/* اردو: پہلا Greeting */}
      <Greeting name="Zohaib" message="React کورس میں خوش آمدید!" />
      
      {/* اردو: دوسرا Greeting */}
      <Greeting name="Ali" message="آپ کا لیکچر شروع ہو رہا ہے۔" />
    </div>
  )
}

export default App`;

  const chapter2GreetingCode = `// اردو وضاحت: یہ ایک Functional Component ہے جو props لے کر UI بناتا ہے۔
import React from 'react'

function Greeting(props) {
  // اردو: ہم props سے name اور message لے رہے ہیں۔
  return (
    <div>
      <h2>ہیلو {props.name}</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Greeting`;

  const chapter2DestructuringCode = `// اردو: props کو الگ الگ لینے کا دوسرا طریقہ
function Greeting({ name, message }) {
  return (
    <div>
      <h2>ہیلو {name}</h2>
      <p>{message}</p>
    </div>
  )
}`;

  return (
    <div className="card urdu-text">
      <h2>Chapter 5. React Functional Components + JSX + Props</h2>
      <p className="chapter-subtitle">(مکمل اردو وضاحت + کوڈ بلاک کے ساتھ)</p>

      <div className="lesson-section">
        <h3>📝 سبق: فنکشنل کمپوننٹ، JSX اور Props</h3>

        <h4>1️⃣ فنکشنل کمپوننٹ کیا ہے؟</h4>
        <p>React میں ہر UI حصہ ایک <em>Component</em> ہوتا ہے۔</p>
        <p>Functional Component ایک <em>سادہ JavaScript فنکشن</em> ہوتا ہے جو UI (یعنی JSX) واپس کرتا ہے۔</p>
        <p><strong>یاد رکھیں:</strong> React میں Component کا پہلا حرف ہمیشہ Capital ہوتا ہے۔</p>

        <h4>2️⃣ JSX کیا ہے؟</h4>
        <p>JSX ایک خاص syntax ہے جو HTML جیسا نظر آتا ہے مگر اندر JavaScript بھی استعمال کر سکتے ہیں۔</p>
        <p>React اس JSX کو HTML میں بدل دیتا ہے۔</p>

        <h4>3️⃣ Props کیا ہیں؟</h4>
        <p>Props (یعنی properties) وہ ڈیٹا ہے جو ہم ایک Component کو باہر سے بھیجتے ہیں تاکہ وہ مختلف طریقوں سے ڈسپلے کرے۔</p>
        <p>مثال: آپ نے ایک Card Component بنایا اور ہر Card پر مختلف نام یا تصویر دکھانی ہو تو وہ Props سے ممکن ہوتا ہے۔</p>
      </div>

      <div className="code-section">
        <h3>🧑‍💻 کوڈ کی مثال</h3>

        <h4>📁 src/App.jsx</h4>
        <pre className="english-code">
          <code>{chapter2AppCode}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(chapter2AppCode, "App Component")}
        >
          {copiedCode === "App Component" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <h4>📁 src/Greeting.jsx</h4>
        <pre className="english-code">
          <code>{chapter2GreetingCode}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(chapter2GreetingCode, "Greeting Component")}
        >
          {copiedCode === "Greeting Component" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>
      </div>

      <div className="explanation-section">
        <h4>4️⃣ یہ کوڈ کیا کرے گا؟</h4>
        <ul>
          <li>آپ کی App.jsx دو بار Greeting Component استعمال کرے گی۔</li>
          <li>ہر بار مختلف name اور message props دیں گے۔</li>
          <li>نتیجہ: صفحے پر دو Greetings الگ الگ ڈیٹا کے ساتھ نظر آئیں گے۔</li>
        </ul>

        <h4>5️⃣ Props کو اور بھی آسان بنائیں (Destructuring)</h4>
        <pre className="english-code">
          <code>{chapter2DestructuringCode}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(chapter2DestructuringCode, "Destructuring Props")}
        >
          {copiedCode === "Destructuring Props" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>
      </div>

      <div className="homework-section">
        <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
        <ol>
          <li>ایک <em>Card</em> Component بنائیں جو props سے title، description لے اور ڈسپلے کرے۔</li>
          <li>App.jsx میں اس Card کو تین بار کال کریں ہر بار مختلف props دیں۔</li>
        </ol>
      </div>

      <div className="learning-outcomes">
        <h3>اس سبق کے بعد طلبہ:</h3>
        <ul>
          <li>Component اور JSX کے بیچ فرق سمجھیں گے۔</li>
          <li>Props کے ذریعے ڈیٹا بھیجنا سیکھیں گے۔</li>
          <li>ایک ہی Component کو مختلف ڈیٹا کے ساتھ استعمال کرنا سیکھیں گے۔</li>
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

export default Chapter5;