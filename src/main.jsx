// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Direct implementation in main.jsx
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (
    (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) || 
    (e.ctrlKey && key === "u") || 
    key === "f12"                 
  ) {
    e.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)