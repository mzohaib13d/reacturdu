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
      title: "React Functional Components + JSX + Props",
      description: "کمپوننٹس بنانا، JSX اور Props کا استعمال",
      duration: "20 منٹ",
      topics: ["Functional Components", "JSX syntax", "Props", "Destructuring"],
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
  ];

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
            <span className="stat-number">183+</span>
            <span className="stat-label">منٹ</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
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
          <li>✅ Functional Components اور JSX میں مہارت</li>
          <li>✅ Props اور State کا استعمال</li>
          <li>✅ React Fragments کا استعمال</li>
          <li>✅ Lists & Keys کے ساتھ ڈیٹا ڈسپلے</li>
          <li>✅ CSS Styling کے مختلف طریقے</li>
          <li>✅ useEffect Hook کے ساتھ side effects manage کرنا</li>
          <li>✅ useRef Hook کے ساتھ DOM رسائی اور values کا انتظام</li>
          <li>✅ Modern React tools (Vite) سے واقفیت</li>
          <li>✅ حقیقی پراجیکٹس بنانے کی صلاحیت</li>
        </ul>
      </div>
    </div>
  );
}

export default Chapter0;