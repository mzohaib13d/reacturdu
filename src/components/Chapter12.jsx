import React, { useState } from 'react';
import '../App.css';

const Chapter12 = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Theme Context Codes
  const themeContextCode = `// یہ فائل Context بنانے کے لیے ہے
import { createContext } from "react";

export const ThemeContext = createContext(null);`;

  const themeAppCode = `import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ChildComponent from "./ChildComponent";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light"); // شروع میں لائٹ موڈ

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Context کے ذریعے پورے ایپ میں theme بھیج رہے ہیں
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={\`app \${theme}\`}>
        <h1>🌸 useContext Example — Theme Switcher</h1>
        <p>
          یہ مثال دکھاتی ہے کہ Context کے ذریعے کیسے Light/Dark Mode پورے ایپ میں بانٹا جا سکتا ہے۔
        </p>
        <button onClick={toggleTheme}>موڈ بدلیں</button>

        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;`;

  const themeChildCode = `import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ChildComponent() {
  // useContext سے وہی ڈیٹا نکال لیا جو اوپر سے آیا تھا
  const { theme } = useContext(ThemeContext);

  return (
    <div className="child">
      <h2>یہ Child Component ہے</h2>
      <p>
        ابھی Theme ہے: <b>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</b>
      </p>
      <p>یہاں تک props نہیں بھیجے — Context نے خود پہنچایا!</p>
    </div>
  );
}

export default ChildComponent;`;

  const themeCssCode = `.app {
  font-family: "Noto Nastaliq Urdu", serif;
  text-align: center;
  padding: 30px;
  transition: background 0.5s, color 0.5s;
  border-radius: 15px;
  max-width: 600px;
  margin: 30px auto;
}

/* 🌞 Light Theme */
.app.light {
  background: #ffffff;
  color: #222;
}

/* 🌙 Dark Theme */
.app.dark {
  background: #1a1a1a;
  color: #f5f5f5;
}

button {
  background: #007bff;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
}

button:hover {
  background: #0056b3;
}

.child {
  margin-top: 20px;
  border-top: 2px dashed #ccc;
  padding-top: 15px;
}`;

  // Language Context Codes
  const languageContextCode = `// یہاں ہم Context بنا رہے ہیں جو زبان کی معلومات رکھے گا
import { createContext } from "react";

export const LanguageContext = createContext(null);`;

  const languageAppCode = `import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import Child from "./Child";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("urdu");

  const toggleLanguage = () => {
    setLanguage(language === "urdu" ? "english" : "urdu");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="app-container">
        <h1>🌍 useContext Example — Language Switcher</h1>
        <p>
          اس مثال میں ہم دیکھیں گے کہ Context کے ذریعے پوری ایپ کی زبان کیسے بدلی جا سکتی ہے۔
        </p>
        <button onClick={toggleLanguage}>
          {language === "urdu" ? "Switch to English" : "اردو میں بدلیں"}
        </button>

        <hr className="styled-hr" />

        <Child />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;`;

  const languageChildCode = `import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Child() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="child-box">
      {language === "urdu" ? (
        <>
          <h2>👋 خوش آمدید!</h2>
          <p>یہ صفحہ اردو زبان میں ہے۔</p>
        </>
      ) : (
        <>
          <h2>👋 Welcome!</h2>
          <p>This page is in English.</p>
        </>
      )}
    </div>
  );
}

export default Child;`;

  const languageCssCode = `body {
  margin: 0;
  font-family: "Noto Nastaliq Urdu", serif;
  direction: rtl;
  background: #f8f9fa;
  color: #222;
}

.app-container {
  max-width: 600px;
  margin: 40px auto;
  background: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

h1 {
  color: #0d6efd;
  text-align: center;
}

p {
  text-align: right;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

button {
  display: block;
  margin: 0 auto;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #0b5ed7;
}

/* درمیان کا خوبصورت لائن */
.styled-hr {
  margin: 25px 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #0d6efd, #6f42c1);
  border-radius: 10px;
}

/* چائلڈ باکس */
.child-box {
  background: #f1f3f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.child-box:hover {
  background: #e9ecef;
}

@media (max-width: 430px) {
  .app-container {
    margin: 20px;
    padding: 15px;
  }

  p {
    font-size: 1rem;
  }
}`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">🌷 چیپٹر 12 — useContext Hook (بہت آسان انداز میں)</h1>
        <p className="chapter-subtitle2">Props کے بغیر ڈیٹا کا سفر سیکھیں</p>
      </div>

      <div className="content-section">
        {/* Introduction Section */}
        <div className="lesson-section">
          <h2 className="section-title">🔹 useContext کیا ہوتا ہے؟</h2>
          <p className="urdu-text">
            جب ہم React میں ایک کمپوننٹ سے دوسرے میں ڈیٹا بھیجتے ہیں تو ہم عام طور پر props استعمال کرتے ہیں۔
          </p>
          <p className="urdu-text">
            لیکن اگر ڈیٹا بہت نیچے جا رہا ہو — یعنی:
            <br />
            <strong>App → Child → GrandChild → GreatGrandChild</strong>
          </p>
          <p className="urdu-text">
            تو ہمیں ہر لیول پر props دینا پڑتا ہے
            <br />
            اسے کہتے ہیں 👉 <strong>props drilling</strong>
            <br />
            (یعنی props کو بار بار نیچے، نیچے، نیچے دینا)
          </p>
          <p className="urdu-text">
            یہ تھوڑا جھنجھٹ والا کام ہوتا ہے 😅
          </p>
          <div className="info-box">
            <p className="urdu-text">
              <strong>ایسے وقت میں Context API آتی ہے کام!</strong>
              <br />
              یہ ایسا "خاص بکسہ" ہے جو ڈیٹا کو پورے React ایپ میں بانٹ دیتا ہے
              اور جہاں بھی آپ چاہیں، وہاں سے وہی ڈیٹا نکال سکتے ہیں — بغیر props کے ❤️
            </p>
          </div>
        </div>

        {/* Theme Context Example */}
        <div className="learning-outcomes">
          <h2 className="section-title">🌸 ایک مثال: Theme Context (Light / Dark Mode)</h2>
          <p className="urdu-text">
            ہم ایک چھوٹا پراجیکٹ بنائیں گے جس میں ایک بٹن ہوگا:
            <br />
            <strong>🔘 "Light Mode" ↔ "Dark Mode"</strong>
          </p>
          <p className="urdu-text">
            اور یہ بٹن بدلنے سے پوری ایپ کا رنگ بدل جائے گا۔
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 1: ThemeContext.js (نیا فائل)</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{themeContextCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(themeContextCode, "ThemeContext.js")}
              >
                {copiedCode === "ThemeContext.js" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <p className="urdu-text">یہ ایک "ڈبہ" ہے جو ہمارا theme (Light یا Dark) رکھے گا۔</p>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 2: App.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{themeAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(themeAppCode, "App.jsx - Theme")}
              >
                {copiedCode === "App.jsx - Theme" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 3: ChildComponent.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{themeChildCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(themeChildCode, "ChildComponent.jsx")}
              >
                {copiedCode === "ChildComponent.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 4: App.css</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="css-code">{themeCssCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(themeCssCode, "App.css - Theme")}
              >
                {copiedCode === "App.css - Theme" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>
        </div>

        {/* Language Context Example */}
        <div className="homework-section">
          <h2 className="section-title">🌼 useContext Hook (حصہ دوم) - Language Context</h2>
          <p className="urdu-text">
            <strong>🔹 ایک اور مثال: Language Context (اردو ↔ English)</strong>
          </p>
          <p className="urdu-text">
            فرض کریں آپ ایک ویب سائٹ بنا رہے ہیں —
            جہاں صارف اپنی پسند کی زبان منتخب کر سکتا ہے۔
            مثلاً "اردو" یا "English"۔
          </p>
          <p className="urdu-text">
            اب ہر صفحے پر الگ الگ props دینا جھنجھٹ ہے 😅
            <br />
            تو ہم کیا کریں گے؟
            <br />
            👉 <strong>Context بنائیں گے اور useContext سے پوری ایپ میں زبان بانٹ دیں گے!</strong>
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 1: LanguageContext.js</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{languageContextCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(languageContextCode, "LanguageContext.js")}
              >
                {copiedCode === "LanguageContext.js" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 2: App.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{languageAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(languageAppCode, "App.jsx - Language")}
              >
                {copiedCode === "App.jsx - Language" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 3: Child.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{languageChildCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(languageChildCode, "Child.jsx - Language")}
              >
                {copiedCode === "Child.jsx - Language" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 4: App.css</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="css-code">{languageCssCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(languageCssCode, "App.css - Language")}
              >
                {copiedCode === "App.css - Language" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>
        </div>

        {/* Real World Usage */}
        <div className="explanation-section">
          <h2 className="section-title">🌟 اصل زندگی میں useContext کہاں کام آتا ہے؟</h2>
          
          <div className="file-table">
            <table>
              <thead>
                <tr>
                  <th>💡 استعمال</th>
                  <th>🧩 مثال</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Theme بدلنا (Light/Dark)</td>
                  <td>پورے ایپ کا رنگ بدلنے کے لیے، جیسے Instagram یا YouTube</td>
                </tr>
                <tr>
                  <td>2. Language بدلنا (اردو/انگلش)</td>
                  <td>دو زبانوں میں سائٹ چلانا</td>
                </tr>
                <tr>
                  <td>3. User Login Info</td>
                  <td>اگر یوزر لاگ ان ہے، تو اس کا نام یا پروفائل ہر صفحے پر دکھانا</td>
                </tr>
                <tr>
                  <td>4. Shopping Cart</td>
                  <td>آن لائن شاپنگ ایپ میں — "کتنی چیزیں کارٹ میں ہیں" ہر صفحے پر دکھانا</td>
                </tr>
                <tr>
                  <td>5. Notification System</td>
                  <td>اگر کوئی نیا میسج آئے، تو ہر کمپوننٹ میں اطلاع دینا</td>
                </tr>
                <tr>
                  <td>6. Website Settings</td>
                  <td>جیسے فونٹ سائز، رنگ، یا ایپ موڈ یاد رکھنا</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-box">
            <p className="urdu-text">
              <strong>🌸 یاد رکھیں:</strong>
              <br />
              useContext تب کام آتا ہے جب ڈیٹا کو بار بار props سے آگے پیچھے بھیجنے کی ضرورت پڑے۔
              <br />
              یہ آپ کی ایپ کو صاف، سادہ اور کم کوڈ والا بناتا ہے۔
            </p>
          </div>
        </div>

        {/* Summary Box */}
        <div className="summary-box">
          <h3>📘 useContext Hook — Summary Box</h3>

          <h4>🌷 1. useContext کیا ہے؟</h4>
          <p>یہ React کا ایک Hook ہے جو ہمیں ڈیٹا کو props کے بغیر پوری ایپ میں بانٹنے دیتا ہے۔</p>

          <h4>🌼 2. Context کیا کرتا ہے؟</h4>
          <p>Context ایک "ڈبہ" ہے جو ویلیو رکھتا ہے (جیسے theme یا language)۔</p>

          <h4>💡 3. useContext کیوں؟</h4>
          <p>جب props بہت گہرائی تک جائیں تو Context سے آسانی ہوتی ہے۔</p>

          <h4>🔧 4. بنانے کا طریقہ:</h4>
          <code>{`const MyContext = createContext();
<MyContext.Provider value={value}>
  <App />
</MyContext.Provider>
const data = useContext(MyContext);`}</code>

          <h4>🧩 5. کہاں استعمال ہوتا ہے؟</h4>
          <p>✅ Theme Switcher</p>
          <p>✅ Multi-language</p>
          <p>✅ User Login</p>
          <p>✅ Shopping Cart</p>
          <p>✅ Notifications</p>

          <p><strong>🌸 یاد رکھیں:</strong> useContext = props کے بغیر ڈیٹا کا سفر 🚀</p>
        </div>

        {/* Conclusion */}
        <div className="success-box">
          <h2 className="section-title">🌻 نتیجہ:</h2>
          <p className="urdu-text">
            جب آپ بٹن دبائیں گی 👇
            <br />
            → تو Light سے Dark یا Dark سے Light ہو جائے گا
            <br />
            → اور تمام کمپوننٹس خود بخود اپڈیٹ ہوں گے
            <br />
            → بغیر کسی props کے آگے پیچھے دینے کے 🎉
          </p>
          <p className="urdu-text">
            اب ہم useContext Hook کو اتنا آسان اور دلچسپ انداز میں سمجھیں گے
            کہ ایک 14 سالہ طالبہ بھی بولے:
            <br />
            <strong>"اوہ! تو یہ اتنا آسان تھا؟ 😍"</strong>
          </p>
        </div>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Chapter12;     