import React, { useState, useEffect } from "react";

function Chapter26() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Code blocks (same as before)
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

  // Live Weather Dashboard Component
  const LiveWeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("Karachi");

    const fetchWeather = async () => {
      setLoading(true);
      try {
        // Using the same API structure from the chapter
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true&timezone=auto`
        );
        const data = await response.json();
        setWeatherData(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeatherData({ error: "Failed to load weather data" });
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchWeather();
    }, []);

    const getWeatherIcon = (temperature) => {
      if (temperature > 30) return "☀️";
      if (temperature > 20) return "🌤️";
      if (temperature > 10) return "⛅";
      return "🌧️";
    };

    return (
      <div className="live-weather-dashboard">
        <div className="weather-header">
          <h3>🌦 Live Weather Dashboard</h3>
          <p>Real-time weather data using Open-Meteo API</p>
        </div>

        <div className="weather-card">
          <div className="weather-city">
            <h4>📍 {city}</h4>
            <button 
              onClick={fetchWeather} 
              disabled={loading}
              className="refresh-btn"
            >
              {loading ? "🔄 Updating..." : "🔄 Refresh"}
            </button>
          </div>

          {loading ? (
            <div className="weather-loading">
              <div className="loading-spinner"></div>
              <p>Loading weather data...</p>
            </div>
          ) : weatherData ? (
            weatherData.error ? (
              <div className="weather-error">
                <p>❌ {weatherData.error}</p>
              </div>
            ) : (
              <div className="weather-info">
                <div className="weather-main">
                  <span className="weather-icon">
                    {getWeatherIcon(weatherData.temperature)}
                  </span>
                  <span className="weather-temp">
                    {weatherData.temperature}°C
                  </span>
                </div>
                <div className="weather-details">
                  <div className="weather-detail">
                    <span>💨 Wind Speed</span>
                    <span>{weatherData.windspeed} km/h</span>
                  </div>
                  <div className="weather-detail">
                    <span>🧭 Wind Direction</span>
                    <span>{weatherData.winddirection}°</span>
                  </div>
                  <div className="weather-detail">
                    <span>⏱️ Last Updated</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="weather-placeholder">
              <p>Click refresh to load weather data</p>
            </div>
          )}
        </div>

        <div className="weather-footer">
          <p><small>Powered by Open-Meteo API • Updates on refresh</small></p>
        </div>
      </div>
    );
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

        {/* ... (previous content remains the same) ... */}

      </section>

      {/* Part 2: Environment Variables */}
      <section className="section-card">
        <h2 className="section-title">🔐 Part 2 — Environment Variables (.env)</h2>
        
        {/* ... (previous content remains the same) ... */}

      </section>

      {/* Weather Dashboard Project */}
      <section className="section-card">
        <h2 className="section-title">🌦 Weather Dashboard Project</h2>
        
        {/* Live Weather Dashboard */}
        <div className="live-demo-section">
          <h3 className="demo-title">🎯 Live Weather Dashboard Demo</h3>
          <p className="demo-subtitle">See the concepts in action with real weather data</p>
          <LiveWeatherDashboard />
        </div>

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

        {/* ... (rest of the weather dashboard project content remains the same) ... */}

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

      <style jsx>{`
        .live-weather-dashboard {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 2rem;
          margin: 2rem 0;
          color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .weather-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .weather-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .weather-header p {
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
        }

        .weather-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .weather-city {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .weather-city h4 {
          margin: 0;
          font-size: 1.2rem;
        }

        .refresh-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .refresh-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .refresh-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .weather-loading {
          text-align: center;
          padding: 2rem;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255,255,255,0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .weather-info {
          text-align: center;
        }

        .weather-main {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .weather-icon {
          font-size: 3rem;
        }

        .weather-temp {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .weather-detail {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.8rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .weather-detail span:first-child {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .weather-detail span:last-child {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .weather-error {
          text-align: center;
          padding: 2rem;
          color: #ff6b6b;
        }

        .weather-placeholder {
          text-align: center;
          padding: 2rem;
          opacity: 0.8;
        }

        .weather-footer {
          text-align: center;
          margin-top: 1rem;
          opacity: 0.7;
        }

        .live-demo-section {
          margin-bottom: 3rem;
        }

        .demo-title {
          text-align: center;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .demo-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .live-weather-dashboard {
            padding: 1rem;
            margin: 1rem 0;
          }

          .weather-details {
            grid-template-columns: 1fr;
          }

          .weather-main {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Chapter26;