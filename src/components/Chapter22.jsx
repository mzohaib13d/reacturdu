import React, { useState, useRef, useEffect, useContext } from "react";

// Contexts for this chapter only
const ThemeContext = React.createContext();
const CartContext = React.createContext();

// Theme Provider Component
function ThemeProvider({ children }) {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Cart Provider Component
function CartProvider({ children }) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: Date.now() }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Demo Products Data
const demoProducts = [
  {
    id: 1,
    name: "ری ایکٹ بُک",
    price: "₨ 1200",
    description: "ری ایکٹ سیکھنے کے لیے بہترین کتاب",
    image: "📚"
  },
  {
    id: 2,
    name: "جاوا سکرپٹ کورس",
    price: "₨ 800",
    description: "جاوا سکرپٹ کی مکمل گائیڈ",
    image: "📘"
  },
  {
    id: 3,
    name: "لپ ٹاپ اسٹینڈ",
    price: "₨ 1500",
    description: "ارگونومک لپ ٹاپ اسٹینڈ",
    image: "💻"
  },
  {
    id: 4,
    name: "ہیڈ فونز",
    price: "₨ 2500",
    description: "نوائس کینسلنگ ہیڈ فونز",
    image: "🎧"
  }
];

// Theme Toggle Component
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button className="pulse-button" onClick={toggleTheme}>
      {theme === "light" ? "🌙 ڈارک موڈ" : "☀️ لائٹ موڈ"}
    </button>
  );
}

// Shopping Cart Demo Component
function ShoppingCartDemo() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="shopping-cart-demo">
      <div className="demo-header">
        <h3>🛒 شاپنگ کارٹ ڈیمو</h3>
        <p>محصولات شامل کریں اور دیکھیں کہ کارٹ ڈیٹا localStorage میں کیسے محفوظ ہوتا ہے</p>
      </div>

      <div className="demo-container">
        <div className="demo-products-section">
          <h4>📦 محصولات</h4>
          <div className="demo-products-grid">
            {demoProducts.map(product => (
              <div key={product.id} className="demo-product-card">
                <div style={{fontSize: '3rem', textAlign: 'center'}}>{product.image}</div>
                <div className="demo-product-info">
                  <h5>{product.name}</h5>
                  <p className="demo-product-description">{product.description}</p>
                  <p className="demo-product-price">{product.price}</p>
                  <button 
                    className="demo-add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    🛒 کارٹ میں شامل کریں
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-cart-section">
          <div className="demo-cart-header">
            <h4>🛒 آپ کی کارٹ</h4>
            {cart.length > 0 && (
              <button className="demo-clear-cart-btn" onClick={clearCart}>
                🧹 صاف کریں
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="demo-empty-cart">
              <p>📭 آپ کی کارٹ خالی ہے</p>
              <p>کوئی بھی محصول شامل کریں!</p>
            </div>
          ) : (
            <div className="demo-cart-items">
              {cart.map(item => (
                <div key={item.id} className="demo-cart-item">
                  <div style={{fontSize: '2rem'}}>{item.image}</div>
                  <div className="demo-item-details">
                    <h6>{item.name}</h6>
                    <p>{item.price}</p>
                  </div>
                  <button 
                    className="demo-remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="ہٹائیں"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <div className="demo-cart-summary">
              <div className="demo-total-section">
                <h5>کل: ₨ {cart.length * 1000}</h5>
                <button className="demo-checkout-btn">
                  💳 آرڈر دیں
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Live Demo Wrapper Component - یہ سب کو ایک ساتھ wrap کرے گا
function LiveDemoWrapper() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div>
          <div className="demo-section">
            <div className="demo-card">
              <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <h3>🎨 Theme Toggle</h3>
                <p>موضوع کو تبدیل کریں اور صفحہ ریفریش کریں - موضوع برقرار رہے گا!</p>
                <ThemeToggle />
              </div>
            </div>
          </div>

          <ShoppingCartDemo />

          <div className="section-text mt-20">
            <div className="success-box">
              <p><strong>✅ ٹیسٹ کریں:</strong> محصولات کارٹ میں شامل کریں، پھر صفحہ ریفریش کریں۔ آپ دیکھیں گے کہ کارٹ کا ڈیٹا محفوظ رہتا ہے!</p>
            </div>
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

// Main Chapter 22 Component
export default function Chapter22() {
  const [copyStatus, setCopyStatus] = useState("");
  const [activeFile, setActiveFile] = useState("concept");

  // Create refs for each section
  const conceptRef = useRef(null);
  const themeContextRef = useRef(null);
  const cartContextRef = useRef(null);
  const mainJsxRef = useRef(null);
  const cartPageRef = useRef(null);
  const cssRef = useRef(null);
  const liveDemoRef = useRef(null);
  const summaryRef = useRef(null);

  // Chapter22-specific mobile sidebar fix
  const chapter22Styles = `
    /* Chapter22-specific mobile sidebar fix */
    @media (max-width: 430px) {
      .chapter22-sidebar .example-list {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      
      .chapter22-sidebar .example-list li {
        display: block !important;
        width: 100% !important;
      }
    }
    
    @media (max-width: 375px) {
      .chapter22-sidebar .example-list {
        grid-template-columns: 1fr !important;
      }
    }

    /* Theme styles */
    body.light {
      background: #fdfdfd;
      color: #222;
    }

    body.dark {
      background: #1a1a1a;
      color: #ffffff;
    }

    body.dark .chapter-container {
      background: #1a1a1a;
    }

    body.dark .section-card {
      background: #2d2d2d;
      border-color: #444;
    }

    body.dark .urdu-text {
      color: #ffffff;
    }

    body.dark .section-title {
      color: #ffffff;
    }

    body.dark .section-text {
      color: #e0e0e0;
    }

    body.dark .info-box {
      background: #3a3a3a;
      border-color: #555;
    }

    body.dark .success-box {
      background: #2d4a2d;
      border-color: #4a7a4a;
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
      case "concept":
        conceptRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "themeContext":
        themeContextRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "cartContext":
        cartContextRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "mainJsx":
        mainJsxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "cartPage":
        cartPageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "css":
        cssRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "liveDemo":
        liveDemoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "summary":
        summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        break;
    }
  };

  // Code examples
  const themeContextCode = `// context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // ✅ Step 1: localStorage سے Theme پڑھیں
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  // ✅ Step 2: جب بھی theme بدلے، اسے localStorage میں محفوظ کریں
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}`;

  const cartContextCode = `// context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // ✅ Step 1: localStorage سے cart پڑھیں
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  // ✅ Step 2: ہر بار جب cart بدلے، localStorage اپڈیٹ کریں
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}`;

  const mainJsxCode = `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);`;

  const cartPageCode = `// pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="page">
      <h1>🛒 آپ کی شاپنگ کارٹ</h1>

      {cart.length === 0 ? (
        <p>آپ کی کارٹ خالی ہے 😅</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>❌ ہٹائیں</button>
            </div>
          ))}
          <hr />
          <button onClick={clearCart}>🧹 کارٹ خالی کریں</button>
        </>
      )}
    </div>
  );
}`;

  const cssCode = `.cart-item {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
}

.cart-item button {
  background-color: crimson;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: darkred;
}

hr {
  border: none;
  border-top: 2px dashed #999;
  margin: 20px 0;
}`;

  return (
    <div className="chapter-container urdu-text">
      {/* Chapter22-specific styles */}
      <style>{chapter22Styles}</style>

      {/* ✅ درست pattern کے مطابق header - Chapter19 کی طرح */}
      <div className="chapter-header">
        <h1 className="chapter-title2">
          💾 Chapter 22 — Local Storage کے ذریعے Persistent State
        </h1>
        <p className="chapter-subtitle2">
          Theme اور Cart ڈیٹا کو localStorage میں محفوظ کریں - Refresh کے بعد بھی برقرار رہے
        </p>
      </div>

      {/* Preserved Paragraph */}
      <div className="section-card">
        <div className="urdu-text">
          <p>
            <strong>Chapter 22 — Saving Cart Data & Theme in Local Storage (Persistent State)</strong>
            <br />
            طلبہ کو سکھائے گا کہ React میں state صرف memory میں نہیں بلکہ Browser میں بھی محفوظ کی جا سکتی ہے۔
            یعنی Page Refresh کے بعد بھی Theme, Cart, یا Login state برقرار رہے 💾
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        {/* ✅ Updated sidebar with chapter22-specific class اور درست buttons */}
        <div className="sidebar chapter22-sidebar">
          <h3>حصے</h3>
          <ul className="example-list">
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "concept" ? "active" : ""}`}
                onClick={() => handleSidebarClick("concept")}
              >
                بنیادی تصور
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "themeContext" ? "active" : ""}`}
                onClick={() => handleSidebarClick("themeContext")}
              >
                ThemeContext
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "cartContext" ? "active" : ""}`}
                onClick={() => handleSidebarClick("cartContext")}
              >
                CartContext
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "mainJsx" ? "active" : ""}`}
                onClick={() => handleSidebarClick("mainJsx")}
              >
                main.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "cartPage" ? "active" : ""}`}
                onClick={() => handleSidebarClick("cartPage")}
              >
                Cart.jsx
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "css" ? "active" : ""}`}
                onClick={() => handleSidebarClick("css")}
              >
                CSS اسٹائلز
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "liveDemo" ? "active" : ""}`}
                onClick={() => handleSidebarClick("liveDemo")}
              >
                Live Demo
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeFile === "summary" ? "active" : ""}`}
                onClick={() => handleSidebarClick("summary")}
              >
                خلاصہ
              </button>
            </li>
          </ul>
        </div>

        <div className="main-content">
          {/* Introduction Section */}
          <div ref={conceptRef} className="section-card">
            <h2 className="section-title">🧠 بنیادی تصور</h2>
            <div className="section-text">
              <p>
                جب ہم React ایپ بند کرتے ہیں یا Refresh کرتے ہیں تو state غائب ہو جاتی ہے۔
                لیکن اگر ہم اس state کو localStorage میں رکھ لیں،
                تو Browser اس ڈیٹا کو یاد رکھتا ہے — جب تک user خود نہ مٹا دے۔
              </p>
              
              <div className="info-box">
                <p><strong>📍 اہم نکتہ:</strong> localStorage browser کی ایک خصوصیت ہے جو ڈیٹا کو key-value pairs میں محفوظ کرتی ہے۔</p>
              </div>

              <div className="info-box">
                <h4>localStorage کے اہم فوائد:</h4>
                <ul>
                  <li>✅ ڈیٹا page refresh کے بعد بھی محفوظ رہتا ہے</li>
                  <li>✅ Browser بند کرنے کے بعد بھی ڈیٹا برقرار رہتا ہے</li>
                  <li>✅ کوئی server-side code کی ضرورت نہیں</li>
                  <li>✅ استعمال میں آسان اور تیز</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Theme Context Section */}
          <div ref={themeContextRef} className="section-card">
            <h2 className="section-title">🎨 ThemeContext میں Local Storage شامل کریں</h2>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>context/ThemeContext.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(themeContextCode, "ThemeContext.jsx")}
                >
                  {copyStatus.includes("ThemeContext.jsx") ? "✅ کاپی ہوگیا" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code"><code>{themeContextCode}</code></pre>
              </div>
            </div>

            <div className="section-text">
              <p><strong>🟢 فائدہ:</strong> اب جب بھی user theme بدلے گا — light/dark — وہ Refresh کے بعد بھی محفوظ رہے گی۔</p>
            </div>
          </div>

          {/* Cart Context Section */}
          <div ref={cartContextRef} className="section-card">
            <h2 className="section-title">🛒 CartContext میں Local Storage شامل کریں</h2>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>context/CartContext.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(cartContextCode, "CartContext.jsx")}
                >
                  {copyStatus.includes("CartContext.jsx") ? "✅ کاپی ہوگیا" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code"><code>{cartContextCode}</code></pre>
              </div>
            </div>

            <div className="section-text">
              <p><strong>🟢 فائدہ:</strong> کارٹ کا ڈیٹا page refresh کے بعد بھی محفوظ رہے گا۔</p>
            </div>
          </div>

          {/* Main.jsx Section */}
          <div ref={mainJsxRef} className="section-card">
            <h2 className="section-title">⚙️ main.jsx میں Providers شامل کریں</h2>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>main.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
                >
                  {copyStatus.includes("main.jsx") ? "✅ کاپی ہوگیا" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code"><code>{mainJsxCode}</code></pre>
              </div>
            </div>
          </div>

          {/* Cart Page Section */}
          <div ref={cartPageRef} className="section-card">
            <h2 className="section-title">💻 App.jsx میں Cart دکھانے کی مثال</h2>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>pages/Cart.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(cartPageCode, "Cart.jsx")}
                >
                  {copyStatus.includes("Cart.jsx") ? "✅ کاپی ہوگیا" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code"><code>{cartPageCode}</code></pre>
              </div>
            </div>
          </div>

          {/* CSS Section */}
          <div ref={cssRef} className="section-card">
            <h2 className="section-title">🎨 خوبصورت CSS</h2>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>App.css</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(cssCode, "CSS Styles")}
                >
                  {copyStatus.includes("CSS Styles") ? "✅ کاپی ہوگیا" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="css-code"><code>{cssCode}</code></pre>
              </div>
            </div>
          </div>

          {/* Live Demo Section */}
          <div ref={liveDemoRef} className="section-card">
            <h2 className="section-title">💻 Live Demo - Theme اور Cart</h2>
            
            {/* ✅ اب صرف ایک LiveDemoWrapper استعمال کریں */}
            <LiveDemoWrapper />
          </div>

          {/* Summary Section */}
          <div ref={summaryRef} className="section-card">
            <h2 className="section-title">📘 خلاصہ</h2>
            
            <div className="summary-content">
              <div className="summary-box">
                <h3>🔹 Local Storage کے اہم تصورات</h3>
                
                <h4>💡 localStorage کیا ہے؟</h4>
                <p>Browser میں ڈیٹا محفوظ رکھتا ہے (Page Refresh کے بعد بھی)</p>
                
                <h4>🔄 JSON.stringify()</h4>
                <p>JavaScript objects کو text (string) میں بدلتا ہے تاکہ save ہو سکے</p>
                
                <h4>🔁 JSON.parse()</h4>
                <p>String کو واپس object میں بدل دیتا ہے</p>
                
                <h4>💾 Persistent State</h4>
                <p>وہ state جو refresh کے باوجود باقی رہے</p>
                
                <h4>⚡ useEffect() + localStorage</h4>
                <p>سب سے عام اور محفوظ طریقہ Persistent Data کے لیے</p>

                <code className="english-code">
                  // localStorage استعمال کرنے کا طریقہ<br/>
                  const savedData = localStorage.getItem('key');<br/>
                  localStorage.setItem('key', JSON.stringify(data));<br/>
                  localStorage.removeItem('key');<br/>
                  localStorage.clear();
                </code>
              </div>
            </div>

            <div className="summary-points">
              <div className="summary-item">
                <span className="summary-icon">✅</span>
                <span>State کو محفوظ کریں</span>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🔄</span>
                <span>Refresh کے بعد برقرار</span>
              </div>
              <div className="summary-item">
                <span className="summary-icon">💾</span>
                <span>Browser میں محفوظ</span>
              </div>
              <div className="summary-item">
                <span className="summary-icon">⚡</span>
                <span>آسان Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {copyStatus && (
        <div className="copy-notification">
          ✅ {copyStatus}
        </div>
      )}
    </div>
  );
}