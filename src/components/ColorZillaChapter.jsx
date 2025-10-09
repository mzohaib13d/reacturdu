import React from 'react';
import '../App.css';  

const ColorZillaChapter = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2"> 📚 چيپٹر نمبر 11 – ColorZilla - رنگوں کی دنیا کی چابی</h1>
        <p className="chapter-subtitle2">ویب سائٹس سے رنگ چننا سیکھیں</p>
      </div>

      <div className="content-section">
        {/* Introduction Section */}
        <div className="lesson-section">
          <h2 className="section-title">ColorZilla کیا ہے؟</h2>
          <p className="urdu-text">
            ColorZilla ایک بہت ہی مفید ٹول ہے جس سے آپ کسی بھی ویب سائٹ سے کوئی بھی رنگ (Color) معلوم کر سکتے ہیں۔ 
            یہ بالکل جادو کی چھڑی کی طرح کام کرتا ہے!
          </p>
        </div>

        {/* ڈاؤن لوڈ سیکشن */}
        <div className="learning-outcomes">
          <h2 className="section-title">Chrome میں ColorZilla ڈاؤن لوڈ کریں</h2>
          
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Chrome Web Store کھولیں</h3>
              <p className="urdu-text">
                اپنے لیپ ٹاپ میں <strong>Google Chrome</strong> براؤزر کھولیں۔
                Address bar میں یہ لکھیں اور <strong>Enter</strong> دبائیں:
              </p>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Command</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">chrome web store</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">ColorZilla کو تلاش کریں</h3>
              <p className="urdu-text">
                Web Store کے سرچ باکس میں لکھیں:
              </p>
              <div className="code-block-container">
                <div className="code-header">
                  <span>Search Term</span>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">ColorZilla</pre>
                </div>
              </div>
              <p className="urdu-text">
                تلاش کے نتائج میں آپ کو <strong>ColorZilla</strong> کا نام نظر آئے گا۔
              </p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Chrome میں شامل کریں</h3>
              <p className="urdu-text">
                <strong>ColorZilla</strong> پر کلک کریں اور <strong>"Add to Chrome"</strong> کے بٹن پر کلک کریں۔
              </p>
              <div className="info-box">
                <p className="urdu-text">ایک چھوٹا سا باکس کھلے گا جو پوچھے گا: <strong>"Add extension?"</strong></p>
                <p className="urdu-text"><strong>"Add extension"</strong> پر کلک کریں۔</p>
              </div>
              <div className="success-box">
                <p className="urdu-text">
                  بس! ColorZilla آپ کے Chrome میں انسٹال ہو گیا ہے۔ آپ کو ٹول بار میں ایک <strong>آئی ڈراپر</strong> کا آئیکن نظر آئے گا۔
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* استعمال کرنے کا طریقہ */}
        <div className="homework-section">
          <h2 className="section-title">ColorZilla استعمال کرنے کا طریقہ</h2>

          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">ویب سائٹ کھولیں</h3>
              <p className="urdu-text">
                جس ویب سائٹ کا رنگ آپ دیکھنا چاہتی ہیں، اسے کھولیں۔
              </p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">ColorZilla کا آئیکن کلک کریں</h3>
              <p className="urdu-text">
                Chrome کے اوپر ٹول بار میں <strong>ColorZilla کے آئیکن</strong> (آئی ڈراپر) پر کلک کریں۔
              </p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Pick Color From Page</h3>
              <p className="urdu-text">
                مینیو میں سب سے پہلی آپشن <strong>"Pick Color From Page"</strong> پر کلک کریں۔
              </p>
              <div className="info-box">
                <p className="urdu-text">اب آپ کا ماؤس کرسر <strong>+</strong> نشان میں بدل جائے گا۔</p>
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">رنگ منتخب کریں</h3>
              <p className="urdu-text">
                <strong>+</strong> نشان کو ویب سائٹ پر کسی بھی جگہ لے جائیں (جیسے سرخ پھول یا نیلے بٹن پر)۔
              </p>
              <p className="urdu-text">
                ColorZilla کا باکس آپ کو فوراً اس جگہ کا رنگ اور اس کا <strong>HEX Code</strong> دکھا دے گا۔
              </p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3 className="step-title">رنگ کوڈ کاپی کریں</h3>
              <p className="urdu-text">
                جب آپ کو مطلوبہ رنگ مل جائے تو <strong>ماؤس سے ایک کلک</strong> کریں۔
              </p>
              <div className="success-box">
                <p className="urdu-text">رنگ کا <strong>HEX Code</strong> (جیسے <code>#FF0000</code>) خود بخود کاپی ہو جائے گا۔</p>
                <p className="urdu-text">اب آپ اس کوڈ کو اپنے پروجیکٹ میں استعمال کر سکتے ہیں!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="explanation-section">
          <h2 className="section-title">مبارک ہو! 🎉</h2>
          <p className="urdu-text">
            اب آپ کسی بھی ویب سائٹ کے سارے رنگ خود معلوم کر سکتے ہیں۔ 
            یہ اتنا آسان ہے جیسے کوئی کھیل کھیلنا!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorZillaChapter;