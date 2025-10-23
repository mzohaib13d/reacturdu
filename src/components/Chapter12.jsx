import React, { useState } from 'react';
import '../App.css';

const Chapter12 = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // ... (all your existing themeContextCode, languageContextCode variables remain exactly the same)

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

  // ... (all your existing code remains exactly as it is)

  // NEW CONTENT STARTS HERE - User Context Example
  const userContextIntro = `useContext() ری ایکٹ (React) کا ایک جدید اور طاقتور Hook ہے جو کسی بھی Context سے ڈیٹا حاصل کرنے کے لیے استعمال ہوتا ہے،
بغیر اس کے کہ آپ کو وہ ڈیٹا ہر کمپوننٹ کے ذریعے "props" کی شکل میں نیچے بھیجنا پڑے۔

🧠 useContext() کیا ہے؟

یہ React کا ایک Built-in Hook ہے
جو آپ کو Context API کے ذریعے بنائے گئے ڈیٹا تک سیدھی رسائی دیتا ہے۔
یعنی اگر ایک Component اوپر Context مہیا کر رہا ہے تو نیچے والا Component اسے براہِ راست لے سکتا ہے۔`;

  const userContextStructure = `🗂 مکمل فائل سٹرکچر
src/
 ┣ contexts/
 ┃ ┗ UserContext.jsx
 ┣ components/
 ┃ ┣ Header.jsx
 ┃ ┗ Footer.jsx
 ┗ App.jsx`;

  const userContextCode = `// UserContext.jsx
import { createContext } from "react";

// Context بنانا
export const UserContext = createContext();`;

  const userAppCode = `// App.jsx
import React from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // ایک object جسے ہم Context کے ذریعے پاس کریں گے
  const userData = {
    name: "زوہیب فاروق",
    age: 22,
    city: "لاہور",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  return (
    // Context Provider سے ڈیٹا فراہم کرنا
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Header />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;`;

  const userHeaderCode = `// Header.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
  // Context سے ویلیو لینا
  const user = useContext(UserContext);

  return (
    <header>
      <h1>خوش آمدید {user.name}!</h1>
      <p>آپ کی عمر: {user.age} سال</p>
      <p>شہر: {user.city}</p>
    </header>
  );
}

export default Header;`;

  const userFooterCode = `// Footer.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Footer() {
  const user = useContext(UserContext);

  return (
    <footer style={{ marginTop: "30px" }}>
      <h3>مہارتیں (Skills):</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;`;

  const userOutput = `🖥 نتیجہ (Output)

جب آپ React ایپ چلائیں گے (npm run dev)، تو صفحے پر یہ دکھائی دے گا:

خوش آمدید زوہیب فاروق!
آپ کی عمر: 22 سال
شہر: لاہور

مہارتیں:
• HTML
• CSS
• JavaScript
• React`;

  // Dynamic Context Example
  const dynamicContextStructure = `🗂 React Project Structure (Complete)
my-react-app/
 ┣ src/
 ┃ ┣ components/
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┣ Profile.jsx
 ┃ ┃ ┗ EditProfile.jsx
 ┃ ┣ contexts/
 ┃ ┃ ┣ UserContext.jsx
 ┃ ┃ ┗ UserContext2.jsx
 ┃ ┣ App.jsx
 ┃ ┣ App2.jsx
 ┃ ┣ AppSwitcher.jsx
 ┃ ┣ index.css
 ┃ ┗ main.jsx
 ┣ package.json
 ┣ vite.config.js
 ┗ index.html`;

  const userContext2Code = `import { createContext } from "react";
export const UserContext2 = createContext();`;

  const dynamicAppCode = `import React, { useState } from "react";
import { UserContext2 } from "./contexts/UserContext2";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App2() {
  const [user, setUser] = useState({
    name: "زوہیب فاروق",
    city: "لاہور",
    age: 22,
    profession: "فرنٹ اینڈ ویب ڈویلپر",
    hobbies: ["کتابیں پڑھنا", "کوڈنگ کرنا", "سفر کرنا"],
  });

  return (
    <UserContext2.Provider value={{ user, setUser }}>
      <div className="container">
        <Profile />
        <EditProfile />
      </div>
    </UserContext2.Provider>
  );
}

export default App2;`;

  const profileCode = `import React, { useContext } from "react";
import { UserContext2 } from "../contexts/UserContext2";

function Profile() {
  const { user } = useContext(UserContext2);

  return (
    <div>
      <h1>📋 پروفائل کی معلومات</h1>
      <p>نام: {user.name}</p>
      <p>شہر: {user.city}</p>
      <p>عمر: {user.age} سال</p>
      <p>پیشہ: {user.profession}</p>

      <h3>مشاغل:</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;`;

  const editProfileCode = `import React, { useContext } from "react";
import { UserContext2 } from "../contexts/UserContext2";

function EditProfile() {
  const { user, setUser } = useContext(UserContext2);

  const changeCity = () => setUser({ ...user, city: "کراچی" });
  const increaseAge = () => setUser({ ...user, age: user.age + 1 });
  const changeProfession = () =>
    setUser({ ...user, profession: "فل اسٹیک ڈویلپر" });
  const addHobby = () =>
    setUser({ ...user, hobbies: [...user.hobbies, "نئی زبان سیکھنا"] });

  return (
    <div className="buttons">
      <h2>⚙️ پروفائل میں تبدیلیاں</h2>
      <button onClick={changeCity}>🏙 شہر بدلیں</button>
      <button onClick={increaseAge}>⏳ عمر بڑھائیں</button>
      <button onClick={changeProfession}>💼 پیشہ بدلیں</button>
      <button onClick={addHobby}>🎨 نیا مشغلہ شامل کریں</button>
    </div>
  );
}

export default EditProfile;`;

  const appSwitcherCode = `import React, { useState } from "react";
import App from "./App";
import App2 from "./App2";

function AppSwitcher() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="switcher">
      <h1>
        {isLive
          ? "🔵 اب ہم ریکارڈ میں Live Update شامل کر رہے ہیں"
          : "🟢 Static Context Example (صرف پڑھنے کے لیے)"}
      </h1>

      <button onClick={() => setIsLive(!isLive)}>
        {isLive ? "Static موڈ پر جائیں" : "Live موڈ پر جائیں"}
      </button>

      {isLive ? <App2 /> : <App />}
    </div>
  );
}

export default AppSwitcher;`;

  const mainJsxCode = `import React from "react";
import ReactDOM from "react-dom/client";
import AppSwitcher from "./AppSwitcher";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppSwitcher />
  </React.StrictMode>
);`;

  const dynamicCssCode = `body {
  font-family: "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  direction: rtl;
  text-align: center;
}

.container {
  background: white;
  padding: 20px;
  margin: 30px auto;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
}

h1,
h2,
h3 {
  color: #333;
}

button {
  margin: 8px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #0077cc;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #005fa3;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #eaeaea;
  margin: 5px;
  padding: 8px;
  border-radius: 6px;
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

          {/* ... (all your existing theme example code sections remain exactly the same) */}
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

          {/* ... (all your existing language example code sections remain exactly the same) */}
        </div>

        {/* NEW CONTENT: User Context Example */}
        <div className="learning-outcomes">
          <h2 className="section-title">👤 useContext Hook (حصہ سوم) - User Context Example</h2>
          
          <div className="info-box">
            <p className="urdu-text">
              {userContextIntro}
            </p>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 فائل سٹرکچر</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userContextStructure}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userContextStructure, "File Structure")}
              >
                {copiedCode === "File Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 1: UserContext.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userContextCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userContextCode, "UserContext.jsx")}
              >
                {copiedCode === "UserContext.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 2: App.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userAppCode, "App.jsx - User")}
              >
                {copiedCode === "App.jsx - User" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 3: Header.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userHeaderCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userHeaderCode, "Header.jsx")}
              >
                {copiedCode === "Header.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Step 4: Footer.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userFooterCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userFooterCode, "Footer.jsx")}
              >
                {copiedCode === "Footer.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="success-box">
            <h3>🖥 نتیجہ (Output)</h3>
            <pre className="urdu-text">{userOutput}</pre>
          </div>
        </div>

        {/* NEW CONTENT: Dynamic Context Example */}
        <div className="homework-section">
          <h2 className="section-title">🔄 useContext Hook (حصہ چہارم) - Dynamic Context Example</h2>
          
          <p className="urdu-text">
            <strong>🔹 Live Updates کے ساتھ Context</strong>
          </p>
          <p className="urdu-text">
            اب ہم ایک ایسی مثال دیکھیں گے جس میں useContext کے ذریعے ڈیٹا کو Live اپڈیٹ کیا جا سکتا ہے۔
            یہ بہت طاقتور ہے کیونکہ آپ بغیر props کے پوری ایپ میں ڈیٹا کو تبدیل کر سکتے ہیں!
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>📁 فائل سٹرکچر</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{dynamicContextStructure}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(dynamicContextStructure, "Dynamic File Structure")}
              >
                {copiedCode === "Dynamic File Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 UserContext2.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{userContext2Code}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(userContext2Code, "UserContext2.jsx")}
              >
                {copiedCode === "UserContext2.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 App2.jsx (Dynamic Example)</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{dynamicAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(dynamicAppCode, "App2.jsx")}
              >
                {copiedCode === "App2.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 Profile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{profileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(profileCode, "Profile.jsx")}
              >
                {copiedCode === "Profile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 EditProfile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{editProfileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(editProfileCode, "EditProfile.jsx")}
              >
                {copiedCode === "EditProfile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 AppSwitcher.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{appSwitcherCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(appSwitcherCode, "AppSwitcher.jsx")}
              >
                {copiedCode === "AppSwitcher.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 main.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{mainJsxCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(mainJsxCode, "main.jsx")}
              >
                {copiedCode === "main.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 index.css</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="css-code">{dynamicCssCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(dynamicCssCode, "index.css - Dynamic")}
              >
                {copiedCode === "index.css - Dynamic" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="success-box">
            <h3>🟢 ایپ چلانے کا طریقہ</h3>
            <pre className="urdu-text">{`npm install
npm run dev`}</pre>
            <p className="urdu-text">
              پھر browser میں کھولیں:
              <br />
              👉 http://localhost:5173/
            </p>
          </div>

          <div className="info-box">
            <h3>🧠 نتیجہ:</h3>
            <p className="urdu-text">
              1️⃣ پہلے Static Example چلے گا
              <br />
              2️⃣ "Live موڈ پر جائیں" دبانے سے ایپ بدل جائے گی
              <br />
              3️⃣ نیا عنوان دکھے گا:
              <br />
              <strong>"🔵 اب ہم ریکارڈ میں Live Update شامل کر رہے ہیں"</strong>
              <br />
              4️⃣ اور نیچے والے بٹن سے عمر، شہر، پیشہ، مشاغل Live اپڈیٹ ہوں گے۔
            </p>
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