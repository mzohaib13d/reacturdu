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

function App() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  return (
    <div className="app-container">
      <h1 className="urdu-heading">ReactUrdu — ری ایکٹ ٹیوٹوریل</h1>

      <Chapter0 />

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
      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default App;
