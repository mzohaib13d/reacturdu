import React, { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";

function Chapter25() {
  const [copiedCode, setCopiedCode] = useState("");
  const [activeSystem, setActiveSystem] = useState("basic");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Demo functions for animated alerts
  const showAnimatedSuccess = () => {
    Swal.fire({
      title: "🎉 کامیابی!",
      text: "آپ کا کام مکمل ہو گیا ہے۔",
      icon: "success",
      showClass: {
        popup: 'animate__animated animate__zoomIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut animate__faster'
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  const showAnimatedError = () => {
    Swal.fire({
      title: "❌ خرابی!",
      text: "کچھ غلطی ہو گئی ہے۔",
      icon: "error",
      showClass: {
        popup: 'animate__animated animate__shakeX animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__faster'
      },
      confirmButtonText: "ٹھیک ہے",
    });
  };

  const showAnimatedWarning = () => {
    Swal.fire({
      title: "⚠ انتباہ!",
      text: "کیا آپ واقعی یہ عمل کرنا چاہتے ہیں؟",
      icon: "warning",
      showClass: {
        popup: 'animate__animated animate__wobble animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__flipOutX animate__faster'
      },
      showCancelButton: true,
      confirmButtonText: "ہاں",
      cancelButtonText: "نہیں",
    });
  };

  const showAnimatedInfo = () => {
    Swal.fire({
      title: "💡 معلومات",
      text: "یہ ایک معلوماتی پیغام ہے۔",
      icon: "info",
      showClass: {
        popup: 'animate__animated animate__lightSpeedInLeft animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__lightSpeedOutRight animate__faster'
      },
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const showBounceAnimation = () => {
    Swal.fire({
      title: "🏀 باؤنس ایفیکٹ!",
      text: "یہ باؤنس انیمیشن ہے۔",
      icon: "success",
      showClass: {
        popup: 'animate__animated animate__bounceIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOut animate__faster'
      },
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const showFlipAnimation = () => {
    Swal.fire({
      title: "🔄 فلپ ایفیکٹ!",
      text: "یہ فلپ انیمیشن ہے۔",
      icon: "info",
      showClass: {
        popup: 'animate__animated animate__flipInX animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__flipOutX animate__faster'
      },
      showConfirmButton: false,
      timer: 2000,
    });
  };

  // Code blocks for Basic Authentication
  const basicCodeBlocks = {
    folderStructure: `📁 src/
 ├── 📂 context/
 │     └── AuthContext.jsx
 ├── 📂 pages/
 │     ├── Login.jsx
 │     ├── Dashboard.jsx
 │     ├── Home.jsx
 ├── ProtectedRoute.jsx
 ├── App.jsx
 └── main.jsx`,

    stepByStep: `🔧 Step-by-Step Implementation:

1. AuthContext.jsx بنائیں (Context API)
2. ProtectedRoute.jsx بنائیں (Route Protection)
3. Login.jsx بنائیں (Login Form)
4. Dashboard.jsx بنائیں (Protected Page)
5. Home.jsx بنائیں (Public Page)
6. App.jsx میں سب کچھ connect کریں
7. main.jsx میں App کو wrap کریں`,

    authContext: `// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`,

    protectedRoute: `// ProtectedRoute.jsx
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}`,

    loginComponent: `// pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo login - in real app, verify with backend
    const userData = {
      id: 1,
      name: "John Doe",
      email: email
    };
    
    login(userData);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`,

    dashboardComponent: `// pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h2>🎯 Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}`,

    homeComponent: `// pages/Home.jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🌟 Home Page</h2>
      <p>Welcome to the Laptop Store App!</p>
    </div>
  );
}`,

    appStructure: `// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
}

export default App;`,

    mainJsx: `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
  };

  // Code blocks for Advanced Authentication
  const advancedCodeBlocks = {
    installation: `npm install sweetalert2`,
    animateInstallation: `npm install animate.css`,

    animateImport: `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "animate.css"; // Import animate.css for animations

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

    animatedAlertExample: `// Example: Animated Success Alert
Swal.fire({
  title: "🎉 کامیابی!",
  text: "آپ کا کام مکمل ہو گیا ہے۔",
  icon: "success",
  showClass: {
    popup: 'animate__animated animate__zoomIn animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__zoomOut animate__faster'
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});`,

    advancedAuthContext: `// context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Auto Login check on refresh
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(savedLogin);
  }, []);

  // ✅ Login Function
  const login = (stayLogged) => {
    setIsLoggedIn(true);
    if (stayLogged) {
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  // 🔴 Logout Function
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`,

    advancedLogin: `// pages/Login.jsx
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function Login() {
  const [name, setName] = useState("");
  const [stayLogged, setStayLogged] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      login(stayLogged);

      // 🎉 Animated Success Alert
      Swal.fire({
        title: \`خوش آمدید \${name}!\`,
        text: "آپ کامیابی سے لاگ ان ہو گئے ہیں۔",
        icon: "success",
        showClass: {
          popup: 'animate__animated animate__zoomIn animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut animate__faster'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      navigate("/dashboard");
    } else {
      // ❌ Error Alert
      Swal.fire({
        title: "⚠ نام ضروری ہے!",
        text: "براہ کرم اپنا نام درج کریں۔",
        icon: "error",
        showClass: {
          popup: 'animate__animated animate__shakeX animate__faster'
        },
        showConfirmButton: true,
      });
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
        <div>
          <label>
            <input
              type="checkbox"
              checked={stayLogged}
              onChange={() => setStayLogged(!stayLogged)}
            />
            Stay Logged In
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`,

    advancedDashboard: `// pages/Dashboard.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "کیا آپ واقعی Logout کرنا چاہتے ہیں؟",
      text: "Logout ہونے پر تمام محفوظ ڈیٹا ختم ہو جائے گا۔",
      icon: "warning",
      showClass: {
        popup: 'animate__animated animate__wobble animate__faster'
      },
      showCancelButton: true,
      confirmButtonText: "ہاں، Logout کریں",
      cancelButtonText: "نہیں، واپس جائیں",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/login");

        // ✅ Animated Success Popup
        Swal.fire({
          title: "Logout مکمل ✅",
          text: "آپ کامیابی سے logout ہو گئے ہیں۔",
          icon: "success",
          showClass: {
            popup: 'animate__animated animate__bounceIn animate__faster'
          },
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🏠 Dashboard</h2>
      <p>آپ لاگ ان ہیں۔ خوش آمدید!</p>
      <button onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
}`,

    advancedProtectedRoute: `// ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}`,

    advancedHome: `// pages/Home.jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🌟 Home Page</h2>
      <p>Welcome to the React SweetAlert2 + AutoLogin App!</p>
    </div>
  );
}`,

    advancedApp: `// App.jsx
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

          {/* 🔐 Protected Dashboard Route */}
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
}`
  };

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          📚 چیپٹر 25: Authentication & Protected Routes + SweetAlert2
        </h1>
        <p className="chapter-subtitle2">User Login & Route Protection in React with Beautiful Alerts</p>
      </div>

      {/* System Selection */}
      <section className="section-card">
        <h2 className="section-title">🎯 Authentication System Selection</h2>
        <div className="demo-card" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className={`sidebar-btn ${activeSystem === "basic" ? "active" : ""}`}
              onClick={() => setActiveSystem("basic")}
              style={{ padding: "15px 25px", fontSize: "16px" }}
            >
              🔐 Basic Authentication System
            </button>
            <button
              className={`sidebar-btn ${activeSystem === "advanced" ? "active" : ""}`}
              onClick={() => setActiveSystem("advanced")}
              style={{ padding: "15px 25px", fontSize: "16px" }}
            >
              🚀 Advanced System (SweetAlert2 + Auto Login)
            </button>
          </div>
          <p style={{ marginTop: "15px", color: "#666", fontSize: "16px" }}>
            <strong>اوپر موجودبٹن سے منتخب کریں۔ </strong>
          </p>
        </div>
      </section>

      {activeSystem === "basic" ? (
        /* Basic Authentication System */
        <>
          {/* Folder Structure Section */}
          <section className="section-card">
            <h2 className="section-title">🗂 Folder Structure</h2>
            <p className="section-text">
              پہلے اپنے project کی folder structure کو اس طرح organize کریں:
            </p>

            <div className="code-section">
              <div className="code-header">
                <h3>📁 Project Folder Structure</h3>
              </div>
              <pre className="english-code">
                <code>{basicCodeBlocks.folderStructure}</code>
              </pre>
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice">Please scroll → </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(basicCodeBlocks.folderStructure, "Folder Structure")}
                >
                  {copiedCode === "Folder Structure" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
            </div>
          </section>

          {/* Step-by-Step Implementation */}
          <section className="section-card">
            <h2 className="section-title">⚙ Step-by-Step Implementation</h2>
            <p className="section-text">
              نیچے دیے گئے steps کو ترتیب سے follow کریں:
            </p>

            <div className="code-section">
              <div className="code-header">
                <h3>🔧 Implementation Steps</h3>
              </div>
              <pre className="english-code">
                <code>{basicCodeBlocks.stepByStep}</code>
              </pre>
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice">Please scroll → </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(basicCodeBlocks.stepByStep, "Implementation Steps")}
                >
                  {copiedCode === "Implementation Steps" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
            </div>

            {/* Step Cards */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">AuthContext.jsx بنائیں</h3>
                <p className="urdu-text">
                  <strong>context</strong> folder کے اندر <strong>AuthContext.jsx</strong> فائل بنائیں۔
                  یہ فائل پوری app میں user state کو manage کرے گی۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>context/AuthContext.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.authContext, "Auth Context")}
                    >
                      {copiedCode === "Auth Context" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.authContext}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">ProtectedRoute.jsx بنائیں</h3>
                <p className="urdu-text">
                  root directory میں <strong>ProtectedRoute.jsx</strong> فائل بنائیں۔ 
                  یہ component check کرے گا کہ user logged in ہے یا نہیں۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>ProtectedRoute.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.protectedRoute, "Protected Route")}
                    >
                      {copiedCode === "Protected Route" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.protectedRoute}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Login.jsx بنائیں</h3>
                <p className="urdu-text">
                  <strong>pages</strong> folder کے اندر <strong>Login.jsx</strong> فائل بنائیں۔ 
                  یہ user کے login form کو handle کرے گی۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Login.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.loginComponent, "Login Component")}
                    >
                      {copiedCode === "Login Component" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.loginComponent}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Dashboard.jsx بنائیں</h3>
                <p className="urdu-text">
                  <strong>pages</strong> folder کے اندر <strong>Dashboard.jsx</strong> فائل بنائیں۔ 
                  یہ ایک protected page ہوگی جو صرف logged in users کو دکھائی دے گی۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Dashboard.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.dashboardComponent, "Dashboard Component")}
                    >
                      {copiedCode === "Dashboard Component" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.dashboardComponent}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Home.jsx بنائیں</h3>
                <p className="urdu-text">
                  <strong>pages</strong> folder کے اندر <strong>Home.jsx</strong> فائل بنائیں۔ 
                  یہ ایک public page ہوگی جو ہر user کو دکھائی دے گی۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Home.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.homeComponent, "Home Component")}
                    >
                      {copiedCode === "Home Component" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.homeComponent}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">App.jsx میں Routes Setup کریں</h3>
                <p className="urdu-text">
                  <strong>App.jsx</strong> فائل میں تمام components کو connect کریں اور routes define کریں۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>App.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.appStructure, "App Structure")}
                    >
                      {copiedCode === "App Structure" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.appStructure}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3 className="step-title">main.jsx کو update کریں</h3>
                <p className="urdu-text">
                  <strong>main.jsx</strong> فائل کو check کریں کہ وہ صحیح طریقے سے setup ہے۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>main.jsx</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(basicCodeBlocks.mainJsx, "Main.jsx")}
                    >
                      {copiedCode === "Main.jsx" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{basicCodeBlocks.mainJsx}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Advanced Authentication System */
        <>
          {/* SweetAlert2 Introduction */}
          <section className="section-card">
            <h2 className="section-title">🎉 SweetAlert2 + Auto Login System</h2>
            <p className="section-text">
              اس جدید system میں ہم SweetAlert2 کے خوبصورت popups اور Auto Login feature کو شامل کریں گے۔
            </p>

            <div className="info-box">
              <h4>🌐 Official Resource</h4>
              <p><strong>SweetAlert2 Official Website:</strong> 👉 <a href="https://sweetalert2.github.io" target="_blank" rel="noopener noreferrer" style={{color: '#0078ff'}}>https://sweetalert2.github.io</a></p>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>💻 Installation Command</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(advancedCodeBlocks.installation, "Installation Command")}
                >
                  {copiedCode === "Installation Command" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{advancedCodeBlocks.installation}</code>
              </pre>
            </div>
          </section>

          {/* Animation Enhancement Section */}
          <section className="section-card">
            <h2 className="section-title">🌈 Optional Enhancement — Animation Support</h2>
            <p className="section-text">
              اگر آپ popup میں animation شامل کرنا چاہیں تو Animate.css استعمال کر سکتے ہیں۔
            </p>

            <div className="code-section">
              <div className="code-header">
                <h3>📦 Animate.css Installation</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(advancedCodeBlocks.animateInstallation, "Animate.css Installation")}
                >
                  {copiedCode === "Animate.css Installation" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{advancedCodeBlocks.animateInstallation}</code>
              </pre>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>📝 Import in main.jsx</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(advancedCodeBlocks.animateImport, "Animate.css Import")}
                >
                  {copiedCode === "Animate.css Import" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{advancedCodeBlocks.animateImport}</code>
              </pre>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>🎞️ Animated Alert Example</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(advancedCodeBlocks.animatedAlertExample, "Animated Alert Example")}
                >
                  {copiedCode === "Animated Alert Example" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{advancedCodeBlocks.animatedAlertExample}</code>
              </pre>
            </div>

            {/* Live Animation Demonstration */}
            <div className="demo-section">
              <h3>🎬 Live Animation Demonstration</h3>
              <p className="section-text">
                نیچے دیے گئے بٹنوں پر کلک کر کے مختلف animations دیکھیں:
              </p>
              
              <div className="demo-card">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                  <button className="interactive-btn" onClick={showAnimatedSuccess}>
                    🎉 کامیابی کا پیغام
                  </button>
                  <button className="interactive-btn" onClick={showAnimatedError}>
                    ❌ خرابی کا پیغام
                  </button>
                  <button className="interactive-btn" onClick={showAnimatedWarning}>
                    ⚠ انتباہ کا پیغام
                  </button>
                  <button className="interactive-btn" onClick={showAnimatedInfo}>
                    💡 معلومات کا پیغام
                  </button>
                  <button className="interactive-btn" onClick={showBounceAnimation}>
                    🏀 باؤنس ایفیکٹ
                  </button>
                  <button className="interactive-btn" onClick={showFlipAnimation}>
                    🔄 فلپ ایفیکٹ
                  </button>
                </div>
                
                <div className="info-box" style={{ marginTop: '20px' }}>
                  <h4>📚 Animation Classes Reference</h4>
                  <p><strong>showClass:</strong> popup ظاہر ہونے کا animation</p>
                  <p><strong>hideClass:</strong> popup غائب ہونے کا animation</p>
                  <p><strong>Popular Animations:</strong> zoomIn, zoomOut, bounceIn, bounceOut, flipInX, flipOutX, shakeX, wobble, lightSpeedInLeft, lightSpeedOutRight</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Implementation Steps */}
          <section className="section-card">
            <h2 className="section-title">🚀 Advanced Implementation</h2>

            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Advanced AuthContext.jsx</h3>
                <p className="urdu-text">
                  یہ context auto login feature کے ساتھ ہے۔ جب user "Stay Logged In" checkbox پر click کرے گا،
                  تو app refresh ہونے کے بعد بھی وہ automatically logged in رہے گا۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>context/AuthContext.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedAuthContext, "Advanced Auth Context")}
                    >
                      {copiedCode === "Advanced Auth Context" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedAuthContext}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Advanced Login.jsx with SweetAlert2</h3>
                <p className="urdu-text">
                  یہ login component SweetAlert2 کے animated alerts اور "Stay Logged In" feature کے ساتھ ہے۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Login.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedLogin, "Advanced Login")}
                    >
                      {copiedCode === "Advanced Login" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedLogin}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Advanced Dashboard.jsx</h3>
                <p className="urdu-text">
                  یہ dashboard component میں logout confirmation کے لیے SweetAlert2 کا استعمال کیا گیا ہے۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Dashboard.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedDashboard, "Advanced Dashboard")}
                    >
                      {copiedCode === "Advanced Dashboard" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedDashboard}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Advanced ProtectedRoute.jsx</h3>
                <p className="urdu-text">
                  یہ protected route advanced auth context کے ساتھ کام کرے گا۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>ProtectedRoute.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedProtectedRoute, "Advanced Protected Route")}
                    >
                      {copiedCode === "Advanced Protected Route" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedProtectedRoute}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Advanced Home.jsx</h3>
                <p className="urdu-text">
                  یہ public page advanced system کے ساتھ ہے۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>pages/Home.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedHome, "Advanced Home")}
                    >
                      {copiedCode === "Advanced Home" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedHome}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">Advanced App.jsx</h3>
                <p className="urdu-text">
                  App.jsx کو advanced system کے مطابق update کریں۔
                </p>
                
                <div className="code-section">
                  <div className="code-header">
                    <h3>App.jsx (Advanced)</h3>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(advancedCodeBlocks.advancedApp, "Advanced App")}
                    >
                      {copiedCode === "Advanced App" ? "✅ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{advancedCodeBlocks.advancedApp}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Combined Summary Section */}
      <section className="summary-card">
        <h2 className="section-title">📌 خلاصہ</h2>
        <div className="summary-points">
          <div className="summary-item">
            <span className="summary-icon">🗂</span>
            <span>صحیح folder structure بہت important ہے</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⚙</span>
            <span>Step-by-step implementation follow کریں</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🔐</span>
            <span>AuthContext global state manage کرتا ہے</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🛡</span>
            <span>ProtectedRoute private pages کو guard کرتا ہے</span>
          </div>
          {activeSystem === "advanced" && (
            <>
              <div className="summary-item">
                <span className="summary-icon">🎉</span>
                <span>SweetAlert2 professional alerts دیتا ہے</span>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🔁</span>
                <span>Auto Login user experience بہتر بناتا ہے</span>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🌈</span>
                <span>Animate.css animations شامل کر سکتے ہیں</span>
              </div>
            </>
          )}
        </div>

        <div className="summary-content">
          <h3>🌟 Complete Implementation Flow:</h3>
          <p>1. Folder structure setup کریں</p>
          <p>2. AuthContext.jsx بنائیں ({activeSystem === "advanced" ? "Advanced" : "Basic"} version)</p>
          <p>3. ProtectedRoute.jsx بنائیں</p>
          <p>4. تمام pages components بنائیں</p>
          {activeSystem === "advanced" && <p>5. SweetAlert2 install کریں</p>}
          {activeSystem === "advanced" && <p>6. Animate.css install کریں (optional)</p>}
          <p>{activeSystem === "advanced" ? "7" : "5"}. App.jsx میں routes connect کریں</p>
          <p>{activeSystem === "advanced" ? "8" : "6"}. Test کریں کہ سب کچھ کام کر رہا ہے</p>
        </div>

        {activeSystem === "advanced" && (
          <div className="success-box" style={{ background: '#4c524cff', borderColor: '#4caf50', marginTop: '20px' }}>
            <h4>🧠 Advanced Features Summary</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginTop: "15px" }}>
              <div>
                <strong>SweetAlert2</strong>
                <p>Stylish popups with animations and icons</p>
              </div>
              <div>
                <strong>Auto Login</strong>
                <p>User stays logged in using LocalStorage</p>
              </div>
              <div>
                <strong>Stay Logged In Checkbox</strong>
                <p>Controls whether data should persist</p>
              </div>
              <div>
                <strong>Animate.css</strong>
                <p>Professional animations for popups</p>
              </div>
              <div>
                <strong>Auto-Close Timer</strong>
                <p>Alerts automatically disappear after time</p>
              </div>
              <div>
                <strong>Custom Animations</strong>
                <p>Different animations for show/hide events</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter25;