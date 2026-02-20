import React, { useState } from "react";
import "../App.css";

function Chapter3() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const viteCode = `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`;

  const fragmentExample1 = `function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}`;

  const fragmentExample2 = `function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </React.Fragment>
  );
}`;

  const fragmentExample3 = `function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}`;

  const jsxExample = `<div className="container"></div>
<label htmlFor="name">Name</label>
<img src="logo.png" alt="logo" />
<input type="text" />
<h1>{5 + 5}</h1>   // output: 10`;

  const finalExample = `function App() {
  return (
    <>
      <h1 className="title">میری پہلی React ایپ</h1>
      <p>یہ ایک پیراگراف ہے جو JSX میں لکھا گیا ہے۔</p>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </>
  );
}`;

  return (
    <div className="chapter-container">
      {/* Chapter Header */}
      <div className="chapter-header">
        <h1 style={{ textAlign: "right", color: "blue" }} className="chapter-title-main urdu-heading" dir="rtl" >Chapter 3. Vite بنیاد پر React سیٹ اپ — ایک مختصر رہنما</h1>
        <div className="chapter-duration">⏱️ تخمینی وقت: 20 منٹ</div>
        <div className="chapter-number-large" style={{ marginRight: '20px' }}>باب 3</div>
      </div>

      {/* Learning Outcomes */}
      <div className="learning-outcomes urdu-text">
        <h3 className="chapter-subtitle">📚 اس باب میں آپ سیکھیں گے:</h3>
        <ul>
          <li>Vite کے ساتھ React پروجیکٹ شروع کرنا</li>
          <li>React Fragments کا استعمال</li>
          <li>JSX سینٹیکس اور قواعد</li>
          <li>React میں HTML لکھنے کا صحیح طریقہ</li>
          <li>عملی مثالیں اور کوڈ نمونے</li>
        </ul>
      </div>

      {/* Main Content Card */}
      <div className="card section-card">
        <h3 className="section-title">Vite کے ساتھ React پروجیکٹ شروع کریں</h3>
        
        <div className="section-text urdu-text">
          <p>
            <strong>Vite</strong> وہ راستہ ہے جسے React ٹیم اور کمیونٹی تجویز کر رہی ہے: CRA کی جگہ Vite استعمال کرنا۔
          </p>
          
          <div className="info-box">
            <p>
              <strong>نوٹ:</strong> Vite بہت تیز، جدید اور ہلکا build tool ہے جو React پروجیکٹس کے لیے بہترین ہے۔
            </p>
          </div>

          {/* Vite Setup Code */}
          <div className="code-section">
            <div className="code-header">
              <span>Vite React پروجیکٹ شروع کرنے کا طریقہ</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(viteCode, "Vite Setup")}
              >
                {copiedCode === "Vite Setup" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{viteCode}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          <p className="mt-3">
            یہ کمانڈ آپ کو ایک بہت ہلکا، جدید، تیز React project base تیار کرے گی۔
          </p>
        </div>

        {/* React Fragments Section */}
        <div className="lesson-section urdu-text">
          <h4 className="section-title">🔹 React Fragments کیا ہیں؟</h4>
          
          <div className="section-text">
            <p>
              React میں جب ہم JSX لکھتے ہیں تو اکثر ہمیں multiple elements واپس کرنے کی ضرورت پڑتی ہے۔ لیکن React کا ایک رول ہے کہ:
            </p>
            
            <ul>
              <li>ہر component صرف ایک parent element واپس کر سکتا ہے۔</li>
            </ul>
            
            <p>
              اگر ہم ایک سے زیادہ &lt;div&gt; یا &lt;p&gt; واپس کرنا چاہیں تو ہمیں انہیں کسی container میں wrap کرنا پڑتا ہے۔
            </p>
          </div>

          {/* Example Without Fragment */}
          <h4 className="chapter-subtitle2">Example بغیر Fragment کے:</h4>
          
          <div className="code-section">
            <div className="code-header">
              <span>بغیر Fragment کے کوڈ</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(fragmentExample1, "Without Fragment")}
              >
                {copiedCode === "Without Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{fragmentExample1}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          <p>
            اوپر ہم نے &lt;div&gt; استعمال کیا ہے صرف اس لیے کہ React کو ایک parent چاہیے۔ لیکن بار بار فالتو &lt;div&gt; بنانے کی بجائے ہم Fragment استعمال کر سکتے ہیں۔
          </p>

          {/* Fragment Usage */}
          <h4 className="section-title">🔹 Fragment استعمال کرنے کا طریقہ</h4>
          <p>Fragment دو طریقوں سے لکھ سکتے ہیں:</p>

          {/* React.Fragment Example */}
          <h5 className="chapter-subtitle2">1) &lt;React.Fragment&gt; استعمال کر کے:</h5>
          
          <div className="code-section">
            <div className="code-header">
              <span>React.Fragment کا استعمال</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(fragmentExample2, "React.Fragment")}
              >
                {copiedCode === "React.Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{fragmentExample2}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          {/* Shortcut Fragment Example */}
          <h5 className="chapter-subtitle2">2) شارٹ کٹ &lt;&gt; &lt;/&gt; استعمال کر کے:</h5>
          
          <div className="code-section">
            <div className="code-header">
              <span>شارٹ کٹ Fragment</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(fragmentExample3, "Shortcut Fragment")}
              >
                {copiedCode === "Shortcut Fragment" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{fragmentExample3}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          <div className="success-box">
            <p>
              <strong>نوٹ:</strong> شارٹ کٹ &lt;&gt; &lt;/&gt; سب سے زیادہ استعمال ہوتا ہے کیونکہ یہ مختصر اور صاف ہے۔
            </p>
          </div>

          {/* Fragment Rules */}
          <div className="explanation-section">
            <h4>🔹 Fragments کے رولز</h4>
            <div className="explanation-box">
              <ul>
                <li>Fragment خود DOM (HTML structure) میں extra tag نہیں بناتا۔</li>
                <li>Fragment صرف elements کو گروپ کرنے کے لیے ہوتا ہے۔</li>
                <li>Fragment کو attributes نہیں دیے جا سکتے (سوائے key جب list میں استعمال کریں)</li>
                <li>Fragment استعمال کرنے سے اضافی &lt;div&gt; tags سے بچا جا سکتا ہے</li>
              </ul>
            </div>
          </div>
        </div>

        {/* JSX Section */}
        <div className="lesson-section urdu-text">
          <h4 className="section-title">🔹 React میں HTML (JSX) کیسے لکھیں؟</h4>
          
          <div className="section-text">
            <p>
              React میں HTML کو <span className="coding">JSX</span> کہا جاتا ہے۔ JSX بالکل HTML جیسا ہے مگر کچھ rules ہیں:
            </p>
            
            <ul>
              <li><span className="coding">class</span> کی جگہ <span className="coding">className</span> لکھیں۔</li>
              <li><span className="coding">for</span> کی جگہ <span className="coding">htmlFor</span> لکھیں۔</li>
              <li>ہر tag properly بند ہونا چاہیے۔</li>
              <li>JavaScript code ہمیشہ <span className="coding">{"{ }"}</span> میں لکھیں۔</li>
              <li>Inline styles object کی شکل میں لکھیں: <span className="coding">{"style={{color: 'red'}}"}</span></li>
            </ul>
          </div>

          {/* JSX Example */}
          <h5 className="chapter-subtitle2">JSX کی مثالیں:</h5>
          
          <div className="code-section">
            <div className="code-header">
              <span>JSX Syntax Examples</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(jsxExample, "JSX Example")}
              >
                {copiedCode === "JSX Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{jsxExample}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          {/* Comparison Table - FIXED */}
          <div className="file-table">
            <h4 className="chapter-subtitle2">📊 HTML vs JSX کا موازنہ</h4>
            <table>
              <thead>
                <tr>
                  <th>HTML</th>
                  <th>JSX</th>
                  <th>واضح</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>class="container"</code></td>
                  <td><code>className="container"</code></td>
                  <td>class JavaScript کی reserved keyword ہے</td>
                </tr>
                <tr>
                  <td><code>for="name"</code></td>
                  <td><code>htmlFor="name"</code></td>
                  <td>for بھی JavaScript کی reserved keyword ہے</td>
                </tr>
                <tr>
                  <td><code>style="color: red;"</code></td>
                  <td><code>{"style={{color: 'red'}}"}</code></td>
                  <td>style object کی شکل میں لکھا جاتا ہے</td>
                </tr>
                <tr>
                  <td><code>{"<input>"}</code></td>
                  <td><code>{"<input />"}</code></td>
                  <td>ہر tag بند ہونا ضروری ہے</td>
                </tr>
                <tr>
                  <td>JavaScript نہیں چل سکتا</td>
                  <td><code>{"{5 + 5}"}</code> = 10</td>
                  <td>JSX میں JavaScript چل سکتا ہے</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Example */}
        <div className="lesson-section urdu-text">
          <h4 className="section-title">🔹 Example: React میں HTML لکھنا</h4>
          
          <div className="code-section">
            <div className="code-header">
              <span>مکمل React Component مثال</span>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(finalExample, "Final Example")}
              >
                {copiedCode === "Final Example" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
              </button>
            </div>
            <div className="code-block-container">
              <div className="code-block-wrapper">
                <pre className="english-code">{finalExample}</pre>
              </div>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">← → سکرول کریں</div>
            </div>
          </div>

          <div className="explanation-box">
            <h5>یہ مثال کیا کرتی ہے؟</h5>
            <ul>
              <li>Fragment (<span className="coding">{"<></>"}</span>) استعمال کرتی ہے</li>
              <li>صحیح JSX سینٹیکس استعمال کرتی ہے (<span className="coding">className</span>)</li>
              <li>اردو ٹیکسٹ کو صحیح طریقے سے ظاہر کرتی ہے</li>
              <li>ایونٹ ہینڈلر (<span className="coding">onClick</span>) شامل کرتی ہے</li>
              <li>React کی تمام بنیادی خصوصیات دکھاتی ہے</li>
            </ul>
          </div>
        </div>

        {/* Key Points */}
        <div className="methods-grid">
          <div className="method-card">
            <h3>⚡ Vite</h3>
            <p>تیز ترین React build tool</p>
          </div>
          <div className="method-card">
            <h3>🎯 Fragments</h3>
            <p>اضافی &lt;div&gt; tags سے بچائیں</p>
          </div>
          <div className="method-card">
            <h3>📝 JSX</h3>
            <p>JavaScript + HTML کا امتزاج</p>
          </div>
          <div className="method-card">
            <h3>✅ Rules</h3>
            <p>className, htmlFor اور بند tags</p>
          </div>
        </div>

        {/* Homework Section - FIXED */}
        <div className="homework-section urdu-text">
          <h4>📝 ہوم ورک:</h4>
          <ol>
            <li>Vite کا استعمال کرتے ہوئے ایک نیا React پروجیکٹ بنائیں</li>
            <li>ایک component بنائیں جو Fragment استعمال کرے</li>
            <li>درج ذیل JSX غلطیوں کو درست کریں:</li>
            <ul>
              <li><code>{"<div class=\"box\"></div>"}</code></li>
              <li><code>{"<label for=\"email\">Email</label>"}</code></li>
              <li><code>{"<img src=\"photo.jpg\">"}</code></li>
            </ul>
            <li>ایک component بنائیں جو آپ کا تعارف اردو میں ظاہر کرے</li>
            <li>Button پر کلک کرنے پر alert دکھانے والا component بنائیں</li>
          </ol>
        </div>

        {/* Summary */}
        <div className="summary-card">
          <h3 className="section-title">📖 خلاصہ</h3>
          <div className="summary-content2">
            <p>Vite جدید React پروجیکٹس کے لیے بہترین ٹول ہے جو تیز رفتار ڈویلپمنٹ فراہم کرتا ہے۔</p>
            <p>React Fragments اضافی DOM elements سے بچنے کا بہترین طریقہ ہیں۔</p>
            <p>JSX React میں UI لکھنے کا طاقتور طریقہ ہے جس کے چند اہم قواعد ہیں۔</p>
            <p>صحیح JSX سینٹیکس سیکھنا ہر React ڈویلپر کے لیے ضروری ہے۔</p>
          </div>
          <div className="summary-points">
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <div>Vite تیز ترین ٹول</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">⚛️</div>
              <div>Fragments کا استعمال</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">📝</div>
              <div>JSX سینٹیکس</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">✅</div>
              <div>عملی مشقیں</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} کوڈ کاپی ہوگیا!
        </div>
      )}
    </div>
  );
}

export default Chapter3;