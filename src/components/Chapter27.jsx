// Chapter27.jsx
import React, { useState, useEffect } from "react";

const Chapter27 = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Lahore");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Environment variables
  const API_URL = import.meta.env.VITE_WEATHER_API || "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY || "demo_mode";
  const MODE = import.meta.env.VITE_MODE || "Development";

  // Real weather data for major cities (demo data)
  const realWeatherData = {
    "lahore": {
      name: "Lahore",
      main: { temp: 28 },
      weather: [{ description: "clear sky" }],
      cod: 200
    },
    "karachi": {
      name: "Karachi", 
      main: { temp: 32 },
      weather: [{ description: "haze" }],
      cod: 200
    },
    "islamabad": {
      name: "Islamabad",
      main: { temp: 25 },
      weather: [{ description: "partly cloudy" }],
      cod: 200
    },
    "london": {
      name: "London",
      main: { temp: 15 },
      weather: [{ description: "light rain" }],
      cod: 200
    },
    "new york": {
      name: "New York",
      main: { temp: 20 },
      weather: [{ description: "scattered clouds" }],
      cod: 200
    },
    "tokyo": {
      name: "Tokyo", 
      main: { temp: 22 },
      weather: [{ description: "overcast clouds" }],
      cod: 200
    },
    "dubai": {
      name: "Dubai",
      main: { temp: 35 },
      weather: [{ description: "sunny" }],
      cod: 200
    },
    "paris": {
      name: "Paris",
      main: { temp: 18 },
      weather: [{ description: "moderate rain" }],
      cod: 200
    }
  };

  // Weather data fetch function
  useEffect(() => {
    if (city && city.trim() !== "") {
      fetchWeatherData();
    }
  }, [city]);

  const fetchWeatherData = async () => {
    const cityLower = city.toLowerCase().trim();
    
    // اگر real API key ہے تو actual API call کریں
    if (API_KEY !== "demo_mode" && API_KEY !== "demo_key") {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setError("City not found");
          setWeather(null);
        }
      } catch (err) {
        setError("API Error: " + err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
      return;
    }

    // Demo mode میں real weather data دکھائیں
    setLoading(true);
    setError("");
    
    setTimeout(() => {
      if (realWeatherData[cityLower]) {
        setWeather(realWeatherData[cityLower]);
      } else {
        // اگر city موجود نہیں ہے تو random data بنائیں
        const weatherDescriptions = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain", "rain", "thunderstorm", "snow", "mist"];
        const randomDescription = weatherDescriptions[Math.floor(Math.random() * weatherDescriptions.length)];
        
        setWeather({
          name: city,
          main: { temp: Math.round(Math.random() * 30 + 10) },
          weather: [{ description: randomDescription }],
          cod: 200
        });
      }
      setLoading(false);
    }, 800);
  };

  const WeatherCard = ({ data }) => {
    if (loading) return (
      <div style={{
        background: "#f0f8ff",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <p>⏳ Loading weather data...</p>
      </div>
    );

    if (error) return (
      <div style={{
        background: "#ffe6e6",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <p>❌ {error}</p>
      </div>
    );

    if (!data) return (
      <div style={{
        background: "#fff3cd",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <p>🌤️ Enter a city name to see weather</p>
        <p style={{fontSize: "14px", marginTop: "10px"}}>
          Try: Lahore, Karachi, Islamabad, London, etc.
        </p>
      </div>
    );

    if (data.cod !== 200) return (
      <div style={{
        background: "#ffe6e6",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <p>City not found ⚠️</p>
        <p style={{fontSize: "14px", marginTop: "10px"}}>Please try another city name</p>
      </div>
    );

    return (
      <div style={{
        background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
        margin: "20px auto",
        padding: "25px",
        borderRadius: "15px",
        width: "280px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{margin: "0 0 10px 0", fontSize: "1.5rem"}}>{data.name}</h2>
        <h3 style={{fontSize: "3rem", margin: "10px 0", fontWeight: "bold"}}>{data.main.temp}°C</h3>
        <p style={{fontSize: "1.3rem", margin: "10px 0", textTransform: "capitalize"}}>
          {data.weather[0].description}
        </p>
        <div style={{marginTop: "15px", fontSize: "14px", opacity: "0.9"}}>
          {API_KEY === "demo_mode" ? (
            <span>🌍 Realistic Demo Data</span>
          ) : (
            <span>✅ Live Weather Data</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          🌍 Chapter 27 — API Keys Security & Environment Mode (Development vs Production)
        </h1>
        <p className="chapter-subtitle2">
          (React + Vite Environment Practical Example)
        </p>
      </div>

      <div className="content-wrapper">
        <div className="main-content">
          {/* Section 1: Introduction */}
          <div className="section-card">
            <h2 className="section-title">🎯 مقصد</h2>
            <div className="urdu-text">
              <p>یہ چیپٹر طلبہ کو سکھائے گا کہ:</p>
              <ul>
                <li>
                  React (Vite) میں .env فائل کا صحیح استعمال کیسے کیا جاتا ہے
                </li>
                <li>API Keys کو محفوظ طریقے سے چھپانا کیوں ضروری ہے</li>
                <li>
                  Development اور Production کے لیے الگ Environment Modes کیسے
                  بنائے جاتے ہیں
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Environment Variables Theory */}
          <div className="section-card">
            <h2 className="section-title">
              🧠 1️⃣ Environment Variables کیا ہیں؟
            </h2>
            <div className="urdu-text">
              <p>
                Environment Variable ایک ایسا محفوظ variable ہوتا ہے جو آپ کے
                code میں براہِ راست نظر نہیں آتا۔
              </p>
              <div className="english-quote">
                // ❌ خطرناک طریقہ
                <br />
                const API_KEY = "abc123mysecretkey";
                <br />
                <br />
                // ✅ محفوظ طریقہ
                <br />
                const API_KEY = import.meta.env.VITE_API_KEY;
              </div>
              <p>
                ایسا کرنا خطرناک ہے کیونکہ کوئی بھی آپ کا key دیکھ سکتا ہے۔ اسی
                لیے ہم API Keys کو .env فائل میں رکھتے ہیں تاکہ وہ code سے الگ
                رہیں۔
              </p>
            </div>
          </div>

          {/* Section 3: File Structure */}
          <div className="section-card">
            <h2 className="section-title">🗂️ 2️⃣ فائل اسٹرکچر</h2>
            <div className="english-code">
              <code>{`src/
 ├── App.jsx
 ├── components/
 │    └── WeatherCard.jsx
 ├── main.jsx
.env
.env.production
.env.development`}</code>
            </div>
          </div>

          {/* Section 4: Environment Files */}
          <div className="section-card">
            <h2 className="section-title">⚙️ 3️⃣ .env فائل بنانا</h2>

            <div className="code-section">
              <div className="code-header">
                <span>🟢 .env.development</span>
              </div>
              <div className="english-code">
                <code>{`VITE_WEATHER_API=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_dev_api_key_here
VITE_MODE=Development`}</code>
              </div>
            </div>

            <div className="code-section">
              <div className="code-header">
                <span>🔵 .env.production</span>
              </div>
              <div className="english-code">
                <code>{`VITE_WEATHER_API=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_prod_api_key_here
VITE_MODE=Production`}</code>
              </div>
            </div>

            <div className="info-box">
              <p>
                <strong>⚠️ نوٹ:</strong>
              </p>
              <p>
                Vite میں ہر environment variable کو VITE_ سے شروع ہونا لازمی ہے۔
                ورنہ وہ React app کے اندر available نہیں ہوگا۔
              </p>
            </div>
          </div>

          {/* Section 5: App.jsx Code */}
          <div className="section-card">
            <h2 className="section-title">💻 4️⃣ App.jsx</h2>
            <div className="english-code">
              <code>{`import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Lahore");

  const API = import.meta.env.VITE_WEATHER_API;
  const KEY = import.meta.env.VITE_API_KEY;
  const MODE = import.meta.env.VITE_MODE;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(\`\${API}?q=\${city}&appid=\${KEY}&units=metric\`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("API Error:", err);
      }
    }
    fetchWeather();
  }, [city]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ React Weather App ({MODE})</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <WeatherCard data={weather} />
    </div>
  );
}`}</code>
            </div>
          </div>

          {/* Section 6: WeatherCard.jsx Code */}
          <div className="section-card">
            <h2 className="section-title">🧩 5️⃣ WeatherCard.jsx</h2>
            <div className="english-code">
              <code>{`export default function WeatherCard({ data }) {
  if (!data) return <p>Loading...</p>;
  if (data.cod !== 200) return <p>City not found ⚠️</p>;

  return (
    <div style={{
      background: "#f0f8ff",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "15px",
      width: "250px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.2)"
    }}>
      <h2>{data.name}</h2>
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].description}</p>
    </div>
  );
}`}</code>
            </div>
          </div>

          {/* Section 7: Run Modes */}
          <div className="section-card">
            <h2 className="section-title">🚀 6️⃣ Run Modes:</h2>
            <div className="urdu-text">
              <p>
                <strong>Development Mode چلانے کے لیے:</strong>
              </p>
              <div className="english-code">
                <code>npm run dev</code>
              </div>

              <p>
                <strong>Production Build کے لیے:</strong>
              </p>
              <div className="english-code">
                <code>{`npm run build
npm run preview`}</code>
              </div>

              <p>
                Vite خود بخود .env.development یا .env.production فائل کا انتخاب
                کرتا ہے، اس بات پر کہ آپ کون سا command چلا رہے ہیں۔
              </p>
            </div>
          </div>

          {/* Section 8: Security Note */}
          <div className="section-card">
            <h2 className="section-title">🔐 7️⃣ Security Note:</h2>
            <div className="urdu-text">
              <p>.env فائل کو کبھی بھی GitHub پر push نہ کریں۔</p>
              <p>.gitignore میں ضرور شامل کریں:</p>
              <div className="english-code">
                <code>{`.env
.env.*`}</code>
              </div>
            </div>
          </div>

          {/* Section 9: Summary Box */}
          <div className="section-card">
            <h2 className="section-title">🧭 Summary Box</h2>
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
                    <td>
                      <code>.env فائل</code>
                    </td>
                    <td>حساس ڈیٹا محفوظ کرنے کے لیے</td>
                  </tr>
                  <tr>
                    <td>
                      <code>VITE_ Prefix</code>
                    </td>
                    <td>لازمی prefix تاکہ Vite access دے سکے</td>
                  </tr>
                  <tr>
                    <td>
                      <code>import.meta.env</code>
                    </td>
                    <td>React میں environment variable حاصل کرنے کا طریقہ</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.env.development</code>
                    </td>
                    <td>لوکل موڈ کے لیے environment</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.env.production</code>
                    </td>
                    <td>ڈپلائمنٹ موڈ کے لیے environment</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.gitignore</code>
                    </td>
                    <td>secret فائلز کو ریپو سے بچانے کے لیے</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Phase 2 Section */}
          <div
            className="section-card"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            }}
          >
            <h2 className="section-title" style={{ color: "white" }}>
              ⚡️ Phase 2: Advanced React Development
            </h2>
            <h3
              className="section-title"
              style={{ color: "white", fontSize: "1.5rem" }}
            >
              🌍 Chapter 27 — Environment Variables, API Security & Environment
              Modes
            </h3>
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              (React + Vite + Weather App Practical Example)
            </p>
          </div>

          {/* Phase 2 Goals */}
          <div className="section-card">
            <h2 className="section-title">🎯 چیپٹر کا مقصد</h2>
            <div className="urdu-text">
              <p>اس چیپٹر میں طلبہ سیکھیں گے:</p>
              <ul>
                <li>✅ .env فائل کیسے بناتے ہیں</li>
                <li>✅ API Keys کو code سے محفوظ کیسے رکھتے ہیں</li>
                <li>✅ Development vs Production mode میں کیا فرق ہے</li>
                <li>
                  ✅ Deployment پر Environment Variables کیسے add کرتے ہیں
                </li>
                <li>✅ API Keys کو Public GitHub سے کیسے چھپایا جاتا ہے</li>
              </ul>
            </div>
          </div>

          {/* Step 1: Environment Variables */}
          <div className="section-card">
            <h2 className="section-title">
              🔹 Step 1: Environment Variables کیا ہیں؟
            </h2>
            <div className="urdu-text">
              <p>
                Environment Variables دراصل وہ معلومات ہوتی ہیں جنہیں ہم code کے
                اندر hard-code نہیں کرتے، بلکہ الگ فائل (.env) میں محفوظ کرتے
                ہیں۔
              </p>
              <div className="english-quote">
                // ❌ غلط طریقہ
                <br />
                const API_KEY = "my_secret_api_key";
                <br />
                <br />
                // ✅ صحیح طریقہ
                <br />
                const API_KEY = import.meta.env.VITE_API_KEY;
              </div>
              <p>
                کیونکہ اگر آپ اپنا کوڈ GitHub پر اپ لوڈ کریں تو کوئی بھی دیکھ
                سکتا ہے۔ اس لیے بہتر طریقہ ہے .env فائل استعمال کرنا۔
              </p>
            </div>
          </div>

          {/* Step 2: File Structure */}
          <div className="section-card">
            <h2 className="section-title">🔹 Step 2: فائل اسٹرکچر</h2>
            <div className="english-code">
              <code>{`my-weather-app/
 ├── src/
 │    ├── App.jsx
 │    ├── components/
 │    │    └── WeatherCard.jsx
 │    └── main.jsx
 ├── .env.development
 ├── .env.production
 └── .gitignore`}</code>
            </div>
          </div>

          {/* Step 3: Environment Files */}
          <div className="section-card">
            <h2 className="section-title">🔹 Step 3: .env فائل بنانا</h2>

            <div className="code-section">
              <div className="code-header">
                <span>🟢 .env.development</span>
              </div>
              <div className="english-code">
                <code>{`VITE_WEATHER_API=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_dev_api_key_here
VITE_MODE=Development`}</code>
              </div>
            </div>

            <div className="code-section">
              <div className="code-header">
                <span>🔵 .env.production</span>
              </div>
              <div className="english-code">
                <code>{`VITE_WEATHER_API=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_prod_api_key_here
VITE_MODE=Production`}</code>
              </div>
            </div>

            <div className="info-box">
              <p>
                <strong>⚠️ یاد رکھیں:</strong>
              </p>
              <p>
                Vite میں ہر environment variable کو لازماً VITE_ سے شروع کرنا
                ہوتا ہے ورنہ وہ React code میں import.meta.env کے ذریعے دستیاب
                نہیں ہوگا۔
              </p>
            </div>
          </div>

          {/* Step 4: App.jsx */}
          <div className="section-card">
            <h2 className="section-title">
              🔹 Step 4: App.jsx (Main Component)
            </h2>
            <div className="english-code">
              <code>{`import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState(null);

  const API = import.meta.env.VITE_WEATHER_API;
  const KEY = import.meta.env.VITE_API_KEY;
  const MODE = import.meta.env.VITE_MODE;

  useEffect(() => {
    async function getWeather() {
      try {
        const res = await fetch(\`\${API}?q=\${city}&appid=\${KEY}&units=metric\`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("API Error:", err);
      }
    }
    getWeather();
  }, [city]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ React Weather App ({MODE})</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <WeatherCard data={weather} />
    </div>
  );
}`}</code>
            </div>
          </div>

          {/* Step 5: WeatherCard.jsx */}
          <div className="section-card">
            <h2 className="section-title">🔹 Step 5: WeatherCard.jsx</h2>
            <div className="english-code">
              <code>{`export default function WeatherCard({ data }) {
  if (!data) return <p>Loading...</p>;
  if (data.cod !== 200) return <p>City not found ⚠️</p>;

  return (
    <div
      style={{
        background: "#f0f8ff",
        padding: "20px",
        margin: "20px auto",
        width: "250px",
        borderRadius: "15px",
        boxShadow: "0px 3px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{data.name}</h2>
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].description}</p>
    </div>
  );
}`}</code>
            </div>
          </div>

          {/* Step 6: Run Modes */}
          <div className="section-card">
            <h2 className="section-title">🔹 Step 6: Run Modes</h2>
            <div className="urdu-text">
              <p>
                <strong>Development کے لیے:</strong>
              </p>
              <div className="english-code">
                <code>npm run dev</code>
              </div>

              <p>
                <strong>Production Build کے لیے:</strong>
              </p>
              <div className="english-code">
                <code>{`npm run build
npm run preview`}</code>
              </div>

              <p>
                Vite خود بخود .env.development یا .env.production فائل منتخب کر
                لیتا ہے اس بات پر منحصر کہ آپ کون سا command چلا رہے ہیں۔
              </p>
            </div>
          </div>

          {/* Step 7: Gitignore */}
          <div className="section-card">
            <h2 className="section-title">
              🔹 Step 7: .gitignore میں Env فائلیں شامل کریں
            </h2>
            <div className="english-code">
              <code>{`.env
.env.*`}</code>
            </div>
            <div className="urdu-text">
              <p>تاکہ آپ کی secret keys GitHub پر نہ جائیں۔ 🔐</p>
            </div>
          </div>

          {/* Deployment Section */}
          <div
            className="section-card"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            }}
          >
            <h2 className="section-title" style={{ color: "white" }}>
              🌍 Chapter 27 — API Keys Security & Environment Mode (Deployment
              Ready)
            </h2>
            <p style={{ textAlign: "center" }}>
              اب ہم دیکھیں گے کہ Deployment (Netlify / Vercel) پر Environment
              Variables کیسے Add کی جاتی ہیں۔
            </p>
          </div>

          {/* Vite Environment Modes */}
          <div className="section-card">
            <h2 className="section-title">
              🧭 Step 1: Vite Environment کے تین Modes ہوتے ہیں:
            </h2>
            <div className="file-table">
              <table>
                <thead>
                  <tr>
                    <th>Mode</th>
                    <th>Command</th>
                    <th>Env File</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Development</td>
                    <td>
                      <code>npm run dev</code>
                    </td>
                    <td>
                      <code>.env.development</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td>
                      <code>npm run build</code>
                    </td>
                    <td>
                      <code>.env.production</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Preview</td>
                    <td>
                      <code>npm run preview</code>
                    </td>
                    <td>
                      <code>.env.production</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Netlify Deployment */}
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">
                ⚙️ Step 2: Netlify پر API Keys Add کرنا
              </h3>
              <div className="urdu-text">
                <p>
                  <strong>1️⃣</strong> اپنا Project Deploy کریں
                </p>
                <p>
                  <strong>2️⃣</strong> Netlify Dashboard → Site Settings →
                  Environment Variables پر جائیں
                </p>
                <p>
                  <strong>3️⃣</strong> وہاں Add کریں:
                </p>
                <div className="english-code">
                  <code>{`VITE_API_KEY = your_real_api_key
VITE_WEATHER_API = https://api.openweathermap.org/data/2.5/weather
VITE_MODE = Production`}</code>
                </div>
                <p>
                  Netlify خود بخود ان values کو Production Environment میں
                  Inject کرے گا۔ اس طرح آپ کا key محفوظ رہے گا۔ 🔒
                </p>
              </div>
            </div>
          </div>

          {/* Vercel Deployment */}
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">⚙️ Step 3: Vercel پر Setup</h3>
              <div className="urdu-text">
                <p>
                  <strong>1️⃣</strong> Login to https://vercel.com
                </p>
                <p>
                  <strong>2️⃣</strong> اپنے Project میں جائیں → Settings →
                  Environment Variables
                </p>
                <p>
                  <strong>3️⃣</strong> Add کریں:
                </p>
                <div className="english-code">
                  <code>{`VITE_API_KEY
VITE_WEATHER_API
VITE_MODE`}</code>
                </div>
                <p>اور Save کریں ✅</p>
                <p>
                  Vercel بھی Deploy کے وقت ان Environment Values کو استعمال کرے
                  گا۔
                </p>
              </div>
            </div>
          </div>

          {/* Testing */}
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">⚙️ Step 4: Test کریں</h3>
              <div className="urdu-text">
                <p>
                  <strong>Production Build کے بعد:</strong>
                </p>
                <div className="english-code">
                  <code>{`npm run build
npm run preview`}</code>
                </div>
                <p>
                  اور دیکھیں کہ ({MODE}) text میں "Production" ظاہر ہوتا ہے۔ یہ
                  ثابت کرتا ہے کہ App نے .env.production استعمال کیا ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Live Demo - UPDATED */}
          <div className="section-card">
            <h2 className="section-title">🌤️ لائیو ویدر ایپ ڈیمو</h2>
            
            <div className="info-box">
              <p><strong>✨ ڈیمو فیچر:</strong></p>
              <p>یہ ڈیمو realistic weather data دکھاتا ہے major cities کے لیے۔ اگر آپ real API key شامل کریں گے تو live data fetch ہوگا۔</p>
            </div>

            <div style={{ 
              textAlign: "center", 
              marginTop: "20px",
              padding: "25px",
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              borderRadius: "15px",
              border: "2px solid #0078ff"
            }}>
              <h3 style={{color: "#0078ff", marginBottom: "20px"}}>React Weather App ({MODE})</h3>
              
              <div style={{ margin: "20px 0" }}>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name..."
                  style={{
                    padding: "12px 16px",
                    fontSize: "16px",
                    margin: "10px",
                    width: "250px",
                    borderRadius: "10px",
                    border: "2px solid #0078ff",
                    textAlign: "center",
                    outline: "none"
                  }}
                />
                <br/>
                <button
                  onClick={fetchWeatherData}
                  style={{
                    padding: "12px 24px",
                    fontSize: "16px",
                    backgroundColor: "#0078ff",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    margin: "10px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#0078ff"}
                >
                  Get Weather
                </button>
              </div>

              {/* Quick City Buttons */}
              <div style={{ margin: "15px 0" }}>
                <p style={{ marginBottom: "10px", color: "#666" }}>Quick cities:</p>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px" }}>
                  {["Lahore", "Karachi", "Islamabad", "London", "Dubai"].map((quickCity) => (
                    <button
                      key={quickCity}
                      onClick={() => setCity(quickCity)}
                      style={{
                        padding: "8px 12px",
                        fontSize: "12px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      {quickCity}
                    </button>
                  ))}
                </div>
              </div>

              {/* API Key Status */}
              <div style={{
                padding: "12px",
                margin: "15px auto",
                borderRadius: "10px",
                maxWidth: "350px",
                backgroundColor: API_KEY === "demo_mode" ? "#fff3cd" : "#d4edda",
                border: API_KEY === "demo_mode" ? "2px solid #ffeaa7" : "2px solid #c3e6cb"
              }}>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
                  {API_KEY === "demo_mode" ? (
                    "🔸 Demo Mode - Realistic Weather Data"
                  ) : (
                    "✅ Live Mode - Real API Data"
                  )}
                </p>
              </div>

              <WeatherCard data={weather} />

              {/* Instructions */}
              <div style={{
                marginTop: "25px",
                padding: "20px",
                background: "#e8f4fd",
                borderRadius: "10px",
                textAlign: "left",
                borderLeft: "4px solid #0078ff"
              }}>
                <h4 style={{color: "#0078ff", marginBottom: "15px"}}>🚀 Live Data کے لیے:</h4>
                <ol style={{ textAlign: "left", direction: "ltr", lineHeight: "1.6" }}>
                  <li><strong>OpenWeatherMap</strong> سے مفت API key حاصل کریں: <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" style={{color: "#0078ff"}}>https://openweathermap.org/api</a></li>
                  <li>اپنے پروجیکٹ میں <code style={{background: "#f8f9fa", padding: "2px 6px", borderRadius: "4px"}}>.env</code> فائل بنائیں</li>
                  <li>اندر لکھیں: <code style={{background: "#f8f9fa", padding: "2px 6px", borderRadius: "4px"}}>VITE_API_KEY=your_actual_api_key_here</code></li>
                  <li>ایپ کو restart کریں</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="section-card">
            <h2 className="section-title">💡 Summary Box</h2>
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
                    <td>
                      <code>.env</code>
                    </td>
                    <td>حساس معلومات کے لیے محفوظ فائل</td>
                  </tr>
                  <tr>
                    <td>
                      <code>VITE_ Prefix</code>
                    </td>
                    <td>React (Vite) میں ضروری prefix</td>
                  </tr>
                  <tr>
                    <td>
                      <code>import.meta.env</code>
                    </td>
                    <td>Environment variables access کرنے کا طریقہ</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.env.development</code>
                    </td>
                    <td>Local test کے لیے فائل</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.env.production</code>
                    </td>
                    <td>Deploy کے لیے فائل</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.gitignore</code>
                    </td>
                    <td>secret files کو public repo سے محفوظ رکھتا ہے</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Netlify/Vercel Envs</code>
                    </td>
                    <td>Deploy کے وقت secure API keys مہیا کرنے کا طریقہ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="summary-card">
            <h3 className="section-title">🎓 Conclusion</h3>
            <div className="summary-content">
              <p>اس چیپٹر میں آپ نے سیکھا:</p>
              <p>✅ React میں .env فائل کا استعمال</p>
              <p>✅ Development vs Production modes</p>
              <p>✅ Deploy کرتے وقت secret API keys کیسے محفوظ رکھی جاتی ہیں</p>
              <p>
                یعنی اب آپ نے Phase 2 کے Complete "Environment Mastery" Chapter
                (27) کو ایک ہی تسلسل میں پڑھا — تاکہ طلبہ کو .env, API
                Security, اور Deployment Setup سب ایک ہی جگہ سمجھ آ جائے۔
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter27;