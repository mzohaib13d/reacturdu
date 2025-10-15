import React, { useState, useCallback, useMemo, memo } from "react";

const Chapter16 = () => {
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const copySyntaxCode = () => {
    // 📌 یہاں ہم ایک String بنا رہے ہیں جس میں React کے تین اہم concepts کا syntax رکھا گیا ہے
    const syntaxCode = `

  // 🌸 React.memo Syntax 🌸
  // React.memo ایک خاص فنکشن ہے جو کسی component کو یاد (cache) کر لیتا ہے
  // مطلب: اگر props میں کوئی تبدیلی نہ ہو تو یہ component دوبارہ render نہیں ہوتا
  // یہ performance بہتر کرنے کے لیے استعمال ہوتا ہے

  const MyComponent = memo(function MyComponent(props) {
    // یہ وہ جگہ ہے جہاں component کا logic آتا ہے
    // مثلاً: props سے data لینا، state استعمال کرنا وغیرہ
  });

  // 🌸 useCallback Syntax 🌸
  // useCallback ایک Hook ہے جو functions کو یاد (cache) کر لیتا ہے
  // مطلب: جب dependency نہ بدلے تو وہی پرانا function دوبارہ استعمال ہوتا ہے
  // یہ بھی performance بڑھانے کے لیے استعمال ہوتا ہے، خاص طور پر memoized components کے ساتھ

  const memoizedCallback = useCallback(() => {
    // یہ وہ جگہ ہے جہاں تمہارا function code لکھا جاتا ہے
    // جیسے: کوئی button click handle کرنا وغیرہ
  }, [dependencies]); // یہاں dependencies کا مطلب ہے وہ values جن کے بدلنے پر نیا function بنے گا

  // 🌸 useMemo Syntax 🌸
  // useMemo ایک Hook ہے جو expensive calculations (مہنگے حساب کتاب)
  // کو یاد (cache) کر لیتا ہے تاکہ ہر بار دوبارہ نہ کرنا پڑے
  // مطلب: اگر dependencies نہ بدلیں تو پرانا result دوبارہ استعمال ہو گا

  const memoizedValue = useMemo(() => {
    // یہاں تم اپنی مہنگی calculation لکھتی ہو
    // جیسے: کوئی بڑی list filter کرنا یا لمبا mathematical result نکالنا
  }, [dependencies]); // اگر یہ values بدلیں تو دوبارہ حساب ہو گا

  `;

    // 📋 یہ لائن syntaxCode والی string کو clipboard میں کاپی کر دیتی ہے
    // یعنی "copy" بٹن دبانے پر پورا code تمہارے clipboard میں چلا جاتا ہے
    navigator.clipboard.writeText(syntaxCode);

    // 💬 اب ہم ایک پیغام دکھا رہے ہیں کہ "Syntax کوڈ کوپي ہو گیا!"
    // تاکہ user کو پتا چلے کہ کوڈ کاپی ہو چکا ہے
    setCopyStatus("Syntax کوڈ کوپي ہو گیا!");

    // ⏳ یہ لائن دو سیکنڈ بعد وہ پیغام مٹا دیتی ہے
    // مطلب: 2 seconds بعد message خود غائب ہو جائے گا
    setTimeout(() => setCopyStatus(""), 2000);
  };

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر نمبر 16 – React.memo، useMemo، useCallback (Re-render روکنے
          کا جادو)
        </h1>
        <p className="chapter-subtitle2 text-break">
          تینوں memorization techniques جو React applications کو blazing fast
          بناتی ہیں۔
        </p>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-card">
          <h3 className="intro-title">🎯 Memorization Hooks کا تعارف</h3>
          <p className="intro-text">
            جب آپ کا React ایپ بڑا ہو جاتا ہے، تو ہر بار state یا props بدلنے پر
            پورا component دوبارہ render ہوتا ہے — چاہے کسی حصے کی ضرورت نہ ہو!
            یہی جگہ ہے جہاں Memoization آ کر مدد کرتا ہے۔ 🧠
          </p>
        </div>
      </div>

      {/* 🌼 1️⃣ React.memo Section */}
      <div className="section-card">
        <h2 className="section-title">
          🌼 1️⃣ React.memo — یاد رکھنے والا کمپوننٹ
        </h2>
        <p className="section-text">
          React.memo ایک function ہے جو functional component کو یاد رکھتا ہے۔
          اگر اس کے props نہیں بدلے، تو React دوبارہ render نہیں کرتا۔
        </p>

        <div className="demo-section">
          <h3>🍕 مثال 1: React.memo کے بغیر — ہر بار render!</h3>
          <div className="code-block-container">
            <div className="code-header">
              <span>کوڈ:</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `

// 🌸 App.jsx فائل 🌸
// یہ React کی ایک مرکزی فائل ہے جہاں ہمارا component لکھا جاتا ہے

import React, { useState } from "react";  
// 📘 یہاں ہم React لائبریری import کر رہے ہیں تاکہ components بنا سکیں
// useState ایک "React Hook" ہے جو ہمیں state (یعنی variable) کو manage کرنے کی سہولت دیتا ہے

import "./App.css";  
// 🎨 یہ ہماری CSS فائل ہے جہاں ہم design اور رنگ وغیرہ کا کوڈ لکھتے ہیں


// 👶 یہاں ہم ایک Child component بنا رہے ہیں
function Child({ name }) {  
  // 🧠 {name} کو ہم "props" کے ذریعے لے رہے ہیں — props وہ values ہیں جو parent سے child کو بھیجی جاتی ہیں

  console.log("👶 Child render ہوا");
  // 🖥️ یہ لائن صرف یہ بتانے کے لیے ہے کہ جب بھی Child component دوبارہ render ہوگا
  // تو console میں یہ message نظر آئے گا

  return <h3>ہیلو، {name}!</h3>;  
  // 💬 یہ لائن browser میں دکھاتی ہے: "ہیلو، عائشہ!"
  // یعنی جو بھی نام parent سے آئے گا، وہ یہاں ظاہر ہو جائے گا
}


// 🌟 یہ ہمارا main component ہے جسے React میں App کہا جاتا ہے
export default function App() {

  // 🧩 useState ایک hook ہے جو variable کو React کے اندر زندہ رکھتا ہے
  // count ایک variable ہے اور setCount وہ function ہے جو count کو بدلنے کے لیے استعمال ہوتا ہے
  const [count, setCount] = useState(0);

  // 🧭 React component ہمیشہ کچھ return کرتا ہے — یہی حصہ browser میں نظر آتا ہے
  return (
    <div className="app">
      {/* 📘 یہ ایک عنوان ہے */}
      <h2>🔄 React.memo کے بغیر</h2>

      {/* 🌈 یہ ایک خوبصورت لائن ہے جو صرف design کے لیے لگائی گئی ہے */}
      <hr className="styled-hr" />

      {/* 👧 یہاں ہم Child component کو استعمال کر رہے ہیں */}
      {/* ہم name="عائشہ" دے رہے ہیں، تو اوپر والے Child component میں یہی value جائے گی */}
      <Child name="عائشہ" />

      {/* 🖱️ یہ ایک بٹن ہے جس پر کلک کرنے سے count ایک بڑھ جائے گا */}
      {/* مثال: اگر count = 0 ہے، تو کلک کرنے پر count = 1 ہو جائے گا */}
      <button onClick={() => setCount(count + 1)}>
        کلک کریں ({count})
      </button>
    </div>
  );
}

// 💡 خلاصہ (Summary in Urdu):
// 1️⃣ App ایک parent component ہے
// 2️⃣ Child ایک چھوٹا component ہے جو صرف props سے name دکھاتا ہے
// 3️⃣ جب ہم بٹن پر کلک کرتے ہیں، count بڑھ جاتا ہے
// 4️⃣ React.memo ابھی استعمال نہیں ہوا، اس لیے ہر بار App کے render ہونے پر Child بھی دوبارہ render ہوگا
// 5️⃣ اگلے مرحلے میں ہم React.memo لگا کر دیکھیں گے کہ child دوبارہ render نہیں ہوتا 🎯

`,
                    1
                  )
                }
              >
                {copyStatus.includes("مثال 1")
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>
                  {`
// 🌸 App.jsx فائل 🌸
// یہ React کی ایک فائل ہے جس میں ہم اپنا مین (Main) کوڈ لکھتے ہیں

// 📘 Step 1: React کو Import کرنا
import React, { useState } from "react";
// React وہ لائبریری ہے جس سے ہم ویب ایپ کے چھوٹے چھوٹے حصے (Components) بناتے ہیں
// useState ایک "Hook" ہے جو ہمیں variable کو یاد رکھنے (store) کی سہولت دیتا ہے

// 🎨 Step 2: CSS فائل Import کرنا
import "./App.css";
// یہ لائن App.css فائل سے Design (رنگ، فونٹ، spacing وغیرہ) کو ہمارے App میں شامل کرتی ہے


// 👶 Step 3: ایک چھوٹا Component بنانا (Child)
// Component ایک چھوٹا function ہوتا ہے جو کچھ HTML واپس دیتا ہے
function Child({ name }) {
  // {name} ایک "prop" ہے — props وہ values ہوتی ہیں جو Parent سے Child کو بھیجی جاتی ہیں
  
  console.log("👶 Child render ہوا");
  // یہ صرف testing کے لیے ہے تاکہ ہمیں پتا چلے کہ Child دوبارہ render ہوا یا نہیں
  // render کا مطلب ہوتا ہے: Component دوبارہ دکھایا جانا

  return <h3>ہیلو، {name}!</h3>;
  // یہ لائن browser پر Text دکھاتی ہے: "ہیلو، عائشہ!"
  // {name} والی جگہ پر جو بھی نام دیا گیا ہوگا وہ لکھا جائے گا
}


// 🌟 Step 4: Main Component (App)
// یہ پورے صفحے کا مرکزی حصہ ہے جو سب کچھ اکٹھا دکھاتا ہے
export default function App() {
  // 💡 useState کا استعمال
  // count ایک number ہے جو شروع میں 0 ہوتا ہے
  // setCount ایک function ہے جو count کو بڑھانے کے لیے استعمال ہوگا
  const [count, setCount] = useState(0);

  // 🧭 Step 5: وہ HTML واپس دینا جو browser پر نظر آئے گا
  return (
    <div className="app">
      {/* 📘 یہ عنوان ہے */}
      <h2>🔄 React.memo کے بغیر</h2>
      {/* یہاں ہم بتا رہے ہیں کہ ابھی React.memo استعمال نہیں ہو رہا */}

      {/* 🌈 یہ ایک لائن ہے جو صفحے کو تھوڑا خوبصورت بنانے کے لیے لگائی گئی ہے */}
      <hr className="styled-hr" />

      {/* 👧 یہ ہمارا Child component ہے */}
      {/* ہم نے اسے name="عائشہ" دیا ہے، لہٰذا اوپر والے Child component میں یہی نام جائے گا */}
      <Child name="عائشہ" />

      {/* 🖱️ یہ ایک بٹن ہے */}
      {/* جب ہم اس پر کلک کرتے ہیں تو count ایک بڑھ جاتا ہے */}
      <button onClick={() => setCount(count + 1)}>
        {/* count کی موجودہ value یہاں بریکٹ میں نظر آئے گی */}
        کلک کریں ({count})
      </button>
    </div>
  );
}


// 💬 Step 6: خلاصہ برائے 16 سالہ لڑکے 💬
// -------------------------------------------------
// 🔹 "App" اصل component ہے (Parent Component)
// 🔹 "Child" ایک چھوٹا component ہے جو صرف نام (name) دکھاتا ہے
// 🔹 useState ایک Hook ہے جو count کو یاد رکھتا ہے
// 🔹 ہر بار button پر کلک کرنے سے count بڑھ جاتا ہے
// 🔹 لیکن چونکہ ہم نے ابھی React.memo نہیں لگایا
//    اس لیے Child بھی ہر بار دوبارہ render ہوتا ہے
// 🔹 اگلے Step میں ہم React.memo لگا کر دیکھیں گے کہ Child دوبارہ render نہیں ہوگا 💡
// -------------------------------------------------
`}
                </code>
              </pre>
            </div>
          </div>

          <div className="explanation-box">
            <h4>🧩 مسئلہ:</h4>
            <p>چاہے آپ صرف count بڑھائیں، Child دوبارہ render ہوگا 😅</p>
          </div>

          <h3>💡 حل: React.memo کے ساتھ</h3>
          <div className="code-block-container">
            <div className="code-header">
              <span>کوڈ:</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `
// 🌸 App.jsx فائل 🌸
// یہ React کی مرکزی فائل ہے — یہاں ہم React.memo کا استعمال سمجھیں گے

// 📘 Step 1: ضروری چیزیں Import کرنا
import React, { useState, memo } from "react";
// React: مرکزی لائبریری جو ہمیں components بنانے کی سہولت دیتی ہے
// useState: ایک Hook جو data یاد رکھتا ہے
// memo: React کا خاص function جو کسی component کو یاد (cache) کر لیتا ہے تاکہ وہ بار بار render نہ ہو

import "./App.css";
// 🎨 یہ لائن CSS فائل کو جوڑتی ہے تاکہ صفحہ خوبصورت لگے


// 👶 Step 2: Child Component بنانا — مگر اب memo کے ساتھ
// 🔹 ہم Child کو React.memo کے اندر لپیٹ رہے ہیں تاکہ React اسے یاد رکھ سکے
// 🔹 مطلب: اگر Child کو دیے گئے props (جیسے name) نہیں بدلتے تو یہ دوبارہ render نہیں ہوگا
const Child = memo(function Child({ name }) {
  console.log("👶 Child render ہوا");
  // یہ لائن صرف ہمیں دکھاتی ہے کہ component دوبارہ render ہوا یا نہیں
  // اگر React.memo صحیح کام کر رہا ہے تو یہ message ہر کلک پر دوبارہ نہیں دکھے گا

  return <h3>ہیلو، {name}!</h3>;
  // یہاں browser پر Text نظر آئے گا: "ہیلو، عائشہ!"
});


// 🌟 Step 3: App Component — Parent Component
export default function App() {
  // 💡 useState کا استعمال
  // count ایک variable ہے جو 0 سے شروع ہوتا ہے
  // setCount ایک function ہے جو count کو بڑھانے کے لیے استعمال ہوگا
  const [count, setCount] = useState(0);

  // 🧭 Step 4: Component جو کچھ دکھائے گا وہ return میں لکھا جاتا ہے
  return (
    <div className="app">
      {/* 🧠 یہ عنوان ہے — اب ہم React.memo کے ساتھ ہیں */}
      <h2>🧠 React.memo کے ساتھ</h2>

      {/* 🌈 یہ صرف design کے لیے ایک لائن ہے */}
      <hr className="styled-hr" />

      {/* 👧 اب ہم Child component استعمال کر رہے ہیں */}
      {/* name prop ہمیشہ ایک جیسا ہے ("عائشہ")، اس لیے React.memo کی وجہ سے Child دوبارہ render نہیں ہوگا */}
      <Child name="عائشہ" />

      {/* 🖱️ یہ بٹن ہے جو count کو ایک بڑھاتا ہے */}
      {/* لیکن اب Child دوبارہ render نہیں ہوگا کیونکہ اس کے props نہیں بدلے */}
      <button onClick={() => setCount(count + 1)}>
        کلک کریں ({count})
      </button>
    </div>
  );
}


// 💬 Step 5: خلاصہ برائے 16 سالہ لڑکے 💬
// ----------------------------------------------------------
// 🔹 React.memo ایک حفاظتی کوٹ کی طرح ہے جو component کو غیر ضروری دوبارہ render ہونے سے بچاتا ہے۔
// 🔹 اگر props (جیسے name) نہیں بدلتے تو Child دوبارہ render نہیں ہوتا۔
// 🔹 memo = "یاد رکھنا" (یعنی پرانے result کو یاد رکھ لینا تاکہ دوبارہ کام نہ کرنا پڑے)۔
// 🔹 useState count کو بدلتا ہے، لیکن چونکہ Child کے props نہیں بدلتے، اس لیے React.memo اسے دوبارہ render نہیں ہونے دیتا۔
// 🔹 React.memo performance کو بہتر بناتا ہے۔
// ----------------------------------------------------------


// 🧠 Step 6: مشاہدہ کرنے کا طریقہ
// 🔸 جب تم بٹن دباؤ گے تو count بڑھے گا (مثلاً 0 → 1 → 2)
// 🔸 مگر console میں "👶 Child render ہوا" صرف ایک بار آئے گا
// 🔸 اس کا مطلب: React.memo نے Child کو دوبارہ render ہونے سے بچا لیا ✅


// 💡 Step 7: آسان مثال
// فرض کرو تمہارے پاس ایک بچی ہے (Child Component)
// اگر تم صرف count بڑھاؤ مگر بچی کا نام "عائشہ" ہی رہے
// تو بچی (Child) دوبارہ نہیں بولے گی (render نہیں ہوگی)
// مگر اگر تم نام بدل دو — مثلاً "فاطمہ" کر دو — تو بچی دوبارہ بولے گی 😄
// ----------------------------------------------------------
`,
                    1
                  )
                }
              >
                {copyStatus.includes("مثال 1")
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>
                  {`
// 🌸 App.jsx فائل 🌸
// یہ React کی مرکزی فائل ہے۔
// یہاں ہم سمجھیں گے کہ React.memo کیسے کام کرتا ہے 
// اور یہ کسی Component کو غیر ضروری دوبارہ render ہونے سے کیسے بچاتا ہے۔

// 📘 Step 1: Import کرنا
import React, { useState, memo } from "react";
// React: اصل لائبریری جو ہمیں components بنانے کی سہولت دیتی ہے۔
// useState: ایک React Hook ہے جو یاد رکھتا ہے کہ کوئی value (مثلاً count) کتنی ہے۔
// memo: ایک خاص فنکشن جو component کو یاد رکھ لیتا ہے (cache کرتا ہے)۔

// 🎨 Step 2: CSS فائل کو شامل کرنا
import "./App.css";
// یہ لائن App.css کی فائل سے design اور style شامل کرتی ہے۔


// 👶 Step 3: Child Component بنانا
// یہ ایک چھوٹا سا Component ہے جو صرف ایک نام (name) لے کر "ہیلو" لکھتا ہے۔
// لیکن ہم نے اسے memo کے اندر رکھا ہے تاکہ اگر props نہ بدلیں تو یہ دوبارہ render نہ ہو۔

const Child = memo(function Child({ name }) {
  // {name} وہ value ہے جو Parent (App) سے آتی ہے۔
  console.log("👶 Child render ہوا");
  // یہ لائن صرف testing کے لیے ہے تاکہ ہمیں پتا چلے کہ Child دوبارہ render ہوا یا نہیں۔

  return <h3>ہیلو، {name}!</h3>;
  // یہ HTML جیسی لائن Browser میں دکھائے گی: "ہیلو، عائشہ!"
});


// 🌟 Step 4: Parent Component (App)
export default function App() {
  // useState ایک Hook ہے جو count کو محفوظ رکھتا ہے۔
  // count کی ابتدائی (starting) value 0 رکھی گئی ہے۔
  // setCount ایک function ہے جو count کو بڑھاتا ہے۔
  const [count, setCount] = useState(0);

  // App کے اندر وہ سب کچھ لکھا جاتا ہے جو Browser پر نظر آئے گا۔
  return (
    <div className="app">
      {/* 🧠 یہ عنوان ہے تاکہ user کو پتا چلے کہ ہم React.memo والا version دیکھ رہے ہیں */}
      <h2>🧠 React.memo کے ساتھ</h2>

      {/* 🌈 یہ صرف ایک خوبصورت لائن ہے، design کے لیے */}
      <hr className="styled-hr" />

      {/* 👧 یہ ہمارا Child component ہے۔ */}
      {/* ہم اسے name="عائشہ" دے رہے ہیں، اس لیے یہ ہمیشہ "ہیلو، عائشہ!" دکھائے گا۔ */}
      {/* چونکہ name ہر بار ایک ہی ہے، React.memo اسے دوبارہ render نہیں کرے گا۔ */}
      <Child name="عائشہ" />

      {/* 🖱️ یہ ایک بٹن ہے۔ */}
      {/* جب ہم اس پر کلک کرتے ہیں تو count ایک بڑھ جاتا ہے (مثلاً 0 → 1 → 2 → 3) */}
      {/* لیکن اب فرق یہ ہے کہ Child دوبارہ render نہیں ہوتا کیونکہ اس کے props نہیں بدلے۔ */}
      <button onClick={() => setCount(count + 1)}>
        کلک کریں ({count})
      </button>
    </div>
  );
}


// 💡 Step 5: خلاصہ (Summary for 16-year-old girl)
// ------------------------------------------------------------
// 🔹 React.memo ایک جادوئی چیز ہے جو component کو "یاد" رکھتی ہے۔
// 🔹 اگر کسی component کے اندر آنے والے props (مثلاً name) نہ بدلیں،
//     تو React.memo اسے دوبارہ render نہیں ہونے دیتا۔
// 🔹 Render ہونے کا مطلب ہے دوبارہ دکھایا جانا۔
// 🔹 useState count کو بڑھاتا ہے، لیکن چونکہ name ہمیشہ "عائشہ" ہے،
//     اس لیے Child دوبارہ render نہیں ہوتا۔
// 🔹 اس سے website کی رفتار (performance) بہتر ہوتی ہے۔
// ------------------------------------------------------------


// 🧠 Step 6: سمجھنے کے لیے چھوٹی مثال
// فرض کرو تمہارے پاس ایک بچی ہے جس کا نام "عائشہ" ہے۔
// ہر بار تم اسے "ہیلو عائشہ" کہتی ہو۔
// اگر تم صرف اپنی انگلیوں پر counting کر رہی ہو (count بڑھا رہی ہو)
// تو "عائشہ" کو دوبارہ بولنے کی ضرورت نہیں — کیونکہ اس کا نام تو وہی ہے!
// React.memo بھی یہی کرتا ہے ❤️
// ------------------------------------------------------------


// 🔍 Step 7: Console میں دیکھنے والا نتیجہ
// پہلی بار صفحہ کھلے گا → "👶 Child render ہوا" نظر آئے گا۔
// پھر جتنی بار بھی تم بٹن دباؤ → صرف count بڑھے گا، مگر Child دوبارہ render نہیں ہوگا۔
// ------------------------------------------------------------
`}
                </code>
              </pre>
            </div>
          </div>

          <div className="explanation-box">
            <h4>💬 وضاحت:</h4>
            <p>
              اب جب آپ button دبائیں گے، صرف count بدلے گا — Child دوبارہ render
              نہیں ہوگا۔
            </p>
          </div>
        </div>
      </div>

      {/* 🌷 2️⃣ useCallback Section */}
      <div className="section-card">
        <h2 className="section-title">
          🌷 2️⃣ useCallback — Function کو یاد رکھنا
        </h2>
        <p className="section-text">
          ہر بار component render ہوتا ہے تو React نئی function reference بناتا
          ہے۔ React.memo کو لگتا ہے props بدل گئے! یہاں useCallback() بچانے آتا
          ہے۔ 🦸‍♀️
        </p>

        <div className="demo-section">
          <h3>🧁 مثال 2: useCallback کے بغیر</h3>
          <div className="code-block-container">
            <div className="code-header">
              <span>کوڈ:</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    // 📘 React کو امپورٹ کر رہے ہیں تاکہ ہم React components استعمال کر سکیں
                    // useState ایک React hook ہے جو ہمیں variable بنانے دیتا ہے جو بدل سکتا ہے
                    `import React, { useState } from "react";
import "./App.css"; // 🎨 یہ لائن ہماری CSS فائل سے ڈیزائن لاتی ہے

// 🔹 یہ ایک چھوٹا سا component ہے جسے Button کہا گیا ہے
// React.memo کا مطلب ہے کہ اگر اس کے اندر دیے گئے props (onClick, label) نہیں بدلیں گے
// تو یہ component دوبارہ render نہیں ہوگا — یعنی React اسے یاد رکھے گا
const Button = React.memo(({ onClick, label }) => {
  // 👇 یہ لائن صرف console میں دکھانے کے لیے ہے تاکہ ہمیں پتہ چلے کہ بٹن کب render ہو رہا ہے
  console.log("🔘 Button render ہوا:", label);

  // 💡 یہ اصل بٹن ہے جو ہم اسکرین پر دیکھیں گے
  // جب کوئی اس پر کلک کرے گا تو onClick والا فنکشن چلے گا
  // اور بٹن پر جو لفظ label میں دیا گیا ہے وہ لکھا نظر آئے گا
  return <button onClick={onClick}>{label}</button>;
});

// 🔸 یہ ہمارا main component ہے جسے App کہا گیا ہے
// یہ پورا صفحہ (screen) دکھانے کا ذمہ دار ہے
export default function App() {
  // useState(0) کا مطلب ہے کہ ہم ایک count variable بنا رہے ہیں جس کی شروعات 0 سے ہو رہی ہے
  // setCount ایک فنکشن ہے جو count کو بڑھانے یا بدلنے کے لیے استعمال ہوگا
  const [count, setCount] = useState(0);

  // 📈 یہ ایک چھوٹا سا فنکشن ہے جو count کو 1 سے بڑھاتا ہے
  // جب ہم بٹن دبائیں گے تو count ایک بڑھ جائے گا
  const increment = () => setCount(count + 1);

  // 🧱 یہ حصہ وہ ہے جو ویب پیج پر دکھائی دیتا ہے (JSX حصہ)
  return (
    <div className="app">
      {/* 🔰 یہ عنوان ہے جو صفحے پر دکھے گا */}
      <h2>🚫 useCallback کے بغیر</h2>

      {/* ایک سیدھی لائن جو صرف خوبصورتی کے لیے لگائی گئی ہے */}
      <hr className="styled-hr" />

      {/* 📊 یہ موجودہ count دکھاتا ہے */}
      <p>Count: {count}</p>

      {/* 🖱️ یہ ہمارا Button component ہے جسے ہم نیچے دکھا رہے ہیں */}
      {/* onClick کے اندر increment فنکشن دیا گیا ہے اور label میں اردو لفظ "اضافہ کریں" */}
      <Button onClick={increment} label="اضافہ کریں" />
    </div>
  );
}`,
                    2
                  )
                }
              >
                {copyStatus.includes("مثال 2")
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{`// 🌸 یہ ایک React فائل ہے جو "useState" استعمال کر کے ایک Counter App بناتی ہے۔

import React, { useState } from "react"; // 🔹 React اور useState کو import کیا گیا تاکہ state استعمال کی جا سکے
import "./App.css"; // 🎨 یہ CSS فائل ہے جس میں style لکھے گئے ہوں گے

// 🔘 Button ایک الگ چھوٹا component ہے
// React.memo استعمال کیا گیا ہے تاکہ یہ component بار بار غیر ضروری render نہ ہو
const Button = React.memo(({ onClick, label }) => {
  // 👇 یہ line کنسول میں بتائے گی کہ بٹن کب render ہوا
  console.log("🔘 Button render ہوا:", label);

  // 📍 یہ اصل بٹن ہے، جس پر click کرنے سے onClick والا function چلے گا
  return <button onClick={onClick}>{label}</button>;
});

// ⚡ اصل App component
export default function App() {
  // 🔹 count نام کا ایک variable بنایا گیا ہے جو state رکھتا ہے (شروع میں 0)
  // setCount ایک function ہے جو count کو بدلتا ہے
  const [count, setCount] = useState(0);

  // 🧮 یہ function count میں +1 کرے گا جب بھی بٹن دبائیں گے
  const increment = () => setCount(count + 1);

  // 💠 اب return والے حصے میں JSX لکھا گیا ہے جو browser میں دکھائی دے گا
  return (
    <div className="app">
      {/* 🔹 یہ سرخی (heading) بتاتی ہے کہ یہ example useCallback کے بغیر ہے */}
      <h2>🚫 useCallback کے بغیر</h2>

      {/* 🌈 یہ ایک لائن ہے جو تھوڑا سا design بناتی ہے */}
      <hr className="styled-hr" />

      {/* 📊 یہاں count کی موجودہ value دکھائی جائے گی */}
      <p>Count: {count}</p>

      {/* 🔘 Button component کو یہاں استعمال کیا گیا ہے */}
      {/* جب Button دبائیں گے تو increment function چلے گا */}
      <Button onClick={increment} label="اضافہ کریں" />
    </div>
  );
}
`}</code>
              </pre>
            </div>
          </div>

          <div className="explanation-box">
            <h4>🔎 مسئلہ:</h4>
            <p>
              ہر render پر increment دوبارہ بن جاتا ہے → Button دوبارہ render
              ہوتا ہے۔
            </p>
          </div>

          <h3>🧩 حل: useCallback کے ساتھ</h3>
          <div className="code-block-container">
            <div className="code-header">
              <span>کوڈ:</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `(

// 🌸 یہ کوڈ React میں useCallback کا استعمال سمجھانے کے لیے لکھا گیا ہے۔  
// ہر لائن کے ساتھ آسان اردو میں وضاحت دی گئی ہے تاکہ نیا سیکھنے والا بھی سمجھ سکے۔  

import React, { useState, useCallback } from "react";  
// 👆 یہاں ہم React سے دو چیزیں لا رہے ہیں:  
// useState ➤ کسی ویلیو کو یاد رکھنے کے لیے۔  
// useCallback ➤ کسی function کو یاد رکھنے کے لیے تاکہ وہ بار بار دوبارہ نہ بنے۔  

import "./App.css";  
// 🎨 یہ فائل صرف صفحے کو خوبصورت بنانے کے لیے ہے (CSS styling)۔  

// 🧩 یہ ایک چھوٹا سا component ہے جس کا نام Button ہے۔  
// React.memo ➤ یہ React کو کہتا ہے کہ اگر اس component کے data (props) میں کوئی تبدیلی نہ ہو  
// تو اسے دوبارہ render مت کرو — مطلب کہ بیکار میں دوبارہ نہ بناؤ۔  
const Button = React.memo(({ onClick, label }) => {  
  console.log("🔘 Button render ہوا:", label);  
  // 💬 یہ لائن صرف console میں بتاتی ہے کہ بٹن کب دوبارہ render ہو رہا ہے۔  

  return <button onClick={onClick}>{label}</button>;  
  // 🖱️ جب user بٹن دبائے گا تو onClick والا function چلے گا۔  
});  

// ⚙️ یہ اصل component ہے جسے ہم App کہتے ہیں۔  
// پورا صفحہ اسی App کے ذریعے ظاہر ہوتا ہے۔  
export default function App() {  
  const [count, setCount] = useState(0);  
  // 📊 count ایک variable ہے جو نمبر رکھتا ہے۔  
  // setCount وہ function ہے جو count کو بدلتا ہے۔  
  // شروع میں count کی ویلیو 0 رکھی گئی ہے۔  

  // ✅ useCallback کے ذریعے ہم ایک function کو یاد رکھ رہے ہیں۔  
  // یعنی یہ function ہر بار دوبارہ نہیں بنے گا —  
  // بلکہ صرف ایک بار ہی memory میں محفوظ رہے گا جب تک dependency نہ بدلے۔  
  const increment = useCallback(() => {  
    setCount((prev) => prev + 1);  
    // 🔢 setCount کے ذریعے ہم count کی پرانی ویلیو (prev) لے کر اس میں +1 کا اضافہ کر دیتے ہیں۔  
  }, []);  
  // 🧠 خالی [] کا مطلب: یہ function صرف ایک بار ہی بنے گا اور ہر بار وہی محفوظ function چلے گا۔  

  // 🧱 اب ہم صفحے کا حصہ return کر رہے ہیں — یہاں JSX استعمال ہو رہا ہے (HTML جیسا کوڈ React کے اندر)۔  
  return (  
    <div className="app">  
      {/* 🔰 یہ سرخی (heading) ہے جو بتاتی ہے کہ ہم useCallback استعمال کر رہے ہیں۔ */}  
      <h2>✅ useCallback کے ساتھ</h2>  

      {/* ✨ یہ ایک خوبصورت لائن (hr) ہے جو تھوڑا design بناتی ہے۔ */}  
      <hr className="styled-hr" />  

      {/* 📟 یہاں count کی موجودہ ویلیو دکھائی جاتی ہے۔ */}  
      <p>Count: {count}</p>  

      {/* 🔘 اب ہم Button component استعمال کر رہے ہیں۔  
          اس کے دو props ہیں:  
          1️⃣ onClick ➤ بٹن دبانے پر increment function چلے گا۔  
          2️⃣ label ➤ بٹن پر لکھا ہوا ٹیکسٹ "اضافہ کریں" دکھائے گا۔ */}  
      <Button onClick={increment} label="اضافہ کریں" />  
    </div>  
  );  
}  


)`,
                    2
                  )
                }
              >
                {copyStatus.includes("مثال 2")
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{`// 🌸 یہ کوڈ React میں useCallback کا تصور سکھانے کے لیے ہے۔  
// ہم آسان ترین اردو میں ہر لائن کی وضاحت کریں گے تاکہ ایک 16 سالہ طالبے علم بھی سمجھ سکے۔  

import React, { useState, useCallback } from "react";  
// 👆 یہاں ہم React سے دو چیزیں لا رہے ہیں:  
// 1️⃣ useState → کسی ویلیو (value) کو یاد رکھنے کے لیے۔  
// 2️⃣ useCallback → کسی function کو یاد رکھنے کے لیے تاکہ وہ بار بار دوبارہ نہ بنے۔  

import "./App.css";  
// 🎨 یہ CSS فائل ہے، جو صرف صفحہ خوبصورت بنانے کے لیے ہے۔  

// 🧩 یہ ایک چھوٹا سا component ہے جس کا نام Button رکھا گیا ہے۔  
// React.memo ایک خاص function ہے جو کارکردگی بہتر بناتا ہے۔  
// ⚡ مطلب یہ کہ اگر بٹن کے data (props) میں کوئی تبدیلی نہ ہو  
// تو React دوبارہ اسے render نہیں کرے گا۔  

const Button = React.memo(({ onClick, label }) => {  
  console.log("🔘 Button render ہوا:", label);  
  // 💬 یہ لائن صرف console میں بتاتی ہے کہ بٹن دوبارہ بنا (render ہوا) یا نہیں۔  

  return <button onClick={onClick}>{label}</button>;  
  // 🖱️ جب کوئی اس بٹن پر کلک کرے گا تو onClick والا function چلے گا۔  
  // {label} کا مطلب ہے کہ بٹن پر جو ٹیکسٹ بھیجا گیا ہے، وہ دکھایا جائے گا۔  
});  

// ⚙️ یہ اصل App component ہے، جہاں سارا صفحہ بنایا جا رہا ہے۔  
export default function App() {  
  const [count, setCount] = useState(0);  
  // 📊 useState ایک خاص React hook ہے۔  
  // count → موجودہ نمبر یا ویلیو کو رکھتا ہے۔  
  // setCount → count کو بدلنے کے لیے استعمال ہوتا ہے۔  
  // (0) → مطلب شروع میں count کی ویلیو صفر ہے۔  

  // ✅ useCallback کے ذریعے ہم function کو یاد رکھ رہے ہیں۔  
  // 🧠 اس سے فائدہ یہ ہے کہ جب بھی App دوبارہ render ہو،  
  // یہ function دوبارہ نہیں بنے گا — بلکہ پرانا محفوظ function ہی استعمال ہو گا۔  
  const increment = useCallback(() => {  
    setCount((prev) => prev + 1);  
    // 🔢 یہاں ہم count کی پرانی ویلیو (prev) لے کر اس میں +1 کا اضافہ کر دیتے ہیں۔  
    // مثال: اگر count = 5 ہو تو یہ 6 کر دے گا۔  
  }, []);  
  // ⚙️ خالی [] کا مطلب ہے کہ یہ function صرف ایک بار memory میں بنے گا،  
  // بعد میں React اسے دوبارہ نہیں بنائے گا۔  

  // 💻 اب ہم React کا JSX حصہ return کر رہے ہیں (یعنی صفحے کی ظاہری شکل)۔  
  return (  
    <div className="app">  
      {/* 🧠 یہ heading بتا رہی ہے کہ یہ مثال useCallback کے ساتھ ہے۔ */}  
      <h2>✅ useCallback کے ساتھ</h2>  

      {/* ✨ یہ ایک سیدھی لائن ہے جو تھوڑا design دکھاتی ہے۔ */}  
      <hr className="styled-hr" />  

      {/* 📟 یہ لائن count کی موجودہ ویلیو دکھاتی ہے۔ */}  
      <p>Count: {count}</p>  

      {/* 🔘 اب ہم اپنا Button component استعمال کر رہے ہیں۔  
          ➤ onClick = increment function چلے گا جب بٹن دبایا جائے۔  
          ➤ label = "اضافہ کریں" یہ بٹن پر لکھا ہوا الفاظ ہیں۔ */}  
      <Button onClick={increment} label="اضافہ کریں" />  
    </div>  
  );  
}  
`}</code>
              </pre>
            </div>
          </div>

          <div className="explanation-box">
            <h4>💡 وضاحت:</h4>
            <p>
              اب Button صرف پہلی بار render ہوگا، کیونکہ function اب "یاد" ہے،
              دوبارہ نہیں بنا۔
            </p>
          </div>
        </div>
      </div>

      {/* 💎 3️⃣ useMemo Section */}
      <div className="section-card">
        <h2 className="section-title">💎 3️⃣ useMemo — حساب یاد رکھنا</h2>
        <p className="section-text">
          جب کسی complex حساب یا loop کو بار بار چلانا ہو، تو useMemo مدد دیتا
          ہے۔ یہ صرف تب دوبارہ حساب کرتا ہے جب dependency بدلے۔
        </p>

        <div className="demo-section">
          <h3>🍰 مثال 3: useMemo کے ساتھ مہنگا حساب</h3>
          <div className="code-block-container">
            <div className="code-header">
              <span>کوڈ:</span>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    `// 🌸 یہ React کا کوڈ "useMemo" سمجھانے کے لیے بنایا گیا ہے۔  
// useMemo کا مقصد ہے کہ جب کوئی بھاری (سست) حساب بار بار نہ چلے،  
// بلکہ React اسے یاد رکھ لے۔  
// 👧 یہ وضاحت ایسے انداز میں ہے کہ 16 سالہ طالبہ بھی آسانی سے سمجھ سکے۔

import React, { useState, useMemo } from "react";  
// 👆 یہاں ہم React سے دو خاص چیزیں لا رہے ہیں:  
// 1️⃣ useState → کسی ویلیو کو یاد رکھنے کے لیے۔  
// 2️⃣ useMemo → کسی حساب یا calculation کو یاد رکھنے کے لیے تاکہ وہ بار بار نہ ہو۔  

import "./App.css";  
// 🎨 یہ CSS فائل ہے، صرف صفحہ خوبصورت بنانے کے لیے۔

// ⚙️ یہ ایک فرضی سست (Slow) function ہے جو نمبر کو دو سے ضرب دیتا ہے۔  
// لیکن ہم نے اس میں ایک بہت بڑا loop ڈالا ہے تاکہ یہ آہستہ چلے۔  
// مقصد یہ ہے کہ دیکھ سکیں useMemo اس سست عمل کو کیسے تیز بناتا ہے۔
function slowFunction(num) {
  console.log("⏳ بھاری حساب ہو رہا ہے...");  
  for (let i = 0; i < 1000000000; i++) {} // 🐢 فرضی دیر کرنے والا عمل  
  return num * 2; // 🔢 نمبر کو دو سے ضرب دینا  
}

export default function App() {
  // 🧠 یہاں ہم دو state بنا رہے ہیں:
  const [number, setNumber] = useState(1);  
  // number → ان پٹ میں جو نمبر لکھا جائے گا، وہ یہاں محفوظ ہوگا۔  
  // setNumber → اسی number کو بدلنے کے لیے استعمال ہوگا۔

  const [theme, setTheme] = useState("light");  
  // theme → صفحے کا رنگ ہلکا (light) یا گہرا (dark) رکھنے کے لیے۔  
  // setTheme → theme کو بدلنے کے لیے۔

  // 🎯 useMemo کا مقصد ہے کہ slowFunction صرف تبھی چلے جب number بدلے۔  
  // اگر theme بدلے، تو React دوبارہ slowFunction نہ چلائے — کیونکہ number نہیں بدلا۔
  const doubleNumber = useMemo(() => {
    return slowFunction(number);  
  }, [number]);  
  // 👆 [number] dependency array ہے — یعنی یہ حساب صرف number کے بدلنے پر دوبارہ چلے گا۔  

  // 🎨 themeStyles ایک object ہے جس سے ہم صفحے کا رنگ بدل رہے ہیں۔  
  const themeStyles = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#212529",  
    // اگر theme light ہے تو پس منظر ہلکا ہوگا، ورنہ گہرا۔  
    color: theme === "light" ? "#212529" : "#f8f9fa",  
    // اگر theme light ہے تو متن گہرا، ورنہ سفید۔  
    padding: "20px", // چاروں طرف 20px کا فاصلہ  
    borderRadius: "10px", // کناروں کو تھوڑا گول کرنا  
  };

  // 💻 نیچے return والا حصہ دراصل صفحے کی ظاہری شکل (UI) دکھاتا ہے۔  
  return (
    <div className="app">
      {/* عنوان (heading) */}
      <h2>⚡ useMemo Example</h2>
      <hr className="styled-hr" /> {/* ڈیزائن کے لیے ایک لائن */}

      {/* 🔢 یہ ایک ان پٹ باکس ہے جہاں نمبر لکھا جائے گا۔ */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        // جب بھی لڑکے نمبر بدلے گی، setNumber اسے نیا نمبر دے دے گا۔  
      />

      {/* 🎨 یہ بٹن تھیم بدلنے کے لیے ہے۔  
          جب دبائیں گے تو light → dark یا dark → light ہو جائے گا۔ */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        تھیم بدلیں
      </button>

      {/* 📦 یہ وہ حصہ ہے جو نتیجہ دکھائے گا۔ */}
      <div style={themeStyles}>
        نتیجہ: {doubleNumber}
        {/* یہاں slowFunction سے حاصل کردہ جواب (num * 2) دکھایا جاتا ہے۔ */}
      </div>
    </div>
  );
}
`,
                    3
                  )
                }
              >
                {copyStatus.includes("مثال 3")
                  ? "کاپی ہوگیا ✅"
                  : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code">
                <code>{`// 🧠 React سے ضروری چیزیں import کر رہے ہیں
// useState → ڈیٹا محفوظ کرنے کے لیے
// useMemo → یاد رکھنے (cache کرنے) کے لیے تاکہ غیر ضروری بار بار حساب نہ ہو
import React, { useState, useMemo } from "react";
import "./App.css"; // 🎨 CSS فائل جہاں ڈیزائن موجود ہے

// 🐢 ایک "سست" function جو فرضی طور پر بھاری حساب کرتا ہے
// مطلب یہ بہت دیر لگاتا ہے تاکہ فرق محسوس ہو
function slowFunction(num) {
  console.log("⏳ بھاری حساب ہو رہا ہے...");
  // یہ لوپ صرف وقت ضائع کرنے کے لیے ہے تاکہ کمپیوٹر سوچتا ہوا لگے 😅
  for (let i = 0; i < 1000000000; i++) {}
  // آخر میں نمبر کو دوگنا کر کے واپس دے رہا ہے
  return num * 2;
}

// 🌟 اصل App component شروع ہو رہا ہے
export default function App() {
  // 🧩 number نامی state بنائی جو input کے value کو محفوظ کرے گی
  const [number, setNumber] = useState(1);

  // 🌗 theme نامی state جو light یا dark تھیم کو محفوظ کرے گی
  const [theme, setTheme] = useState("light");

  // 🎯 useMemo → React کو کہہ رہا ہے:
  // "اگر number نہیں بدلا، تو دوبارہ slowFunction مت چلاؤ"
  // اس سے وقت اور کمپیوٹر کی محنت بچتی ہے
  const doubleNumber = useMemo(() => {
    // یہ function صرف number بدلنے پر دوبارہ چلے گا
    return slowFunction(number);
  }, [number]); // ← dependency array

  // 🎨 تھیم کے لحاظ سے رنگ بدلنے کے لیے object
  // اگر theme = light → تو پس منظر ہلکا اور text کالا
  // اگر theme = dark → تو پس منظر کالا اور text ہلکا
  const themeStyles = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#212529",
    color: theme === "light" ? "#212529" : "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
  };

  // 👇 return کے اندر وہ سب کچھ جو اسکرین پر نظر آئے گا
  return (
    <div className="app">
      {/* 🔰 ہیڈنگ */}
      <h2>⚡ useMemo Example</h2>
      <hr className="styled-hr" />

      {/* 🔢 input باکس جہاں user نمبر لکھے گا */}
      <input
        type="number"
        value={number} // ← input کی موجودہ value
        // جب user نیا نمبر لکھے تو state بدل جائے
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      {/* 🎨 تھیم بدلنے کا بٹن */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        تھیم بدلیں
      </button>

      {/* 💡 نتیجہ دکھانے والا حصہ (theme کے رنگوں کے ساتھ) */}
      <div style={themeStyles}>
        نتیجہ: {doubleNumber}
      </div>
    </div>
  );
}
`}</code>
              </pre>
            </div>
          </div>

          <div className="explanation-box">
            <h4>🔍 وضاحت:</h4>
            <p>
              useMemo نے بھاری حساب صرف number کے بدلنے پر دوبارہ کیا۔ Theme
              بدلنے سے دوبارہ حساب نہیں ہوا۔
            </p>
          </div>
        </div>
      </div>

      {/* 📘 Summary Box */}
      <div className="summary-box">
        <h3>📘 خلاصہ — React.memo، useCallback، useMemo</h3>
        <hr className="styled-hr" />
        <ul>
          <li>
            <strong>React.memo:</strong> Component دوبارہ render نہیں ہوگا اگر
            props وہی رہیں۔
          </li>
          <li>
            <strong>useCallback:</strong> Function کو یاد رکھتا ہے تاکہ
            React.memo والے components دوبارہ render نہ ہوں۔
          </li>
          <li>
            <strong>useMemo:</strong> بھاری حساب کو cache کرتا ہے تاکہ بار بار
            repeat نہ ہو۔
          </li>
        </ul>
        <p className="summary-note">
          💡 یاد رکھیں — یہ تینوں "یادداشت" سے متعلق ہیں! ان سے performance
          بہتر، UI smooth اور کوڈ smart بنتا ہے۔
        </p>
      </div>

      {/* Syntax Section */}
      <div className="section-card">
        <h3 className="section-title text-break">
          📖 Memorization Hooks کا بنیادی syntax
        </h3>
        <div className="code-block-container">
          <div className="code-header">
            <span className="text-break">Syntax:</span>
            <button className="copy-btn" onClick={copySyntaxCode}>
              {copyStatus === "Syntax کوڈ کوپي ہو گیا!"
                ? "کاپی ہوگیا ✅"
                : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-wrapper">
            <pre className="english-code">
              <code>{`// 🌸 React.memo, useCallback, useMemo — ایک ساتھ سمجھنے کا آسان طریقہ 🌸

// فرض کرو تم ایک بڑی ویب ایپ بنا رہے ہو۔
// React ہر بار تمہارے Component کو دوبارہ render کرتا ہے
// تاکہ نئی چیزیں دکھا سکے۔
// لیکن اگر Component یا Function میں کچھ بدلا ہی نہیں،
// تو بار بار دوبارہ render کرنا وقت کا ضیاع ہے ⏳

// اب آؤ دیکھیں تین دوست کیسے مدد کرتے ہیں 👇

// 🩵 React.memo:
// یہ پورے Component کو یاد رکھ لیتا ہے۔
// مطلب: اگر Component کے props نہیں بدلے تو React اسے دوبارہ render نہیں کرے گا۔
// یوں App ہلکی اور تیز چلتی ہے۔

const MyComponent = memo(function MyComponent(props) {
  // یہاں تمہارا Component کا code ہوگا۔
  // React.memo اسے یاد رکھے گا جب تک props نہ بدلیں۔
});


// 💛 useCallback:
// یہ کسی Function کو یاد رکھتا ہے۔
// جب dependency array میں کوئی چیز نہ بدلے تو React نیا function نہیں بناتا۔
// یہ performance بہتر بناتا ہے، خاص طور پر جب وہ function کسی child component کو بھیجا جائے۔

const memoizedCallback = useCallback(() => {
  // یہاں وہ function لکھو جو بار بار استعمال ہو رہا ہے۔
  // useCallback کہتا ہے: “میں اسے یاد رکھ لوں گا جب تک ضرورت نہ پڑے۔”
}, [dependencies]);


// 💜 useMemo:
// یہ کسی "calculation" یا "result" کو یاد رکھتا ہے۔
// جب کوئی بڑی گنتی یا مہنگی (heavy) calculation ہو، useMemo اسے cache کر لیتا ہے۔
// صرف تب دوبارہ حساب لگائے گا جب dependency بدلے۔

const memoizedValue = useMemo(() => {
  // یہاں تم کوئی expensive calculation لکھو گے۔
  // React اسے یاد رکھے گا تاکہ ہر بار دوبارہ حساب نہ کرنا پڑے۔
  return heavyMathWork();
}, [dependencies]);


// 🌷 خلاصہ:
// 🔹 React.memo → پورا Component یاد رکھتا ہے۔
// 🔹 useCallback → Function یاد رکھتا ہے۔
// 🔹 useMemo → Calculation کا Result یاد رکھتا ہے۔
//
// تینوں کا مقصد ایک ہی ہے: "React کو کم کام کروانا اور App کو تیز بنانا۔" 🚀
`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copyStatus && <div className="copy-notification">✅ {copyStatus}</div>}
    </div>
  );
};

export default Chapter16;
