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
    {
      id: 24,
      title: "Logout & Clear All LocalStorage Data + SweetAlert2",
      description: "مکمل Authentication Flow: Login → Persistent Data → Logout + Beautiful Confirmation Dialogs",
      duration: "40 منٹ",
      topics: [
        "Complete Logout Flow",
        "LocalStorage Clear",
        "AuthContext Enhancement",
        "SweetAlert2 Integration",
        "Confirmation Dialogs",
        "User Experience",
        "Professional UI",
        "Real-world Authentication",
      ],
    },
    {
      id: 25,
      title: "Authentication & Protected Routes + SweetAlert2",
      description: "مکمل Authentication System: SweetAlert2 Popups + Auto Login + Stay Logged In + Animated Alerts",
      duration: "45 منٹ",
      topics: [
        "Basic Authentication System",
        "Advanced SweetAlert2 System",
        "Auto Login Feature",
        "Stay Logged In Checkbox",
        "Animated Popups & Alerts",
        "Auto-Close Timers",
        "Live Animation Demo",
        "Complete Code Examples",
        "Professional UI/UX",
        "Real-world Authentication",
      ],
    },
    {
      id: 26,
      title: "⚡ Performance & Optimization - Lazy Loading + Environment Variables",
      description: "React App کو تیز، ہلکا، اور محفوظ بنانا: Lazy Loading Components + Environment Variables + Weather Dashboard",
      duration: "35 منٹ",
      topics: [
        "React.lazy + Suspense",
        "Lazy Loading Components",
        "Environment Variables (.env)",
        "Code Splitting",
        "Weather Dashboard Project",
        "Performance Optimization",
        "Security Best Practices",
        "Live Demonstrations",
        "Practical Examples",
        "Professional App Development",
      ],
    },
    // ========== NEW CHAPTER 27 ==========
    {
      id: 27,
      title: "🌍 API Keys Security & Environment Mode (Development vs Production)",
      description: "React + Vite Environment Practical Example: API Keys Security, Environment Variables, Development vs Production Modes",
      duration: "40 منٹ",
      topics: [
        "Environment Variables (.env)",
        "API Keys Security",
        "Development vs Production Modes",
        "Vite Environment Setup",
        ".env.development & .env.production",
        "Weather App Practical Example",
        "Netlify/Vercel Deployment",
        "Security Best Practices",
        "GitHub Protection (.gitignore)",
        "Professional App Security",
      ],
    },
    // ========== NEW CHAPTER 28 ==========
    {
      id: 28,
      title: "🎨 shadcn/ui - Modern UI Components Library",
      description: "Complete Guide to shadcn/ui: Installation, Benefits, and Practical Usage with Tailwind CSS",
      duration: "35 منٹ",
      topics: [
        "shadcn/ui Introduction",
        "Benefits vs Ant Design & Material UI",
        "Complete Installation Guide",
        "Tailwind CSS Configuration",
        "Teacher's Method Integration",
        "File Structure Setup",
        "Button & Navigation Components",
        "Copy Code Functionality",
        "Responsive Design",
        "Professional UI Development",
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
            <span className="stat-number">790+</span>
            <span className="stat-label">منٹ</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">300+</span>
            <span className="stat-label">کوڈ مثالوں</span>
          </div>
        </div>

        {/* Quick Navigation Buttons */}
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
          <li>✅ <strong style={{color: '#0078ff'}}>نئی: Complete Logout Flow + SweetAlert2 Confirmation</strong></li>
          <li>✅ <strong style={{color: '#28a745'}}>🌟 نئی: Chapter 25 - Complete Authentication System + SweetAlert2 + Auto Login</strong></li>
          <li>✅ <strong style={{color: '#ff6b35'}}>🔥 نئی: Chapter 26 - Performance & Optimization + Lazy Loading + Environment Variables</strong></li>
          <li>✅ <strong style={{color: '#9c27b0'}}>🔐 نئی: Chapter 27 - API Keys Security & Environment Mode (Development vs Production)</strong></li>
          <li>✅ <strong style={{color: '#0078ff'}}>🎨 نئی: Chapter 28 - shadcn/ui Complete Guide - Modern UI Components Library</strong></li>
          <li>✅ Modern React tools (Vite) سے واقفیت</li>
          <li>✅ حقیقی پراجیکٹس بنانے کی صلاحیت</li>
        </ul>

        {/* Chapter 28 Special Highlight */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #0078ff 0%, #00c6ff 100%)', borderRadius: '12px', border: '3px solid #0078ff', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>🎨🚀 Chapter 28: shadcn/ui - Modern UI Components Library</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎯 Complete Installation Guide</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Vite + React Setup</li>
                <li>✅ Tailwind CSS Configuration</li>
                <li>✅ Teacher's Method Integration</li>
                <li>✅ File Structure Setup</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>⚡ Benefits Comparison</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ vs Ant Design</li>
                <li>✅ vs Material UI</li>
                <li>✅ Performance Benefits</li>
                <li>✅ Customization Control</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🛠 Practical Usage</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Button Components</li>
                <li>✅ Navigation Menu</li>
                <li>✅ Copy Code Functionality</li>
                <li>✅ Responsive Design</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginTop: '15px' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎨 UI Features</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Beautiful Components</li>
                <li>✅ Accessibility Focused</li>
                <li>✅ Tailwind CSS Styling</li>
                <li>✅ Professional Design</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🚀 Advanced Features</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Copy Code Buttons</li>
                <li>✅ Flying Notifications</li>
                <li>✅ Responsive Breakpoints</li>
                <li>✅ Real-world Examples</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 35 منٹ | 📝 7 مکمل Sections | 🎯 Installation + Comparison + Live Demo
            </p>
          </div>
        </div>

        {/* Chapter 27 Special Highlight */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)', borderRadius: '12px', border: '3px solid #9c27b0', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>🌍🔐 Chapter 27: API Keys Security & Environment Mode (Development vs Production)</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔐 API Keys Security</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Environment Variables (.env)</li>
                <li>✅ API Keys کو محفوظ رکھنا</li>
                <li>✅ Hard-coding سے بچنا</li>
                <li>✅ Security Best Practices</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🌐 Environment Modes</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Development vs Production</li>
                <li>✅ .env.development & .env.production</li>
                <li>✅ Vite Environment Setup</li>
                <li>✅ Mode-specific Configuration</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🌦 Weather App Practical Example</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Live Weather Demo</li>
                <li>✅ Real API Integration</li>
                <li>✅ Environment Variables Display</li>
                <li>✅ Complete Code Examples</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginTop: '15px' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🚀 Deployment & Security</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Netlify/Vercel Deployment</li>
                <li>✅ Environment Variables Setup</li>
                <li>✅ .gitignore Configuration</li>
                <li>✅ GitHub Protection</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎯 Professional Development</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Security Best Practices</li>
                <li>✅ Production Ready Code</li>
                <li>✅ Modern React Patterns</li>
                <li>✅ Real-world Applications</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 40 منٹ | 📝 10 مکمل Sections | 🎯 Security + Environment + Live Demo
            </p>
          </div>
        </div>

        {/* Chapter 26 Special Highlight */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', borderRadius: '12px', border: '3px solid #ff6b35', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>⚡🚀 Chapter 26: Performance & Optimization - Lazy Loading + Environment Variables</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>⚡ Performance Optimization</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ React.lazy + Suspense</li>
                <li>✅ Lazy Loading Components</li>
                <li>✅ Code Splitting</li>
                <li>✅ Faster Initial Load</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔐 Environment Variables</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ .env فائل استعمال</li>
                <li>✅ API Keys Security</li>
                <li>✅ VITE_ Prefix</li>
                <li>✅ .gitignore Configuration</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🌦 Weather Dashboard Project</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Practical Application</li>
                <li>✅ Real API Integration</li>
                <li>✅ Live Demonstrations</li>
                <li>✅ Complete Code Examples</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginTop: '15px' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🎯 Live Features</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Interactive Lazy Loading Demo</li>
                <li>✅ Environment Variables Display</li>
                <li>✅ Weather API Simulation</li>
                <li>✅ Real-time Performance Benefits</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🚀 Professional Development</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Security Best Practices</li>
                <li>✅ Performance Optimization</li>
                <li>✅ Production Ready Code</li>
                <li>✅ Modern React Patterns</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 35 منٹ | 📝 3 مکمل Sections | 🎯 Performance + Security + Live Demo
            </p>
          </div>
        </div>

        {/* Chapter 25 Special Highlight */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', borderRadius: '12px', border: '3px solid #28a745', color: 'white' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>🌸🚀 Chapter 25: Complete Authentication System + SweetAlert2 + Auto Login</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔐 Two Authentication Systems</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Basic Authentication System</li>
                <li>✅ Advanced SweetAlert2 System</li>
                <li>✅ System Toggle Feature</li>
                <li>✅ Complete Code Examples</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🌸 SweetAlert2 Advanced</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Animated Popups & Alerts</li>
                <li>✅ Auto-Close Timers</li>
                <li>✅ Progress Bars</li>
                <li>✅ Live Animation Demo</li>
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
              <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>🔐 Auto Login System</h5>
              <ul style={{ margin: '0', paddingRight: '15px', fontSize: '14px' }}>
                <li>✅ Stay Logged In Checkbox</li>
                <li>✅ Auto Redirect on Refresh</li>
                <li>✅ Persistent User Sessions</li>
                <li>✅ Professional UX</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
              ⏰ مدت: 45 منٹ | 📝 10 مکمل Sections | 🎯 2 Authentication Systems + Live Demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter0;