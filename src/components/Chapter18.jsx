// Chapter18.jsx
import React, { useState } from "react";
import "../App.css";

function Chapter18() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
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
}

/* 📱 Responsive for small devices */
@media (max-width: 430px), (max-width: 390px), (max-width: 375px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }

  .navbar ul {
    flex-direction: column;
    gap: 10px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .page {
    padding: 10px;
  }
}`;

  return (
    <div className="card urdu-text">
      <h2># *Chapter 18 — React Router (Single Page Application in Action)*</h2>
      
      <div className="lesson-section">
        <h3>موضوع: 💻 *Laptop Store SPA (React Router Demo)*</h3>
        <h4>زبان: آسان اردو + خوبصورت مثالیں + کوڈ کے ساتھ وضاحت</h4>
        <hr className="styled-hr" />
        
        <h4>## ⚙ *React Router کا مقصد*</h4>
        <p>
          React Router ہمیں *Single Page App (SPA)* میں
          مختلف صفحات جیسے *Home, **About, **Products, **Contact*
          الگ الگ دکھانے کی سہولت دیتا ہے —
          بغیر پورا صفحہ دوبارہ لوڈ کیے۔
        </p>

        <hr className="styled-hr" />

        <h4>## 🧩 *Step 1: React Router انسٹال کریں*</h4>
        <p>پروجیکٹ کی روٹ ڈائریکٹری میں یہ کمانڈ چلائیں:</p>
        <div className="english-code">
          <code>npm install react-router-dom</code>
        </div>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard("npm install react-router-dom", "Install Command")}
        >
          {copiedCode === "Install Command" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <hr className="styled-hr" />

        <h4>## 🗂 *Step 2: فولڈر اسٹرکچر*</h4>
        <div className="english-code">
          <code>{`src/
 ┣ components/
 ┃ ┗ Navbar.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ About.jsx
 ┃ ┣ Products.jsx
 ┃ ┗ Contact.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx`}</code>
        </div>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(`src/
 ┣ components/
 ┃ ┗ Navbar.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ About.jsx
 ┃ ┣ Products.jsx
 ┃ ┗ Contact.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx`, "Folder Structure")}
        >
          {copiedCode === "Folder Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
        </button>

        <hr className="styled-hr" />

        <h4>## 💻 *main.jsx — Router setup*</h4>
        <p><strong>📁 src/main.jsx</strong></p>
        <pre className="english-code">
          <code>{mainJsxCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
          >
            {copiedCode === "main.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## 🧭 *Navbar.jsx — نیویگیشن بار*</h4>
        <p><strong>📁 src/components/Navbar.jsx</strong></p>
        <pre className="english-code">
          <code>{navbarCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(navbarCode, "Navbar.jsx")}
          >
            {copiedCode === "Navbar.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## 🏠 *Home.jsx*</h4>
        <p><strong>📁 src/pages/Home.jsx</strong></p>
        <pre className="english-code">
          <code>{homeCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(homeCode, "Home.jsx")}
          >
            {copiedCode === "Home.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## ℹ *About.jsx*</h4>
        <p><strong>📁 src/pages/About.jsx</strong></p>
        <pre className="english-code">
          <code>{aboutCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(aboutCode, "About.jsx")}
          >
            {copiedCode === "About.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## 🛍 *Products.jsx*</h4>
        <p><strong>📁 src/pages/Products.jsx</strong></p>
        <pre className="english-code">
          <code>{productsCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(productsCode, "Products.jsx")}
          >
            {copiedCode === "Products.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## ☎ *Contact.jsx*</h4>
        <p><strong>📁 src/pages/Contact.jsx</strong></p>
        <pre className="english-code">
          <code>{contactCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(contactCode, "Contact.jsx")}
          >
            {copiedCode === "Contact.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## ⚛ *App.jsx — Router Setup*</h4>
        <p><strong>📁 src/App.jsx</strong></p>
        <pre className="english-code">
          <code>{appCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(appCode, "App.jsx")}
          >
            {copiedCode === "App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## 🎨 *App.css — خوبصورت اسٹائل اور Responsive Design*</h4>
        <p><strong>📁 src/App.css</strong></p>
        <pre className="css-code">
          <code>{cssCode}</code>
        </pre>
        <div className="code-scroll-notice-parent">
          <div className="code-scroll-notice">Please scroll → </div>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(cssCode, "CSS Styles")}
          >
            {copiedCode === "CSS Styles" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>

        <hr className="styled-hr" />

        <h4>## 🧠 *خلاصہ (Summary Box)*</h4>
        <div className="info-box">
          <blockquote>
            🔹 React Router ہمیں ایک ہی صفحے پر مختلف *views* دکھانے دیتا ہے۔<br/>
            🔹 پورا صفحہ دوبارہ لوڈ نہیں ہوتا، صرف کمپوننٹ بدلتا ہے۔<br/>
            🔹 ایپ تیز، smooth، اور modern بنتی ہے۔<br/>
            🔹 جیسے ہمارا "Laptop Store" — جہاں Home، About، Products، Contact سب ایک ہی ایپ میں ہیں۔
          </blockquote>
        </div>

        <hr className="styled-hr" />

        <h4>## 📦 *React میں main.jsx کا کردار*</h4>
        <p>
          main.jsx React ایپ کا *داخلہ دروازہ (Entry Point)* ہوتا ہے۔
          یہ وہ جگہ ہے جہاں:
        </p>
        <ol>
          <li>*App.jsx* کو DOM (یعنی HTML فائل کے اندر root element) میں لگایا جاتا ہے،</li>
          <li>اور بعض اوقات یہاں *wrappers* (جیسے BrowserRouter, Context Provider, وغیرہ) بھی شامل کیے جاتے ہیں۔</li>
        </ol>

        <hr className="styled-hr" />

        <h4>## ⚛ *⿡ React Router استعمال کرتے وقت*</h4>
        <p>
          جب آپ React Router استعمال کرتے ہیں،
          تو عام طور پر **BrowserRouter** کو *App.jsx* کے اندر رکھنا یا
          *main.jsx* میں لپیٹنا — دونوں ممکن ہیں۔
        </p>
        <p>آپ نے دیکھا تھا کہ میں نے App.jsx میں یہ شامل کیا تھا 👇</p>
        <div className="english-code">
          <code>{`<Router>
  <Navbar />
  <Routes>...</Routes>
</Router>`}</code>
        </div>
        <p>یہ بالکل درست طریقہ ہے۔</p>
        <p>لیکن ہم چاہیں تو main.jsx میں بھی BrowserRouter لپیٹ سکتے ہیں، جیسے 👇</p>
        <div className="english-code">
          <code>{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`}</code>
        </div>
        <div className="success-box">
          <p>🟢 مطلب:<br/>
          BrowserRouter آپ چاہیں App.jsx میں رکھیں یا main.jsx میں، دونوں درست ہیں۔<br/>
          فرق صرف *ساختی (structural)* ہے، نتیجہ ایک ہی۔</p>
        </div>

        <hr className="styled-hr" />

        <h4>## 🌐 *⿢ useContext (Context API) استعمال کرتے وقت*</h4>
        <p>
          جب آپ *Context API* بناتے ہیں —
          یعنی آپ نے کوئی Context بنایا، مثال کے طور پر:
        </p>
        <div className="english-code">
          <code>{`// ThemeContext.jsx
import { createContext } from "react";
export const ThemeContext = createContext();`}</code>
        </div>
        <p>تو اسے *پوری ایپ میں دستیاب* کرنے کے لیے آپ کو Provider سے App کو لپیٹنا پڑتا ہے۔</p>
        <p>یہ *main.jsx* میں کیا جاتا ہے 👇</p>
        <div className="english-code">
          <code>{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);`}</code>
        </div>
        <div className="success-box">
          <p>🟢 مطلب:<br/>
          Router یا Context دونوں "wrapper components" ہیں —<br/>
          جو پوری App کے باہر لپیٹے جاتے ہیں تاکہ اندر کے ہر component کو access مل سکے۔</p>
        </div>

        <hr className="styled-hr" />

        <h4>## ✨ *📘 Summary Box — Chapter 18: React Router & main.jsx Concepts*</h4>
        <table className="file-table">
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

        <hr className="styled-hr" />

        <h4>اب تک میں نے جتنے بھی چیپٹرز (1 سے 15 تک) آپ کے لیے بنائے ہیں ان میں **main.jsx کا کوڈ شامل نہیں کیا گیا** تھا۔</h4>

        <hr className="styled-hr" />

        <h4>## 💡 وجہ یہ ہے:</h4>
        <p>
          شروع کے تمام چیپٹرز میں ہم نے *React کے بنیادی concepts* سکھائے تھے —
          مثلاً:
        </p>
        <ul>
          <li>Functional Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
          <li>useReducer</li>
          <li>Router وغیرہ</li>
        </ul>
        <p>
          یہ سب سمجھانے کے لیے ہم نے **صرف App.jsx** اور متعلقہ components استعمال کیے
          تاکہ طلبہ کو React کے "core concepts" آسانی سے سمجھ آ سکیں،
          بغیر شروع میں فائل اسٹرکچر سے الجھے۔
        </p>

        <hr className="styled-hr" />

        <h4>## ⚙ لیکن حقیقت میں:</h4>
        <p>
          ہر React project میں ایک **main.jsx** لازمی ہوتا ہے
          جو *پوری ایپ کا "Root" یا "Entry Point"* ہوتا ہے۔
        </p>
        <p>
          یہاں ReactDOM App کو *index.html* کے اندر موجود &lt;div id="root"&gt;&lt;/div&gt;
          میں attach کرتا ہے۔
        </p>

        <hr className="styled-hr" />

        <h4>## 🧩 مثال: main.jsx (اصل شکل میں)</h4>
        <div className="english-code">
          <code>{`// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}</code>
        </div>
        <div className="success-box">
          <p>🟢 یہ React کی بنیادی "entry file" ہے<br/>
          جو ہر Vite + React project میں خود بخود بن جاتی ہے۔</p>
        </div>

        <hr className="styled-hr" />

        <h4>## 🔄 کب کب main.jsx میں تبدیلی آتی ہے؟</h4>
        <table className="file-table">
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

        <hr className="styled-hr" />

        <h4>## ✨ مختصر خلاصہ (Summary Box)</h4>
        <table className="file-table">
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

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter18;