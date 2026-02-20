import React, { useState } from "react";

function Chapter5() {
  const [activeTab, setActiveTab] = useState(1);
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // React Basics Examples
  // Example 1: Comments in React JS
  const example1Code = `import React from 'react';

function App() {
  // یہ ایک سادہ کمنٹ ہے - Single line comment
  
  /*
    یہ ایک ملٹی لائن کمنٹ ہے
    جس میں ہم زیادہ تفصیل لکھ سکتے ہیں
  */
  
  return (
    <div>
      {/* یہ JSX میں کمنٹ کا طریقہ ہے */}
      <h1>ری ایکٹ میں کمنٹس</h1>
      
      {/*
        JSX میں ملٹی لائن کمنٹ
        یہ رینڈر نہیں ہوگا
      */}
      <p>یہ متن دکھائی دے گا</p>
    </div>
  );
}

export default App;`;

  // Example 2: Adding Images
  const example2Code = `import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>ری ایکٹ میں تصاویر شامل کریں</h1>
      
      {/* طریقہ 1: src فولڈر سے تصویر */}
      <img 
        src="/images/my-image.jpg" 
        alt="میری تصویر"
        style={{ width: '300px', height: '200px', borderRadius: '10px' }}
      />
      
      {/* طریقہ 2: import کر کے */}
      <img 
        src={require('./local-image.png')} 
        alt="لوکل تصویر"
        style={{ width: '250px', margin: '10px' }}
      />
      
      {/* طریقہ 3: بیرونی لنک سے */}
      <img 
        src="https://example.com/image.jpg" 
        alt="بیرونی تصویر"
        style={{ 
          width: '400px', 
          height: '250px', 
          objectFit: 'cover',
          border: '2px solid #0078ff'
        }}
      />
      
      {/* طریقہ 4: public فولڈر سے */}
      <img 
        src="/public-images/photo.jpg" 
        alt="پبلک فولڈر سے تصویر"
        style={{ width: '350px', borderRadius: '15px' }}
      />
    </div>
  );
}

export default App;`;

  // Example 3: Anchor Links
  const example3Code = `import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>ری ایکٹ میں لنکس بنانے کا طریقہ</h1>
      
      {/* طریقہ 1: سادہ اینکر لنک */}
      <a 
        href="https://www.example.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0078ff', textDecoration: 'none' }}
      >
        مثال ویب سائٹ پر جائیں
      </a>
      
      <br /><br />
      
      {/* طریقہ 2: بٹن سٹائل والا لنک */}
      <a 
        href="/about" 
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0078ff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          margin: '5px'
        }}
      >
        About پیج پر جائیں
      </a>
      
      {/* طریقہ 3: ایمیل لنک */}
      <a 
        href="mailto:example@email.com"
        style={{ color: '#28a745', marginLeft: '10px' }}
      >
        ہمیں ای میل کریں
      </a>
      
      <br /><br />
      
      {/* طریقہ 4: فون لنک */}
      <a 
        href="tel:+1234567890"
        style={{ color: '#dc3545' }}
      >
        +92 300 1234567
      </a>
      
      {/* طریقہ 5: اسی پیج کے اندر لنک */}
      <div style={{ marginTop: '20px' }}>
        <a href="#section1">سیکشن 1 پر جائیں</a> | 
        <a href="#section2"> سیکشن 2 پر جائیں</a>
      </div>
    </div>
  );
}

export default App;`;

  // Example 4: Creating Components and Pages
  const example4Code = `import React from 'react';

// 🔹 "طریقہ 1: فنکشنل کمپونینٹ بنانا"
// یہ ایک سادہ function ہے جو UI کا حصہ بناتا ہے
function Welcome(props) {
  // "props" وہ ڈیٹا ہے جو باہر سے آتا ہے، جیسے name
  return <h1>Hello, {props.name}!</h1>;
  // {props.name} کے اندر وہ نام آجائے گا جو ہم نے App میں دیا تھا
}

// 🔹 "طریقہ 2: ایرو فنکشن کمپونینٹ"
// یہ بھی ایک function ہی ہے مگر جدید طریقے سے لکھا گیا
const Button = ({ onClick, children }) => {
  // { onClick, children } = یہ props ہیں جو باہر سے آئیں گے
  // onClick = جب بٹن دبایا جائے گا تو کیا ہوگا
  // children = بٹن کے اندر جو لکھا ہوگا وہ
  return (
    <button onClick={onClick} style={{ padding: '10px 20px' }}>
      {/* style={{ padding: '10px 20px' }} = بٹن کے اندر خالی جگہ */}
      {children}
      {/* {children} = بٹن کے اندر جو لکھا ہوگا وہ یہاں آجائے گا */}
    </button>
  );
};

// 🔹 "طریقہ 3: نئی پیج بنانا"
// یہ ایک الگ صفحہ بنانے کا طریقہ ہے
function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* style={{ padding: '20px' }} = چاروں طرف 20px خالی جگہ */}
      <h1>About Us</h1>
      {/* <h1> = بڑا سرخی والا ٹیکسٹ */}
      <p>یہ About پیج ہے</p>
      {/* <p> = عام paragraph والا ٹیکسٹ */}
    </div>
  );
}

// 🔹 "طریقہ 4: navbar کمپونینٹ بنانا"
// Navbar ویب سائٹ کا اوپر والا مینو ہوتا ہے
function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',  // ✅ پس منظر کا رنگ (سیاہی مائل)
      padding: '15px',          // ✅ اندرونی خالی جگہ
      color: 'white'            // ✅ متن کا رنگ سفید
    }}>
      {/* 🏠 ہوم کا لنک */}
      <a href="/" style={{ color: 'white', margin: '0 15px' }}>
        Home
        {/* href="/" = جب کلک کریں گے تو ہوم پیج پر جائیں گے */}
        {/* margin: '0 15px' = دائیں بائیں 15px فاصلہ */}
      </a>
      
      {/* ℹ️ About کا لنک */}
      <a href="/about" style={{ color: 'white', margin: '0 15px' }}>
        About
        {/* href="/about" = about پیج پر لے جائے گا */}
      </a>
      
      {/* 📞 Contact کا لنک */}
      <a href="/contact" style={{ color: 'white', margin: '0 15px' }}>
        Contact
        {/* href="/contact" = contact پیج پر لے جائے گا */}
      </a>
    </nav>
  );
}

// 🔹 "مین App کمپونینٹ - یہ ہماری پوری ویب سائٹ ہے"
function App() {
  return (
    <div>
      {/* 🧩 Navbar کو استعمال کریں */}
      {/* <Navbar /> لکھنے سے پورا Navbar یہاں آجائے گا */}
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        {/* 🎯 Welcome کمپونینٹس کو استعمال کریں */}
        
        {/* پہلا Welcome - احمد کے لیے */}
        <Welcome name="احمد" />
        {/* name="احمد" = یہ name prop ہے جو Welcome function میں جائے گا */}
        
        {/* دوسرا Welcome - فاطمہ کے لیے */}
        <Welcome name="فاطمہ" />
        {/* ایک ہی کمپونینٹ کو مختلف ناموں کے ساتھ استعمال کر سکتے ہیں */}
        
        {/* 🎮 Button کمپونینٹ کو استعمال کریں */}
        <Button onClick={() => alert('بٹن دبایا گیا!')}>
          کلک کریں
          {/* یہ لکھائی Button کے children میں جائے گی */}
        </Button>
        {/* onClick={() => alert('بٹن دبایا گیا!')} = 
            جب بٹن دبائیں گے تو alert box آئے گا */}
      </div>
    </div>
  );
}

// 📤 App کو export کریں تاکہ دوسری فائل میں استعمال ہو سکے
export default App;

/*

📚 **مزید وضاحت 16 سالہ بچے کے لیے:**

🧩 **کمپونینٹ کیا ہے؟**
- جیسے LEGO کے blocks - ہر block الگ ہوتا ہے
- ہم blocks کو جوڑ کر کچھ بناتے ہیں
- یہاں ہمارے blocks ہیں: Welcome, Button, AboutPage, Navbar

🎯 **Props کیا ہیں؟**
- جیسے آپ موبائل فون کو charger لگاتے ہیں
- Charger دیتا ہے اور فون لیتا ہے
- یہاں App دیتا ہے اور Welcome لیتا ہے

🔄 **کیسے کام کرتا ہے؟**
1. سب سے پہلے <App /> چلے گا
2. <App /> اندر <Navbar /> کو بلائے گا
3. پھر <Welcome name="احمد" /> کو بلائے گا
4. پھر <Button /> کو بلائے گا

🎨 **Styling کیسے ہوتی ہے؟**
- style={{ }} کے اندر لکھتے ہیں
- padding = اندر کی خالی جگہ (جیسے ڈبے کے اندر)
- margin = باہر کی خالی جگہ (جیسے ڈبے کے باہر)
- backgroundColor = پیچھے کا رنگ

🚀 **آپ کیا سیکھے؟**
✅ کمپونینٹ بنانا
✅ Props استعمال کرنا  
✅ Styling کرنا
✅ کمپونینٹس کو ایک دوسرے میں استعمال کرنا

اب آپ بھی اپنی ویب سائٹ بنا سکتے ہیں! 🎉

*/`;

  // Example 5: Using Navbar in App.jsx
  const example5Code = `// 📁 src/components/Navbar.jsx
import React from 'react';

// 🌟 NAVBAR COMPONENT - یہ ہمارا Navigation Bar ہے
// Navbar ویب سائٹ کا اوپر والا حصہ ہوتا ہے جہاں Menu کے buttons ہوتے ہیں
function Navbar() {
  return (
    // 🎨 NAV TAG - یہ ویب سائٹ کا navigation bar ہے
    // style={{ }} کے اندر ہم CSS لکھتے ہیں تاکہ Navbar خوبصورت لگے
    <nav style={{
      backgroundColor: '#0078ff',  // 🔵 نیلا رنگ - Navbar کا پس منظر
      padding: '15px 20px',        // ↕ اوپر نیچے 15px ↔ دائیں بائیں 20px جگہ
      color: 'white',              // ⚪ متن کا رنگ سفید
      display: 'flex',             // 📦 items کو ایک لائن میں لگانا
      justifyContent: 'space-between', // ↔ دونوں طرف کے items کے درمیان فاصلہ
      alignItems: 'center'         // ↕ سب items بیچ میں vertically center ہوں
    }}>
      
      {/* 🏷️ WEBSITE LOGO/TITLE - ویب سائٹ کا نام/لوگو */}
      <div style={{ 
        fontSize: '24px',          // 📏 فونٹ سائز بڑی
        fontWeight: 'bold'         // 🔠 فونٹ موٹا
      }}>
        میری ویب سائٹ              {/* 🏠 ویب سائٹ کا نام */}
      </div>
      
      {/* 🧭 NAVIGATION LINKS - یہاں menu کے links ہیں */}
      <div>
        {/* 🏠 HOME LINK - گھر کے صفحے کا link */}
        <a 
          href="/"                 // 📍 یہ link ہمے "/" صفحے پر لے جائے گا
          style={{
            color: 'white',               // ⚪ link کا رنگ سفید
            textDecoration: 'none',       // 🚫 underline ہٹانا
            margin: '0 15px',             // ↔ دائیں بائیں 15px فاصلہ
            padding: '8px 16px',          // ↕ اندر 8px ↔ 16px جگہ
            borderRadius: '4px',          // 🔲 corners گول کرنا
            transition: 'background-color 0.3s' // 🔄 رنگ تبدیل ہونے میں وقت
          }}
          // 🖱️ MOUSE HOVER EFFECT - جب mouse link پر لے جائیں
          onMouseOver={(e) => {
            // e.target means جس element پر mouse ہے
            e.target.style.backgroundColor = '#0056b3' // 🔵 گہرا نیلا رنگ
          }}
          // 🖱️ MOUSE LEAVE EFFECT - جب mouse link سے ہٹائیں
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent' // 🫥 رنگ ختم
          }}
        >
          ہوم  {/* 🏠 Home کا متن */}
        </a>

        {/* ℹ️ ABOUT LINK - ہمارے بارے میں صفحہ */}
        <a 
          href="/about"            // 📍 about صفحے کا link
          style={{
            color: 'white',               // ⚪ سفید رنگ
            textDecoration: 'none',       // 🚫 underline ہٹانا
            margin: '0 15px',             // ↔ دائیں بائیں فاصلہ
            padding: '8px 16px',          // ↕ اندرونی جگہ
            borderRadius: '4px',          // 🔲 گول corners
            transition: 'background-color 0.3s' // 🔄 رنگ تبدیل ہونے کا وقت
          }}
          // 🖱️ جب mouse لے جائیں تو رنگ تبدیل ہو
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          // 🖱️ جب mouse ہٹائیں تو رنگ واپس آجائے
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          About  {/* ℹ️ About کا متن */}
        </a>

        {/* 📞 CONTACT LINK - رابطہ کرنے کا صفحہ */}
        <a 
          href="/contact"          // 📍 contact صفحے کا link
          style={{
            color: 'white',               // ⚪ سفید رنگ
            textDecoration: 'none',       // 🚫 underline ہٹانا
            margin: '0 15px',             // ↔ دائیں بائیں فاصلہ
            padding: '8px 16px',          // ↕ اندرونی جگہ
            borderRadius: '4px',          // 🔲 گول corners
            transition: 'background-color 0.3s' // 🔄 رنگ تبدیل ہونے کا وقت
          }}
          // 🖱️ mouse hover پر background رنگ تبدیل
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          // 🖱️ mouse ہٹانے پر transparent ہوجائے
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contact  {/* 📞 Contact کا متن */}
        </a>
      </div>
    </nav>
  );
}

// 📤 Navbar کو دوسری فائلوں میں استعمال کرنے کے لیے export کرنا
export default Navbar;

// 📁 src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';    // 📦 Navbar component import کریں
import HomePage from './pages/HomePage';     // 🏠 HomePage component import کریں
import AboutPage from './pages/AboutPage';   // ℹ️ AboutPage component import کریں

// 🎯 MAIN APP COMPONENT - یہ ہماری پوری ویب سائٹ کا main component ہے
function App() {
  return (
    // 📦 MAIN CONTAINER - پوری ویب سائٹ کا باڈی
    <div>
      
      {/* 🧩 NAVBAR USAGE - Navbar کو یہاں استعمال کریں */}
      {/* Navbar ہمیشہ صفحے کے اوپر رہے گا */}
      <Navbar />
      
      {/* 🏠 MAIN CONTENT AREA - ویب سائٹ کا اصل مواد یہاں آئے گا */}
      <main style={{ 
        minHeight: '80vh',     // 📏 کم از کم اونچائی 80% screen
        padding: '20px'        // 📐 چاروں طرف 20px جگہ
      }}>
        {/* 🎪 یہاں آپ کا مین کونٹینٹ آئے گا */}
        
        {/* 🏷️ MAIN HEADING - سب سے بڑی سرخی */}
        <h1>میرے ری ایکٹ ایپ میں خوش آمدید</h1>
        
        {/* 📝 DESCRIPTION - تفصیل */}
        <p>یہ Navbar اوپر ہے اور تمام پیجز پر دکھائی دے گا</p>
        
        {/* 💡 IMPORTANT NOTE - اہم نوٹ */}
        <div style={{
          backgroundColor: '#f0f8ff',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px',
          border: '1px solid #0078ff'
        }}>
          <strong>نوٹ:</strong> Navbar ہر صفحے پر اوپر دکھائی دے گا چاہے آپ کسی بھی صفحے پر جائیں!
        </div>
      </main>
      
      {/* 👣 FOOTER - ویب سائٹ کا نچلا حصہ */}
      <footer style={{
        backgroundColor: '#f8f9fa',  // 🌫️ ہلکا grey پس منظر
        padding: '20px',             // 📐 اندرونی جگہ
        textAlign: 'center',         // ↔ متن بیچ میں
        borderTop: '1px solid #dee2e6' // 🔲 اوپر والی لکیر
      }}>
        {/* © COPYRIGHT TEXT - کاپی رائٹ معلومات */}
        © 2024 میری ویب سائٹ۔ تمام حقوق محفوظ ہیں۔
        
        {/* ℹ️ EXTRA INFO - اضافی معلومات */}
        <div style={{ 
          marginTop: '10px', 
          fontSize: '14px', 
          color: '#666' 
        }}>
          یہ footer ہر صفحے کے نیچے دکھائی دے گا
        </div>
      </footer>
    </div>
  );
}

// 📤 App component کو export کریں تاکہ main.jsx میں استعمال ہوسکے
export default App;`;

  // Practice Project Code
  const practiceProjectCode = `import React from 'react';

// 🎯 "میری پہلی ویب سائٹ" - مکمل پریکٹس پروجیکٹ

// 🧩 حصہ 1: ہیڈر کمپونینٹ
function Header() {
  return (
    <header style={{
      backgroundColor: '#0078ff',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      🎓 میرا پہلا ری ایکٹ پروجیکٹ
    </header>
  );
}

// 🎓 حصہ 2: سٹوڈنٹ کارڈ کمپونینٹ
function StudentCard({ name, age, grade, image }) {
  return (
    <div style={{
      border: '2px solid #0078ff',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      backgroundColor: '#f0f8ff'
    }}>
      <img 
        src={image} 
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
      <h3>{name}</h3>
      <p>عمر: {age} سال</p>
      <p>گریڈ: {grade}</p>
    </div>
  );
}

// 🎮 حصہ 3: بٹن کمپونینٹ
function MyButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: '#28a745',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}

// 👣 حصہ 4: فوٹر کمپونینٹ
function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '15px',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      © 2024 میری ویب سائٹ - تمام حقوق محفوظ ہیں
    </footer>
  );
}

// 🎪 مین ایپ کمپونینٹ - سب کچھ یہاں جوڑیں گے
function App() {
  const handleClick = () => {
    alert('واہ! آپ نے بٹن دبایا! 🎉');
  };

  const showMessage = () => {
    alert('ہیلو! یہ میرا پہلا ری ایکٹ پروجیکٹ ہے۔');
  };

  return (
    <div>
      {/* 🧩 ہیڈر شامل کریں */}
      <Header />
      
      {/* 🎓 سٹوڈنٹ کارڈز */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px'
      }}>
        <StudentCard 
          name="احمد"
          age={16}
          grade="دسواں جماعت"
          image="/images/student1.jpg"
        />
        <StudentCard 
          name="فاطمہ"
          age={15}
          grade="نویں جماعت"
          image="/images/student2.jpg"
        />
        <StudentCard 
          name="زہرہ"
          age={17}
          grade="گیارہویں جماعت"
          image="/images/student3.jpg"
        />
      </div>

      {/* 🎮 بٹنز */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <MyButton onClick={handleClick}>
          یہاں کلک کریں
        </MyButton>
        
        <MyButton onClick={showMessage}>
          میسج دیکھیں
        </MyButton>
        
        <MyButton onClick={() => alert('آپ بہت اچھے ہیں! 🌟')}>
          اچھا بٹن
        </MyButton>
      </div>

      {/* ℹ️ معلومات */}
      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        margin: '20px',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h3>💡 کامیابی کے لیے تجاویز:</h3>
        <ul>
          <li>ہر کمپونینٹ کو سمجھیں</li>
          <li>اپنے ڈیٹا کے ساتھ تجربہ کریں</li>
          <li>رنگز اور سائز تبدیل کریں</li>
          <li>نئے بٹنز شامل کریں</li>
        </ul>
      </div>

      {/* 👣 فوٹر شامل کریں */}
      <Footer />
    </div>
  );
}

export default App;`;

  const reactBasicsExamples = [
    {
      id: 1,
      title: "ری ایکٹ جے ایس میں کمنٹ کیسے کرتے ہیں؟",
      description:
        "ری ایکٹ میں مختلف قسم کے کمنٹس لکھنے کے طریقے - JavaScript اور JSX دونوں میں۔",
      code: example1Code,
    },
    {
      id: 2,
      title: "ری ایکٹ جے ایس میں پکچر کیسے لگاتے ہیں؟",
      description:
        "ری ایکٹ میں تصاویر شامل کرنے کے مختلف طریقے - لوکل، import, اور بیرونی لنکس سے۔",
      code: example2Code,
    },
    {
      id: 3,
      title: "ری ایکٹ جے ایس میں اینکر لنک کیسے بناتے ہیں؟",
      description:
        "ری ایکٹ میں مختلف قسم کے لنکس بنانے کا طریقہ - ویب سائٹس، ایمیل، فون وغیرہ۔",
      code: example3Code,
    },
    {
      id: 4,
      title: "ری ایکٹ جے ایس میں نیا پیج یا کمپونینٹس بنانے کا طریقہ",
      description:
        "ری ایکٹ میں نئے کمپونینٹس اور پیجز بنانے کا مکمل طریقہ کار۔",
      code: example4Code,
    },
    {
      id: 5,
      title: "Navbar کو App.jsx میں لگانے کا طریقہ",
      description:
        "Navbar کمپونینٹ بنانا اور اسے App.jsx میں صحیح طریقے سے استعمال کرنا۔ یہاں Navbar.jsx اور App.jsx دونوں کا کوڈ دیا گیا ہے۔ کٹ پیسٹ کر کے استعمال کریں۔",
      code: example5Code,
    },
  ];

  // Original Chapter 5 content
  const chapter2AppCode = `// اردو وضاحت: یہ مین کمپوننٹ ہے جو سب کچھ اسکرین پر دکھائے گا۔
import React from 'react'
import Greeting from './Greeting' // اردو: ہم نے نیچے بنایا ہوا Greeting کمپوننٹ امپورٹ کیا ہے۔

function App() {
  // اردو: ہم Greeting کمپوننٹ کو دو مختلف props کے ساتھ کال کر رہے ہیں۔
  return (
    <div>
      <h1>React Functional Components + Props</h1>
      
      {/* اردو: پہلا Greeting */}
      <Greeting name="Zohaib" message="React کورس میں خوش آمدید!" />
      
      {/* اردو: دوسرا Greeting */}
      <Greeting name="Ali" message="آپ کا لیکچر شروع ہو رہا ہے۔" />
    </div>
  )
}

export default App`;

  const chapter2GreetingCode = `// اردو وضاحت: یہ ایک Functional Component ہے جو props لے کر UI بناتا ہے۔
import React from 'react'

function Greeting(props) {
  // اردو: ہم props سے name اور message لے رہے ہیں۔
  return (
    <div>
      <h2>ہیلو {props.name}</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Greeting`;

  const chapter2DestructuringCode = `// اردو: props کو الگ الگ لینے کا دوسرا طریقہ
function Greeting({ name, message }) {
  return (
    <div>
      <h2>ہیلو {name}</h2>
      <p>{message}</p>
    </div>
  )
}`;

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر 5 – ری ایکٹ کی بنیادی پروگرامنگ + فنکشنل کمپونینٹس
        </h1>
        <p className="chapter-subtitle2 text-break">
          ری ایکٹ جے ایس میں بنیادی پروگرامنگ سے لے کر فنکشنل کمپونینٹس اور
          Props تک کا مکمل سفر
        </p>
      </div>

      {/* 🔹 React Basics Section */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🎯 ری ایکٹ بنیادی پروگرامنگ -- ایک نئے پروگرامر کیلئیے
        </h2>

        <div className="explanation-box">
          <h4 className="text-break">🔹 ری ایکٹ پروگرامنگ کیا ہے؟</h4>
          <p className="section-text text-break">
            <strong>ری ایکٹ</strong> ایک JavaScript لائبریری ہے جو user
            interfaces بنانے کے لیے استعمال ہوتی ہے۔ یہ نئے پروگرامرز کے لیے بہت
            آسان ہے اگر بنیادی تصورات سمجھ لیے جائیں۔
          </p>

          <div className="methods-grid">
            <div className="method-card">
              <h3 className="text-break">💬 کمنٹس</h3>
              <p className="text-break">
                JavaScript اور JSX میں کمنٹس لکھنے کا طریقہ
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🖼️ تصاویر</h3>
              <p className="text-break">
                ری ایکٹ میں مختلف طریقوں سے تصاویر شامل کریں
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🔗 لنکس</h3>
              <p className="text-break">
                اینکر لنکس اور navigation بنانے کا طریقہ
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🧩 کمپونینٹس</h3>
              <p className="text-break">
                نئے کمپونینٹس اور پیجز بنانے کا طریقہ
              </p>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* 🔹 sidebar: تمام مثالوں کے buttons */}
          <div className="sidebar">
            <h3 className="text-break">بنیادی مثالیں</h3>
            <ul className="example-list">
              {reactBasicsExamples.map((example) => (
                <li key={example.id}>
                  <button
                    className={`sidebar-btn text-break ${
                      activeTab === example.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(example.id)}
                  >
                    مثال {example.id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/*🔹 main content: منتخب مثال دکھانا */}
          <div className="main-content">
            <div className="section-card">
              <h2 className="section-title text-break">
                {reactBasicsExamples[activeTab - 1].title}
              </h2>
              <p className="section-text text-break">
                {reactBasicsExamples[activeTab - 1].description}
              </p>

              {/* 🔹 JSX CODE */}
              <div className="code-block-container">
                <div className="code-header">
                  <span className="text-break">
                    {activeTab === 5
                      ? "📁 src/components/Navbar.jsx"
                      : "📁 src/App.jsx"}
                  </span>
                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyToClipboard(
                        reactBasicsExamples[activeTab - 1].code,
                        `مثال ${activeTab}`
                      )
                    }
                  >
                    {copiedCode === `مثال ${activeTab}`
                      ? "کاپی ہوگیا ✅"
                      : "📋 کاپی کریں"}
                  </button>
                </div>

                <div className="code-block-wrapper">
                  <pre className="english-code">
                    <code>{reactBasicsExamples[activeTab - 1].code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Additional Explanations Section */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🎯 مزید وضاحتیں (Additional Explanations)
        </h2>

        <div className="explanation-box">
          <div className="methods-grid">
            <div className="method-card">
              <h3 className="text-break">🔄 COMPONENTS کیا ہیں؟</h3>
              <p className="text-break">
                <strong>Navbar</strong> = جیسے گاڑی کا steering wheel (ہر جگہ
                ایک جیسا)
                <br />
                <strong>App</strong> = جیسے پوری گاڑی (سب components مل کر بنتے
                ہیں)
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🎨 STYLING کیا ہے؟</h3>
              <p className="text-break">
                <strong>backgroundColor</strong> = پس منظر کا رنگ
                <br />
                <strong>padding</strong> = اندرونی جگہ (جیسے ڈبے کے اندر space)
                <br />
                <strong>margin</strong> = باہری جگہ (جیسے ڈبے کے باہر space)
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🖱️ EVENTS کیا ہیں؟</h3>
              <p className="text-break">
                <strong>onMouseOver</strong> = جب mouse کسی چیز پر لے جائیں
                <br />
                <strong>onMouseOut</strong> = جب mouse ہٹائیں
              </p>
            </div>

            <div className="method-card">
              <h3 className="text-break">📁 FILE STRUCTURE</h3>
              <div
                className="english-code"
                style={{ fontSize: "12px", padding: "10px", marginTop: "10px" }}
              >
                <code>{`src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── HomePage.jsx
│   └── AboutPage.jsx
└── App.jsx`}</code>
              </div>
            </div>
          </div>

          <div className="info-box" style={{ marginTop: "20px" }}>
            <h4 className="text-break">💡 یاد رکھیں:</h4>
            <ul className="text-break">
              <li>ہر component ایک الگ function ہوتا ہے</li>
              <li>return کے اندر HTML جیسا code لکھتے ہیں</li>
              <li>style کے اندر CSS لکھتے ہیں</li>
              <li>ہر component کو export default کرنا ضروری ہے</li>
            </ul>
            <p
              className="text-break"
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                color: "#0078ff",
              }}
            >
              اب آپ آسانی سے سمجھ سکتے ہیں کہ Navbar کیسے کام کرتا ہے! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Practice Project Section */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🎁 خاص تحفہ: "میری پہلی ویب سائٹ" پریکٹس پروجیکٹ
        </h2>

        <div className="explanation-box">
          <h4 className="text-break">🚀 16 سالہ طالب علم کے لیے Step-by-Step پروجیکٹ</h4>
          <p className="section-text text-break">
            اب آپ ایک مکمل ویب سائٹ بنائیں گے جو آپ نے ابھی تک سیکھا ہے اس پر مشتمل ہوگی۔
          </p>

          <div className="methods-grid">
            <div className="method-card">
              <h3 className="text-break">🧩 حصہ 1: ہیڈر</h3>
              <p className="text-break">ویب سائٹ کا اوپری حصہ بنائیں</p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🎓 حصہ 2: سٹوڈنٹ کارڈ</h3>
              <p className="text-break">طلباء کی معلومات دکھانے والے کارڈز</p>
            </div>

            <div className="method-card">
              <h3 className="text-break">🎮 حصہ 3: بٹنز</h3>
              <p className="text-break">انٹریکٹو بٹنز بنائیں</p>
            </div>

            <div className="method-card">
              <h3 className="text-break">👣 حصہ 4: فوٹر</h3>
              <p className="text-break">ویب سائٹ کا نچلا حصہ</p>
            </div>
          </div>

          {/* Practice Project Code */}
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 src/App.js - مکمل پریکٹس پروجیکٹ</span>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(practiceProjectCode, "Practice Project")}
              >
                {copiedCode === "Practice Project" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{practiceProjectCode}</code>
              </pre>
            </div>
          </div>

          {/* Learning Stages */}
          <div className="info-box" style={{ marginTop: '20px' }}>
            <h4 className="text-break">📚 سیکھنے کے مراحل:</h4>
            
            <div className="methods-grid">
              <div className="method-card">
                <h3 className="text-break">📅 پہلا ہفتہ</h3>
                <p className="text-break">
                  ✅ Header اور Footer سمجھیں<br/>
                  ✅ Styling کے اصول<br/>
                  ✅ Components جوڑنا
                </p>
              </div>

              <div className="method-card">
                <h3 className="text-break">📅 دوسرا ہفتہ</h3>
                <p className="text-break">
                  ✅ StudentCard میں ڈیٹا بدلیں<br/>
                  ✅ نئے کارڈز بنائیں<br/>
                  ✅ رنگ تبدیل کریں
                </p>
              </div>

              <div className="method-card">
                <h3 className="text-break">📅 تیسرا ہفتہ</h3>
                <p className="text-break">
                  ✅ نئے بٹنز بنائیں<br/>
                  ✅ نئے alerts شامل کریں<br/>
                  ✅ اپنے فنکشنز بنائیں
                </p>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="success-box" style={{ marginTop: '20px' }}>
            <h4 className="text-break">🎁 بونس: اپنی مرضی کی تبدیلیاں</h4>
            <div className="methods-grid">
              <div className="method-card">
                <h3 className="text-break">🔵 رنگ بدلیں</h3>
                <p className="text-break">Background colors تبدیل کریں</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">📏 سائز بدلیں</h3>
                <p className="text-break">Padding اور margin ایڈجسٹ کریں</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">👥 نام بدلیں</h3>
                <p className="text-break">نئے طلباء کے نام ڈالیں</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">🎨 نیا ڈیزائن</h3>
                <p className="text-break">اپنا ڈیزائن بنائیں</p>
              </div>
            </div>
          </div>

          {/* Success Indicators */}
          <div className="info-box" style={{ marginTop: '20px' }}>
            <h4 className="text-break">✅ کامیابی کے اشارے:</h4>
            <div className="methods-grid">
              <div className="method-card">
                <h3 className="text-break">🟢 پہلا دن</h3>
                <p className="text-break">کوڈ چل رہا ہے</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">🟡 پہلا ہفتہ</h3>
                <p className="text-break">چھوٹی تبدیلیاں کر سکتے ہیں</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">🔵 دوسرا ہفتہ</h3>
                <p className="text-break">نئے components بنا سکتے ہیں</p>
              </div>
              <div className="method-card">
                <h3 className="text-break">🟣 تیسرا ہفتہ</h3>
                <p className="text-break">اپنی ویب سائٹ بنا سکتے ہیں</p>
              </div>
            </div>
          </div>

          <p className="text-break" style={{
            marginTop: '15px',
            fontWeight: 'bold',
            color: '#0078ff',
            textAlign: 'center',
            fontSize: '20px'
          }}>
            اب آپ کے پاس ایک مکمل پریکٹس پروجیکٹ ہے! 🚀
          </p>
          
          <p className="text-break" style={{
            textAlign: 'center',
            color: '#28a745',
            fontWeight: 'bold'
          }}>
            کامیابی کی دعا ہے! اگر کوئی مسئلہ ہو تو ضرور پوچھیں۔ 😊
          </p>
        </div>
      </div>

      {/* 🔹 Original Chapter 5 Content - Functional Components + Props */}
      <div className="section-card">
        <h2 className="section-title text-break">
          🧩 فنکشنل کمپونینٹس + JSX + Props
        </h2>

        <div className="lesson-section">
          <h3>📝 سبق: فنکشنل کمپوننٹ، JSX اور Props</h3>

          <h4>1️⃣ فنکشنل کمپوننٹ کیا ہے؟</h4>
          <p>
            React میں ہر UI حصہ ایک <em>Component</em> ہوتا ہے۔
          </p>
          <p>
            Functional Component ایک <em>سادہ JavaScript فنکشن</em> ہوتا ہے جو
            UI (یعنی JSX) واپس کرتا ہے۔
          </p>
          <p>
            <strong>یاد رکھیں:</strong> React میں Component کا پہلا حرف ہمیشہ
            Capital ہوتا ہے۔
          </p>

          <h4>2️⃣ JSX کیا ہے؟</h4>
          <p>
            JSX ایک خاص syntax ہے جو HTML جیسا نظر آتا ہے مگر اندر JavaScript
            بھی استعمال کر سکتے ہیں۔
          </p>
          <p>React اس JSX کو HTML میں بدل دیتا ہے۔</p>

          <h4>3️⃣ Props کیا ہیں؟</h4>
          <p>
            Props (یعنی properties) وہ ڈیٹا ہے جو ہم ایک Component کو باہر سے
            بھیجتے ہیں تاکہ وہ مختلف طریقوں سے ڈسپلے کرے۔
          </p>
          <p>
            مثال: آپ نے ایک Card Component بنایا اور ہر Card پر مختلف نام یا
            تصویر دکھانی ہو تو وہ Props سے ممکن ہوتا ہے۔
          </p>
        </div>

        <div className="code-section">
          <h3>🧑‍💻 کوڈ کی مثال</h3>

          <h4>📁 src/App.jsx</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 src/App.jsx</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(chapter2AppCode, "App Component")
                }
              >
                {copiedCode === "App Component"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2AppCode}</code>
              </pre>
            </div>
            <div className="code-scroll-notice">Please scroll →</div>
          </div>

          <h4>📁 src/Greeting.jsx</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 src/Greeting.jsx</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(chapter2GreetingCode, "Greeting Component")
                }
              >
                {copiedCode === "Greeting Component"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2GreetingCode}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <h4>4️⃣ یہ کوڈ کیا کرے گا؟</h4>
          <ul>
            <li>آپ کی App.jsx دو بار Greeting Component استعمال کرے گی۔</li>
            <li>ہر بار مختلف name اور message props دیں گے۔</li>
            <li>
              نتیجہ: صفحے پر دو Greetings الگ الگ ڈیٹا کے ساتھ نظر آئیں گے۔
            </li>
          </ul>

          <h4>5️⃣ Props کو اور بھی آسان بنائیں (Destructuring)</h4>
          <div className="code-block-container">
            <div className="code-header">
              <span className="text-break">📁 Destructuring Props</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    chapter2DestructuringCode,
                    "Destructuring Props"
                  )
                }
              >
                {copiedCode === "Destructuring Props"
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{chapter2DestructuringCode}</code>
              </pre>
            </div>
            <div className="code-scroll-notice">Please scroll →</div>
          </div>
        </div>

        <div className="homework-section">
          <h3>📝 ہوم ورک (طلبہ کیلئے)</h3>
          <ol>
            <li>
              ایک <em>Card</em> Component بنائیں جو props سے title، description
              لے اور ڈسپلے کرے۔
            </li>
            <li>
              App.jsx میں اس Card کو تین بار کال کریں ہر بار مختلف props دیں۔
            </li>
          </ol>
        </div>

        <div className="learning-outcomes">
          <h3>اس سبق کے بعد طلبہ:</h3>
          <ul>
            <li>Component اور JSX کے بیچ فرق سمجھیں گے۔</li>
            <li>Props کے ذریعے ڈیٹا بھیجنا سیکھیں گے۔</li>
            <li>
              ایک ہی Component کو مختلف ڈیٹا کے ساتھ استعمال کرنا سیکھیں گے۔
            </li>
          </ul>
        </div>
      </div>
{/* 🔹 Props Drilling - مسئلہ اور حل */}
<div className="section-card">
  <h2 className="section-title text-break">
    🚨 Props Drilling - مسئلہ اور حل
  </h2>
  
  <div className="explanation-box">
    <h3 className="text-break">❓ مسئلہ کیا ہے؟</h3>
    <p className="section-text text-break">
      <strong>Props Drilling</strong> ایسی صورت حال ہے جب ہمیں کسی data کو parent component سے child component تک پہنچانا ہو، لیکن درمیان کے components کو اس data کی ضرورت نہ ہو۔
    </p>
    
    <div className="info-box">
      <h4 className="text-break">📖 مثال کے طور پر:</h4>
      <p className="text-break">
        دادی 👵 ➡️ امی 👩 ➡️ بیٹی 👧<br/>
        دادی نے بیٹی کے لیے چاکلیٹ 🍫 دی، لیکن امی کو چاکلیٹ کی ضرورت نہیں، وہ صرف پاس کر رہی ہے۔
      </p>
    </div>
    
    <div className="practice-example">
      <h3 className="text-break">1. آن لائن شاپنگ کارٹ سسٹم</h3>
      <h4 className="text-break">📋 مسئلہ:</h4>
      <p className="text-break">
        ہمارے پاس ایک shopping app ہے جہاں:<br/>
        • Main App میں cart کی state ہے<br/>
        • ProductItem کو addToCart function چاہیے<br/>
        • درمیان میں 2-3 components ہیں جو اس function کو صرف پاس کر رہے ہیں
      </p>
      
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 Props Drilling کا مسئلہ</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// Main App (دکان والا)
const App = () => {
  const [cart, setCart] = useState([]); // یہاں cart ہے
  
  return <Shop cart={cart} setCart={setCart} />;
};

// Shop (دکان)
const Shop = ({ cart, setCart }) => {
  // Shop کو cart کی ضرورت نہیں، صرف پاس کر رہا ہے
  return <ProductSection cart={cart} setCart={setCart} />;
};

// ProductSection (پرڈکٹ کا سیکشن)
const ProductSection = ({ cart, setCart }) => {
  // اسے بھی ضرورت نہیں، صرف پاس کر رہا ہے
  return <ProductItem cart={cart} setCart={setCart} />;
};

// ProductItem (آخری component)
const ProductItem = ({ cart, setCart }) => {
  // صرف یہاں function استعمال ہوگا
  const addToCart = () => {
    setCart([...cart, "نئی پرڈکٹ"]);
  };
  
  return <button onClick={addToCart}>خریدیں</button>;
};`, "Props Drilling Example")}
          >
            {copiedCode === "Props Drilling Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// Main App (دکان والا)
const App = () => {
  const [cart, setCart] = useState([]); // یہاں cart ہے
  
  return <Shop cart={cart} setCart={setCart} />;
};

// Shop (دکان)
const Shop = ({ cart, setCart }) => {
  // Shop کو cart کی ضرورت نہیں، صرف پاس کر رہا ہے
  return <ProductSection cart={cart} setCart={setCart} />;
};

// ProductSection (پرڈکٹ کا سیکشن)
const ProductSection = ({ cart, setCart }) => {
  // اسے بھی ضرورت نہیں، صرف پاس کر رہا ہے
  return <ProductItem cart={cart} setCart={setCart} />;
};

// ProductItem (آخری component)
const ProductItem = ({ cart, setCart }) => {
  // صرف یہاں function استعمال ہوگا
  const addToCart = () => {
    setCart([...cart, "نئی پرڈکٹ"]);
  };
  
  return <button onClick={addToCart}>خریدیں</button>;
};`}</code>
          </pre>
        </div>
      </div>
      
      <div className="problem-list">
        <h4 className="text-break">🚨 مسائل:</h4>
        <ul className="text-break">
          <li>Shop اور ProductSection کو cart/setCart کی ضرورت نہیں</li>
          <li>وہ صرف messenger کا کام کر رہے ہیں</li>
          <li>اگر بعد میں 10 اور components ہوں، تو سب کو یہ props پاس کرنی پڑیں گی</li>
        </ul>
      </div>
      
      <h4 className="text-break">✅ حل - Context API:</h4>
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 Context API سے حل</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`import React, { createContext, useState, useContext } from 'react';

// 1. Context بنائیں (ایک بکس جہاں data رکھیں)
const CartContext = createContext();

// 2. App میں Provider استعمال کریں
const App = () => {
  const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Shop /> {/* اب props پاس نہیں کرنی */}
    </CartContext.Provider>
  );
};

// 3. جہاں ضرورت ہو، وہاں useContext استعمال کریں
const ProductItem = () => {
  const { cart, setCart } = useContext(CartContext); // Direct access
  
  const addToCart = () => {
    setCart([...cart, "نئی پرڈکٹ"]);
  };
  
  return <button onClick={addToCart}>خریدیں</button>;
};`, "Context API Solution")}
          >
            {copiedCode === "Context API Solution" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`import React, { createContext, useState, useContext } from 'react';

// 1. Context بنائیں (ایک بکس جہاں data رکھیں)
const CartContext = createContext();

// 2. App میں Provider استعمال کریں
const App = () => {
  const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Shop /> {/* اب props پاس نہیں کرنی */}
    </CartContext.Provider>
  );
};

// 3. جہاں ضرورت ہو، وہاں useContext استعمال کریں
const ProductItem = () => {
  const { cart, setCart } = useContext(CartContext); // Direct access
  
  const addToCart = () => {
    setCart([...cart, "نئی پرڈکٹ"]);
  };
  
  return <button onClick={addToCart}>خریدیں</button>;
};`}</code>
          </pre>
        </div>
      </div>
    </div>
    
    <div className="practice-example">
      <h3 className="text-break">2. اسکول مینجمنٹ سسٹم</h3>
      <h4 className="text-break">📋 مسئلہ:</h4>
      <p className="text-break">
        پرنسپل سے طالب علم تک marks پہنچانے میں:
      </p>
      
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 اسکول سسٹم میں Props Drilling</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// Principal (پرنسپل)
const Principal = () => {
  const [marks, setMarks] = useState({ علی: 85 });
  
  return <HeadTeacher marks={marks} setMarks={setMarks} />;
};

// HeadTeacher (ہیڈ ٹیچر)
const HeadTeacher = ({ marks, setMarks }) => {
  // کوئی استعمال نہیں، صرف پاس کر رہا ہے
  return <ClassTeacher marks={marks} setMarks={setMarks} />;
};

// ClassTeacher (کلاس ٹیچر)
const ClassTeacher = ({ marks, setMarks }) => {
  // کوئی استعمال نہیں، صرف پاس کر رہا ہے
  return <Student marks={marks} setMarks={setMarks} />;
};

// Student (طالب علم)
const Student = ({ marks, setMarks }) => {
  // صرف یہاں استعمال ہوگا
  return <div>میرے نمبر: {marks.علی}</div>;
};`, "School Problem Example")}
          >
            {copiedCode === "School Problem Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// Principal (پرنسپل)
const Principal = () => {
  const [marks, setMarks] = useState({ علی: 85 });
  
  return <HeadTeacher marks={marks} setMarks={setMarks} />;
};

// HeadTeacher (ہیڈ ٹیچر)
const HeadTeacher = ({ marks, setMarks }) => {
  // کوئی استعمال نہیں، صرف پاس کر رہا ہے
  return <ClassTeacher marks={marks} setMarks={setMarks} />;
};

// ClassTeacher (کلاس ٹیچر)
const ClassTeacher = ({ marks, setMarks }) => {
  // کوئی استعمال نہیں، صرف پاس کر رہا ہے
  return <Student marks={marks} setMarks={setMarks} />;
};

// Student (طالب علم)
const Student = ({ marks, setMarks }) => {
  // صرف یہاں استعمال ہوگا
  return <div>میرے نمبر: {marks.علی}</div>;
};`}</code>
          </pre>
        </div>
      </div>
      
      <h4 className="text-break">✅ حل:</h4>
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 Context سے حل</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// MarksContext بنائیں
const MarksContext = createContext();

const Principal = () => {
  const [marks, setMarks] = useState({ علی: 85 });
  
  return (
    <MarksContext.Provider value={{ marks, setMarks }}>
      <HeadTeacher />
      <ClassTeacher />
      <Student />
    </MarksContext.Provider>
  );
};

// Student direct access کر سکتا ہے
const Student = () => {
  const { marks } = useContext(MarksContext);
  return <div>میرے نمبر: {marks.علی}</div>;
};`, "School Solution")}
          >
            {copiedCode === "School Solution" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// MarksContext بنائیں
const MarksContext = createContext();

const Principal = () => {
  const [marks, setMarks] = useState({ علی: 85 });
  
  return (
    <MarksContext.Provider value={{ marks, setMarks }}>
      <HeadTeacher />
      <ClassTeacher />
      <Student />
    </MarksContext.Provider>
  );
};

// Student direct access کر سکتا ہے
const Student = () => {
  const { marks } = useContext(MarksContext);
  return <div>میرے نمبر: {marks.علی}</div>;
};`}</code>
          </pre>
        </div>
      </div>
    </div>
    
    <div className="practice-example">
      <h3 className="text-break">3. گیم اسکور بورڈ</h3>
      <h4 className="text-break">📋 مسئلہ:</h4>
      <p className="text-break">
        Game میں score update کرنا:
      </p>
      
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 گیم سسٹم میں Props Drilling</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// Game (مین گیم)
const Game = () => {
  const [score, setScore] = useState(0);
  
  return <TeamA score={score} setScore={setScore} />;
};

// TeamA (پہلی ٹیم)
const TeamA = ({ score, setScore }) => {
  return <Player1 score={score} setScore={setScore} />;
};

// Player1 (کھلاڑی 1)
const Player1 = ({ score, setScore }) => {
  const addScore = () => {
    setScore(score + 10); // صرف یہاں استعمال
  };
  
  return <button onClick={addScore}>سکور کریں</button>;
};`, "Game Problem Example")}
          >
            {copiedCode === "Game Problem Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// Game (مین گیم)
const Game = () => {
  const [score, setScore] = useState(0);
  
  return <TeamA score={score} setScore={setScore} />;
};

// TeamA (پہلی ٹیم)
const TeamA = ({ score, setScore }) => {
  return <Player1 score={score} setScore={setScore} />;
};

// Player1 (کھلاڑی 1)
const Player1 = ({ score, setScore }) => {
  const addScore = () => {
    setScore(score + 10); // صرف یہاں استعمال
  };
  
  return <button onClick={addScore}>سکور کریں</button>;
};`}</code>
          </pre>
        </div>
      </div>
      
      <div className="problem-list">
        <h4 className="text-break">🚨 مسائل:</h4>
        <ul className="text-break">
          <li>TeamA کو score/setScore کی ضرورت نہیں</li>
          <li>وہ صرف پاس کر رہا ہے</li>
        </ul>
      </div>
      
      <h4 className="text-break">✅ حل:</h4>
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 Context سے حل</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// ScoreContext
const ScoreContext = createContext();

const Game = () => {
  const [score, setScore] = useState(0);
  
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <TeamA />
      <TeamB />
    </ScoreContext.Provider>
  );
};

// Player1 direct access
const Player1 = () => {
  const { score, setScore } = useContext(ScoreContext);
  
  const addScore = () => {
    setScore(score + 10);
  };
  
  return <button onClick={addScore}>سکور کریں</button>;
};`, "Game Solution")}
          >
            {copiedCode === "Game Solution" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// ScoreContext
const ScoreContext = createContext();

const Game = () => {
  const [score, setScore] = useState(0);
  
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <TeamA />
      <TeamB />
    </ScoreContext.Provider>
  );
};

// Player1 direct access
const Player1 = () => {
  const { score, setScore } = useContext(ScoreContext);
  
  const addScore = () => {
    setScore(score + 10);
  };
  
  return <button onClick={addScore}>سکور کریں</button>;
};`}</code>
          </pre>
        </div>
      </div>
    </div>
    
    <div className="practice-example">
      <h3 className="text-break">4. حقیقی مسئلہ اور حل (Refactoring)</h3>
      <h4 className="text-break">📋 اصل مسئلہ:</h4>
      
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 BEFORE - Props Drilling کا مسئلہ</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// BEFORE - Props Drilling کا مسئلہ
const App = () => {
  const [user, setUser] = useState({ name: "احمد" });
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("urdu");
  
  // ہر component کو سارے props پاس کرنے پڑ رہے ہیں
  return (
    <Header 
      user={user}
      theme={theme}
      language={language}
      setUser={setUser}
      setTheme={setTheme}
      setLanguage={setLanguage}
    />
    <Sidebar 
      user={user}
      theme={theme}
      language={language}
    />
    <Content 
      user={user}
      theme={theme}
      language={language}
      setUser={setUser}
    />
  );
};`, "Refactoring Problem")}
          >
            {copiedCode === "Refactoring Problem" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// BEFORE - Props Drilling کا مسئلہ
const App = () => {
  const [user, setUser] = useState({ name: "احمد" });
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("urdu");
  
  // ہر component کو سارے props پاس کرنے پڑ رہے ہیں
  return (
    <Header 
      user={user}
      theme={theme}
      language={language}
      setUser={setUser}
      setTheme={setTheme}
      setLanguage={setLanguage}
    />
    <Sidebar 
      user={user}
      theme={theme}
      language={language}
    />
    <Content 
      user={user}
      theme={theme}
      language={language}
      setUser={setUser}
    />
  );
};`}</code>
          </pre>
        </div>
      </div>
      
      <div className="problem-list">
        <h4 className="text-break">🚨 مسائل:</h4>
        <ul className="text-break">
          <li>Code بہت لمبا ہو جاتا ہے</li>
          <li>اگر ایک prop تبدیل ہو، تو سب جگہ update کرنا پڑتا ہے</li>
          <li>Debugging مشکل ہوتی ہے</li>
          <li>Performance متاثر ہوتی ہے</li>
        </ul>
      </div>
      
      <h4 className="text-break">✅ حل - Contexts بنائیں:</h4>
      <div className="code-block-container">
        <div className="code-header">
          <span className="text-break">📁 AFTER - Context API سے حل</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(`// مختلف Contexts بنائیں
const UserContext = createContext();
const ThemeContext = createContext();
const LanguageContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "احمد" });
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("urdu");
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Header />
          <Sidebar />
          <Content />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

// اب ہر component صرف اپنی ضرورت کا context لے سکتا ہے
const Header = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  
  return <div className={\`header-\${theme}\`}>{user.name}</div>;
};

const Content = () => {
  const { setUser } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      <button onClick={() => setUser({ name: "نئی نام" })}>
        {language === "urdu" ? "نام تبدیل کریں" : "Change Name"}
      </button>
    </div>
  );
};`, "Refactoring Solution")}
          >
            {copiedCode === "Refactoring Solution" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
          </button>
        </div>
        <div className="code-block-wrapper">
          <pre className="english-code">
            <code>{`// مختلف Contexts بنائیں
const UserContext = createContext();
const ThemeContext = createContext();
const LanguageContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "احمد" });
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("urdu");
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Header />
          <Sidebar />
          <Content />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

// اب ہر component صرف اپنی ضرورت کا context لے سکتا ہے
const Header = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  
  return <div className={\`header-\${theme}\`}>{user.name}</div>;
};

const Content = () => {
  const { setUser } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      <button onClick={() => setUser({ name: "نئی نام" })}>
        {language === "urdu" ? "نام تبدیل کریں" : "Change Name"}
      </button>
    </div>
  );
};`}</code>
          </pre>
        </div>
      </div>
    </div>
    
    <div className="decision-guide">
      <h3 className="text-break">🎯 آسان قاعدہ:</h3>
      
      <div className="methods-grid">
        <div className="method-card">
          <h3 className="text-break">✅ Props Drilling کب استعمال کریں؟</h3>
          <ul className="text-break">
            <li>جب 1-2 levels ہوں</li>
            <li>جب data صرف parent-child میں ہو</li>
            <li>چھوٹے projects کے لیے</li>
          </ul>
        </div>
        
        <div className="method-card">
          <h3 className="text-break">✅ Context API کب استعمال کریں؟</h3>
          <ul className="text-break">
            <li>جب 3+ levels ہوں</li>
            <li>جب بہت سے components کو ایک ہی data چاہیے</li>
            <li>بڑے projects کے لیے</li>
            <li>جب data بار بار پاس کرنی پڑ رہی ہو</li>
          </ul>
        </div>
      </div>
      
      <div className="info-box">
        <h4 className="text-break">💡 عملی مثال:</h4>
        <p className="text-break">
          پہلے کی طرح سوچیں:<br/>
          <strong>"کیا درمیان والے components اس data کو استعمال کر رہے ہیں؟"</strong><br/>
          اگر نہیں، تو Context استعمال کریں۔
        </p>
        <p className="text-break">
          جیسے:<br/>
          دکان 👉 شیلف 👉 پرڈکٹ<br/>
          اگر شیلف کو cart کی ضرورت نہیں، تو Context استعمال کریں۔
        </p>
      </div>
      
      <div className="comparison-table">
        <h4 className="text-break">📊 خلاصہ:</h4>
        <table className="urdu-table">
          <thead>
            <tr>
              <th className="text-break">Props Drilling</th>
              <th className="text-break">Context API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-break">Data کو ہر level پر پاس کریں</td>
              <td className="text-break">Data central location میں رکھیں</td>
            </tr>
            <tr>
              <td className="text-break">چھوٹے apps کے لیے</td>
              <td className="text-break">بڑے apps کے لیے</td>
            </tr>
            <tr>
              <td className="text-break">سیدھا راستہ</td>
              <td className="text-break">لیکن complex ہو سکتا ہے</td>
            </tr>
            <tr>
              <td className="text-break">سمجھنے میں آسان</td>
              <td className="text-break">طاقتور solution</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="final-note">
        <p className="text-break" style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#0078ff',
          fontSize: '18px',
          marginTop: '20px'
        }}>
          آخری بات: Props Drilling بری نہیں ہے، لیکن جب بہت زیادہ levels ہوں، تو Context API بہتر ہے!
        </p>
      </div>
    </div>
  </div>
</div>
      {/* Global Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
    
  );
}

export default Chapter5;