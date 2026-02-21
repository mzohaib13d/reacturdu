import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  // Featured chapters with special styling
  const featuredChapters = [
    { 
      id: 0, 
      title: 'فہرست مضامین', 
      desc: 'مکمل کورس کا نقشہ', 
      icon: '📖', 
      color: '#4CAF50',
      path: '/chapter/0'
    },
    { 
      id: 5, 
      title: 'Props Drilling', 
      desc: 'Context API سیکھیں', 
      icon: '⚡', 
      color: '#FF9800',
      path: '/chapter/5'
    },
    { 
      id: 11, 
      title: 'کلر پکر', 
      desc: 'ColorZilla کا استعمال', 
      icon: '🎨', 
      color: '#E91E63',
      path: '/chapter/11'
    },
    { 
      id: 24, 
      title: 'لاگ آؤٹ سسٹم', 
      desc: 'سیکورٹی سسٹم بنائیں', 
      icon: '🔐', 
      color: '#673AB7',
      path: '/chapter/24'
    },
    { 
      id: 28, 
      title: 'shadcn/ui', 
      desc: 'مڈرن UI کمپونینٹس', 
      icon: '💎', 
      color: '#0078ff',
      path: '/chapter/28'
    },
    { 
      id: 31, 
      title: 'Redux کارٹ', 
      desc: 'شاپنگ کارٹ پروجیکٹ', 
      icon: '🛒', 
      color: '#dc3545',
      path: '/chapter/31'
    },
    { 
      id: 35, 
      title: 'PostgreSQL', 
      desc: 'React کے ساتھ ڈیٹابیس', 
      icon: '🗃️', 
      color: '#1a2980',
      path: '/chapter/35'
    },
    { 
      id: 36, 
      title: 'SQL زبان', 
      desc: 'SQL کی بنیاد + مکمل کورس', 
      icon: '📘', 
      color: '#0f2027',
      path: '/chapter/36'
    },
    { 
      id: 37, 
      title: 'Axios + PostgreSQL', 
      desc: 'React Axios PostgreSQL مکمل پروجیکٹ', 
      icon: '🔌', 
      color: '#8e44ad',
      path: '/chapter/37'
    },
    {
      id: 38,
      title: 'Lenis + GSAP',
      desc: 'Lenis مکمل اردو چیپٹر اور GSAP اینیمیشن',
      icon: '📜',
      color: '#27ae60',
      path: '/chapter/38'
    },
    {
      id: 39,
      title: 'Framer Motion',
      desc: 'Framer Motion Animation مکمل چیپٹر',
      icon: '🎬',
      color: '#e67e22',
      path: '/chapter/39'
    },
  ];

  // Course statistics - UPDATED
  const courseStats = [
    { number: '40+', label: 'مکمل چیپٹرز' },
    { number: '650+', label: 'کوڈ مثالوں' },
    { number: '18+', label: 'عملی پروجیکٹس' },
    { number: '1400+', label: 'منٹ' },
  ];

  // Learning path steps - UPDATED to include all chapters up to 39
  const learningPath = [
    { step: 1, title: 'بنیادیں سیکھیں', desc: 'React, JSX, Components', color: '#4CAF50' },
    { step: 2, title: 'ایڈوانسڈ Concepts', desc: 'Hooks, Context API, Router', color: '#2196F3' },
    { step: 3, title: 'پروجیکٹس بنائیں', desc: 'Todo App, Shopping Cart', color: '#FF9800' },
    { step: 4, title: 'مکمل مہارت', desc: 'Database, Backend, Animations', color: '#9C27B0' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-highlight">ری ایکٹ جے ایس</span>
              <br />
              مکمل اردو ٹیوٹوریل
            </h1>
            <p className="hero-description">
              40+ مکمل چیپٹرز میں ری ایکٹ جے ایس صفر سے ایکسپرٹ لیول تک سیکھیں۔ 
              ہر چیپٹر میں عملی مثالوں، کوڈ snippets اور پروجیکٹس کے ساتھ۔
            </p>
            <div className="hero-buttons">
              <Link to="/chapter/0" className="btn-primary">
                <span className="btn-icon">📖</span>
                کورس شروع کریں
              </Link>
              <Link to="/chapter/39" className="btn-secondary">
                <span className="btn-icon">🎬</span>
                آخری چیپٹر دیکھیں
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            {courseStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Chapters */}
      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">⭐</span>
              نمایاں چیپٹرز
            </h2>
            <p className="section-subtitle">
              ان اہم چیپٹرز سے اپنا سفر شروع کریں
            </p>
          </div>
          <div className="featured-grid">
            {featuredChapters.map((chapter) => (
              <Link 
                key={chapter.id} 
                to={chapter.path}
                className="featured-card"
                style={{ borderTopColor: chapter.color }}
              >
                <div className="card-header">
                  <div 
                    className="card-icon"
                    style={{ backgroundColor: chapter.color }}
                  >
                    {chapter.icon}
                  </div>
                  <div className="card-title-wrapper">
                    <h3 className="card-title">
                      {chapter.title}
                    </h3>
                    <span className="card-badge" style={{ color: chapter.color }}>
                      Chapter {chapter.id}
                    </span>
                  </div>
                </div>
                <p className="card-desc">
                  {chapter.desc}
                </p>
                <div className="card-action">
                  <span className="action-text" style={{ color: chapter.color }}>
                    پڑھیں 
                    <span className="action-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="path-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🗺️</span>
              سیکھنے کا راستہ
            </h2>
            <p className="section-subtitle">
              4 مراحل میں مکمل ری ایکٹ ڈیولپر بنیں
            </p>
          </div>
          <div className="path-steps">
            {learningPath.map((step, index) => (
              <div key={step.step} className="path-step">
                <div 
                  className="step-number"
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>
                <div className="step-content">
                  <h3 className="step-title" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="step-desc">{step.desc}</p>
                  <div className="step-chapters">
                    {index === 0 && 'چیپٹر 1-15'}
                    {index === 1 && 'چیپٹر 16-25'}
                    {index === 2 && 'چیپٹر 26-35'}
                    {index === 3 && 'چیپٹر 36-39'}
                  </div>
                </div>
                {index < learningPath.length - 1 && (
                  <div className="step-connector">
                    <div className="connector-line"></div>
                    <div className="connector-arrow">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Course */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🎯</span>
              کیوں یہ کورس؟
            </h2>
            <p className="section-subtitle">
              دوسرے کورسز سے مختلف کیوں؟
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🗣️</div>
              <h3 className="benefit-title">مکمل اردو میں</h3>
              <p className="benefit-desc">
                ہر چیز سادہ اردو میں وضاحت کے ساتھ۔ انگریزی کی ضرورت نہیں۔
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💻</div>
              <h3 className="benefit-title">عملی پروجیکٹس</h3>
              <p className="benefit-desc">
                18+ حقیقی پروجیکٹس جو آپ کو انڈسٹری کے لیے تیار کریں گے۔
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3 className="benefit-title">مفت اور ہمیشہ کے لیے</h3>
              <p className="benefit-desc">
                مکمل طور پر مفت، کوئی چھپے ہوئے اخراجات نہیں۔
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3 className="benefit-title">ہمیشہ اپ ڈیٹ</h3>
              <p className="benefit-desc">
                نئے React features اور best practices کے ساتھ اپ ڈیٹ رہتا ہے۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">🚀 ابھی سیکھنا شروع کریں!</h2>
            <p className="cta-desc">
              40 مکمل چیپٹرز، 650+ کوڈ مثالوں، اور 18+ پروجیکٹس کے ساتھ 
              ری ایکٹ میں مکمل مہارت حاصل کریں۔
            </p>
            <div className="cta-buttons">
              <Link to="/chapter/0" className="btn-primary btn-large">
                <span className="btn-icon">📚</span>
                مکمل کورس دیکھیں
              </Link>
              <Link to="/chapter/1" className="btn-secondary btn-large">
                <span className="btn-icon">▶️</span>
                پہلا چیپٹر شروع کریں
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
