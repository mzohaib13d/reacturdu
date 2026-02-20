import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Chapter18() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // تمام کوڈز
  const mainJsxCode = `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`;

  const navbarCode = `// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">💻 Laptop Store</h2>
      <ul>
        <li><Link to="/">ہوم</Link></li>
        <li><Link to="/about">ہمارے بارے میں</Link></li>
        <li><Link to="/products">پراڈکٹس</Link></li>
        <li><Link to="/contact">رابطہ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;`;

  const homeCode = `// pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="page">
      <h1>💻 خوش آمدید لیپ ٹاپ اسٹور میں!</h1>
      <p>یہاں آپ بہترین معیار کے لیپ ٹاپ خرید سکتے ہیں۔</p>
    </div>
  );
}`;

  const aboutCode = `// pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>ہمارے بارے میں</h1>
      <p>
        ہم 2010 سے لیپ ٹاپس اور کمپیوٹرز کی فروخت میں مصروف ہیں۔  
        ہمارا مقصد معیار اور اعتماد فراہم کرنا ہے۔
      </p>
    </div>
  );
}`;

  const productsCode = `// pages/Products.jsx
import React from "react";

// 👇 لیپ ٹاپس کی فہرست (8 items)
const products = [
  { 
    id: 1, 
    name: "HP Pavilion", 
    price: "Rs. 145,000", 
    desc: "Core i5, 8GB RAM, 512GB SSD", 
    img: "https://via.placeholder.com/200x150?text=HP+Pavilion" 
  },
  { 
    id: 2, 
    name: "Dell Inspiron", 
    price: "Rs. 165,000", 
    desc: "Core i7, 16GB RAM, 1TB SSD", 
    img: "https://via.placeholder.com/200x150?text=Dell+Inspiron" 
  },
  { 
    id: 3, 
    name: "Lenovo IdeaPad", 
    price: "Rs. 130,000", 
    desc: "Ryzen 5, 8GB RAM, 512GB SSD", 
    img: "https://via.placeholder.com/200x150?text=Lenovo+IdeaPad" 
  },
  { 
    id: 4, 
    name: "Apple MacBook Air", 
    price: "Rs. 285,000", 
    desc: "M2 Chip, 8GB RAM, 256GB SSD", 
    img: "https://via.placeholder.com/200x150?text=MacBook+Air" 
  },
  { 
    id: 5, 
    name: "Acer Aspire 5", 
    price: "Rs. 120,000", 
    desc: "Core i5, 8GB RAM, 256GB SSD", 
    img: "https://via.placeholder.com/200x150?text=Acer+Aspire+5" 
  },
  { 
    id: 6, 
    name: "ASUS VivoBook", 
    price: "Rs. 138,000", 
    desc: "Ryzen 7, 16GB RAM, 512GB SSD", 
    img: "https://via.placeholder.com/200x150?text=ASUS+VivoBook" 
  },
  { 
    id: 7, 
    name: "MSI Modern 14", 
    price: "Rs. 190,000", 
    desc: "Core i7, 16GB RAM, 1TB SSD", 
    img: "https://via.placeholder.com/200x150?text=MSI+Modern+14" 
  },
  { 
    id: 8, 
    name: "Samsung Galaxy Book", 
    price: "Rs. 210,000", 
    desc: "Core i7, 16GB RAM, 512GB SSD", 
    img: "https://via.placeholder.com/200x150?text=Galaxy+Book" 
  },
];

// ✅ کمپوننٹ
export default function Products() {
  return (
    <div className="page">
      <h1>🛍 ہمارے لیپ ٹاپس</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}`;

  const contactCode = `// pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="page">
      <h1>رابطہ</h1>
      <p>📞 فون: 0300-1234567</p>
      <p>📧 ای میل: info@laptopstore.pk</p>
    </div>
  );
}`;

  const appCode = `// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;`;

  const cssCode = `/* React Router کے لیے اضافی CSS */
body {
  margin: 0;
  font-family: "Noto Nastaliq Urdu", sans-serif;
  background-color: #ffffff;
  color: #212529;
  direction: rtl;
}

.navbar {
  background-color: #0d6efd;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  margin: 0;
  font-size: 1.4rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar a:hover {
  text-decoration: underline;
}

.page {
  padding: 20px;
  text-align: right;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #f8f9fa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}`;

  return (
    <div className="chapter-container">
      <motion.header
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <motion.h1
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em",
              wordSpacing: "0.3rem",
              lineHeight: "1.4",
              padding: "0 15px",
            }}
          >
            Chapter 18 — React Router (Single Page Application in Action)
          </motion.h1>
          <motion.p
            className="chapter-subtitle2"
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.95rem, 3vw, 1.4rem)",
              lineHeight: "1.8",
              opacity: 0.95,
              maxWidth: "800px",
              margin: "0 auto",
              letterSpacing: "0.005em",
              wordSpacing: "0.4rem",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              fontWeight: "400",
              padding: "0 15px",
            }}
          >
            (React App Router: Fast, Powerful, Modern) <br />
            "ری ایکٹ ایپ روٹر: تیز، طاقتور، جدید"
          </motion.p>
        </div>
      </motion.header>

      <div className="card section-card">
        <h3 className="section-title">موضوع: 💻 Laptop Store SPA (React Router Demo)</h3>
        <h4 className="chapter-subtitle">زبان: آسان اردو + خوبصورت مثالیں + کوڈ کے ساتھ وضاحت</h4>
        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚙ React Router کا مقصد</h4>
        <p className="section-text urdu-text">
          React Router ہمیں Single Page App (SPA) میں مختلف صفحات جیسے Home,
          About, Products, Contact الگ الگ دکھانے کی سہولت دیتا ہے — بغیر
          پورا صفحہ دوبارہ لوڈ کیے۔
        </p>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧩 Step 1: React Router انسٹال کریں</h4>
        <p className="section-text urdu-text">پروجیکٹ کی روٹ ڈائریکٹری میں یہ کمانڈ چلائیں:</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>npm command</span>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard("npm install react-router-dom", "Install Command")
              }
            >
              {copiedCode === "Install Command" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">npm install react-router-dom</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🗂 Step 2: فولڈر اسٹرکچر</h4>
        
        <div className="code-section">
          <div className="code-header">
            <span>Folder Structure</span>
            <button
              className="copy-btn"
              onClick={() =>
                copyToClipboard(
                  `src/\n ┣ components/\n ┃ ┗ Navbar.jsx\n ┣ pages/\n ┃ ┣ Home.jsx\n ┃ ┣ About.jsx\n ┃ ┣ Products.jsx\n ┃ ┗ Contact.jsx\n ┣ App.jsx\n ┣ App.css\n ┗ main.jsx`,
                  "Folder Structure",
                )
              }
            >
              {copiedCode === "Folder Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`src/
 ┣ components/
 ┃ ┗ Navbar.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ About.jsx
 ┃ ┣ Products.jsx
 ┃ ┗ Contact.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">💻 main.jsx — Router setup</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/main.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>main.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
            >
              {copiedCode === "main.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{mainJsxCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧭 Navbar.jsx — نیویگیشن بار</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/components/Navbar.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Navbar.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(navbarCode, "Navbar.jsx")}
            >
              {copiedCode === "Navbar.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{navbarCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🏠 Home.jsx</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/pages/Home.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Home.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(homeCode, "Home.jsx")}
            >
              {copiedCode === "Home.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{homeCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">ℹ About.jsx</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/pages/About.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>About.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(aboutCode, "About.jsx")}
            >
              {copiedCode === "About.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{aboutCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🛍 Products.jsx</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/pages/Products.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Products.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(productsCode, "Products.jsx")}
            >
              {copiedCode === "Products.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{productsCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">☎ Contact.jsx</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/pages/Contact.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Contact.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(contactCode, "Contact.jsx")}
            >
              {copiedCode === "Contact.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{contactCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚛ App.jsx — Router Setup</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/App.jsx</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>App.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(appCode, "App.jsx")}
            >
              {copiedCode === "App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{appCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🎨 App.css — خوبصورت اسٹائل اور Responsive Design</h4>
        <p className="section-text urdu-text">
          <strong>📁 src/App.css</strong>
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>App.css</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(cssCode, "CSS Styles")}
            >
              {copiedCode === "CSS Styles" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{cssCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧠 خلاصہ (Summary Box)</h4>
        <div className="info-box">
          <blockquote className="section-text urdu-text">
            🔹 React Router ہمیں ایک ہی صفحے پر مختلف views دکھانے دیتا ہے۔
            <br />
            🔹 پورا صفحہ دوبارہ لوڈ نہیں ہوتا، صرف کمپوننٹ بدلتا ہے۔
            <br />
            🔹 ایپ تیز، smooth، اور modern بنتی ہے۔
            <br />
            🔹 جیسے ہمارا "Laptop Store" — جہاں Home، About، Products، Contact
            سب ایک ہی ایپ میں ہیں۔
          </blockquote>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📦 React میں main.jsx کا کردار</h4>
        <p className="section-text urdu-text">
          main.jsx React ایپ کا داخلہ دروازہ (Entry Point) ہوتا ہے۔ یہ وہ جگہ
          ہے جہاں:
        </p>
        <ol className="section-text urdu-text">
          <li>
            App.jsx کو DOM (یعنی HTML فائل کے اندر root element) میں لگایا
            جاتا ہے،
          </li>
          <li>
            اور بعض اوقات یہاں wrappers (جیسے BrowserRouter, Context Provider,
            وغیرہ) بھی شامل کیے جاتے ہیں۔
          </li>
        </ol>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚛ React Router استعمال کرتے وقت</h4>
        <p className="section-text urdu-text">
          جب آپ React Router استعمال کرتے ہیں، تو عام طور پر BrowserRouter
          کو App.jsx کے اندر رکھنا یا main.jsx میں لپیٹنا — دونوں ممکن ہیں۔
        </p>
        <p className="section-text urdu-text">آپ نے دیکھا تھا کہ میں نے App.jsx میں یہ شامل کیا تھا 👇</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Router in App.jsx</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`<Router>
  <Navbar />
  <Routes>...</Routes>
</Router>`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        
        <p className="section-text urdu-text">یہ بالکل درست طریقہ ہے۔</p>
        <p className="section-text urdu-text">
          لیکن ہم چاہیں تو main.jsx میں بھی BrowserRouter لپیٹ سکتے ہیں، جیسے 👇
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Router in main.jsx</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        
        <div className="success-box">
          <p className="section-text urdu-text">
            🟢 مطلب:
            <br />
            BrowserRouter آپ چاہیں App.jsx میں رکھیں یا main.jsx میں، دونوں درست
            ہیں۔
            <br />
            فرق صرف ساختی (structural) ہے، نتیجہ ایک ہی۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🌐 useContext (Context API) استعمال کرتے وقت</h4>
        <p className="section-text urdu-text">
          جب آپ Context API بناتے ہیں — یعنی آپ نے کوئی Context بنایا، مثال کے
          طور پر:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>ThemeContext.jsx</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`// ThemeContext.jsx
import { createContext } from "react";
export const ThemeContext = createContext();`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        
        <p className="section-text urdu-text">
          تو اسے پوری ایپ میں دستیاب کرنے کے لیے آپ کو Provider سے App کو
          لپیٹنا پڑتا ہے۔
        </p>
        <p className="section-text urdu-text">یہ main.jsx میں کیا جاتا ہے 👇</p>
        
        <div className="code-section">
          <div className="code-header">
            <span>main.jsx with Context</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        
        <div className="success-box">
          <p className="section-text urdu-text">
            🟢 مطلب:
            <br />
            Router یا Context دونوں "wrapper components" ہیں —<br />
            جو پوری App کے باہر لپیٹے جاتے ہیں تاکہ اندر کے ہر component کو
            access مل سکے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">✨ Summary Box — Chapter 18: React Router & main.jsx Concepts</h4>
        
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>🔹 موضوع</th>
                <th>🔍 وضاحت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Single Page Application (SPA)</strong></td>
                <td>صرف ایک HTML صفحہ، لیکن React مختلف components دکھا کر pages کا احساس دیتا ہے۔</td>
              </tr>
              <tr>
                <td><strong>React Router</strong></td>
                <td>URL کے مطابق component بدلتا ہے، بغیر صفحہ reload کیے۔</td>
              </tr>
              <tr>
                <td><strong>BrowserRouter</strong></td>
                <td>React کو بتاتا ہے کہ ہم SPA routing استعمال کر رہے ہیں۔</td>
              </tr>
              <tr>
                <td><strong>App.jsx میں Router</strong></td>
                <td>چھوٹی ایپس کے لیے بہتر، جلدی setup۔</td>
              </tr>
              <tr>
                <td><strong>main.jsx میں Router</strong></td>
                <td>بڑی ایپس کے لیے بہتر، structure صاف رہتا ہے۔</td>
              </tr>
              <tr>
                <td><strong>Context API</strong></td>
                <td>props drilling سے بچنے کے لیے global data system۔</td>
              </tr>
              <tr>
                <td><strong>Context Provider</strong></td>
                <td>پوری App کو wrap کر کے تمام components میں data پہنچاتا ہے۔</td>
              </tr>
              <tr>
                <td><strong>main.jsx کا کام</strong></td>
                <td>App کو render کرنا اور اسے BrowserRouter یا Context Provider میں لپیٹنا۔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">اب تک میں نے جتنے بھی چیپٹرز (1 سے 15 تک) آپ کے لیے بنائے ہیں ان میں main.jsx کا کوڈ شامل نہیں کیا گیا تھا۔</h4>

        <h4 className="chapter-subtitle">💡 وجہ یہ ہے:</h4>
        <p className="section-text urdu-text">
          شروع کے تمام چیپٹرز میں ہم نے React کے بنیادی concepts سکھائے تھے —
          مثلاً:
        </p>
        <ul className="section-text urdu-text">
          <li>Functional Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
          <li>useReducer</li>
          <li>Router وغیرہ</li>
        </ul>
        <p className="section-text urdu-text">
          یہ سب سمجھانے کے لیے ہم نے صرف App.jsx اور متعلقہ components
          استعمال کیے تاکہ طلبہ کو React کے "core concepts" آسانی سے سمجھ آ
          سکیں، بغیر شروع میں فائل اسٹرکچر سے الجھے۔
        </p>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚙ لیکن حقیقت میں:</h4>
        <p className="section-text urdu-text">
          ہر React project میں ایک main.jsx لازمی ہوتا ہے جو پوری ایپ کا
          "Root" یا "Entry Point" ہوتا ہے۔
        </p>
        <p className="section-text urdu-text">
          یہاں ReactDOM App کو index.html کے اندر موجود &lt;div
          id="root"&gt;&lt;/div&gt; میں attach کرتا ہے۔
        </p>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🧩 مثال: main.jsx (اصل شکل میں)</h4>
        
        <div className="code-section">
          <div className="code-header">
            <span>main.jsx default</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        
        <div className="success-box">
          <p className="section-text urdu-text">
            🟢 یہ React کی بنیادی "entry file" ہے
            <br />
            جو ہر Vite + React project میں خود بخود بن جاتی ہے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🔄 کب کب main.jsx میں تبدیلی آتی ہے؟</h4>
        
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>موقع</th>
                <th>کیا تبدیلی کرنی ہوتی ہے</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>React Router استعمال کرتے وقت</strong></td>
                <td>&lt;BrowserRouter&gt; کے اندر &lt;App /&gt; کو لپیٹنا ہوتا ہے</td>
              </tr>
              <tr>
                <td><strong>Context API استعمال کرتے وقت</strong></td>
                <td>&lt;App /&gt; کو &lt;MyContext.Provider&gt; کے اندر لپیٹنا ہوتا ہے</td>
              </tr>
              <tr>
                <td><strong>Redux / ThemeProvider وغیرہ</strong></td>
                <td>ان سب providers کو بھی main.jsx میں wrap کیا جاتا ہے</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">✨ مختصر خلاصہ (Summary Box)</h4>
        
        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>🔹 پوائنٹ</th>
                <th>🔍 وضاحت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>main.jsx</strong></td>
                <td>React ایپ کا آغاز، App کو render کرنے کی جگہ</td>
              </tr>
              <tr>
                <td><strong>کہاں ملے گی؟</strong></td>
                <td>src/ فولڈر میں (Vite خود بناتا ہے)</td>
              </tr>
              <tr>
                <td><strong>کام</strong></td>
                <td>&lt;App /&gt; کو HTML کے root div میں لگانا</td>
              </tr>
              <tr>
                <td><strong>کب اپڈیٹ ہوتی ہے؟</strong></td>
                <td>جب Router یا Context جیسے wrappers شامل کیے جائیں</td>
              </tr>
              <tr>
                <td><strong>اگر کچھ خاص نہ ہو؟</strong></td>
                <td>default حالت میں کوئی تبدیلی کی ضرورت نہیں</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} کوڈ کاپی ہوگیا!
        </div>
      )}
    </div>
  );
}

export default Chapter18;