import React, { useState } from "react";

function Chapter3() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const viteCode = `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`;

  const fragmentExample1 = `function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}`;

  const fragmentExample2 = `function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </React.Fragment>
  );
}`;

  const fragmentExample3 = `function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}`;

  const jsxExample = `<div className="container"></div>
<label htmlFor="name">Name</label>
<img src="logo.png" alt="logo" />
<input type="text" />
<h1>{5 + 5}</h1>   // output: 10`;

  const finalExample = `function App() {
  return (
    <>
      <h1 className="title">میری پہلی React ایپ</h1>
      <p>یہ ایک پیراگراف ہے جو JSX میں لکھا گیا ہے۔</p>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </>
  );
}`;

  return (
    <div className="card urdu-text">
      <h2>Chapter 3. Vite بنیاد پر React سیٹ اپ — ایک مختصر رہنما</h2>
      <p>
        یہ وہ راستہ ہے جسے React ٹیم اور کمیونٹی تجویز کر رہی ہے: CRA کی جگہ
        Vite استعمال کرنا۔
      </p>
      <pre className="english-code">
        <code>{viteCode}</code>
      </pre>
      <button
        className="copy-btn"
        onClick={() => copyToClipboard(viteCode, "Vite Setup")}
      >
        {copiedCode === "Vite Setup" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
      </button>
      <p>یہ ایک بہت ہلکا، جدید، تیز React project base تیار کرے گا۔</p>

      {/* React Fragments Section */}
      <div className="fragments-section">
        {/* 🔹 Intro */}
        <h1 id="intro" className="gradient-text glow-hover">🔹 React Fragments کیا ہیں؟</h1>
        <p>React میں جب ہم JSX لکھتے ہیں تو اکثر ہمیں multiple elements واپس کرنے کی ضرورت پڑتی ہے۔ لیکن React کا ایک رول ہے
          کہ:</p>
        <ul>
          <li>ہر component صرف ایک parent element واپس کر سکتا ہے۔</li>
        </ul>
        <p>اگر ہم ایک سے زیادہ &lt;div&gt; یا &lt;p&gt; واپس کرنا چاہیں تو ہمیں انہیں کسی container میں wrap کرنا پڑتا ہے۔
        </p>

        <h2 className="gradient-subtitle slide-in">Example بغیر Fragment کے:</h2>
        <pre className="english-code">
          <code>{fragmentExample1}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(fragmentExample1, "Without Fragment")}
        >
          {copiedCode === "Without Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <p>اوپر ہم نے &lt;div&gt; استعمال کیا ہے صرف اس لیے کہ React کو ایک parent چاہیے۔ لیکن بار بار فالتو &lt;div&gt;
          بنانے کی بجائے ہم Fragment استعمال کر سکتے ہیں۔</p>

        {/* 🔹 Usage */}
        <h2 id="usage" className="gradient-subtitle zoom-in">🔹 Fragment استعمال کرنے کا طریقہ</h2>
        <p>Fragment دو طریقوں سے لکھ سکتے ہیں:</p>

        <h3 className="slide-in">1) &lt;React.Fragment&gt; استعمال کر کے:</h3>
        <pre className="english-code">
          <code>{fragmentExample2}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(fragmentExample2, "React.Fragment")}
        >
          {copiedCode === "React.Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <h3 className="slide-in">2) شارٹ کٹ &lt;&gt; &lt;/&gt; استعمال کر کے:</h3>
        <pre className="english-code">
          <code>{fragmentExample3}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(fragmentExample3, "Shortcut Fragment")}
        >
          {copiedCode === "Shortcut Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>
        <p>یہی سب سے زیادہ استعمال ہوتا ہے۔</p>

        {/* 🔹 Rules */}
        <h2 id="rules" className="gradient-subtitle zoom-in">🔹 Fragments کے رولز</h2>
        <ul>
          <li>Fragment خود DOM (HTML structure) میں extra tag نہیں بناتا۔</li>
          <li>Fragment صرف elements کو گروپ کرنے کے لیے ہوتا ہے۔</li>
          <li>Fragment کو attributes نہیں دیے جا سکتے (سوائے key جب list میں استعمال کریں)</li>
        </ul>

        {/* 🔹 JSX */}
        <h2 id="jsx" className="gradient-subtitle slide-in">🔹 React میں HTML (JSX) کیسے لکھیں؟</h2>
        <p>React میں HTML کو JSX کہا جاتا ہے۔ JSX بالکل HTML جیسا ہے مگر کچھ rules ہیں:</p>
        <ul>
          <li><code>class</code> کی جگہ <code>className</code> لکھیں۔</li>
          <li><code>for</code> کی جگہ <code>htmlFor</code> لکھیں۔</li>
          <li>ہر tag properly بند ہونا چاہیے۔</li>
          <li>JavaScript code ہمیشہ <code>{`{ }`}</code> میں لکھیں۔</li>
        </ul>

        <h3 className="slide-in">مثال:</h3>
        <pre className="english-code">
          <code>{jsxExample}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(jsxExample, "JSX Example")}
        >
          {copiedCode === "JSX Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        {/* 🔹 Example */}
        <h2 id="example" className="gradient-subtitle zoom-in">🔹 Example: React میں HTML لکھنا</h2>
        <pre className="english-code">
          <code>{finalExample}</code>
        </pre>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(finalExample, "Final Example")}
        >
          {copiedCode === "Final Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <button className="pulse-button">🚀 Start Learning</button>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter3;