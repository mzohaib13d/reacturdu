import React from 'react';
import '../App.css'; // Make sure to import your CSS

function Chapter1() {
  return (
    <div className="chapter-container">
      {/* Chapter Header */}
      <div className="chapter-header urdu-text">
        <div className="chapter-header-top">
          <div className="chapter-number-large">Chapter 1</div>
          <div className="chapter-duration">
            <span className="react-logo">⏱️</span> تخمینی وقت: 15 منٹ
          </div>
        </div>
        <h1 className="chapter-title-main urdu-heading">Chapter 1. React کیا ہے؟ — تعارف</h1>
      </div>

      {/* Learning Outcomes */}
      <div className="learning-outcomes urdu-text">
        <h3 className="chapter-subtitle">📚 اس باب میں آپ سیکھیں گے:</h3>
        <ul>
          <li>React کیا ہے اور اس کا مقصد کیا ہے؟</li>
          <li>Virtual DOM کا تصور</li>
          <li>Components اور JSX کا تعارف</li>
          <li>React کے فوائد اور استعمال</li>
          <li>React کا ماحولیاتی نظام (Ecosystem)</li>
        </ul>
      </div>

      {/* Main Content Card */}
      <div className="card section-card">
        <h3 className="section-title">React کا تعارف</h3>
        
        <div className="section-text urdu-text">
          <p>
            <strong>React</strong> ایک JavaScript لائبریری ہے جو یوزر انٹرفیس (UI) بنانے کے لیے
            استعمال ہوتی ہے، خصوصاً ویب ایپلیکیشنز کے لیے۔
          </p>
          
          <p>
            یہ <span className="color-blue">Facebook</span> نے بنائی، اور اس کا مقصد یہ ہے کہ آپ UI کو چھوٹے، قابلِ
            دوبارہ استعمال ہونے والے <strong>Components</strong> کی شکل میں بنائیں۔
          </p>
          
          <p>
            React <span className="coding">Virtual DOM</span> کا استعمال کرتا ہے تاکہ UI کی تبدیلیاں مؤثر انداز میں
            کی جائیں، یعنی صرف وہ حصے دوبارہ رینڈر ہوں جو تبدیل ہوئے ہیں۔
          </p>
          
          <p>
            React میں آپ <span className="coding">JSX</span> استعمال کرتے ہیں (جو JS + HTML مشابہت ہے) تاکہ آپ UI کو
            JavaScript کوڈ کے اندر لکھ سکیں۔
          </p>
          
          <p>
            React ایک <em>view لائبریری</em> ہے — یہ پورے اسٹیک کا framework نہیں ہے، یعنی
            routing، state management، data fetching وغیرہ کے لیے آپ کو دوسرے
            لائبریریاں استعمال کرنی ہوں گی (مثلاً React Router، Redux / Zustand /
            React Query وغیرہ)۔
          </p>
        </div>

        {/* Code Example */}
        <div className="code-section">
          <div className="code-header">
            <span>مثال: سادہ React Component</span>
            <button className="copy-btn">کوڈ کاپی کریں</button>
          </div>
          <pre className="english-code">
{`// HelloWorld.jsx
import React from 'react';

function HelloWorld() {
  return (
    <div className="greeting">
      <h1>Hello, React!</h1>
      <p>یہ میرا پہلا React component ہے۔</p>
    </div>
  );
}

export default HelloWorld;`}
          </pre>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="explanation-section urdu-text">
          <h4>🌟 کلیدی تصورات:</h4>
          <div className="explanation-box">
            <ul>
              <li><strong>Components:</strong> UI کے چھوٹے، خودمختار حصے</li>
              <li><strong>JSX:</strong> JavaScript XML - HTML کی طرح کی syntax</li>
              <li><strong>Virtual DOM:</strong> اصل DOM کا ہلکا ورژن جو موثر اپڈیٹس کی اجازت دیتا ہے</li>
              <li><strong>State:</strong> Component کا ڈیٹا جو وقت کے ساتھ بدل سکتا ہے</li>
              <li><strong>Props:</strong> والد سے بچے کے Components تک ڈیٹا پاس کرنا</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="lesson-section urdu-text">
          <h4>✅ React کے فوائد:</h4>
          <div className="methods-grid">
            <div className="method-card">
              <h3>✨ ری-یوز ایبل</h3>
              <p>Components کو بار بار استعمال کیا جا سکتا ہے</p>
            </div>
            <div className="method-card">
              <h3>⚡ تیز رفتار</h3>
              <p>Virtual DOM کی وجہ سے بہترین پرفارمنس</p>
            </div>
            <div className="method-card">
              <h3>🎯 Declarative</h3>
              <p>UI کا state بیان کریں، React باقی سنبھال لیتا ہے</p>
            </div>
            <div className="method-card">
              <h3>📦 بڑی کمیونٹی</h3>
              <p>وسیع ماحولیاتی نظام اور سپورٹ</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="file-table">
          <h4 className="chapter-subtitle2">📊 React بمقابلہ دوسرے Frameworks</h4>
          <table>
            <thead>
              <tr>
                <th>خصوصیت</th>
                <th>React</th>
                <th>Angular</th>
                <th>Vue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>نوعیت</strong></td>
                <td>لائبریری</td>
                <td>مکمل Framework</td>
                <td>Progressive Framework</td>
              </tr>
              <tr>
                <td><strong>زبان</strong></td>
                <td>JavaScript/JSX</td>
                <td>TypeScript</td>
                <td>JavaScript/HTML</td>
              </tr>
              <tr>
                <td><strong>سیکھنے میں آسانی</strong></td>
                <td>درمیانی</td>
                <td>مشکل</td>
                <td>آسان</td>
              </tr>
              <tr>
                <td><strong>مائگریشن</strong></td>
                <td>بہتر</td>
                <td>مشکل</td>
                <td>آسان</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Homework Section */}
        <div className="homework-section urdu-text">
          <h4>📝 ہوم ورک:</h4>
          <ol>
            <li>React کی آفیشل ویب سائٹ <a href="https://react.dev" target="_blank" rel="noopener noreferrer">react.dev</a> وزٹ کریں</li>
            <li>Node.js اور npm انسٹال کریں</li>
            <li>Create React App کا استعمال کرتے ہوئے ایک نئی ایپ بنائیں</li>
            <li>اوپر دیے گئے HelloWorld component کو اپنی ایپ میں شامل کریں</li>
            <li>ایک سادہ Component بنائیں جو آپ کا نام اور تعارف ظاہر کرے</li>
          </ol>
        </div>

        {/* Summary */}
        <div className="summary-card">
          <h3 className="section-title">📖 خلاصہ</h3>
          <div className="summary-content2">
            <p>React ایک طاقتور JavaScript لائبریری ہے جو UI development کو آسان اور منظم بناتی ہے۔</p>
            <p>یہ Components پر مبنی ہے، JSX استعمال کرتی ہے، اور Virtual DOM کی طاقت سے تیز رفتار ایپلیکیشنز بناتی ہے۔</p>
            <p>React سیکھنا جدید ویب ڈویلپمنٹ کے لیے ایک اہم قدم ہے۔</p>
          </div>
          <div className="summary-points">
            <div className="summary-item">
              <div className="summary-icon">📚</div>
              <div>لائبریری، فریم ورک نہیں</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">⚛️</div>
              <div>Components پر مبنی</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <div>Virtual DOM کا استعمال</div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">💼</div>
              <div>وسیع Ecosystem</div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Chapter1;