import React, { useState, useRef } from 'react';

function Chapter10() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Example 1 Code - Focus Input
  const example1Code = `import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null); // یہ ہمارا ریفرنس ہے

  useEffect(() => {
    // صفحہ کھلتے ہی input پر فوکس
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "right", direction: "rtl", padding: "20px" }}>
      <h1>useRef Hook - مثال 1</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="یہاں لکھیں…"
        style={{ padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}

export default App;`;

  // Example 1 CSS
  const example1CSS = `/* فوکس ان پٹ کے لیے CSS */
.container {
  text-align: right;
  direction: rtl;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.focus-input {
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #0078ff;
  border-radius: 8px;
  width: 300px;
  margin: 10px 0;
  transition: all 0.3s ease;
}

.focus-input:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 120, 255, 0.3);
}

.demo-btn {
  padding: 10px 20px;
  background: #0078ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.demo-btn:hover {
  background: #0056b3;
}`;

  // Example 2 Code - Previous Value
  const example2Code = `import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const previousName = useRef(""); // پچھلی ویلیو کا ڈبہ

  useEffect(() => {
    // ہر بار name بدلے تو previousName میں پرانا والا رکھ لو
    previousName.current = name;
  }, [name]);

  return (
    <div style={{ textAlign: "right", direction: "rtl", padding: "20px" }}>
      <h1>useRef Hook - مثال 2</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="نام لکھیں"
        style={{ padding: "8px", fontSize: "1rem" }}
      />
      <p>موجودہ نام: {name}</p>
      <p>پچھلا نام: {previousName.current}</p>
    </div>
  );
}

export default App;`;

  // Example 2 CSS
  const example2CSS = `/* پچھلی ویلیو کے لیے CSS */
.previous-value-container {
  text-align: right;
  direction: rtl;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 500px;
  margin: 0 auto;
}

.name-input {
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #28a745;
  border-radius: 8px;
  width: 100%;
  margin: 15px 0;
  transition: all 0.3s ease;
}

.name-input:focus {
  outline: none;
  border-color: #1e7e34;
  box-shadow: 0 0 8px rgba(40, 167, 69, 0.3);
}

.name-display {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
  margin: 15px 0;
}

.name-display p {
  margin: 8px 0;
  font-size: 1.1rem;
}

.current-name {
  color: #0078ff;
  font-weight: bold;
}

.previous-name {
  color: #6c757d;
  font-style: italic;
}`;

  // Example 3 Code - Interactive Examples
  const example3Code = `import React, { useRef, useState } from 'react';

function App() {
  // 🌸 مثال 1: ان پٹ پر خودکار فوکس
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // 🌸 مثال 2: ڈبے کا رنگ بدلنا
  const boxRef = useRef(null);

  const changeBoxColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    boxRef.current.style.backgroundColor = randomColor;
  };

  // 🌸 مثال 3: اسٹاپ واچ
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  // 🌸 مثال 4: Scroll باکس
  const scrollBoxRef = useRef(null);

  const scrollToBottom = () => {
    scrollBoxRef.current.scrollTop = scrollBoxRef.current.scrollHeight;
  };

  return (
    <div className="app-container">
      {/* تمام interactive examples یہاں آئیں گی */}
    </div>
  );
}

export default App;`;

  // Example 3 CSS
  const example3CSS = `/* انٹرایکٹو مثالیں کے لیے CSS */
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* رنگ بدلنے والا ڈبہ */
.color-box {
  width: 100%;
  height: 120px;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin: 15px 0;
  border: 3px dashed #0078ff;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #6c757d;
}

/* اسٹاپ واچ */
.stopwatch-container {
  text-align: center;
  padding: 20px;
}

.stopwatch-time {
  font-size: 3rem;
  color: #0078ff;
  font-weight: bold;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-warning {
  background: #ffc107;
  color: #212529;
}

.btn-success:hover { background: #1e7e34; }
.btn-danger:hover { background: #c82333; }
.btn-warning:hover { background: #e0a800; }

/* اسکرول باکس */
.scroll-box {
  height: 200px;
  overflow-y: auto;
  border: 2px solid #6c757d;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  background: #f8f9fa;
}

.scroll-item {
  padding: 8px;
  margin: 5px 0;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #0078ff;
}

/* عمومی بٹن اسٹائلز */
.demo-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 5px;
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}`;

  // Interactive examples implementation
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [name, setName] = useState("");
  const previousName = useRef("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const changeBoxColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    boxRef.current.style.backgroundColor = randomColor;
    boxRef.current.textContent = `رنگ: ${randomColor}`;
    boxRef.current.style.color = '#fff';
  };

  const startStopwatch = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  const scrollToBottom = () => {
    scrollBoxRef.current.scrollTop = scrollBoxRef.current.scrollHeight;
  };

  // Update previous name when current name changes
  React.useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div className="chapter-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.6'
    }}>
      <div className="chapter-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}>
        <h1 className="chapter-title" style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          fontWeight: '700'
        }}>📚 چيپٹر نمبر 10 – useRef Hook</h1>
        <p className="chapter-subtitle" style={{
          fontSize: '1.2rem',
          opacity: '0.9',
          marginBottom: '0'
        }}>
          useRef Hook: DOM elements تک سیدھی رسائی اور values کو render کے بغیر محفوظ رکھنا
        </p>
      </div>

      <div className="lesson-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #667eea',
        textAlign: 'right',
        direction: 'rtl'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>📝 سبق: useRef Hook - DOM رسائی اور values کا انتظام</h3>

        <h4 style={{color: '#4a5568'}}>⿡ useRef کیا ہے؟</h4>
        <p>React میں <em>useRef</em> ایک ایسا Hook ہے جو ہمیں DOM elements تک سیدھی رسائی دیتا ہے اور values کو render کے بغیر محفوظ رکھتا ہے۔</p>

        <h4 style={{color: '#4a5568'}}>⿢ useRef اور useState میں فرق</h4>
        <p><strong>useState:</strong> جب state بدلے تو component دوبارہ render ہوتا ہے</p>
        <p><strong>useRef:</strong> جب ref کی value بدلے تو component دوبارہ render نہیں ہوتا</p>
        
        <p><strong>ہم useRef سے دو چیزیں حاصل کرتے ہیں:</strong></p>
        <ul>
          <li><em>DOM elements تک سیدھی رسائی</em> (جیسے input پر فوکس کرنا)</li>
          <li><em>Values کو محفوظ رکھنا</em> render کے بغیر (جیسے پچھلی ویلیو یاد رکھنا)</li>
        </ul>

        <div className="english-code" style={{
          background: '#1a202c',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          <code>const ref = useRef(initialValue);</code><br/>
          <code>ref.current = newValue; // ویلیو سیٹ کرنا</code><br/>
          <code>console.log(ref.current); // ویلیو پڑھنا</code>
        </div>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard("const ref = useRef(initialValue);\nref.current = newValue;\nconsole.log(ref.current);", "useRef Syntax")}
          style={{
            padding: '10px 20px',
            background: '#0078ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "useRef Syntax" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>
      </div>

      {/* Example 1 with Demo and CSS */}
      <div className="code-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #0078ff'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>🧑‍💻 مثال 1: Input پر خودکار فوکس</h3>
        
        <h4 style={{color: '#4a5568'}}>📁 src/App.jsx</h4>
        <pre className="english-code" style={{
          background: '#1a202c',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example1Code}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example1Code, "فوکس مثال")}
          style={{
            padding: '10px 20px',
            background: '#0078ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "فوکس مثال" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <h4 style={{color: '#4a5568', marginTop: '25px'}}>🎨 متعلقہ CSS</h4>
        <pre className="css-code" style={{
          background: '#2d3748',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example1CSS}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example1CSS, "فوکس CSS")}
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "فوکس CSS" ? "کاپی ہوگیا ✅" : "📋 CSS کاپی کریں"}
        </button>

        <div className="explanation-box" style={{
          background: '#f0f9ff',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0',
          border: '2px solid #0078ff',
          textAlign: 'right',
          direction: 'rtl'
        }}>
          <h4 style={{color: '#0078ff', marginBottom: '15px'}}>🔹 وضاحت:</h4>
          <ul style={{paddingRight: '20px'}}>
            <li>ہم نے <code style={{background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px'}}>useRef(null)</code> سے ایک ریفرنس بنایا</li>
            <li>input پر <code style={{background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px'}}>ref=&#123;inputRef&#125;</code> دیا</li>
            <li>component لوڈ ہوتے ہی <code style={{background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px'}}>inputRef.current.focus()</code> سے فوکس آ گیا</li>
            <li>useEffect میں خالی dependency array دی تاکہ صرف ایک بار چلے</li>
          </ul>
        </div>

        {/* Interactive Demo */}
        <div className="demo-section" style={{
          background: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          margin: '20px 0',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{color: '#2d3748', marginBottom: '20px'}}>🎯 عملی نمونہ:</h3>
          <div className="demo-card" style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            <p style={{marginBottom: '15px'}}>نیچے والے بٹن پر کلک کریں اور ان پٹ میں فوکس ہو جائے گا:</p>
            <input
              ref={inputRef}
              type="text"
              placeholder="یہاں لکھیں…"
              style={{ 
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #0078ff',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
              }}
            />
            <button 
              onClick={focusInput}
              className="demo-btn"
              style={{
                padding: '12px 24px',
                background: '#0078ff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
              }}
            >
              ان پٹ پر فوکس کریں
            </button>
          </div>
        </div>
      </div>

      {/* Example 2 with Demo and CSS */}
      <div className="code-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #28a745'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>🧑‍💻 مثال 2: پچھلی value محفوظ کرنا</h3>
        
        <h4 style={{color: '#4a5568'}}>📁 src/App.jsx</h4>
        <pre className="english-code" style={{
          background: '#1a202c',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example2Code}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example2Code, "پچھلی ویلیو مثال")}
          style={{
            padding: '10px 20px',
            background: '#0078ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "پچھلی ویلیو مثال" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <h4 style={{color: '#4a5568', marginTop: '25px'}}>🎨 متعلقہ CSS</h4>
        <pre className="css-code" style={{
          background: '#2d3748',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example2CSS}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example2CSS, "پچھلی ویلیو CSS")}
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "پچھلی ویلیو CSS" ? "کاپی ہوگیا ✅" : "📋 CSS کاپی کریں"}
        </button>

        <div className="explanation-box" style={{
          background: '#f0fff4',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0',
          border: '2px solid #28a745',
          textAlign: 'right',
          direction: 'rtl'
        }}>
          <h4 style={{color: '#28a745', marginBottom: '15px'}}>🔹 وضاحت:</h4>
          <ul style={{paddingRight: '20px'}}>
            <li>ہم نے <code style={{background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px'}}>previousName</code> نام کا ref بنایا</li>
            <li>ہر بار جب name بدلے، useEffect میں پچھلا name محفوظ کر لیا</li>
            <li>UI میں ہم دونوں (موجودہ اور پچھلا) نام دکھا رہے ہیں</li>
            <li>useRef کی value ہر render پر نہیں بدلتی</li>
          </ul>
        </div>

        {/* Interactive Demo */}
        <div className="demo-section" style={{
          background: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          margin: '20px 0',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{color: '#2d3748', marginBottom: '20px'}}>🎯 عملی نمونہ:</h3>
          <div className="demo-card" style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام لکھیں"
              style={{ 
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #28a745',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
              }}
            />
            <div className="name-display" style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              borderLeft: '4px solid #28a745'
            }}>
              <p style={{margin: '8px 0', fontSize: '1.1rem'}}>
                <strong>موجودہ نام:</strong> <span style={{color: '#0078ff', fontWeight: 'bold'}}>{name || "---"}</span>
              </p>
              <p style={{margin: '8px 0', fontSize: '1.1rem'}}>
                <strong>پچھلا نام:</strong> <span style={{color: '#6c757d', fontStyle: 'italic'}}>{previousName.current || "---"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3 with Multiple Demos and CSS */}
      <div className="code-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #ff6b6b'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>🧑‍💻 مثال 3: انٹرایکٹو مثالیں</h3>
        
        <h4 style={{color: '#4a5568'}}>📁 src/App.jsx</h4>
        <pre className="english-code" style={{
          background: '#1a202c',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example3Code}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example3Code, "انٹرایکٹو مثالیں")}
          style={{
            padding: '10px 20px',
            background: '#0078ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "انٹرایکٹو مثالیں" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <h4 style={{color: '#4a5568', marginTop: '25px'}}>🎨 متعلقہ CSS</h4>
        <pre className="css-code" style={{
          background: '#2d3748',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          overflowX: 'auto'
        }}>
          <code>{example3CSS}</code>
        </pre>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(example3CSS, "انٹرایکٹو CSS")}
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.3s ease',
            margin: '5px'
          }}
        >
          {copiedCode === "انٹرایکٹو CSS" ? "کاپی ہوگیا ✅" : "📋 CSS کاپی کریں"}
        </button>

        <div className="explanation-box" style={{
          background: '#fff3cd',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0',
          border: '2px solid #ffc107',
          textAlign: 'right',
          direction: 'rtl'
        }}>
          <h4 style={{color: '#856404', marginBottom: '15px'}}>🔹 وضاحت:</h4>
          <ul style={{paddingRight: '20px'}}>
            <li><strong>فوکس:</strong> useRef سے input element کو پکڑ کر فوکس کیا</li>
            <li><strong>رنگ بدلنا:</strong> useRef سے div element کو پکڑ کر اس کا رنگ بدلا</li>
            <li><strong>اسٹاپ واچ:</strong> useRef سے timer کو محفوظ کیا تاکہ clear کر سکیں</li>
            <li><strong>اسکرول:</strong> useRef سے scroll box کو پکڑ کر نیچے اسکرول کیا</li>
          </ul>
        </div>

        {/* Interactive Demos */}
        <div className="demo-section" style={{
          background: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          margin: '20px 0',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{color: '#2d3748', marginBottom: '20px'}}>🎯 عملی نمونے:</h3>

          {/* Box Color Change Demo */}
          <div className="demo-card" style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            <h4 style={{color: '#0078ff', marginBottom: '15px'}}>🔹 مثال 2 — ڈبے کا رنگ بدلنا</h4>
            <p style={{marginBottom: '15px'}}>اس مثال میں ہم نے ایک ڈبہ بنایا ہے۔ useRef کے ذریعے ہم اس ڈبے کو پکڑ کر بٹن دبانے پر اس کا رنگ بدل دیں گے۔</p>
            <div
              ref={boxRef}
              style={{
                width: '100%',
                height: '120px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                margin: '15px 0',
                border: '3px dashed #0078ff',
                transition: 'all 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#6c757d'
              }}
            >
              رنگ بدلنے کے لیے بٹن دبائیں
            </div>
            <button 
              onClick={changeBoxColor}
              style={{
                padding: '12px 24px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
              }}
            >
              ڈبے کا رنگ بدلیں
            </button>
          </div>

          {/* Stopwatch Demo */}
          <div className="demo-card" style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <h4 style={{color: '#dc3545', marginBottom: '15px'}}>🔹 مثال 3 — اسٹاپ واچ</h4>
            <p style={{marginBottom: '15px', textAlign: 'right', direction: 'rtl'}}>اس مثال میں ہم useRef سے انٹرویل کا کنٹرول رکھ کر ایک چھوٹا سا اسٹاپ واچ بنائیں گے۔</p>
            <h2 style={{
              fontSize: '3rem',
              color: '#0078ff',
              fontWeight: 'bold',
              margin: '20px 0',
              fontFamily: 'Courier New, monospace'
            }}>
              {time} سیکنڈ
            </h2>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={startStopwatch}
                style={{
                  padding: '12px 24px',
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background 0.3s ease'
                }}
              >
                شروع کریں
              </button>
              <button 
                onClick={stopStopwatch}
                style={{
                  padding: '12px 24px',
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background 0.3s ease'
                }}
              >
                روکیں
              </button>
              <button 
                onClick={resetStopwatch}
                style={{
                  padding: '12px 24px',
                  background: '#ffc107',
                  color: '#212529',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background 0.3s ease'
                }}
              >
                ری سیٹ
              </button>
            </div>
          </div>

          {/* Scroll Box Demo */}
          <div className="demo-card" style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            <h4 style={{color: '#6f42c1', marginBottom: '15px'}}>🔹 مثال 4 — Scroll نیچے لے جانا</h4>
            <p style={{marginBottom: '15px'}}>اس مثال میں ہم ایک لمبا باکس بناتے ہیں اور بٹن دبانے پر اس کو نیچے اسکرول کر دیتے ہیں۔</p>
            <div 
              ref={scrollBoxRef} 
              style={{
                height: '150px',
                overflowY: 'auto',
                border: '2px solid #6c757d',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: '#f8f9fa'
              }}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} style={{
                  margin: '8px 0',
                  padding: '8px',
                  background: 'white',
                  borderRadius: '4px',
                  borderLeft: '3px solid #0078ff'
                }}>
                  لائن {i + 1}
                </p>
              ))}
            </div>
            <button 
              onClick={scrollToBottom}
              style={{
                padding: '12px 24px',
                background: '#6f42c1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
              }}
            >
              نیچے لے جائیں
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="explanation-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #ffc107',
        textAlign: 'right',
        direction: 'rtl'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>🔹 useRef کے اہم نکات:</h3>
        <ul style={{paddingRight: '20px'}}>
          <li><strong>DOM رسائی:</strong> useRef سے ہم کسی بھی HTML element کو براہ راست پکڑ سکتے ہیں</li>
          <li><strong>No Re-render:</strong> useRef کی value بدلنے پر component دوبارہ render نہیں ہوتا</li>
          <li><strong>Persistent Values:</strong> useRef کی values component کے دوبارہ render ہونے پر بھی محفوظ رہتی ہیں</li>
          <li><strong>Mutable:</strong> useRef کی current property کو براہ راست بدلا جا سکتا ہے</li>
          <li><strong>Multiple Refs:</strong> ایک component میں multiple useRef استعمال کر سکتے ہیں</li>
        </ul>
      </div>

      <div className="homework-section" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #17a2b8',
        textAlign: 'right',
        direction: 'rtl'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>📝 ہوم ورک (طلبہ کیلئے)</h3>
        <ol style={{paddingRight: '20px'}}>
          <li>ایک <em>Video Player</em> Component بنائیں جس میں play/pause کے بٹن useRef سے control ہوں</li>
          <li>ایک <em>Form</em> بنائیں جس میں ہر field پر auto-focus ہو جب user tab press کرے</li>
          <li>ایک <em>Drawing App</em> بنائیں جس میں canvas element کو useRef سے control کریں</li>
          <li>ایک <em>Chat App</em> بنائیں جس میں نئی message آنے پر auto-scroll ہو جائے</li>
        </ol>
      </div>

      <div className="learning-outcomes" style={{
        background: 'white',
        padding: '25px',
        marginBottom: '25px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        borderLeft: '5px solid #28a745',
        textAlign: 'right',
        direction: 'rtl'
      }}>
        <h3 style={{
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px'
        }}>اس سبق کے بعد طلبہ:</h3>
        <ul style={{paddingRight: '20px'}}>
          <li>✅ useRef Hook کا concept سمجھیں گے</li>
          <li>✅ DOM elements تک سیدھی رسائی کرنا سیکھیں گے</li>
          <li>✅ Values کو render کے بغیر محفوظ رکھنا سیکھیں گے</li>
          <li>✅ Timers اور intervals کو manage کرنا سیکھیں گے</li>
          <li>✅ Previous values کو track کرنا سیکھیں گے</li>
          <li>✅ useRef اور useState میں فرق سمجھیں گے</li>
        </ul>
      </div>

      {copiedCode && (
        <div className="copy-notification" style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#28a745',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          fontSize: '1rem',
          fontWeight: 'bold'
        }}>
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter10;