import React, { useState } from "react";
import "./App.css";
import Chapter0 from "./components/Chapter0";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter6 from "./components/Chapter6";
import Chapter7 from "./components/Chapter7";
import Chapter8 from "./components/Chapter8";
import Chapter9 from "./components/Chapter9";
import Chapter10 from "./components/Chapter10";
import ColorZillaChapter from "./components/ColorZillaChapter";
import Chapter12 from "./components/Chapter12";
import Chapter13 from "./components/Chapter13";
import Chapter14 from "./components/Chapter14";
import Chapter15 from "./components/Chapter15";
import Chapter16 from "./components/Chapter16";
import Chapter17 from "./components/Chapter17";
import Chapter18 from "./components/Chapter18";
import Chapter19 from "./components/Chapter19";
import Chapter20 from "./components/Chapter20";
import Chapter21 from "./components/Chapter21";
import Chapter22 from "./components/Chapter22";
import Chapter23 from "./components/Chapter23";
import Chapter24 from "./components/Chapter24";
import Chapter25 from "./components/Chapter25";
import Chapter26 from "./components/Chapter26";
import Chapter27 from "./components/Chapter27";
import CssShadcn from "./components/CssShadcn";

function App() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  // Navigation function for all chapters
  const scrollToChapter = (chapterId) => {
    const element = document.getElementById(`chapter-${chapterId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <div
        className="chapter-navigation"
        style={{
          marginBottom: "20px",
          padding: "15px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", color: "white" }}>
          ReactUrdu — ری ایکٹ ٹیوٹوریل
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Chapter 11 Button */}
          <button
            onClick={() => scrollToChapter(11)}
            className="interactive-btn"
            style={{
              background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              fontWeight: "600",
              boxShadow: "0 2px 8px rgba(255, 107, 53, 0.3)",
              minHeight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            🎨 Ch. 11 - Pick Color from Website
          </button>

          {/* Chapter 25 Button */}
          <button
            onClick={() => scrollToChapter(25)}
            className="interactive-btn"
            style={{ 
              background: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              fontWeight: "600",
              minHeight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0, 123, 255, 0.3)"
            }}
          >
            🚀 Chapter 25 - SweetAlert2
          </button>
          
          {/* Chapter 24 Button */}
          <button
            onClick={() => scrollToChapter(24)}
            className="interactive-btn"
            style={{ 
              background: "#6f42c1",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              fontWeight: "600",
              minHeight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(111, 66, 193, 0.3)"
            }}
          >
            🔐 Chapter 24 - Logout System
          </button>

          {/* Chapter 28 Button */}
          <button
            onClick={() => scrollToChapter(28)}
            className="interactive-btn"
            style={{ 
              background: "linear-gradient(135deg, #0078ff 0%, #00c6ff 100%)",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              fontWeight: "600",
              minHeight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0, 120, 255, 0.3)"
            }}
          >
            🎨 Chapter 28 - shadcn/ui Guide
          </button>
        </div>
      </div>

      {/* Render Chapter0 without props */}
      <Chapter0 />

      {/* All other chapters */}
      <div id="chapter-1" className="chapter-content">
        <Chapter1 />
      </div>
      <div id="chapter-2" className="chapter-content">
        <Chapter2 />
      </div>
      <div id="chapter-3" className="chapter-content">
        <Chapter3 />
      </div>
      <div id="chapter-4" className="chapter-content">
        <Chapter4 />
      </div>
      <div id="chapter-5" className="chapter-content">
        <Chapter5 />
      </div>
      <div id="chapter-6" className="chapter-content">
        <Chapter6 />
      </div>
      <div id="chapter-7" className="chapter-content">
        <Chapter7 />
      </div>
      <div id="chapter-8" className="chapter-content">
        <Chapter8 />
      </div>
      <div id="chapter-9" className="chapter-content">
        <Chapter9 />
      </div>
      <div id="chapter-10" className="chapter-content">
        <Chapter10 />
      </div>
      <div id="chapter-11" className="chapter-content">
        <ColorZillaChapter />
      </div>
      <div id="chapter-12" className="chapter-content">
        <Chapter12 />
      </div>
      <div id="chapter-13" className="chapter-content">
        <Chapter13 />
      </div>
      <div id="chapter-14" className="chapter-content">
        <Chapter14 />
      </div>
      <div id="chapter-15" className="chapter-content">
        <Chapter15 />
      </div>
      <div id="chapter-16" className="chapter-content">
        <Chapter16 />
      </div>
      <div id="chapter-17" className="chapter-content">
        <Chapter17 />
      </div>
      <div id="chapter-18" className="chapter-content">
        <Chapter18 />
      </div>
      <div id="chapter-19" className="chapter-content">
        <Chapter19 />
      </div>
      <div id="chapter-20" className="chapter-content">
        <Chapter20 />
      </div>
      <div id="chapter-21" className="chapter-content">
        <Chapter21 />
      </div>
      <div id="chapter-22" className="chapter-content">
        <Chapter22 />
      </div>
      <div id="chapter-23" className="chapter-content">
        <Chapter23 />
      </div>
      <div id="chapter-24" className="chapter-content">
        <Chapter24 />
      </div>
      <div id="chapter-25" className="chapter-content">
        <Chapter25 />
      </div>
      <div id="chapter-26" className="chapter-content">
        <Chapter26 />
      </div>
      <div id="chapter-27" className="chapter-content">
        <Chapter27 />
      </div>
      <div id="chapter-28" className="chapter-content">
        <CssShadcn />
      </div>
      
      {copySuccess && <p className="copy-msg">{copySuccess}</p>}

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#0078ff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 120, 255, 0.3)",
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    </div>
  );
}

export default App;