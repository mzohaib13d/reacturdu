import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Chapter37() {
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

  // SQL Code
  const sqlCode = `CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  // Backend server.js
  const serverCode = `const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mynotesdb',
  password: 'yourpassword',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('ڈیٹابیس سے کنکشن نہیں ہو سکا:', err);
  } else {
    console.log('✅ PostgreSQL ڈیٹابیس سے کامیابی سے جڑ گئے ہیں!');
    release();
  }
});

app.get('/api/notes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM notes ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'سرور میں مسئلہ' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await pool.query(
      'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'نوٹ محفوظ نہیں ہو سکا' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await pool.query(
      'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'نوٹ اپڈیٹ نہیں ہو سکا' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM notes WHERE id = $1', [id]);
    res.json({ message: 'نوٹ کامیابی سے حذف ہو گیا' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'نوٹ حذف نہیں ہو سکا' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(\`🚀 بیک اینڈ سرور پورٹ \${PORT} پر چل رہا ہے\`);
});`;

  // App.jsx code
  const appJsxCode = `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('نوٹس لانے میں مسئلہ:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      if (editingId) {
        await axios.put(\`/api/notes/\${editingId}\`, { title, content });
        setEditingId(null);
      } else {
        await axios.post('/api/notes', { title, content });
      }
      setTitle('');
      setContent('');
      fetchNotes();
    } catch (error) {
      console.error('نوٹ محفوظ کرنے میں مسئلہ:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('کیا آپ واقعی یہ نوٹ حذف کرنا چاہتے ہیں؟')) {
      try {
        await axios.delete(\`/api/notes/\${id}\`);
        fetchNotes();
      } catch (error) {
        console.error('نوٹ حذف کرنے میں مسئلہ:', error);
      }
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  return (
    <div className="app-container">
      <h1>📝 میری ذاتی نوٹ بک</h1>
      
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="نوٹ کا عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="نوٹ کی تفصیل"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="4"
        />
        <button type="submit">
          {editingId ? 'نوٹ اپڈیٹ کریں' : 'نوٹ محفوظ کریں'}
        </button>
        {editingId && (
          <button 
            type="button" 
            onClick={() => {
              setTitle('');
              setContent('');
              setEditingId(null);
            }}
            className="cancel-btn"
          >
            رد کریں
          </button>
        )}
      </form>

      <div className="notes-list">
        <h2>آپ کے نوٹس ({notes.length})</h2>
        {notes.length === 0 ? (
          <p>کوئی نوٹ نہیں ہے۔ پہلا نوٹ لکھیں!</p>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note.id} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className="note-meta">
                  <small>
                    {new Date(note.created_at).toLocaleDateString('ur-PK')}
                  </small>
                </div>
                <div className="note-actions">
                  <button 
                    onClick={() => handleEdit(note)}
                    className="edit-btn"
                  >
                    تبدیلی
                  </button>
                  <button 
                    onClick={() => handleDelete(note.id)}
                    className="delete-btn"
                  >
                    حذف کریں
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;`;

  // App.css code
  const appCssCode = `.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.note-form {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.note-form input,
.note-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
}

.note-form textarea {
  resize: vertical;
  font-family: inherit;
}

.note-form button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background 0.3s;
}

.note-form button:hover {
  background-color: #2980b9;
}

.cancel-btn {
  background-color: #95a5a6 !important;
}

.cancel-btn:hover {
  background-color: #7f8c8d !important;
}

.notes-list h2 {
  color: #34495e;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.note-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.note-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.note-card h3 {
  margin-top: 0;
  color: #2c3e50;
  border-bottom: 1px dashed #eee;
  padding-bottom: 10px;
}

.note-card p {
  color: #555;
  line-height: 1.6;
  min-height: 80px;
}

.note-meta {
  margin-top: 15px;
  color: #888;
  font-size: 14px;
}

.note-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.edit-btn, .delete-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
}

.edit-btn {
  background-color: #2ecc71;
  color: white;
}

.edit-btn:hover {
  background-color: #27ae60;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

.delete-btn:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .notes-grid {
    grid-template-columns: 1fr;
  }
  
  .app-container {
    padding: 15px;
  }
}`;

  // Axios interceptor code
  const axiosInterceptorCode = `import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;`;

  // Installation commands
  const backendInstallCode = `mkdir notes-backend
cd notes-backend
npm init -y
npm install express pg cors
npm install --save-dev nodemon`;

  const frontendInstallCode = `npx create-react-app notes-frontend
cd notes-frontend
npm install axios`;

  const packageJsonCode = `"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`;

  return (
    <div className="chapter-container">
      <motion.header
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
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
            }}
          >
            باب 37 — React میں Axios کے ذریعے PostgreSQL ڈیٹابیس کو کنٹرول کریں
          </motion.h1>
          <motion.p
            className="chapter-subtitle2"
            variants={itemVariants}
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
            }}
          >
            (ذاتی نوٹس ایپ — Full Stack CRUD Application) <br />
            "React + Node.js + PostgreSQL + Axios"
          </motion.p>
        </div>
      </motion.header>

      <div className="card section-card">
        <h3 className="section-title">موضوع: 📝 ذاتی نوٹس ایپ (Full Stack CRUD)</h3>
        <h4 className="chapter-subtitle">زبان: آسان اردو + کوڈ کے ساتھ وضاحت</h4>
        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📊 سبق 37.1: ہمارا مقصد اور تیاری</h4>
        <p className="section-text urdu-text">
          <strong>ہدف:</strong> اس باب میں ہم ایک "ذاتی نوٹس ایپ" بنائیں گے جہاں:
        </p>
        <ul className="section-text urdu-text">
          <li>✅ React فرنٹ اینڈ صارف کو نوٹ لکھنے، دیکھنے، تبدیل کرنے اور حذف کرنے کا انٹرفیس دے گا۔</li>
          <li>✅ Axios لائبریری React کو Node.js بیک اینڈ سے جوڑے گی۔</li>
          <li>✅ Node.js + Express بیک اینڈ PostgreSQL ڈیٹابیس میں ڈیٹا بھیجے گا/لے گا۔</li>
        </ul>

        <div className="info-box">
          <p className="section-text urdu-text">
            <strong>خاکہ:</strong><br />
            صارف (User) → React ایپ → Axios → Node.js + Express API → PostgreSQL ڈیٹابیس
          </p>
        </div>

        <p className="section-text urdu-text">
          <strong>ضروری تیاری:</strong> اسے چلانے سے پہلے آپ کے کمپیوٹر پر مندرجہ ذیل انسٹال ہونے چاہئیں:
        </p>
        <ul className="section-text urdu-text">
          <li>🔹 Node.js اور npm</li>
          <li>🔹 PostgreSQL (چل رہا ہو)</li>
          <li>🔹 ایک کوڈ ایڈیٹر (VS Code)</li>
        </ul>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">💾 سبق 37.2: ڈیٹابیس ٹیبل تیار کرنا (PostgreSQL میں)</h4>
        <p className="section-text urdu-text">
          سب سے پہلے اپنی PostgreSQL ڈیٹابیس (مثلاً mynotesdb) میں notes نامی ٹیبل بنائیں۔
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>PostgreSQL SQL Command</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(sqlCode, "SQL Table")}
            >
              {copiedCode === "SQL Table" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{sqlCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>وضاحت:</strong>
        </p>
        <ul className="section-text urdu-text">
          <li><strong>id:</strong> ہر نوٹ کا خودکار نمبر (خود بخود بڑھتا ہے)</li>
          <li><strong>title:</strong> نوٹ کا عنوان (زیادہ سے زیادہ 100 حروف)</li>
          <li><strong>content:</strong> نوٹ کی تفصیل</li>
          <li><strong>created_at:</strong> نوٹ بننے کی تاریخ و وقت (اپنے آپ ڈیفالٹ ہو جائے گا)</li>
        </ul>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚙️ سبق 37.3: Node.js بیک اینڈ API بنانا</h4>
        
        <p className="section-text urdu-text">
          <strong>مرحلہ 1:</strong> بیک اینڈ فولڈر بنا کر پیکیجز انسٹال کریں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Backend Setup Commands</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(backendInstallCode, "Backend Install")}
            >
              {copiedCode === "Backend Install" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{backendInstallCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 2:</strong> package.json میں اسکرپٹ شامل کریں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>package.json scripts</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(packageJsonCode, "Package Scripts")}
            >
              {copiedCode === "Package Scripts" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{packageJsonCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 3:</strong> server.js فائل بنائیں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>server.js</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(serverCode, "server.js")}
            >
              {copiedCode === "server.js" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{serverCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <div className="info-box">
          <p className="section-text urdu-text">
            <strong>⚠️ نوٹ:</strong> اپنے PostgreSQL یوزرنیم اور پاسورڈ server.js میں تبدیل کرنا نہ بھولیں!
          </p>
        </div>

        <p className="section-text urdu-text">
          <strong>بیک اینڈ ٹیسٹ کریں:</strong>
        </p>
        <ul className="section-text urdu-text">
          <li>کمانڈ لائن میں <code>npm run dev</code> چلائیں</li>
          <li>پوسٹمین یا براؤزر میں http://localhost:5000/api/notes کھولیں</li>
          <li>آپ کو خالی ارے [] نظر آنا چاہیے (کیونکہ ڈیٹابیس خالی ہے)</li>
        </ul>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">⚛️ سبق 37.4: React فرنٹ اینڈ بنانا اور Axios سیٹ اپ کرنا</h4>
        
        <p className="section-text urdu-text">
          <strong>مرحلہ 1:</strong> React ایپ بنائیں اور Axios انسٹال کریں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Frontend Setup Commands</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(frontendInstallCode, "Frontend Install")}
            >
              {copiedCode === "Frontend Install" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{frontendInstallCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 2:</strong> App.jsx میں کوڈ:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>src/App.jsx</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(appJsxCode, "App.jsx")}
            >
              {copiedCode === "App.jsx" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{appJsxCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 3:</strong> App.css میں اسٹائل:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>src/App.css</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(appCssCode, "App.css")}
            >
              {copiedCode === "App.css" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{appCssCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🚀 سبق 37.5: ایپلیکیشن چلائیں اور ٹیسٹ کریں</h4>
        
        <p className="section-text urdu-text">
          <strong>مرحلہ 1:</strong> پہلے بیک اینڈ سرور شروع کریں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Start Backend</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">cd notes-backend
npm run dev</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 2:</strong> پھر React فرنٹ اینڈ شروع کریں (نئی ٹرمینل میں):
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>Start Frontend</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">cd notes-frontend
npm start</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          <strong>مرحلہ 3:</strong> براؤزر میں http://localhost:3000 کھولیں۔
        </p>

        <p className="section-text urdu-text">
          <strong>ٹیسٹ کرنے کے مراحل:</strong>
        </p>
        <ul className="section-text urdu-text">
          <li><strong>نوٹ بنائیں:</strong> عنوان اور تفصیل لکھ کر "نوٹ محفوظ کریں" بٹن دبائیں</li>
          <li><strong>نوٹس دیکھیں:</strong> نیچے آپ کا نوٹ کارڈ کی شکل میں نظر آئے گا</li>
          <li><strong>نوٹ تبدیلی کریں:</strong> کسی نوٹ پر "تبدیلی" بٹن دبائیں، فارم میں آجائے گا، تبدیلی کر کے "نوٹ اپڈیٹ کریں" دبائیں</li>
          <li><strong>نوٹ حذف کریں:</strong> کسی نوٹ پر "حذف کریں" دبائیں اور تصدیق کریں</li>
        </ul>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🔄 سبق 37.6: Axios انٹرسپٹرز کا عملی استعمال</h4>
        
        <p className="section-text urdu-text">
          ایڈوانسڈ فیچر کے طور پر، آپ ایک علیحدہ فائل میں Axios انٹرسپٹر سیٹ کر سکتے ہیں۔
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>src/api/axiosConfig.js</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(axiosInterceptorCode, "Axios Config")}
            >
              {copiedCode === "Axios Config" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
            </button>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">{axiosInterceptorCode}</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <p className="section-text urdu-text">
          اب App.js میں اسے استعمال کریں:
        </p>
        
        <div className="code-section">
          <div className="code-header">
            <span>App.jsx with Axios Instance</span>
          </div>
          <div className="code-block-container">
            <div className="code-block-wrapper">
              <pre className="english-code">// import axios from 'axios'; // پرانا
import axiosInstance from './api/axiosConfig'; // نیا

// پھر ہر جگہ axios کی جگہ axiosInstance استعمال کریں
const response = await axiosInstance.get('/api/notes');</pre>
            </div>
          </div>
          <div className="code-scroll-notice-parent">
            <div className="code-scroll-notice">← → سکرول کریں</div>
          </div>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">📋 خلاصہ (Summary)</h4>
        
        <div className="success-box">
          <p className="section-text urdu-text">
            <strong>آپ نے جو سیکھا:</strong>
          </p>
          <ul className="section-text urdu-text">
            <li>✅ PostgreSQL میں ڈیٹا ٹیبل ڈیزائن کرنا</li>
            <li>✅ Node.js + Express میں RESTful API بنانا</li>
            <li>✅ React میں Axios انسٹال اور کنفیگر کرنا</li>
            <li>✅ CRUD آپریشنز (Create, Read, Update, Delete) کا عملی نفاذ</li>
            <li>✅ Axios انٹرسپٹرز کی طاقت سمجھنا</li>
          </ul>
        </div>

        <hr className="styled-hr" />

        <h4 className="chapter-subtitle">🎯 اگلے قدم کے لیے مشورے</h4>
        
        <ul className="section-text urdu-text">
          <li><strong>غلطی ہینڈلنگ بہتر بنائیں:</strong> صارف کو بہتر پیغامات دکھائیں</li>
          <li><strong>لوڈنگ اسٹیٹ شامل کریں:</strong> ڈیٹا لود ہو رہا ہو تو سپنر دکھائیں</li>
          <li><strong>سرچ/فلٹر شامل کریں:</strong> نوٹس تلاش کرنے کا فیچر</li>
          <li><strong>قسمت (Categories) یا ٹیگز:</strong> نوٹس کو زمروں میں تقسیم کریں</li>
        </ul>

        <div className="info-box">
          <p className="section-text urdu-text">
            <strong>کامیابی کی پیمائش:</strong> اگر آپ یہ سبق مکمل کرنے کے بعد اپنی نوٹ بک میں:
          </p>
          <ul className="section-text urdu-text">
            <li>نئے نوٹ شامل کر سکتے ہیں ✅</li>
            <li>پرانے نوٹس دیکھ سکتے ہیں ✅</li>
            <li>نوٹس میں ترمیم کر سکتے ہیں ✅</li>
            <li>نوٹس حذف کر سکتے ہیں ✅</li>
          </ul>
          <p className="section-text urdu-text">
            تو مبارک ہو! 🎉 آپ نے React + Axios + PostgreSQL کی مکمل اسٹیک ڈویلپمنٹ سیکھ لی ہے!
          </p>
        </div>
      </div>

      {/* Flying confirmation message */}
      <AnimatePresence>
        {copiedCode && (
          <motion.div
            className="copy-notification"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            ✅ {copiedCode} کوڈ کاپی ہوگیا!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Chapter37;