import React, { useState, useEffect } from "react";

const Chapter9 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  // 🔹 Copy function for the syntax code block
  const copySyntaxCode = () => {
    const syntaxCode = `useEffect(() => {
  // یہاں آپ کا کوڈ ہوگا جو render کے بعد چلے گا
}, []);`;
    navigator.clipboard.writeText(syntaxCode);
    setCopyStatus("Syntax کوڈ کوپي ہو گیا!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const examples = [
    {
      id: 1,
      title: "مثال 1: کمپوننٹ لوڈ ہوتے ہی alert دکھانا",
      description:
        "جب یہ component پہلی بار render ہوتا ہے تو useEffect والا alert فوراً دکھ جاتا ہے۔",
      code: `// App.jsx
import React, { useEffect } from "react";

function App() {
  // useEffect: یہ React کا Hook ہے
  // مطلب: جب component render ہو جائے تو یہ code چلاؤ
  useEffect(() => {
    alert("صفحہ لوڈ ہو گیا 🎉"); // صفحہ کھلتے ہی alert آ جائے گا
  }, []); // [] dependency array ہے -> مطلب صرف ایک بار چلاؤ

  return (
    <div className="app-container">
      <h1>useEffect Hook - مثال 1</h1>
      <p>یہ مثال صرف صفحہ کھلنے پر alert دکھاتی ہے۔</p>
    </div>
  );
}

export default App;`,
    },
    {
      id: 2,
      title: "مثال 2: صفحہ کھلنے پر console.log اور state اپڈیٹ",
      description:
        "جب component load ہوتا ہے تو console میں میسج آتا ہے اور count state فوراً 5 ہو جاتی ہے۔",
      code: `// App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0); // state کا آغاز 0 سے

  useEffect(() => {
    console.log("کمپوننٹ لوڈ ہو گیا");
    setCount(5); // صفحہ کھلتے ہی count کو 5 کر دینا
  }, []); // خالی array -> صرف ایک بار چلے گا

  return (
    <div className="app-container">
      <h1>useEffect Hook - مثال 2</h1>
      <p>Count کی موجودہ ویلیو: {count}</p>
    </div>
  );
}

export default App;`,
    },
    {
      id: 3,
      title: "مثال 3: state بدلنے پر useEffect دوبارہ چلانا",
      description:
        "component لوڈ ہونے پر اور ہر بار name بدلنے پر useEffect دوبارہ چلتا ہے۔",
      code: `// App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("احمد"); // پہلا نام احمد ہے

  useEffect(() => {
    // یہ code ہر بار چلے گا جب "name" بدلے گا
    console.log("نام بدل گیا یا component load ہوا");
  }, [name]); // dependency array -> یہاں "name" ڈالا ہے

  return (
    <div className="app-container">
      <h1>useEffect Hook - مثال 3</h1>
      <p>نام: {name}</p>
      <button onClick={() => setName("فاطمہ")}>نام بدلیں</button>
    </div>
  );
}

export default App;`,
    },
    {
      id: 4,
      title: "مثال 4: API سے ڈیٹا لینا (Fake API + Loading state)",
      description:
        "یہ ایک حقیقی اور تھوڑی مشکل مثال ہے جس میں API call، async/await، error handling اور state management شامل ہے۔",
      code: `// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);        // users کی لسٹ state میں
  const [loading, setLoading] = useState(true);  // loading true/false کیلئے

  useEffect(() => {
    // async function: مطلب کہ یہ فنکشن وقت لے سکتا ہے (API کال وغیرہ)
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        // await: جب تک جواب نہ آ جائے تب تک رکو
        const data = await res.json(); // JSON ڈیٹا کو object میں بدلو
        setUsers(data);       // ڈیٹا state میں ڈال دیا
      } catch (err) {
        console.error("ڈیٹا حاصل نہیں ہوا:", err); // error آگئی
      } finally {
        setLoading(false);    // آخر میں loading false کر دی
      }
    }
    fetchUsers(); // فنکشن کو چلاؤ
  }, []); // صرف ایک بار چلانا ہے

  return (
    <div className="app-container">
      <h1>useEffect Hook - مثال 4</h1>
      {loading ? (
        <p>ڈیٹا لوڈ ہو رہا ہے...</p> // جب تک ڈیٹا نہیں آتا
      ) : (
        <ul>
          {users.map(user => (   // map: ہر user کیلئے ایک <li> بنا دو
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;`,
    },
  ];

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر نمبر 9 – useEffect Hook (ابتدائی سطح)
        </h1>
        <p className="chapter-subtitle2 text-break">
          React میں <strong>useEffect()</strong> ایک ایسا Hook ہے جو آپ کو{" "}
          <strong>side effects</strong>
          (یعنی وہ کام جو React کے render ہونے کے بعد ہونا چاہیے) کرنے دیتا ہے۔
        </p>
      </div>

      <div className="content-wrapper">
        {/* 🔹 sidebar: تمام مثالوں کے buttons */}
        <div className="sidebar">
          <h3 className="text-break">مثالیں</h3>
          <ul className="example-list">
            {examples.map((example) => (
              <li key={example.id}>
                <button
                  className={`sidebar-btn text-break ${
                    activeTab === example.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(example.id)}
                >
                  مثال {example.id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/*🔹 main content: منتخب مثال دکھانا */}
        <div className="main-content">
          <div className="section-card">
            <h2 className="section-title text-break">
              {examples[activeTab - 1].title}
            </h2>
            <p className="section-text text-break">
              {examples[activeTab - 1].description}
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">کوڈ:</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].code, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`) ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{examples[activeTab - 1].code}</code>
                </pre>
              </div>
            </div>

            {copyStatus && <div className="copy-msg">{copyStatus}</div>}
          </div>

          <div className="section-card">
            <h3 className="section-title text-break">
              📖 useEffect کا بنیادی syntax
            </h3>
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">Syntax:</span>
                <button
                  className="copy-btn"
                  onClick={copySyntaxCode}
                >
                  {copyStatus === "Syntax کوڈ کوپي ہو گیا!" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{`useEffect(() => {
  // یہاں آپ کا کوڈ ہوگا جو render کے بعد چلے گا
}, []);`}</code>
                </pre>
              </div>
            </div>
            <div className="explanation-box">
              <h4 className="text-break">🔹 وضاحت:</h4>
              <ul>
                <li className="text-break">
                  <strong>پہلا argument:</strong> ایک فنکشن ہے (یعنی code کا
                  بلاک)
                </li>
                <li className="text-break">
                  <strong>دوسرا argument:</strong> dependency array ہے (کس پر
                  نظر رکھنی ہے)
                </li>
                <li className="text-break">
                  اگر یہ خالی ہو <code>[]</code> تو یہ صرف ایک بار (component
                  mount پر) چلے گا
                </li>
                <li className="text-break">
                  اگر اس میں کوئی state یا prop دیں تو اس کے بدلنے پر بھی چلے گا
                </li>
              </ul>
            </div>
          </div>

          <div className="summary-card">
            <h3 className="section-title text-break">📌 خلاصہ</h3>
            <div className="summary-content">
              <p className="text-break">
                <strong>useEffect</strong> React کا Hook ہے جو render کے بعد کوڈ
                چلانے دیتا ہے
              </p>
              <p className="text-break">
                <strong>[]</strong> دینے سے صرف ایک بار چلے گا
              </p>
              <p className="text-break">
                <strong>state یا prop</strong> دینے سے ہر بار ان کے بدلنے پر چلے
                گا
              </p>
              <p className="text-break">
                اس مثال میں طلبہ سیکھیں گے کہ useEffect صرف alert یا console
                کیلئے نہیں بلکہ real-world scenarios جیسے API fetching کیلئے بھی
                استعمال ہوتا ہے
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copyStatus && (
        <div className="copy-notification">
          ✅ {copyStatus}
        </div>
      )}
    </div>
  );
};

export default Chapter9;