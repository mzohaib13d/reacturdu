// Chapter17.jsx
import React, { useState, Suspense, lazy } from "react";
import "../App.css";

const Chapter17 = () => {
  const [activeExample, setActiveExample] = useState(1);
  const [showHeavy, setShowHeavy] = useState(false);
  const [showBuggy, setShowBuggy] = useState(false);

  // Heavy Component - Restaurant Menu Example
  const HeavyComponent = () => {
    const menuItems = [
      { id: 1, name: "چکن برگر", price: 450, img: "https://via.placeholder.com/150" },
      { id: 2, name: "بیف برگر", price: 550, img: "https://via.placeholder.com/150" },
      { id: 3, name: "پیزا", price: 1200, img: "https://via.placeholder.com/150" },
      { id: 4, name: "پاستا", price: 900, img: "https://via.placeholder.com/150" },
      { id: 5, name: "فرائز", price: 250, img: "https://via.placeholder.com/150" },
    ];

    return (
      <div style={{ textAlign: "center", padding: "20px", background: "#fafafa", marginTop: "20px", borderRadius: "12px" }}>
        <h2>🍽️ آج کا مینو</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {menuItems.map((item) => (
            <div key={item.id} style={{ background: "white", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", padding: "10px", transition: "transform 0.2s" }}>
              <img src={item.img} alt={item.name} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{item.name}</h3>
              <p>قیمت: Rs {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Error Boundary Component
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log("⚠️ Error details:", error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
            <h2>😢 کچھ غلط ہو گیا!</h2>
            <p>براہِ کرم صفحہ دوبارہ لوڈ کریں یا بعد میں کوشش کریں۔</p>
          </div>
        );
      }
      return this.props.children;
    }
  }

  // Buggy Component
  const BuggyComponent = () => {
    throw new Error("اوہ! یہاں بگ ہے 😅");
    return <div>یہ component کبھی نہیں دکھائی دے گا</div>;
  };

  // Lazy loaded component (simulated)
  const LazyHeavyComponent = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ default: HeavyComponent });
      }, 1000);
    });
  });

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">🚀 Chapter 17 - Performance Optimization</h1>
        <p className="chapter-subtitle2">React کو تیز اور ہلکا بنانے کے طریقے</p>
      </div>

      <div className="content-wrapper">
        <div className="sidebar">
          <h3>Performance Examples</h3>
          <ul className="example-list">
            <li>
              <button 
                className={`sidebar-btn ${activeExample === 1 ? "active" : ""}`}
                onClick={() => setActiveExample(1)}
              >
                Lazy Loading
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeExample === 2 ? "active" : ""}`}
                onClick={() => setActiveExample(2)}
              >
                Error Boundary
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeExample === 3 ? "active" : ""}`}
                onClick={() => setActiveExample(3)}
              >
                Code Splitting
              </button>
            </li>
          </ul>
        </div>

        <div className="main-content">
          {/* Example 1: Lazy Loading */}
          {activeExample === 1 && (
            <div className="section-card">
              <h3 className="section-title">⚡ 1. Lazy Loading Components (React.lazy + Suspense)</h3>
              
              <div className="section-text">
                <p><strong>مسئلہ:</strong> اگر آپ کا ایپ بہت بڑا ہے اور درجنوں components ایک ساتھ لوڈ ہوتے ہیں تو صفحہ دیر سے کھلتا ہے۔</p>
                <p><strong>حل:</strong> React.lazy اور Suspense سے آپ کہہ سکتے ہیں: "یہ component تبھی لوڈ کرو جب واقعی اس کی ضرورت ہو!"</p>
              </div>

              <div className="demo-section">
                <h4>🍕 مثال: HeavyComponent صرف تب لوڈ ہو جب بٹن دبایا جائے</h4>
                <button 
                  className="interactive-btn"
                  onClick={() => setShowHeavy(!showHeavy)}
                >
                  {showHeavy ? "چھپائیں" : "دکھائیں"} بھاری Component
                </button>

                <Suspense fallback={<p style={{padding: "20px"}}>⏳ Heavy Component لوڈ ہو رہا ہے...</p>}>
                  {showHeavy && <LazyHeavyComponent />}
                </Suspense>
              </div>

              <div className="code-section">
                <div className="code-header">
                  <span>App.jsx - Lazy Loading Example</span>
                  <button className="copy-btn">Copy Code</button>
                </div>
                <div className="code-block-container">
                  <pre className="english-code"><code>{`import React, { useState, Suspense, lazy } from "react";

// 🔹 Lazy import
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <h2>⚡ React.lazy + Suspense Example</h2>
      
      <button onClick={() => setShow(!show)}>
        {show ? "چھپائیں" : "دکھائیں"} بھاری Component
      </button>

      {/* 🎯 Suspense fallback جب component لوڈ ہو رہا ہو */}
      <Suspense fallback={<p>⏳ لوڈ ہو رہا ہے...</p>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
}`}</code></pre>
                </div>
              </div>

              <div className="explanation-section">
                <h4>💬 وضاحت:</h4>
                <ul>
                  <li><strong>React.lazy()</strong> component کو الگ حصے (chunk) میں توڑ دیتا ہے۔</li>
                  <li><strong>Suspense</strong> fallback دکھاتا ہے جب component لوڈ ہو رہا ہو۔</li>
                  <li>اس سے شروع میں ایپ بہت تیز کھلتا ہے۔</li>
                </ul>
              </div>
            </div>
          )}

          {/* Example 2: Error Boundaries */}
          {activeExample === 2 && (
            <div className="section-card">
              <h3 className="section-title">🧱 2. Error Boundaries (غلطی پر صفحہ نہ ٹوٹے)</h3>
              
              <div className="section-text">
                <p><strong>مسئلہ:</strong> کبھی کسی component میں غلطی ہو جائے تو React پورا ایپ توڑ دیتا ہے 😨</p>
                <p><strong>حل:</strong> Error Boundary ایک ایسا "سیکیورٹی گارڈ" ہے جو صرف وہی حصہ توڑنے دیتا ہے جہاں غلطی ہو، باقی ایپ محفوظ رہتا ہے۔</p>
              </div>

              <div className="demo-section">
                <h4>🍕 مثال: Error Boundary in Action</h4>
                <button 
                  className="interactive-btn"
                  onClick={() => setShowBuggy(true)}
                >
                  Buggy Component دکھائیں
                </button>

                <ErrorBoundary>
                  {showBuggy && <BuggyComponent />}
                </ErrorBoundary>
              </div>

              <div className="code-section">
                <div className="code-header">
                  <span>ErrorBoundary.jsx</span>
                  <button className="copy-btn">Copy Code</button>
                </div>
                <div className="code-block-container">
                  <pre className="english-code"><code>{`// ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("⚠️ Error details:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>❌ کچھ غلط ہو گیا! براہ کرم دوبارہ کوشش کریں۔</h3>;
    }
    return this.props.children;
  }
}

// App.jsx
import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <h2>🧱 Error Boundary Example</h2>
      <button onClick={() => setShow(true)}>بگ دکھائیں</button>

      <ErrorBoundary>
        {show && <BuggyComponent />}
      </ErrorBoundary>
    </div>
  );
}`}</code></pre>
                </div>
              </div>

              <div className="explanation-section">
                <h4>💬 وضاحت:</h4>
                <p>اب اگر بگ آئے تو صرف وہی حصہ دکھائی دینا بند ہوگا، پوری ایپ بند نہیں ہوگی۔ 👏</p>
              </div>
            </div>
          )}

          {/* Example 3: Code Splitting */}
          {activeExample === 3 && (
            <div className="section-card">
              <h3 className="section-title">🧩 3. Code Splitting — ایپ کو حصوں میں توڑنا</h3>
              
              <div className="section-text">
                <p>React.lazy دراصل Code Splitting کا ہی حصہ ہے۔ یعنی جب ہم ایپ کو حصوں (Chunks) میں بانٹتے ہیں تاکہ صفحہ صرف ضروری حصہ لوڈ کرے۔</p>
              </div>

              <div className="code-section">
                <div className="code-header">
                  <span>Code Splitting Examples</span>
                  <button className="copy-btn">Copy Code</button>
                </div>
                <div className="code-block-container">
                  <pre className="english-code"><code>{`// 🔹 Route-based Code Splitting
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// 🔹 Component-based Code Splitting  
const HeavyChart = lazy(() => import("./components/HeavyChart"));
const ImageGallery = lazy(() => import("./components/ImageGallery"));

// 🔹 Conditional Code Splitting
const PremiumFeatures = lazy(() => import("./components/PremiumFeatures"));`}</code></pre>
                </div>
              </div>

              <div className="explanation-section">
                <h4>💡 حقیقی فائدے:</h4>
                <ul>
                  <li>🌐 جب ویب ایپ کے کئی بڑے صفحات ہوں تو lazy loading سے صرف وہی صفحہ لوڈ ہوتا ہے جو یوزر دیکھ رہا ہے۔</li>
                  <li>📸 Heavy images یا charts بعد میں لوڈ کرنے سے صفحہ جلد کھل جاتا ہے۔</li>
                  <li>🧠 یوزر کے تجربے میں بہتری آتی ہے — fast, clean, smart app۔</li>
                </ul>
              </div>

              {/* Summary Box */}
              <div className="summary-box">
                <h3>📘 خلاصہ — React Performance Optimization</h3>
                <hr className="styled-hr" />
                <ul>
                  <li><strong>React.lazy:</strong> Component تبھی لوڈ ہوتا ہے جب ضرورت ہو۔</li>
                  <li><strong>Suspense:</strong> Component کے لوڈ ہونے تک fallback دکھاتا ہے۔</li>
                  <li><strong>Error Boundary:</strong> غلطی پر ایپ کو بچاتا ہے۔</li>
                  <li><strong>Code Splitting:</strong> ایپ کو چھوٹے حصوں میں توڑتا ہے تاکہ لوڈنگ تیز ہو۔</li>
                </ul>
                <p className="summary-note">
                  💡 یاد رکھیں: React کی تیزی صرف کوڈ لکھنے میں نہیں،  
                  بلکہ سمجھداری سے <strong>Lazy Loading</strong> اور <strong>Error Boundaries</strong> کے استعمال میں ہے۔
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter17;