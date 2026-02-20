import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Quick links to important chapters
  const quickLinks = [
    { id: 0, title: 'فہرست مضامین', path: '/chapter/0' },
    { id: 5, title: 'Props Drilling', path: '/chapter/5' },
    { id: 11, title: 'کلر پکر', path: '/chapter/11' },
    { id: 24, title: 'لاگ آؤٹ سسٹم', path: '/chapter/24' },
    { id: 31, title: 'Redux کارٹ', path: '/chapter/31' },
    { id: 35, title: 'ڈیٹابیس', path: '/chapter/35' },
    { id: 36, title: 'آخری پروجیکٹ', path: '/chapter/36' },
  ];

  // Contact information
  const contactInfo = {
    email: 'support@reacturdu.com',
    website: 'www.reacturdu.com',
    location: 'پاکستان',
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <footer className="main-footer">
        <div className="footer-container">
          
          {/* Top Section - Quick Links */}
          <div className="footer-top">
            <div className="footer-section">
              <h3 className="footer-heading">📚 فوری لنکس</h3>
              <ul className="footer-links">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <Link to={link.path} className="footer-link">
                      {link.id === 0 ? '📖 ' : '🚀 '}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">🎯 اہم چیپٹرز</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/chapter/1" className="footer-link">
                    🚀 ری ایکٹ انسٹالیشن
                  </Link>
                </li>
                <li>
                  <Link to="/chapter/16" className="footer-link">
                    ⚡ Context API
                  </Link>
                </li>
                <li>
                  <Link to="/chapter/28" className="footer-link">
                    🎨 shadcn/ui
                  </Link>
                </li>
                <li>
                  <Link to="/chapter/29" className="footer-link">
                    📝 Zod فارمز
                  </Link>
                </li>
                <li>
                  <Link to="/chapter/33" className="footer-link">
                    ⚡ پرفارمنس
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">📞 رابطہ کریں</h3>
              <ul className="footer-contact">
                <li className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>{contactInfo.email}</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <span>{contactInfo.website}</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>{contactInfo.location}</span>
                </li>
              </ul>
              
              <div className="footer-social">
                <h4 className="social-heading">ہمیں فالو کریں</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="GitHub">
                    <span>🐙</span>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <span>📺</span>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <span>🐦</span>
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <span>👥</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Website Info */}
          <div className="footer-middle">
            <div className="website-info">
              <div className="logo-section">
                <div className="footer-logo">
                  <span className="logo-text">ری ایکٹ</span>
                  <span className="logo-urdu">اردو</span>
                </div>
                <p className="website-description">
                  ری ایکٹ جے ایس کا مکمل اردو ٹیوٹوریل - 36+ چیپٹرز میں صفر سے ایکسپرٹ لیول تک
                </p>
              </div>
              
              <div className="stats-section">
                <div className="stat-item">
                  <span className="stat-number">36+</span>
                  <span className="stat-label">چیپٹرز</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">کوڈ مثالوں</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">پروجیکٹس</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1205+</span>
                  <span className="stat-label">منٹ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="footer-bottom">
            <div className="copyright-section">
              <p className="copyright-text">
                © {new Date().getFullYear()} ری ایکٹ اردو ٹیوٹوریل۔ تمام حقوق محفوظ ہیں۔
              </p>
              <div className="footer-links-bottom">
                <Link to="/privacy" className="footer-link-bottom">
                  رازداری کی پالیسی
                </Link>
                <span className="separator">|</span>
                <Link to="/terms" className="footer-link-bottom">
                  شرائط و ضوابط
                </Link>
                <span className="separator">|</span>
                <Link to="/about" className="footer-link-bottom">
                  ہمارے بارے میں
                </Link>
              </div>
            </div>
            
            <div className="made-with-love">
              <p>
                Made with ❤️ in Pakistan for Urdu-speaking developers
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;