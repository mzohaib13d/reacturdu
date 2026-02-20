import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Chapter38() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // تمام کوڈز
  const installCode = `npm install @studio-freight/react-lenis lenis`;

  const yarnInstallCode = `yarn add @studio-freight/react-lenis lenis`;

  const cssCode = `html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}`;

  const appBasicCode = `// App.js
import { ReactLenis } from '@studio-freight/react-lenis';
import HomePage from './HomePage';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <HomePage />
    </ReactLenis>
  );
}

export default App;`;

  const gsapInstallCode = `npm install gsap`;

  const gsapYarnCode = `yarn add gsap`;

  const gsapLenisHomeCode = `// HomePage.jsx
import { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger رجسٹر کریں
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  
  // Lenis instance حاصل کریں
  const lenis = useLenis((instance) => {
    // ہر اسکرول پر یہ فنکشن چلے گا
  });

  useEffect(() => {
    // Lenis کو GSAP کے ساتھ sync کریں
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true, // اسکرول کے ساتھ sync
          scroller: lenis, // Lenis کو scroller کے طور پر استعمال کریں
        }
      }).to(boxRef.current, {
        x: 500,
        rotation: 360,
        duration: 2
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [lenis]);

  return (
    <div>
      <section style={{ height: "100vh", background: "#eee" }}>
        <h1>نیچے اسکرول کریں</h1>
      </section>

      <section ref={sectionRef} style={{ height: "100vh", background: "#ccc" }}>
        <div 
          ref={boxRef}
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "10px"
          }}
        >
          <h3>Box</h3>
        </div>
      </section>

      <section style={{ height: "100vh", background: "#aaa" }}>
        <h1>تیسرا سیکشن</h1>
      </section>
    </div>
  );
}

export default HomePage;`;

  const horizontalAppCode = `// App.js - Horizontal Mode کے ساتھ
import { ReactLenis } from '@studio-freight/react-lenis';
import HorizontalGallery from './HorizontalGallery';

function App() {
  return (
    <ReactLenis
      root
      options={{
        orientation: "horizontal", // افقی اسکرول
        gestureOrientation: "both", // ماؤس وہیل اور ٹچ دونوں
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 0.8, // وہیل کی رفتار کو کم کریں
      }}
    >
      <HorizontalGallery />
    </ReactLenis>
  );
}

export default App;`;

  const horizontalGalleryCode = `// HorizontalGallery.jsx
import { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HorizontalGallery() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const textRef = useRef(null);
  
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || !sectionRef.current) return;

    // Lenis کو GSAP کے ساتھ sync کریں
    lenis.on('scroll', ScrollTrigger.update);

    // Horizontal ScrollTrigger بنائیں
    const horizontalScroll = gsap.to(containerRef.current, {
      x: () => {
        // کل اسکرول کی مقدار calculate کریں
        const totalWidth = containerRef.current.scrollWidth - window.innerWidth;
        return -totalWidth; // منفی میں کیونکہ بائیں طرف جاتے ہیں
      },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => \`+=\${containerRef.current.scrollWidth - window.innerWidth}\`,
        pin: true, // سیکشن کو pin کریں
        scrub: 1,
        scroller: lenis,
        invalidateOnRefresh: true, // resize پر دوبارہ calculate کریں
        anticipatePin: 1,
      }
    });

    // Individual cards animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      // ہر کارڈ کے لیے انفرادی animation
      gsap.fromTo(card,
        {
          opacity: 0,
          scale: 0.5,
          rotation: 45,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalScroll, // horizontal scroll کے ساتھ sync
            start: "left center",
            end: "right center",
            scrub: 1,
            scroller: lenis,
          }
        }
      );

      // Hover effect for cards
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.1,
          y: -20,
          rotate: 5,
          boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotate: 0,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        });
      });
    });

    // Text animation
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          containerAnimation: horizontalScroll,
          start: "left center",
          end: "right center",
          scrub: 1,
          scroller: lenis,
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [lenis]);

  // Cards data
  const cards = [
    { id: 1, color: "#ff6b6b", title: "کارڈ 1", text: "افقی اسکرول" },
    { id: 2, color: "#4ecdc4", title: "کارڈ 2", text: "ہموار حرکت" },
    { id: 3, color: "#ffe66d", title: "کارڈ 3", text: "GSAP animations" },
    { id: 4, color: "#a78bfa", title: "کارڈ 4", text: "Lenis smooth" },
    { id: 5, color: "#f472b6", title: "کارڈ 5", text: "Horizontal scroll" },
    { id: 6, color: "#6ee7b7", title: "کارڈ 6", text: "بہترین تجربہ" },
    { id: 7, color: "#fca5a5", title: "کارڈ 7", text: "اردو میں ٹیوٹوریل" },
    { id: 8, color: "#c4b5fd", title: "کارڈ 8", text: "مکمل گائیڈ" },
  ];

  return (
    <div>
      {/* Introductory Section */}
      <section style={{ height: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>Horizontal Scrolling</h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>Lenis + GSAP کے ساتھ افقی اسکرول اور animations</p>
        <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>نیچے اسکرول کریں (یا دائیں بائیں) 👇</p>
      </section>

      {/* Horizontal Gallery Section */}
      <section ref={sectionRef} style={{ height: "100vh", overflow: "hidden", background: "#f0f0f0" }}>
        <div ref={containerRef} style={{ display: "flex", height: "100%", padding: "2rem", gap: "2rem" }}>
          {/* Heading Card */}
          <div style={{ 
            minWidth: "400px", 
            height: "80%", 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Horizontal Gallery</h2>
            <p style={{ fontSize: "1.2rem", textAlign: "center" }}>بائیں دائیں اسکرول کریں اور کارڈز کو حرکت میں دیکھیں</p>
          </div>

          {/* Dynamic Cards */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              style={{
                minWidth: "300px",
                height: "80%",
                background: card.color,
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: index < 2 ? "white" : "black",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease"
              }}
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{card.title}</h2>
              <p style={{ fontSize: "1.2rem", textAlign: "center" }}>{card.text}</p>
              <div style={{ 
                width: "100px", 
                height: "100px", 
                background: "rgba(255,255,255,0.3)", 
                borderRadius: "50%",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem"
              }}>
                {index + 1}
              </div>
            </div>
          ))}

          {/* End Card */}
          <div style={{ 
            minWidth: "400px", 
            height: "80%", 
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}>
            <h2 ref={textRef} style={{ fontSize: "2rem", textAlign: "center" }}>ختم شد! 🎉<br />واپس بائیں طرف اسکرول کریں</h2>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section style={{ height: "100vh", background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Horizontal Animation Example</h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>Lenis اور GSAP کے ساتھ Horizontal Scrolling اور Cards Animation</p>
      </section>
    </div>
  );
}

export default HorizontalGallery;`;

  const advancedHorizontalCode = `// AdvancedHorizontal.jsx - مزید جدید مثالیں
function AdvancedHorizontal() {
  // Parallax Horizontal Effect
  const parallaxRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    if (!lenis) return;

    layersRef.current.forEach((layer, index) => {
      const speed = 0.5 + (index * 0.2); // مختلف speeds
    
      gsap.to(layer, {
        x: () => -(layer.offsetWidth * speed),
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          scroller: lenis,
          horizontal: true, // horizontal scroll
        }
      });
    });
  }, [lenis]);

  return (
    <div ref={parallaxRef} style={{ height: "100vh", display: "flex", overflow: "hidden" }}>
      <div ref={el => layersRef.current[0] = el} style={{ minWidth: "100vw", background: "url('layer1.jpg')" }}>
        {/* Background layer */}
      </div>
      <div ref={el => layersRef.current[1] = el} style={{ minWidth: "100vw", background: "url('layer2.png')" }}>
        {/* Mid layer */}
      </div>
      <div ref={el => layersRef.current[2] = el} style={{ minWidth: "100vw", background: "url('layer3.png')" }}>
        {/* Foreground layer */}
      </div>
    </div>
  );
}`;

  const advancedPageCode = `// AdvancedPage.jsx
import { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AdvancedPage() {
  const sectionRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const textRef = useRef(null);
  
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      
      // Timeline بنائیں
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // 1 = سست sync
          scroller: lenis,
          pin: true, // سیکشن کو pin کریں
          anticipatePin: 1,
        }
      });

      // Timeline میں animations شامل کریں
      tl.fromTo(box1Ref.current, 
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      .fromTo(box2Ref.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5" // پچھلی animation سے 0.5 سیکنڈ پہلے start
      )
      .fromTo(box3Ref.current,
        { scale: 0, rotation: 0 },
        { scale: 1, rotation: 360, duration: 1.5 },
        "-=0.5"
      )
      .fromTo(textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(function(st) {
        st.kill();
      });
    };
  }, [lenis]);

  return (
    <div>
      <section style={{ height: "100vh", background: "#eee" }}>
        <h1>GSAP Timeline Example</h1>
      </section>

      <section ref={sectionRef} style={{ height: "100vh", background: "#1a1a1a", color: "white" }}>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <div ref={box1Ref} style={{ width: "100px", height: "100px", background: "#ff6b6b" }}>Box 1</div>
          <div ref={box2Ref} style={{ width: "100px", height: "100px", background: "#4ecdc4" }}>Box 2</div>
          <div ref={box3Ref} style={{ width: "100px", height: "100px", background: "#ffe66d" }}>Box 3</div>
        </div>
        <h2 ref={textRef} style={{ textAlign: "center", marginTop: "50px" }}>یہ متن آہستہ آہستہ ظاہر ہوگا</h2>
      </section>

      <section style={{ height: "100vh", background: "#ccc" }}>
        <h1>ختم شد</h1>
      </section>
    </div>
  );
}

export default AdvancedPage;`;

  const homePageCode = `// HomePage.jsx
import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

function HomePage() {
  const [progress, setProgress] = useState(0);

  const lenis = useLenis((instance) => {
    setProgress(instance.progress);
  });

  const scrollTop = () => {
    lenis.scrollTo(0);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          width: \`\${progress * 100}%\`,
          background: "blue",
          zIndex: 1000
        }}
      />

      <button onClick={scrollTop}>اوپر جائیں</button>

      <section style={{ height: "100vh", background: "#eee" }}>
        <h1>Scroll کریں</h1>
      </section>

      <section style={{ height: "100vh", background: "#ccc" }}>
        <h1>دوسرا سیکشن</h1>
      </section>
    </div>
  );
}

export default HomePage;`;

  const horizontalBasicCode = `// HorizontalBasic.jsx
function HorizontalBasic() {
  return (
    <div style={{ display: "flex", overflowX: "hidden" }}>
      <section style={{ minWidth: "100vw", height: "100vh", background: "#ff9999", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>سلائیڈ 1</h1>
      </section>

      <section style={{ minWidth: "100vw", height: "100vh", background: "#99ccff", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>سلائیڈ 2</h1>
      </section>

      <section style={{ minWidth: "100vw", height: "100vh", background: "#99ff99", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>سلائیڈ 3</h1>
      </section>

      <section style={{ minWidth: "100vw", height: "100vh", background: "#ffcc99", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>سلائیڈ 4</h1>
      </section>
    </div>
  );
}`;

  const responsiveAppCode = `// App.js
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import HorizontalGallery from './HorizontalGallery';

function App() {
  const [orientation, setOrientation] = useState("vertical");

  useEffect(() => {
    // چیک کریں کہ screen کتنی بڑی ہے
    const checkScreen = () => {
      if (window.innerWidth > 768) {
        setOrientation("horizontal");
      } else {
        setOrientation("vertical");
      }
    };

    checkScreen(); // پہلی بار چیک کریں
    window.addEventListener('resize', checkScreen); // screen resize پر چیک کریں

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        orientation: orientation,
        gestureOrientation: "both",
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {orientation === "horizontal" ? (
        <HorizontalGallery />
      ) : (
        <div>
          <section style={{ height: "100vh", background: "#eee" }}>
            <h1>موبائل پر Vertical Scroll</h1>
            <p>اپنے فون کو گھمائیں (landscape mode) Horizontal دیکھنے کے لیے</p>
          </section>
          <section style={{ height: "100vh", background: "#ccc" }}>
            <h1>دوسرا سیکشن</h1>
          </section>
        </div>
      )}
    </ReactLenis>
  );
}`;

  const navigationCode = `// Navigation with Lenis
function Navigation() {
  const lenis = useLenis();

  const scrollToSection = (sectionId) => {
    // sectionId جیسے "#contact", "#about"
    lenis.scrollTo(sectionId, {
      offset: 0, // آفسیٹ (اگر چاہیں تو)
      duration: 2, // کتنی دیر میں scroll کرنا ہے
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // custom easing
    });
  };

  return (
    <nav style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
      <button onClick={() => scrollToSection('#home')} style={{ margin: "0 5px", padding: "10px" }}>ہوم</button>
      <button onClick={() => scrollToSection('#about')} style={{ margin: "0 5px", padding: "10px" }}>تعارف</button>
      <button onClick={() => scrollToSection('#gallery')} style={{ margin: "0 5px", padding: "10px" }}>گیلری</button>
      <button onClick={() => scrollToSection('#contact')} style={{ margin: "0 5px", padding: "10px" }}>رابطہ</button>
    </nav>
  );
}`;

  const nestedScrollCode = `<div data-lenis-prevent>
  یہ box normal scroll کرے گا
</div>`;

  return (
    <div className="chapter-container">
      <motion.header
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <motion.h1
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em",
              wordSpacing: "0.3rem",
              lineHeight: "1.4",
              padding: "0 15px",
              direction: "ltr", // URL انگریزی زبان کے لیے بائیں سمت
            }}
          >
            🚀 Chapter 38 — Lenis مکمل چیپٹر (Beginner سے Advanced تک — React کے ساتھ)
          </motion.h1>
          <motion.p
            className="chapter-subtitle2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(0.95rem, 3vw, 1.4rem)",
              lineHeight: "1.8",
              opacity: 0.95,
              maxWidth: "800px",
              margin: "0 auto",
              letterSpacing: "0.005em",
              wordSpacing: "0.4rem",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              fontWeight: "400",
              padding: "0 15px",
              direction: "ltr", // URL انگریزی زبان کے لیے بائیں سمت
            }}
          >
            Lenis ایک جدید اور ہلکا پھلکا JavaScript لائبریری ہے جو ویب سائٹ پر اسکرولنگ کو ہموار (Smooth) اور خوبصورت بناتی ہے۔
          </motion.p>
        </div>
      </motion.header>

      <div className="card section-card">
        <h3 className="section-title">1. Lenis لائبریری کا تعارف (Introduction)</h3>
        <p className="section-text urdu-text">
          <strong>Lenis</strong> ایک طاقتور JavaScript لائبریری ہے جسے <code>@darkroom.engineering</code> نے تیار کیا ہے۔ اس کا مقصد ویب پیجز پر اسکرولنگ کے تجربے (User Experience) کو بہتر بنانا ہے۔ یہ ڈیفالٹ اسکرول کو ختم کرکے اس کی جگہ ایک <strong>ہموار (Smooth)</strong>، <strong>Inertia-based</strong> اسکرول فراہم کرتا ہے جس میں رفتار اور رکاؤ (Easing) کو کنٹرول کیا جا سکتا ہے۔
        </p>

        <h4 className="chapter-subtitle">Lenis کیوں استعمال کریں؟</h4>
        <ul className="section-text urdu-text">
          <li><strong>ہمواری (Smoothness):</strong> یہ براؤزر کے ڈیفالٹ اسکرول کو ایک خوبصورت اینی میشن میں بدل دیتا ہے۔</li>
          <li><strong>کارکردگی (Performance):</strong> یہ GPU-Accelerated ہے اور جدید براؤزرز کے لیے بہتر بنایا گیا ہے، اس لیے یہ 60fps پر کام کرتا ہے۔</li>
          <li><strong>کنٹرول:</strong> آپ اسکرول کی رفتار (Lerp/Duration)، اس کی سمت (Orientation) اور اس کے رویے کو مکمل طور پر کنٹرول کر سکتے ہیں۔</li>
          <li><strong>مطابقت (Compatibility):</strong> یہ GSAP، React، اور دوسری اینی میشن لائبریریوں کے ساتھ بہت اچھی طرح کام کرتا ہے۔</li>
        </ul>

        <hr className="styled-hr" />

        <h3 className="section-title">2. انسٹالیشن اور دستاویزات (Installation & Docs)</h3>
        <p className="section-text urdu-text">Lenis کو اپنے React پروجیکٹ میں شامل کرنے کے دو اہم طریقے ہیں۔</p>

        <h4 className="chapter-subtitle">سرکاری دستاویزات (Official Documentation)</h4>
        <p className="section-text urdu-text">سب سے پہلے، Lenis کی سرکاری GitHub ریپوزٹری اور React پیکیج کا لنک پیش ہے۔ یہ آپ کے لیے حوالہ (Reference) کا کام دے گا۔</p>
        <ul className="section-text urdu-text" style={{ direction: "ltr", textAlign: "left" }}>
          <li><strong style={{ color: "#ff0000", fontWeight: "bold", fontFamily: "Verdana" }}>Lenis React Documentation:</strong> <a href="https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md" target="_blank" rel="noopener noreferrer" style={{ direction: "ltr", unicodeBidi: "embed", fontFamily: "monospace" }}>https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md</a></li>
          <li><strong style={{ color: "#ff0000", fontWeight: "bold", fontFamily: "Verdana" }}>Main Lenis GitHub:</strong> <br /><a href="https://github.com/darkroomengineering/lenis" target="_blank" rel="noopener noreferrer" style={{ direction: "ltr", unicodeBidi: "embed", fontFamily: "monospace" }}>https://github.com/darkroomengineering/lenis</a></li>
        </ul>

        <h4 className="chapter-subtitle">انسٹالیشن (Installation)</h4>
        <p className="section-text urdu-text">React پروجیکٹ میں Lenis استعمال کرنے کے لیے، آپ کو بنیادی لائبریری کے ساتھ ساتھ React کے لیے بنایا گیا مخصوص پیکیج <br /><code dir="ltr" style={{ direction: "ltr", unicodeBidi: "embed", fontFamily: "monospace" }}>@studio-freight/react-lenis</code> انسٹال کرنا ہوگا۔</p>
        <p className="section-text urdu-text"><strong>نوٹ:</strong> کچھ عرصہ پہلے Lenis نے اپنا React پیکیج تبدیل کیا ہے، لیکن <code dir="ltr" style={{ direction: "ltr", unicodeBidi: "embed", fontFamily: "monospace" }}>@studio-freight/react-lenis</code> اب بھی کمیونٹی میں وسیع پیمانے پر استعمال ہوتا ہے اور مستحکم ہے۔</p>
        <p className="section-text urdu-text"><strong>ٹرمینل میں یہ کمانڈ چلائیں:</strong></p>

        <div className="code-section">
          <div className="code-header">
            <span>npm install</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(installCode, "npm install command")}
            >
              {copiedCode === "npm install command" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{installCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> یہ کمانڈ Lenis اور React Lenis پیکیج کو انسٹال کرتی ہے۔
          <br />
          <strong>نتیجہ:</strong> project میں lenis اور @studio-freight/react-lenis شامل ہو جائیں گے۔
        </p>

        <p className="section-text urdu-text">یا اگر <code>yarn</code> استعمال کرتے ہیں تو:</p>

        <div className="code-section">
          <div className="code-header">
            <span>yarn add</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(yarnInstallCode, "yarn add command")}
            >
              {copiedCode === "yarn add command" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{yarnInstallCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Yarn پیکیج منیجر کے ساتھ Lenis انسٹال کرنے کا طریقہ۔
          <br />
          <strong>نتیجہ:</strong> Yarn project میں Lenis شامل ہو جائے گا۔
        </p>

        <hr className="styled-hr" />

        <h3 className="section-title">3. CSS اسٹائل (ضروری)</h3>
        <p className="section-text urdu-text">Lenis کو صحیح طریقے سے کام کرنے کے لیے کچھ CSS اسٹائلز کی ضرورت ہوتی ہے۔ انہیں اپنی مین CSS فائل (مثلاً <code>App.css</code> یا <code>index.css</code>) میں شامل کریں:</p>

        <div className="code-section">
          <div className="code-header">
            <span>CSS Styles</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(cssCode, "CSS styles")}
            >
              {copiedCode === "CSS styles" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{cssCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Lenis کے صحیح کام کرنے کے لیے ضروری CSS اسٹائلز۔
          <br />
          <strong>نتیجہ:</strong> Lenis smooth scroll بغیر کسی مسئلے کے کام کرے گا۔
        </p>

        <hr className="styled-hr" />

        <h3 className="section-title">⚛ 4. سب سے پہلے مسئلہ سمجھیں</h3>
        <h4 className="chapter-subtitle">❓ Default Scroll میں مسئلہ کیا ہے؟</h4>
        <p className="section-text urdu-text">جب ہم عام ویب سائٹ پر اسکرول کرتے ہیں:</p>
        <ul className="section-text urdu-text">
          <li>اسکرول اچانک jump کرتا ہے</li>
          <li>wheel گھمانے پر movement rough لگتا ہے</li>
          <li>animations کے ساتھ sync کرنا مشکل ہوتا ہے</li>
          <li>ویب سائٹ سستی یا عام سی محسوس ہوتی ہے</li>
        </ul>
        <p className="section-text urdu-text">مثال کے طور پر: Wheel گھمایا → صفحہ فوراً jump۔ یہ حرکت قدرتی نہیں لگتی۔</p>

        <hr className="styled-hr" />

        <h3 className="section-title">🎯 5. Lenis کیا حل دیتی ہے؟</h3>
        <p className="section-text urdu-text">Lenis یہ کام کرتی ہے:</p>
        <ul className="section-text urdu-text">
          <li>Default scroll کو control کرتی ہے</li>
          <li>اسکرول کو animation کی طرح treat کرتی ہے</li>
          <li>velocity (رفتار) calculate کرتی ہے</li>
          <li>easing apply کرتی ہے</li>
          <li>نتیجہ: نرم اور قدرتی حرکت</li>
        </ul>
        <p className="section-text urdu-text">یعنی: Wheel → رفتار calculate → easing → smooth movement</p>

        <hr className="styled-hr" />

        <h3 className="section-title">📦 6. Smooth Scroll اصل میں ہوتا کیا ہے؟</h3>
        <p className="section-text urdu-text">Smooth scroll دراصل animation ہے۔ Lenis کیا کرتی ہے؟</p>
        <ol className="section-text urdu-text">
          <li>آپ wheel گھماتے ہیں</li>
          <li>Lenis فوراً صفحہ نہیں ہلاتی</li>
          <li>وہ پہلے distance calculate کرتی ہے</li>
          <li>پھر تھوڑا تھوڑا move کرتی ہے</li>
          <li>جب تک target تک نہ پہنچ جائے</li>
        </ol>
        <p className="section-text urdu-text">اسی وجہ سے اسکرول نرم اور premium لگتا ہے۔</p>

        <hr className="styled-hr" />

        <h3 className="section-title">7. Lenis اندر سے کیسے کام کرتی ہے؟</h3>
        <p className="section-text urdu-text">یہ حصہ concept clear کرے گا 👇</p>
        <p className="section-text urdu-text">Lenis:</p>
        <ol className="section-text urdu-text">
          <li>scroll-behavior کو override کرتی ہے</li>
          <li>requestAnimationFrame() loop چلاتی ہے</li>
          <li>ہر frame پر position update کرتی ہے</li>
          <li>easing formula apply کرتی ہے</li>
          <li>CSS transform کے ذریعے movement دیتی ہے</li>
        </ol>
        <p className="section-text urdu-text">اس لیے یہ 60fps پر smooth چلتی ہے۔</p>

        <hr className="styled-hr" />

        <h3 className="section-title">8. GSAP (GreenSock Animation Platform) کا تعارف</h3>
        <p className="section-text urdu-text">اب بات کرتے ہیں <strong>GSAP</strong> کی - جو دنیا کی سب سے طاقتور JavaScript animation لائبریری ہے۔</p>

        <h4 className="chapter-subtitle">GSAP کیا ہے؟</h4>
        <p className="section-text urdu-text">GSAP ایک JavaScript لائبریری ہے جو اعلیٰ معیار کی animations بنانے میں مدد دیتی ہے۔ یہ CSS animations اور jQuery سے کہیں زیادہ طاقتور اور کنٹرول ایبل ہے۔</p>

        <h4 className="chapter-subtitle">GSAP کیوں استعمال کریں؟</h4>
        <ul className="section-text urdu-text">
          <li><strong>پرفارمنس:</strong> یہ 60fps پر animations چلاتا ہے</li>
          <li><strong>کنٹرول:</strong> play, pause, reverse, restart جیسے مکمل کنٹرول</li>
          <li><strong>براؤزر سپورٹ:</strong> تمام جدید براؤزرز پر کام کرتا ہے</li>
          <li><strong>ScrollTrigger:</strong> اسکرول کے ساتھ animations کو sync کرنا</li>
        </ul>

        <h4 className="chapter-subtitle">GSAP کی انسٹالیشن</h4>
        <p className="section-text urdu-text"><strong>سرکاری دستاویزات:</strong></p>
        <ul className="section-text urdu-text" style={{ direction: "ltr", textAlign: "left" }}>
          <li><strong style={{ color: "#fb2a00", unicodeBidi: "embed", fontWeight: "bold", fontFamily: "Verdana, sans-serif" }}>GSAP Documentation:</strong> <br /> <a href="https://greensock.com/docs/" target="_blank" rel="noopener noreferrer" style={{ direction: "ltr", unicodeBidi: "embed" }}>https://greensock.com/docs/</a></li>
          <li><strong style={{ color: "#fb2a00", unicodeBidi: "embed", fontWeight: "bold", fontFamily: "Verdana, sans-serif" }}>ScrollTrigger Documentation:</strong> <br /><a href="https://greensock.com/scrolltrigger/" target="_blank" rel="noopener noreferrer" style={{ direction: "ltr", unicodeBidi: "embed" }}>https://greensock.com/scrolltrigger/</a></li>
        </ul>

        <p className="section-text urdu-text"><strong>انسٹالیشن کمانڈ:</strong></p>

        <div className="code-section">
          <div className="code-header">
            <span>npm install gsap</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(gsapInstallCode, "GSAP npm install")}
            >
              {copiedCode === "GSAP npm install" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{gsapInstallCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> GSAP animation library کو انسٹال کرنے کا طریقہ۔
          <br />
          <strong>نتیجہ:</strong> آپ کے پروجیکٹ میں GSAP شامل ہو جائے گا۔
        </p>

        <p className="section-text urdu-text">یا</p>

        <div className="code-section">
          <div className="code-header">
            <span>yarn add gsap</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(gsapYarnCode, "GSAP yarn add")}
            >
              {copiedCode === "GSAP yarn add" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{gsapYarnCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Yarn کے ساتھ GSAP انسٹال کرنے کا طریقہ۔
          <br />
          <strong>نتیجہ:</strong> Yarn project میں GSAP شامل ہو جائے گا۔
        </p>

        <h4 className="chapter-subtitle">GSAP کے اہم حصے:</h4>
        <ol className="section-text urdu-text">
          <li><strong>Tween:</strong> ایک اینی میشن (ایک پراپرٹی کو ایک ویلیو سے دوسری ویلیو تک لے جانا)</li>
          <li><strong>Timeline:</strong> متعدد animations کو ترتیب دینا</li>
          <li><strong>ScrollTrigger:</strong> اسکرول کے ساتھ animations کو کنٹرول کرنا</li>
        </ol>

        <hr className="styled-hr" />

        <h3 className="section-title">9. Lenis + GSAP: طاقتور Combination</h3>
        <p className="section-text urdu-text">جب Lenis اور GSAP اکٹھے ہوں، تو آپ شاندار اسکرول-based animations بنا سکتے ہیں۔ Lenis smooth scroll دیتی ہے، GSAP animations دیتا ہے۔</p>

        <h4 className="chapter-subtitle">Step 1: دونوں انسٹال کریں</h4>

        <div className="code-section">
          <div className="code-header">
            <span>npm install both</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard("npm install @studio-freight/react-lenis lenis gsap", "install both")}
            >
              {copiedCode === "install both" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>npm install @studio-freight/react-lenis lenis gsap</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Lenis اور GSAP دونوں کو ایک ساتھ انسٹال کرنے کا طریقہ۔
          <br />
          <strong>نتیجہ:</strong> دونوں لائبریریاں آپ کے پروجیکٹ میں شامل ہو جائیں گی۔
        </p>

        <h4 className="chapter-subtitle">Step 2: App.js میں دونوں کو سیٹ اپ کریں</h4>

        <div className="code-section">
          <div className="code-header">
            <span>App.js</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(appBasicCode, "App.js basic")}
            >
              {copiedCode === "App.js basic" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{appBasicCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Lenis کو اپنی پوری App میں شامل کرنے کا طریقہ۔ ReactLenis component پوری App کو wrap کرتا ہے۔
          <br />
          <strong>نتیجہ:</strong> آپ کی پوری ویب سائٹ پر smooth scroll فعال ہو جائے گا۔ lerp=0.1 کا مطلب ہے ہموار اسکرول۔
        </p>

        <h4 className="chapter-subtitle">Step 3: GSAP کے ساتھ Lenis استعمال کریں</h4>

        <div className="code-section">
          <div className="code-header">
            <span>HomePage.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(gsapLenisHomeCode, "HomePage.jsx with GSAP")}
            >
              {copiedCode === "HomePage.jsx with GSAP" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{gsapLenisHomeCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 HomePage.jsx (GSAP + Lenis) - مکمل اردو وضاحت اور نتیجہ */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #ff6b6b" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#ff6b6b", fontWeight: "bold" }}>📝 اردو وضاحت (HomePage.jsx - GSAP + Lenis)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ HomePage.jsx ایک بنیادی React کمپوننٹ ہے جو Lenis اور GSAP کے امتزاج سے اسکرول-based animation بناتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>لائبریریز اور پلگ انز:</strong> useLenis (Lenis hook)، gsap (animation library)، ScrollTrigger (GSAP پلگ ان)</li>
            <li><strong>Refs:</strong> sectionRef (animation سیکشن کے لیے)، boxRef (moving box کے لیے)</li>
            <li><strong>Lenis Instance:</strong> useLenis() hook کے ذریعے Lenis instance حاصل کیا گیا ہے</li>
            <li><strong>ScrollTrigger Configuration:</strong> trigger: sectionRef.current، start: &quot;top center&quot;، end: &quot;bottom center&quot;، scrub: true، scroller: lenis</li>
            <li><strong>Animation:</strong> box 500px دائیں جاتا ہے اور 360° گھومتا ہے (duration: 2 سیکنڈ)</li>
            <li><strong>Cleanup:</strong> ScrollTrigger.getAll().forEach(st =&gt; st.kill()) - memory leaks سے بچاتا ہے</li>
          </ul>
        </div>

        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (HomePage.jsx - GSAP + Lenis)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>صفحہ کی ساخت:</strong> تین سیکشنز: پہلا (Intro)، دوسرا (Animation Area)، تیسرا (Outro)</li>
            <li><strong>اسکرول کا عمل:</strong> جب دوسرے سیکشن کی top viewport کی center پر آتی ہے، animation شروع ہوتی ہے</li>
            <li><strong>Box 1 Animation:</strong> شروع میں: باکس 1 نظر آتا ہے (opacity 1) اور بائیں طرف 0px پر | اسکرول کرتے ہوئے: آہستہ آہستہ دائیں طرف جاتا ہے اور گھومتا ہے | آخر میں: x: 500px، rotation: 360°</li>
            <li><strong>Scrub Effect:</strong> scrub: true کی وجہ سے animation بالکل اسکرول کے ساتھ sync ہے - اگر اوپر اسکرول کریں، باکس واپس آئے گا</li>
            <li><strong>Smooth Scroll:</strong> Lenis کی وجہ سے اسکرول بہت ہموار ہے، کوئی جھٹکا نہیں</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ کوڈ Lenis + GSAP integration کی کلاسک مثال ہے جو سکھاتی ہے کہ کس طرح smooth scroll اور animations کو ایک ساتھ استعمال کرنا ہے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">10. Horizontal Scrolling اور Horizontal Animation (مکمل مثال)</h3>
        <h4 className="chapter-subtitle">افقی اسکرول کیا ہے؟ (Horizontal scrolling)</h4>
        <p className="section-text urdu-text">عام طور پر ویب سائٹ اوپر نیچے (vertical) اسکرول ہوتی ہے۔ Horizontal scrolling میں صفحہ بائیں دائیں حرکت کرتا ہے۔</p>

        <h4 className="chapter-subtitle">Horizontal Scrolling کے لیے سیٹ اپ</h4>

        <div className="code-section">
          <div className="code-header">
            <span>App.js - Horizontal Mode</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(horizontalAppCode, "App.js Horizontal")}
            >
              {copiedCode === "App.js Horizontal" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{horizontalAppCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> Lenis کو horizontal mode میں سیٹ اپ کرنے کا طریقہ۔ orientation: "horizontal" افقی اسکرول کو فعال کرتا ہے۔
          <br />
          <strong>نتیجہ:</strong> اب آپ ماؤس وہیل یا ٹچ سے بائیں دائیں اسکرول کر سکیں گے۔
        </p>

        <h4 className="chapter-subtitle">Horizontal Gallery with GSAP Animations</h4>

        <div className="code-section">
          <div className="code-header">
            <span>HorizontalGallery.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(horizontalGalleryCode, "HorizontalGallery.jsx")}
            >
              {copiedCode === "HorizontalGallery.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{horizontalGalleryCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 اردو وضاحت (Urdu Description) - HorizontalGallery.jsx */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #667eea" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#667eea", fontWeight: "bold" }}>📝 اردو وضاحت (HorizontalGallery.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ HorizontalGallery.jsx ایک جدید React کمپوننٹ ہے جو Lenis اور GSAP کا استعمال کرتے ہوئے افقی اسکرولنگ (Horizontal Scrolling) اور کارڈز کی animations بناتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ میں درج ذیل اہم حصے ہیں:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Lenis Integration:</strong> useLenis() hook کے ذریعے Lenis instance حاصل کیا گیا ہے جو smooth scroll فراہم کرتا ہے۔</li>
            <li><strong>GSAP ScrollTrigger:</strong> افقی اسکرول کے لیے ScrollTrigger کا استعمال کیا گیا ہے جو پورے سیکشن کو pin کرتا ہے اور کنٹینر کو بائیں طرف حرکت دیتا ہے۔</li>
            <li><strong>Cards Animation:</strong> ہر کارڈ کے لیے انفرادی animation ہے - جب کارڈ viewport میں آتا ہے تو یہ opacity 0 سے 1، scale 0.5 سے 1، اور rotation 45° سے 0° تک جاتا ہے۔</li>
            <li><strong>Hover Effects:</strong> جب صارف کارڈ پر ماؤس لے جائے تو کارڈ بڑا ہو جاتا ہے (scale 1.1)، اوپر اٹھتا ہے (y: -20)، اور گھومتا ہے (rotate: 5°)۔</li>
            <li><strong>Text Animation:</strong> آخر والے کارڈ میں موجود متن بھی اسکرول کے ساتھ آہستہ آہستہ ظاہر ہوتا ہے۔</li>
          </ul>
        </div>

        {/* 🎯 نتیجہ (Result) - HorizontalGallery.jsx */}
        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (HorizontalGallery.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>صفحہ کی ساخت:</strong> پہلا سیکشن: Purple gradient background کے ساتھ تعارفی متن | دوسرا سیکشن: افقی gallery جہاں 8 مختلف رنگوں کے کارڈز ہیں | تیسرا سیکشن: نیلے gradient کے ساتھ اختتامی متن</li>
            <li><strong>Horizontal Scrolling:</strong> ماؤس وہیل یا ٹچ سے بائیں دائیں اسکرول کیا جا سکتا ہے | سیکشن pin ہو جاتا ہے اور صرف کارڈز حرکت کرتے ہیں | اسکرول بہت ہموار (smooth) ہے کیونکہ Lenis استعمال ہوا ہے</li>
            <li><strong>Card Animations:</strong> شروع میں تمام کارڈز invisible (opacity 0) اور چھوٹے (scale 0.5) ہیں | جیسے جیسے آپ اسکرول کریں گے، کارڈز ظاہر ہوتے جائیں گے | ہر کارڈ اپنی جگہ پر آتے ہوئے گھومتا ہے (rotate)</li>
            <li><strong>Hover Effects:</strong> کسی بھی کارڈ پر ماؤس لے جانے سے وہ بڑا ہو جاتا ہے | کارڈ تھوڑا اوپر اٹھتا ہے اور گھومتا ہے | shadow گہری ہو جاتی ہے جو 3D effect دیتی ہے</li>
            <li><strong>مکمل تجربہ:</strong> یہ ایک مکمل horizontal gallery ہے جیسا کہ جدید پورٹ فولیو ویب سائٹس پر دیکھتے ہیں | تمام animations اسکرول کے ساتھ sync ہیں | موبائل اور ڈیسک ٹاپ دونوں پر کام کرتا ہے | اردو زبان میں مواد ہونے کی وجہ سے اردو صارفین کے لیے آسان ہے</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ کوڈ افقی اسکرولنگ کی ایک شاندار مثال ہے جہاں Lenis (smooth scroll) اور GSAP (animations) کا شاندار امتزاج ہے۔
          </p>
        </div>

        <h4 className="chapter-subtitle">مزید Horizontal Animation Examples</h4>

        <div className="code-section">
          <div className="code-header">
            <span>AdvancedHorizontal.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(advancedHorizontalCode, "AdvancedHorizontal.jsx")}
            >
              {copiedCode === "AdvancedHorizontal.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{advancedHorizontalCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 اردو وضاحت (Urdu Description) - AdvancedHorizontal.jsx */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #9f7aea" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#9f7aea", fontWeight: "bold" }}>📝 اردو وضاحت (AdvancedHorizontal.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ AdvancedHorizontal.jsx ایک جدید React کمپوننٹ ہے جو Parallax Horizontal Effect بناتا ہے۔ Parallax effect وہ تکنیک ہے جس میں background اور foreground کی layers مختلف speeds پر حرکت کرتی ہیں، جس سے گہرائی (depth) کا احساس ہوتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ میں درج ذیل اہم حصے ہیں:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Parallax کا تصور:</strong> Parallax ایک بصری اثر ہے جس میں قریب کی چیزیں دور کی چیزوں سے زیادہ تیزی سے حرکت کرتی ہیں - یہ وہی اثر ہے جو گاڑی میں سفر کرتے وقت دکھائی دیتا ہے - قریب کے درخت تیزی سے پیچھے ہٹتے ہیں، پہاڑ آہستہ</li>
            <li><strong>تین Layers (تہیں):</strong> Background layer (پس منظر): سب سے دور کی تہہ، سب سے آہستہ حرکت کرتی ہے | Mid layer (درمیانی تہہ): درمیانی رفتار سے حرکت کرتی ہے | Foreground layer (اگلی تہہ): سب سے قریب کی تہہ، سب سے تیز حرکت کرتی ہے</li>
            <li><strong>مختلف Speeds (رفتاریں):</strong> const speed = 0.5 + (index * 0.2); سے مختلف speeds بنائی گئی ہیں: Layer 0 (Background): speed = 0.5 (سب سے آہستہ) | Layer 1 (Mid): speed = 0.7 (درمیانی) | Layer 2 (Foreground): speed = 0.9 (سب سے تیز)</li>
            <li><strong>GSAP ScrollTrigger:</strong> gsap.to() ہر layer کو حرکت دیتا ہے | x: () =&gt; -(layer.offsetWidth * speed) ہر layer کو اس کی speed کے مطابق بائیں طرف لے جاتا ہے | scrub: 1 اسکرول کے ساتھ animation کو sync رکھتا ہے | horizontal: true افقی اسکرول کو فعال کرتا ہے</li>
            <li><strong>Lenis Integration:</strong> scroller: lenis Lenis کو scroller کے طور پر استعمال کرتا ہے - اس سے اسکرول ہموار (smooth) ہو جاتی ہے</li>
          </ul>
        </div>

        {/* 🎯 نتیجہ (Result) - AdvancedHorizontal.jsx */}
        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (AdvancedHorizontal.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>بصری ساخت (Visual Structure):</strong> ایک مکمل viewport (100vh) پر تین layers پھیلی ہوئی ہیں | ہر layer کی چوڑائی 100vw ہے (پوری اسکرین) | Layers ایک دوسرے کے اوپر stacked ہیں</li>
            <li><strong>Parallax Effect:</strong> جب آپ بائیں دائیں اسکرول کریں گے، تینوں layers حرکت کریں گی | Background layer سب سے آہستہ حرکت کرے گی (speed 0.5) | Mid layer درمیانی رفتار سے حرکت کرے گی (speed 0.7) | Foreground layer سب سے تیز حرکت کرے گی (speed 0.9) | اس فرق کی وجہ سے گہرائی (3D depth) کا احساس ہوگا</li>
            <li><strong>اسکرول کا تجربہ:</strong> Lenis کی وجہ سے اسکرول بہت ہموار (smooth) ہوگی | GSAP ScrollTrigger کی وجہ سے animations بالکل اسکرول کے ساتھ sync ہوں گی | scrub: 1 کی وجہ سے جہاں اسکرول رکے گی، وہیں animation بھی رک جائے گی</li>
            <li><strong>عملی مثال:</strong> تصور کریں کہ آپ ایک جنگل میں ہیں: پس منظر (background) میں پہاڑ ہیں - بہت آہستہ حرکت | درمیان میں درخت ہیں - تھوڑی تیز حرکت | آگے (foreground) میں پرندے یا پتے ہیں - سب سے تیز حرکت | اسکرول کرتے وقت یہ سب مختلف speeds پر حرکت کریں گے</li>
            <li><strong>پیشہ ورانہ استعمال:</strong> یہ effect جدید ویب سائٹس پر بہت عام ہے | خاص طور پر پورٹ فولیو سائٹس، لینڈنگ پیجز، اور اسٹوری ٹیلنگ میں استعمال ہوتا ہے | صارفین کو ایک عمیق (immersive) تجربہ دیتا ہے</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ کوڈ Parallax Horizontal Scrolling کی ایک شاندار مثال ہے جہاں Lenis smooth scroll فراہم کرتا ہے، GSAP animations کنٹرول کرتا ہے، اور مختلف speeds depth effect پیدا کرتی ہیں۔ نتیجہ: ایک پیشہ ورانہ، جدید اور پرکشش ویب سائٹ کا تجربہ! 🎯
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "5px", fontStyle: "italic", color: "#4a5568" }}>
            مثال کے طور پر: اگر آپ اسکرول وہیل کو ایک بار گھمائیں تو: Foreground layer 90px حرکت کرے گی | Mid layer 70px حرکت کرے گی | Background layer 50px حرکت کرے گی - یہ فرق 3D effect پیدا کرتا ہے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">11. Timeline کے ساتھ Advanced Example (Vertical + Horizontal)</h3>

        <div className="code-section">
          <div className="code-header">
            <span>AdvancedPage.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(advancedPageCode, "AdvancedPage.jsx")}
            >
              {copiedCode === "AdvancedPage.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{advancedPageCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 اردو وضاحت (Urdu Description) - AdvancedPage.jsx */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #9f7aea" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#9f7aea", fontWeight: "bold" }}>📝 اردو وضاحت (AdvancedPage.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ AdvancedPage.jsx ایک جدید React کمپوننٹ ہے جو Lenis (smooth scroll) اور GSAP (animations) کے طاقتور امتزاج کو استعمال کرتے ہوئے Timeline-based animations بناتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Lenis Integration:</strong> useLenis() hook کے ذریعے Lenis instance حاصل کیا گیا ہے | Lenis smooth scroll فراہم کرتی ہے اور اسکرول کو ہموار بناتی ہے | lenis.on(&apos;scroll&apos;, ScrollTrigger.update) کے ذریعے Lenis اور GSAP ScrollTrigger کو sync کیا گیا ہے</li>
            <li><strong>GSAP Timeline:</strong> gsap.timeline() ایک ترتیب وار animation container ہے | اس میں متعدد animations کو ایک مخصوص ترتیب میں رکھا جا سکتا ہے | Timeline animations ایک کے بعد ایک چلتی ہیں (یا overlap بھی کر سکتی ہیں)</li>
            <li><strong>ScrollTrigger Configuration:</strong> trigger: sectionRef.current (کون سا سیکشن trigger کرے گا) | start: &quot;top top&quot; (کب start ہو) | end: &quot;bottom bottom&quot; (کب end ہو) | scrub: 1 (اسکرول کے ساتھ sync) | scroller: lenis (Lenis کو scroller کے طور پر استعمال کریں) | pin: true (سیکشن کو pin کریں)</li>
            <li><strong>Timeline Animations:</strong> Box 1: بائیں سے آتا ہے (x: -200 سے x: 0) اور ظاہر ہوتا ہے | Box 2: نیچے سے آتا ہے (y: 200 سے y: 0) اور ظاہر ہوتا ہے - پچھلی animation سے 0.5s پہلے start | Box 3: چھوٹے سائز سے بڑا ہوتا ہے (scale: 0 سے scale: 1) اور 360° گھومتا ہے | Text: نیچے سے اوپر آتا ہے اور ظاہر ہوتا ہے</li>
            <li><strong>Timeline Sequencing:</strong> &quot;-=0.5&quot; کا مطلب ہے کہ اگلی animation پچھلی animation کے ختم ہونے سے 0.5 سیکنڈ پہلے شروع ہو جائے | اس طرح animations overlap ہوتی ہیں اور زیادہ متحرک effect بنتا ہے</li>
            <li><strong>Cleanup Function:</strong> return () =&gt; &#123; ScrollTrigger.getAll().forEach(st =&gt; st.kill()); &#125; | component unload ہونے پر تمام ScrollTriggers کو ختم کر دیتا ہے | memory leaks سے بچاتا ہے</li>
          </ul>
        </div>

        {/* 🎯 نتیجہ (Result) - AdvancedPage.jsx */}
        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (AdvancedPage.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>صفحہ کی ساخت:</strong> پہلا سیکشن (Intro): ہلکے گرے رنگ کا سیکشن، عنوان: &quot;GSAP Timeline Example&quot; | دوسرا سیکشن (Animation Area): گہرے گرے/سیاہ رنگ کا سیکشن، تین رنگین boxes (سرخ، فیروزی، پیلا)، ایک متن | تیسرا سیکشن (Outro): ہلکے گرے رنگ کا سیکشن، عنوان: &quot;ختم شد&quot;</li>
            <li><strong>Box 1 Animation:</strong> شروع میں: باکس 1 نظر نہیں آتا (opacity 0) اور بائیں طرف 200px دور ہے | اسکرول کرتے ہوئے: آہستہ آہستہ دائیں طرف آتا ہے اور ظاہر ہوتا ہے | آخر میں: اپنی اصلی جگہ پر (x: 0) اور مکمل ظاہر (opacity 1)</li>
            <li><strong>Box 2 Animation:</strong> شروع میں: باکس 2 نظر نہیں آتا اور نیچے 200px دور ہے | باکس 1 کے اختتام سے 0.5s پہلے یہ animation شروع ہو جاتی ہے | اسکرول کرتے ہوئے: اوپر آتا ہے اور ظاہر ہوتا ہے</li>
            <li><strong>Box 3 Animation:</strong> شروع میں: باکس 3 بہت چھوٹا ہے (scale 0) اور گھوما ہوا نہیں (rotation 0) | باکس 2 کے اختتام سے 0.5s پہلے یہ animation شروع ہوتی ہے | اسکرول کرتے ہوئے: بڑا ہوتا ہے (scale 1) اور 360° گھومتا ہے</li>
            <li><strong>Text Animation:</strong> شروع میں: متن نظر نہیں آتا اور نیچے 50px دور ہے | آخر میں: متن اپنی جگہ پر آتا ہے اور ظاہر ہوتا ہے</li>
            <li><strong>خصوصی اثرات:</strong> Smooth Scroll: Lenis کی وجہ سے تمام animations ہموار ہیں | Pin Effect: دوسرا سیکشن pin ہو جاتا ہے یعنی fixed رہتا ہے جبکہ animations چلتی ہیں | Overlap Effect: &quot;-=0.5&quot; کی وجہ سے animations ایک دوسرے میں merge ہوتی ہیں | Scrub Sync: animations اسکرول کے ساتھ مکمل طور پر sync ہیں</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ کوڈ GSAP Timeline کی طاقت کو ظاہر کرتا ہے: متعدد animations کو ترتیب دینا، animations کے درمیان timing کنٹرول کرنا، ScrollTrigger کے ساتھ timeline کو sync کرنا، Lenis smooth scroll کے ساتھ مکمل انضمام۔ یہ ایک پیشہ ورانہ مثال ہے جو جدید ویب سائٹس پر دیکھی جانے والی اسکرول-based animations کو بنانے کا طریقہ دکھاتی ہے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">🎨 12. React میں مکمل عملی مثال (بغیر GSAP کے)</h3>

        <h4 className="chapter-subtitle">Step 1: App کو Wrap کریں</h4>
        <p className="section-text urdu-text"><strong>lerp کیا ہے؟</strong> lerp جتنا کم ہوگا (0.1)، اسکرول اتنا زیادہ smooth ہوگا۔</p>

        <h4 className="chapter-subtitle">Step 2: Scroll Control + Progress Bar</h4>

        <div className="code-section">
          <div className="code-header">
            <span>HomePage.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(homePageCode, "HomePage.jsx with progress")}
            >
              {copiedCode === "HomePage.jsx with progress" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{homePageCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 HomePage.jsx (Progress Bar) - مکمل اردو وضاحت اور نتیجہ */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #4299e1" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#4299e1", fontWeight: "bold" }}>📝 اردو وضاحت (HomePage.jsx - Progress Bar)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ HomePage.jsx ایک React کمپوننٹ ہے جو Lenis کی progress tracking اور programmatic scrolling کی خصوصیات کو ظاہر کرتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>State اور Hooks:</strong> const [progress, setProgress] = useState(0); | const lenis = useLenis((instance) =&gt; &#123; setProgress(instance.progress); &#125;);</li>
            <li><strong>instance.progress:</strong> 0 سے 1 کے درمیان ویلیو (0 = اوپر، 1 = نیچے) - ہر اسکرول پر اپڈیٹ ہوتی ہے</li>
            <li><strong>scrollTo Function:</strong> const scrollTop = () =&gt; &#123; lenis.scrollTo(0); &#125; - programmatic scrolling</li>
            <li><strong>Progress Bar:</strong> position: &quot;fixed&quot;، top: 0، height: &quot;5px&quot;، width: `$&#123;progress * 100&#125;%`، background: &quot;blue&quot;</li>
            <li><strong>Scroll Button:</strong> &quot;اوپر جائیں&quot; بٹن - کلک کرتے ہی صفحہ اوپر جاتا ہے</li>
          </ul>
        </div>

        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (HomePage.jsx - Progress Bar)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Progress Bar:</strong> اوپر نیلی پتلی پٹی (5px) - شروع میں 0% (نظر نہیں آتی)، جیسے جیسے اسکرول کریں بڑھتی جاتی ہے</li>
            <li><strong>progress = 0:</strong> بار 0% (بالکل اوپر)</li>
            <li><strong>progress = 0.25:</strong> بار 25% (ایک چوتھائی)</li>
            <li><strong>progress = 0.5:</strong> بار 50% (آدھی)</li>
            <li><strong>progress = 0.75:</strong> بار 75% (تین چوتھائی)</li>
            <li><strong>progress = 1:</strong> بار 100% (بالکل نیچے)</li>
            <li><strong>اسکرول بٹن:</strong> &quot;اوپر جائیں&quot; دبانے سے lenis.scrollTo(0) چلتا ہے اور صفحہ ہمواری سے اوپر جاتا ہے</li>
            <li><strong>Smooth Scroll:</strong> Lenis کی وجہ سے اسکرول بہت ہموار ہے</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ مثال Lenis کی دو اہم خصوصیات کو ظاہر کرتی ہے: Real-time progress tracking اور Programmatic scroll control۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">📘 13. Horizontal Scrolling (بنیادی مثال)</h3>

        <h4 className="chapter-subtitle">افقی اسکرول کے لیے بنیادی سیٹ اپ</h4>

        <div className="code-section">
          <div className="code-header">
            <span>HorizontalBasic.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(horizontalBasicCode, "HorizontalBasic.jsx")}
            >
              {copiedCode === "HorizontalBasic.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{horizontalBasicCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 اردو وضاحت (Urdu Description) - HorizontalBasic.jsx */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #ed8936" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#ed8936", fontWeight: "bold" }}>📝 اردو وضاحت (HorizontalBasic.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ HorizontalBasic.jsx ایک سادہ اور بنیادی React کمپوننٹ ہے جو افقی اسکرولنگ (Horizontal Scrolling) کا تصور واضح کرتا ہے۔ یہ کسی بھی پیچیدہ لائبریری (جیسے Lenis یا GSAP) کے بغیر صرف CSS کے ذریعے horizontal scrolling کا ڈھانچہ فراہم کرتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>CSS Flexbox Layout:</strong> display: &quot;flex&quot; تمام سیکشنز کو ایک قطار میں رکھتا ہے | overflowX: &quot;hidden&quot; افقی اسکرول بار کو چھپاتا ہے (لیکن اسکرولنگ ممکن ہے)</li>
            <li><strong>سیکشنز کی ساخت:</strong> چار مختلف سیکشنز، ہر ایک: minWidth: &quot;100vw&quot; (پوری اسکرین کی چوڑائی) | height: &quot;100vh&quot; (پوری اسکرین کی اونچائی) | مختلف پس منظر رنگ | مرکز میں بڑے عنوان</li>
            <li><strong>رنگوں کی تفصیل:</strong> سلائیڈ 1: ہلکا سرخ (#ff9999) | سلائیڈ 2: ہلکا نیلا (#99ccff) | سلائیڈ 3: ہلکا سبز (#99ff99) | سلائیڈ 4: ہلکا نارنجی (#ffcc99)</li>
            <li><strong>اردو مواد:</strong> تمام عنوانات اردو میں ہیں تاکہ اردو صارفین کے لیے سمجھنا آسان ہو۔</li>
            <li><strong>بنیادی ڈھانچہ:</strong> یہ کمپوننٹ کسی بھی external لائبریری پر منحصر نہیں ہے - صرف React اور CSS استعمال کرتا ہے۔</li>
          </ul>
        </div>

        {/* 🎯 نتیجہ (Result) - HorizontalBasic.jsx */}
        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (HorizontalBasic.jsx)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>صفحہ کی ساخت:</strong> چار مکمل اسکرین سیکشنز: سیکشن 1: سرخ پس منظر - &quot;سلائیڈ 1&quot; | سیکشن 2: نیلا پس منظر - &quot;سلائیڈ 2&quot; | سیکشن 3: سبز پس منظر - &quot;سلائیڈ 3&quot; | سیکشن 4: نارنجی پس منظر - &quot;سلائیڈ 4&quot;</li>
            <li><strong>افقی اسکرولنگ کا تجربہ:</strong> اسکرول کا طریقہ: ماؤس وہیل (horizontal وہیل سے) | ٹریک پیڈ (دو انگلیوں سے سوائپ) | کی بورڈ (Shift + ماؤس وہیل یا arrow keys) | ٹچ اسکرین (انگلی سے سوائپ)</li>
            <li><strong>اسکرول کا عمل:</strong> شروع میں: سرخ سیکشن | تھوڑا دائیں: نیلا سیکشن | مزید دائیں: سبز سیکشن | آخر میں: نارنجی سیکشن</li>
            <li><strong>⚠️ اہم نوٹ:</strong> یہ ایک بنیادی مثال ہے: ❌ Lenis smooth scroll شامل نہیں | ❌ کوئی animations نہیں | ❌ GSAP یا ScrollTrigger استعمال نہیں ہوا | ❌ کوئی hover effects نہیں | ❌ responsive design نہیں</li>
            <li><strong>✅ یہ مثال سکھاتی ہے:</strong> افقی اسکرولنگ کا بنیادی تصور | Flexbox کے ساتھ horizontal layout | viewport units (vw, vh) کا استعمال | بغیر کسی لائبریری کے horizontal scrolling کا ڈھانچہ</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ HorizontalBasic.jsx ایک سیڑھی کا پہلا قدم ہے: اگر آپ horizontal scrolling سیکھنا چاہتے ہیں، تو یہاں سے شروع کریں، پھر Lenis شامل کرکے smooth scrolling سیکھیں، پھر GSAP شامل کرکے animations سیکھیں، آخر میں HorizontalGallery.jsx جیسی جدید مثالیں بنائیں۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">📱 14. Responsive اور Advanced Examples</h3>

        <h4 className="chapter-subtitle">Responsive مثال - موبائل پر Horizontal روکنا</h4>

        <div className="code-section">
          <div className="code-header">
            <span>App.js Responsive</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(responsiveAppCode, "App.js Responsive")}
            >
              {copiedCode === "App.js Responsive" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{responsiveAppCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 App.js Responsive - مکمل اردو وضاحت اور نتیجہ */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #38b2ac" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38b2ac", fontWeight: "bold" }}>📝 اردو وضاحت (App.js Responsive)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ App.js ایک ذہین (Smart) React کمپوننٹ ہے جو اسکرین کے سائز کے مطابق خود کو ڈھال لیتا ہے۔ یہ Lenis کی orientation فیچر کو استعمال کرتے ہوئے موبائل پر vertical اور ٹیبلٹ/ڈیسک ٹاپ پر horizontal اسکرولنگ فراہم کرتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Imports اور State:</strong> ReactLenis (Lenis wrapper)، useEffect، useState، HorizontalGallery | const [orientation, setOrientation] = useState(&quot;vertical&quot;)</li>
            <li><strong>Screen Size Checker:</strong> checkScreen = () =&gt; &#123; if (window.innerWidth &gt; 768) setOrientation(&quot;horizontal&quot;); else setOrientation(&quot;vertical&quot;); &#125;</li>
            <li><strong>Event Listeners:</strong> checkScreen() پہلی بار چلتا ہے، resize event listener، cleanup function</li>
            <li><strong>Lenis Configuration:</strong> orientation: orientation (state)، gestureOrientation: &quot;both&quot;، lerp: 0.1، smoothWheel: true</li>
            <li><strong>Conditional Rendering:</strong> &#123;orientation === &quot;horizontal&quot; ? &lt;HorizontalGallery /&gt; : &lt;div&gt;...&lt;/div&gt;&#125;</li>
          </ul>
        </div>

        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (App.js Responsive)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>موبائل پر (Portrait - width ≤ 768px):</strong> اسکرول: اوپر نیچے (vertical) | مواد: دو سادہ سیکشنز | پیغام: &quot;موبائل پر Vertical Scroll&quot; اور &quot;اپنے فون کو گھمائیں&quot;</li>
            <li><strong>ٹیبلٹ/ڈیسک ٹاپ پر (Landscape - width > 768px):</strong> اسکرول: بائیں دائیں (horizontal) | مواد: HorizontalGallery (8 کارڈز) | کارڈز پر animations: fade-in, rotate, hover effects</li>
            <li><strong>جب صارف فون گھماتا ہے:</strong> resize event چلتا ہے | checkScreen() دوبارہ چلتا ہے | orientation state اپڈیٹ ہوتا ہے | Lenis orientation بدل دیتا ہے | content automatically لوڈ ہو جاتا ہے</li>
            <li><strong>خصوصیات:</strong> Real-time responsiveness، بغیر page reload کے، seamless transition، dual experience</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ مثال پروفیشنل responsive design کی ہے - موبائل صارفین کو سادہ experience، ڈیسک ٹاپ صارفین کو rich experience، ایک ہی codebase، دو experiences۔
          </p>
        </div>

        <h4 className="chapter-subtitle">Anchor Links کا استعمال</h4>

        <div className="code-section">
          <div className="code-header">
            <span>Navigation.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(navigationCode, "Navigation.jsx")}
            >
              {copiedCode === "Navigation.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{navigationCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* 📝 اردو وضاحت (Urdu Description) - Navigation with Lenis */}
        <div className="urdu-description-box" style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "12px", borderRight: "4px solid #4299e1" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#4299e1", fontWeight: "bold" }}>📝 اردو وضاحت (Navigation with Lenis)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>وضاحت:</strong><br />
            یہ Navigation کمپوننٹ Lenis کی programmatic scrolling کی طاقت کو ظاہر کرتا ہے۔ یہ ایک فکسڈ نیویگیشن بار ہے جو صارف کو مختلف سیکشنز پر smooth scroll کے ساتھ لے جاتا ہے۔
          </p>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "10px" }}>
            اس کوڈ کے اہم حصے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>Lenis Instance حاصل کرنا:</strong> const lenis = useLenis(); - useLenis() hook Lenis کے موجودہ instance کو فراہم کرتا ہے، یہ instance ہمیں programmatically scroll کرنے کی اجازت دیتا ہے</li>
            <li><strong>scrollToSection فنکشن:</strong> lenis.scrollTo(sectionId, options) استعمال کرتا ہے</li>
            <li><strong>Target (sectionId):</strong> یہ وہ سیکشن ہے جہاں اسکرول کرنا ہے (مثلاً &quot;#home&quot;, &quot;#about&quot;)</li>
            <li><strong>Options Object:</strong> offset: 0 - کتنی دوری اوپر/نیچے سے اسکرول روکنا ہے | duration: 2 - اسکرول مکمل ہونے میں کتنا وقت لگے گا (سیکنڈز میں) | easing: (t) =&gt; Math.min(1, 1.001 - Math.pow(2, -10 * t)) - custom easing function</li>
            <li><strong>Fixed Navigation Bar:</strong> position: &quot;fixed&quot; (ہمیشہ نظر آئے گا) | top: &quot;20px&quot; (اوپر سے 20px دور) | right: &quot;20px&quot; (دائیں سے 20px دور) | zIndex: 1000 (دوسرے elements کے اوپر)</li>
            <li><strong>اردو بٹنز:</strong> ہوم (#home) | تعارف (#about) | گیلری (#gallery) | رابطہ (#contact)</li>
          </ul>
        </div>

        {/* 🎯 نتیجہ (Result) - Navigation with Lenis */}
        <div className="urdu-result-box" style={{ marginTop: "15px", marginBottom: "25px", padding: "20px", background: "#e8f4fd", borderRadius: "12px", borderRight: "4px solid #38a169" }}>
          <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#38a169", fontWeight: "bold" }}>🎯 نتیجہ (Navigation with Lenis)</h4>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            <strong>نتیجہ:</strong><br />
            جب یہ کوڈ چلے گا تو درج ذیل نتائج سامنے آئیں گے:
          </p>
          <ul className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingRight: "20px", listStyleType: "disc" }}>
            <li><strong>نیویگیشن بار کی خصوصیات:</strong> پوزیشن: فکسڈ (اوپر دائیں کونے پر، تمام مواد کے اوپر) | بٹنز کا ڈیزائن: چار بٹنز ایک قطار میں، ہر بٹن کے درمیان 5px کا فاصلہ، 10px کا padding، اردو میں لیبلز</li>
            <li><strong>اسکرولنگ کا عمل:</strong> کلک کرتے ہی Lenis فعال ہو جاتی ہے | 2 سیکنڈ کا ہموار سفر: پہلا 0.5 سیکنڈ (تیزی سے شروع)، درمیانی 1 سیکنڈ (مسلسل رفتار)، آخری 0.5 سیکنڈ (آہستہ ہو کر رکنا)</li>
            <li><strong>Easing Effect:</strong> شروع میں تیز (exponential acceleration) | آخر میں نرم (smooth deceleration) | قدرتی احساس جیسے کوئی چیز رک رہی ہو</li>
            <li><strong>مختلف سیکشنز پر جانا:</strong> ہوم بٹن → #home | تعارف بٹن → #about | گیلری بٹن → #gallery | رابطہ بٹن → #contact</li>
            <li><strong>تکنیکی فوائد:</strong> صحت سے متعلق (بالکل مطلوبہ سیکشن پر رکتا ہے) | کنٹرول (رفتار اور وقت مکمل کنٹرول میں) | کسٹمائزیشن (اپنی مرضی کی easing) | یوزر ایکسپیرینس (اچانک jump کی بجائے ہموار سفر)</li>
          </ul>
          <p className="urdu-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
            خاص بات: یہ Navigation کمپوننٹ Lenis کی سب سے مفید خصوصیات میں سے ایک کو ظاہر کرتا ہے - programmatic scroll control۔ یہ سادہ سی نیویگیشن ویب سائٹ کے استعمال کو زیادہ پیشہ ورانہ اور خوشگوار بناتی ہے۔
          </p>
        </div>

        <hr className="styled-hr" />

        <h3 className="section-title">🚫 15. Nested Scroll روکنا</h3>
        <p className="section-text urdu-text">اگر modal یا sidebar کے اندر default scroll چاہیے:</p>

        <div className="code-section">
          <div className="code-header">
            <span>HTML with data-lenis-prevent</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(nestedScrollCode, "nested scroll")}
            >
              {copiedCode === "nested scroll" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code" style={{ direction: "ltr", textAlign: "left" }}>{nestedScrollCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>
        <p className="code-description urdu-text">
          <strong>وضاحت:</strong> data-lenis-prevent attribute کسی بھی element پر لگانے سے وہ normal scroll کرے گا۔
          <br />
          <strong>نتیجہ:</strong> اس div کے اندر normal scroll ہوگا، smooth scroll نہیں۔
        </p>

        <hr className="styled-hr" />

        <h3 className="section-title">⚠️ 16. Beginners کی عام غلطیاں</h3>
        <ul className="section-text urdu-text">
          <li>❌ CSS شامل نہ کرنا</li>
          <li>❌ useLenis component کے باہر استعمال کرنا</li>
          <li>❌ horizontal میں flex نہ لگانا</li>
          <li>❌ sections کی width 100vw نہ رکھنا</li>
          <li>❌ GSAP میں ScrollTrigger رجسٹر کرنا بھول جانا</li>
          <li>❌ cleanup نہ کرنا (ScrollTrigger.getAll().forEach(st =&gt; st.kill()))</li>
          <li>❌ Horizontal میں containerAnimation استعمال نہ کرنا</li>
          <li>❌ cardsRef.current کو ٹھیک سے initialize نہ کرنا</li>
        </ul>

        <hr className="styled-hr" />

        <h3 className="section-title">🚀 17. Performance Tips</h3>
        <ul className="section-text urdu-text">
          <li>lerp = 0.1 بہترین balance</li>
          <li>heavy images lazy load کریں</li>
          <li>unnecessary animations نہ لگائیں</li>
          <li>mobile پر test کریں</li>
          <li>GSAP animations میں will-change استعمال کریں</li>
          <li>ScrollTrigger میں scrub: true استعمال کریں تو duration کم رکھیں</li>
          <li>Horizontal scrolling میں بہت زیادہ elements نہ رکھیں</li>
          <li>Images کو optimize کریں</li>
        </ul>

        <hr className="styled-hr" />

        <h3 className="section-title">🏁 18. نتیجہ</h3>
        <p className="section-text urdu-text">اب آپ نے سیکھ لیا:</p>
        <ul className="section-text urdu-text">
          <li>✔ Lenis کیا ہے</li>
          <li>✔ Smooth scroll کیسے کام کرتا ہے</li>
          <li>✔ React میں setup</li>
          <li>✔ Scroll progress</li>
          <li>✔ Programmatic scroll</li>
          <li>✔ <strong>Horizontal scrolling (مکمل مثال)</strong></li>
          <li>✔ <strong>Horizontal animations with GSAP</strong></li>
          <li>✔ <strong>Horizontal gallery with cards</strong></li>
          <li>✔ Nested scroll control</li>
          <li>✔ GSAP کا تعارف اور انسٹالیشن</li>
          <li>✔ Lenis + GSAP integration</li>
          <li>✔ ScrollTrigger کے ساتھ animations</li>
          <li>✔ Timeline اور Advanced animations</li>
          <li>✔ Responsive design</li>
          <li>✔ Anchor links</li>
          <li>✔ Performance tips</li>
        </ul>
        <p className="section-text urdu-text"><strong>خاص بات:</strong> آپ نے Horizontal scrolling میں cards پر animations, hover effects, اور responsive design بھی سیکھ لیا! 🎉</p>
        <p className="section-text urdu-text">اب یہ واقعی beginner سے advanced تک مکمل چیپٹر ہے 💪</p>
        <p className="section-text urdu-text">یہ ہے Lenis اور GSAP کی مکمل رہنمائی اردو میں، Horizontal animations کے ساتھ۔ امید ہے کہ یہ آپ کے React ٹیوٹوریل کے لیے کافی ہو گی۔</p>
      </div>

      {copiedCode && (
        <div className="copy-notification">
          ✅ {copiedCode} کوڈ کاپی ہوگیا!
        </div>
      )}
    </div>
  );
}

export default Chapter38;