import React, { useState, useRef } from "react";
import "../App.css";

function Chapter21() {
  const [copyStatus, setCopyStatus] = useState("");
  const [activeSection, setActiveSection] = useState("concept");

  // Create refs for each section
  const conceptRef = useRef(null);
  const authContextRef = useRef(null);
  const mainJsxRef = useRef(null);
  const loginPageRef = useRef(null);
  const protectedRouteRef = useRef(null);
  const dashboardRef = useRef(null);
  const appJsxRef = useRef(null);
  const cssRef = useRef(null);
  const summaryRef = useRef(null);

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`${title} کوپي ہو گیا!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const handleSidebarClick = (section) => {
    setActiveSection(section);
    
    // Scroll to the corresponding section
    const refs = {
      concept: conceptRef,
      authContext: authContextRef,
      mainJsx: mainJsxRef,
      loginPage: loginPageRef,
      protectedRoute: protectedRouteRef,
      dashboard: dashboardRef,
      appJsx: appJsxRef,
      css: cssRef,
      summary: summaryRef
    };

    refs[section]?.current?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

  // Code strings
  const authContextCode = `// 📁 src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

// ⿡ Auth Context بنائیں
export const AuthContext = createContext();

// ⿢ Auth Provider بنائیں
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ⿣ Login فنکشن
  const login = (username, password) => {
    // ✅ بہت سادہ ڈیمو لاگ اِن چیک
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      return true;
    } else {
      alert("غلط یوزرنیم یا پاس ورڈ ❌");
      return false;
    }
  };

  // ⿤ Logout فنکشن
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`;

  const mainJsxCode = `// 📁 main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ نیا Import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);`;

  const loginPageCode = `// 📁 pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      alert("✅ کامیاب لاگ ان!");
      navigate("/dashboard"); // 🔹 Login کے بعد Dashboard پر Redirect
    }
  };

  return (
    <div className="page">
      <h1>🔐 لاگ اِن کریں</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="یوزرنیم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="پاس ورڈ"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">لاگ اِن</button>
        
        {/* ⿰ ڈیمو کے لیے ہدایت */}
        <div style={{
          marginTop: '15px',
          padding: '10px',
          background: '#f0f8ff',
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          <strong>ڈیمو کے لیے:</strong><br/>
          یوزرنیم: <code>admin</code><br/>
          پاس ورڈ: <code>1234</code>
        </div>
      </form>
    </div>
  );
}`;

  const protectedRouteCode = `// 📁 components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  // ⿡ اگر لاگ ان نہیں ہوا تو Login صفحے پر redirect
  if (!isLoggedIn) {
    alert("🚫 پہلے لاگ اِن کریں!");
    return <Navigate to="/login" replace />;
  }

  // ⿢ اگر لاگ ان ہوا ہے تو children کو render کریں
  return children;
}`;

  const dashboardCode = `// 📁 pages/Dashboard.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { logout, isLoggedIn } = useContext(AuthContext);

  return (
    <div className="page">
      <h1>📊 ایڈمن ڈیش بورڈ</h1>
      <p>خوش آمدید! آپ کامیابی سے لاگ اِن ہو چکے ہیں۔ 🎉</p>
      
      {/* ⿡ لاگ ان کی حالت دکھائیں */}
      <div style={{
        padding: '10px',
        background: isLoggedIn ? '#d4edda' : '#f8d7da',
        borderRadius: '5px',
        margin: '10px 0'
      }}>
        لاگ ان کی حالت: <strong>{isLoggedIn ? "✅ لاگ ان" : "❌ لاگ آؤٹ"}</strong>
      </div>
      
      <button onClick={logout} className="logout-btn">
        🚪 لاگ آؤٹ
      </button>
    </div>
  );
}`;

  const appJsxCode = `// 📁 App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* ⿡ Public Routes - سب دیکھ سکتے ہیں */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* ⿢ Protected Route - صرف لاگ ان users دیکھ سکتے ہیں */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}`;

  const cssCode = `/* 📁 App.css - نیا CSS شامل کریں */

/* 🔐 Login Form Styles */
.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form input {
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.login-form input:focus {
  border-color: #0078ff;
  outline: none;
}

.login-form button {
  background: linear-gradient(135deg, #0078ff, #00c6ff);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.login-form button:hover {
  transform: translateY(-2px);
}

/* 📊 Dashboard Styles */
.logout-btn {
  background: linear-gradient(135deg, #dc3545, #e83e8c);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
}

.logout-btn:hover {
  background: linear-gradient(135deg, #c82333, #d91a6a);
}

/* 🧭 Navbar میں Login/Logout Button */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
}

.auth-status {
  background: #0078ff;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
}`;

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          🔐 Chapter 21 — Protected Routes in React
        </h1>
        <p className="chapter-subtitle2">
          (Only Logged-in User can Access Dashboard)
        </p>
        
        {/* نیا paragraph شامل کریں */}
        <div className="section-text" style={{
          textAlign: 'center',
          marginTop: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
          borderRadius: '10px',
          border: '2px solid #ffc107',
          fontSize: '18px',
          lineHeight: '1.8'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            <strong>یہ Chapter 21 — Protected Routes (Dashboard Access only after Login)</strong><br/>
            طلبہ کو "Authentication + Routing + Context API" تینوں concepts ایک ساتھ،<br/>
            نہایت آسان اور عملی انداز میں سمجھا دے گا۔
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Sidebar */}
        <div className="sidebar chapter21-sidebar">
          <h3>اقسام</h3>
          <ul className="example-list">
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "concept" ? "active" : ""}`}
                onClick={() => handleSidebarClick("concept")}
              >
                🧠 Concept
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "authContext" ? "active" : ""}`}
                onClick={() => handleSidebarClick("authContext")}
              >
                📁 AuthContext.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "mainJsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("mainJsx")}
              >
                ⚙️ main.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "loginPage" ? "active" : ""}`}
                onClick={() => handleSidebarClick("loginPage")}
              >
                🔐 Login.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "protectedRoute" ? "active" : ""}`}
                onClick={() => handleSidebarClick("protectedRoute")}
              >
                🛡️ ProtectedRoute.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "dashboard" ? "active" : ""}`}
                onClick={() => handleSidebarClick("dashboard")}
              >
                📊 Dashboard.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "appJsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("appJsx")}
              >
                🧩 App.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "css" ? "active" : ""}`}
                onClick={() => handleSidebarClick("css")}
              >
                🎨 CSS Styles
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "summary" ? "active" : ""}`}
                onClick={() => handleSidebarClick("summary")}
              >
                📦 Summary
              </button>
            </li>
          </ul>
        </div>

        <div className="main-content">
          {/* Concept Section */}
          <div ref={conceptRef} className="section-card">
            <h2 className="section-title">🎯 مقصد سمجھیں</h2>
            <div className="section-text">
              <p><strong>Protected Routes</strong> کا مطلب ہے: "کچھ صفحات صرف لاگ ان users ہی دیکھ سکتے ہیں"</p>
              
              <div className="info-box">
                <h4>🧠 سادہ مثال سے سمجھیں:</h4>
                <ul>
                  <li>🏠 <strong>Home Page</strong> - سب دیکھ سکتے ہیں (Public)</li>
                  <li>🛍️ <strong>Products Page</strong> - سب دیکھ سکتے ہیں (Public)</li>
                  <li>📊 <strong>Dashboard</strong> - صرف ایڈمن دیکھ سکتا ہے (Protected)</li>
                </ul>
              </div>

              <div className="info-box">
                <h4>❌ مسئلہ:</h4>
                <p>اگر کوئی user براہ راست <code>/dashboard</code> پر جائے تو وہ بغیر login کے بھی دیکھ سکتا ہے 😕</p>
              </div>

              <div className="success-box">
                <h4>✅ حل:</h4>
                <p><strong>ProtectedRoute</strong> component بنائیں جو check کرے:</p>
                <ul>
                  <li>✅ اگر user لاگ ان ہے → Dashboard دکھائے</li>
                  <li>❌ اگر user لاگ ان نہیں ہے → Login page پر redirect کرے</li>
                </ul>
              </div>
            </div>
          </div>

          {/* باقی کوڈ وہی رہے گا */}
          {/* AuthContext.jsx Section */}
          <div ref={authContextRef} className="section-card">
            <h2 className="section-title">🧠 Step 1: Auth Context بنائیں</h2>
            <div className="section-text">
              <p>ہم ایک نئی فائل بنائیں گے: <code>📁 src/context/AuthContext.jsx</code></p>
              <p>یہ Context پوری ایپ میں login state کو manage کرے گا</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>AuthContext.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(authContextCode, "AuthContext.jsx")}
                >
                  {copyStatus.includes("AuthContext.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{authContextCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 وضاحت:</h4>
              <ul>
                <li><strong>⿡ createContext()</strong> - نیا Auth Context بناتا ہے</li>
                <li><strong>⿢ AuthProvider</strong> - پوری ایپ کو authentication فراہم کرتا ہے</li>
                <li><strong>⿣ login()</strong> - username/password چیک کرتا ہے</li>
                <li><strong>⿤ logout()</strong> - user کو لاگ آؤٹ کرتا ہے</li>
                <li><strong>isLoggedIn</strong> - بتاتا ہے کہ user لاگ ان ہے یا نہیں</li>
              </ul>
            </div>
          </div>

          {/* باقی sections وہی رہیں گے */}
          {/* main.jsx Section */}
          <div ref={mainJsxRef} className="section-card">
            <h2 className="section-title">⚙️ Step 2: main.jsx میں AuthProvider شامل کریں</h2>
            <div className="section-text">
              <p>ہم اپنی پوری ایپ کو AuthProvider میں لپیٹ دیں گے تاکہ تمام کمپوننٹس کو authentication ڈیٹا مل سکے</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>main.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
                >
                  {copyStatus.includes("main.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{mainJsxCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 نوٹ:</h4>
              <p>ہم نے <strong>ThemeProvider</strong> کے اندر <strong>AuthProvider</strong> لگایا ہے</p>
              <p>یہ ثابت کرتا ہے کہ ایک ایپ میں <strong>multiple contexts</strong> استعمال ہو سکتے ہیں</p>
            </div>
          </div>

          {/* Login Page Section */}
          <div ref={loginPageRef} className="section-card">
            <h2 className="section-title">🔐 Step 3: Login Page بنائیں</h2>
            <div className="section-text">
              <p>یہ page user کو login کرنے کے لیے ہوگا</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>Login.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(loginPageCode, "Login.jsx")}
                >
                  {copyStatus.includes("Login.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{loginPageCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 کلیدی نکات:</h4>
              <ul>
                <li><strong>useContext(AuthContext)</strong> - login فنکشن حاصل کرتا ہے</li>
                <li><strong>useNavigate()</strong> - login کے بعد dashboard پر redirect کرتا ہے</li>
                <li><strong>useState()</strong> - username/password کو store کرتا ہے</li>
                <li>ڈیمو کے لیے: <code>admin / 1234</code></li>
              </ul>
            </div>
          </div>

          {/* ProtectedRoute Section */}
          <div ref={protectedRouteRef} className="section-card">
            <h2 className="section-title">🛡️ Step 4: ProtectedRoute Component بنائیں</h2>
            <div className="section-text">
              <p>یہ component ہمارا "security guard" ہوگا جو check کرے گا کہ user لاگ ان ہے یا نہیں</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>ProtectedRoute.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(protectedRouteCode, "ProtectedRoute.jsx")}
                >
                  {copyStatus.includes("ProtectedRoute.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{protectedRouteCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 کام کا طریقہ:</h4>
              <ul>
                <li><strong>⿡ اگر user لاگ ان نہیں ہے</strong> → Login page پر redirect + alert</li>
                <li><strong>⿢ اگر user لاگ ان ہے</strong> → children components کو render کرے</li>
                <li><strong>&lt;Navigate to="/login" replace /&gt;</strong> - browser history میں replace کرتا ہے</li>
              </ul>
            </div>
          </div>

          {/* Dashboard Section */}
          <div ref={dashboardRef} className="section-card">
            <h2 className="section-title">📊 Step 5: Dashboard Page بنائیں</h2>
            <div className="section-text">
              <p>یہ وہ page ہے جس تک صرف لاگ ان users کی رسائی ہوگی</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>Dashboard.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(dashboardCode, "Dashboard.jsx")}
                >
                  {copyStatus.includes("Dashboard.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{dashboardCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 خصوصیات:</h4>
              <ul>
                <li>لاگ ان کی حالت دکھاتا ہے</li>
                <li>Logout button کے ساتھ</li>
                <li>صرف لاگ ان users ہی یہاں پہنچ سکتے ہیں</li>
              </ul>
            </div>
          </div>

          {/* App.jsx Section */}
          <div ref={appJsxRef} className="section-card">
            <h2 className="section-title">🧩 Step 6: App.jsx میں Routes اپڈیٹ کریں</h2>
            <div className="section-text">
              <p>اب ہم اپنے routes کو setup کریں گے</p>
            </div>
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
            <div className="info-box">
              <h4>🔹 Routes کی تقسیم:</h4>
              <ul>
                <li><strong>⿡ Public Routes</strong> - ہر کوئی دیکھ سکتا ہے</li>
                <li><strong>⿢ Protected Route</strong> - صرف لاگ ان users دیکھ سکتے ہیں</li>
                <li><strong>&lt;ProtectedRoute&gt;</strong> - Dashboard کو protect کرتا ہے</li>
              </ul>
            </div>
          </div>

          {/* CSS Section */}
          <div ref={cssRef} className="section-card">
            <h2 className="section-title">🎨 Step 7: CSS Styles شامل کریں</h2>
            <div className="section-text">
              <p>اپنی App.css میں یہ نیا CSS شامل کریں</p>
            </div>
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

          {/* Real Life Applications */}
          <div className="section-card">
            <h2 className="section-title">💡 ریئل لائف میں Protected Routes</h2>
            <div className="methods-grid">
              <div className="method-card">
                <h3>👤 User Dashboard</h3>
                <p>ہر user کا اپنا ڈیش بورڈ</p>
              </div>
              <div className="method-card">
                <h3>💼 Admin Panel</h3>
                <p>صرف ایڈمنز کے لیے</p>
              </div>
              <div className="method-card">
                <h3>🔒 Premium Content</h3>
                <p>صرف paying users کے لیے</p>
              </div>
              <div className="method-card">
                <h3>📝 User Profile</h3>
                <p>ہر user اپنا profile دیکھ سکتا ہے</p>
              </div>
              <div className="method-card">
                <h3>🛒 Order History</h3>
                <p>صرف لاگ ان users اپنے orders دیکھ سکتے ہیں</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div ref={summaryRef} className="section-card">
            <h2 className="section-title">📦 Summary Box — Chapter 21</h2>
            <table className="file-table">
              <thead>
                <tr>
                  <th>🔹 فیچر</th>
                  <th>🔍 وضاحت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AuthContext</strong></td>
                  <td>پوری ایپ میں login state رکھتا ہے</td>
                </tr>
                <tr>
                  <td><strong>AuthProvider</strong></td>
                  <td>تمام components کو auth ڈیٹا فراہم کرتا ہے</td>
                </tr>
                <tr>
                  <td><strong>ProtectedRoute</strong></td>
                  <td>Security guard کی طرح کام کرتا ہے</td>
                </tr>
                <tr>
                  <td><strong>useNavigate()</strong></td>
                  <td>Login کے بعد dashboard پر redirect کرتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Public Routes</strong></td>
                  <td>ہر کوئی دیکھ سکتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Protected Routes</strong></td>
                  <td>صرف لاگ ان users دیکھ سکتے ہیں</td>
                </tr>
                <tr>
                  <td><strong>Multiple Contexts</strong></td>
                  <td>ایک ایپ میں کئی contexts استعمال ہو سکتے ہیں</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box" style={{marginTop: '20px'}}>
              <h4>🔹 Protected Routes کے فوائد:</h4>
              <ul>
                <li><strong>Security</strong> - صرف authorized users ہی protected pages دیکھ سکتے ہیں</li>
                <li><strong>Better UX</strong> - Users کو automatic redirect ملتا ہے</li>
                <li><strong>Clean Code</strong> - Authentication logic ایک جگہ پر</li>
                <li><strong>Reusable</strong> - ProtectedRoute کو کسی بھی route پر استعمال کر سکتے ہیں</li>
              </ul>
            </div>

            <div className="success-box" style={{marginTop: '20px'}}>
              <h4>🎉 نتیجہ:</h4>
              <p>اب آپ کی ایپ میں:</p>
              <ul>
                <li>✅ Login system کام کر رہا ہے</li>
                <li>✅ Dashboard صرف لاگ ان users دیکھ سکتے ہیں</li>
                <li>✅ بغیر login کے dashboard پر جانے پر automatic redirect</li>
                <li>✅ Clean اور reusable code structure</li>
                <li>✅ Multiple contexts کا استعمال</li>
                <li>✅ Professional authentication system! 🚀</li>
              </ul>
            </div>

            <div className="info-box" style={{marginTop: '20px', background: '#fff3cd'}}>
              <h4>🧪 Test کرنے کا طریقہ:</h4>
              <ol>
                <li>براہ راست <code>/dashboard</code> پر جائیں → Login page پر redirect ہو جائیں</li>
                <li>Login page پر <code>admin / 1234</code> ڈالیں</li>
                <li>Dashboard پر پہنچ جائیں</li>
                <li>Logout کر کے دوبارہ test کریں</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {copyStatus && <div className="copy-notification">✅ {copyStatus}</div>}
    </div>
  );
}

export default Chapter21;