// Chapter20.jsx
import React, { useState, useRef } from "react";
import "../App.css";

function Chapter20() {
  const [copyStatus, setCopyStatus] = useState("");
  const [activeSection, setActiveSection] = useState("concept");

  // Create refs for each section
  const conceptRef = useRef(null);
  const cartContextRef = useRef(null);
  const mainJsxRef = useRef(null);
  const navbarRef = useRef(null);
  const productsRef = useRef(null);
  const cssRef = useRef(null);
  const themeExampleRef = useRef(null);
  const summaryRef = useRef(null);

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`${title} کوپي ہو گیا!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const handleSidebarClick = (section) => {
    setActiveSection(section);
    
    // Scroll to the corresponding section
    switch(section) {
      case "concept":
        conceptRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "cartContext":
        cartContextRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "mainJsx":
        mainJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "navbar":
        navbarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "products":
        productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "css":
        cssRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "themeExample":
        themeExampleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "summary":
        summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        break;
    }
  };

  // Code strings
  const cartContextCode = `// src/context/CartContext.jsx
import React, { createContext, useState } from "react";

// ⿡ Context بنائیں
export const CartContext = createContext();

// ⿢ Provider بنائیں
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // ⿣ Cart میں اضافہ کرنے کا فنکشن
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // ⿤ Context کے ذریعے سب کو فراہم کریں
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};`;

  const mainJsxCode = `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);`;

  const navbarCode = `// components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // ✅ Import

export default function Navbar() {
  const { cartCount } = useContext(CartContext); // ✅ کارٹ کا ڈیٹا حاصل کریں

  return (
    <nav className="navbar">
      <h2>💻 Laptop Store</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <span className="cart-badge">🛒 {cartCount}</span>
      </div>
    </nav>
  );
};`;

  const productsCode = `// pages/Products.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "HP Pavilion", price: "Rs. 145,000", desc: "Core i5, 8GB RAM" },
  { id: 2, name: "Dell Inspiron", price: "Rs. 165,000", desc: "Core i7, 16GB RAM" },
  { id: 3, name: "Lenovo IdeaPad", price: "Rs. 130,000", desc: "Ryzen 5, 8GB RAM" },
  { id: 4, name: "MacBook Air", price: "Rs. 285,000", desc: "M2 Chip, 8GB RAM" },
];

export default function Products() {
  const { addToCart } = useContext(CartContext); // ✅ Context سے فنکشن حاصل

  return (
    <div className="page">
      <h1>🛍 ہمارے لیپ ٹاپس</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src="https://via.placeholder.com/200x130" alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <strong>{item.price}</strong>
            <br />
            <button onClick={addToCart} className="add-to-cart-btn">🛒 Add to Cart</button>
            <Link to={\`/products/\${item.id}\`} className="details-btn">
              تفصیل دیکھیں
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};`;

  const cssCode = `.cart-badge {
  background: #00b09b;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  margin-left: 10px;
  font-weight: bold;
}

.product-card button {
  background: #0d6efd;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 8px;
  width: 100%;
}

.product-card button:hover {
  background: #0b5ed7;
}

.add-to-cart-btn {
  background: linear-gradient(to right, #00b09b, #96c93d) !important;
}

.add-to-cart-btn:hover {
  background: linear-gradient(to right, #019981, #7db035) !important;
}

.details-btn {
  display: inline-block;
  background: linear-gradient(to right, #007bff, #00c6ff);
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 8px;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
}

.details-btn:hover {
  background: linear-gradient(to right, #0056b3, #0096c7);
}`;

  // Theme Example Code
  const themeContextCode = `// context/ThemeContext.jsx
import React, { createContext, useState } from "react";

// 1️⃣ Context بنائیں
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 2️⃣ Light اور Dark Mode کے لیے state
  const [theme, setTheme] = useState("light");

  // 3️⃣ Switch کرنے والا فنکشن
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 4️⃣ Context Provider سے تمام ایپ میں شیئر کریں
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-mode" : "dark-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}`;

  const themeMainJsxCode = `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Import کریں

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);`;

  const themeNavbarCode = `// components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>💻 Laptop Store</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

      {/* 🌗 Theme Switch Button */}
      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}`;

  const themeCssCode = `/* styles.css */

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  transition: all 0.4s ease;
}

.light-mode {
  background-color: #f8f9fa;
  color: #222;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #f8f9fa;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: inherit;
  align-items: center;
}

.links a {
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
}

.theme-btn {
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  background: #ddd;
  transition: 0.3s;
}

.theme-btn:hover {
  background: #aaa;
}`;

  // Chapter20-specific mobile sidebar fix
  const chapter20Styles = `
    /* Chapter20-specific mobile sidebar fix */
    @media (max-width: 430px) {
      .chapter20-sidebar .example-list {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      
      .chapter20-sidebar .example-list li {
        display: block !important;
        width: 100% !important;
      }
    }
    
    @media (max-width: 375px) {
      .chapter20-sidebar .example-list {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <div className="chapter-container urdu-text">
      {/* Chapter20-specific styles */}
      <style>{chapter20Styles}</style>

      <div className="chapter-header">
        <h1 className="chapter-title2">
          🧩 Chapter 20 — Context API + useContext (Cart System)
        </h1>
        <p className="chapter-subtitle2">
          یعنی "Add to Cart" بٹن کے ساتھ Live Count؟ 🛒
        </p>
      </div>

      <div className="content-wrapper">
        {/* Updated sidebar with chapter20-specific class */}
        <div className="sidebar chapter20-sidebar">
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
                className={`sidebar-btn ${activeSection === "cartContext" ? "active" : ""}`}
                onClick={() => handleSidebarClick("cartContext")}
              >
                📁 CartContext.jsx
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
                className={`sidebar-btn ${activeSection === "navbar" ? "active" : ""}`}
                onClick={() => handleSidebarClick("navbar")}
              >
                🛍️ Navbar.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeSection === "products" ? "active" : ""}`}
                onClick={() => handleSidebarClick("products")}
              >
                💻 Products.jsx
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
                className={`sidebar-btn ${activeSection === "themeExample" ? "active" : ""}`}
                onClick={() => handleSidebarClick("themeExample")}
              >
                🌗 Theme Example
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
              <p>مضمون: جب ڈیٹا کئی کمپوننٹس میں درکار ہو، تو Context API سے سب کو access دیا جاتا ہے۔</p>
              
              <div className="info-box">
                <h4>فرض کریں ہماری Laptop Store ایپ میں:</h4>
                <ul>
                  <li>Products Page پر "🛒 Add to Cart" بٹن ہے</li>
                  <li>Navbar پر "🛍 Cart Count" دکھانا ہے</li>
                </ul>
              </div>

              <div className="info-box">
                <h4>مسئلہ:</h4>
                <p>Products اور Navbar الگ کمپوننٹس ہیں 😕</p>
                <p>اگر ہم props سے ڈیٹا بھیجیں گے، تو ہر سطح پر props دینا پڑے گا (جسے props drilling کہتے ہیں)۔</p>
              </div>

              <div className="success-box">
                <h4>👉 اس مسئلے کا حل ہے Context API</h4>
                <p>Context API ڈیٹا کو props کے بغیر تمام کمپوننٹس تک پہنچاتا ہے</p>
              </div>
            </div>
          </div>

          {/* CartContext.jsx Section */}
          <div ref={cartContextRef} className="section-card">
            <h2 className="section-title">🧠 Step 1: Context بنائیں</h2>
            <div className="section-text">
              <p>ہم ایک نئی فائل بنائیں گے: 📁 src/context/CartContext.jsx</p>
            </div>
            <div className="code-block-container">
              <div className="code-header">
                <span>CartContext.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(cartContextCode, "CartContext.jsx")}
                >
                  {copyStatus.includes("CartContext.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{cartContextCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 وضاحت:</h4>
              <ul>
                <li><strong>⿡ createContext()</strong> - نیا Context بناتا ہے</li>
                <li><strong>⿢ CartProvider</strong> - پوری ایپ کو Context فراہم کرتا ہے</li>
                <li><strong>⿣ addToCart()</strong> - Cart count بڑھانے کا فنکشن</li>
                <li><strong>⿤ Provider</strong> - تمام child components کو ڈیٹا فراہم کرتا ہے</li>
              </ul>
            </div>
          </div>

          {/* main.jsx Section */}
          <div ref={mainJsxRef} className="section-card">
            <h2 className="section-title">⚙️ Step 2: main.jsx اپڈیٹ کریں</h2>
            <div className="section-text">
              <p>ہم اپنی پوری ایپ کو CartProvider میں لپیٹ دیں گے تاکہ تمام کمپوننٹس کو کارٹ ڈیٹا مل سکے۔</p>
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
          </div>

          {/* Navbar.jsx Section */}
          <div ref={navbarRef} className="section-card">
            <h2 className="section-title">🛍️ Step 3: Navbar.jsx اپڈیٹ کریں</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>Navbar.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(navbarCode, "Navbar.jsx")}
                >
                  {copyStatus.includes("Navbar.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{navbarCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 کلیدی نکات:</h4>
              <ul>
                <li><strong>useContext(CartContext)</strong> - Context سے ڈیٹا حاصل کرتا ہے</li>
                <li><strong>cartCount</strong> - Live cart count Navbar میں دکھاتا ہے</li>
                <li>جب بھی cartCount بدلے گا، Navbar automatically update ہو جائے گا</li>
              </ul>
            </div>
          </div>

          {/* Products.jsx Section */}
          <div ref={productsRef} className="section-card">
            <h2 className="section-title">💻 Step 4: Products.jsx میں "Add to Cart" بٹن</h2>
            <div className="code-block-container">
              <div className="code-header">
                <span>Products.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(productsCode, "Products.jsx")}
                >
                  {copyStatus.includes("Products.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{productsCode}</code>
                </pre>
              </div>
            </div>
            <div className="info-box">
              <h4>🔹 کام کا طریقہ:</h4>
              <ul>
                <li>ہر product card میں "Add to Cart" بٹن ہے</li>
                <li>بٹن پر کلک کرنے پر <strong>addToCart()</strong> فنکشن چلتا ہے</li>
                <li>یہ فنکشن cartCount کو +1 کرتا ہے</li>
                <li>Navbar میں cartCount automatically update ہو جاتا ہے</li>
              </ul>
            </div>
          </div>

          {/* CSS Section */}
          <div ref={cssRef} className="section-card">
            <h2 className="section-title">🎨 Step 5: App.css میں خوبصورت Cart Style</h2>
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

          {/* Theme Example Section - Added exactly as you specified */}
          <div ref={themeExampleRef} className="section-card">
            <h2 className="section-title">🌗 Example 2: Global Theme Switch (Light/Dark Mode via Context API)</h2>
            
            <div className="section-text">
              <p>یہ Chapter 20 — Global Theme Switch (Light/Dark Mode via Context API)</p>
              <p>آپ کی Laptop Store ایپ کے اندر Context API کا دوسرا عملی (practical) استعمال دکھاتا ہے۔</p>
              <p>طلبہ کو سمجھ آ جائے گی کہ Context صرف data کے لیے نہیں بلکہ global UI state (جیسے theme) کے لیے بھی استعمال ہو سکتا ہے۔</p>
            </div>

            <div className="section-text">
              <h3>🌗 چیپٹر 20 — Global Theme Switch (Light/Dark Mode using Context API)</h3>
              <h3>🧠 Step 1: ThemeContext بنائیں</h3>
              <p>👉 ایک نیا فولڈر بنائیں: src/context/ThemeContext.jsx</p>
            </div>

            <div className="code-block-container">
              <div className="code-header">
                <span>ThemeContext.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(themeContextCode, "ThemeContext.jsx")}
                >
                  {copyStatus.includes("ThemeContext.jsx")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{themeContextCode}</code>
                </pre>
              </div>
            </div>

            <div className="section-text">
              <h3>⚙️ Step 2: main.jsx میں ThemeProvider شامل کریں</h3>
            </div>

            <div className="code-block-container">
              <div className="code-header">
                <span>main.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(themeMainJsxCode, "main.jsx (Theme)")}
                >
                  {copyStatus.includes("main.jsx (Theme)")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{themeMainJsxCode}</code>
                </pre>
              </div>
            </div>

            <div className="section-text">
              <h3>🧭 Step 3: Navbar میں Theme Switch Button شامل کریں</h3>
            </div>

            <div className="code-block-container">
              <div className="code-header">
                <span>Navbar.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(themeNavbarCode, "Navbar.jsx (Theme)")}
                >
                  {copyStatus.includes("Navbar.jsx (Theme)")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{themeNavbarCode}</code>
                </pre>
              </div>
            </div>

            <div className="section-text">
              <h3>🎨 Step 4: Light اور Dark Mode کے CSS بنائیں</h3>
              <p>(آپ اپنے main CSS میں شامل کر سکتے ہیں)</p>
            </div>

            <div className="code-block-container">
              <div className="code-header">
                <span>styles.css</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(themeCssCode, "Theme CSS")}
                >
                  {copyStatus.includes("Theme CSS")
                    ? "کاپی ہوگیا ✅"
                    : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="css-code">
                  <code>{themeCssCode}</code>
                </pre>
              </div>
            </div>

            <div className="section-text">
              <h3>💡 Step 5: Test the App</h3>
              <p>اب جب آپ Theme Switch بٹن پر کلک کریں گے تو:</p>
              <ul>
                <li>پورا UI Light ↔ Dark موڈ میں بدل جائے گا۔</li>
                <li>Context API تمام components میں ایک ہی state maintain کرے گی۔</li>
              </ul>
            </div>

            <div className="info-box">
              <h4>📘 Summary Box</h4>
              <table className="file-table">
                <thead>
                  <tr>
                    <th>نکتہ</th>
                    <th>وضاحت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Context API</strong></td>
                    <td>Global state رکھنے کے لیے (Theme, User Data, Cart وغیرہ)۔</td>
                  </tr>
                  <tr>
                    <td><strong>ThemeProvider</strong></td>
                    <td>پوری ایپ کو Theme state دیتا ہے۔</td>
                  </tr>
                  <tr>
                    <td><strong>toggleTheme()</strong></td>
                    <td>Light/Dark mode کے درمیان سوئچ کرتا ہے۔</td>
                  </tr>
                  <tr>
                    <td><strong>Navbar Button</strong></td>
                    <td>Context کے ذریعے global UI کنٹرول دکھاتا ہے۔</td>
                  </tr>
                  <tr>
                    <td><strong>CSS classes</strong></td>
                    <td>Light اور Dark کے الگ الگ رنگ فراہم کرتی ہیں۔</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Real Life Applications */}
          <div className="section-card">
            <h2 className="section-title">💡 ریئل لائف میں Context API کہاں کام آتا ہے؟</h2>
            <div className="methods-grid">
              <div className="method-card">
                <h3>🔄 Theme Switcher</h3>
                <p>Light / Dark Mode کے لیے</p>
              </div>
              <div className="method-card">
                <h3>🌍 Language Change</h3>
                <p>اردو / English زبان بدلنے کے لیے</p>
              </div>
              <div className="method-card">
                <h3>🛒 Shopping Cart</h3>
                <p>ہمارے جیسے cart system کے لیے</p>
              </div>
              <div className="method-card">
                <h3>🔐 Login System</h3>
                <p>User Info ہر جگہ درکار ہو</p>
              </div>
              <div className="method-card">
                <h3>⚙ Settings</h3>
                <p>جو پوری ایپ میں مشترک ہوں</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div ref={summaryRef} className="section-card">
            <h2 className="section-title">📦 Summary Box — Chapter 20</h2>
            <table className="file-table">
              <thead>
                <tr>
                  <th>🔹 فیچر</th>
                  <th>🔍 وضاحت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Context API</strong></td>
                  <td>ڈیٹا کو props کے بغیر تمام کمپوننٹس تک پہنچاتا ہے</td>
                </tr>
                <tr>
                  <td><strong>useContext()</strong></td>
                  <td>Context کے اندر موجود ڈیٹا حاصل کرنے کے لیے</td>
                </tr>
                <tr>
                  <td><strong>CartProvider</strong></td>
                  <td>پوری ایپ کو کارٹ سسٹم کے اندر لپیٹنے والا کمپوننٹ</td>
                </tr>
                <tr>
                  <td><strong>Add to Cart Button</strong></td>
                  <td>Cart count میں ایک کا اضافہ</td>
                </tr>
                <tr>
                  <td><strong>Navbar Live Count</strong></td>
                  <td>Context سے آتا ہے، Live اپڈیٹ ہوتا ہے</td>
                </tr>
                <tr>
                  <td><strong>ThemeProvider</strong></td>
                  <td>پوری ایپ کو Theme state دیتا ہے</td>
                </tr>
                <tr>
                  <td><strong>toggleTheme()</strong></td>
                  <td>Light/Dark mode کے درمیان سوئچ کرتا ہے</td>
                </tr>
                <tr>
                  <td><strong>Navbar Button</strong></td>
                  <td>Context کے ذریعے global UI کنٹرول دکھاتا ہے</td>
                </tr>
                <tr>
                  <td><strong>createContext()</strong></td>
                  <td>نیا Context بنانے کے لیے استعمال ہوتا ہے</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box" style={{marginTop: '20px'}}>
              <h4>🔹 Context API کے فوائد:</h4>
              <ul>
                <li><strong>Props Drilling سے چھٹکارا</strong> - ڈیٹا براہ راست ہر کمپوننٹ کو ملتا ہے</li>
                <li><strong>Centralized State Management</strong> - ایک جگہ سے تمام ڈیٹا کا انتظام</li>
                <li><strong>Reusability</strong> - Context کو کسی بھی کمپوننٹ میں استعمال کر سکتے ہیں</li>
                <li><strong>Live Updates</strong> - جب ڈیٹا بدلے، تمام کمپوننٹس automatically update ہوں</li>
              </ul>
            </div>

            <div className="success-box" style={{marginTop: '20px'}}>
              <h4>🎉 نتیجہ:</h4>
              <p>اب آپ کی Laptop Store ایپ میں:</p>
              <ul>
                <li>Products page پر "Add to Cart" بٹن کام کر رہا ہے</li>
                <li>Navbar پر live cart count دکھ رہا ہے</li>
                <li>Theme Switch button کے ساتھ Light/Dark mode کام کر رہا ہے</li>
                <li>جب بھی آپ کسی product کو cart میں شامل کریں گے، count automatically update ہو جائے گا</li>
                <li>سب کچھ بغیر props drilling کے ہو رہا ہے! 🚀</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {copyStatus && <div className="copy-notification">✅ {copyStatus}</div>}
    </div>
  );
}

export default Chapter20;