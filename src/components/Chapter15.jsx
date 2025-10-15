import React, { useState, useLayoutEffect, useRef, useImperativeHandle, forwardRef } from "react";
import '../App.css';
import '../App9211.css';

// 🎯 useLayoutEffect Example Component
const LayoutEffectDemo = () => {
  const boxRef = useRef();
  const [positionInfo, setPositionInfo] = useState("");

  useLayoutEffect(() => {
    const box = boxRef.current;
    const screenWidth = window.innerWidth;
    const boxWidth = box.offsetWidth;

    // 🎯 باکس کو horizontally درمیان میں لانا
    const centerPosition = (screenWidth - boxWidth) / 2;
    box.style.left = centerPosition + "px";

    setPositionInfo(`سکرین کی چوڑائی: ${screenWidth}px | باکس کی چوڑائی: ${boxWidth}px | پوزیشن: ${centerPosition}px`);
  }, []);

  return (
    <div className="demo-section">
      <h3>⚙️ useLayoutEffect - DOM کے فوراً بعد چلنے والا Hook</h3>
      <p className="urdu-text">useLayoutEffect render کے فوراً بعد چلتا ہے، اسکرین دکھانے سے پہلے</p>

      <div className="demo-card">
        <div className="layout-effect-demo">
          <div className="position-info">
            <p>{positionInfo}</p>
          </div>
          <div ref={boxRef} className="centered-box">
            🎁 میں خودکار طور پر درمیان میں آ گیا!
          </div>
          <div className="explanation">
            <p><strong>useLayoutEffect کا فائدہ:</strong> کوئی flicker نہیں ہوا، باکس شروع سے ہی درمیان میں دکھائی دیا</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🎯 useImperativeHandle Example - Custom Input Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 🎯 useImperativeHandle سے custom functions بنائے
  useImperativeHandle(ref, () => ({
    clearInput() {
      inputRef.current.value = "";
      inputRef.current.style.borderColor = "#dc3545";
      inputRef.current.style.backgroundColor = "#fff5f5";
      setTimeout(() => {
        inputRef.current.style.borderColor = "#0078ff";
        inputRef.current.style.backgroundColor = "white";
      }, 500);
    },
    focusInput() {
      inputRef.current.focus();
      inputRef.current.style.borderColor = "#28a745";
      inputRef.current.style.boxShadow = "0 0 8px rgba(40, 167, 69, 0.3)";
    },
    getValue() {
      return inputRef.current.value;
    },
    setValue(newValue) {
      inputRef.current.value = newValue;
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="کچھ لکھیں..."
      className="custom-input"
      style={{
        transition: "all 0.3s ease"
      }}
    />
  );
});

// 🎯 useImperativeHandle Demo Component
const ImperativeHandleDemo = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => {
    inputRef.current.clearInput(); // 🔥 child کا custom function
    setInputValue("");
  };

  const handleFocus = () => {
    inputRef.current.focusInput();
  };

  const handleGetValue = () => {
    const value = inputRef.current.getValue();
    alert(`ان پٹ کی ویلیو: "${value}"`);
  };

  const handleSetValue = () => {
    inputRef.current.setValue("React Urdu Tutorial! 🎯");
    setInputValue("React Urdu Tutorial! 🎯");
  };

  return (
    <div className="demo-section">
      <h3>🪄 useImperativeHandle - Custom Ref Functions</h3>
      <p className="urdu-text">Parent component کو child کے custom functions تک رسائی دینا</p>

      <div className="demo-card">
        <div className="imperative-handle-demo">
          <div className="input-section">
            <CustomInput ref={inputRef} />
            <div className="current-value">
              <p>موجودہ ویلیو: <strong>{inputValue}</strong></p>
            </div>
          </div>

          <div className="control-buttons">
            <div className="button-group">
              <button onClick={handleFocus} className="btn-focus">
                🔍 فوکس کرو
              </button>
              <button onClick={handleClear} className="btn-clear">
                🧹 صاف کرو
              </button>
            </div>
            <div className="button-group">
              <button onClick={handleGetValue} className="btn-get">
                📖 ویلیو پڑھو
              </button>
              <button onClick={handleSetValue} className="btn-set">
                ✏️ ویلیو لکھو
              </button>
            </div>
          </div>

          <div className="explanation">
            <p><strong>useImperativeHandle کا فائدہ:</strong> Parent component براہ راست child کے functions استعمال کر سکتا ہے</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🎯 Combined Example - Modal with useLayoutEffect and useImperativeHandle
const Modal = forwardRef(({ children }, ref) => {
  const modalRef = useRef();

  useLayoutEffect(() => {
    // Modal کو center میں لانا
    const modal = modalRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;

    modal.style.left = (screenWidth - modalWidth) / 2 + "px";
    modal.style.top = (screenHeight - modalHeight) / 2 + "px";
  }, []);

  useImperativeHandle(ref, () => ({
    show() {
      modalRef.current.style.display = "block";
      modalRef.current.style.opacity = "1";
    },
    hide() {
      modalRef.current.style.opacity = "0";
      setTimeout(() => {
        modalRef.current.style.display = "none";
      }, 300);
    }
  }));

  return (
    <div ref={modalRef} className="custom-modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
});

const CombinedDemo = () => {
  const modalRef = useRef();

  const showModal = () => {
    modalRef.current.show();
  };

  const hideModal = () => {
    modalRef.current.hide();
  };

  return (
    <div className="demo-section">
      <h3>🚀 Combined Example - Modal with Both Hooks</h3>
      <p className="urdu-text">useLayoutEffect اور useImperativeHandle کا ایک ساتھ استعمال</p>

      <div className="demo-card">
        <div className="combined-demo">
          <button onClick={showModal} className="modal-trigger">
            🪟 Modal دیکھیں
          </button>

          <Modal ref={modalRef}>
            <h3>🎯 Custom Modal</h3>
            <p>یہ modal دونوں hooks کا استعمال کرتا ہے:</p>
            <ul>
              <li>useLayoutEffect - center میں پوزیشن دینے کے لیے</li>
              <li>useImperativeHandle - show/hide functions کے لیے</li>
            </ul>
            <button onClick={hideModal} className="btn-close">
              ❌ بند کریں
            </button>
          </Modal>

          <div className="explanation">
            <p><strong>دونوں hooks کا فائدہ:</strong> Smooth animations کے ساتھ precise control</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chapter15 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const copySyntaxCode = () => {
    const syntaxCode = `// useLayoutEffect Syntax
useLayoutEffect(() => {
  // DOM operations here
}, [dependencies]);

// useImperativeHandle Syntax
useImperativeHandle(ref, () => ({
  customMethod() {
    // custom logic
  }
}));`;
    navigator.clipboard.writeText(syntaxCode);
    setCopyStatus("Syntax کوڈ کوپي ہو گیا!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const examples = [
    {
      id: 1,
      title: "مثال 1: useLayoutEffect - DOM Positioning",
      description: "useLayoutEffect کے ذریعے DOM element کو precise position دینا، بغیر کسی flicker کے۔",
      component: <LayoutEffectDemo />,
      code: `// LayoutEffectDemo.jsx - useLayoutEffect کی عملی مثال
import React, { useLayoutEffect, useRef } from "react";

const LayoutEffectDemo = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    const box = boxRef.current;
    const screenWidth = window.innerWidth;
    const boxWidth = box.offsetWidth;

    // 🎯 باکس کو horizontally درمیان میں لانا
    const centerPosition = (screenWidth - boxWidth) / 2;
    box.style.left = centerPosition + "px";
  }, []); // 🎯 خالی dependency - صرف ایک بار چلے گا

  return (
    <div className="layout-effect-demo">
      <div ref={boxRef} className="centered-box">
        🎁 میں خودکار طور پر درمیان میں آ گیا!
      </div>
    </div>
  );
};

export default LayoutEffectDemo;`,
      css: `/* ⚙️ useLayoutEffect Demo CSS */
.layout-effect-demo {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  overflow: hidden;
  margin: 20px 0;
}

.position-info {
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  margin: 15px;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
}

.centered-box {
  position: absolute;
  top: 150px;
  background-color: #ffc107;
  padding: 20px 40px;
  border-radius: 12px;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  color: #212529;
  font-weight: bold;
  text-align: center;
}

.explanation {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin: 15px;
  color: white;
  text-align: center;
  backdrop-filter: blur(10px);
}

@media (max-width: 430px) {
  .layout-effect-demo {
    height: 250px;
  }
  
  .centered-box {
    padding: 15px 25px;
    font-size: 1rem;
    top: 120px;
  }
  
  .position-info {
    font-size: 0.8rem;
    padding: 8px;
  }
}

@media (max-width: 390px) {
  .centered-box {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
  
  .layout-effect-demo {
    height: 220px;
  }
}

@media (max-width: 375px) {
  .centered-box {
    padding: 10px 15px;
    font-size: 0.85rem;
    top: 100px;
  }
  
  .layout-effect-demo {
    height: 200px;
  }
}`
    },
    {
      id: 2,
      title: "مثال 2: useImperativeHandle - Custom Input Control",
      description: "Parent component کو child input کے custom functions تک رسائی دینا۔",
      component: <ImperativeHandleDemo />,
      code: `// CustomInput.jsx - useImperativeHandle کی عملی مثال
import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 🎯 useImperativeHandle سے custom functions بنائے
  useImperativeHandle(ref, () => ({
    clearInput() {
      inputRef.current.value = "";
    },
    focusInput() {
      inputRef.current.focus();
    },
    getValue() {
      return inputRef.current.value;
    },
    setValue(newValue) {
      inputRef.current.value = newValue;
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="کچھ لکھیں..."
      className="custom-input"
    />
  );
});

// ImperativeHandleDemo.jsx
import React, { useRef } from "react";
import { CustomInput } from "./CustomInput";

const ImperativeHandleDemo = () => {
  const inputRef = useRef();

  const handleClear = () => {
    inputRef.current.clearInput();
  };

  const handleFocus = () => {
    inputRef.current.focusInput();
  };

  return (
    <div className="imperative-handle-demo">
      <CustomInput ref={inputRef} />
      <div className="control-buttons">
        <button onClick={handleFocus}>🔍 فوکس کرو</button>
        <button onClick={handleClear}>🧹 صاف کرو</button>
      </div>
    </div>
  );
};

export default ImperativeHandleDemo;`,
      css: `/* 🪄 useImperativeHandle Demo CSS */
.imperative-handle-demo {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.input-section {
  margin-bottom: 25px;
}

.custom-input {
  padding: 12px 20px;
  border: 2px solid #0078ff;
  border-radius: 8px;
  font-size: 1.1rem;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.custom-input:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 120, 255, 0.3);
}

.current-value {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 6px;
  border-left: 4px solid #28a745;
}

.control-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-focus, .btn-clear, .btn-get, .btn-set {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn-focus {
  background: #28a745;
  color: white;
}

.btn-clear {
  background: #dc3545;
  color: white;
}

.btn-get {
  background: #0078ff;
  color: white;
}

.btn-set {
  background: #6f42c1;
  color: white;
}

.btn-focus:hover { background: #1e7e34; }
.btn-clear:hover { background: #c82333; }
.btn-get:hover { background: #0056b3; }
.btn-set:hover { background: #5a3596; }

@media (max-width: 430px) {
  .imperative-handle-demo {
    padding: 15px;
  }
  
  .custom-input {
    max-width: 250px;
    font-size: 1rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-focus, .btn-clear, .btn-get, .btn-set {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 390px) {
  .custom-input {
    max-width: 220px;
    padding: 10px 15px;
  }
}

@media (max-width: 375px) {
  .imperative-handle-demo {
    padding: 10px;
  }
  
  .custom-input {
    max-width: 200px;
    font-size: 0.9rem;
  }
}`
    },
    {
      id: 3,
      title: "مثال 3: Combined Example - Modal with Both Hooks",
      description: "useLayoutEffect اور useImperativeHandle کا ایک ساتھ استعمال کرتے ہوئے custom modal بنانا۔",
      component: <CombinedDemo />,
      code: `// Modal.jsx - دونوں hooks کا مجموعہ
import React, { forwardRef, useLayoutEffect, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(({ children }, ref) => {
  const modalRef = useRef();

  useLayoutEffect(() => {
    // Modal کو center میں لانا
    const modal = modalRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;

    modal.style.left = (screenWidth - modalWidth) / 2 + "px";
    modal.style.top = (screenHeight - modalHeight) / 2 + "px";
  }, []);

  useImperativeHandle(ref, () => ({
    show() {
      modalRef.current.style.display = "block";
      modalRef.current.style.opacity = "1";
    },
    hide() {
      modalRef.current.style.opacity = "0";
      setTimeout(() => {
        modalRef.current.style.display = "none";
      }, 300);
    }
  }));

  return (
    <div ref={modalRef} className="custom-modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
});

// CombinedDemo.jsx
import React, { useRef } from "react";
import Modal from "./Modal";

const CombinedDemo = () => {
  const modalRef = useRef();

  const showModal = () => {
    modalRef.current.show();
  };

  const hideModal = () => {
    modalRef.current.hide();
  };

  return (
    <div className="combined-demo">
      <button onClick={showModal} className="modal-trigger">
        🪟 Modal دیکھیں
      </button>

      <Modal ref={modalRef}>
        <h3>🎯 Custom Modal</h3>
        <p>یہ modal دونوں hooks کا استعمال کرتا ہے</p>
        <button onClick={hideModal} className="btn-close">
          ❌ بند کریں
        </button>
      </Modal>
    </div>
  );
};

export default CombinedDemo;`,
      css: `/* 🚀 Combined Demo CSS */
.combined-demo {
  text-align: center;
  padding: 20px;
}

.modal-trigger {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.custom-modal {
  position: fixed;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #0078ff;
  max-width: 400px;
  text-align: center;
}

.modal-content h3 {
  color: #0078ff;
  margin-bottom: 15px;
}

.modal-content ul {
  text-align: right;
  padding-right: 20px;
  margin: 15px 0;
}

.modal-content li {
  margin-bottom: 8px;
  color: #555;
}

.btn-close {
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  margin-top: 15px;
}

.btn-close:hover {
  background: #c82333;
}

@media (max-width: 430px) {
  .combined-demo {
    padding: 15px;
  }
  
  .modal-content {
    padding: 20px;
    max-width: 300px;
  }
  
  .modal-trigger {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

@media (max-width: 390px) {
  .modal-content {
    padding: 15px;
    max-width: 280px;
  }
  
  .modal-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 375px) {
  .combined-demo {
    padding: 10px;
  }
  
  .modal-content {
    max-width: 260px;
    padding: 12px;
  }
}`
    }
  ];

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر نمبر 15 – useLayoutEffect & useImperativeHandle
        </h1>
        <p className="chapter-subtitle2 text-break">
          React کے advanced hooks جو DOM manipulation اور component communication کو next level پر لے جاتے ہیں۔
        </p>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-card">
          <h3 className="intro-title">🎯 useLayoutEffect & useImperativeHandle کا تعارف</h3>
          <p className="intro-text">
            یہ دونوں hooks React کے advanced tools ہیں جو precise DOM control اور component communication کے لیے استعمال ہوتے ہیں۔
          </p>
          
          <div className="comparison-section">
            <h4>🔄 دونوں Hooks کا موازنہ</h4>
            <div className="comparison-table">
              <div className="table-row header">
                <div className="table-cell">Hook</div>
                <div className="table-cell">مقصد</div>
                <div className="table-cell">کب استعمال کریں</div>
              </div>
              <div className="table-row">
                <div className="table-cell">useLayoutEffect</div>
                <div className="table-cell">DOM کے فوراً بعد چلنے والا hook</div>
                <div className="table-cell">جب precise DOM manipulation کی ضرورت ہو</div>
              </div>
              <div className="table-row">
                <div className="table-cell">useImperativeHandle</div>
                <div className="table-cell">Parent کو child کے custom functions تک رسائی</div>
                <div className="table-cell">جب parent کو child control کرنا ہو</div>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h4>🌟 کیوں استعمال کریں؟</h4>
            <p>دونوں hooks React applications کو زیادہ precise اور controllable بناتے ہیں۔</p>
            <div className="highlight-text">
              🎯 useLayoutEffect → DOM control | useImperativeHandle → Component communication
            </div>
          </div>

          <div className="real-world-example">
            <h4>💡 حقیقی زندگی کی مثالیں</h4>
            <p>
              <strong>useLayoutEffect:</strong> Animations, Modal positioning, Scroll management, Layout calculations
            </p>
            <p>
              <strong>useImperativeHandle:</strong> Form controls, Custom input components, Video players, Complex UI components
            </p>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        {/* 🔹 sidebar: تمام مثالوں کے buttons */}
        <div className="sidebar">
          <h3 className="text-break">مثالیں</h3>
          <ul className="example-list">
            {examples.map((example) => (
              <li key={example.id}>
                <button
                  className={`sidebar-btn text-break ${
                    activeTab === example.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(example.id)}
                >
                  مثال {example.id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/*🔹 main content: منتخب مثال دکھانا */}
        <div className="main-content">
          <div className="section-card">
            <h2 className="section-title text-break">
              {examples[activeTab - 1].title}
            </h2>
            <p className="section-text text-break">
              {examples[activeTab - 1].description}
            </p>

            {/* Live Demo Section */}
            <div className="demo-section">
              {examples[activeTab - 1].component}
            </div>

            {/* React Code */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">React کوڈ:</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].code, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`) ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{examples[activeTab - 1].code}</code>
                </pre>
              </div>
            </div>

            {/* CSS Code */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">CSS کوڈ:</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].css, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`) ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="css-code">
                  <code>{examples[activeTab - 1].css}</code>
                </pre>
              </div>
            </div>

            {copyStatus && <div className="copy-msg">{copyStatus}</div>}
          </div>

          {/* Syntax Section */}
          <div className="section-card">
            <h3 className="section-title text-break">
              📖 useLayoutEffect اور useImperativeHandle کا بنیادی syntax
            </h3>
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">Syntax:</span>
                <button
                  className="copy-btn"
                  onClick={copySyntaxCode}
                >
                  {copyStatus === "Syntax کوڈ کوپي ہو گیا!" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{`// useLayoutEffect Syntax
useLayoutEffect(() => {
  // DOM operations here
}, [dependencies]);

// useImperativeHandle Syntax
useImperativeHandle(ref, () => ({
  customMethod() {
    // custom logic
  }
}));`}</code>
                </pre>
              </div>
            </div>
            <div className="explanation-box">
              <h4 className="text-break">🔹 وضاحت:</h4>
              <ul>
                <li className="text-break">
                  <strong>useLayoutEffect:</strong> DOM بننے کے فوراً بعد چلتا ہے، بغیر کسی flicker کے
                </li>
                <li className="text-break">
                  <strong>useImperativeHandle:</strong> Parent component کو child کے custom functions تک رسائی دیتا ہے
                </li>
                <li className="text-break">
                  <strong>forwardRef:</strong> useImperativeHandle کے ساتھ ضروری ہے
                </li>
                <li className="text-break">
                  <strong>Performance:</strong> دونوں hooks complex UI interactions کو manageable بناتے ہیں
                </li>
              </ul>
            </div>
          </div>

          {/* سبق کا خلاصہ Section */}
          <div className="summary-card">
            <h3 className="section-title text-break">📌 سبق کا خلاصہ</h3>
            <div className="summary-content">
              <p className="text-break">
                <strong>useLayoutEffect</strong> DOM بننے کے فوراً بعد چلتا ہے، precise control کے لیے
              </p>
              <p className="text-break">
                <strong>useImperativeHandle</strong> parent کو child کے custom functions تک رسائی دیتا ہے
              </p>
              <p className="text-break">
                دونوں hooks <strong>complex UI components</strong> بنانے میں مدد کرتے ہیں
              </p>
              <p className="text-break">
                <strong>حقیقی استعمال:</strong> Modals, Custom inputs, Animations, Form controls, Video players
              </p>
              <div className="highlight-text">
                💡 یاد رکھیں: useLayoutEffect = DOM control, useImperativeHandle = Component communication
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copyStatus && (
        <div className="copy-notification">
          ✅ {copyStatus}
        </div>
      )}
    </div>
  );
};

export default Chapter15;