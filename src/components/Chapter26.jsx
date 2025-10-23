import React, { useState } from "react";

// Internal Components - No external imports needed
const HeavyComponent = () => {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px" }}>
      <h2>💻 Heavy Component Loaded!</h2>
      <p>یہ component lazy loading سے dynamically load ہوا ہے۔</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>📊 Welcome to Dashboard</h2>
      <p>This component is loaded lazily!</p>
    </div>
  );
};

const Weather = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setData({
        temperature: 28,
        windspeed: 12,
        weathercode: 1
      });
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h2>🌦 Weather in Karachi</h2>
      {data ? (
        <>
          <p>Temperature: {data.temperature}°C</p>
          <p>Wind Speed: {data.windspeed} km/h</p>
        </>
      ) : (
        <p>Loading Weather Data...</p>
      )}
    </div>
  );
};

const EnvExample = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h3>🔒 Environment Variables Demo</h3>
      <p>API URL: https://api.open-meteo.com/v1/forecast</p>
      <p>City: Karachi</p>
    </div>
  );
};

const Chapter26 = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);
  const [city] = useState("Karachi");

  const copyToClipboard = (text, description = "") => {
    navigator.clipboard.writeText(text);
    setCopyStatus(description || "کوڈ کوپي ہو گیا!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const fetchWeather = async () => {
    setWeatherLoading(true);
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.00&current_weather=true"
      );
      const data = await response.json();
      setWeatherData(data.current_weather);
    } catch (error) {
      setWeatherData({ error: "Failed to load weather data. Please try again." });
    } finally {
      setWeatherLoading(false);
    }
  };

  const getWeatherIcon = (temperature) => {
    if (temperature > 30) return "☀️";
    if (temperature > 20) return "⛅";
    if (temperature > 10) return "🌤️";
    return "🌧️";
  };

  // Live Demo Components
  const LazyLoadingLiveDemo = () => {
    const [showDemoComponent, setShowDemoComponent] = useState(false);
    
    return (
      <div className="demo-card">
        <h4>🚀 Lazy Loading Live Demo</h4>
        <p>نیچے دیے گئے بٹن پر کلک کریں اور دیکھیں کہ component کیسے lazy load ہوتا ہے:</p>
        
        <button 
          className="pulse-button"
          onClick={() => setShowDemoComponent(!showDemoComponent)}
        >
          {showDemoComponent ? "❌ Hide Heavy Component" : "💻 Load Heavy Component"}
        </button>

        {showDemoComponent && <HeavyComponent />}
      </div>
    );
  };

  const EnvironmentVarsLiveDemo = () => {
    return (
      <div className="demo-card">
        <h4>🔒 Environment Variables Live Demo</h4>
        <p>Environment variables کی عملی مثال:</p>
        
        <div style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          margin: "15px 0"
        }}>
          <h5>Current Environment Variables:</h5>
          <p><strong>VITE_API_URL:</strong> https://api.example.com</p>
          <p><strong>VITE_APP_NAME:</strong> My React Demo</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
            یہ values .env فائل سے آ رہی ہیں
          </p>
        </div>
        
        <div style={{ 
          background: "#e8f4fd",
          padding: "15px",
          borderRadius: "8px",
          margin: "10px 0"
        }}>
          <h5>Usage in Component:</h5>
          <div className="coding">
            const apiURL = import.meta.env.VITE_API_URL;
          </div>
          <div className="coding">
            const appName = import.meta.env.VITE_APP_NAME;
          </div>
        </div>
      </div>
    );
  };

  const WeatherAPILiveDemo = () => {
    return (
      <div className="demo-card">
        <h4>🌦 Live Weather API Demo</h4>
        <p>Real-time weather data fetching کا عملی مظاہرہ:</p>
        
        {/* Beautiful Weather Dashboard */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          padding: "25px",
          margin: "20px 0",
          color: "white",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ textAlign: "center", marginBottom: "20px", position: "relative", zIndex: "2" }}>
            <h3 style={{ color: "#1900ffff", margin: "0 0 8px 0", fontSize: "24px", fontWeight: "600" }}>🌦 Live Weather Dashboard</h3>
            <p style={{ margin: "0", opacity: "0.9", fontSize: "14px" }}>Real-time weather data using Open-Meteo API</p>
          </div>

          <div style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            padding: "20px",
            position: "relative",
            zIndex: "2",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px"
            }}>
              <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>📍 {city}</h4>
              <button 
                onClick={fetchWeather} 
                disabled={weatherLoading}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.3s ease"
                }}
              >
                {weatherLoading ? "🔄 Updating..." : "🔄 Refresh"}
              </button>
            </div>

            {weatherLoading ? (
              <div style={{ textAlign: "center", padding: "30px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                  borderTop: "3px solid white",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 15px"
                }}></div>
                <p>Loading weather data...</p>
              </div>
            ) : weatherData ? (
              weatherData.error ? (
                <div style={{ textAlign: "center", padding: "20px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px" }}>
                  <p>❌ {weatherData.error}</p>
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "15px",
                    marginBottom: "25px"
                  }}>
                    <span style={{ fontSize: "48px" }}>
                      {getWeatherIcon(weatherData.temperature)}
                    </span>
                    <span style={{ fontSize: "48px", fontWeight: "bold" }}>
                      {weatherData.temperature}°C
                    </span>
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "15px"
                  }}>
                    <div style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      padding: "15px",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px"
                    }}>
                      <span style={{ fontSize: "12px", opacity: "0.8" }}>💨 Wind Speed</span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{weatherData.windspeed} km/h</span>
                    </div>
                    <div style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      padding: "15px",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px"
                    }}>
                      <span style={{ fontSize: "12px", opacity: "0.8" }}>🧭 Wind Direction</span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{weatherData.winddirection}°</span>
                    </div>
                    <div style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      padding: "15px",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px"
                    }}>
                      <span style={{ fontSize: "12px", opacity: "0.8" }}>⏱️ Last Updated</span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div style={{ textAlign: "center", padding: "30px", opacity: "0.8" }}>
                <p>Click refresh to load weather data</p>
              </div>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px", position: "relative", zIndex: "2" }}>
            <p style={{ margin: "0", opacity: "0.7", fontSize: "12px" }}>Powered by Open-Meteo API • Updates on refresh</p>
          </div>
        </div>
      </div>
    );
  };

  // Code examples
  const lazyLoadingCode = `import React, { Suspense, lazy, useState } from "react";

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
}`;

  const envExampleCode = `import React from "react";

export default function EnvExample() {
  const api = import.meta.env.VITE_WEATHER_API;
  const city = import.meta.env.VITE_CITY;

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h3>🔒 Environment Variables Demo</h3>
      <p>API URL: {api}</p>
      <p>City: {city}</p>
    </div>
  );
}`;

  const weatherComponentCode = `import { useEffect, useState } from "react";

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
}`;

  const completeAppCode = `import React, { Suspense, lazy } from "react";
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

export default App;`;

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          ⚡ Chapter 26 - Lazy Loading + Environment Variables + Weather Dashboard
        </h1>
        <p className="chapter-subtitle2">
          React Performance Optimization کے ساتھ محفوظ Environment Variables کا عملی استعمال
        </p>
      </div>

      <div className="main-content">
        {/* Introduction Section */}
        <div className="section-card">
          <h2 className="section-title">⚡ Phase 2: Performance & Optimization</h2>
          <div className="section-text">
            <p>
              ہم اب  React JS کے Phase 2: Performance & Optimization 🚀
              میں داخل ہو چکے ہیں —
              جہاں ہم سیکھیں گے کہ اپنی ایپ کو تیز، ہلکا، اور پروفیشنل کیسے بنائیں۔
            </p>
            <p>
              اس فیز میں ہم React کی ان تمام techniques پر توجہ دیں گے
              جو speed، code splitting، caching، security، اور efficiency کو بہتر بناتی ہیں۔
            </p>
          </div>
        </div>

        {/* Lazy Loading Section */}
        <div className="section-card">
          <h3 className="section-title">🧩 Lazy Loading Components (React.lazy + Suspense)</h3>
          
          {/* Live Demo First */}
          <div className="demo-section">
            <h4>🎯 Live Demonstration</h4>
            <LazyLoadingLiveDemo />
          </div>

          <div className="section-text">
            <p>Lazy Loading کو ایک مکمل practical example کے ساتھ سمجھتے ہیں۔
            یہ React کے performance optimization کا سب سے اہم concept ہے ⚡</p>

            <p><strong>🎯 Objective:</strong></p>
            <p>
              React app میں performance بہتر بنانا —
              یعنی وہ components صرف تب لوڈ ہوں جب ضرورت ہو۔
              (مثلاً کسی button click یا route navigation کے وقت)
            </p>

            <div className="explanation-box">
              <h4>🔹 1. Lazy Loading کیا ہوتا ہے؟</h4>
              <p>
                Lazy Loading ایک technique ہے
                جس میں React پورا component فوراً load نہیں کرتا،
                بلکہ صرف وہی components load کرتا ہے
                جن کی اس وقت ضرورت ہوتی ہے۔
              </p>
              <p>
                💡 <strong>مثال:</strong><br/>
                آپ کی ویب ایپ میں Home, About, Products, Contact —
                چار pages ہیں۔
                اگر user صرف Home دیکھنا چاہتا ہے
                تو باقی تین components کو فوراً load کرنا ضروری نہیں۔
              </p>
            </div>

            <div className="explanation-box">
              <h4>🔹 2. React.lazy() کیا کرتا ہے؟</h4>
              <p>
                React.lazy() React کو بتاتا ہے
                کہ کوئی component on-demand load کرنا ہے۔
                یعنی browser اسے tab یا route کھلنے پر ہی fetch کرے۔
              </p>
            </div>

            <div className="explanation-box">
              <h4>🔹 3. Syntax:</h4>
              <div className="coding">
                const ComponentName = React.lazy(() =&gt; import("./ComponentName"));
              </div>
              <p>⚠️ import() یہاں dynamic import ہے جو JavaScript کو کہتا ہے — "ابھی load نہ کرو، بعد میں جب ضرورت ہو تب کرو۔"</p>
            </div>

            <div className="explanation-box">
              <h4>🔹 4. Suspense کیا کرتا ہے؟</h4>
              <p>
                &lt;Suspense&gt; ایک React component ہے
                جو lazy component load ہونے تک loading fallback UI دکھاتا ہے۔
              </p>
              <p>💡 <strong>مطلب:</strong> جب تک component load ہو رہا ہے، user کو "Loading..." یا spinner نظر آئے گا۔</p>
            </div>

            <div className="info-box">
              <h4>⚙️ 5. Complete Example</h4>
              <p><strong>🗂️ Folder Structure:</strong></p>
              <div className="coding" style={{ textAlign: 'left', direction: 'ltr', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`src/
 ┣ components/
 ┃ ┣ Header.jsx
 ┃ ┗ HeavyComponent.jsx
 ┣ App.jsx
 ┗ main.jsx`}
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">🧱</div>
              <div className="step-content">
                <h4 className="step-title">HeavyComponent.jsx</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>HeavyComponent.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(`import React from "react";

export default function HeavyComponent() {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px" }}>
      <h2>💻 Heavy Component Loaded!</h2>
      <p>یہ component lazy loading سے dynamically load ہوا ہے۔</p>
    </div>
  );
}`, "HeavyComponent کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
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
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">⚙️</div>
              <div className="step-content">
                <h4 className="step-title">App.jsx</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>App.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(lazyLoadingCode, "App.jsx کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{lazyLoadingCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">⚙️</div>
              <div className="step-content">
                <h4 className="step-title">main.jsx</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>main.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);`, "main.jsx کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h4>💡 How It Works:</h4>
              <p>جب app شروع ہوتی ہے → HeavyComponent ابھی load نہیں ہوتا۔</p>
              <p>جب user "Load Heavy Component" بٹن دبائے → تب React dynamically import کرتا ہے HeavyComponent کو۔</p>
              <p>جب تک file load ہو رہی ہے → Suspense fallback "Loading…" دکھاتا ہے۔</p>
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
          </div>
        </div>

        {/* Environment Variables Section */}
        <div className="section-card">
          <h3 className="section-title">🔒 Environment Variables (.env)</h3>
          
          {/* Live Demo First */}
          <div className="demo-section">
            <h4>🎯 Live Demonstration</h4>
            <EnvironmentVarsLiveDemo />
          </div>

          <div className="section-text">
            <p><strong>🎯 مقصد:</strong> React App کو تیز (Lazy Loading) اور محفوظ (Environment Variables) بنانا۔</p>

            <div className="info-box">
              <h4>🌿 Part 1 — Lazy Loading Components (React.lazy + Suspense)</h4>
              <p>(یہ حصہ اوپر جیسا ہی رہے گا — جہاں ہم نے Lazy Loading کا پورا practical example بنایا۔)</p>
            </div>

            <div className="info-box">
              <h4>🧩 Part 2 — Environment Variables (.env)</h4>
              <p>اب ہم سیکھیں گے کہ sensitive معلومات (مثلاً API keys، URLs، وغیرہ)
              کو اپنے code کے اندر hardcode کرنے کے بجائے .env فائل میں محفوظ رکھا جائے۔</p>
            </div>

            <div className="explanation-box">
              <h4>🔎 Environment Variables کیا ہوتی ہیں؟</h4>
              <p>
                Environment Variables وہ چھپی ہوئی settings ہوتی ہیں
                جو آپ کے project کے ماحول (environment) کے حساب سے بدل سکتی ہیں۔
              </p>
              <p>
                <strong>مثلاً:</strong><br/>
                • Local machine پر ایک API key<br/>
                • Production server پر دوسری key
              </p>
              <p>⚠️ <strong>فائدہ:</strong> API Keys اور Secret URLs GitHub پر upload نہیں ہوتے۔</p>
            </div>

            <div className="info-box">
              <h4>🗂 Folder Structure</h4>
              <div className="coding" style={{ textAlign: 'left', direction: 'ltr', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`src/
 ┣ components/
 ┃ ┗ HeavyComponent.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ .env`}
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="step-title">.env فائل بنائیں</h4>
                <p>اپنے project کے root (یعنی src سے باہر) میں ایک نئی فائل بنائیں:</p>
                <div className="coding">
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My React Demo
                </div>
                <p>⚠️ <strong>نوٹ:</strong> React + Vite میں ہر environment variable کا نام VITE_ سے شروع ہونا ضروری ہے۔</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="step-title">App.jsx میں استعمال کریں</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>App.jsx with Environment Variables</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(`import React, { Suspense, useState } from "react";

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
}`, "Env App.jsx کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
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
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="step-title">.gitignore میں .env شامل کریں</h4>
                <p>GitHub پر secrets جانے سے روکنے کے لیے:</p>
                <div className="coding">
# Environment Variables
.env
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
                    <tr>
                      <td>Testing</td>
                      <td>.env.test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Dashboard Section */}
        <div className="section-card">
          <h3 className="section-title">🌦 Weather Dashboard - Complete Project</h3>
          
          {/* Live Demo First */}
          <div className="demo-section">
            <h4>🎯 Live Weather API Demonstration</h4>
            <WeatherAPILiveDemo />
          </div>

          <div className="section-text">
            <p><strong>🎯 Final Project:</strong> اب ہم Lazy Loading + Environment Variables + Real API کا ایک مکمل practical project بنائیں گے۔</p>

            <div className="info-box">
              <h4>🌍 Weather Dashboard App</h4>
              <p>یہ project تینوں concepts کو یکجا کرے گا:</p>
              <ul>
                <li>✅ Lazy Loading for components</li>
                <li>✅ Environment Variables for API configuration</li>
                <li>✅ Real Weather API integration</li>
              </ul>
            </div>

            <div className="info-box">
              <h4>🗂 Complete Folder Structure</h4>
              <div className="coding" style={{ textAlign: 'left', direction: 'ltr', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`src/
 ┣ components/
 ┃ ┣ Dashboard.jsx
 ┃ ┣ Weather.jsx
 ┃ ┣ EnvExample.jsx
 ┃ ┗ HeavyComponent.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ .env`}
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="step-title">.env فائل (Environment Variables)</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>.env</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(`VITE_WEATHER_API=https://api.open-meteo.com/v1/forecast
VITE_CITY=Karachi
VITE_APP_NAME=Weather Dashboard`, ".env کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{`VITE_WEATHER_API=https://api.open-meteo.com/v1/forecast
VITE_CITY=Karachi
VITE_APP_NAME=Weather Dashboard`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="step-title">Dashboard Component</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>Dashboard.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(`import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>📊 Welcome to Dashboard</h2>
      <p>This component is loaded lazily!</p>
    </div>
  );
};

export default Dashboard;`, "Dashboard کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{`import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>📊 Welcome to Dashboard</h2>
      <p>This component is loaded lazily!</p>
    </div>
  );
};

export default Dashboard;`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="step-title">Weather Component</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>Weather.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(weatherComponentCode, "Weather کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{weatherComponentCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4 className="step-title">EnvExample Component</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>EnvExample.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(envExampleCode, "EnvExample کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{envExampleCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4 className="step-title">Complete App.jsx</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>App.jsx</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(completeAppCode, "Complete App کوڈ کوپي ہو گیا!")}
                    >
                      📋 کاپی کریں
                    </button>
                  </div>
                  <pre className="english-code">
                    <code>{completeAppCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h4>🚀 How It Works - Complete Flow</h4>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-icon">1️⃣</div>
                  <div className="step-content">
                    <h5>App Start</h5>
                    <p>App شروع ہوتی ہے - صرف main bundle load ہوتا ہے</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-icon">2️⃣</div>
                  <div className="step-content">
                    <h5>Lazy Loading</h5>
                    <p>Dashboard اور Weather components الگ chunks میں load ہوتے ہیں</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-icon">3️⃣</div>
                  <div className="step-content">
                    <h5>Environment Variables</h5>
                    <p>API URLs اور settings .env فائل سے secure طریقے سے read ہوتی ہیں</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-icon">4️⃣</div>
                  <div className="step-content">
                    <h5>Real API Call</h5>
                    <p>Weather component real weather API سے data fetch کرتا ہے</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="file-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Benefit</th>
                    <th>Real-World Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🧩 Lazy Loading</td>
                    <td>Faster initial load time</td>
                    <td>Large apps, Admin panels</td>
                  </tr>
                  <tr>
                    <td>🔒 Environment Variables</td>
                    <td>Secure API keys & config</td>
                    <td>All production apps</td>
                  </tr>
                  <tr>
                    <td>🌦 API Integration</td>
                    <td>Real data handling</td>
                    <td>Weather apps, Dashboards</td>
                  </tr>
                  <tr>
                    <td>⚡ Performance</td>
                    <td>Optimized user experience</td>
                    <td>Professional web apps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="section-card">
          <h3 className="section-title">🎯 Chapter Summary</h3>
          <div className="section-text">
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">🧩</div>
                <div className="summary-content2">
                  <h4>Lazy Loading</h4>
                  <p>React.lazy() + Suspense کے ساتھ components on-demand load کریں</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🔒</div>
                <div className="summary-content2">
                  <h4>Environment Variables</h4>
                  <p>Sensitive data کو .env فائل میں محفوظ رکھیں</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🌦</div>
                <div className="summary-content2">
                  <h4>API Integration</h4>
                  <p>Real-world APIs کے ساتھ data fetch کریں</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">⚡</div>
                <div className="summary-content2">
                  <h4>Performance</h4>
                  <p>App کی speed اور user experience بہتر بنائیں</p>
                </div>
              </div>
            </div>

            <div className="success-box">
              <h4>✅ آپ نے کیا سیکھا ہے؟</h4>
              <ul>
                <li>React performance optimization techniques</li>
                <li>Code splitting اور lazy loading کا practical استعمال</li>
                <li>Environment variables کی security اور management</li>
                <li>Real API integration اور data handling</li>
                <li>Professional React app structure اور best practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copy Status */}
        {copyStatus && (
          <div className="copy-notification">
            ✅ {copyStatus}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Chapter26;