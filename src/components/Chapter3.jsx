import React, { useState } from 'react';

function Chapter3() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("کاپی ہوگیا ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  const viteCode = `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`;

  return (
    <div className="card urdu-text">
      <h2>Chapter 3. Vite بنیاد پر React سیٹ اپ — ایک مختصر رہنما</h2>
      <p>
        یہ وہ راستہ ہے جسے React ٹیم اور کمیونٹی تجویز کر رہی ہے: CRA کی جگہ
        Vite استعمال کرنا۔
      </p>
      <pre className="english-code">
        <code>{viteCode}</code>
      </pre>
      <button onClick={() => handleCopy(viteCode)} className="copy-btn">
        کاپی کریں
      </button>
      <p>یہ ایک بہت ہلکا، جدید، تیز React project base تیار کرے گا۔</p>
      {copySuccess && <p className="copy-msg">{copySuccess}</p>}
    </div>
  );
}

export default Chapter3;