// CssShadcn.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import zohaibImage from "../assets/zohaibImage.png";

const CssShadcn = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [showPortfolio, setShowPortfolio] = useState(false);

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const portfolioVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 120, 255, 0.4)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="shadcn-guide chapter-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: '100vh',
        direction: 'rtl',
        fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Verdana, Tahoma, sans-serif',
        background: '#fdfdfd',
        color: '#222'
      }}
    >
      {/* Header Section */}
      <motion.header 
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '60px 0',
          textAlign: 'center',
          marginBottom: '30px'
        }}
      >
        <div className="container">
          <motion.h1 
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
           Chapter 28 —  Complete Guide to shadcn/ui
          </motion.h1>
          <motion.p 
            className="chapter-subtitle2"
            variants={itemVariants}
          >
            Build beautiful, accessible React components with complete control
          </motion.p>
        </div>
      </motion.header>

      {/* Introduction Section */}
      <motion.section 
        className="intro-section lesson-section"
        variants={itemVariants}
      >
        <div className="container">
          <motion.h2 
            className="urdu-heading"
            variants={itemVariants}
          >
            shadcn/ui کا مکمل تعارف
          </motion.h2>
          <div className="content-grid">
            <div className="text-content">
              <motion.p 
                className="urdu-text"
                variants={itemVariants}
              >
                <strong>shadcn/ui</strong> ایک عام UI لائبریری نہیں ہے۔ یہ درحقیقت <em>ری اِیسبل کمپوننٹس کا ایک سیٹ</em> ہے جسے آپ اپنے پراجیکٹ میں <em>کاپی اور پیسٹ</em> کر سکتے ہیں۔ یہ <strong>Radix UI</strong> جیسے accessibility-focused پرائمٹیوز اور <strong>Tailwind CSS</strong> کے سٹائلنگ فریم ورک پر بنایا گیا ہے۔
              </motion.p>
              
              <motion.div 
                className="english-quote"
                variants={itemVariants}
              >
                "shadcn/ui is not a traditional UI library. It's actually a collection of reusable components that you can copy and paste into your project. Built on accessibility-focused primitives like Radix UI and Tailwind CSS styling framework."
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Personal Introduction Section with Image */}
      <motion.section 
        className="personal-intro-section card"
        variants={cardVariants}
        style={{
          margin: '40px 0',
          padding: '40px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          borderRadius: '20px'
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Image Section */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                delay: 0.5 
              }}
              style={{
                textAlign: 'center'
              }}
            >
              <motion.img 
                src={zohaibImage} 
                alt="Zohaib"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  objectFit: 'cover'
                }}
              />
              <motion.h3 
                style={{ 
                  marginTop: '15px',
                  color: 'white',
                  fontSize: '20px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                زوہیب
              </motion.h3>
            </motion.div>

            {/* Urdu Praise Text */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.h2 
                className="urdu-heading"
                style={{ color: 'white', textAlign: 'right', marginBottom: '20px' }}
              >
                میری مہارتیں
              </motion.h2>
              
              <motion.p 
                className="urdu-text"
                style={{
                  color: 'white',
                  fontSize: '18px',
                  lineHeight: '2',
                  textAlign: 'right',
                  marginBottom: '15px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                میں <strong>ایچ ٹی ایم ایل</strong>، <strong>سی ایس ایس</strong>، <strong>جاوا اسکرپٹ</strong> اور <strong>مرن اسٹیک</strong> میں مہارت رکھتا ہوں۔
              </motion.p>

              <motion.p 
                className="urdu-text"
                style={{
                  color: 'white',
                  fontSize: '18px',
                  lineHeight: '2',
                  textAlign: 'right',
                  marginBottom: '25px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                میری <strong>ویب اینیمیشنز</strong> میں مہارت اس بات کا منہ بولتہ ثبوت ہے میرے بنائے پراجیکٹس کی مثالیں پیش خدمت ہیں۔
              </motion.p>

              {/* Project Links */}
              <motion.div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px',
                  marginTop: '20px'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                {[
                  { name: 'https://cssanimations01.web.app', url: 'https://cssanimations01.web.app/' },
                  { name: 'https://amazing-clone01.web.app', url: 'https://amazing-clone01.web.app/' },
                  { name: 'https://githuburdu.netlify.app', url: 'https://githuburdu.netlify.app/' },
                  { name: 'https://mypolice.netlify.app', url: 'https://mypolice.netlify.app/' },
                  { name: 'https://mzohaib13d.github.io/cssurdu', url: 'https://mzohaib13d.github.io/cssurdu/' },
                  { name: 'https://foodiesbootstrap.web.app', url: 'https://foodiesbootstrap.web.app/' }
                ].map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.url}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  >
                    {project.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table Section */}
      <motion.section 
        className="comparison-section card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            دیگر UI لائبریریز کے مقابلے میں shadcn/ui کے فوائد
          </motion.h2>
          <motion.p 
            className="urdu-text" 
            style={{textAlign: 'center', marginBottom: '20px'}}
            variants={itemVariants}
          >
            ذیل کے جدول میں shadcn/ui کے Ant Design اور Material UI (MUI) کے مقابلے میں اہم فوائد دیکھ سکتے ہیں۔
          </motion.p>
          <motion.div 
            className="file-table"
            variants={itemVariants}
          >
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">
                ← → Scroll horizontally to view complete table
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="urdu-text-left">معیار</th>
                  <th className="urdu-text-left">shadcn/ui</th>
                  <th className="urdu-text-left">Ant Design</th>
                  <th className="urdu-text-left">Material UI (MUI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="urdu-text-left">فلسفہ اور کنٹرول</td>
                  <td className="urdu-text-left">مکمل کنٹرول، آپ کا کوڈ آپ کے پاس</td>
                  <td className="urdu-text-left">پہلے سے طے شدہ ڈیزائن سسٹم، کم کنٹرول</td>
                  <td className="urdu-text-left">پہلے سے طے شدہ ڈیزائن، کم کنٹرول</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">اپنی مرضی کے مطابق تبدیلی</td>
                  <td className="urdu-text-left">بہت آسان، براہ راست Tailwind کلاسز سے</td>
                  <td className="urdu-text-left">مشکل، ڈیزائن سسٹم کو سمجھنا ضروری</td>
                  <td className="urdu-text-left">درمیانی، theme اور override کی ضرورت</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">کارکردگی</td>
                  <td className="urdu-text-left">بہترین، صرف وہی کمپوننٹس استعمال ہوتے ہیں جو آپ کو چاہیں</td>
                  <td className="urdu-text-left">درمیانی، بڑا bundle سائز</td>
                  <td className="urdu-text-left">درمیانی، بڑا bundle سائز</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">سب سے بہتر کس کے لیے ہے؟</td>
                  <td className="urdu-text-left">وہ پراجیکٹس جن میں منفرد ڈیزائن اور مکمل کنٹرول درکار ہو</td>
                  <td className="urdu-text-left">بڑے انٹرپرائز ایپلیکیشنز</td>
                  <td className="urdu-text-left">وہ ایپس جنہیں Material Design کے مطابق ہونا ہے</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Teacher's Method Section */}
      <motion.section 
        className="teacher-method-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            سر علی آفتاب شیخ کا بتایا ہوا طریقہ
          </motion.h2>
          <div className="method-steps">
            
            <motion.div 
              className="step-card"
              variants={itemVariants}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                >
                  jsconfig.json بنائیں
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>jsconfig.json</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`, 'jsconfig')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">
{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice">
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              variants={itemVariants}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                >
                  vite.config.js میں path alias شامل کریں
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>vite.config.js</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`, 'vite-config')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice">
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              variants={itemVariants}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                >
                  shadcn/ui initialization
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>Terminal Command</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard('npx shadcn@latest init', 'shadcn-init')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">
{`npx shadcn@latest init`}
                    </pre>
                  </div>
                </motion.div>
                <motion.div 
                  className="info-box urdu-text-left success-box"
                  variants={itemVariants}
                >
                  <strong>انتخابات:</strong><br/>
                  - Would you like to use TypeScript? » No<br/>
                  - Which style would you like to use? » Default<br/>
                  - Which color would you like to use as the base color? » Slate<br/>
                  - Where is your global CSS file? » ./src/index.css<br/>
                  - Would you like to use CSS variables for theming? » No<br/>
                  - Where is your tailwind.config.js located? » tailwind.config.js<br/>
                  - Configure the import alias for components: » @/components<br/>
                  - Configure the import alias for utils: » @/lib/utils
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* File Structure Section */}
      <motion.section 
        className="file-structure-section card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            مکمل فائل ڈھانچہ
          </motion.h2>
          <motion.p 
            className="urdu-text" 
            style={{textAlign: 'center', marginBottom: '20px'}}
            variants={itemVariants}
          >
            آپ کا پروجیکٹ اس طرح دکھائی دینا چاہیے:
          </motion.p>
          
          <motion.div 
            className="code-block-container"
            variants={itemVariants}
          >
            <div className="code-header">
              <span>File Structure Tree</span>
              <motion.button 
                className="copy-btn pulse-button"
                onClick={() => copyToClipboard(
`my-shadcn-app/
├── node_modules/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── jsconfig.json          
├── vite.config.js         
├── tailwind.config.js
├── package.json
└── components.json        (shadcn/ui init کے بعد بنے گی)`, 'file-structure')}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Copy Structure
              </motion.button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code" style={{fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.4'}}>
{`my-shadcn-app/
├── node_modules/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── jsconfig.json          
├── vite.config.js         
├── tailwind.config.js
├── package.json
└── components.json        (shadcn/ui init کے بعد بنے گی)`}
              </pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">
                ← → Scroll to view complete structure
              </div>
            </div>
          </motion.div>

          {/* File Descriptions Table */}
          <motion.div 
            style={{marginTop: '30px'}}
            variants={itemVariants}
          >
            <motion.h3 
              className="urdu-text" 
              style={{textAlign: 'center', marginBottom: '15px'}}
              variants={itemVariants}
            >
              فائل کی تفصیلات
            </motion.h3>
            <motion.div 
              className="file-table"
              variants={itemVariants}
            >
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice">
                  ← → Scroll horizontally to view complete table
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="urdu-text-left">فائل/فولڈر</th>
                    <th className="urdu-text-left">تفصیل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>my-shadcn-app/</code></td>
                    <td className="urdu-text-left">مین پروجیکٹ ڈائریکٹری</td>
                  </tr>
                  <tr>
                    <td><code>node_modules/</code></td>
                    <td className="urdu-text-left">تمام انسٹال شدہ packages</td>
                  </tr>
                  <tr>
                    <td><code>src/</code></td>
                    <td className="urdu-text-left">سورس کوڈ فولڈر</td>
                  </tr>
                  <tr>
                    <td><code>src/components/</code></td>
                    <td className="urdu-text-left">شادن کے تمام کمپوننٹس</td>
                  </tr>
                  <tr>
                    <td><code>src/components/ui/</code></td>
                    <td className="urdu-text-left">UI کمپوننٹس</td>
                  </tr>
                  <tr>
                    <td><code>src/components/ui/button.jsx</code></td>
                    <td className="urdu-text-left">بٹن کمپوننٹ</td>
                  </tr>
                  <tr>
                    <td><code>src/App.jsx</code></td>
                    <td className="urdu-text-left">مین ایپلیکیشن فائل</td>
                  </tr>
                  <tr>
                    <td><code>src/main.jsx</code></td>
                    <td className="urdu-text-left">ایپلیکیشن انٹری پوائنٹ</td>
                  </tr>
                  <tr>
                    <td><code>src/index.css</code></td>
                    <td className="urdu-text-left">گلوبل CSS فائل</td>
                  </tr>
                  <tr>
                    <td><code>jsconfig.json</code></td>
                    <td className="urdu-text-left">JS کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>vite.config.js</code></td>
                    <td className="urdu-text-left">Vite کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>tailwind.config.js</code></td>
                    <td className="urdu-text-left">Tailwind کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>package.json</code></td>
                    <td className="urdu-text-left">پروجیکٹ کی تفصیلات</td>
                  </tr>
                  <tr>
                    <td><code>components.json</code></td>
                    <td className="urdu-text-left">(shadcn/ui init کے بعد بنے گی)</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Complete Installation Section */}
      <motion.section 
        className="complete-installation-section learning-outcomes"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            مکمل انسٹالیشن گائیڈ
          </motion.h2>
          
          <motion.div 
            className="step-card"
            variants={itemVariants}
          >
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
              >
                نیا Vite پراجیکٹ بنائیں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install`, 'step1')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice">
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
          >
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
              >
                Tailwind CSS انسٹال اور کنفیگر کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Commands</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
npx tailwindcss init -p`, 'step2')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
npx tailwindcss init -p`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice">
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-box"
                variants={itemVariants}
              >
                <motion.h4 
                  className="urdu-text-left"
                  variants={itemVariants}
                >
                  tailwind.config.js Configuration
                </motion.h4>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>JavaScript</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`, 'tailwind-config')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">
{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice">
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
          >
            <div className="step-number">3</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
              >
                index.css فائل اپ ڈیٹ کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>src/index.css</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`@import "tailwindcss";`, 'index-css')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`@import "tailwindcss";`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Usage Examples Section */}
      <motion.section 
        className="usage-section homework-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            استعمال کی مثالیں
          </motion.h2>
          
          <motion.div 
            className="step-card"
            variants={itemVariants}
          >
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
              >
                بٹن (Button) کمپوننٹ شامل کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add button', 'add-button')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npx shadcn@latest add button`}
                  </pre>
                </div>
              </motion.div>

              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>App.jsx میں استعمال</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`import { Button } from '@/components/ui/button';

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
export default App;`, 'button-usage')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`import { Button } from '@/components/ui/button';

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
export default App;`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice">
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
          >
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
              >
                Navigation Menu شامل کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add navigation-menu', 'add-nav')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npx shadcn@latest add navigation-menu`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Live Demo Section */}
      <motion.section 
        className="demo-live-section card"
        variants={cardVariants}
        style={{marginTop: '40px'}}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            This is live demo of Shadcn example
          </motion.h2>
          
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <motion.button 
              className="pulse-button"
              onClick={togglePortfolio}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: 'linear-gradient(135deg, #0078ff 0%, #00c6ff 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '8px',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'sans-serif',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0, 120, 255, 0.3)',
                margin: '20px 0'
              }}
            >
              {showPortfolio ? '❌ Close Portfolio' : '🚀 Live Example - View Portfolio'}
            </motion.button>
          </div>

          <AnimatePresence>
            {showPortfolio && (
              <motion.div 
                className="portfolio-demo"
                variants={portfolioVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '40px',
                  borderRadius: '15px',
                  marginTop: '20px',
                  textAlign: 'center'
                }}
              >
                <motion.h3 
                  style={{color: 'white', marginBottom: '20px', fontSize: '24px'}}
                  variants={itemVariants}
                >
                  🎨 My Portfolio - Built with shadcn/ui
                </motion.h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px'}}>✨ Beautiful Buttons</h4>
                    <p>shadcn/ui کے خوبصورت بٹنز</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px'}}>🎯 Responsive Design</h4>
                    <p>ہر سکرین سائز پر کامل ڈسپلے</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px'}}>⚡ Fast Performance</h4>
                    <p>تیز رفتار اور optimized</p>
                  </motion.div>
                </div>

                <motion.div 
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '25px',
                    borderRadius: '10px',
                    marginTop: '20px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 style={{color: '#ffd700', marginBottom: '15px'}}>🚀 shadcn/ui Features Used</h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: 'center'
                  }}>
                    {['Button Components', 'Card Layouts', 'Navigation', 'Typography'].map((feature, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        style={{
                          background: 'rgba(255,255,255,0.3)',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: '14px'
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.p 
                  style={{
                    marginTop: '20px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    opacity: '0.9'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  یہ portfolio shadcn/ui کے تمام components کو استعمال کرتی ہے اور دکھاتی ہے کہ کس طرح آپ professional UI بنا سکتے ہیں۔
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section 
        className="summary-section summary-card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
          >
            خلاصہ
          </motion.h2>
          <div className="summary-content2">
            <motion.p 
              className="urdu-text" 
              style={{color: '#fefefe', fontSize: '16px', lineHeight: '1.8'}}
              variants={itemVariants}
            >
              <strong>shadcn/ui</strong> ایک جدید اور طاقتور UI حل ہے جو آپ کو مکمل کنٹرول دیتا ہے۔ یہ Ant Design اور Material UI جیسی لائبریریوں کے مقابلے میں زیادہ لچکدار اور کارکردگی والا حل پیش کرتا ہے۔
            </motion.p>
            <motion.p 
              className="urdu-text" 
              style={{color: '#fefefe', fontSize: '16px', lineHeight: '1.6'}}
              variants={itemVariants}
            >
              اس گائیڈ میں آپ نے سیکھا کہ کس طرح React Vite ایپ میں shadcn/ui کو انسٹال کریں، کنفیگر کریں، اور استعمال کریں۔ اب آپ اپنی مرضی کے مطابق خوبصورت UI کمپوننٹس بنا سکتے ہیں۔
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        variants={itemVariants}
        style={{
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          padding: '40px 0',
          textAlign: 'center',
          marginTop: '50px'
        }}
      >
        <div className="container">
          <motion.p 
            style={{ marginBottom: '15px', fontSize: '16px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            ✨ Built with React & shadcn/ui
          </motion.p>
          <motion.p 
            style={{ fontSize: '14px', opacity: '0.8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            © 2024 زوہیب - تمام حقوق محفوظ ہیں
          </motion.p>
        </div>
      </motion.footer>

      {/* Copy Notification */}
      <AnimatePresence>
        {copiedCode && (
          <motion.div 
            className="copy-notification"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            ✓ {copiedCode}  کاپی ہو گیا ہے!
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default CssShadcn;