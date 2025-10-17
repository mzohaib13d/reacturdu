import React, { useState } from "react";

function Chapter26() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Code blocks
  const codeBlocks = {
    lazyBasic: `// 🔹 Basic Lazy Loading Syntax
import React, { Suspense, lazy } from "react";

// ✅ Lazy load کریں
const HeavyComponent = React.lazy(() => import("./components/HeavyComponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>
        Load Heavy Component
      </button>

      {/* Suspense fallback کے ساتھ */}
      <Suspense fallback={<div>⏳ Loading Component...</div>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
}

export default App;`,

    envExample: `// 🔹 Environment Variables Example
// 📄 .env فائل میں
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My React App

// 📄 App.jsx میں
import React from "react";

function App() {
  // 🌿 Environment Variables read کریں
  const apiURL = import.meta.env.VITE_API_URL;
  const appName = import.meta.env.VITE_APP_NAME;

  return (
    <div>
      <h1>🌍 {appName}</h1>
      <p>API Base URL: <strong>{apiURL}</strong></p>
    </div>
  );
}

export default App;`,

    weatherComponent: `// 🔹 Weather Component with Environment Variables
import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState(null);
  const city = import.meta.env.VITE_CITY;
  const api = import.meta.env.VITE_WEATHER_API;

  useEffect(() => {
    fetch(\`\${api}?latitude=24.86&longitude=67.00&current_weather=true\`)
      .then((res) => res.json())
      .then((res) => setData(res.current_weather))
      .catch(() => setData({ error: "Failed to load weather data" }));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h2>🌦 Weather in {city}</h2>
      {data ? (
        data.error ? (
          <p>{data.error}</p>
        ) : (
          <>
            <p>Temperature: {data.temperature}°C</p>
            <p>Wind Speed: {data.windspeed} km/h</p>
          </>
        )
      ) : (
        <p>Loading Weather Data...</p>
      )}
    </div>
  );
}`,

    completeApp: `// 🔹 Complete App with Lazy Loading + Environment Variables
import React, { Suspense, lazy } from "react";
import EnvExample from "./EnvExample";

// Lazy Loading Components
const Dashboard = lazy(() => import("./Dashboard"));
const Weather = lazy(() => import("./Weather"));

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌙 Lazy Loading + .env + Weather Dashboard</h1>

      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Loading Weather...</p>}>
        <Weather />
      </Suspense>

      <EnvExample />
    </div>
  );
}

export default App;`,

    gitignore: `# 🔹 .gitignore میں شامل کریں
# Environment Variables
.env
.env.local
.env.development
.env.production

# Node modules
node_modules/

# Build files
dist/
build/`
  };

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          ⚡ Chapter 26: Performance & Optimization
        </h1>
        <p className="chapter-subtitle2">
          Lazy Loading + Environment Variables + Weather Dashboard
        </p>
      </div>

      {/* Introduction Section */}
      <section className="section-card">
        <h2 className="section-title">🎯 Performance & Optimization کیا ہے؟</h2>
        <p className="section-text">
          <strong>⚡ *Phase 2: Performance & Optimization*</strong><br/>
          ہم اب  React JS کے Phase 2: Performance & Optimization 🚀
          میں داخل ہو چکے ہیں —
          جہاں ہم سیکھیں گے کہ اپنی ایپ کو تیز، ہلکا، اور پروفیشنل کیسے بنائیں۔
        </p>
        
        <p className="section-text">
          اس فیز میں ہم React کی ان تمام techniques پر توجہ دیں گے
          جو speed، code splitting، caching، security، اور efficiency کو بہتر بناتی ہیں۔
        </p>

        <div className="info-box">
          <h4>🧩 *Chapter 26 — "Lazy Loading Components (React.lazy + Suspense)" *</h4>
          <p>کو ایک مکمل practical example کے ساتھ سمجھتے ہیں۔
          یہ React کے performance optimization کا سب سے اہم concept ہے ⚡</p>
        </div>
      </section>

      {/* Part 1: Lazy Loading */}
      <section className="section-card">
        <h2 className="section-title">🧩 Part 1 — Lazy Loading Components</h2>
        
        <div className="explanation-box">
          <h4>🎯 Objective:</h4>
          <p>React app میں performance بہتر بنانا —
          یعنی وہ components صرف تب لوڈ ہوں جب ضرورت ہو۔
          (مثلاً کسی button click یا route navigation کے وقت)</p>
        </div>

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Lazy Loading کیا ہوتا ہے؟</h3>
            <p className="section-text">
              Lazy Loading ایک technique ہے
              جس میں React پورا component فوراً load نہیں کرتا،
              بلکہ صرف وہی components load کرتا ہے
              جن کی اس وقت ضرورت ہوتی ہے۔
            </p>
            <div className="info-box">
              <h4>💡 مثال:</h4>
              <p>
                آپ کی ویب ایپ میں Home, About, Products, Contact —
                چار pages ہیں۔
                اگر user صرف Home دیکھنا چاہتا ہے
                تو باقی تین components کو فوراً load کرنا ضروری نہیں۔
              </p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">🔹 React.lazy() کیا کرتا ہے؟</h3>
            <p className="section-text">
              React.lazy() React کو بتاتا ہے
              کہ کوئی component on-demand load کرنا ہے۔
              یعنی browser اسے tab یا route کھلنے پر ہی fetch کرے۔
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Syntax:</h3>
            <div className="coding">
              const ComponentName = React.lazy(() => import("./ComponentName"));
            </div>
            <div className="info-box">
              <p>
                <strong>⚠️ import()</strong> یہاں dynamic import ہے
                جو JavaScript کو کہتا ہے —
                "ابھی load نہ کرو، بعد میں جب ضرورت ہو تب کرو۔"
              </p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Suspense کیا کرتا ہے؟</h3>
            <p className="section-text">
              &lt;Suspense&gt; ایک React component ہے
              جو lazy component load ہونے تک loading fallback UI دکھاتا ہے۔
            </p>
            <div className="info-box">
              <h4>💡 مطلب:</h4>
              <p>
                جب تک component load ہو رہا ہے،
                user کو "Loading..." یا spinner نظر آئے گا۔
              </p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">⚙️ Complete Example</h3>
            
            <div className="code-section">
              <div className="code-header">
                <h3>🗂️ Folder Structure</h3>
              </div>
              <pre className="english-code">
                <code>{`src/
 ┣ components/
 ┃ ┣ Header.jsx
 ┃ ┗ HeavyComponent.jsx
 ┣ App.jsx
 ┗ main.jsx`}</code>
              </pre>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>🧱 HeavyComponent.jsx</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.lazyBasic, "Heavy Component")}
                >
                  {copiedCode === "Heavy Component" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{`import React from "react";

export default function HeavyComponent() {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px" }}>
      <h2>💻 Heavy Component Loaded!</h2>
      <p>یہ component lazy loading سے dynamically load ہوا ہے۔</p>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>⚙️ App.jsx</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.lazyBasic, "App Component")}
                >
                  {copiedCode === "App Component" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{`import React, { Suspense, useState } from "react";

// ✅ Lazy load کریں
const HeavyComponent = React.lazy(() => import("./components/HeavyComponent"));

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🚀 Lazy Loading Demo</h1>
      <p>یہ React.lazy + Suspense کا practical example ہے۔</p>

      <button
        onClick={() => setShow(true)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Load Heavy Component
      </button>

      {/* Suspense fallback کے ساتھ */}
      <Suspense fallback={<h3 style={{ color: "blue" }}>⏳ Loading Component...</h3>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <div className="code-section">
              <div className="code-header">
                <h3>⚙️ main.jsx</h3>
              </div>
              <pre className="english-code">
                <code>{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);`}</code>
              </pre>
            </div>

            <div className="explanation-box">
              <h4>💡 How It Works:</h4>
              <ul>
                <li>جب app شروع ہوتی ہے → HeavyComponent ابھی load نہیں ہوتا۔</li>
                <li>جب user "Load Heavy Component" بٹن دبائے →
                تب React dynamically import کرتا ہے HeavyComponent کو۔</li>
                <li>جب تک file load ہو رہی ہے → Suspense fallback "Loading…" دکھاتا ہے۔</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Concept</th>
                <th>وضاحت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🧠 React.lazy()</td>
                <td>Component کو lazy load کرنے کا طریقہ</td>
              </tr>
              <tr>
                <td>💬 Suspense</td>
                <td>Loading fallback handle کرتا ہے</td>
              </tr>
              <tr>
                <td>⚡ Performance</td>
                <td>Initial load time کم کرتا ہے</td>
              </tr>
              <tr>
                <td>🔐 Code Splitting</td>
                <td>ہر component الگ chunk میں load ہوتا ہے</td>
              </tr>
              <tr>
                <td>🧩 Use Case</td>
                <td>بڑی ویب ایپ میں routes یا heavy components optimize کرنا</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <h4>🧠 Real-Life Example:</h4>
          <p>
            جیسے آپ کا Laptop Store App ہے 💻
            اس میں "Dashboard", "Analytics", یا "Reports" جیسے pages
            صرف admin users دیکھتے ہیں۔
            تو آپ ان pages کو React.lazy() سے lazy load کر سکتے ہیں۔
            اس طرح homepage تیزی سے load ہوگا اور باقی components بعد میں۔
          </p>
        </div>
      </section>

      {/* Part 2: Environment Variables */}
      <section className="section-card">
        <h2 className="section-title">🔐 Part 2 — Environment Variables (.env)</h2>
        
        <div className="explanation-box">
          <h4>⚡ *Part 2: Performance & Optimization*</h4>
          <p>Chapter 26 — Lazy Loading Components + Environment Variables (.env)</p>
          <p><strong>🎯 مقصد:</strong> React App کو تیز (Lazy Loading) اور محفوظ (Environment Variables) بنانا۔</p>
        </div>

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">🌿 Part 1 — Lazy Loading Components (React.lazy + Suspense)</h3>
            <p className="section-text">
              (یہ حصہ اوپر جیسا ہی رہے گا — جہاں ہم نے Lazy Loading کا پورا practical example بنایا۔)
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">🧩 Part 2 — Environment Variables (.env)</h3>
            <p className="section-text">
              اب ہم سیکھیں گے کہ sensitive معلومات (مثلاً API keys، URLs، وغیرہ)
              کو اپنے code کے اندر hardcode کرنے کے بجائے .env فائل میں محفوظ رکھا جائے۔
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">🔎 Environment Variables کیا ہوتی ہیں؟</h3>
            <p className="section-text">
              Environment Variables وہ چھپی ہوئی settings ہوتی ہیں
              جو آپ کے project کے ماحول (environment) کے حساب سے بدل سکتی ہیں۔
            </p>
            <div className="info-box">
              <h4>مثلاً:</h4>
              <ul>
                <li>Local machine پر ایک API key</li>
                <li>Production server پر دوسری key</li>
              </ul>
              <p><strong>⚠️ فائدہ:</strong> API Keys اور Secret URLs GitHub پر upload نہیں ہوتے۔</p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">🗂 Folder Structure</h3>
            <pre className="english-code">
              <code>{`src/
 ┣ components/
 ┃ ┗ HeavyComponent.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ .env`}</code>
            </pre>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Step 1: .env فائل بنائیں</h3>
            <p className="section-text">
              اپنے project کے root (یعنی src سے باہر) میں ایک نئی فائل بنائیں:
            </p>
            <div className="code-section">
              <div className="code-header">
                <h3>📄 .env</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.envExample, "Environment Variables")}
                >
                  {copiedCode === "Environment Variables" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{`VITE_API_URL=https://api.example.com
VITE_APP_NAME=My React Demo`}</code>
              </pre>
            </div>
            <div className="info-box">
              <p>
                <strong>⚠️ نوٹ:</strong>
                React + Vite میں ہر environment variable کا نام VITE_ سے شروع ہونا ضروری ہے۔
              </p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Step 2: App.jsx میں استعمال کریں</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>📄 App.jsx</h3>
              </div>
              <pre className="english-code">
                <code>{`import React, { Suspense, useState } from "react";

const HeavyComponent = React.lazy(() => import("./components/HeavyComponent"));

export default function App() {
  const [show, setShow] = useState(false);

  // 🌿 Environment Variables read کریں
  const apiURL = import.meta.env.VITE_API_URL;
  const appName = import.meta.env.VITE_APP_NAME;

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🌍 {appName}</h1>
      <p>
        API Base URL: <strong>{apiURL}</strong>
      </p>

      <button
        onClick={() => setShow(true)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Load Heavy Component
      </button>

      <Suspense fallback={<h3 style={{ color: "blue" }}>⏳ Component Loading...</h3>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3 className="step-title">🔹 Step 3: .gitignore میں .env شامل کریں</h3>
            <p className="section-text">
              GitHub پر secrets جانے سے روکنے کے لیے:
            </p>
            <div className="code-section">
              <div className="code-header">
                <h3>📄 .gitignore</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.gitignore, ".gitignore")}
                >
                  {copiedCode === ".gitignore" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{`# Environment Variables
.env`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1️⃣</td>
                <td>.env فائل میں sensitive data محفوظ کریں</td>
              </tr>
              <tr>
                <td>2️⃣</td>
                <td>ہر variable کا prefix "VITE_" رکھیں</td>
              </tr>
              <tr>
                <td>3️⃣</td>
                <td>React app میں import.meta.env سے access کریں</td>
              </tr>
              <tr>
                <td>4️⃣</td>
                <td>.gitignore میں .env شامل کریں تاکہ leak نہ ہو</td>
              </tr>
              <tr>
                <td>5️⃣</td>
                <td>Production اور Local دونوں جگہ مختلف env files رکھی جا سکتی ہیں</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <h4>💡 Pro Tip</h4>
          <p>آپ مختلف ماحول (environment) کے لیے مختلف فائلیں رکھ سکتے ہیں:</p>
          <div className="file-table">
            <table>
              <thead>
                <tr>
                  <th>Environment</th>
                  <th>File Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Local Development</td>
                  <td>.env.development</td>
                </tr>
                <tr>
                  <td>Production</td>
                  <td>.env.production</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Vite خود بخود صحیح فائل load کر لیتا ہے۔</p>
        </div>

        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Concept</th>
                <th>مقصد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React.lazy()</td>
                <td>Components کو صرف ضرورت پر load کرنا</td>
              </tr>
              <tr>
                <td>Suspense</td>
                <td>Loading fallback handle کرنا</td>
              </tr>
              <tr>
                <td>Environment Variables</td>
                <td>Sensitive data کو محفوظ رکھنا</td>
              </tr>
              <tr>
                <td>VITE_ Prefix</td>
                <td>Vite میں env variable استعمال کرنے کے لیے ضروری prefix</td>
              </tr>
              <tr>
                <td>.gitignore</td>
                <td>.env کو GitHub سے hide کرنے کے لیے</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="success-box">
          <h4>🚀 Next Step:</h4>
          <p>
            چلیے تو اب ہم Chapter 26 (Phase 2) کو مکمل بناتے ہیں —
            جس میں ہم نے Lazy Loading + Environment Variables کے ساتھ ایک Mini Weather Dashboard Project بھی شامل کر دیا ہے۔
            یہ اب ایک مکمل Practical App ہے جو .env اور React.lazy() دونوں concepts کو live demonstrate کرتا ہے۔ ⚡
          </p>
        </div>
      </section>

      {/* Weather Dashboard Project */}
      <section className="section-card">
        <h2 className="section-title">🌦 Weather Dashboard Project</h2>
        
        <div className="explanation-box">
          <h4>🌟 Phase 2 Starts Here — Advanced React JS Development</h4>
          <p>
            <strong>🎯 React Apps کو تیز، محفوظ اور Modern بنانے کے لیے ہم Phase 2 شروع کر رہے ہیں۔</strong><br/>
            اس مرحلے میں آپ سیکھیں گے:
          </p>
          <ul>
            <li>Lazy Loading Components</li>
            <li>Environment Variables (.env)</li>
            <li>Practical Weather Dashboard Project</li>
          </ul>
        </div>

        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Concept</th>
                <th>استعمال</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React.lazy()</td>
                <td>Component کو صرف تب load کرتا ہے جب ضرورت ہو (Performance Boost)</td>
              </tr>
              <tr>
                <td>Suspense</td>
                <td>Lazy Component کے load ہونے تک Fallback UI دکھاتا ہے</td>
              </tr>
              <tr>
                <td>.env Variables</td>
                <td>Sensitive Data (جیسے API Keys) کو secure رکھنا</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">⚙️ Step 1 — Folder Structure</h3>
            <pre className="english-code">
              <code>{`src/
 ├── App.jsx
 ├── Dashboard.jsx
 ├── Weather.jsx
 ├── EnvExample.jsx
 └── main.jsx
.env`}</code>
            </pre>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">🌙 Step 2 — .env File</h3>
            <p className="section-text">
              پروجیکٹ روٹ میں نئی فائل بنائیں:
            </p>
            <div className="code-section">
              <div className="code-header">
                <h3>.env</h3>
              </div>
              <pre className="english-code">
                <code>{`VITE_WEATHER_API=https://api.open-meteo.com/v1/forecast
VITE_CITY=Karachi`}</code>
              </pre>
            </div>
            <div className="info-box">
              <p>اور اس میں لکھیں 👇 (اپنی API Key سے تبدیل کریں)</p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">⚡ Step 3 — Weather.jsx</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>Weather Component</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.weatherComponent, "Weather Component")}
                >
                  {copiedCode === "Weather Component" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{codeBlocks.weatherComponent}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">🧩 Step 4 — Dashboard.jsx</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>Dashboard Component</h3>
              </div>
              <pre className="english-code">
                <code>{`export default function Dashboard() {
  return (
    <div>
      <h2>📊 Welcome to Dashboard</h2>
      <p>This component is loaded lazily!</p>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">🌐 Step 5 — EnvExample.jsx</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>EnvExample Component</h3>
              </div>
              <pre className="english-code">
                <code>{`export default function EnvExample() {
  const api = import.meta.env.VITE_WEATHER_API;
  const city = import.meta.env.VITE_CITY;

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h3>🔒 Environment Variables Demo</h3>
      <p>API URL: {api}</p>
      <p>City: {city}</p>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3 className="step-title">💡 Step 6 — App.jsx</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>Complete App</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(codeBlocks.completeApp, "Complete App")}
                >
                  {copiedCode === "Complete App" ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="english-code">
                <code>{codeBlocks.completeApp}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3 className="step-title">🧠 Step 7 — main.jsx</h3>
            <div className="code-section">
              <div className="code-header">
                <h3>Main Entry Point</h3>
              </div>
              <pre className="english-code">
                <code>{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">8</div>
          <div className="step-content">
            <h3 className="step-title">▶️ Step 8 — Run the Project</h3>
            <p className="section-text">
              VS Code Terminal میں چلائیں:
            </p>
            <div className="coding">
              npm run dev
            </div>
            <div className="info-box">
              <h4>💨 App کھلنے پر:</h4>
              <ul>
                <li>Dashboard lazy load ہو گا</li>
                <li>Weather API سے data آئے گا</li>
                <li>Env variables display ہوں گے</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">9</div>
          <div className="step-content">
            <h3 className="step-title">🧾 Security Reminder</h3>
            <p className="section-text">
              .env فائل کو public repo پر نہ چڑھائیں:
            </p>
            <div className="code-section">
              <div className="code-header">
                <h3>.gitignore</h3>
              </div>
              <pre className="english-code">
                <code>{`.env`}</code>
              </pre>
            </div>
            <p className="section-text">
              میں اضافہ کریں:
            </p>
          </div>
        </div>

        <div className="file-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>فائدہ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lazy Loading</td>
                <td>تیز App لوڈ ہونے کا وقت</td>
              </tr>
              <tr>
                <td>Suspense Fallback</td>
                <td>Loading indicator کا UI</td>
              </tr>
              <tr>
                <td>.env Variables</td>
                <td>Secure configuration data</td>
              </tr>
              <tr>
                <td>Weather API</td>
                <td>Real-World Integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Summary */}
      <section className="summary-card">
        <h2 className="section-title">🎓 Chapter 26 Complete!</h2>
        <div className="summary-content">
          <p><strong>✅ Lazy Loading Components:</strong> React.lazy() + Suspense کے ساتھ performance optimization</p>
          <p><strong>✅ Environment Variables:</strong> .env فائل کے ساتھ secure configuration</p>
          <p><strong>✅ Weather Dashboard:</strong> Practical project کے ساتھ real-world application</p>
          <p><strong>✅ Code Splitting:</strong> App کو مختلف chunks میں تقسیم کرنا</p>
          <p><strong>✅ Security Best Practices:</strong> API keys اور sensitive data کو protect کرنا</p>
          
          <div style={{ 
            background: "rgba(255,255,255,0.2)", 
            padding: "15px", 
            borderRadius: "8px",
            marginTop: "15px"
          }}>
            <h4>🚀 Congratulations!</h4>
            <p>
              آپ نے React Performance & Optimization کے important concepts سیکھ لیے ہیں۔
              اب آپ professional React applications بنا سکتے ہیں جو fast, secure, اور efficient ہوں!
            </p>
          </div>
        </div>
      </section>

      {/* Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} code copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default Chapter26;