import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle menu function
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    if (!isMobile || !isExpanded) return;

    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".main-navbar");
      if (navbar && !navbar.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile, isExpanded]);

  // Close menu when route changes
  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  // Chapters with special icons and animations - UPDATED with chapters 0 through 39
  const chaptersData = [
    {
      id: 0,
      title: "چیپٹر 0",
      desc: "فہرست مضامین (Index)",
      path: "/chapter/0",
      icon: "📖",
      badge: "فہرست",
      animation: "pulse",
    },
    {
      id: 1,
      title: "چیپٹر 1",
      desc: "ری ایکٹ انسٹالیشن",
      path: "/chapter/1",
      icon: "🚀",
      badge: "شروعات",
      animation: "bounce",
    },
    {
      id: 2,
      title: "چیپٹر 2",
      desc: "JSX اور فنکشنل کمپونینٹس",
      path: "/chapter/2",
      icon: "🧩",
      badge: "بنیادیں",
      animation: "pulse",
    },
    {
      id: 3,
      title: "چیپٹر 3",
      desc: "State اور Props",
      path: "/chapter/3",
      icon: "⚡",
      badge: "ڈیٹا",
      animation: "glow",
    },
    {
      id: 4,
      title: "چیپٹر 4",
      desc: "ایونٹ ہینڈلنگ",
      path: "/chapter/4",
      icon: "🎮",
      badge: "ایکشن",
      animation: "bounce",
    },
    {
      id: 5,
      title: "چیپٹر 5",
      desc: "Props Drilling",
      path: "/chapter/5",
      icon: "🎯",
      badge: "ایڈوانسڈ",
      animation: "pulse",
      isFeatured: true,
      featuredText: "🔥 مقبول",
    },
    {
      id: 6,
      title: "چیپٹر 6",
      desc: "UseState اور UseEffect ہکس",
      path: "/chapter/6",
      icon: "🌀",
      badge: "ہاکس",
      animation: "spin",
    },
    {
      id: 7,
      title: "چیپٹر 7",
      desc: "React Router",
      path: "/chapter/7",
      icon: "🛣️",
      badge: "نیویگیشن",
      animation: "pulse",
    },
    {
      id: 8,
      title: "چیپٹر 8",
      desc: "لسٹس اور کیز + React میں CSS اسٹائلنگ",
      path: "/chapter/8",
      icon: "✅",
      badge: "سی ایس ایس اسٹائلنگ",
      animation: "bounce",
    },
    {
      id: 9,
      title: "چیپٹر 9",
      desc: "فارمز اور والیڈیشن",
      path: "/chapter/9",
      icon: "📝",
      badge: "فارمز",
      animation: "pulse",
    },
    {
      id: 10,
      title: "چیپٹر 10",
      desc: "useRef کے مختلف عملی استعمالات",
      path: "/chapter/10",
      icon: "🔌",
      badge: "useRef کے مختلف عملی استعمالات",
      animation: "glow",
    },
    {
      id: 11,
      title: "کلر پکر",
      desc: "Chrome میں ColorZilla ڈاؤن لوڈ کریں",
      path: "/chapter/11",
      icon: "🎨",
      badge: "ڈیزائن",
      animation: "pulse",
      isFeatured: true,
      featuredText: "🌟 خاص",
    },
    {
      id: 12,
      title: "چیپٹر 12",
      desc: "useContext Hook پراپس کے بغیر ڈیٹا کا سفر سیکھیں",
      path: "/chapter/12",
      icon: "🧠",
      badge: "ایڈوانسڈ",
      animation: "pulse",
    },
    {
      id: 13,
      title: "چیپٹر 13",
      desc: "useReducer اور Custom Hooks advanced concepts",
      path: "/chapter/13",
      icon: "📱",
      badge: "پروجیکٹ",
      animation: "bounce",
    },
    {
      id: 14,
      title: "چیپٹر 14",
      desc: "useMemo اور useCallback (پرفارمنس بہتر بنانا)",
      path: "/chapter/14",
      icon: "💻",
      badge: "پروجیکٹ",
      animation: "pulse",
    },
    {
      id: 15,
      title: "چیپٹر 15",
      desc: "useLayoutEffect & useImperativeHandle (ایڈوانسڈ ہکس)",
      path: "/chapter/15",
      icon: "🎯",
      badge: "ایڈوانسڈ",
      animation: "glow",
    },
    {
      id: 16,
      title: "چیپٹر 16",
      desc: "React.memo، useMemo، useCallback (Re-render روکنے کا جادو)",
      path: "/chapter/16",
      icon: "⚛️",
      badge: "Context API",
      animation: "pulse",
      isFeatured: true,
      featuredText: "⚡ Context API",
    },
    {
      id: 17,
      title: "چیپٹر 17",
      desc: " Performance Optimization - Lazy Loading ",
      path: "/chapter/17",
      icon: "🔧",
      badge: "پرفارمنس",
      animation: "bounce",
    },
    {
      id: 18,
      title: "چیپٹر 18",
      desc: "React Router (Single Page Application)",
      path: "/chapter/18",
      icon: "🛠️",
      badge: "نیویگیشن",
      animation: "pulse",
    },
    {
      id: 19,
      title: "چیپٹر 19",
      desc: " 404 Page & Redirect Systems",
      path: "/chapter/19",
      icon: "🎪",
      badge: "نیویگیشن",
      animation: "glow",
    },
    {
      id: 20,
      title: "چیپٹر 20",
      desc: "Context API + useContext (Cart System)",
      path: "/chapter/20",
      icon: "🚀",
      badge: "Context API",
      animation: "pulse",
    },
    {
      id: 21,
      title: "چیپٹر 21",
      desc: "Protected Routes (Dashboard Access only after Login)",
      path: "/chapter/21",
      icon: "💎",
      badge: "سیکورٹی",
      animation: "bounce",
    },
    {
      id: 22,
      title: "چیپٹر 22",
      desc: "Local Storage کے ذریعے Persistent State",
      path: "/chapter/22",
      icon: "📊",
      badge: "سیکورٹی",
      animation: "pulse",
    },
    {
      id: 23,
      title: "چیپٹر 23",
      desc: "Sync Multiple States (Cart + Theme) with useLocalStorage()",
      path: "/chapter/23",
      icon: "🏆",
      badge: "سیکورٹی",
      animation: "glow",
    },
    {
      id: 24,
      title: "چیپٹر 24",
      desc: "Complete Logout Flow - Login → Persistent Data → Logout",
      path: "/chapter/24",
      icon: "🔐",
      badge: "سیکورٹی",
      animation: "pulse",
      isFeatured: true,
      featuredText: "🛒 کارٹ سسٹم",
    },
    {
      id: 25,
      title: "چیپٹر 25",
      desc: "Authentication & Protected Routes + SweetAlert2 Alerts",
      path: "/chapter/25",
      icon: "💫",
      badge: "ایلرٹس",
      animation: "bounce",
      isFeatured: true,
      featuredText: "✨ SweetAlert2",
    },
    {
      id: 26,
      title: "چیپٹر 26",
      desc: "Lazy Loading + Environment Variables + Weather Dashboard",
      path: "/chapter/26",
      icon: "📦",
      badge: "پروجیکٹ",
      animation: "pulse",
    },
    {
      id: 27,
      title: "چیپٹر 27",
      desc: " API Keys Security & Environment Mode (Development vs Production)",
      path: "/chapter/27",
      icon: "🎁",
      badge: "سیکورٹی",
      animation: "glow",
    },
    {
      id: 28,
      title: "shadcn/ui",
      desc: "Complete Guide to shadcn/ui",
      path: "/chapter/28",
      icon: "💎",
      badge: "UI",
      animation: "pulse",
      isFeatured: true,
      featuredText: "🎨 Modern UI",
    },
    {
      id: 29,
      title: "چیپٹر 29",
      desc: "Zod فارم والیڈیشن",
      path: "/chapter/29",
      icon: "📝",
      badge: "ویلیڈیشن",
      animation: "bounce",
      isFeatured: true,
      featuredText: "✅ Zod",
    },
    {
      id: 30,
      title: "چیپٹر 30",
      desc: "Redux Toolkit کی تیاری",
      path: "/chapter/30",
      icon: "🧰",
      badge: "Redux",
      animation: "pulse",
    },
    {
      id: 31,
      title: "چیپٹر 31",
      desc: "Redux Toolkit عملی گائیڈ",
      path: "/chapter/31",
      icon: "🛒",
      badge: "Redux",
      animation: "bounce",
      isFeatured: true,
      featuredText: "🚀 Redux",
    },
    {
      id: 32,
      title: "چیپٹر 32",
      desc: "Redux Toolkit کے بنیادی Concepts",
      path: "/chapter/32",
      icon: "🔧",
      badge: "Redux",
      animation: "pulse",
    },
    {
      id: 33,
      title: "چیپٹر 33",
      desc: "پرفارمنس آپٹیمائزیشن ریڈکس ٹولکٹس کے ساتھ",
      path: "/chapter/33",
      icon: "⚡",
      badge: "پرفارمنس",
      animation: "glow",
    },
    {
      id: 34,
      title: "چیپٹر 34",
      desc: "Redux Shopping Cart - تمام فائلیں مکمل",
      path: "/chapter/34",
      icon: "📁",
      badge: "سٹرکچر",
      animation: "pulse",
    },
    {
      id: 35,
      title: "چیپٹر 35",
      desc: "React کے ساتھ PostgreSQL بطور Backend",
      path: "/chapter/35",
      icon: "🗃️",
      badge: "ڈیٹابیس",
      animation: "bounce",
      isFeatured: true,
      featuredText: "🗃️ ڈیٹابیس",
    },
    {
      id: 36,
      title: "چیپٹر 36",
      desc: "Chapter 36 — SQL کی بنیاد + SQL زبان مکمل",
      path: "/chapter/36",
      icon: "📘",
      badge: "SQL",
      animation: "pulse",
      isFeatured: true,
      featuredText: "📘 زبانSQL مکمل",
    },
    {
      id: 37,
      title: "چیپٹر 37",
      desc: "React Axios PostgreSQL Project",
      path: "/chapter/37",
      icon: "🔌",
      badge: "Axios + PostgreSQL",
      animation: "glow",
      isFeatured: true,
      featuredText: "🔥 مکمل پروجیکٹ",
    },
    {
      id: 38,
      title: "چیپٹر 38",
      desc: "Lenis مکمل اردو چیپٹر اور GSAP اینیمیشن",
      path: "/chapter/38",
      icon: "📜",
      badge: "Lenis + GSAP",
      animation: "pulse",
      isFeatured: true,
      featuredText: "📜 Lenis مکمل",
    },
    {
      id: 39,
      title: "چیپٹر 39",
      desc: "Framer Motion Animation مکمل چیپٹر",
      path: "/chapter/39",
      icon: "🎬",
      badge: "Framer Motion",
      animation: "bounce",
      isFeatured: true,
      featuredText: "🎬 Framer Motion",
    },
  ];

  // Colors for chapters - 40 colors for chapters 0 through 39
  const colors = [
    "#4CAF50",
    "#2196F3",
    "#FF9800",
    "#9C27B0",
    "#F44336",
    "#00BCD4",
    "#795548",
    "#607D8B",
    "#8BC34A",
    "#FF5722",
    "#E91E63",
    "#3F51B5",
    "#009688",
    "#FFC107",
    "#673AB7",
    "#CDDC39",
    "#FF9800",
    "#2196F3",
    "#4CAF50",
    "#FF5722",
    "#E91E63",
    "#3F51B5",
    "#009688",
    "#FFC107",
    "#673AB7",
    "#CDDC39",
    "#FF9800",
    "#2196F3",
    "#4CAF50",
    "#FF5722",
    "#E91E63",
    "#3F51B5",
    "#009688",
    "#FFC107",
    "#673AB7",
    "#CDDC39",
    "#1a237e",
    "#8e44ad",
    "#27ae60",
    "#e67e22", // 40 colors total for chapters 0-39
  ];

  // Handle menu toggle
  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle chapter click (close menu immediately)
  const handleChapterClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <nav
        className={`main-navbar ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        <div className="navbar-container">
          {/* Logo and Home Link */}
          <Link to="/" className="navbar-logo" onClick={handleChapterClick}>
            <div className="navbar-logo-icon">
              <span className="logo-emoji">⚛️</span>
            </div>
            <div>
              <h1 className="navbar-title">
                <span className="title-glow">ری ایکٹ</span> اردو ٹیوٹوریل
              </h1>
              <p className="navbar-subtitle">40 چیپٹرز کا مکمل کورس (0-39)</p>
            </div>
          </Link>

          {/* Current Chapter Info */}
          <div className="current-chapter-info">
            <p className="current-chapter-label">موجودہ چیپٹر:</p>
            <p className="current-chapter-name">
              {location.pathname.includes("chapter")
                ? chaptersData.find((c) => location.pathname === c.path)?.desc
                : "ہوم پیج"}
            </p>
          </div>

          {/* Expand/Collapse Button */}
          <div
            className={`expand-indicator ${isExpanded ? "expanded" : ""}`}
            onClick={handleMenuToggle}
          >
            <span className="expand-text">
              {isExpanded ? "✕ بند کریں" : "≡ چیپٹرز دیکھیں"}
            </span>
            <div className="expand-icon">{isExpanded ? "▲" : "▼"}</div>
          </div>
        </div>

        {/* Expanded Chapters Grid */}
        <div className={`navbar-expanded-content ${isExpanded ? "show" : ""}`}>
          <div className="chapters-grid">
            {chaptersData.map((chapter, index) => (
              <Link
                key={chapter.id}
                to={chapter.path}
                className="chapter-link"
                onClick={handleChapterClick}
              >
                <div
                  className={`chapter-card ${location.pathname === chapter.path ? "active-chapter" : ""} ${chapter.isFeatured ? "featured-chapter" : ""}`}
                  style={{
                    borderLeftColor: colors[index % colors.length],
                    animation: `${chapter.animation} 2s infinite`,
                  }}
                >
                  <div className="chapter-card-header">
                    <div
                      className="chapter-number-circle"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        boxShadow: `0 0 10px ${colors[index % colors.length]}`,
                      }}
                    >
                      <span className="chapter-icon">{chapter.icon}</span>
                      <span className="chapter-number">{chapter.id}</span>
                    </div>
                    <div className="chapter-card-text">
                      <div className="chapter-title-wrapper">
                        <h3 className="chapter-card-title">{chapter.title}</h3>
                        {chapter.isFeatured && (
                          <span
                            className="featured-badge"
                            style={{ backgroundColor: colors[index % colors.length] }}
                          >
                            {chapter.featuredText}
                          </span>
                        )}
                      </div>
                      <p className="chapter-card-desc">{chapter.desc}</p>
                      <span className="chapter-badge">{chapter.badge}</span>
                    </div>
                  </div>
                  <div className="chapter-hover-effect"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Progress Bar - Updated with correct total chapters (40) */}
          <div className="navbar-progress-section">
            <div className="progress-info">
              <span className="progress-text">
                📊 کورس مکمل: {Math.round((chaptersData.length / 40) * 100)}%
              </span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${Math.round((chaptersData.length / 40) * 100)}%`,
                    background: `linear-gradient(90deg, ${colors.join(", ")})`,
                  }}
                ></div>
              </div>
            </div>

            <div className="progress-stats">
              <div className="progress-stat">
                <span className="stat-icon">📚</span>
                <span className="stat-value">{chaptersData.length}</span>
                <span className="stat-label">چیپٹرز</span>
              </div>
              <div className="progress-stat">
                <span className="stat-icon">⏱️</span>
                <span className="stat-value">1400+</span>
                <span className="stat-label">منٹ</span>
              </div>
              <div className="progress-stat">
                <span className="stat-icon">💻</span>
                <span className="stat-value">650+</span>
                <span className="stat-label">مثالیں</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className={`navbar-spacer ${isExpanded ? "expanded" : ""}`} />
    </>
  );
};

export default Navbar;