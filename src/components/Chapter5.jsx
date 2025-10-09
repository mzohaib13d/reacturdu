import React, { useState } from "react";

function Chapter5() {
  const [activeTab, setActiveTab] = useState(1);
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // React Basics Examples
  // Example 1: Comments in React JS
  const example1Code = `import React from 'react';

function App() {
  // یہ ایک سادہ کمنٹ ہے - Single line comment
  
  /*
    یہ ایک ملٹی لائن کمنٹ ہے
    جس میں ہم زیادہ تفصیل لکھ سکتے ہیں
  */
  
  return (
    <div>
      {/* یہ JSX میں کمنٹ کا طریقہ ہے */}
      <h1>ری ایکٹ میں کمنٹس</h1>
      
      {/*
        JSX میں ملٹی لائن کمنٹ
        یہ رینڈر نہیں ہوگا
      */}
      <p>یہ متن دکھائی دے گا</p>
    </div>
  );
}

export default App;`;

  // Example 2: Adding Images
  const example2Code = `import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>ری ایکٹ میں تصاویر شامل کریں</h1>
      
      {/* طریقہ 1: src فولڈر سے تصویر */}
      <img 
        src="/images/my-image.jpg" 
        alt="میری تصویر"
        style={{ width: '300px', height: '200px', borderRadius: '10px' }}
      />
      
      {/* طریقہ 2: import کر کے */}
      <img 
        src={require('./local-image.png')} 
        alt="لوکل تصویر"
        style={{ width: '250px', margin: '10px' }}
      />
      
      {/* طریقہ 3: بیرونی لنک سے */}
      <img 
        src="https://example.com/image.jpg" 
        alt="بیرونی تصویر"
        style={{ 
          width: '400px', 
          height: '250px', 
          objectFit: 'cover',
          border: '2px solid #0078ff'
        }}
      />
      
      {/* طریقہ 4: public فولڈر سے */}
      <img 
        src="/public-images/photo.jpg" 
        alt="پبلک فولڈر سے تصویر"
        style={{ width: '350px', borderRadius: '15px' }}
      />
    </div>
  );
}

export default App;`;

  // Example 3: Anchor Links
  const example3Code = `import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>ری ایکٹ میں لنکس بنانے کا طریقہ</h1>
      
      {/* طریقہ 1: سادہ اینکر لنک */}
      <a 
        href="https://www.example.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0078ff', textDecoration: 'none' }}
      >
        مثال ویب سائٹ پر جائیں
      </a>
      
      <br /><br />
      
      {/* طریقہ 2: بٹن سٹائل والا لنک */}
      <a 
        href="/about" 
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0078ff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          margin: '5px'
        }}
      >
        About پیج پر جائیں
      </a>
      
      {/* طریقہ 3: ایمیل لنک */}
      <a 
        href="mailto:example@email.com"
        style={{ color: '#28a745', marginLeft: '10px' }}
      >
        ہمیں ای میل کریں
      </a>
      
      <br /><br />
      
      {/* طریقہ 4: فون لنک */}
      <a 
        href="tel:+1234567890"
        style={{ color: '#dc3545' }}
      >
        +92 300 1234567
      </a>
      
      {/* طریقہ 5: اسی پیج کے اندر لنک */}
      <div style={{ marginTop: '20px' }}>
        <a href="#section1">سیکشن 1 پر جائیں</a> | 
        <a href="#section2"> سیکشن 2 پر جائیں</a>
      </div>
    </div>
  );
}

export default App;`;

  // Example 4: Creating Components and Pages
  const example4Code = `import React from 'react';

// 🔹 طریقہ 1: فنکشنل کمپونینٹ
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 🔹 طریقہ 2: ایرو فنکشن کمپونینٹ
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px' }}>
      {children}
    </button>
  );
};

// 🔹 طریقہ 3: نئی پیج بنانا
function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>یہ About پیج ہے</p>
    </div>
  );
}

// 🔹 طریقہ 4: navbar کمپونینٹ
function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px',
      color: 'white'
    }}>
      <a href="/" style={{ color: 'white', margin: '0 15px' }}>Home</a>
      <a href="/about" style={{ color: 'white', margin: '0 15px' }}>About</a>
      <a href="/contact" style={{ color: 'white', margin: '0 15px' }}>Contact</a>
    </nav>
  );
}

// 🔹 مین App کمپونینٹ
function App() {
  return (
    <div>
      {/* Navbar کو استعمال کریں */}
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        {/* دوسرے کمپونینٹس استعمال کریں */}
        <Welcome name="احمد" />
        <Welcome name="فاطمہ" />
        
        <Button onClick={() => alert('بٹن دبایا گیا!')}>
          کلک کریں
        </Button>
      </div>
    </div>
  );
}

export default App;`;

  // Example 5: Using Navbar in App.jsx
  const example5Code = `// 📁 src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0078ff',
      padding: '15px 20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        میری ویب سائٹ
      </div>
      
      <div>
        <a 
          href="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          ہوم
        </a>
        <a 
          href="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          About
        </a>
        <a 
          href="/contact"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

// 📁 src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      {/* Navbar کو یہاں استعمال کریں */}
      <Navbar />
      
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {/* آپ کا مین کونٹینٹ یہاں آئے گا */}
        <h1>میرے ری ایکٹ ایپ میں خوش آمدید</h1>
        <p>یہ Navbar اوپر ہے اور تمام پیجز پر دکھائی دے گا</p>
      </main>
      
      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #dee2e6'
      }}>
        © 2024 میری ویب سائٹ۔ تمام حقوق محفوظ ہیں۔
      </footer>
    </div>
  );
}

export default App;`;

  const reactBasicsExamples = [
    {
      id: 1,
      title: "ری ایکٹ جے ایس میں کمنٹ کیسے کرتے ہیں؟",
      description:
        "ری ایکٹ میں مختلف قسم کے کمنٹس لکھنے کے طریقے - JavaScript اور JSX دونوں میں۔",
      code: example1Code,
    },
    {
      id: 2,
      title: "ری ایکٹ جے ایس میں پکچر کیسے لگاتے ہیں؟",
      description:
        "ری ایکٹ میں تصاویر شامل کرنے کے مختلف طریقے - لوکل، import, اور بیرونی لنکس سے۔",
      code: example2Code,
    },
    {
      id: 3,
      title: "ری ایکٹ جے ایس میں اینکر لنک کیسے بناتے ہیں؟",
      description:
        "ری ایکٹ میں مختلف قسم کے لنکس بنانے کا طریقہ - ویب سائٹس، ایمیل، فون وغیرہ۔",
      code: example3Code,
    },
    {
      id: 4,
      title: "ری ایکٹ جے ایس میں نیا پیج یا کمپونینٹس بنانے کا طریقہ",
      description:
        "ری ایکٹ میں نئے کمپونینٹس اور پیجز بنانے کا مکمل طریقہ کار۔",
      code: example4Code,
    },
    {
      id: 5,
      title: "Navbar کو App.jsx میں لگانے کا طریقہ",
      description:
        "Navbar کمپونینٹ بنانا اور اسے App.jsx میں صحیح طریقے سے استعمال کرنا۔",
      code: example5Code,
    },
  ];

  // Original Chapter 5 content
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
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر 5 – ری ایکٹ کی بنیادی پروگرامنگ + فنکشنل کمپونینٹس
        </h1>
        <p className="chapter-subtitle2 text-break">
          ری ایکٹ جے ایس میں بنیادی پروگرامنگ سے لے کر فنکشنل کمپونینٹس اور
          Props تک کا مکمل سفر
        </p>
      </div>

      {/* 🔹 React Basics Section */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🎯 ری ایکٹ بنیادی پروگرامنگ -- ایک نئے پروگرامر کیلئیے
        </h2>

        <div className="explanation-box">
          <h4 className="text-break">🔹 ری ایکٹ پروگرامنگ کیا ہے؟</h4>
          <p className="section-text text-break">
            <strong>ری ایکٹ</strong> ایک JavaScript لائبریری ہے جو user
            interfaces بنانے کے لیے استعمال ہوتی ہے۔ یہ نئے پروگرامرز کے لیے بہت
            آسان ہے اگر بنیادی تصورات سمجھ لیے جائیں۔
          </p>

          <div className="methods-grid">
            <div className="method-card">
              <h3 className="text-break">💬 کمنٹس</h3>
              <p className="text-break">
                JavaScript اور JSX میں کمنٹس لکھنے کا طریقہ
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🖼️ تصاویر</h3>
              <p className="text-break">
                ری ایکٹ میں مختلف طریقوں سے تصاویر شامل کریں
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🔗 لنکس</h3>
              <p className="text-break">
                اینکر لنکس اور navigation بنانے کا طریقہ
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🧩 کمپونینٹس</h3>
              <p className="text-break">
                نئے کمپونینٹس اور پیجز بنانے کا طریقہ
              </p>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* 🔹 sidebar: تمام مثالوں کے buttons */}
          <div className="sidebar">
            <h3 className="text-break">بنیادی مثالیں</h3>
            <ul className="example-list">
              {reactBasicsExamples.map((example) => (
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
                {reactBasicsExamples[activeTab - 1].title}
              </h2>
              <p className="section-text text-break">
                {reactBasicsExamples[activeTab - 1].description}
              </p>

              {/* 🔹 JSX CODE */}
              <div className="code-block-container">
                <div className="code-header">
                  <span className="text-break">
                    {activeTab === 5
                      ? "📁 src/components/Navbar.jsx"
                      : "📁 src/App.jsx"}
                  </span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        reactBasicsExamples[activeTab - 1].code,
                        `مثال ${activeTab}`
                      )
                    }
                  >
                    {copiedCode === `مثال ${activeTab}`
                      ? "کاپی ہوگیا ✅"
                      : "📋 کاپی کریں"}
                  </button>
                </div>

                <div className="code-block-wrapper">
                  <pre className="english-code">
                    <code>{reactBasicsExamples[activeTab - 1].code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Original Chapter 5 Content - Functional Components + Props */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🧩 فنکشنل کمپونینٹس + JSX + Props
        </h2>

        <div className="lesson-section">
          <h3>📝 سبق: فنکشنل کمپوننٹ، JSX اور Props</h3>

          <h4>1️⃣ فنکشنل کمپوننٹ کیا ہے؟</h4>
          <p>
            React میں ہر UI حصہ ایک <em>Component</em> ہوتا ہے۔
          </p>
          <p>
            Functional Component ایک <em>سادہ JavaScript فنکشن</em> ہوتا ہے جو
            UI (یعنی JSX) واپس کرتا ہے۔
          </p>
          <p>
            <strong>یاد رکھیں:</strong> React میں Component کا پہلا حرف ہمیشہ
            Capital ہوتا ہے۔
          </p>

          <h4>2️⃣ JSX کیا ہے؟</h4>
          <p>
            JSX ایک خاص syntax ہے جو HTML جیسا نظر آتا ہے مگر اندر JavaScript
            بھی استعمال کر سکتے ہیں۔
          </p>
          <p>React اس JSX کو HTML میں بدل دیتا ہے۔</p>

          <h4>3️⃣ Props کیا ہیں؟</h4>
          <p>
            Props (یعنی properties) وہ ڈیٹا ہے جو ہم ایک Component کو باہر سے
            بھیجتے ہیں تاکہ وہ مختلف طریقوں سے ڈسپلے کرے۔
          </p>
          <p>
            مثال: آپ نے ایک Card Component بنایا اور ہر Card پر مختلف نام یا
            تصویر دکھانی ہو تو وہ Props سے ممکن ہوتا ہے۔
          </p>
        </div>

        <div className="code-section">
          <h3>🧑‍💻 کوڈ کی مثال</h3>

          <h4>📁 src/App.jsx</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 src/App.jsx</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(chapter2AppCode, "App Component")
                }
              >
                {copiedCode === "App Component"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2AppCode}</code>
              </pre>
            </div>
            <div className="code-scroll-notice">
              Please scroll →
            </div>
          </div>

          <h4>📁 src/Greeting.jsx</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 src/Greeting.jsx</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(chapter2GreetingCode, "Greeting Component")
                }
              >
                {copiedCode === "Greeting Component"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2GreetingCode}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>4️⃣ یہ کوڈ کیا کرے گا؟</h4>
          <ul>
            <li>آپ کی App.jsx دو بار Greeting Component استعمال کرے گی۔</li>
            <li>ہر بار مختلف name اور message props دیں گے۔</li>
            <li>
              نتیجہ: صفحے پر دو Greetings الگ الگ ڈیٹا کے ساتھ نظر آئیں گے۔
            </li>
          </ul>

          <h4>5️⃣ Props کو اور بھی آسان بنائیں (Destructuring)</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 Destructuring Props</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    chapter2DestructuringCode,
                    "Destructuring Props"
                  )
                }
              >
                {copiedCode === "Destructuring Props"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2DestructuringCode}</code>
              </pre>
            </div>
            <div className="code-scroll-notice">
              Please scroll →
            </div>
          </div>
        </div>

        <div className="homework-section">
          <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
          <ol>
            <li>
              ایک <em>Card</em> Component بنائیں جو props سے title، description
              لے اور ڈسپلے کرے۔
            </li>
            <li>
              App.jsx میں اس Card کو تین بار کال کریں ہر بار مختلف props دیں۔
            </li>
          </ol>
        </div>

        <div className="learning-outcomes">
          <h3>اس سبق کے بعد طلبہ:</h3>
          <ul>
            <li>Component اور JSX کے بیچ فرق سمجھیں گے۔</li>
            <li>Props کے ذریعے ڈیٹا بھیجنا سیکھیں گے۔</li>
            <li>
              ایک ہی Component کو مختلف ڈیٹا کے ساتھ استعمال کرنا سیکھیں گے۔
            </li>
          </ul>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter5;
