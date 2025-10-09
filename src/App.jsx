import React, { useState } from 'react';
import './App.css';
import Chapter0 from './components/Chapter0';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Chapter5 from './components/Chapter5';
import Chapter6 from './components/Chapter6';
import Chapter7 from './components/Chapter7';
import Chapter8 from './components/Chapter8';
import Chapter9 from './components/Chapter9';
import Chapter10 from './components/Chapter10';
import ColorZillaChapter from './components/ColorZillaChapter';  // ✅ نیا Chapter شامل کریں

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
      <div id="chapter-11" className="chapter-content">  {/* ✅ نیا Chapter 11 شامل کریں */}
        <ColorZillaChapter />
      </div>
      
      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default App;