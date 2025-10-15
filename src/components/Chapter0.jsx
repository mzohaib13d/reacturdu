import React from "react";

function Chapter0() {
  const chapters = [
    {
      id: 1,
      title: "React کیا ہے؟ — تعارف",
      description: "React کی بنیادی تعریف، فوائد اور استعمال",
      duration: "10 منٹ",
      topics: ["React تعریف", "Virtual DOM", "JSX", "Components"],
    },
    {
      id: 2,
      title: "Create React App (CRA) اور اس کی ڈپریکیٹشن",
      description: "CRA کی تاریخ اور جدید alternatives",
      duration: "8 منٹ",
      topics: ["CRA ڈپریکیٹ", "React Team اعلان", "متبادل tools"],
    },
    {
      id: 3,
      title: "Vite سیٹ اپ اور React Fragments",
      description: "Vite کے ساتھ React پروجیکٹ بنانا اور Fragments کا استعمال",
      duration: "20 منٹ",
      topics: [
        "Vite سیٹ اپ",
        "npm commands",
        "Fragments کیا ہیں؟",
        "<> شارٹ کٹ",
        "JSX Rules",
      ],
    },
    {
      id: 4,
      title: "React ایپ کی بنیادی فائلیں اور ان کا کردار",
      description: "ہر فائل کا مقصد اور Hello World مثال",
      duration: "15 منٹ",
      topics: [
        "File structure",
        "index.html",
        "main.jsx",
        "App.jsx",
        "CSS files",
      ],
    },
    {
      id: 5,
      title: "ری ایکٹ کی بنیادی پروگرامنگ + فنکشنل کمپونینٹس",
      description: "مکمل ویب ڈیولپمنٹ گائیڈ: کمنٹس، تصاویر، لنکس، Navbar، کمپونینٹس + Props",
      duration: "35 منٹ",
      topics: [
        "ری ایکٹ کمنٹس", 
        "تصاویر شامل کرنا", 
        "لنکس بنانا", 
        "کمپونینٹس بنانا", 
        "Navbar بنانا",
        "Functional Components", 
        "JSX syntax", 
        "Props", 
        "Destructuring",
        "مکمل پریکٹس پروجیکٹ"
      ],
    },
    {
      id: 6,
      title: "React Hooks کا آغاز – useState Hook",
      description: "useState Hook کے ساتھ state management سیکھیں",
      duration: "18 منٹ",
      topics: [
        "useState Hook",
        "State Management",
        "Counter Example",
        "Toggle Example",
      ],
    },
    {
      id: 7,
      title: "ایونٹس ہینڈلنگ + Conditional Rendering",
      description: "Events handling اور conditional rendering ایک ساتھ",
      duration: "22 منٹ",
      topics: [
        "Event Handling",
        "onClick",
        "onChange",
        "Conditional Rendering",
        "if/ternary",
      ],
    },
    {
      id: 8,
      title: "Lists & Keys + CSS Styling in React",
      description: "لسٹس بنانا، keys کا استعمال اور CSS اسٹائلنگ کے طریقے",
      duration: "25 منٹ",
      topics: [
        "Lists & Keys",
        ".map() method",
        "CSS Styling",
        "Inline Styles",
        "CSS Modules",
      ],
    },
    {
      id: 9,
      title: "useEffect Hook (ابتدائی سطح)",
      description: "Side effects کو manage کرنا، API calls اور lifecycle events",
      duration: "20 منٹ",
      topics: [
        "useEffect Hook",
        "Side Effects",
        "Dependency Array",
        "API Calls",
        "Cleanup Functions",
      ],
    },
    {
      id: 10,
      title: "useRef Hook - DOM رسائی اور values کا انتظام",
      description: "DOM elements تک سیدھی رسائی اور values کو render کے بغیر محفوظ رکھنا",
      duration: "25 منٹ",
      topics: [
        "useRef Hook",
        "DOM Elements رسائی",
        "Previous Values Track کرنا",
        "Focus Management",
        "Timers اور Intervals",
      ],
    },
    {
      id: 11,
      title: "ColorZilla - ویب سائٹس سے رنگ چننا سیکھیں",
      description: "ColorZilla extension ڈاؤن لوڈ اور استعمال کرنے کا مکمل گائیڈ",
      duration: "15 منٹ",
      topics: [
        "ColorZilla ڈاؤن لوڈ",
        "Chrome Extension",
        "رنگ چننے کا طریقہ",
        "HEX Codes",
        "ویب ڈیزائن",
      ],
    },
    {
      id: 12,
      title: "useContext Hook - Props کے بغیر ڈیٹا کا سفر",
      description: "Context API کے ذریعے پوری ایپ میں ڈیٹا بانٹنا سیکھیں",
      duration: "22 منٹ",
      topics: [
        "useContext Hook",
        "Context API",
        "Props Drilling حل",
        "Theme Switcher",
        "Language Context",
        "Real-world Examples",
      ],
    },
    {
      id: 13,
      title: "Advanced Hooks - useReducer اور Custom Hooks",
      description: "State management کو next level پر لے جائیں",
      duration: "28 منٹ",
      topics: [
        "useReducer Hook",
        "Custom Hooks",
        "Complex State Management",
        "Logic Reuse",
        "Smart Timer Example",
        "Professional Patterns",
      ],
    },
    {
      id: 14,
      title: "useMemo اور useCallback - پرفارمنس بہتر بنانا",
      description: "React applications کو تیز اور efficient بنانے کے طریقے",
      duration: "30 منٹ",
      topics: [
        "useMemo Hook",
        "useCallback Hook",
        "Performance Optimization",
        "Memorization",
        "Heavy Calculations",
        "Function Memorization",
        "Re-renders کم کرنا",
        "Real-world Examples",
      ],
    },
    {
      id: 15,
      title: "useLayoutEffect & useImperativeHandle - Advanced DOM Control",
      description: "DOM manipulation اور component communication کو next level پر لے جائیں",
      duration: "25 منٹ",
      topics: [
        "useLayoutEffect Hook",
        "useImperativeHandle Hook",
        "DOM Positioning",
        "Custom Ref Functions",
        "Modal Control",
        "Component Communication",
        "Precise DOM Manipulation",
      ],
    },
    {
      id: 16,
      title: "React.memo, useMemo, useCallback - Memorization کا جادو",
      description: "Re-render روکنے کا جادو: تینوں memorization techniques جو React applications کو blazing fast بناتی ہیں",
      duration: "35 منٹ",
      topics: [
        "React.memo Hook",
        "useMemo Hook",
        "useCallback Hook",
        "Component Memorization",
        "Function Memorization",
        "Calculation Memorization",
        "Performance Optimization",
        "Re-renders روکنا",
        "Interactive Examples",
        "Combined Usage",
      ],
    },
    {
      id: 17,
      title: "Performance Optimization - Lazy Loading, Error Boundaries, Code Splitting",
      description: "React ایپ کو ہلکا، تیز، اور پروفیشنل بنانے کے طریقے",
      duration: "30 منٹ",
      topics: [
        "React.lazy + Suspense",
        "Lazy Loading Components",
        "Error Boundaries",
        "Code Splitting",
        "Performance Optimization",
        "Real-world Examples",
        "Restaurant Menu Demo",
      ],
    },
    {
      id: 18,
      title: "React Router - Single Page Application in Action",
      description: "Laptop Store SPA بنانا - React Router کے ساتھ مکمل routing system",
      duration: "35 منٹ",
      topics: [
        "React Router DOM",
        "BrowserRouter",
        "Routes & Route",
        "Link Component",
        "SPA Concepts",
        "Laptop Store Project",
        "Navigation System",
        "Responsive Design",
      ],
    },
    {
      id: 19,
      title: "Nested Routing اور Dynamic Routes",
      description: "React Router DOM میں nested routes اور dynamic routes سمجھنا",
      duration: "25 منٹ",
      topics: [
        "Nested Routing",
        "Dynamic Routes",
        "useParams Hook",
        "Product Detail Page",
        "URL Parameters",
        "Route Configuration",
      ],
    },
    {
      id: 20,
      title: "Context API + useContext (Cart System)",
      description: "یعنی 'Add to Cart' بٹن کے ساتھ Live Count؟ 🛒",
      duration: "30 منٹ",
      topics: [
        "Context API",
        "useContext Hook",
        "Cart System",
        "Live Count",
        "Props Drilling حل",
        "Shopping Cart",
        "State Management",
      ],
    },
    {
      id: 21,
      title: "Protected Routes in React - Dashboard Security",
      description: "صرف لاگ ان users ہی Dashboard تک رسائی حاصل کر سکتے ہیں",
      duration: "28 منٹ",
      topics: [
        "Protected Routes",
        "Auth Context",
        "Login System",
        "Route Protection",
        "useNavigate Hook",
        "Security Guard Component",
        "Real-world Authentication",
      ],
    },
    {
      id: 22,
      title: "Local Storage کے ذریعے Persistent State",
      description: "Theme اور Cart ڈیٹا کو localStorage میں محفوظ کریں - Refresh کے بعد بھی برقرار رہے",
      duration: "25 منٹ",
      topics: [
        "localStorage API",
        "Persistent State",
        "Theme Context",
        "Cart Context",
        "JSON.stringify()",
        "JSON.parse()",
        "useEffect + localStorage",
        "Shopping Cart Demo",
      ],
    },
    {
      id: 23,
      title: "Sync Multiple States + Protected Routes وضاحت",
      description: "ایک Hook سے دو States کو Sync رکھنا + پروٹیکٹد رائوٹ کی مکمل وضاحت",
      duration: "55 منٹ",
      topics: [
        "Custom Hook useLocalStorage",
        "Multiple Contexts Sync",
        "Theme + Cart Persistence",
        "Protected Routes Concept",
        "Student Questions Answers",
        "Fake Login System",
        "Route Guarding",
        "Complete Code Walkthrough",
      ],
    },
  ];

  // ✅ showAllChapters function کو component کے اندر define کریں
  const showAllChapters = () => {
    // تمام chapters کو show کریں
    for (let i = 1; i <= chapters.length; i++) {
      const element = document.getElementById(`chapter-${i}`);
      if (element) {
        element.style.display = "block";
      }
    }

    // Table of Contents پر واپس scroll کریں
    const tocElement = document.querySelector(".chapter-card");
    if (tocElement) {
      tocElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ handleChapterClick function کو بھی component کے اندر define کریں
  const handleChapterClick = (chapterId) => {
    // پہلے تمام chapters کو show کریں
    showAllChapters();

    // پھر selected chapter پر scroll کریں
    const selectedElement = document.getElementById(`chapter-${chapterId}`);
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="card urdu-text">
      <h2>📖 ری ایکٹ ٹیوٹوریل - Table of Contents</h2>

      <div className="toc-intro">
        <p>
          <strong>خوش آمدید!</strong> یہ مکمل ری ایکٹ ٹیوٹوریل اردو میں ہے۔ نیچے
          دیے گئے chapters پر کلک کریں یا ترتیب سے پڑھیں۔
        </p>

        <div className="toc-stats">
          <div className="stat-item">
            <span className="stat-number">{chapters.length}</span>
            <span className="stat-label">Chapters</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">550+</span>
            <span className="stat-label">منٹ</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">کوڈ مثالوں</span>
          </div>
        </div>

        {/* Show All Chapters Button */}
        <div className="toc-actions">
          <button onClick={showAllChapters} className="show-all-btn">
            📚 تمام Chapters دیکھیں
          </button>
        </div>
      </div>

      <div className="chapters-list">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="chapter-card">
            <div className="chapter-header">
              <div className="chapter-number">Chapter {chapter.id}</div>
              <div className="chapter-duration">{chapter.duration}</div>
            </div>

            <h3 className="chapter-title">{chapter.title}</h3>
            <p className="chapter-description">{chapter.description}</p>

            <div className="chapter-topics">
              {chapter.topics.map((topic, index) => (
                <span key={index} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>

            <div className="chapter-action">
              <button
                onClick={() => handleChapterClick(chapter.id)}
                className="read-btn"
              >
                پڑھیں ▶
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="toc-footer">
        <h3>🎯 ٹیوٹوریل کے مقاصد:</h3>
        <ul>
          <li>✅ React کے بنیادی concepts سمجھنا</li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: ری ایکٹ بنیادی پروگرامنگ - مکمل ویب ڈیولپمنٹ گائیڈ</strong></li>
          <li>✅ Functional Components اور JSX میں مہارت</li>
          <li>✅ Props اور State کا استعمال</li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Navbar بنانا اور استعمال کرنا</strong></li>
          <li>✅ React Fragments کا استعمال</li>
          <li>✅ Lists & Keys کے ساتھ ڈیٹا ڈسپلے</li>
          <li>✅ CSS Styling کے مختلف طریقے</li>
          <li>✅ useEffect Hook کے ساتھ side effects manage کرنا</li>
          <li>✅ useRef Hook کے ساتھ DOM رسائی اور values کا انتظام</li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: ColorZilla کے ساتھ ویب ڈیزائن</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: useContext Hook کے ساتھ Props Drilling حل</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Advanced Hooks (useReducer + Custom Hooks)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Performance Optimization (useMemo + useCallback)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Advanced DOM Control (useLayoutEffect + useImperativeHandle)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Memorization Techniques (React.memo + useMemo + useCallback)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Performance Optimization (Lazy Loading + Error Boundaries + Code Splitting)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: React Router - Single Page Applications بنانا</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Nested Routing اور Dynamic Routes</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Context API + useContext (Cart System)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Protected Routes - Dashboard Security System</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Local Storage - Persistent State Management</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Custom Hook useLocalStorage + Protected Routes وضاحت</strong></li>
          <li>✅ Modern React tools (Vite) سے واقفیت</li>
          <li>✅ حقیقی پراجیکٹس بنانے کی صلاحیت</li>
        </ul>

        {/* Updated Chapter 23 Special Highlight with Red Gradient */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', borderRadius: '12px', border: '3px solid #dc3545', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>🔄🔐 Chapter 23: Sync Multiple States + Protected Routes وضاحت</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔄 Sync States</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ useLocalStorage Hook بنانا</li>
                <li>✅ Theme + Cart دونوں Sync</li>
                <li>✅ Code Reusability</li>
                <li>✅ Automatic Persistence</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔐 Protected Routes</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ طلبہ کے سوالات کے جوابات</li>
                <li>✅ Fake Login System</li>
                <li>✅ Route Guarding</li>
                <li>✅ Complete Code Examples</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎯 مکمل گائیڈ</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ 11 مکمل Components</li>
                <li>✅ 2 File Structures</li>
                <li>✅ Real-world Scenarios</li>
                <li>✅ Professional Patterns</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 55 منٹ | 📝 11 عملی steps | 🎯 2 مکمل Systems + Student Q&A
            </p>
          </div>
        </div>

        {/* Chapter 22 Special Highlight */}
        <div style={{ marginTop: '15px', padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', border: '3px solid #0078ff', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>💾 Chapter 22: Local Storage - Persistent State</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>💾 Local Storage API</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ localStorage کیا ہے؟</li>
                <li>✅ JSON.stringify() کا استعمال</li>
                <li>✅ JSON.parse() کا استعمال</li>
                <li>✅ useEffect + localStorage</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎨 Theme Context</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Theme کو localStorage میں محفوظ</li>
                <li>✅ Refresh کے بعد بھی برقرار</li>
                <li>✅ Light/Dark Mode محفوظ</li>
                <li>✅ Real-time Theme Toggle</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🛒 Cart Context</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Shopping Cart ڈیٹا محفوظ</li>
                <li>✅ Refresh کے بعد بھی کارٹ برقرار</li>
                <li>✅ Interactive Demo</li>
                <li>✅ Live Shopping Experience</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 25 منٹ | 📝 5 عملی steps | 🎯 2 مکمل Contexts + Live Demo
            </p>
          </div>
        </div>

        {/* Chapter 21 Special Highlight */}
        <div style={{ marginTop: '15px', padding: '20px', background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', borderRadius: '12px', border: '3px solid #dc3545', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>🔐 Chapter 21: Protected Routes - Dashboard Security</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🛡️ Security System</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Auth Context بنانا</li>
                <li>✅ Login System</li>
                <li>✅ ProtectedRoute Component</li>
                <li>✅ Automatic Redirect</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🧭 Routing System</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Public Routes</li>
                <li>✅ Protected Routes</li>
                <li>✅ useNavigate Hook</li>
                <li>✅ Route Guard</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎯 Real-world App</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Complete Login System</li>
                <li>✅ Dashboard Protection</li>
                <li>✅ Professional Security</li>
                <li>✅ Ready-to-use Code</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 28 منٹ | 📝 7 عملی steps | 🎯 1 مکمل Security System
            </p>
          </div>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🛒 Chapter 20: Context API + Cart System</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 20</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ Context API کا مکمل تعارف اور استعمال</li>
            <li>✅ useContext Hook کے ساتھ state management</li>
            <li>✅ Live Shopping Cart System بنانا</li>
            <li>✅ "Add to Cart" بٹن کے ساتھ live count</li>
            <li>✅ Props Drilling کا مکمل حل</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🧭 Chapter 19: Nested Routing اور Dynamic Routes</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 19</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ Nested Routing - ایک route کے اندر دوسرا route</li>
            <li>✅ Dynamic Routes - URL parameters کے ساتھ</li>
            <li>✅ useParams Hook - URL سے ڈیٹا نکالنا</li>
            <li>✅ Product Detail Page - ہر product کی الگ صفحہ</li>
          </ul>
        </div>

        {/* باقی highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>💻 Chapter 18: React Router - Single Page Application</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 18</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ React Router DOM انسٹالیشن اور setup</li>
            <li>✅ BrowserRouter, Routes, Route کا استعمال</li>
            <li>✅ Link component کے ساتھ navigation</li>
            <li>✅ Laptop Store SPA مکمل پروجیکٹ</li>
          </ul>
        </div>

        {/* باقی highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🚀 Chapter 17: Performance Optimization</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 17</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ React.lazy + Suspense - Lazy Loading Components</li>
            <li>✅ Error Boundaries - غلطی پر صفحہ نہ ٹوٹے</li>
            <li>✅ Code Splitting - صرف ضرورت کا حصہ لوڈ ہو</li>
            <li>✅ Restaurant Menu والی حقیقی مثال</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🧠 Chapter 16: Memorization کا جادو</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 16</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ React.memo - Component memorization</li>
            <li>✅ useMemo - Calculation memorization</li>
            <li>✅ useCallback - Function memorization</li>
            <li>✅ چار مکمل interactive examples</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🎯 Chapter 15: Advanced DOM Control</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 15</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ useLayoutEffect Hook - DOM کے فوراً بعد چلنے والا hook</li>
            <li>✅ useImperativeHandle Hook - Custom ref functions</li>
            <li>✅ تین مکمل practical examples</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>⚡ Chapter 14: Performance Optimization</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 14</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ useMemo Hook - بھاری calculations optimize کرنا</li>
            <li>✅ useCallback Hook - functions memorize کرنا</li>
            <li>✅ Performance comparison - with/without hooks</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🧩 Chapter 13: Advanced Hooks</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 13</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ useReducer Hook - complex state management</li>
            <li>✅ Custom Hooks - اپنا hook خود بنانا</li>
            <li>✅ تین مکمل practical examples</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f4fd', borderRadius: '8px', border: '2px solid #0078ff' }}>
          <h4 style={{ color: '#0078ff', marginBottom: '10px' }}>🔄 Chapter 12: useContext Hook</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 12</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ useContext Hook کا مکمل تعارف</li>
            <li>✅ Props Drilling کا مسئلہ اور حل</li>
            <li>✅ Theme Switcher (Light/Dark Mode) مثال</li>
          </ul>
        </div>

        {/* باقی chapters کے highlights */}
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f5e8', borderRadius: '8px', border: '2px solid #4caf50' }}>
          <h4 style={{ color: '#2e7d32', marginBottom: '10px' }}>🎨 Chapter 11: ColorZilla گائیڈ</h4>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Chapter 11</strong> میں اب شامل ہیں:
          </p>
          <ul style={{ margin: '10px 0', paddingRight: '20px' }}>
            <li>✅ ColorZilla extension ڈاؤن لوڈ کرنا</li>
            <li>✅ Chrome Web Store سے انسٹالیشن</li>
            <li>✅ ویب سائٹس سے رنگ چننے کا طریقہ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Chapter0;