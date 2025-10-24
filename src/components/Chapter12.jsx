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

  // NEW USER CONTEXT CODES - Appended exactly as provided
  const userContextIntro = `اب میں ایک مکمل، فائل در فائل React مثال تیار کرتا ہوں جس میں:
• ایک Context فائل بنائی جائے گی
• App.jsx میں وہ Context provide کیا جائے گا
• دو Components (Header.jsx اور Footer.jsx) اس Context کے ڈیٹا کو useContext() سے استعمال کریں گے
• Context میں ایک object پاس کیا جائے گا (جس میں مختلف entries ہوں گی)`;

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
  const dynamicContextStructure = `🗂 نئی مثال کا فائل سٹرکچر
src/
 ┣ contexts/
 ┃ ┗ UserContext2.jsx
 ┣ components/
 ┃ ┣ Profile.jsx
 ┃ ┗ EditProfile.jsx
 ┗ App2.jsx`;

  const userContext2Code = `// UserContext2.jsx
import { createContext } from "react";

// نیا Context بنانا
export const UserContext2 = createContext();`;

  const dynamicAppCode = `// App2.jsx
import React, { useState } from "react";
import { UserContext2 } from "./contexts/UserContext2";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App2() {
  // useState کے ذریعے ڈیٹا بنانا
  const [user, setUser] = useState({
    name: "زوہیب فاروق",
    city: "لاہور",
    age: 22,
  });

  return (
    <UserContext2.Provider value={{ user, setUser }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Profile />
        <EditProfile />
      </div>
    </UserContext2.Provider>
  );
}

export default App2;`;

  const profileCode = `// Profile.jsx
import React, { useContext } from "react";
import { UserContext2 } from "../contexts/UserContext2";

function Profile() {
  const { user } = useContext(UserContext2);

  return (
    <div>
      <h1>پروفائل کی معلومات</h1>
      <p>نام: {user.name}</p>
      <p>شہر: {user.city}</p>
      <p>عمر: {user.age} سال</p>
    </div>
  );
}

export default Profile;`;

  const editProfileCode = `// EditProfile.jsx
import React, { useContext } from "react";
import { UserContext2 } from "../contexts/UserContext2";

function EditProfile() {
  const { user, setUser } = useContext(UserContext2);

  const changeCity = () => {
    setUser({ ...user, city: "کراچی" });
  };

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>پروفائل میں تبدیلیاں</h2>
      <button onClick={changeCity}>شہر بدلیں</button>
      <button onClick={increaseAge} style={{ marginLeft: "10px" }}>
        عمر بڑھائیں
      </button>
    </div>
  );
}

export default EditProfile;`;

  const dynamicOutput = `🖥 نتیجہ (Output)
ایپ شروع کریں (npm run dev):
پروفائل کی معلومات
نام: زوہیب فاروق
شہر: لاہور
عمر: 22 سال

[شہر بدلیں] [عمر بڑھائیں]
• جب آپ "شہر بدلیں" پر کلک کریں گے → شہر کراچی ہو جائے گا
• جب آپ "عمر بڑھائیں" پر کلک کریں گے → عمر 23، 24، 25... ہوتی جائے گی
یہ سب کچھ Context کے ذریعے تمام Components میں ریئل ٹائم اپڈیٹ ہوگا۔`;

  // Updated Static Context with larger object
  const updatedStaticIntro = `بہت خوب 👏
اب ہم پہلی static مثال (یعنی وہ جو صرف Context سے ڈیٹا دکھاتی ہے) کو مزید بہتر کریں گے —
اس میں ہم userData کا object بڑا کریں گے اور دو نئی انٹریز شامل کریں گے۔
یہ دونوں انٹریز ہوں گی:
• profession (پیشہ)
• hobbies (مشاغل – یعنی hobbies کی ایک array)`;

  const updatedUserAppCode = `// App.jsx
import React from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // بڑا object جس میں مزید انٹریز شامل کی گئیں
  const userData = {
    name: "زوہیب فاروق",
    age: 22,
    city: "لاہور",
    profession: "فرنٹ اینڈ ویب ڈویلپر",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    hobbies: ["کتابیں پڑھنا", "کوڈنگ کرنا", "گانے سننا", "سفر کرنا"]
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Header />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;`;

  const updatedHeaderCode = `// Header.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <h1>خوش آمدید {user.name}!</h1>
      <p>آپ کی عمر: {user.age} سال</p>
      <p>شہر: {user.city}</p>
      <p>پیشہ: {user.profession}</p>
    </header>
  );
}

export default Header;`;

  const updatedFooterCode = `// Footer.jsx
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

      <h3 style={{ marginTop: "20px" }}>مشاغل (Hobbies):</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;`;

  const updatedStaticOutput = `🖥 نتیجہ (Output)
خوش آمدید زوہیب فاروق!
آپ کی عمر: 22 سال
شہر: لاہور
پیشہ: فرنٹ اینڈ ویب ڈویلپر

مہارتیں:
• HTML  
• CSS  
• JavaScript  
• React  

مشاغل:
• کتابیں پڑھنا  
• کوڈنگ کرنا  
• گانے سننا  
• سفر کرنا`;

  // Updated Dynamic Context with larger object
  const updatedDynamicAppCode = `// App2.jsx
import React, { useState } from "react";
import { UserContext2 } from "./contexts/UserContext2";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App2() {
  // useState کے ساتھ بڑا object
  const [user, setUser] = useState({
    name: "زوہیب فاروق",
    city: "لاہور",
    age: 22,
    profession: "فرنٹ اینڈ ویب ڈویلپر",
    hobbies: ["کتابیں پڑھنا", "کوڈنگ کرنا", "سفر کرنا"],
  });

  return (
    <UserContext2.Provider value={{ user, setUser }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Profile />
        <EditProfile />
      </div>
    </UserContext2.Provider>
  );
}

export default App2;`;

  const updatedProfileCode = `// Profile.jsx
import React, { useContext } from "react";
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

      <h3 style={{ marginTop: "20px" }}>مشاغل (Hobbies):</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;`;

  const updatedEditProfileCode = `// EditProfile.jsx
import React, { useContext } from "react";
import { UserContext2 } from "../contexts/UserContext2";

function EditProfile() {
  const { user, setUser } = useContext(UserContext2);

  const changeCity = () => {
    setUser({ ...user, city: "کراچی" });
  };

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const changeProfession = () => {
    setUser({ ...user, profession: "فل اسٹیک ڈویلپر" });
  };

  const addHobby = () => {
    setUser({
      ...user,
      hobbies: [...user.hobbies, "نئی زبان سیکھنا"],
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>⚙️ پروفائل میں تبدیلیاں</h2>
      <button onClick={changeCity}>🏙 شہر بدلیں</button>
      <button onClick={increaseAge} style={{ marginLeft: "10px" }}>
        ⏳ عمر بڑھائیں
      </button>
      <button onClick={changeProfession} style={{ marginLeft: "10px" }}>
        💼 پیشہ بدلیں
      </button>
      <button onClick={addHobby} style={{ marginLeft: "10px" }}>
        🎨 نیا مشغلہ شامل کریں
      </button>
    </div>
  );
}

export default EditProfile;`;

  const updatedDynamicOutput = `🖥 نتیجہ (Output)
شروع میں:
📋 پروفائل کی معلومات
نام: زوہیب فاروق
شہر: لاہور
عمر: 22 سال
پیشہ: فرنٹ اینڈ ویب ڈویلپر

مشاغل:
• کتابیں پڑھنا
• کوڈنگ کرنا
• سفر کرنا
بٹن دبانے پر:
• 🏙 شہر بدلیں → شہر "کراچی" ہو جائے گا
• ⏳ عمر بڑھائیں → عمر 23، 24، 25 ...
• 💼 پیشہ بدلیں → پیشہ "فل اسٹیک ڈویلپر" ہو جائے گا
• 🎨 نیا مشغلہ شامل کریں → "نئی زبان سیکھنا" آخری میں شامل ہو جائے گا`;

  // Complete Project Structure
  const completeStructure = `🗂 React Project Structure (Complete)
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

  const finalUserContextCode = `// UserContext.jsx
import { createContext } from "react";
export const UserContext = createContext();`;

  const finalStaticAppCode = `// App.jsx
import React from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const userData = {
    name: "زوہیب فاروق",
    age: 22,
    city: "لاہور",
    profession: "فرنٹ اینڈ ویب ڈویلپر",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    hobbies: ["کتابیں پڑھنا", "کوڈنگ کرنا", "گانے سننا", "سفر کرنا"],
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="container">
        <Header />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;`;

  const finalHeaderCode = `// Header.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <h1>خوش آمدید {user.name}!</h1>
      <p>عمر: {user.age} سال</p>
      <p>شہر: {user.city}</p>
      <p>پیشہ: {user.profession}</p>
    </header>
  );
}

export default Header;`;

  const finalFooterCode = `// Footer.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Footer() {
  const user = useContext(UserContext);

  return (
    <footer>
      <h3>مہارتیں (Skills):</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>مشاغل (Hobbies):</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;`;

  const finalUserContext2Code = `// UserContext2.jsx
import { createContext } from "react";
export const UserContext2 = createContext();`;

  const finalDynamicAppCode = `// App2.jsx
import React, { useState } from "react";
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

  const finalProfileCode = `// Profile.jsx
import React, { useContext } from "react";
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

  const finalEditProfileCode = `// EditProfile.jsx
import React, { useContext } from "react";
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

  const appSwitcherCode = `// AppSwitcher.jsx
import React, { useState } from "react";
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

  const mainJsxCode = `// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppSwitcher from "./AppSwitcher";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppSwitcher />
  </React.StrictMode>
);`;

  const indexCssCode = `/* index.css */
body {
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

  const finalInstructions = `🟢 ایپ چلانے کا طریقہ
npm install
npm run dev

پھر browser میں کھولیں:
👉 http://localhost:5173/

🧠 نتیجہ:
1️⃣ پہلے Static Example چلے گا
2️⃣ "Live موڈ پر جائیں" دبانے سے ایپ بدل جائے گی
3️⃣ نیا عنوان دکھے گا:
🔵 اب ہم ریکارڈ میں Live Update شامل کر رہے ہیں
اور نیچے والے بٹن سے عمر، شہر، پیشہ، مشاغل Live اپڈیٹ ہوں گے۔`;

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

        {/* NEW CONTENT: User Context Example - Part 1 */}
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
                onClick={() => copyToClipboard(userContextStructure, "User Context Structure")}
              >
                {copiedCode === "User Context Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/contexts/UserContext.jsx</span>
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
              <span>📁 src/App.jsx</span>
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
              <span>📁 src/components/Header.jsx</span>
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
              <span>📁 src/components/Footer.jsx</span>
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

        {/* NEW CONTENT: Dynamic Context Example - Part 2 */}
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
                onClick={() => copyToClipboard(dynamicContextStructure, "Dynamic Context Structure")}
              >
                {copiedCode === "Dynamic Context Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/contexts/UserContext2.jsx</span>
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
              <span>📁 src/App2.jsx</span>
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
              <span>📁 src/components/Profile.jsx</span>
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
              <span>📁 src/components/EditProfile.jsx</span>
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

          <div className="success-box">
            <h3>🖥 نتیجہ (Output)</h3>
            <pre className="urdu-text">{dynamicOutput}</pre>
          </div>
        </div>

        {/* NEW CONTENT: Updated Static Context with Larger Object */}
        <div className="learning-outcomes">
          <h2 className="section-title">📈 useContext Hook (حصہ پنجم) - بڑا Object والی مثال</h2>
          
          <div className="info-box">
            <p className="urdu-text">
              {updatedStaticIntro}
            </p>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/App.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedUserAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedUserAppCode, "Updated App.jsx")}
              >
                {copiedCode === "Updated App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/components/Header.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedHeaderCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedHeaderCode, "Updated Header.jsx")}
              >
                {copiedCode === "Updated Header.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/components/Footer.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedFooterCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedFooterCode, "Updated Footer.jsx")}
              >
                {copiedCode === "Updated Footer.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="success-box">
            <h3>🖥 نتیجہ (Output)</h3>
            <pre className="urdu-text">{updatedStaticOutput}</pre>
          </div>
        </div>

        {/* NEW CONTENT: Updated Dynamic Context with Larger Object */}
        <div className="homework-section">
          <h2 className="section-title">🎯 useContext Hook (حصہ ششم) - بڑا Object والی Dynamic مثال</h2>
          
          <p className="urdu-text">
            <strong>🔹 مکمل اپڈیٹ شدہ Dynamic Context Example</strong>
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/App2.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedDynamicAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedDynamicAppCode, "Updated App2.jsx")}
              >
                {copiedCode === "Updated App2.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/components/Profile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedProfileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedProfileCode, "Updated Profile.jsx")}
              >
                {copiedCode === "Updated Profile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 اپڈیٹ شدہ src/components/EditProfile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{updatedEditProfileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(updatedEditProfileCode, "Updated EditProfile.jsx")}
              >
                {copiedCode === "Updated EditProfile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="success-box">
            <h3>🖥 نتیجہ (Output)</h3>
            <pre className="urdu-text">{updatedDynamicOutput}</pre>
          </div>
        </div>

        {/* NEW CONTENT: Complete Project Structure */}
        <div className="learning-outcomes">
          <h2 className="section-title">🏗️ useContext Hook (حصہ ہفتم) - مکمل پروجیکٹ سٹرکچر</h2>
          
          <p className="urdu-text">
            <strong>🔹 React Project Structure (Complete)</strong>
          </p>

          <div className="code-section">
            <div className="code-header">
              <span>📁 مکمل فائل سٹرکچر</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{completeStructure}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(completeStructure, "Complete Project Structure")}
              >
                {copiedCode === "Complete Project Structure" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/contexts/UserContext.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalUserContextCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalUserContextCode, "Final UserContext.jsx")}
              >
                {copiedCode === "Final UserContext.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/App.jsx (Static Example)</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalStaticAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalStaticAppCode, "Final App.jsx")}
              >
                {copiedCode === "Final App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/components/Header.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalHeaderCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalHeaderCode, "Final Header.jsx")}
              >
                {copiedCode === "Final Header.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/components/Footer.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalFooterCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalFooterCode, "Final Footer.jsx")}
              >
                {copiedCode === "Final Footer.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/contexts/UserContext2.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalUserContext2Code}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalUserContext2Code, "Final UserContext2.jsx")}
              >
                {copiedCode === "Final UserContext2.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/App2.jsx (Dynamic Example)</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalDynamicAppCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalDynamicAppCode, "Final App2.jsx")}
              >
                {copiedCode === "Final App2.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/components/Profile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalProfileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalProfileCode, "Final Profile.jsx")}
              >
                {copiedCode === "Final Profile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/components/EditProfile.jsx</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">{finalEditProfileCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(finalEditProfileCode, "Final EditProfile.jsx")}
              >
                {copiedCode === "Final EditProfile.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span>📁 src/AppSwitcher.jsx</span>
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
        {/* New examples updated 3*/}
          <div className="code-section">
            <div className="code-header">
              <span>📁 src/main.jsx</span>
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
              <span>📁 src/index.css</span>
            </div>
            <div className="code-block-wrapper">
              <pre className="css-code">{indexCssCode}</pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">Please scroll → </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(indexCssCode, "index.css")}
              >
                {copiedCode === "index.css" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
          </div>

          <div className="success-box">
            <h3>🟢 ایپ چلانے کا طریقہ</h3>
            <pre className="urdu-text">{finalInstructions}</pre>
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
          جب آپ بٹن دبائیں گے👇
            <br />
            → تو Light سے Dark یا Dark سے Light ہو جائے گا
            <br />
            → اور تمام کمپوننٹس خود بخود اپڈیٹ ہوں گے
            <br />
            → بغیر کسی props کے آگے پیچھے دینے کے 🎉
          </p>
          <p className="urdu-text">
            اب آپ useContext Hook اتنا آسان اور دلچسپ انداز میں سمجھے 
            کہ بے اختیار بولیں کہ:
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