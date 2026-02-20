  import React, { useState } from "react";
  import "../App.css";

  export default function Chapter30() {
    const [copyMessage, setCopyMessage] = useState("");

    // 🔸 کوڈ کاپی کرنے کا فنکشن
    const copyCodeToClipboard = (code) => {
      navigator.clipboard.writeText(code)
        .then(() => {
          setCopyMessage("✅ کوڈ کاپی ہو گیا ہے");
          setTimeout(() => setCopyMessage(""), 3000);
        })
        .catch(err => {
          console.error('کاپی کرنے میں خرابی:', err);
        });
    };

    // API Examples Code
    const apiExamplesCode = `// 🔍 کچھ اچھے مفت APIs

  // 1. Bored API - Random Activity
  fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => console.log(data.activity));

  // 2. Agify API - Age Prediction
  fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(data => console.log(data.age));

  // 3. Dog CEO API - Random Dog Images
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data.message));

  // 4. JokeAPI - Random Jokes
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => console.log(data.joke));`;

    // React API Component Code
    const reactApiComponentCode = `// 📁 ActivityGenerator.jsx
  import React, { useState, useEffect } from 'react';

  function ActivityGenerator() {
    const [activity, setActivity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchActivity = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        setActivity(data.activity);
      } catch (err) {
        setError('فعالیت لوڈ کرنے میں خرابی');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchActivity();
    }, []);

    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>🎲 بے کار ہو؟ کوئی فعالیۓ کریں!</h2>
        
        {loading && <p>لوڈ ہو رہا ہے...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {activity && !loading && (
          <div>
            <p><strong>آج کا کام:</strong> {activity}</p>
            <button onClick={fetchActivity}>نیا کام حاصل کریں</button>
          </div>
        )}
      </div>
    );
  }

  export default ActivityGenerator;`;

    // API Usage Steps Code
    const apiUsageStepsCode = `// عملی مثال:
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError('ڈیٹا لوڈ کرنے میں خرابی');
        setLoading(false);
      });
  }, []);`;

    return (
      <div className="chapter-container">
        <div className="chapter-header">
          <h1 className="chapter-title2">📚 چيپٹر 30: Redux Toolkit کی تیاری</h1>
          <p className="chapter-subtitle2">React کی بنیادی مہارتیں مکمل کریں</p>
        </div>

        {/* کاپی میسج */}
        {copyMessage && (
          <div className="copy-notification">
            {copyMessage}
          </div>
        )}

        <div className="content-wrapper">
          <div className="main-content">
            {/* تعارف */}
            <div className="lesson-section">
              <h2 className="section-title">🚀 Redux Toolkit سے پہلے</h2>
              <p className="urdu-text">
                Redux Toolkit ایک طرح کی "ایڈوانس پاور" ہے، اسے سیکھنے سے پہلے React کی بنیادی تلواریں مضبوط ہونی چاہئیں، ورنہ کوڈ کے جنگل میں راستہ بھٹک سکتا ہے۔
              </p>
            </div>

            {/* Redux Toolkit Introduction - Converted to Cards */}
            <div className="explanation-section">
              <h2 className="section-title">✨ Redux Toolkit - جادوئی بیگ</h2>
              
              {/* What is Redux Toolkit Card */}
              <div className="card">
                <h3>🎯 Redux Toolkit کیا ہے؟</h3>
                <p className="urdu-text">
                  ری ایکٹ میں Redux Toolkit ایک ایسا شاندار جادوئی بیگ ہے جس میں آپ کے پورے ایپ کی state کو سنبھالنے کے تمام ہتھیار پڑے ہوتے ہیں۔ پروگرامر اسے نکالتے ہیں، بٹن دباتے ہیں، اور ہو جاتا ہے "Global State Management"! ✨
                </p>
                <p className="urdu-text">
                  Redux Toolkit (جسے RTK بھی کہتے ہیں) ایک لائبریری ہے جو Redux کے استعمال کو بہت آسان، مختصر اور کم کوڈ کے ساتھ منظم کرتی ہے۔ یہ Redux کا جدید اور بہترین ورژن سمجھا جاتا ہے۔
                </p>
              </div>

              {/* Why Use Redux Toolkit Card */}
              <div className="card">
                <h3>🎯 Redux Toolkit کیوں استعمال کیا جاتا ہے؟</h3>
                <p className="urdu-text">
                  ایک بڑے React App میں:
                </p>
                <ul className="urdu-text">
                  <li>✅ ڈیٹا کئی مختلف components میں درکار ہوتا ہے</li>
                  <li>✅ ایک جگہ بدلنے سے دوسری جگہ بھی update ہونی چاہیے</li>
                  <li>✅ Components کے درمیان ضروری معلومات share کرنا ہو</li>
                </ul>
                <p className="urdu-text">
                  ایسے میں Redux Toolkit "Global Store" بناتا ہے جو پورے ایپ کے ڈیٹا کو کنٹرول کرتا ہے۔
                </p>
              </div>

              {/* Benefits Card */}
              <div className="card">
                <h3>⚙️ Redux Toolkit کے اہم فائدے</h3>
                <div className="file-table">
                  <table>
                    <thead>
                      <tr>
                        <th>فائدہ</th>
                        <th>مختصر وضاحت</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>کم کوڈ</td>
                        <td>Redux کے مقابلے میں آدھا کوڈ</td>
                      </tr>
                      <tr>
                        <td>آسان setup</td>
                        <td>Store بنانا چند لائنوں میں</td>
                      </tr>
                      <tr>
                        <td>Async logic آسان</td>
                        <td>createAsyncThunk کی بدولت API requests بہت آسان</td>
                      </tr>
                      <tr>
                        <td>Bugs کم</td>
                        <td>Immutable state خود maintain</td>
                      </tr>
                      <tr>
                        <td>Structure واضح</td>
                        <td>Code ایک ترتیب میں ہوتا ہے</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tools Card */}
              <div className="card">
                <h3>📦 Redux Toolkit کے بنیادی Tools</h3>
                <div className="file-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Tool</th>
                        <th>مقصد</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>configureStore()</code></td>
                        <td>Store آسانی سے بنانے کے لیے</td>
                      </tr>
                      <tr>
                        <td><code>createSlice()</code></td>
                        <td>State + Actions + Reducer ایک ہی جگہ</td>
                      </tr>
                      <tr>
                        <td><code>createAsyncThunk()</code></td>
                        <td>APIs چلانے اور async کام سنبھالنے کے لیے</td>
                      </tr>
                      <tr>
                        <td><code>Provider</code></td>
                        <td>Store کو پورے app میں فراہم کرنے کے لیے</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Story Example Card */}
              <div className="success-box">
                <h3>🏫 مثال سمجھنے کے لیے چھوٹی کہانی</h3>
                <p className="urdu-text">
                  آپ کا React App ایک اسکول ہے۔<br/>
                  ہر class (component) کے پاس اپنی اپنی attendance list ہے۔<br/>
                  Principal (Global Store) کہتا ہے:
                </p>
                <div className="english-quote">
                  <p className="urdu-text">
                    "سب list مجھے دو، میں سب سنبھال لوں گا!<br/>
                    جسے چاہیے ہو، میرے پاس سے لے لے!"
                  </p>
                </div>
                <p className="urdu-text">
                  Principal ہی پورے اسکول کے data کو control کرتا ہے۔<br/>
                  اسی principal کو React میں کہا جاتا ہے <strong>Redux Toolkit Store</strong> 🏫✨
                </p>
              </div>

              {/* Conclusion Card */}
              <div className="info-box">
                <h3>🎯 مختصر نتیجہ</h3>
                <p className="urdu-text">
                  React Redux Toolkit استعمال ہوتا ہے:
                </p>
                <ul className="urdu-text">
                  <li>✅ Global State کو آسانی سے manage کرنے کے لیے</li>
                  <li>✅ API data کو centrally handle کرنے کے لیے</li>
                  <li>✅ App کو منظم اور scalable بنانے کے لیے</li>
                </ul>
              </div>
            </div>

            {/* Skills Checklist - Converted to Cards */}
            <div className="learning-outcomes">
              <h2 className="section-title">✅ Redux Toolkit سے پہلے سیکھنے والی React Skills</h2>
              
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Functional Components + JSX</h3>
                  <p className="urdu-text">
                    ہر component کے دل و دماغ کو سمجھنا ضروری۔ Props کیا ہیں؟ Component reuse کیسے ہوتا ہے؟
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">useState() — Local State</h3>
                  <p className="urdu-text">
                    Button click پر UI change، Form data handle، Toggle show/hide، Counter وغیرہ۔
                    <strong> Redux تب آتا ہے جب local state کم پڑ جائے</strong>
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Props + Props Drilling کا مسئلہ</h3>
                  <p className="urdu-text">
                    Parent سے child… پھر اس کے آگے… اس "Drilling Pain" کو سمجھیں گے تو Redux کی قدر جاگے گی! 😄
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">useEffect() — Side Effects</h3>
                  <p className="urdu-text">
                    ⏳ API calls، ⏱ Live updates: clock، ♻ Component update cycle۔
                    <strong> Redux Toolkit میں async logic آتا ہے =&gt; اس کی بنیاد useEffect ہے</strong>
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3 className="step-title">Context API (useContext)</h3>
                  <p className="urdu-text">
                    Global data share کرنے کی ابتدائی جھلک۔ Light/Dark theme مثال بہترین ہے۔
                    <strong> یہ سکھاتا ہے کہ global state کی ضرورت کیوں پڑتی ہے</strong>
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3 className="step-title">React Project Structure</h3>
                  <p className="urdu-text">
                    Folders properly manage، Pages + Components + Utils۔
                    <strong> Redux بڑے apps میں organization کے لیے آتا ہے</strong>
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h3 className="step-title">API fetching with async/await</h3>
                  <p className="urdu-text">
                    Fetching + Loading + Error handle۔ OpenWeatherMap والا کام… آپ پہلے سے اچھا کر رہے ہیں 😎
                    <strong> Redux Toolkit createAsyncThunk میں یہی ہوتا ہے</strong>
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">8</div>
                <div className="step-content">
                  <h3 className="step-title">React DevTools اور Debugging Sense</h3>
                  <p className="urdu-text">
                    State کہاں گئی… کیوں گئی… کیسے گئی 😅
                    <strong> یہ skills Redux debugging میں مدد کرتی ہیں</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Skills */}
            <div className="explanation-section">
              <h2 className="section-title">🎯 Optional مگر فائدہ مند</h2>
              <div className="file-table">
                <table>
                  <thead>
                    <tr>
                      <th>Topic</th>
                      <th>فائدہ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Custom Hooks</td>
                      <td>Reusable logic</td>
                    </tr>
                    <tr>
                      <td>React Router</td>
                      <td>Multi-page apps میں global state کی ضرورت</td>
                    </tr>
                    <tr>
                      <td>Form Handling</td>
                      <td>State + Validation کے مسائل سمجھ آتے ہیں</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Checklist */}
            <div className="homework-section">
              <h2 className="section-title">📌 Quick Checklist</h2>
              <p className="urdu-text">
                اگر یہ آتے ہیں تو آپ Redux Toolkit کے لیے تیار ہیں ✅
              </p>
              
              <div className="file-table">
                <table>
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>useState</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>props drilling سمجھ</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>APIs fetching</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>useEffect</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>Context API</td>
                      <td>✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="urdu-text" style={{marginTop: '20px', textAlign: 'center', fontWeight: 'bold'}}>
                آپ کی progress دیکھ کر تو لگتا ہے آپ زیادہ تر topics مکمل کر چکے!<br/>
                صرف تھوڑا سا polishing چاہیے Context، props drilling اور project structure پر… پھر بس Redux Toolkit کی دنیا میں جھپّا مار کر کود جائیں! 🚀
              </p>
            </div>

            {/* Free APIs Section */}
            <div className="demo-section">
              <h2 className="section-title">🔍 مفت APIs کے ساتھ مشق کریں</h2>
              
              {/* Free APIs Card */}
              <div className="card">
                <h3>🌐 مفید مفت APIs کی فہرست</h3>
                <div className="file-table">
                  <table>
                    <thead>
                      <tr>
                        <th>API نام</th>
                        <th>تفصیل</th>
                        <th>URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bored API</td>
                        <td>Random activities تجویز کرتا ہے</td>
                        <td><code>boredapi.com</code></td>
                      </tr>
                      <tr>
                        <td>Agify.io</td>
                        <td>نام سے عمر کا تخمینہ</td>
                        <td><code>agify.io</code></td>
                      </tr>
                      <tr>
                        <td>Dog CEO</td>
                        <td>کتوں کی تصاویر</td>
                        <td><code>dog.ceo</code></td>
                      </tr>
                      <tr>
                        <td>JokeAPI</td>
                        <td>Random jokes</td>
                        <td><code>jokeapi.dev</code></td>
                      </tr>
                      <tr>
                        <td>Public APIs</td>
                        <td>مفت APIs کی بڑی فہرست</td>
                        <td><code>github.com/public-apis</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* API Usage Steps Card */}
              <div className="card">
                <h3>🧪 API استعمال کرنے کے مراحل</h3>
                <div className="step-card">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>منتخب کریں ایک API</h4>
                    <p className="urdu-text">ایسا جس کی سمجھ آپ کو ہو</p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>React component بنائیں</h4>
                    <p className="urdu-text">useEffect کے اندر fetch استعمال کریں</p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>useState سے ڈیٹا محفوظ کریں</h4>
                    <p className="urdu-text">API response کو state میں store کریں</p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Loading اور Error handling</h4>
                    <p className="urdu-text">User experience کو بہتر بنائیں</p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>ڈیٹا کو UI میں دکھائیں</h4>
                    <p className="urdu-text">State کو component میں render کریں</p>
                  </div>
                </div>
                
                {/* API Usage Steps Code */}
                <div className="code-block-container" style={{marginTop: '20px'}}>
                  <div className="code-header">
                    <span>API Usage Steps Code</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyCodeToClipboard(apiUsageStepsCode)}
                    >
                      کاپی کریں
                    </button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code">{apiUsageStepsCode}</pre>
                  </div>
                </div>
              </div>

              {/* API Examples Code */}
              <div className="code-block-container">
                <div className="code-header">
                  <span>Free APIs Examples</span>
                  <button 
                    className="copy-btn"
                    onClick={() => copyCodeToClipboard(apiExamplesCode)}
                  >
                    کاپی کریں
                  </button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">{apiExamplesCode}</pre>
                </div>
              </div>

              {/* React API Component */}
              <div className="code-block-container" style={{marginTop: '20px'}}>
                <div className="code-header">
                  <span>React API Component Example</span>
                  <button 
                    className="copy-btn"
                    onClick={() => copyCodeToClipboard(reactApiComponentCode)}
                  >
                    کاپی کریں
                  </button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code">{reactApiComponentCode}</pre>
                </div>
              </div>
            </div>

            {/* Final Conclusion */}
            <div className="explanation-section">
              <h2 className="section-title">🎉 تیاری مکمل!</h2>
              <p className="urdu-text">
                اب آپ Redux Toolkit سیکھنے کے لیے مکمل طور پر تیار ہیں۔ ان بنیادی مہارتوں پر مضبوط گرفت کے ساتھ، آپ Redux Toolkit کو آسانی سے سمجھ سکیں گے اور اسے اپنے پروجیکٹس میں مؤثر طریقے سے استعمال کر سکیں گے۔
              </p>
              <p className="urdu-text" style={{textAlign: 'center', fontWeight: 'bold', color: '#0078ff'}}>
                اگلے چيپٹر میں ہم Redux Toolkit کی عملی دنیا میں داخل ہوں گے! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }