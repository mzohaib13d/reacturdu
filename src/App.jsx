import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './App9211.css';

// Layout Components
import Navbar from './components/Layout/Navbar';
// import Footer from './components/Layout/Footer';

// Lazy load all components
const HomePage = lazy(() => import('./components/Home/HomePage'));
const LoadingSpinner = lazy(() => import('./components/common/LoadingSpinner'));

// Lazy load all chapters - آپ کے اصل imports کے مطابق
const Chapter0 = lazy(() => import('./components/Chapter0'));
const Chapter1 = lazy(() => import('./components/Chapter1'));
const Chapter2 = lazy(() => import('./components/Chapter2'));
const Chapter3 = lazy(() => import('./components/Chapter3'));
const Chapter4 = lazy(() => import('./components/Chapter4'));
const Chapter5 = lazy(() => import('./components/Chapter5'));
const Chapter6 = lazy(() => import('./components/Chapter6'));
const Chapter7 = lazy(() => import('./components/Chapter7'));
const Chapter8 = lazy(() => import('./components/Chapter8'));
const Chapter9 = lazy(() => import('./components/Chapter9'));
const Chapter10 = lazy(() => import('./components/Chapter10'));
const ColorZillaChapter = lazy(() => import('./components/ColorZillaChapter')); // Chapter 11
const Chapter12 = lazy(() => import('./components/Chapter12'));
const Chapter13 = lazy(() => import('./components/Chapter13'));
const Chapter14 = lazy(() => import('./components/Chapter14'));
const Chapter15 = lazy(() => import('./components/Chapter15'));
const Chapter16 = lazy(() => import('./components/Chapter16'));
const Chapter17 = lazy(() => import('./components/Chapter17'));
const Chapter18 = lazy(() => import('./components/Chapter18'));
const Chapter19 = lazy(() => import('./components/Chapter19'));
const Chapter20 = lazy(() => import('./components/Chapter20'));
const Chapter21 = lazy(() => import('./components/Chapter21'));
const Chapter22 = lazy(() => import('./components/Chapter22'));
const Chapter23 = lazy(() => import('./components/Chapter23'));
const Chapter24 = lazy(() => import('./components/Chapter24'));
const Chapter25 = lazy(() => import('./components/Chapter25'));
const Chapter26 = lazy(() => import('./components/Chapter26'));
const Chapter27 = lazy(() => import('./components/Chapter27'));
const CssShadcn = lazy(() => import('./components/CssShadcn')); // Chapter 28
const Chapter29 = lazy(() => import('./components/Chapter29'));
const Chapter30 = lazy(() => import('./components/Chapter30'));
const Chapter31 = lazy(() => import('./components/Chapter31'));
const Chapter32 = lazy(() => import('./components/Chapter32'));
const Chapter33 = lazy(() => import('./components/Chapter33'));
const Chapter34 = lazy(() => import('./components/Chapter34'));
const Chapter35 = lazy(() => import('./components/Chapter35'));
const Chapter36 = lazy(() => import('./components/Chapter36'));
const Chapter37 = lazy(() => import('./components/Chapter37'));
const Chapter38 = lazy(() => import('./components/Chapter38'));
const Chapter39 = lazy(() => import('./components/Chapter39'));

function App() {
   const trailRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const MAX_TRAIL_LENGTH = 30; // Adjust this for longer/shorter trail
    
    const handleMouseMove = (event) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      
      // Random slight variation for more natural look
      const xOffset = (Math.random() - 0.5) * 4;
      const yOffset = (Math.random() - 0.5) * 4;
      
      trail.style.left = `${event.pageX - 5 + xOffset}px`;
      trail.style.top = `${event.pageY - 5 + yOffset}px`;
      
      // Random size variation
      const size = 8 + Math.random() * 6;
      trail.style.width = `${size}px`;
      trail.style.height = `${size}px`;
      
      // Random opacity
      trail.style.opacity = 0.7 + Math.random() * 0.3;
      
      document.body.appendChild(trail);
      
      // Add to trail array and manage length
      trailRef.current.push(trail);
      
      if (trailRef.current.length > MAX_TRAIL_LENGTH) {
        const oldestTrail = trailRef.current.shift();
        if (oldestTrail && oldestTrail.parentNode) {
          oldestTrail.remove();
        }
      }
      
      // Remove after animation
      setTimeout(() => {
        if (trail && trail.parentNode) {
          trail.remove();
          // Remove from array if still there
          const index = trailRef.current.indexOf(trail);
          if (index > -1) {
            trailRef.current.splice(index, 1);
          }
        }
      }, 800);
    };

    // Use throttled mousemove for better performance
    let ticking = false;
    const throttledMouseMove = (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(event);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', throttledMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      
      // Remove all trail elements
      trailRef.current.forEach(trail => {
        if (trail && trail.parentNode) {
          trail.remove();
        }
      });
      trailRef.current = [];
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="app-container" dir="rtl">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '60px' }} />
      
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Chapter 0 - Table of Contents */}
            <Route path="/chapter/0" element={<Chapter0 />} />
            
            {/* Chapters 1-10 */}
            <Route path="/chapter/1" element={<Chapter1 />} />
            <Route path="/chapter/2" element={<Chapter2 />} />
            <Route path="/chapter/3" element={<Chapter3 />} />
            <Route path="/chapter/4" element={<Chapter4 />} />
            <Route path="/chapter/5" element={<Chapter5 />} />
            <Route path="/chapter/6" element={<Chapter6 />} />
            <Route path="/chapter/7" element={<Chapter7 />} />
            <Route path="/chapter/8" element={<Chapter8 />} />
            <Route path="/chapter/9" element={<Chapter9 />} />
            <Route path="/chapter/10" element={<Chapter10 />} />
            
            {/* Chapter 11 - ColorZillaChapter */}
            <Route path="/chapter/11" element={<ColorZillaChapter />} />
            
            {/* Chapters 12-27 */}
            <Route path="/chapter/12" element={<Chapter12 />} />
            <Route path="/chapter/13" element={<Chapter13 />} />
            <Route path="/chapter/14" element={<Chapter14 />} />
            <Route path="/chapter/15" element={<Chapter15 />} />
            <Route path="/chapter/16" element={<Chapter16 />} />
            <Route path="/chapter/17" element={<Chapter17 />} />
            <Route path="/chapter/18" element={<Chapter18 />} />
            <Route path="/chapter/19" element={<Chapter19 />} />
            <Route path="/chapter/20" element={<Chapter20 />} />
            <Route path="/chapter/21" element={<Chapter21 />} />
            <Route path="/chapter/22" element={<Chapter22 />} />
            <Route path="/chapter/23" element={<Chapter23 />} />
            <Route path="/chapter/24" element={<Chapter24 />} />
            <Route path="/chapter/25" element={<Chapter25 />} />
            <Route path="/chapter/26" element={<Chapter26 />} />
            <Route path="/chapter/27" element={<Chapter27 />} />
            
            {/* Chapter 28 - CssShadcn */}
            <Route path="/chapter/28" element={<CssShadcn />} />
            
            {/* Chapters 29-38 */}
            <Route path="/chapter/29" element={<Chapter29 />} />
            <Route path="/chapter/30" element={<Chapter30 />} />
            <Route path="/chapter/31" element={<Chapter31 />} />
            <Route path="/chapter/32" element={<Chapter32 />} />
            <Route path="/chapter/33" element={<Chapter33 />} />
            <Route path="/chapter/34" element={<Chapter34 />} />
            <Route path="/chapter/35" element={<Chapter35 />} />
            <Route path="/chapter/36" element={<Chapter36 />} />
            <Route path="/chapter/37" element={<Chapter37 />} />
            <Route path="/chapter/38" element={<Chapter38 />} />
            <Route path="/chapter/39" element={<Chapter39 />} />
           
            
            {/* 404 Page */}
            <Route path="*" element={
              <div style={{ 
                textAlign: 'center', 
                padding: '100px 20px',
                fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif"
              }}>
                <h1 style={{ fontSize: '48px', color: '#dc3545' }}>404</h1>
                <p style={{ fontSize: '24px', marginBottom: '30px' }}>صفحہ نہیں ملا</p>
                <Link to="/" style={{
                  padding: '12px 24px',
                  backgroundColor: '#1a237e',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}>
                  ہوم پیج پر واپس جائیں
                </Link>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
  }


export default App;