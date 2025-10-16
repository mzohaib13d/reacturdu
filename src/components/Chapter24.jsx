import React, { useState } from "react";

function Chapter24() {
  const [activeSection, setActiveSection] = useState("logout-flow"); // "logout-flow" or "sweetalert"

  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Code blocks for Logout Flow section
  const codeBlocks = {
    authContext: `// 📂 src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔁 App refresh ہونے پر LocalStorage سے حالت لوڈ کریں
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(savedLogin);
  }, []);

  // ✅ Login Function
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  // 🔴 Logout Function
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear(); // 🧹 سارا ڈیٹا صاف کر دیں
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`,

    loginComponent: `// 📂 src/pages/Login.jsx
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(); // ✅ Context کے ذریعے login کریں
      alert(\`خوش آمدید \${name}!\`);
      navigate("/dashboard");
    } else {
      alert("براہ کرم اپنا نام درج کریں۔");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔐 Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اپنا نام درج کریں"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`,

    dashboardComponent: `// 📂 src/pages/Dashboard.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // ✅ Logout کے بعد Login پر redirect
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🏠 Dashboard</h2>
      <p>آپ لاگ ان ہیں۔ خوش آمدید!</p>
      <button onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
}`,

    protectedRoute: `// 📂 src/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
}`,

    appComponent: `// 📂 src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* 🔐 صرف Login کے بعد Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}`,

    homeComponent: `// 📂 src/pages/Home.jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🌟 Home Page</h2>
      <p>Welcome to the Laptop Store App!</p>
    </div>
  );
}`,
  };

  // Code blocks for SweetAlert2 section
  const sweetAlertCodeBlocks = {
    dashboardSweetAlert: `// 📂 src/pages/Dashboard.jsx (SweetAlert2 والا ورژن)
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🌸 Step 1: Confirm Box کھولیں
    Swal.fire({
      title: "کیا آپ واقعی Logout کرنا چاہتے ہیں؟",
      text: "Logout ہونے پر تمام Local Data ختم ہو جائے گا۔",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ہاں، Logout کریں",
      cancelButtonText: "نہیں، واپس جائیں",
    }).then((result) => {
      if (result.isConfirmed) {
        // ✅ Step 2: Logout کرو
        logout();
        navigate("/login");
        // 🌟 Step 3: Success Message
        Swal.fire({
          title: "Logout مکمل!",
          text: "آپ کامیابی سے logout ہو چکے ہیں۔",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🏠 Dashboard</h2>
      <p>آپ لاگ ان ہیں۔ خوش آمدید!</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
        🚪 Logout
      </button>
    </div>
  );
}`,

    installCommand: `npm install sweetalert2`,

    sweetAlertExplanation: `// SweetAlert2 Basic Usage
import Swal from 'sweetalert2';

// Simple Alert
Swal.fire('Hello!', 'This is a beautiful alert!', 'success');

// Confirmation Dialog
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  }
});`,
  };

  // Navigation Sidebar
  const NavigationSidebar = () => (
    <div className="sidebar chapter24-sidebar">
      <h3>📖 Chapter 24 Sections</h3>
      <ul className="example-list">
        <li>
          <button
            className={`sidebar-btn ${
              activeSection === "logout-flow" ? "active" : ""
            }`}
            onClick={() => setActiveSection("logout-flow")}
          >
            🔄 Complete Logout Flow
          </button>
        </li>
        <li>
          <button
            className={`sidebar-btn ${
              activeSection === "sweetalert" ? "active" : ""
            }`}
            onClick={() => setActiveSection("sweetalert")}
          >
            🌸 SweetAlert2 + Confirmation
          </button>
        </li>
      </ul>
    </div>
  );

  // Logout Flow Section
  const LogoutFlowSection = () => (
    <div id="chapter-24-logout-flow">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          🔄 چیپٹر 24: Complete Logout Flow - Login → Persistent Data → Logout
        </h1>
        <p className="chapter-subtitle2">مکمل Authentication System</p>
      </div>

      {/* Introduction */}
      <section className="section-card">
        <h2 className="section-title">🎯 مقصد</h2>
        <p className="section-text">
          اس چیپٹر میں ہم پورا Authentication Flow مکمل کریں گے جس میں Login سے
          لے کر Logout تک کا سفر شامل ہے۔ یہ چیپٹر پچھلے تمام concepts کو جوڑ دے
          گا اور طلبہ کو مکمل flow سمجھنے میں مدد دے گا۔
        </p>

        <div className="learning-outcomes">
          <h4>📚 سیکھنے کے نتائج:</h4>
          <ul>
            <li>Context API کے ذریعے Global Auth State کا management</li>
            <li>LocalStorage میں Data Persistence</li>
            <li>Protected Routes کی مکمل implementation</li>
            <li>Logout کے وقت تمام ڈیٹا کا صاف ہونا</li>
            <li>useNavigate() کے ذریعے routing</li>
          </ul>
        </div>
      </section>

      {/* Folder Structure */}
      <section className="section-card">
        <h2 className="section-title">📁 Folder Structure</h2>
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>فائل/فولڈر</th>
                <th>تفصیل</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>src/context/AuthContext.jsx</code>
                </td>
                <td>Authentication Context</td>
              </tr>
              <tr>
                <td>
                  <code>src/pages/Login.jsx</code>
                </td>
                <td>Login Page</td>
              </tr>
              <tr>
                <td>
                  <code>src/pages/Dashboard.jsx</code>
                </td>
                <td>Protected Dashboard</td>
              </tr>
              <tr>
                <td>
                  <code>src/pages/Home.jsx</code>
                </td>
                <td>Public Home Page</td>
              </tr>
              <tr>
                <td>
                  <code>src/ProtectedRoute.jsx</code>
                </td>
                <td>Route Protection Component</td>
              </tr>
              <tr>
                <td>
                  <code>src/App.jsx</code>
                </td>
                <td>Main App Component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* AuthContext */}
      <section className="section-card">
        <h2 className="section-title">🔐 1. AuthContext.jsx</h2>
        <p className="section-text">
          یہ Context پوری ایپ میں Authentication State کو manage کرتا ہے۔ یہ
          Login Status کو LocalStorage میں save کرتا ہے اور Logout کے وقت تمام
          ڈیٹا clear کرتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 AuthContext.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.authContext, "AuthContext")
              }
            >
              {copiedCode === "AuthContext" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.authContext}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li>
              <code>useEffect</code> app refresh ہونے پر localStorage سے login
              status لوڈ کرتا ہے
            </li>
            <li>
              <code>login()</code> function state update کرتا ہے اور
              localStorage میں save کرتا ہے
            </li>
            <li>
              <code>logout()</code> function state reset کرتا ہے اور{" "}
              <code>localStorage.clear()</code> سے تمام ڈیٹا صاف کرتا ہے
            </li>
            <li>
              Context Provider تمام children کو auth state اور functions فراہم
              کرتا ہے
            </li>
          </ul>
        </div>
      </section>

      {/* Login Component */}
      <section className="section-card">
        <h2 className="section-title">🔑 2. Login.jsx</h2>
        <p className="section-text">
          Login Page جہاں user اپنا نام درج کر کے login ہو سکتا ہے۔ کامیاب login
          پر user کو dashboard پر redirect کیا جاتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Login.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.loginComponent, "Login Component")
              }
            >
              {copiedCode === "Login Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.loginComponent}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li>
              <code>useState</code> user کے نام کو track کرتا ہے
            </li>
            <li>
              <code>useContext(AuthContext)</code> سے login function حاصل ہوتا
              ہے
            </li>
            <li>
              <code>useNavigate</code> page navigation کے لیے
            </li>
            <li>Form submit پر AuthContext کا login function call ہوتا ہے</li>
            <li>کامیاب login پر dashboard پر redirect کیا جاتا ہے</li>
          </ul>
        </div>
      </section>

      {/* Dashboard Component */}
      <section className="section-card">
        <h2 className="section-title">🏠 3. Dashboard.jsx</h2>
        <p className="section-text">
          Protected Dashboard جہاں صرف logged in users ہی جا سکتے ہیں۔ یہاں
          Logout کا بٹن ہوتا ہے جو user کو logout کر کے login page پر بھیجتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Dashboard.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(
                  codeBlocks.dashboardComponent,
                  "Dashboard Component"
                )
              }
            >
              {copiedCode === "Dashboard Component"
                ? "✅ Copied!"
                : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.dashboardComponent}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li>
              <code>useContext(AuthContext)</code> سے logout function حاصل ہوتا
              ہے
            </li>
            <li>
              Logout button پر click کرنے پر <code>logout()</code> function call
              ہوتا ہے
            </li>
            <li>
              Logout کے بعد <code>navigate("/login")</code> سے user login page
              پر redirect ہوتا ہے
            </li>
            <li>یہ page صرف logged in users کے لیے accessible ہے</li>
          </ul>
        </div>
      </section>

      {/* ProtectedRoute Component */}
      <section className="section-card">
        <h2 className="section-title">🛡️ 4. ProtectedRoute.jsx</h2>
        <p className="section-text">
          یہ component protected routes کو guard کرتا ہے۔ اگر user logged in
          نہیں ہے تو اسے login page پر redirect کرتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 ProtectedRoute.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.protectedRoute, "ProtectedRoute")
              }
            >
              {copiedCode === "ProtectedRoute" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.protectedRoute}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li>
              AuthContext سے <code>isLoggedIn</code> state چیک کرتا ہے
            </li>
            <li>
              اگر user logged in نہیں ہے:{" "}
              <code>&lt;Navigate to="/login" replace /&gt;</code>
            </li>
            <li>
              اگر user logged in ہے: <code>children</code> return کرتا ہے
              (protected page)
            </li>
            <li>
              <code>replace</code> prop browser history کو maintain کرتا ہے
            </li>
          </ul>
        </div>
      </section>

      {/* App Component */}
      <section className="section-card">
        <h2 className="section-title">⚛️ 5. App.jsx</h2>
        <p className="section-text">
          Main App Component جہاں routing setup اور providers configure ہوتے
          ہیں۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 App.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.appComponent, "App Component")
              }
            >
              {copiedCode === "App Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.appComponent}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li>
              <code>AuthProvider</code> پورے app کو auth context فراہم کرتا ہے
            </li>
            <li>
              <code>BrowserRouter</code> routing enable کرتا ہے
            </li>
            <li>
              <code>/dashboard</code> route <code>ProtectedRoute</code> میں
              wrapped ہے
            </li>
            <li>
              Public routes (<code>/</code>, <code>/login</code>) بغیر
              protection کے ہیں
            </li>
          </ul>
        </div>
      </section>

      {/* Home Component */}
      <section className="section-card">
        <h2 className="section-title">🌟 6. Home.jsx</h2>
        <p className="section-text">
          Public Home Page جو ہر user دیکھ سکتا ہے، چاہے وہ logged in ہو یا نہ
          ہو۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Home.jsx</h3>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(codeBlocks.homeComponent, "Home Component")
              }
            >
              {copiedCode === "Home Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.homeComponent}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Summary */}
      <section className="section-card">
        <h2 className="section-title">🔄 مکمل Flow Summary</h2>
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>User /login پر جاتا ہے</td>
                <td>Login form display ہوتا ہے</td>
              </tr>
              <tr>
                <td>2</td>
                <td>User نام درج کر کے login ہوتا ہے</td>
                <td>
                  AuthContext login() call ہوتا ہے، localStorage update ہوتا ہے
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>User /dashboard پر redirect ہوتا ہے</td>
                <td>
                  ProtectedRoute access allow کرتا ہے، Dashboard display ہوتا ہے
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>User Logout button دباتا ہے</td>
                <td>
                  AuthContext logout() call ہوتا ہے، localStorage clear ہوتا ہے
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>User /login پر redirect ہوتا ہے</td>
                <td>Login form دوبارہ display ہوتا ہے</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-card">
        <h2 className="section-title">⭐ کلیدی خصوصیات</h2>
        <div className="methods-grid">
          <div className="method-card">
            <h3>🔐 Context API</h3>
            <p>Global authentication state management</p>
          </div>
          <div className="method-card">
            <h3>💾 LocalStorage</h3>
            <p>Data persistence across page refreshes</p>
          </div>
          <div className="method-card">
            <h3>🛡️ Protected Routes</h3>
            <p>Route guarding for authenticated users</p>
          </div>
          <div className="method-card">
            <h3>🧹 Clean Logout</h3>
            <p>Complete data clearance on logout</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="summary-card">
        <h2 className="section-title">📌 خلاصہ</h2>
        <div className="summary-content">
          <p>
            اس چیپٹر میں ہم نے مکمل Authentication System implement کیا جس میں:
          </p>
          <ul>
            <li>Context API کے ذریعے global state management</li>
            <li>LocalStorage میں data persistence</li>
            <li>Protected routes کی implementation</li>
            <li>Logout کے وقت complete data clearance</li>
          </ul>
          <p>
            اب آپ کے پاس ایک مکمل authentication flow ہے جو production level
            apps میں استعمال ہو سکتا ہے۔
          </p>
        </div>
      </section>
    </div>
  );

// SweetAlert2 Section
const SweetAlertSection = () => (
  <div id="chapter-24-sweetalert">
    <div className="chapter-header">
      <h1 className="chapter-title2">
        🌸 چیپٹر 24: Logout Confirmation with SweetAlert2
      </h1>
      <p className="chapter-subtitle2">خوبصورت Confirmation Dialogs</p>
    </div>

    {/* Introduction */}
    <section className="section-card">
      <h2 className="section-title">🎯 مقصد</h2>
      <p className="section-text">
        اس حصے میں ہم basic logout کو enhance کریں گے SweetAlert2 کے ساتھ۔ اب
        user جب logout کا بٹن دبائے گا تو فوراً logout نہیں ہوگا بلکہ ایک
        خوبصورت confirmation dialog ظاہر ہوگا۔
      </p>

      <div className="learning-outcomes">
        <h4>📚 سیکھنے کے نتائج:</h4>
        <ul>
          <li>SweetAlert2 library کی installation اور usage</li>
          <li>Confirmation dialogs کا implementation</li>
          <li>User experience کو بہتر بنانا</li>
          <li>Accidental actions کو prevent کرنا</li>
        </ul>
      </div>
    </section>

    {/* Installation */}
    <section className="section-card">
      <h2 className="section-title">📦 1. SweetAlert2 Installation</h2>
      <p className="section-text">
        سب سے پہلے ہمیں SweetAlert2 package کو install کرنا ہوگا۔
      </p>

      <div className="code-section">
        <div className="code-header">
          <h3>💻 Terminal Command</h3>
          <button
            className="copy-btn"
            onClick={() =>
              copyToClipboard(
                sweetAlertCodeBlocks.installCommand,
                "Install Command"
              )
            }
          >
            {copiedCode === "Install Command" ? "✅ Copied!" : "📋 Copy Code"}
          </button>
        </div>
        <div className="code-block-container">
          <div className="code-block-wrapper">
            <pre className="english-code">
              <code>{sweetAlertCodeBlocks.installCommand}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="info-box">
        <h4>💡 SweetAlert2 کیا ہے؟</h4>
        <p>
          SweetAlert2 ایک modern, beautiful, اور customizable alert library ہے
          جو boring browser alerts کی جگہ stylish dialogs دکھاتی ہے۔
        </p>
      </div>
    </section>

    {/* Enhanced Dashboard Component */}
    <section className="section-card">
      <h2 className="section-title">🚀 2. Enhanced Dashboard.jsx</h2>
      <p className="section-text">
        اب ہم اپنے Dashboard component کو upgrade کریں گے SweetAlert2 کے ساتھ۔
      </p>

      <div className="code-section">
        <div className="code-header">
          <h3>📄 Dashboard.jsx (SweetAlert2 Version)</h3>
          <button
            className="copy-btn"
            onClick={() =>
              copyToClipboard(
                sweetAlertCodeBlocks.dashboardSweetAlert,
                "Dashboard with SweetAlert"
              )
            }
          >
            {copiedCode === "Dashboard with SweetAlert"
              ? "✅ Copied!"
              : "📋 Copy Code"}
          </button>
        </div>
        <div className="code-block-container">
          <div className="code-block-wrapper">
            <pre className="english-code">
              <code>{sweetAlertCodeBlocks.dashboardSweetAlert}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="explanation-section">
        <h4>🧠 Step-by-Step وضاحت:</h4>

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Import SweetAlert2</h3>
            <p>
              <code className="coding">import Swal from "sweetalert2";</code>
            </p>
            {/* Copy Button for Import Code */}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    'import Swal from "sweetalert2";',
                    "Import SweetAlert2"
                  )
                }
              >
                {copiedCode === "Import SweetAlert2"
                  ? "✅ Copied!"
                  : "📋 Copy Import Code"}
              </button>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Confirmation Dialog</h3>
            <p>
              <code>Swal.fire()</code> کے ساتھ confirmation dialog بنائیں جس
              میں:
            </p>
            <ul>
              <li>
                <code>title</code> - Dialog کا title
              </li>
              <li>
                <code>text</code> - Additional text
              </li>
              <li>
                <code>icon</code> - Warning icon
              </li>
              <li>
                <code>showCancelButton</code> - Cancel button دکھائیں
              </li>
              <li>
                <code>confirmButtonText</code> اور{" "}
                <code>cancelButtonText</code> - Button labels
              </li>
            </ul>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Check User Response</h3>
            <p>
              <code>.then((result) =&gt; {})</code> میں user کے response کو
              چیک کریں۔ اگر <code>result.isConfirmed</code> ہے تو logout
              process شروع کریں۔
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Success Message</h3>
            <p>
              Logout کے بعد success message دکھائیں جو automatic طور پر 2
              seconds میں close ہو جائے۔
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SweetAlert2 Basic Usage */}
    <section className="section-card">
      <h2 className="section-title">🎨 3. SweetAlert2 Basic Usage</h2>
      <p className="section-text">
        SweetAlert2 کے مختلف types کے alerts اور ان کے options:
      </p>

      <div className="code-section">
        <div className="code-header">
          <h3>📄 SweetAlert2 Examples</h3>
          <button
            className="copy-btn"
            onClick={() =>
              copyToClipboard(
                sweetAlertCodeBlocks.sweetAlertExplanation,
                "SweetAlert2 Examples"
              )
            }
          >
            {copiedCode === "SweetAlert2 Examples"
              ? "✅ Copied!"
              : "📋 Copy Code"}
          </button>
        </div>
        <div className="code-block-container">
          <div className="code-block-wrapper">
            <pre className="english-code">
              <code>{sweetAlertCodeBlocks.sweetAlertExplanation}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="methods-grid">
        <div className="method-card">
          <h3>✅ Success Alert</h3>
          <p>کامیابی کے messages کے لیے</p>
          <code>icon: 'success'</code>
        </div>
        <div className="method-card">
          <h3>⚠️ Warning Alert</h3>
          <p>Confirmation dialogs کے لیے</p>
          <code>icon: 'warning'</code>
        </div>
        <div className="method-card">
          <h3>❌ Error Alert</h3>
          <p>Errors کے لیے</p>
          <code>icon: 'error'</code>
        </div>
        <div className="method-card">
          <h3>ℹ️ Info Alert</h3>
          <p>Information کے لیے</p>
          <code>icon: 'info'</code>
        </div>
      </div>
    </section>

    {/* User Flow */}
    <section className="section-card">
      <h2 className="section-title">🔄 User Flow with SweetAlert2</h2>

      <div className="step-card">
        <div className="step-number">1</div>
        <div className="step-content">
          <h3 className="step-title">User Logout Button دبائے</h3>
          <p>Dashboard پر user "🚪 Logout" button دبائے</p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-number">2</div>
        <div className="step-content">
          <h3 className="step-title">Confirmation Dialog ظاہر ہو</h3>
          <div
            style={{
              background: "linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #ffc107",
              margin: "10px 0",
            }}
          >
            <p>
              <strong>کیا آپ واقعی Logout کرنا چاہتے ہیں؟</strong>
            </p>
            <p>Logout ہونے پر تمام Local Data ختم ہو جائے گا۔</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                style={{
                  background: "#d33",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                نہیں، واپس جائیں
              </button>
              <button
                style={{
                  background: "#3085d6",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                ہاں، Logout کریں
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="step-card">
        <div className="step-number">3</div>
        <div className="step-content">
          <h3 className="step-title">User Choice</h3>
          <p>
            <strong>"ہاں"</strong> دبانے پر: Logout process شروع ہو
          </p>
          <p>
            <strong>"نہیں"</strong> دبانے پر: Dialog close ہو، user Dashboard
            پر رہے
          </p>
        </div>
      </div>

      <div className="step-card">
        <div className="step-number">4</div>
        <div className="step-content">
          <h3 className="step-title">Success Message</h3>
          <div
            style={{
              background: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #28a745",
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            <p>
              <strong>✅ Logout مکمل!</strong>
            </p>
            <p>آپ کامیابی سے logout ہو چکے ہیں۔</p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-card">
      <h2 className="section-title">⭐ فوائد</h2>
      <div className="methods-grid">
        <div className="method-card">
          <h3>🎨 Better UI/UX</h3>
          <p>بہتر user interface اور experience</p>
        </div>
        <div className="method-card">
          <h3>🚫 Prevent Accidents</h3>
          <p>Accidental logouts کو روکتا ہے</p>
        </div>
        <div className="method-card">
          <h3>💬 Clear Communication</h3>
          <p>User کو actions کے consequences بتاتا ہے</p>
        </div>
        <div className="method-card">
          <h3>⚡ Easy Implementation</h3>
          <p>آسان implementation اور customization</p>
        </div>
      </div>
    </section>

    {/* Summary */}
    <section className="summary-card">
      <h2 className="section-title">📌 خلاصہ</h2>
      <div className="summary-content">
        <p>SweetAlert2 کے ساتھ ہم نے user experience کو بہتر بنایا ہے:</p>
        <ul>
          <li>
            Confirmation dialogs کے ذریعے accidental actions کو prevent کیا
          </li>
          <li>Beautiful UI کے ساتھ professional look دیا</li>
          <li>User کو clear feedback دیا</li>
          <li>Customizable options کے ساتھ flexibility دی</li>
        </ul>
        <p>
          اب آپ کے پاس ایک مکمل professional authentication system ہے جو
          modern web apps کے standards پر پورا اترتا ہے۔
        </p>
      </div>
    </section>
  </div>
); // SweetAlertSection End

  return (
    <div className="chapter-container urdu-text">
      <div className="content-wrapper">
        <NavigationSidebar />

        <div className="main-content">
          {activeSection === "logout-flow" && <LogoutFlowSection />}
          {activeSection === "sweetalert" && <SweetAlertSection />}
        </div>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter24;
