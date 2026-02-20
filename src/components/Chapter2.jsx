import React, { useState } from 'react';
import '../App.css'; // Import your CSS

function Chapter2() {
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setCopiedCode(type);
    setTimeout(() => {
      setCopied(false);
      setCopiedCode('');
    }, 2000);
  };

  const craCommand = `npx create-react-app my-app`;
  
  const viteCode = `// main.jsx - Vite کا انٹری پوائنٹ
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// App.jsx - Vite React Template
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App`;

  return (
    <div className="chapter-container">
      {/* Chapter Header */}
      <div className="chapter-header">
        <h1 className="chapter-title-main urdu-heading" style={{lineHeight: '4.8rem', fontSize: '2rem'}}>Chapter 2. Create React App (CRA) اور اس کی ڈپریکیٹشن</h1>
        <div className="chapter-duration">⏱️ تخمینی وقت: 10 منٹ</div>
        <div className="chapter-number-large" style={{ marginRight: '20px' }}>باب 2</div>
      </div>

      {/* Warning Alert */}
      <div className="info-box urdu-text" style={{ 
        background: '#fff3cd', 
        border: '2px solid #ffc107',
        marginBottom: '30px'
      }}>
        <h3>⚠️ اہم نوٹس</h3>
        <p>
          <strong>Create React App</strong> کو 14 فروری 2025 سے ڈپریکیٹ کیا گیا ہے۔
          نئے پروجیکٹس کے لیے جدید ٹولز استعمال کریں۔
        </p>
      </div>

      {/* Learning Outcomes */}
      <div className="learning-outcomes urdu-text">
        <h3 className="chapter-subtitle">📚 اس باب میں آپ سیکھیں گے:</h3>
        <ul>
          <li>Create React App کیا تھا اور کیوں استعمال ہوتا تھا؟</li>
          <li>CRA کی ڈپریکیٹشن کی وجوہات</li>
          <li>CRA کے متبادل ٹولز</li>
          <li>CRA سے نئے ٹولز میں مائیگریشن</li>
          <li>پریکٹیکل مشورے نئے پروجیکٹس کے لیے</li>
        </ul>
      </div>

      {/* Main Content Card */}
      <div className="card section-card">
        <h3 className="section-title">Create React App (CRA) کا تعارف</h3>
        
        <div className="section-text urdu-text">
          <p>
            <strong>Create React App (CRA)</strong> پہلے React-based ایپس بنانے کے لیے ایک بہت مقبول tool
            تھی، جو آپ کو <span className="coding">zero-config</span> کے ساتھ React ایپ شروع کرنے دیتی تھی۔
          </p>
          
          <div className="success-box">
            <p>
              CRA نے ڈویلپرز کو Webpack، Babel، ESLint، Jest وغیرہ کی پیچیدگیوں سے بچایا اور
              <span className="color-blue"> npx create-react-app my-app</span> سے نئی ایپ شروع کرنے دیتا تھا۔
            </p>
          </div>

          <p>
            لیکن 14 فروری 2025 کو React ٹیم نے اعلان کیا کہ Create React App کو
            ڈپریکیٹ کیا جا رہا ہے، یعنی نئے پروجیکٹس کے لیے اسے مزید فعال ترقی نہیں
            دی جائے گی۔
          </p>

          {/* Quote Section */}
          <div className="english-quote">
            <strong>"Starting today, if you install a new app, you will see a deprecation warning: create-react-app is deprecated."</strong>
            <br />
            — React Team, February 14, 2025
          </div>

          <p>
            یہ مطلب ہے کہ CRA کو ریٹائر کرنا شروع کردیا گیا ہے — وہ کام کرے گی، پر
            نئے فیچرز شامل نہیں کیے جائیں گے، اور React ٹیم ترغیب دے رہی ہے کہ نئے
            پروجیکٹس modern build tools (Vite, Parcel وغیرہ) استعمال کریں۔
          </p>
        </div>

        {/* Code Examples - CRA */}
        <div className="code-section">
          <div className="code-header">
            <span>CRA کا پرانا طریقہ</span>
            <button 
              className="copy-btn"
              onClick={() => handleCopy(craCommand, 'cra')}
            >
              {copied && copiedCode === 'cra' ? 'کاپی ہوگیا!' : 'کاپی کریں'}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
{`# Old way (Now deprecated)
npx create-react-app my-app
cd my-app
npm start`}
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* New Tools Comparison */}
        <div className="file-table">
          <h4 className="chapter-subtitle2">🆚 نئے ٹولز کا موازنہ</h4>
          <table>
            <thead>
              <tr>
                <th>ٹول</th>
                <th>اختصار</th>
                <th>فائدے</th>
                <th>آغاز کمانڈ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vite</strong></td>
                <td>تیز، جدید</td>
                <td>بہت تیز HMR، ES Modules</td>
                <td><code>npm create vite@latest</code></td>
              </tr>
              <tr>
                <td><strong>Next.js</strong></td>
                <td>Full Framework</td>
                <td>SSR، Routing، Optimization</td>
                <td><code>npx create-next-app@latest</code></td>
              </tr>
              <tr>
                <td><strong>Parcel</strong></td>
                <td>Zero Config</td>
                <td>آسان سیٹ اپ، No Configuration</td>
                <td><code>npx create-parcel-app</code></td>
              </tr>
              <tr>
                <td><strong>Remix</strong></td>
                <td>Web Standards</td>
                <td>Web Fundamentals پر مبنی</td>
                <td><code>npx create-remix@latest</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Step-by-Step Migration Guide */}
        <div className="lesson-section urdu-text">
          <h4>🛠️ CRA سے Vite مائیگریشن گائیڈ</h4>
          
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4 className="step-title">Vite میں نئی ایپ بنائیں</h4>
              <div className="coding">
                npm create vite@latest my-app -- --template react
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4 className="step-title">پیکیجز مائیگریٹ کریں</h4>
              <p>CRA والے package.json سے ضروری dependencies کو نئے package.json میں منتقل کریں</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4 className="step-title">پبلک فولڈر کا انتظام</h4>
              <p>
                Vite میں static assets <span className="coding">public/</span> فولڈر میں رکھیں
                (CRA کی طرح ہی ہے)
              </p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4 className="step-title">Env Variables کو اپڈیٹ کریں</h4>
              <div className="coding">
                REACT_APP_ → VITE_
              </div>
              <p>تمام env variables میں prefix تبدیل کریں</p>
            </div>
          </div>
        </div>

        {/* Vite Code Example - FIXED FOR SCROLLING */}
        <div className="code-section">
          <div className="code-header">
            <span>Vite React Template کا نمونہ</span>
            <button 
              className="copy-btn"
              onClick={() => handleCopy(viteCode, 'vite')}
            >
              {copied && copiedCode === 'vite' ? 'کاپی ہوگیا!' : 'کوڈ کاپی کریں'}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">
{`// main.jsx - Vite کا انٹری پوائنٹ
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// App.jsx - Vite React Template
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App`}
              </pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* Benefits of New Tools */}
        <div className="explanation-section urdu-text">
          <h4>🚀 نئے ٹولز کے فوائد</h4>
          <div className="explanation-box">
            <ul>
              <li><strong>تیز تر ہاٹ ماڈیول ریپلیسمنٹ (HMR):</strong> Vite کا HMR CRA سے کئی گنا تیز ہے</li>
              <li><strong>ES Modules:</strong> براہ راست براؤزر میں ES Modules کا استعمال</li>
              <li><strong>Plugins Ecosystem:</strong> وسیع اور جدید پلگ انس سسٹم</li>
              <li><strong>TypeScript پہلے سے کنفیگرڈ:</strong> TypeScript کے لیے اضافی سیٹ اپ کی ضرورت نہیں</li>
              <li><strong>بہتر ڈویلپمنٹ تجربہ:</strong> تیز تر بلڈ اور ڈیپلائمنٹ</li>
            </ul>
          </div>
        </div>

        {/* Homework Section */}
        <div className="homework-section urdu-text">
          <h4>📝 ہوم ورک:</h4>
          <ol>
            <li>Vite کی آفیشل ویب سائٹ <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">vitejs.dev</a> وزٹ کریں</li>
            <li>Vite استعمال کرتے ہوئے ایک نئی React ایپ بنائیں</li>
            <li>Vite اور CRA کی بلڈ اسپیڈ کا موازنہ کریں</li>
            <li>اگر آپ کے پاس CRA پروجیکٹ ہے، اسے Vite میں مائیگریٹ کرنے کی کوشش کریں</li>
            <li>Vite کے پلگ انس سسٹم کا جائزہ لیں اور دو مفید پلگ انس انسٹال کریں</li>
          </ol>
        </div>

        {/* Summary */}
        <div className="summary-card">
          <h3 className="section-title">📖 خلاصہ</h3>
          <div className="summary-content2">
            <p>Create React App (CRA) نے اپنی افادیت کھو دی ہے اور React ٹیم نے اسے ڈپریکیٹ کر دیا ہے۔</p>
            <p>نئے پروجیکٹس کے لیے <strong>Vite</strong> یا <strong>Next.js</strong> جیسے جدید ٹولز استعمال کرنا چاہیے۔</p>
            <p>موجودہ CRA پروجیکٹس کو Vite میں مائیگریٹ کرنا ایک سمارٹ فیصلہ ہے جو پرفارمنس اور ڈویلپمنٹ تجربہ بہتر بنائے گا۔</p>
          </div>
          <div className="summary-points">
            <div className="summary-item">
              <div className="summary-icon">⚰️</div>
              <div>CRA ڈپریکیٹ</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <div>Vite ترجیح</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">⚡</div>
              <div>تیز تر بلڈز</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🔄</div>
              <div>آسان مائیگریشن</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter2;