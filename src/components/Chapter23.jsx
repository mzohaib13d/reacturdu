import React, { useState } from "react";

function Chapter23() {
  const [activeSection, setActiveSection] = useState("sync-states"); // "sync-states" or "protected-routes"

  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Code blocks for Sync Multiple States section
  const codeBlocks = {
    useLocalStorage: `// 📂 src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`,

    themeContext: `// 📂 src/context/ThemeContext.jsx
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const body = document.body;
  body.style.background = theme === "light" ? "#f5f5f5" : "#222";
  body.style.color = theme === "light" ? "#000" : "#fff";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`,

    cartContext: `// 📂 src/context/CartContext.jsx
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`,

    homeComponent: `// 📂 src/pages/Home.jsx
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { cart, addToCart } = useCart();
  const { theme, toggleTheme } = useTheme();

  const product = { id: 1, name: "React Mug" };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme 🌗</button>

      <h3>Cart Count: {cart.length}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
    </div>
  );
}`,

    appComponent: `// 📂 src/App.jsx
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
  );
}`
  };

  // Code blocks for Protected Routes section
  const protectedRoutesCodeBlocks = {
    question: `پروٹیکٹد رائوٹ کس طرح پروٹیکٹ کرتا ہے۔ سائین اپ پیج ہے نہیں تو یوزر لاگ ان کہاں سے کرے گا۔ ایڈمن پیج بھی نہیں ہے۔`,

    loginComponent: `// 📂 src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); // ✅ کامیاب لاگ ان پر Dashboard پر لے جائیں
    } else {
      alert("برائے کرم یوزر نیم درج کریں۔");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔐 Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="اپنا نام درج کریں"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`,

    dashboardComponent: `// 📂 src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🏠 Dashboard</h2>
      <p>Welcome! آپ لاگ ان ہو چکے ہیں۔</p>
    </div>
  );
}`,

    homeComponentProtected: `// 📂 src/pages/Home.jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🌟 Home Page</h2>
      <p>Welcome to Laptop Store!</p>
    </div>
  );
}`,

    protectedRoute: `// 📂 src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // ❌ اگر لاگ ان نہیں تو Login Page پر بھیج دیں
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // ✅ ورنہ اصل صفحہ دکھائیں
  return children;
}`,

    appComponentProtected: `// 📂 src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 Dashboard صرف لاگ ان کے بعد */}
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
  );
}`
  };

  // Navigation Sidebar
  const NavigationSidebar = () => (
    <div className="sidebar chapter23-sidebar">
      <h3>📖 Chapter 23 Sections</h3>
      <ul className="example-list">
        <li>
          <button
            className={`sidebar-btn ${activeSection === "sync-states" ? "active" : ""}`}
            onClick={() => setActiveSection("sync-states")}
          >
            🔄 Sync Multiple States
          </button>
        </li>
        <li>
          <button
            className={`sidebar-btn ${activeSection === "protected-routes" ? "active" : ""}`}
            onClick={() => setActiveSection("protected-routes")}
          >
            🔐 Protected Routes وضاحت
          </button>
        </li>
      </ul>
    </div>
  );

  // Sync Multiple States Section
  const SyncMultipleStatesSection = () => (
    <div id="chapter-23-sync-states">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          🔄 چیپٹر 23: Sync Multiple States (Cart + Theme) with useLocalStorage()
        </h1>
        <p className="chapter-subtitle2">ایک Hook سے دو States کو Sync رکھنا</p>
      </div>

      {/* Introduction */}
      <section className="section-card">
        <h2 className="section-title">🎯 مقصد</h2>
        <p className="section-text">
          اس چیپٹر میں ہم سیکھیں گے کہ کیسے ایک ہی Custom Hook (<code>useLocalStorage</code>) 
          کو مختلف Contexts میں استعمال کر کے Theme اور Cart دونوں کا Data مستقل (Persistent) 
          رکھ سکتے ہیں۔ Refresh کے بعد بھی ڈیٹا برقرار رہے گا۔
        </p>

        <div className="learning-outcomes">
          <h4>📚 سیکھنے کے نتائج:</h4>
          <ul>
            <li>Custom Hook کو بار بار مختلف جگہ استعمال کرنا</li>
            <li>Theme اور Cart دونوں کا Data مستقل رکھنا</li>
            <li>Context API کے ذریعے States کو Sync انداز میں manage کرنا</li>
            <li>Code reusability کی اہمیت سمجھنا</li>
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
                <td><code>src/hooks/useLocalStorage.js</code></td>
                <td>Custom Hook for localStorage management</td>
              </tr>
              <tr>
                <td><code>src/context/ThemeContext.jsx</code></td>
                <td>Theme context with persistent state</td>
              </tr>
              <tr>
                <td><code>src/context/CartContext.jsx</code></td>
                <td>Cart context with persistent state</td>
              </tr>
              <tr>
                <td><code>src/pages/Home.jsx</code></td>
                <td>Main component using both contexts</td>
              </tr>
              <tr>
                <td><code>src/App.jsx</code></td>
                <td>App component with providers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* useLocalStorage Hook */}
      <section className="section-card">
        <h2 className="section-title">⚙️ 1. useLocalStorage.js (Custom Hook)</h2>
        <p className="section-text">
          یہ وہ بنیادی Hook ہے جو localStorage کے ساتھ interact کرتی ہے۔ 
          یہ useState اور useEffect کا استعمال کرتی ہے تاکہ ڈیٹا automatically 
          save ہو جائے جب بھی value تبدیل ہو۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 useLocalStorage.js</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(codeBlocks.useLocalStorage, "useLocalStorage Hook")}
            >
              {copiedCode === "useLocalStorage Hook" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.useLocalStorage}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>useState</code> میں function pass کیا گیا ہے جو initial value کے لئے localStorage سے ڈیٹا پڑھتا ہے</li>
            <li><code>useEffect</code> ہر بار value بدلنے پر localStorage کو update کرتا ہے</li>
            <li><code>JSON.parse</code> اور <code>JSON.stringify</code> کا استعمال ڈیٹا کو store/retrieve کرنے کے لئے</li>
            <li>Hook <code>[value, setValue]</code> return کرتی ہے، بالکل <code>useState</code> کی طرح</li>
          </ul>
        </div>
      </section>

      {/* Theme Context */}
      <section className="section-card">
        <h2 className="section-title">🌗 2. ThemeContext.jsx</h2>
        <p className="section-text">
          Theme Context جو useLocalStorage hook استعمال کرتا ہے تاکہ theme preference 
          ہمیشہ remember رہے، چاہے user page refresh کرے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 ThemeContext.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(codeBlocks.themeContext, "ThemeContext")}
            >
              {copiedCode === "ThemeContext" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.themeContext}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>useLocalStorage("theme", "light")</code> سے theme state persist ہوتی ہے</li>
            <li><code>toggleTheme</code> function light/dark mode کے درمیان switch کرتا ہے</li>
            <li>document.body کی styling automatically update ہوتی ہے theme بدلنے پر</li>
            <li>Context Provider تمام children کو theme state اور toggle function فراہم کرتا ہے</li>
          </ul>
        </div>
      </section>

      {/* Cart Context */}
      <section className="section-card">
        <h2 className="section-title">🛒 3. CartContext.jsx</h2>
        <p className="section-text">
          Cart Context بھی وہی useLocalStorage hook استعمال کرتا ہے، لیکن cart items 
          کے لئے۔ user کے cart کا ڈیٹا ہمیشہ remember رہے گا۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 CartContext.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(codeBlocks.cartContext, "CartContext")}
            >
              {copiedCode === "CartContext" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{codeBlocks.cartContext}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>useLocalStorage("cart", [])</code> سے cart items persist ہوتے ہیں</li>
            <li><code>addToCart</code> نئے item کو cart میں شامل کرتا ہے</li>
            <li><code>removeFromCart</code> specific item کو cart سے ہٹاتا ہے</li>
            <li><code>clearCart</code> پورا cart خالی کرتا ہے</li>
            <li>تمام functions automatically localStorage کو update کرتے ہیں</li>
          </ul>
        </div>
      </section>

      {/* Home Component */}
      <section className="section-card">
        <h2 className="section-title">🏠 4. Home.jsx (Usage Example)</h2>
        <p className="section-text">
          یہ component دونوں contexts استعمال کرتا ہے اور user کو theme toggle کرنے 
          اور cart میں items شامل کرنے کی سہولت دیتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Home.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(codeBlocks.homeComponent, "Home Component")}
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

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>useTheme()</code> hook سے theme state اور toggle function حاصل ہوتا ہے</li>
            <li><code>useCart()</code> hook سے cart state اور addToCart function حاصل ہوتا ہے</li>
            <li>User interface simple ہے لیکن تمام data persist رہتا ہے</li>
            <li>Refresh کے بعد بھی theme اور cart کا ڈیٹا برقرار رہے گا</li>
          </ul>
        </div>
      </section>

      {/* App Component */}
      <section className="section-card">
        <h2 className="section-title">⚛️ 5. App.jsx (Provider Setup)</h2>
        <p className="section-text">
          Main App component جہاں ہم تمام providers کو wrap کرتے ہیں تاکہ 
          پورے app میں state accessible ہو۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 App.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(codeBlocks.appComponent, "App Component")}
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
            <li><code>ThemeProvider</code> پورے app کو theme context فراہم کرتا ہے</li>
            <li><code>CartProvider</code> پورے app کو cart context فراہم کرتا ہے</li>
            <li>Providers nested ہیں، جس سے ہر component دونوں contexts استعمال کر سکتا ہے</li>
            <li>یہ structure scalable ہے - نئے contexts easily add کیے جا سکتے ہیں</li>
          </ul>
        </div>
      </section>

      {/* Expected Output */}
      <section className="section-card">
        <h2 className="section-title">✅ Expected Output</h2>
        <div className="success-box">
          <p>🎯 جب آپ app چلائیں گے تو:</p>
          <ul>
            <li>Theme Light/Dark بدلنے پر وہ Local Storage میں محفوظ ہو جائے گا</li>
            <li>Cart میں کوئی چیز Add/Remove کرنے پر وہ بھی محفوظ رہے گی</li>
            <li>Refresh کرنے پر بھی Theme اور Cart برقرار رہیں گے</li>
            <li>Browser کے DevTools میں Application tab میں localStorage دیکھ سکتے ہیں</li>
          </ul>
        </div>
      </section>

      {/* Key Learning Points */}
      <section className="section-card">
        <h2 className="section-title">🧠 کلیدی سیکھنے کے نکات</h2>
        <div className="lesson-section">
          <h4>🔹 Custom Hook کی طاقت:</h4>
          <ul>
            <li>ایک ہی Hook کو multiple contexts میں استعمال کیا جا سکتا ہے</li>
            <li>Code duplication کم ہوتا ہے</li>
            <li>Maintenance آسان ہوتی ہے</li>
          </ul>

          <h4>🔹 useState + useEffect کا استعمال:</h4>
          <ul>
            <li>useState initial value کے لئے function accept کرتا ہے</li>
            <li>useEffect side effects handle کرتا ہے (localStorage update)</li>
            <li>Dependency array ([key, value]) re-renders optimize کرتی ہے</li>
          </ul>

          <h4>🔹 Data Persistence:</h4>
          <ul>
            <li>Refresh کے بعد بھی ڈیٹا برقرار رہتا ہے</li>
            <li>User experience بہتر ہوتی ہے</li>
            <li>Complex state management آسان ہو جاتا ہے</li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="summary-card">
        <h2 className="section-title">📌 خلاصہ</h2>
        <div className="summary-content">
          <p>
            اس چیپٹر میں ہم نے سیکھا کہ کیسے ایک Custom Hook (<code>useLocalStorage</code>) 
            بنا کر اسے مختلف Contexts میں استعمال کر سکتے ہیں۔
          </p>
          <p>
            ہم نے دیکھا کہ ایک ہی Hook سے Theme اور Cart دونوں states کو persist کرنا 
            کتنا آسان ہے، جس سے code reusable اور maintainable ہو جاتا ہے۔
          </p>
          <p>
            اب آپ اسی pattern کو اپنے projects میں استعمال کر سکتے ہیں — user preferences, 
            settings, authentication state, یا کوئی بھی data جو persist رہنا چاہیے۔
          </p>
        </div>
      </section>
    </div>
  );

  // Protected Routes Explanation Section
  const ProtectedRoutesSection = () => (
    <div id="chapter-23-protected-routes">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          🔐 Protected Routes - مکمل وضاحت
        </h1>
        <p className="chapter-subtitle2">پروٹیکٹد رائوٹ کس طرح کام کرتا ہے؟</p>
      </div>

      {/* Student Question Dialog Box */}
      <section className="section-card">
        <div style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          padding: '25px',
          borderRadius: '15px',
          border: '3px solid #dc3545',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'white', marginBottom: '15px', fontSize: '24px' }}>
            ❓ طالب علم کا سوال
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px',
            borderRadius: '10px',
            fontSize: '18px',
            lineHeight: '1.8'
          }}>
            {protectedRoutesCodeBlocks.question}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: 'white', fontSize: '22px', marginBottom: '10px' }}>
            👏 بہت اچھا سوال!
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            یہی وہ جگہ ہے جہاں طلبہ اکثر confuse ہو جاتے ہیں — 
            چلیں بالکل سادہ اور سمجھنے والی زبان میں "Protected Route" کا مطلب اور کام سمجھ لیتے ہیں:
          </p>
        </div>
      </section>

      {/* Protected Route Explanation */}
      <section className="section-card">
        <h2 className="section-title">🔐 *Protected Route کیا ہوتا ہے؟*</h2>
        <p className="section-text">
          React Router میں Protected Route وہ ہوتا ہے جو صرف لاگ ان شدہ یوزر کے لیے accessible ہوتا ہے۔
          یعنی اگر کوئی user لاگ ان نہیں ہے تو وہ اس route پر نہیں جا سکتا۔
          ایسے میں ہم اسے login page پر redirect کر دیتے ہیں۔
        </p>

        <div className="info-box">
          <h4>💡 تصور سے سمجھیں:</h4>
          <p>فرض کریں آپ کے پاس ایپ میں تین pages ہیں:</p>
          <ul>
            <li><strong>/</strong> → Home Page</li>
            <li><strong>/login</strong> → Login Page</li>
            <li><strong>/dashboard</strong> → Dashboard Page</li>
          </ul>
          <p>
            اب Dashboard Page صرف لاگ ان یوزر دیکھ سکتا ہے۔
            اگر کوئی شخص براہِ راست /dashboard پر جائے —
            تو React اسے روک کر Login Page پر بھیج دے گا۔
          </p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px', marginTop: '15px' }}>
            یہی ہوتا ہے Protected Route۔ 🔐
          </p>
        </div>
      </section>

      {/* Step-by-Step Implementation */}
      <section className="section-card">
        <h2 className="section-title">⚙️ Step-by-Step Example</h2>
        
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">🧩 Fake Login System (useState سے)</h3>
            <p className="section-text">
              فرض کریں Signup system ابھی نہیں ہے۔
              ہم dummy login بنا لیتے ہیں — صرف سمجھنے کے لیے۔
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">📂 Folder Structure</h3>
            <div className="english-code" style={{ background: '#2d3748', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
              <code>
{`src/
 ├── pages/
 │     ├── Login.jsx
 │     ├── Dashboard.jsx
 │     └── Home.jsx
 ├── ProtectedRoute.jsx
 ├── App.jsx
 └── main.jsx`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Login Component */}
      <section className="section-card">
        <h2 className="section-title">🧱 2. Login.jsx</h2>
        <p className="section-text">
          یہ component user سے نام لے کر localStorage میں login status save کرتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Login.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(protectedRoutesCodeBlocks.loginComponent, "Login Component")}
            >
              {copiedCode === "Login Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{protectedRoutesCodeBlocks.loginComponent}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>useState</code> user name کو track کرتا ہے</li>
            <li><code>useNavigate</code> page navigation کے لیے</li>
            <li>Form submit پر <code>localStorage.setItem("isLoggedIn", "true")</code></li>
            <li>کامیاب login پر <code>navigate("/dashboard")</code></li>
          </ul>
        </div>
      </section>

      {/* Dashboard Component */}
      <section className="section-card">
        <h2 className="section-title">📊 3. Dashboard.jsx</h2>
        <p className="section-text">
          یہ وہ protected page ہے جو صرف لاگ ان users دیکھ سکتے ہیں۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Dashboard.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(protectedRoutesCodeBlocks.dashboardComponent, "Dashboard Component")}
            >
              {copiedCode === "Dashboard Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{protectedRoutesCodeBlocks.dashboardComponent}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Home Component */}
      <section className="section-card">
        <h2 className="section-title">🏠 4. Home.jsx</h2>
        <p className="section-text">
          Public page جو ہر کوئی دیکھ سکتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 Home.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(protectedRoutesCodeBlocks.homeComponentProtected, "Home Component")}
            >
              {copiedCode === "Home Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{protectedRoutesCodeBlocks.homeComponentProtected}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ProtectedRoute Component */}
      <section className="section-card">
        <h2 className="section-title">🧰 5. ProtectedRoute.jsx</h2>
        <p className="section-text">
          یہ وہ component ہے جو actual protection provide کرتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 ProtectedRoute.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(protectedRoutesCodeBlocks.protectedRoute, "ProtectedRoute Component")}
            >
              {copiedCode === "ProtectedRoute Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{protectedRoutesCodeBlocks.protectedRoute}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>localStorage.getItem("isLoggedIn")</code> سے login status چیک کرتا ہے</li>
            <li>اگر لاگ ان نہیں: <code>&lt;Navigate to="/login" replace /&gt;</code></li>
            <li>اگر لاگ ان ہے: <code>children</code> return کرتا ہے (اصل page)</li>
            <li><code>replace</code> prop browser history میں current entry replace کرتا ہے</li>
          </ul>
        </div>
      </section>

      {/* App Component */}
      <section className="section-card">
        <h2 className="section-title">⚛️ 6. App.jsx</h2>
        <p className="section-text">
          Main app component جہاں routing setup ہوتا ہے۔
        </p>

        <div className="code-section">
          <div className="code-header">
            <h3>📄 App.jsx</h3>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(protectedRoutesCodeBlocks.appComponentProtected, "App Component")}
            >
              {copiedCode === "App Component" ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{protectedRoutesCodeBlocks.appComponentProtected}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>🧠 وضاحت:</h4>
          <ul>
            <li><code>BrowserRouter</code> routing enable کرتا ہے</li>
            <li><code>Routes</code> اور <code>Route</code> pages define کرتے ہیں</li>
            <li><code>/dashboard</code> route <code>ProtectedRoute</code> میں wrapped ہے</li>
            <li>جب کوئی /dashboard پر جاتا ہے، ProtectedRoute چیک کرے گا کہ user لاگ ان ہے یا نہیں</li>
          </ul>
        </div>
      </section>

      {/* Result Summary */}
      <section className="section-card">
        <h2 className="section-title">🎯 نتیجہ:</h2>
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/dashboard</code> directly کھولنا</td>
                <td>🚫 Login Page پر Redirect</td>
              </tr>
              <tr>
                <td>Login کے بعد</td>
                <td>✅ Dashboard open</td>
              </tr>
              <tr>
                <td>Refresh کرنے پر</td>
                <td>🔁 Login محفوظ کیونکہ LocalStorage میں رکھا گیا ہے</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Summary */}
      <section className="summary-card">
        <h2 className="section-title">✅ Summary</h2>
        <div className="summary-content">
          <p><strong>Protected Route = Guarded Page</strong></p>
          <p><strong>Login</strong> → <code>localStorage.setItem("isLoggedIn", "true")</code></p>
          <p><strong>Logout</strong> → <code>localStorage.removeItem("isLoggedIn")</code></p>
          <p><strong>ProtectedRoute Component</strong> → Redirect کرتا ہے اگر Login نہ ہو</p>
        </div>
      </section>
    </div>
  );

  return (
    <div className="chapter-container urdu-text">
      <div className="content-wrapper">
        <NavigationSidebar />
        
        <div className="main-content">
          {activeSection === "sync-states" && <SyncMultipleStatesSection />}
          {activeSection === "protected-routes" && <ProtectedRoutesSection />}
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

export default Chapter23;