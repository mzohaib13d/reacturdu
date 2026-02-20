import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

function Chapter0() {
  const navigate = useNavigate(); // Add useNavigate hook
  
  const chapters = [
    // ... (chapters 1-36 remain exactly the same as before)
    {
      id: 1,
      title: "React کیا ہے؟ — تعارف",
      description: "React کی بنیادی تعریف، فوائد اور استعمال",
      duration: "10 منٹ",
      topics: ["React تعریف", "Virtual DOM", "JSX", "Components"],
    },
    {
      id: 2,
      title: "React انسٹالیشن اور سیٹ اپ",
      description: "React پروجیکٹ شروع کرنے کا طریقہ",
      duration: "15 منٹ",
      topics: [
        "Node.js انسٹالیشن",
        "Create React App",
        "Vite",
        "پروجیکٹ اسٹرکچر",
      ],
    },
    {
      id: 3,
      title: "JSX - JavaScript XML",
      description: "JSX کی مکمل تفہیم اور استعمال",
      duration: "20 منٹ",
      topics: ["JSX تعارف", "ایکسپریشن", "ایٹریبیوٹس", "CSS کلاسیں"],
    },
    {
      id: 4,
      title: "Components - ری ایکٹ کا دل",
      description: "Functional اور Class Components",
      duration: "25 منٹ",
      topics: ["Functional Components", "Class Components", "پروپس", "اسٹیٹ"],
    },
    {
      id: 5,
      title: "Props اور Props Drilling کا مسئلہ + حل",
      description:
        "پیرنٹ سے چائلڈ ڈیٹا ٹرانسفر اور Props Drilling کے مسائل کے حل",
      duration: "45 منٹ",
      topics: [
        "Props تعارف",
        "Prop Types",
        "Default Props",
        "چلڈرن Props",
        "Props Drilling مسئلہ",
        "Context API کا استعمال",
        "useContext Hook",
        "عملی مثالیں",
      ],
    },
    {
      id: 6,
      title: "State - ڈائنامک ڈیٹا",
      description: "اسٹیٹ مینجمنٹ کی بنیادیں",
      duration: "35 منٹ",
      topics: ["useState Hook", "اسٹیٹ اپڈیٹ", "پریمیٹو اور آبجیکٹ اسٹیٹ"],
    },
    {
      id: 7,
      title: "ایونٹ ہینڈلنگ",
      description: "کلکس، فارمز اور ایونٹس",
      duration: "20 منٹ",
      topics: ["onClick", "onChange", "فارم ہینڈلنگ", "ایونٹ آبجیکٹ"],
    },
    {
      id: 8,
      title: "کنڈیشنل رینڈرنگ",
      description: "اگر/تو کے مطابق UI دکھانا",
      duration: "25 منٹ",
      topics: ["&& آپریٹر", "ٹرنری آپریٹر", "متغیرات", "فعالیت"],
    },
    {
      id: 9,
      title: "لوپس اور لسٹس",
      description: "ڈیٹا کو ڈائنامک طریقے سے رینڈر کرنا",
      duration: "30 منٹ",
      topics: ["map() فنکشن", "Keys", "لسٹس رینڈرنگ", "یونک آئی ڈی"],
    },
    {
      id: 10,
      title: "فارمز - مکمل کنٹرول",
      description: "کنٹرولڈ اور انکنٹرولڈ کمپوننٹس",
      duration: "40 منٹ",
      topics: ["کنٹرولڈ انپٹس", "انکنٹرولڈ انپٹس", "ریفیرینسز", "فارم سبرمیشن"],
    },
    {
      id: 11,
      title: "CSS اسٹائلنگ",
      description: "React میں اسٹائلنگ کے طریقے",
      duration: "35 منٹ",
      topics: [
        "ان لائن اسٹائلز",
        "CSS فائلیں",
        "CSS ماڈیولز",
        "اسٹائلڈ کامپوننٹس",
      ],
    },
    {
      id: 12,
      title: "useEffect Hook",
      description: "سائیڈ ایفیکٹس مینجمنٹ",
      duration: "45 منٹ",
      topics: ["useEffect بنیادیں", "کلین اپ", "ڈیپینڈنسی ارے", "API کالز"],
    },
    {
      id: 13,
      title: "API انٹیگریشن",
      description: "ریسٹ APIs کے ساتھ کام",
      duration: "50 منٹ",
      topics: ["fetch API", "axios", "async/await", "لوڈنگ اسٹیٹس"],
    },
    {
      id: 14,
      title: "useRef Hook",
      description: "ڈوم ریکارڈز اور ویلیوز",
      duration: "30 منٹ",
      topics: ["ریفیرینسز", "ڈوم ایکسس", "موجودہ ویلیو", "فوکس مینجمنٹ"],
    },
    {
      id: 15,
      title: "React Fragments",
      description: "بغیر اضافی ڈوم کے گروپنگ",
      duration: "15 منٹ",
      topics: ["Fragments", "شارٹ سینٹیکس", "کیوں ضروری", "استعمال کی مثالیں"],
    },
    {
      id: 16,
      title: "Prop Drilling حل",
      description: "useContext Hook",
      duration: "40 منٹ",
      topics: ["Context API", "پرووائیڈر", "کنزیومر", "گلوبل اسٹیٹ"],
    },
    {
      id: 17,
      title: "ایڈوانسڈ Hooks",
      description: "useReducer اور Custom Hooks",
      duration: "55 منٹ",
      topics: ["useReducer", "Custom Hooks", "ہاکس بنانے", "ری یوزیبل لا جک"],
    },
    {
      id: 18,
      title: "Performance Optimization",
      description: "useMemo اور useCallback",
      duration: "50 منٹ",
      topics: ["useMemo", "useCallback", "میمورائزیشن", "ریفیرنشل مساوات"],
    },
    {
      id: 19,
      title: "ایڈوانسڈ DOM کنٹرول",
      description: "useLayoutEffect اور useImperativeHandle",
      duration: "45 منٹ",
      topics: [
        "useLayoutEffect",
        "useImperativeHandle",
        "رفورورڈ ریف",
        "پیرنٹ چائلڈ کمیونیکیشن",
      ],
    },
    {
      id: 20,
      title: "Memorization Techniques",
      description: "React.memo + useMemo + useCallback",
      duration: "40 منٹ",
      topics: [
        "React.memo",
        "پراپس کمپیریزن",
        "پرفارمنس انڈیکٹرز",
        "اوور ہیڈ سے بچاؤ",
      ],
    },
    {
      id: 21,
      title: "Performance Optimization",
      description: "Lazy Loading + Error Boundaries",
      duration: "60 منٹ",
      topics: ["React.lazy", "Suspense", "Error Boundaries", "Code Splitting"],
    },
    {
      id: 22,
      title: "React Router - SPA",
      description: "Single Page Applications بنانا",
      duration: "55 منٹ",
      topics: ["React Router ڈام", "BrowserRouter", "Routes", "Route", "Link"],
    },
    {
      id: 23,
      title: "Nested Routing",
      description: "ڈائنامک اور نیسٹڈ روٹس",
      duration: "50 منٹ",
      topics: ["Nested Routes", "Dynamic Routes", "useParams", "Outlet"],
    },
    {
      id: 24,
      title: "Context API + Cart System",
      description: "شاپنگ کارٹ ایپلیکیشن",
      duration: "65 منٹ",
      topics: ["Cart Context", "ایڈ ٹو کارٹ", "کارٹ آپریشنز", "ٹوٹل کیلکولیشن"],
    },
    {
      id: 25,
      title: "Protected Routes",
      description: "ڈیش بورڈ سیکیورٹی سسٹم",
      duration: "50 منٹ",
      topics: ["Protected Routes", "آتھنٹیکیشن", "پرائیویٹ روٹس", "Redirects"],
    },
    {
      id: 26,
      title: "Local Storage",
      description: "Persistent State Management",
      duration: "35 منٹ",
      topics: [
        "localStorage",
        "sessionStorage",
        "اسٹیٹ پرشسٹنس",
        "Data Serialization",
      ],
    },
    {
      id: 27,
      title: "Custom Hook useLocalStorage",
      description: "Protected Routes وضاحت",
      duration: "40 منٹ",
      topics: [
        "useLocalStorage Hook",
        "آتھنٹیکیشن فلو",
        "Auto Login",
        "Logout System",
      ],
    },
    {
      id: 28,
      title: "🎨 shadcn/ui - Modern UI Components Library",
      description:
        "Complete Guide to shadcn/ui: Installation, Benefits, and Practical Usage with Tailwind CSS",
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
    {
      id: 29,
      title: "📝 Zod فارم ویلیڈیشن - انتہائی آسان اور مرحلہ وار گائیڈ",
      description:
        "Zod فارم ویلیڈیشن کو انتہائی آسانی سے سمجھیں - نئے سیکھنے والوں کے لیے قابلِ فہم اردو میں",
      duration: "30 منٹ",
      topics: [
        "Zod کیا ہے؟",
        "انسٹالیشن گائیڈ",
        "ویلیڈیشن رولز",
        "react-hook-form انضمام",
        "ایرر ہینڈلنگ",
        "عملی ڈیمو",
        "مکمل لاگ ان فارم",
        "کاپی کوڈ فنکشن",
        "اینیمیٹڈ کنفرمیشن",
        "حقیقی استعمال کی مثالیں",
      ],
    },
    {
      id: 30,
      title: "🧰 Redux Toolkit کی تیاری - React بنیادی مہارتیں مکمل کریں",
      description:
        "Redux Toolkit سیکھنے سے پہلے React کی بنیادی تلواریں مضبوط کریں - جامع چیک لسٹ اور مفت APIs کے ساتھ مشق",
      duration: "25 منٹ",
      topics: [
        "Redux Toolkit کیا ہے؟",
        "React Skills چیک لسٹ",
        "Global State Management",
        "مفت APIs کے ساتھ مشق",
        "تیاری کے مراحل",
        "جادوئی بیگ کی وضاحت",
        "فوائد اور ٹولز",
        "عملی مشورے",
      ],
    },
    {
      id: 31,
      title: "🚀 Redux Toolkit Installation & Basic Setup",
      description:
        "Redux Toolkit کو انسٹال کریں اور بنیادی سیٹ اپ کریں - نئے سیکھنے والوں کے لیے سادہ اور قابلِ فہم گائیڈ",
      duration: "30 منٹ",
      topics: [
        "npm/yarn Installation",
        "Dependencies Setup",
        "Store Configuration",
        "Provider Wrapping",
        "First Slice Creation",
        "Redux DevTools",
        "File Structure Best Practices",
        "Common Errors & Fixes",
      ],
    },
    {
      id: 32,
      title: "🔧 Redux Toolkit Core Concepts (Store, Slices, Actions)",
      description:
        "Redux Toolkit کے بنیادی تصورات کو سمجھیں - اسٹور، سلائسز، اور ایکشنز کی جامع وضاحت",
      duration: "40 منٹ",
      topics: [
        "configureStore() Method",
        "createSlice() Function",
        "Initial State Definition",
        "Reducers Creation",
        "Auto-generated Actions",
        "useDispatch() Hook",
        "useSelector() Hook",
        "Payload Passing",
        "Memoized Selectors",
      ],
    },
    {
      id: 33,
      title: "⚡ Async Operations with Redux Toolkit (RTK Query)",
      description:
        "Redux Toolkit میں آسینک آپریشنز سیکھیں RTK Query کے ذریعے API کنیکشن کے لیے - مکمل گائیڈ کی وضاحت",
      duration: "45 منٹ",
      topics: [
        "RTK Query Introduction",
        "Automatic Caching System",
        "API Slice Creation",
        "Endpoints Definition",
        "GET, POST, PUT, DELETE Operations",
        "Loading & Error States",
        "Background Refetching",
        "Optimistic Updates",
        "Pagination & Infinite Scroll",
      ],
    },
    {
      id: 34,
      title:
        "📁 React پروجیکٹ کی مکمل فائل سٹرکچر - ہر فائل کی اہمیت اور استعمال",
      description:
        "React پروجیکٹ کی مکمل فائل سٹرکچر کا تجزیہ - Redux Toolkit Shopping Cart کے لیے ہر فائل کی وضاحت",
      duration: "35 منٹ",
      topics: [
        "فائل سٹرکچر کا تعارف",
        "Root Level فائلز",
        "Redux Store اور Slices",
        "API اور Utility فائلز",
        "Components اور Pages",
        "Configuration فائلز",
        "README.md ڈاکیومینٹیشن",
        "Global CSS اسٹائلز",
        "عملی مشق",
        "بہترین طریقے",
      ],
    },
    {
      id: 35,
      title: "🗃️ ڈیٹا بیس، SQL اور PostgreSQL — مکمل بنیاد (بالکل ابتدا سے)",
      description:
        "Database, SQL اور PostgreSQL کی مکمل گائیڈ - React کے ساتھ PostgreSQL بطور Backend",
      duration: "50 منٹ",
      topics: [
        "ڈیٹا بیس کی تین اقسام",
        "SQL کیا ہے اور کیوں ضروری",
        "PostgreSQL ڈاؤن لوڈ اور انسٹالیشن",
        "pgAdmin میں عملی SQL",
        "CRUD آپریشنز",
        "Database سے بات چیت",
        "Industry-level context",
        "React Backend انٹیگریشن",
        "عملی مثالیں",
        "مکمل ڈیمو پروجیکٹ",
      ],
    },
    {
      id: 36,
      title: "📘 SQL کی بنیاد + SQL زبان مکمل",
      description:
        "PostgreSQL + React Backend Focus — Zohaibtech Institute System",
      duration: "55 منٹ",
      topics: [
        "SQL Data Types & Constraints",
        "Primary Key & Foreign Key",
        "INSERT, SELECT, WHERE, ORDER BY",
        "LIMIT & Pagination",
        "Multiple Tables & Relationships",
        "JOIN Operations (INNER, LEFT, RIGHT)",
        "Backend API with PostgreSQL",
        "Express.js + SQL Queries",
        "React Frontend Integration",
        "Complete Institute System Design",
      ],
    },
    {
      id: 37,
      title: "🔌 React میں Axios کے ذریعے PostgreSQL ڈیٹابیس کو کنٹرول کرنا",
      description:
        "React Frontend کو Axios کے ذریعے PostgreSQL Database سے جوڑنا - مکمل CRUD Operations کے ساتھ نوٹس ایپ",
      duration: "50 منٹ",
      topics: [
        "PostgreSQL Database Setup",
        "Node.js + Express Backend API",
        "Axios Installation & Configuration",
        "GET Requests - Data Fetching",
        "POST Requests - Data Creation",
        "PUT Requests - Data Updates",
        "DELETE Requests - Data Removal",
        "Error Handling with Axios",
        "Loading States Management",
        "Complete Notes Application",
      ],
    },
    // Chapter 38 - Lenis Scrolling
    {
      id: 38,
      title: "✨ Lenis Scrolling - Smooth Scroll Experience",
      description:
        "Lenis کے ساتھ Smooth Scrolling - Installation سے لے کر Advanced Examples تک مکمل گائیڈ",
      duration: "40 منٹ",
      topics: [
        "Lenis Scrolling کیا ہے؟",
        "Installation & Setup",
        "Basic Smooth Scroll Implementation",
        "Scroll Configuration Options",
        "Easing Functions",
        "Infinite Scroll Examples",
        "Parallax Effects with Lenis",
        "Scroll Progress Tracking",
        "Integration with React Components",
        "Performance Optimization",
        "Mobile & Touch Support",
        "Real-world Examples & Demos",
      ],
    },
    // Chapter 39 - Framer Motion
    {
      id: 39,
      title: "🎬 Framer Motion - Page Transitions & Animations",
      description:
        "Framer Motion کے ساتھ Professional Animations - Page Transitions سے لے کر Complex Animations تک",
      duration: "55 منٹ",
      topics: [
        "Framer Motion Introduction",
        "Installation & Setup",
        "Basic Animations (motion components)",
        "Page Transitions with AnimatePresence",
        "Route Transitions in React Router",
        "Gesture Animations (drag, hover, tap)",
        "Scroll-triggered Animations",
        "Variants & Orchestration",
        "Keyframes & SVG Animations",
        "Exit Animations",
        "Layout Animations (shared layouts)",
        "Performance Best Practices",
        "Real-world Examples",
        "Complete Portfolio Demo",
      ],
    },
  ];

  // Use useRef to reference the TOC section
  const tocRef = useRef(null);

  // Show all chapters function - scrolls to TOC
  const showAllChapters = () => {
    if (tocRef.current) {
      tocRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle chapter click - UPDATED: Navigates to the actual chapter route
  const handleReadChapter = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  // Handle chapter info click (for the title) - scrolls to specific chapter info in TOC
  const handleChapterInfoClick = (chapterId) => {
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
      <h2 ref={tocRef}>📖 ری ایکٹ ٹیوٹوریل - Table of Contents</h2>

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
            <span className="stat-number">1400+</span>
            <span className="stat-label">منٹ</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">650+</span>
            <span className="stat-label">کوڈ مثالوں</span>
          </div>
          <div className="stat-item">
            <span
              className="stat-number"
              style={{ color: "#3498db", fontWeight: "bold" }}
            >
              🔥 39
            </span>
            <span className="stat-label" style={{ color: "#3498db" }}>
              مکمل Chapters
            </span>
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
          <div 
            key={chapter.id} 
            className="chapter-card"
            id={`chapter-${chapter.id}`}
          >
            <div className="chapter-header">
              <div className="chapter-number-large" style={{ marginRight : "1rem" }}>Chapter {chapter.id}</div>
              <div className="chapter-duration" style={{ marginLeft : "1rem" }}>{chapter.duration}</div>
            </div>

            <h3 
              className="chapter-title"
              onClick={() => handleChapterInfoClick(chapter.id)}
              style={{ cursor: 'pointer' }}
              title="اس باب کی معلومات دیکھیں"
            >
              {chapter.title}
            </h3>
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
                onClick={() => handleReadChapter(chapter.id)}
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
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: ری ایکٹ بنیادی پروگرامنگ - مکمل ویب ڈیولپمنٹ گائیڈ
            </strong>
          </li>
          <li>✅ Functional Components اور JSX میں مہارت</li>
          <li>✅ Props اور State کا استعمال</li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Navbar بنانا اور استعمال کرنا
            </strong>
          </li>
          <li>✅ React Fragments کا استعمال</li>
          <li>✅ Lists & Keys کے ساتھ ڈیٹا ڈسپلے</li>
          <li>✅ CSS Styling کے مختلف طریقے</li>
          <li>✅ useEffect Hook کے ساتھ side effects manage کرنا</li>
          <li>✅ useRef Hook کے ساتھ DOM رسائی اور values کا انتظام</li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: ColorZilla کے ساتھ ویب ڈیزائن
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: useContext Hook کے ساتھ Props Drilling حل
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Advanced Hooks (useReducer + Custom Hooks)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Performance Optimization (useMemo + useCallback)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Advanced DOM Control (useLayoutEffect + useImperativeHandle)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Memorization Techniques (React.memo + useMemo + useCallback)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Performance Optimization (Lazy Loading + Error Boundaries +
              Code Splitting)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: React Router - Single Page Applications بنانا
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Nested Routing اور Dynamic Routes
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Context API + useContext (Cart System)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Protected Routes - Dashboard Security System
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Local Storage - Persistent State Management
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Custom Hook useLocalStorage + Protected Routes وضاحت
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              نئی: Complete Logout Flow + SweetAlert2 Confirmation
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#28a745" }}>
              🌟 نئی: Chapter 25 - Complete Authentication System + SweetAlert2
              + Auto Login
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#ff6b35" }}>
              🔥 نئی: Chapter 26 - Performance & Optimization + Lazy Loading +
              Environment Variables
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#9c27b0" }}>
              🔐 نئی: Chapter 27 - API Keys Security & Environment Mode
              (Development vs Production)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0078ff" }}>
              🎨 نئی: Chapter 28 - shadcn/ui Complete Guide - Modern UI
              Components Library
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#28a745" }}>
              📝 نئی: Chapter 29 - Zod فارم ویلیڈیشن - انتہائی آسان اور مرحلہ
              وار گائیڈ
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#ff6b35" }}>
              🧰 نئی: Chapter 30 - Redux Toolkit کی تیاری - React بنیادی مہارتیں
              مکمل کریں
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#e91e63" }}>
              🚀 نئی: Chapter 31 - Redux Toolkit Installation & Basic Setup
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#3f51b5" }}>
              🔧 نئی: Chapter 32 - Redux Toolkit Core Concepts (Store, Slices,
              Actions)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#00bcd4" }}>
              ⚡ نئی: Chapter 33 - Async Operations with Redux Toolkit (RTK
              Query)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#3498db" }}>
              📁 نئی: Chapter 34 - React پروجیکٹ کی مکمل فائل سٹرکچر - ہر فائل
              کی اہمیت اور استعمال
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#1a2980" }}>
              🗃️ نئی: Chapter 35 - ڈیٹا بیس، SQL اور PostgreSQL — مکمل بنیاد
              (بالکل ابتدا سے)
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#0f2027" }}>
              📘 نئی: Chapter 36 - SQL کی بنیاد + SQL زبان مکمل - PostgreSQL +
              React Backend
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#8e44ad" }}>
              🔌 نئی: Chapter 37 - React میں Axios کے ذریعے PostgreSQL ڈیٹابیس کو کنٹرول کرنا
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#00d2d3" }}>
              ✨ نئی: Chapter 38 - Lenis Scrolling - Smooth Scroll Experience
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong style={{ color: "#e84342" }}>
              🎬 نئی: Chapter 39 - Framer Motion - Page Transitions & Animations
            </strong>
          </li>
          <li>✅ Modern React tools (Vite) سے واقفیت</li>
          <li>✅ حقیقی پراجیکٹس بنانے کی صلاحیت</li>
        </ul>

        {/* Chapter 39 Special Highlight - Framer Motion */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #e84342 0%, #ff7675 100%)",
            borderRadius: "12px",
            border: "3px solid #e84342",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🎬🚀 Chapter 39: Framer Motion - Page Transitions & Animations
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Basic Animations
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ motion Components</li>
                <li>✅ animate & transition</li>
                <li>✅ initial & exit</li>
                <li>✅ whileHover & whileTap</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔄 Page Transitions
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ AnimatePresence</li>
                <li>✅ Route Transitions</li>
                <li>✅ Exit Animations</li>
                <li>✅ Shared Layout</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ✨ Advanced Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Variants</li>
                <li>✅ Gesture Animations</li>
                <li>✅ Scroll Animations</li>
                <li>✅ SVG Animations</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎪 Real Examples
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Portfolio Website</li>
                <li>✅ Modal Animations</li>
                <li>✅ Card Animations</li>
                <li>✅ Loading Screens</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ⚡ Performance
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ GPU Acceleration</li>
                <li>✅ will-change property</li>
                <li>✅ Best Practices</li>
                <li>✅ Optimization Tips</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 55 منٹ | 📝 14 مکمل Sections | 🎯 Framer Motion + Page Transitions + Portfolio Demo
            </p>
          </div>
        </div>

        {/* Chapter 38 Special Highlight - Lenis Scrolling */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%)",
            borderRadius: "12px",
            border: "3px solid #00d2d3",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            ✨🚀 Chapter 38: Lenis Scrolling - Smooth Scroll Experience
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                📦 Installation & Setup
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Lenis Introduction</li>
                <li>✅ npm Installation</li>
                <li>✅ Basic Configuration</li>
                <li>✅ React Integration</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ⚙️ Configuration Options
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ duration & easing</li>
                <li>✅ orientation & gesture</li>
                <li>✅ smoothWheel & touch</li>
                <li>✅ infinite scrolling</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Advanced Examples
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Parallax Effects</li>
                <li>✅ Scroll Progress</li>
                <li>✅ Section Navigation</li>
                <li>✅ Mobile Support</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔄 Integration
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ with Framer Motion</li>
                <li>✅ with GSAP</li>
                <li>✅ with ScrollTrigger</li>
                <li>✅ React Hooks</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 Real Examples
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Landing Page</li>
                <li>✅ Portfolio Site</li>
                <li>✅ E-commerce Demo</li>
                <li>✅ Blog Layout</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 40 منٹ | 📝 12 مکمل Sections | 🎯 Lenis + Smooth Scroll + Parallax + Demos
            </p>
          </div>
        </div>

        {/* Chapter 37 Special Highlight - Axios with PostgreSQL */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
            borderRadius: "12px",
            border: "3px solid #8e44ad",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🔌🚀 Chapter 37: React میں Axios کے ذریعے PostgreSQL ڈیٹابیس کو کنٹرول کرنا
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                🗄️ Database Setup
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ PostgreSQL Installation</li>
                <li>✅ Database Creation</li>
                <li>✅ Table Design (notes)</li>
                <li>✅ pgAdmin Configuration</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                ⚙️ Backend API
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Node.js + Express Setup</li>
                <li>✅ PostgreSQL Connection</li>
                <li>✅ RESTful API Routes</li>
                <li>✅ CRUD Operations</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                🔌 Axios Integration
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Axios Installation</li>
                <li>✅ Base URL Configuration</li>
                <li>✅ GET, POST, PUT, DELETE</li>
                <li>✅ Error Handling</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                ⚡ React Frontend
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ useState for Data</li>
                <li>✅ useEffect for Fetching</li>
                <li>✅ Form Handling</li>
                <li>✅ Loading States</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                📝 Notes Application
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Create New Notes</li>
                <li>✅ Display All Notes</li>
                <li>✅ Edit Existing Notes</li>
                <li>✅ Delete Notes</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                🚀 Advanced Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Axios Interceptors</li>
                <li>✅ Error Boundaries</li>
                <li>✅ Loading Skeletons</li>
                <li>✅ Responsive Design</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 50 منٹ | 📝 10 مکمل Sections | 🎯 PostgreSQL + Node.js + Axios + Complete Notes App
            </p>
            <p
              style={{
                margin: "10px 0 0 0",
                fontSize: "14px",
                color: "#f1c40f",
              }}
            >
              🔥 39 Chapters مکمل! اب آپ React + Redux + PostgreSQL + Lenis + Framer Motion میں مکمل مہارت حاصل کر سکتے ہیں
            </p>
          </div>
        </div>
{/* Chapter 36 Special Highlight - Updated */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
            borderRadius: "12px",
            border: "3px solid #0f2027",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            📘🚀 Chapter 36: SQL کی بنیاد + SQL زبان مکمل - PostgreSQL + React
            Backend
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#00ff88", marginBottom: "10px" }}>
                📊 SQL بنیادیں
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ SQL Data Types & Constraints</li>
                <li>✅ Primary Key & Foreign Key</li>
                <li>✅ INSERT, SELECT, WHERE, ORDER BY</li>
                <li>✅ LIMIT & Pagination</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#00ff88", marginBottom: "10px" }}>
                🔗 Multiple Tables
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Multiple Tables & Relationships</li>
                <li>✅ JOIN Operations (INNER, LEFT, RIGHT)</li>
                <li>✅ Table Relationships Design</li>
                <li>✅ Real Database Structure</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#00ff88", marginBottom: "10px" }}>
                ⚡ Backend Integration
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Backend API with PostgreSQL</li>
                <li>✅ Express.js + SQL Queries</li>
                <li>✅ React Frontend Integration</li>
                <li>✅ Complete Institute System</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#00ff88", marginBottom: "10px" }}>
                🏫 Zohaibtech System
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Students Management</li>
                <li>✅ Courses & Enrollments</li>
                <li>✅ User Roles (Admin/Teacher)</li>
                <li>✅ Complete CRUD Operations</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#00ff88", marginBottom: "10px" }}>
                🔧 عملی Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Code Copy Buttons</li>
                <li>✅ Live SQL Demos</li>
                <li>✅ Backend + Frontend Code</li>
                <li>✅ Real-world Project Structure</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 55 منٹ | 📝 19 مکمل Sections | 🎯 SQL Language + Backend
              API + React Integration
            </p>
          </div>
        </div>

        {/* Chapter 35 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
            borderRadius: "12px",
            border: "3px solid #1a2980",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🗃️🚀 Chapter 35: ڈیٹا بیس، SQL اور PostgreSQL — مکمل بنیاد (بالکل
            ابتدا سے)
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🗃️ ڈیٹا بیس کی تین اقسام
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ File-Based Systems</li>
                <li>✅ Relational Databases</li>
                <li>✅ NoSQL Databases</li>
                <li>✅ ہر قسم کے فوائد/نقصانات</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🗣️ SQL کیا ہے؟
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Database سے بات کرنے کی زبان</li>
                <li>✅ CRUD آپریشنز</li>
                <li>✅ Practical SQL Examples</li>
                <li>✅ PostgreSQL کا تعارف</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                📥 PostgreSQL Installation
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ ڈاؤن لوڈ اور انسٹالیشن</li>
                <li>✅ pgAdmin Setup</li>
                <li>✅ SQL Shell Configuration</li>
                <li>✅ Password Management</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔧 عملی SQL کمانڈز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ CREATE TABLE</li>
                <li>✅ INSERT, SELECT, UPDATE, DELETE</li>
                <li>✅ pgAdmin میں عملی مشق</li>
                <li>✅ Database Queries</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 React Backend انٹیگریشن
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ PostgreSQL as Backend</li>
                <li>✅ API Connections</li>
                <li>✅ Industry-level Context</li>
                <li>✅ Real-world Projects</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 50 منٹ | 📝 10 مکمل Sections | 🎯 Database + SQL +
              PostgreSQL + React Backend
            </p>
          </div>
        </div>

        {/* Chapter 34 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #3498db 0%, #2c3e50 100%)",
            borderRadius: "12px",
            border: "3px solid #3498db",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            📁🚀 Chapter 34: React پروجیکٹ کی مکمل فائل سٹرکچر - ہر فائل کی
            اہمیت اور استعمال
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                📦 فائل سٹرکچر کا تعارف
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ React پروجیکٹ کی مکمل فائل سٹرکچر</li>
                <li>✅ ہر فائل کا مقصد اور اہمیت</li>
                <li>✅ Feature-based structure</li>
                <li>✅ Best practices اور conventions</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🏗️ Redux Structure
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Store Configuration</li>
                <li>✅ Slices اور Reducers</li>
                <li>✅ API Integration فائلز</li>
                <li>✅ Middleware Setup</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🧩 Components Structure
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Reusable Components</li>
                <li>✅ Page Components</li>
                <li>✅ Layout Components</li>
                <li>✅ Custom Hooks</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ⚙️ Configuration فائلز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ package.json کی مکمل وضاحت</li>
                <li>✅ vite.config.js کنفیگریشن</li>
                <li>✅ tailwind.config.js سیٹ اپ</li>
                <li>✅ Environment variables</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                📚 عملی مشق
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ مکمل shopping cart app</li>
                <li>✅ ہر فائل کی تفصیلی وضاحت</li>
                <li>✅ Code examples with explanation</li>
                <li>✅ Best practices guide</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 35 منٹ | 📝 10 مکمل Sections | 🎯 File Structure +
              Complete Code + Best Practices
            </p>
          </div>
        </div>

        {/* Chapter 33 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)",
            borderRadius: "12px",
            border: "3px solid #00bcd4",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            ⚡🚀 Chapter 33: Async Operations with Redux Toolkit (RTK Query)
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔌 RTK Query Introduction
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ RTK Query کیا ہے؟</li>
                <li>✅ Traditional APIs vs RTK Query</li>
                <li>✅ Automatic Caching System</li>
                <li>✅ No More useEffect for APIs</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 Key Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Automatic Caching</li>
                <li>✅ Background Refetching</li>
                <li>✅ Loading & Error States</li>
                <li>✅ Optimistic Updates</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔧 Setup & Configuration
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ RTK Query Installation</li>
                <li>✅ API Slice Creation</li>
                <li>✅ Endpoints Definition</li>
                <li>✅ Provider Setup</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🌐 Real API Integration
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ JSONPlaceholder APIs</li>
                <li>✅ GET, POST, PUT, DELETE</li>
                <li>✅ Auto-refetch on Mutation</li>
                <li>✅ Error Handling</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Advanced Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Pagination & Infinite Scroll</li>
                <li>✅ Polling (Real-time Updates)</li>
                <li>✅ Cache Invalidation</li>
                <li>✅ Prefetching Data</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 45 منٹ | 📝 9 مکمل Sections | 🎯 RTK Query + Real APIs +
              Advanced Caching
            </p>
          </div>
        </div>

        {/* Chapter 32 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #3f51b5 0%, #303f9f 100%)",
            borderRadius: "12px",
            border: "3px solid #3f51b5",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🔧🚀 Chapter 32: Redux Toolkit Core Concepts (Store, Slices,
            Actions)
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🏪 Store Creation
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Redux Store Setup</li>
                <li>✅ configureStore() Method</li>
                <li>✅ Middleware Configuration</li>
                <li>✅ DevTools Integration</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔪 Slices Concept
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ createSlice() Function</li>
                <li>✅ Initial State Definition</li>
                <li>✅ Reducers Creation</li>
                <li>✅ Auto-generated Actions</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ⚡ Actions & Dispatching
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Action Creators</li>
                <li>✅ useDispatch() Hook</li>
                <li>✅ Payload Passing</li>
                <li>✅ Async Actions</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                👁️ State Access
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ useSelector() Hook</li>
                <li>✅ State Selection</li>
                <li>✅ Performance Optimization</li>
                <li>✅ Memoized Selectors</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Practical Project
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Todo Application</li>
                <li>✅ Cart System</li>
                <li>✅ User Authentication</li>
                <li>✅ Real-world Examples</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 40 منٹ | 📝 9 مکمل Sections | 🎯 Store + Slices + Actions
              + Real Project
            </p>
          </div>
        </div>

        {/* Chapter 31 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
            borderRadius: "12px",
            border: "3px solid #e91e63",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🚀📦 Chapter 31: Redux Toolkit Installation & Basic Setup
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                📦 Installation
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ npm/yarn Installation</li>
                <li>✅ Required Dependencies</li>
                <li>✅ Package.json Setup</li>
                <li>✅ Version Compatibility</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔧 Basic Setup
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Store Configuration</li>
                <li>✅ Provider Wrapping</li>
                <li>✅ File Structure</li>
                <li>✅ Best Practices</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 First Slice
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Counter Example</li>
                <li>✅ State Management</li>
                <li>✅ Actions Creation</li>
                <li>✅ UI Integration</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔍 DevTools
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Redux DevTools Setup</li>
                <li>✅ State Inspection</li>
                <li>✅ Action Tracking</li>
                <li>✅ Time Travel Debugging</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 Quick Start
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Step-by-step Guide</li>
                <li>✅ Common Errors Fix</li>
                <li>✅ Performance Tips</li>
                <li>✅ Ready-to-use Templates</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 30 منٹ | 📝 8 مکمل Sections | 🎯 Installation + Setup +
              First Project
            </p>
          </div>
        </div>

        {/* Chapter 30 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
            borderRadius: "12px",
            border: "3px solid #ff6b35",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🧰🚀 Chapter 30: Redux Toolkit کی تیاری - React بنیادی مہارتیں مکمل
            کریں
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ✨ Redux Toolkit کیا ہے؟
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ جادوئی بیگ کی وضاحت</li>
                <li>✅ Global State Management</li>
                <li>✅ Principal (Store) کی مثال</li>
                <li>✅ Modern Redux کا بہترین ورژن</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Skills چیک لسٹ
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ 8 ضروری React Skills</li>
                <li>✅ Props Drilling سمجھ</li>
                <li>✅ API fetching مہارت</li>
                <li>✅ Context API کا تجربہ</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔧 فوائد اور ٹولز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ کم کوڈ - آدھا Redux</li>
                <li>✅ آسان Setup اور Structure</li>
                <li>✅ Async Logic آسان</li>
                <li>✅ 4 بنیادی Tools</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🌐 مفت APIs مشق
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Bored API - Random Activities</li>
                <li>✅ Agify.io - Age Prediction</li>
                <li>✅ Dog CEO - Random Images</li>
                <li>✅ JokeAPI - Random Jokes</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 عملی فیچرز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ کاپی کوڈ بٹنز</li>
                <li>✅ فلائیئنگ کنفرمیشن</li>
                <li>✅ جامع چیک لسٹ</li>
                <li>✅ ریئل ورلڈ مثالوں</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 25 منٹ | 📝 8 مکمل Sections | 🎯 تیاری + چیک لسٹ + عملی
              مشق
            </p>
          </div>
        </div>

        {/* Chapter 29 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
            borderRadius: "12px",
            border: "3px solid #28a745",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            📝✅ Chapter 29: Zod فارم ویلیڈیشن - انتہائی آسان اور مرحلہ وار
            گائیڈ
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🧠 Zod کیا ہے؟
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Zod تعارف اور فوائد</li>
                <li>✅ فارم ڈیٹا کی چیکنگ</li>
                <li>✅ Validation Rules</li>
                <li>✅ Error Handling</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🧰 مکمل سیٹ اپ
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ انسٹالیشن گائیڈ</li>
                <li>✅ react-hook-form انضمام</li>
                <li>✅ zodResolver کنفیگریشن</li>
                <li>✅ Schema ڈیفینیشن</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 عملی ڈیمو
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ مکمل لاگ ان فارم</li>
                <li>✅ اینیمیٹڈ کنفرمیشن</li>
                <li>✅ کاپی کوڈ فنکشن</li>
                <li>✅ حقیقی استعمال کی مثالیں</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🔐 ویلیڈیشن رولز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ ای میل ویلیڈیشن</li>
                <li>✅ پاس ورڈ رولز</li>
                <li>✅ کسٹم ایرر میسجز</li>
                <li>✅ ریئل ٹائم ویلیڈیشن</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 ایڈوانس فیچرز
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ اینیمیٹڈ فلائیئنگ میسجز</li>
                <li>✅ کوڈ کاپی فنکشن</li>
                <li>✅ ریسپانسیو ڈیزائن</li>
                <li>✅ پروفیشنل UI/UX</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 30 منٹ | 📝 10 مکمل Sections | 🎯 Zod + react-hook-form +
              عملی ڈیمو
            </p>
          </div>
        </div>

        {/* Chapter 28 Special Highlight */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "linear-gradient(135deg, #0078ff 0%, #00c6ff 100%)",
            borderRadius: "12px",
            border: "3px solid #0078ff",
            color: "white",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "15px",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            🎨🚀 Chapter 28: shadcn/ui - Modern UI Components Library
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎯 Complete Installation Guide
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Vite + React Setup</li>
                <li>✅ Tailwind CSS Configuration</li>
                <li>✅ Teacher's Method Integration</li>
                <li>✅ File Structure Setup</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                ⚡ Benefits Comparison
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ vs Ant Design</li>
                <li>✅ vs Material UI</li>
                <li>✅ Performance Benefits</li>
                <li>✅ Customization Control</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🛠 Practical Usage
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Button Components</li>
                <li>✅ Navigation Menu</li>
                <li>✅ Copy Code Functionality</li>
                <li>✅ Responsive Design</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🎨 UI Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Beautiful Components</li>
                <li>✅ Accessibility Focused</li>
                <li>✅ Tailwind CSS Styling</li>
                <li>✅ Professional Design</li>
              </ul>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "250px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ color: "#ffd700", marginBottom: "10px" }}>
                🚀 Advanced Features
              </h5>
              <ul
                style={{ margin: "0", paddingRight: "15px", fontSize: "14px" }}
              >
                <li>✅ Copy Code Buttons</li>
                <li>✅ Flying Notifications</li>
                <li>✅ Responsive Breakpoints</li>
                <li>✅ Real-world Examples</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              ⏰ مدت: 35 منٹ | 📝 10 مکمل Sections | 🎯 Installation +
              Comparison + Live Demo
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Chapter0;