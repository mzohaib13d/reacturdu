// Chapter19.jsx
import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Chapter19() {
  const [copyStatus, setCopyStatus] = useState("");
  const [activeFile, setActiveFile] = useState("App.jsx");

  // Create refs for each section
  const appJsxRef = useRef(null);
  const notFoundJsxRef = useRef(null);
  const contactJsxRef = useRef(null);
  const loginJsxRef = useRef(null);
  const dashboardJsxRef = useRef(null);
  const cssRef = useRef(null);

  // Chapter19-specific mobile sidebar fix
  const chapter19Styles = `
    /* Chapter19-specific mobile sidebar fix */
    @media (max-width: 430px) {
      .chapter19-sidebar .example-list {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      
      .chapter19-sidebar .example-list li {
        display: block !important;
        width: 100% !important;
      }
    }
    
    @media (max-width: 375px) {
      .chapter19-sidebar .example-list {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`${title} کوپي ہو گیا!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const handleSidebarClick = (fileName) => {
    setActiveFile(fileName);
    
    // Scroll to the corresponding section
    switch(fileName) {
      case "App.jsx":
        appJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "NotFound.jsx":
        notFoundJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Contact.jsx":
        contactJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Login.jsx":
        loginJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Dashboard.jsx":
        dashboardJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "CSS":
        cssRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        break;
    }
  };

  // Your existing code strings remain the same...
  const appJsxCode = `// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // نیا پیج
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* 👇 غلط URL پر */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}`;

  const notFoundJsxCode = `// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page notfound">
      <h1>⚠️ 404 - صفحہ نہیں ملا</h1>
      <p>معاف کیجیے، آپ جس صفحے پر جانا چاہ رہے ہیں وہ موجود نہیں۔</p>
      <Link to="/" className="back-btn">🏠 ہوم پیج پر واپس جائیں</Link>
    </div>
  );
}`;

  const contactJsxCode = `// pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`شکریہ \${name}! آپ کا پیغام موصول ہو گیا ✅\`);
    navigate("/"); // ہوم پیج پر واپس
  };

  return (
    <div className="page">
      <h1>📞 رابطہ کریں</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="اپنا نام درج کریں"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="اپنا پیغام لکھیں"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">📤 پیغام بھیجیں</button>
      </form>
    </div>
  );
}`;

  const loginJsxCode = `// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 👇 صرف ایک ڈمی مثال ہے (ریئل ایپ میں API سے ویریفائی کریں)
    if (user === "admin" && pass === "1234") {
      alert("🎉 لاگ ان کامیاب!");
      navigate("/dashboard"); // ✅ کامیاب لاگ ان پر Dashboard پر جائیں
    } else {
      alert("❌ غلط یوزرنیم یا پاس ورڈ");
    }
  };

  return (
    <div className="page">
      <h1>🔐 لاگ ان کریں</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="یوزر نیم"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="پاس ورڈ"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`;

  const dashboardJsxCode = `// pages/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>👋 خوش آمدید ایڈمن!</h1>
      <p>یہ آپ کا Dashboard ہے جہاں آپ پروڈکٹس، آرڈرز، اور یوزرز کو مینیج کر سکتے ہیں۔</p>
    </div>
  );
}`;

  const cssCode = `.notfound {
  text-align: center;
  padding: 40px;
}

.contact-form, .login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}

.contact-form input,
.contact-form textarea,
.login-form input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.contact-form button,
.login-form button {
  background: linear-gradient(to right, #00b09b, #96c93d);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
}

.back-btn {
  display: inline-block;
  background: linear-gradient(to right, #007bff, #00c6ff);
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 10px;
  font-size: 0.9rem;
}

.back-btn:hover {
  background: linear-gradient(to right, #0056b3, #0096c7);
}`;

  return (
    <div className="chapter-container urdu-text">
      {/* Chapter19-specific styles */}
      <style>{chapter19Styles}</style>

      <div className="chapter-header">
        <h1 className="chapter-title2">
          🧭 Chapter 19 — 404 Page & Redirect System
        </h1>
        <p className="chapter-subtitle2">
          React Router DOM میں 404 پیجز اور Redirect سسٹم سمجھنا
        </p>
      </div>

      <div className="content-wrapper">
        {/* Updated sidebar with chapter19-specific class */}
        <div className="sidebar chapter19-sidebar">
          <h3>فائلیں</h3>
          <ul className="example-list">
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "App.jsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("App.jsx")}
              >
                App.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "NotFound.jsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("NotFound.jsx")}
              >
                NotFound.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "Contact.jsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("Contact.jsx")}
              >
                Contact.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "Login.jsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("Login.jsx")}
              >
                Login.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "Dashboard.jsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("Dashboard.jsx")}
              >
                Dashboard.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "CSS" ? "active" : ""}`}
                onClick={() => handleSidebarClick("CSS")}
              >
                CSS اسٹائلز
              </button>
            </li>
          </ul>
        </div>

        <div className="main-content">
          {/* ... rest of your main content remains exactly the same ... */}
          <div className="section-card">
            <h2 className="section-title">🎯 مقصد</h2>
            <div className="section-text">
              <p>اگر کوئی غلط راستہ (URL) لکھے تو Error Page دکھانا</p>
              <p>useNavigate() سے Redirect کرنا سیکھنا</p>
              <p>مثال کے طور پر "Contact بھیجنے" کے بعد Redirect</p>
            </div>

            <div className="lesson-section">
              <h3>🧠 Step 1: Concept سمجھیں</h3>

              <div className="info-box">
                <h4>404 Page</h4>
                <p>
                  جب کوئی ایسا URL لکھتا ہے جو ایپ میں موجود نہیں ہوتا
                  <br />
                  مثلاً /wronglink تو React Router ہمیں کوئی صفحہ نہیں دکھاتا۔
                  <br />
                  اس کے لیے ہم Wildcard Route (*) استعمال کرتے ہیں۔
                </p>
              </div>

              <div className="info-box">
                <h4>useNavigate() Hook</h4>
                <p>
                  یہ React Router کا hook ہے جو programmatically navigation کے لیے استعمال ہوتا ہے۔
                  <br />
                  فارم submit کرنے کے بعد، login کے بعد، یا کسی شرط پر redirect کرنے کے لیے مفید ہے۔
                </p>
              </div>

              <div className="info-box">
                <h4>Route path="*"</h4>
                <p>
                  مطلب: "باقی سب غلط راستے یہاں آئیں گے۔"
                  <br />
                  اور اگر کسی ایکشن کے بعد ہم کسی صفحے پر redirect کرنا چاہیں
                  <br />
                  تو useNavigate() hook استعمال کرتے ہیں۔
                </p>
              </div>
            </div>
          </div>

          <div ref={appJsxRef} className="section-card">
            <h2 className="section-title">🧩 Step 2: App.jsx اپڈیٹ کریں</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>App.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(appJsxCode, "App.jsx")}
                >
                  {copyStatus.includes("App.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{appJsxCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div ref={notFoundJsxRef} className="section-card">
            <h2 className="section-title">💀 Step 3: NotFound.jsx بنائیں</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>NotFound.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(notFoundJsxCode, "NotFound.jsx")}
                >
                  {copyStatus.includes("NotFound.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{notFoundJsxCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div ref={contactJsxRef} className="section-card">
            <h2 className="section-title">📬 Step 4: Contact.jsx اپڈیٹ (Navigate کے ساتھ Redirect)</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>Contact.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(contactJsxCode, "Contact.jsx")}
                >
                  {copyStatus.includes("Contact.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{contactJsxCode}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* ... rest of your component content remains the same ... */}
          <div className="section-card">
            <h2 className="section-title">🧠 useNavigate() سمجھیں</h2>
            <div className="section-text">
              <p><strong>useNavigate() کیا ہے؟</strong></p>
              <p>useNavigate() React Router کا ایک hook ہے جو آپ کو پروگرام کے ذریعے (programmatically) راستہ بدلنے کی اجازت دیتا ہے۔ یعنی جب آپ چاہیں — مثال کے طور پر فارم بھیجنے کے بعد یا بٹن پر کلک کے بعد — آپ خودکار طور پر کسی دوسرے route پر بھیج سکتے ہیں۔</p>
              
              <div className="info-box">
                <h4>useNavigate() کے عام استعمال</h4>
                <ul>
                  <li><strong>navigate("/path")</strong> - سیدھا دوسرے صفحے پر لے جاتا ہے</li>
                  <li><strong>navigate(-1)</strong> - ایک قدم پیچھے (جیسے browser back)</li>
                  <li><strong>navigate("/login", {"{ replace: true }"})</strong> - نیا صفحہ replace ہو جاتا ہے</li>
                  <li><strong>navigate("/profile", {"{ state: { from: '/checkout' } }"})</strong> - اضافی data state میں بھیج سکتے ہیں</li>
                </ul>
              </div>

              <div className="info-box">
                <h4>useNavigate() vs Link — فرق مختصراً</h4>
                <ul>
                  <li><strong>Link</strong> = یوزر جب کلک کرے تو route بدلتا ہے (HTML anchor کی طرح)</li>
                  <li><strong>useNavigate()</strong> = آپ جاوا اسکرپٹ سے خود سے redirect کرتے ہیں</li>
                </ul>
              </div>

              <div className="info-box">
                <h4>کب useNavigate() استعمال کریں؟</h4>
                <ul>
                  <li>فارم submit کے بعد: شکریہ دکھانے کے بعد Home یا Thank-you پیج پر بھیجنا</li>
                  <li>لاگ ان کے بعد: login successful → Dashboard پر بھیجنا</li>
                  <li>کسی شرط پر: اگر user نے permission نہیں دی تو login پیج پر بھیجنا</li>
                  <li>بٹن کے کلک سے پیچھے جانا: navigate(-1) (Back)</li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={loginJsxRef} className="section-card">
            <h2 className="section-title">🔐 Login.jsx - عملی مثال</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>Login.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(loginJsxCode, "Login.jsx")}
                >
                  {copyStatus.includes("Login.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{loginJsxCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div ref={dashboardJsxRef} className="section-card">
            <h2 className="section-title">💼 Dashboard.jsx</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>Dashboard.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(dashboardJsxCode, "Dashboard.jsx")}
                >
                  {copyStatus.includes("Dashboard.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{dashboardJsxCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div ref={cssRef} className="section-card">
            <h2 className="section-title">🎨 Step 5: App.css میں نیا اسٹائل</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>App.css</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(cssCode, "CSS Styles")}
                >
                  {copyStatus.includes("CSS Styles")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="css-code">
                  <code>{cssCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h2 className="section-title">📘 Summary Box — Chapter 19</h2>
            <table className="file-table">
              <thead>
                <tr>
                  <th>🔹 فیچر</th>
                  <th>🔍 وضاحت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>404 Page</strong></td>
                  <td>path="*" سے غلط URL پکڑا جاتا ہے</td>
                </tr>
                <tr>
                  <td><strong>useNavigate()</strong></td>
                  <td>React Router hook جو redirect کرتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Contact Page Example</strong></td>
                  <td>فارم submit کرنے کے بعد Home پر redirect</td>
                </tr>
                <tr>
                  <td><strong>Login Page</strong></td>
                  <td>فارم کے ذریعے یوزرنیم اور پاس ورڈ لیتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Dashboard Page</strong></td>
                  <td>صرف کامیاب لاگ ان کے بعد access کیا جا سکتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Link Component</strong></td>
                  <td>"واپس جائیں" بٹن کے لیے استعمال ہوا</td>
                </tr>
              </tbody>
            </table>
            
            <div className="info-box" style={{marginTop: '20px'}}>
              <h4>آسان نوٹس/بڑی باتیں (طلبہ کے لیے)</h4>
              <ul>
                <li>useNavigate() کو صرف functional components میں استعمال کریں</li>
                <li>پہلے import {"{ useNavigate }"} from "react-router-dom"; کریں</li>
                <li>navigate("/path") لکھنے سے فوراً route بدل جائے گا</li>
                <li>اگر آپ چاہتے ہیں browser کا پچھلا پیج replace ہو جائے تو {"{ replace: true }"} پاس کریں</li>
                <li>navigate سے چھوٹی سی معلومات بھی بھیج سکتے ہیں (state)</li>
              </ul>
            </div>
            
            <div className="section-text" style={{marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '8px'}}>
              <p><strong>نتیجہ:</strong> اب جب کوئی localhost:5173/somethingwrong جیسا غلط پتہ لکھے گا تو آپ کا خوبصورت 404 پیج کھلے گا ⚡ اور Contact فارم submit کرنے کے بعد Home Page پر Redirect ہو جائے گا ✅</p>
            </div>
          </div>
        </div>
      </div>

      {copyStatus && <div className="copy-notification">✅ {copyStatus}</div>}
    </div>
  );
}

export default Chapter19;