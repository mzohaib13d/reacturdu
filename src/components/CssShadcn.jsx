// CssShadcn.jsx
import { color } from 'framer-motion';
import React, { useState } from 'react';

const CssShadcn = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Inline styles for any additional styling needed
  const containerStyle = {
    minHeight: '100vh',
    direction: 'rtl',
    fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Verdana, Tahoma, sans-serif',
    background: '#fdfdfd',
    color: '#222'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center',
    marginBottom: '30px'
  };

  return (
    <div className="shadcn-guide chapter-container" style={containerStyle}>
      {/* Header Section */}
      <header className="guide-header chapter-header" style={headerStyle}>
        <div className="container">
          <h1 className="section-title2">Chapter 28 —  Complete Guide to shadcn/ui</h1>
          <p className="chapter-subtitle2">Build beautiful, accessible React components with complete control</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section lesson-section">
        <div className="container">
          <h2 className="urdu-heading">shadcn/ui کا مکمل تعارف</h2>
          <div className="content-grid">
            <div className="text-content">
              <p className="urdu-text">
                <strong>shadcn/ui</strong> ایک عام UI لائبریری نہیں ہے۔ یہ درحقیقت <em>ری اِیسبل کمپوننٹس کا ایک سیٹ</em> ہے جسے آپ اپنے پراجیکٹ میں <em>کاپی اور پیسٹ</em> کر سکتے ہیں۔ یہ <strong>Radix UI</strong> جیسے accessibility-focused پرائمٹیوز اور <strong>Tailwind CSS</strong> کے سٹائلنگ فریم ورک پر بنایا گیا ہے۔
              </p>
              
              <div className="english-quote">
                "shadcn/ui is not a traditional UI library. It's actually a collection of reusable components that you can copy and paste into your project. Built on accessibility-focused primitives like Radix UI and Tailwind CSS styling framework."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section card">
        <div className="container">
          <h2 className="section-title urdu-heading">دیگر UI لائبریریز کے مقابلے میں shadcn/ui کے فوائد</h2>
          <p className="urdu-text" style={{textAlign: 'center', marginBottom: '20px'}}>
            ذیل کے جدول میں shadcn/ui کے Ant Design اور Material UI (MUI) کے مقابلے میں اہم فوائد دیکھ سکتے ہیں۔
          </p>
          <div className="file-table">
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
          </div>
        </div>
      </section>

      {/* Teacher's Method Section */}
      <section className="teacher-method-section explanation-section">
        <div className="container">
          <h2 className="section-title urdu-heading">سر علی آفتاب شیخ کا بتایا ہوا طریقہ</h2>
          <div className="method-steps">
            
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="urdu-text-left">jsconfig.json بنائیں</h3>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>jsconfig.json</span>
                    <button 
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
                    >
                      Copy Code
                    </button>
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
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="urdu-text-left">vite.config.js میں path alias شامل کریں</h3>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>vite.config.js</span>
                    <button 
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
                    >
                      Copy Code
                    </button>
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
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="urdu-text-left">shadcn/ui initialization</h3>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>Terminal Command</span>
                    <button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard('npx shadcn@latest init', 'shadcn-init')}
                    >
                      Copy Code
                    </button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">
{`npx shadcn@latest init`}
                    </pre>
                  </div>
                </div>
                <div className="info-box urdu-text-left success-box">
                  <strong>انتخابات:</strong><br/>
                  - Would you like to use TypeScript? » No<br/>
                  - Which style would you like to use? » Default<br/>
                  - Which color would you like to use as the base color? » Slate<br/>
                  - Where is your global CSS file? » ./src/index.css<br/>
                  - Would you like to use CSS variables for theming? » No<br/>
                  - Where is your tailwind.config.js located? » tailwind.config.js<br/>
                  - Configure the import alias for components: » @/components<br/>
                  - Configure the import alias for utils: » @/lib/utils
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* File Structure Section */}
      <section className="file-structure-section card">
        <div className="container">
          <h2 className="section-title urdu-heading">مکمل فائل ڈھانچہ</h2>
          <p className="urdu-text" style={{textAlign: 'center', marginBottom: '20px'}}>
            آپ کا پروجیکٹ اس طرح دکھائی دینا چاہیے:
          </p>
          
          <div className="code-block-container">
            <div className="code-header">
              <span>File Structure Tree</span>
              <button 
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
              >
                Copy Structure
              </button>
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
          </div>

          {/* File Descriptions Table */}
          <div style={{marginTop: '30px'}}>
            <h3 className="urdu-text" style={{textAlign: 'center', marginBottom: '15px'}}>فائل کی تفصیلات</h3>
            <div className="file-table">
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
            </div>
          </div>
        </div>
      </section>

      {/* Complete Installation Section */}
      <section className="complete-installation-section learning-outcomes">
        <div className="container">
          <h2 className="section-title urdu-heading">مکمل انسٹالیشن گائیڈ</h2>
          
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="urdu-text-left">نیا Vite پراجیکٹ بنائیں</h3>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Terminal Command</span>
                  <button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install`, 'step1')}
                    >
                    Copy Code
                  </button>
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
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="urdu-text-left">Tailwind CSS انسٹال اور کنفیگر کریں</h3>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Terminal Commands</span>
                  <button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
npx tailwindcss init -p`, 'step2')}
                    >
                    Copy Code
                  </button>
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
              </div>
              
              <div className="info-box">
                <h4 className="urdu-text-left">tailwind.config.js Configuration</h4>
                <div className="code-block-container">
                  <div className="code-header">
                    <span>JavaScript</span>
                    <button 
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
                    >
                      Copy Code
                    </button>
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
                </div>
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="urdu-text-left">index.css فائل اپ ڈیٹ کریں</h3>
              <div className="code-block-container">
                <div className="code-header">
                  <span>src/index.css</span>
                  <button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`@import "tailwindcss";`, 'index-css')}
                  >
                    Copy Code
                  </button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`@import "tailwindcss";`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Usage Examples Section */}
      <section className="usage-section homework-section">
        <div className="container">
          <h2 className="section-title urdu-heading">استعمال کی مثالیں</h2>
          
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="urdu-text-left">بٹن (Button) کمپوننٹ شامل کریں</h3>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Terminal Command</span>
                  <button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add button', 'add-button')}
                  >
                    Copy Code
                  </button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npx shadcn@latest add button`}
                  </pre>
                </div>
              </div>

              <div className="code-block-container">
                <div className="code-header">
                  <span>App.jsx میں استعمال</span>
                  <button 
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
                  >
                    Copy Code
                  </button>
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
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="urdu-text-left">Navigation Menu شامل کریں</h3>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Terminal Command</span>
                  <button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add navigation-menu', 'add-nav')}
                  >
                    Copy Code
                  </button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">
{`npx shadcn@latest add navigation-menu`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Summary Section */}
      <section className="summary-section summary-card">
        <div className="container">
          <h2 className="section-title urdu-heading">خلاصہ</h2>
          <div className="summary-content2">
            <p className="urdu-text" style={{color: '#fefefe', fontSize: '16px', lineHeight: '1.8'}}>
              <strong>shadcn/ui</strong> ایک جدید اور طاقتور UI حل ہے جو آپ کو مکمل کنٹرول دیتا ہے۔ یہ Ant Design اور Material UI جیسی لائبریریوں کے مقابلے میں زیادہ لچکدار اور کارکردگی والا حل پیش کرتا ہے۔
            </p>
            <p className="urdu-text" style={{color: '#fefefe', fontSize: '16px', lineHeight: '1.6'}}>
              اس گائیڈ میں آپ نے سیکھا کہ کس طرح React Vite ایپ میں shadcn/ui کو انسٹال کریں، کنفیگر کریں، اور استعمال کریں۔ اب آپ اپنی مرضی کے مطابق خوبصورت UI کمپوننٹس بنا سکتے ہیں۔
            </p>
          </div>
        </div>
      </section>

      {/* Copy Notification */}
      {copiedCode && (
        <div className="copy-notification">
          ✓ {copiedCode}  کاپی ہو گیا ہے!
        </div>
      )}

    </div>
  );
};

export default CssShadcn;