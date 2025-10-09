import React, { useState, useRef } from "react";

function Chapter10() {
  const [activeTab, setActiveTab] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

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
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    boxRef.current.style.backgroundColor = randomColor;
    boxRef.current.textContent = `رنگ: ${randomColor}`;
    boxRef.current.style.color = "#fff";
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

  // Example 4 Code - Video Player
  const example4Code = `import React, { useRef, useState } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipForward = () => {
    videoRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div className="video-player">
      <h2>Video Player - useRef مثال</h2>
      <video 
        ref={videoRef}
        width="100%"
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/sample-video.mp4" type="video/mp4" />
        آپ کا براؤزر ویڈیو سپورٹ نہیں کرتا۔
      </video>
      
      <div className="video-controls">
        <button onClick={togglePlay}>
          {isPlaying ? '⏸️ روکیں' : '▶️ چلائیں'}
        </button>
        <button onClick={skipBackward}>⏪ 10 سیکنڈ پیچھے</button>
        <button onClick={skipForward}>⏩ 10 سیکنڈ آگے</button>
      </div>
    </div>
  );
}

export default VideoPlayer;`;

  // Example 4 CSS
  const example4CSS = `/* ویڈیو پلیئر کے لیے CSS */
.video-player {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.video-player h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.video-player video {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.video-controls {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.video-controls button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background: #0078ff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.video-controls button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}`;

  const examples = [
    {
      id: 1,
      title: "مثال 1: Input پر خودکار فوکس",
      description:
        "جب یہ component پہلی بار render ہوتا ہے تو useRef کے ذریعے input پر فوراً فوکس ہو جاتا ہے۔",
      code: example1Code,
      css: example1CSS,
    },
    {
      id: 2,
      title: "مثال 2: پچھلی value محفوظ کرنا",
      description:
        "useRef سے ہم پچھلی state value کو محفوظ کر سکتے ہیں بغیر re-rerender کے۔",
      code: example2Code,
      css: example2CSS,
    },
    {
      id: 3,
      title: "مثال 3: انٹرایکٹو مثالیں",
      description:
        "useRef کے مختلف عملی استعمالات: رنگ بدلنا، اسٹاپ واچ، اور اسکرول کنٹرول۔",
      code: example3Code,
      css: example3CSS,
    },
    {
      id: 4,
      title: "مثال 4: ویڈیو پلیئر کنٹرول",
      description:
        "useRef سے ویڈیو element کو کنٹرول کرنا - play, pause, skip وغیرہ۔",
      code: example4Code,
      css: example4CSS,
    },
  ];

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر نمبر 10 – useRef Hook
        </h1>
        <p className="chapter-subtitle2 text-break">
          useRef Hook: DOM elements تک سیدھی رسائی اور values کو render کے بغیر محفوظ رکھنا
        </p>
      </div>

      {/* 🔹 useRef Hook کی وضاحت اور بنیادی تصور */}
      <div className="section-card">
        <h2 className="section-title text-break">🧠 useRef Hook: بنیادی تصور – سب سے آسان انداز میں</h2>
        
        <div className="explanation-box">
          <h4 className="text-break">🔹 useRef ہوتا کیا ہے؟</h4>
          <p className="section-text text-break">
            <strong>React</strong> میں ہم اکثر state استعمال کرتے ہیں، لیکن state ہر بار بدلنے پر component کو دوبارہ render کر دیتا ہے۔
کبھی کبھی ہمیں صرف کسی چیز کا حوالہ (ریفرنس) چاہیے ہوتا ہے یا کسی DOM element تک سیدھی رسائی چاہیے ہوتی ہے، لیکن render دوبارہ نہ ہو۔
<br/>
ایسی صورت میں ہم <strong>useRef</strong> استعمال کرتے ہیں۔
<br/>
آپ اسے ایسے سمجھیں جیسے ایک چھوٹا سا ڈبہ ہو جس میں آپ کچھ بھی رکھ سکتے ہیں اور وہ ہر بار refresh نہیں ہوتا۔         </p>
          
          <div className="methods-grid">
            <div className="method-card">
              <h3 className="text-break">🎯 DOM رسائی</h3>
              <p className="text-break">Input fields, buttons, divs وغیرہ کو براہ راست کنٹرول کریں</p>
            </div>
            
            <div className="method-card">
              <h3 className="text-break">💾 Value存储</h3>
              <p className="text-break">ایسی values جو re-render پر نہیں بدلتیں</p>
            </div>
            
            <div className="method-card">
              <h3 className="text-break">⏱️ Timers/Intervals</h3>
              <p className="text-break">setInterval اور setTimeout کو محفوظ طریقے سے manage کریں</p>
            </div>
            
            <div className="method-card">
              <h3 className="text-break">📊 Previous Values</h3>
              <p className="text-break">پچھلی state values کو track کریں</p>
            </div>
          </div>
        </div>

        <div className="demo-section">
          <h4 className="text-break">🔍 useRef vs useState</h4>
          <div className="demo-card">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
                <h5 style={{ color: '#0078ff', marginBottom: '10px' }}>useState</h5>
                <ul style={{ textAlign: 'right', paddingRight: '15px' }}>
                  <li className="text-break">Value بدلنے پر component re-render ہوتا ہے</li>
                  <li className="text-break">UI update کے لیے استعمال ہوتا ہے</li>
                  <li className="text-break">Async updates</li>
                </ul>
              </div>
              
              <div style={{ padding: '15px', background: '#f0f8ff', borderRadius: '8px', border: '2px solid #28a745' }}>
                <h5 style={{ color: '#28a745', marginBottom: '10px' }}>useRef</h5>
                <ul style={{ textAlign: 'right', paddingRight: '15px' }}>
                  <li className="text-break">Value بدلنے پر re-render نہیں ہوتا</li>
                  <li className="text-break">DOM manipulation کے لیے استعمال ہوتا ہے</li>
                  <li className="text-break">Sync updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 useRef کا بنیادی syntax */}
        <div className="code-section">
          <div className="code-header">
            <span className="text-break">📝 useRef کا بنیادی Syntax</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(
                `import { useRef } from 'react';\n\nfunction MyComponent() {\n  const myRef = useRef(initialValue);\n  \n  // Value پڑھنا\n  console.log(myRef.current);\n  \n  // Value لکھنا\n  myRef.current = newValue;\n  \n  return <div ref={myRef}>Element</div>;\n}`,
                "Syntax"
              )}
            >
              📋 کاپی کریں
            </button>
          </div>
          
          <div className="code-block-wrapper">
            <pre className="english-code">
              <code>{`import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(initialValue);
  
  // Value پڑھنا
  console.log(myRef.current);
  
  // Value لکھنا
  myRef.current = newValue;
  
  return <div ref={myRef}>Element</div>;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="explanation-box">
          <h4 className="text-break">🔑 اہم نکات:</h4>
          <ul>
            <li className="text-break">
              <strong>useRef(initialValue):</strong> ایک ref object بناتا ہے جس میں current property ہوتی ہے
            </li>
            <li className="text-break">
              <strong>ref.current:</strong> value کو پڑھنے یا لکھنے کے لیے استعمال ہوتا ہے
            </li>
            <li className="text-break">
              <strong>Re-render نہیں ہوتا:</strong> جب ref.current کی value بدلتی ہے
            </li>
            <li className="text-break">
              <strong>Persistent:</strong> ref کی value component کی زندگی بھر persist رہتی ہے
            </li>
            <li className="text-break">
              <strong>Mutable:</strong> ref.current کو براہ راست mutate کیا جا سکتا ہے
            </li>
          </ul>
        </div>
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

            {/* 🔹 PRACTICAL DEMONSTRATION */}
            {activeTab === 1 && (
              <div className="demo-section">
                <h4 className="text-break">🎯 عملی نمونہ:</h4>
                <div className="demo-card">
                  <p className="text-break">
                    نیچے والے بٹن پر کلک کریں اور ان پٹ میں فوکس ہو جائے گا:
                  </p>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="یہاں لکھیں…"
                    style={{
                      padding: "12px",
                      fontSize: "1rem",
                      border: "2px solid #0078ff",
                      borderRadius: "8px",
                      width: "100%",
                      marginBottom: "15px",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <button
                    onClick={focusInput}
                    style={{
                      padding: "12px 24px",
                      background: "#0078ff",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "background 0.3s ease",
                    }}
                  >
                    ان پٹ پر فوکس کریں
                  </button>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="demo-section">
                <h4 className="text-break">🎯 عملی نمونہ:</h4>
                <div className="demo-card">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="نام لکھیں"
                    style={{
                      padding: "12px",
                      fontSize: "1rem",
                      border: "2px solid #28a745",
                      borderRadius: "8px",
                      width: "100%",
                      marginBottom: "15px",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      background: "#f8f9fa",
                      padding: "15px",
                      borderRadius: "8px",
                      borderLeft: "4px solid #28a745",
                    }}
                  >
                    <p style={{ margin: "8px 0", fontSize: "1.1rem" }}>
                      <strong>موجودہ نام:</strong>{" "}
                      <span style={{ color: "#0078ff", fontWeight: "bold" }}>
                        {name || "---"}
                      </span>
                    </p>
                    <p style={{ margin: "8px 0", fontSize: "1.1rem" }}>
                      <strong>پچھلا نام:</strong>{" "}
                      <span style={{ color: "#6c757d", fontStyle: "italic" }}>
                        {previousName.current || "---"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="demo-section">
                <h4 className="text-break">🎯 عملی نمونے:</h4>

                {/* Box Color Change Demo */}
                <div className="demo-card" style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#0078ff", marginBottom: "15px" }}>
                    🔹 ڈبے کا رنگ بدلنا
                  </h5>
                  <div
                    ref={boxRef}
                    style={{
                      width: "100%",
                      height: "120px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "12px",
                      margin: "15px 0",
                      border: "3px dashed #0078ff",
                      transition: "all 0.5s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "#6c757d",
                    }}
                  >
                    رنگ بدلنے کے لیے بٹن دبائیں
                  </div>
                  <button
                    onClick={changeBoxColor}
                    style={{
                      padding: "12px 24px",
                      background: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "background 0.3s ease",
                    }}
                  >
                    ڈبے کا رنگ بدلیں
                  </button>
                </div>

                {/* Stopwatch Demo */}
                <div className="demo-card" style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#dc3545", marginBottom: "15px" }}>
                    🔹 اسٹاپ واچ
                  </h5>
                  <h2
                    style={{
                      fontSize: "3rem",
                      color: "#0078ff",
                      fontWeight: "bold",
                      margin: "20px 0",
                      fontFamily: "Courier New, monospace",
                      textAlign: "center",
                    }}
                  >
                    {time} سیکنڈ
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={startStopwatch}
                      style={{
                        padding: "12px 24px",
                        background: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background 0.3s ease",
                      }}
                    >
                      شروع کریں
                    </button>
                    <button
                      onClick={stopStopwatch}
                      style={{
                        padding: "12px 24px",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background 0.3s ease",
                      }}
                    >
                      روکیں
                    </button>
                    <button
                      onClick={resetStopwatch}
                      style={{
                        padding: "12px 24px",
                        background: "#ffc107",
                        color: "#212529",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background 0.3s ease",
                      }}
                    >
                      ری سیٹ
                    </button>
                  </div>
                </div>

                {/* Scroll Box Demo */}
                <div className="demo-card">
                  <h5 style={{ color: "#6f42c1", marginBottom: "15px" }}>
                    🔹 Scroll bar کو نیچے لے جانا
                  </h5>
                  <div
                    ref={scrollBoxRef}
                    style={{
                      height: "150px",
                      overflowY: "auto",
                      border: "2px solid #6c757d",
                      borderRadius: "8px",
                      padding: "15px",
                      marginBottom: "15px",
                      backgroundColor: "#f8f9fa",
                    }}
                  >
                    {Array.from({ length: 20 }, (_, i) => (
                      <p
                        key={i}
                        style={{
                          margin: "8px 0",
                          padding: "8px",
                          background: "white",
                          borderRadius: "4px",
                          borderLeft: "3px solid #0078ff",
                        }}
                      >
                        لائن {i + 1}
                      </p>
                    ))}
                  </div>
                  <button
                    onClick={scrollToBottom}
                    style={{
                      padding: "12px 24px",
                      background: "#6f42c1",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "background 0.3s ease",
                    }}
                  >
                    اسکرول بار نیچے لے جائیں
                  </button>
                </div>
              </div>
            )}

            {/* 🔹 JSX CODE */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">📁 src/App.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].code, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`)
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{examples[activeTab - 1].code}</code>
                </pre>
              </div>
            </div>

            {/* 🔹 CSS CODE */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">🎨 متعلقہ CSS</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].css, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`)
                    ? "کاپی ہوگیا ✅"
                    : "📋 CSS کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="css-code">
                  <code>{examples[activeTab - 1].css}</code>
                </pre>
              </div>
            </div>

            {copyStatus && <div className="copy-msg">{copyStatus}</div>}
          </div>

          <div className="summary-card">
            <h3 className="section-title text-break">📌 خلاصہ</h3>
            <div className="summary-content">
              <p className="text-break">
                <strong>useRef</strong> React کا Hook ہے جو DOM elements تک سیدھی رسائی دیتا ہے
              </p>
              <p className="text-break">
                <strong>ref.current</strong> سے value کو پڑھ اور لکھ سکتے ہیں
              </p>
              <p className="text-break">
                <strong>Re-render نہیں ہوتا</strong> جب ref کی value بدلتی ہے
              </p>
              <p className="text-break">
                اس مثال میں طلبہ سیکھیں گے کہ useRef صرف فوکس کے لیے نہیں بلکہ
                timers, intervals, DOM manipulation اور values کو محفوظ رکھنے کے
                لیے بھی استعمال ہوتا ہے
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copyStatus && <div className="copy-notification">✅ {copyStatus}</div>}
    </div>
  );
}

export default Chapter10;