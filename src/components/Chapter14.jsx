import React, { useState, useMemo, useCallback, useEffect } from "react";
import '../App.css';
import '../App9211.css';

// 🧮 useMemo Example Component - Heavy Calculation
const HeavyCalculationDemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  const [calculationTime, setCalculationTime] = useState(0);

  // 🎯 useMemo کا مطلب: result کو یاد رکھنا جب تک number نہیں بدلتا
  const doubleNumber = useMemo(() => {
    console.log("بھاری حساب دوبارہ چل رہا ہے...");
    const startTime = performance.now();
    
    // فرضی بھاری calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    
    const endTime = performance.now();
    setCalculationTime(endTime - startTime);
    
    return number * 2;
  }, [number]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyle = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    margin: "15px 0",
    border: `2px solid ${theme === "light" ? "#0078ff" : "#00c6ff"}`
  };

  return (
    <div className="demo-section">
      <h3>🧮 useMemo Hook - بھاری Calculation</h3>
      <p className="urdu-text">جب number بدلتا ہے تو calculation دوبارہ چلتا ہے، theme بدلنے پر نہیں</p>

      <div className="demo-card">
        <div className="calculation-demo">
          <div className="input-group">
            <label>نمبر درج کریں:</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
              className="number-input"
            />
          </div>
          
          <div className="result-display">
            <h4>نتیجہ: {doubleNumber}</h4>
            <p className="calculation-time">
              حساب کا وقت: {calculationTime.toFixed(2)} ms
            </p>
          </div>

          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? "🌙 ڈارک تھیم" : "☀️ لائٹ تھیم"}
          </button>

          <div style={themeStyle}>
            <p>
              <strong>useMemo کا فائدہ:</strong> 
              تھیم بدلنے سے calculation دوبارہ نہیں چلے گا، صرف number بدلنے پر چلے گا ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ⚙️ useCallback Example Component
const CallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  // 🎯 useCallback کا مطلب: function کو یاد رکھنا
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Without useCallback - ہر render پر نیا function
  const incrementWithoutCallback = () => {
    setCount((prev) => prev + 1);
  };

  // Child component کو render count دکھانے کے لیے
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [increment, incrementWithoutCallback]);

  return (
    <div className="demo-section">
      <h3>⚙️ useCallback Hook - Function Memorization</h3>
      <p className="urdu-text">useCallback function کو یاد رکھتا ہے تاکہ unnecessary re-renders کم ہوں</p>

      <div className="demo-card">
        <div className="callback-demo">
          <div className="counter-display">
            <h2>گنتی: {count}</h2>
            <p className="render-info">کمپوننٹ re-render ہوا: {renderCount} بار</p>
          </div>

          <div className="button-group">
            <div className="callback-section">
              <h4>🎯 useCallback کے ساتھ</h4>
              <ChildButton onClick={increment} type="callback" />
              <p className="demo-note">
                Function ہر render پر نہیں بدلتا - بہتر performance
              </p>
            </div>

            <div className="no-callback-section">
              <h4>❌ useCallback کے بغیر</h4>
              <ChildButton onClick={incrementWithoutCallback} type="no-callback" />
              <p className="demo-note">
                Function ہر render پر نیا بنتا ہے - زیادہ re-renders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Child Component for useCallback demo
const ChildButton = React.memo(({ onClick, type }) => {
  const [childRenderCount, setChildRenderCount] = useState(0);

  useEffect(() => {
    setChildRenderCount(prev => prev + 1);
  });

  return (
    <div className={`child-button ${type}`}>
      <button onClick={onClick} className="child-btn">
        {type === "callback" ? "🎯 useCallback والا بٹن" : "❌ بغیر useCallback والا بٹن"}
      </button>
      <p className="child-render-count">
        Child render ہوا: {childRenderCount} بار
      </p>
    </div>
  );
});

// 🎯 Combined Example - Product List with Search and Filter
const ProductListDemo = () => {
  const [products] = useState([
    { id: 1, name: "لیپ ٹاپ", price: 50000, category: "الیکٹرانکس" },
    { id: 2, name: "موبائل", price: 25000, category: "الیکٹرانکس" },
    { id: 3, name: "کتاب", price: 500, category: "تعلیم" },
    { id: 4, name: "قلم", price: 50, category: "تعلیم" },
    { id: 5, name: "کرسی", price: 3000, category: "فرنیچر" },
    { id: 6, name: "میز", price: 5000, category: "فرنیچر" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("تمام");
  const [sortBy, setSortBy] = useState("name");

  // 🎯 useMemo for filtered and sorted products
  const filteredProducts = useMemo(() => {
    console.log("🔍 Products filter ہو رہے ہیں...");
    
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "تمام") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

    return filtered;
  }, [products, searchTerm, category, sortBy]);

  // 🎯 useMemo for expensive calculations
  const statistics = useMemo(() => {
    console.log("📊 Statistics calculate ہو رہے ہیں...");
    
    const totalProducts = filteredProducts.length;
    const totalValue = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalProducts > 0 ? totalValue / totalProducts : 0;
    const categories = [...new Set(filteredProducts.map(p => p.category))];

    return {
      totalProducts,
      totalValue,
      averagePrice: averagePrice.toFixed(2),
      categories: categories.length
    };
  }, [filteredProducts]);

  // 🎯 useCallback for event handlers
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSortBy(newSort);
  }, []);

  return (
    <div className="demo-section">
      <h3>🛍️ Product List - useMemo + useCallback</h3>
      <p className="urdu-text">دونوں hooks کا ایک ساتھ عملی استعمال</p>

      <div className="demo-card">
        <div className="product-list-demo">
          {/* Controls */}
          <div className="controls">
            <div className="control-group">
              <label>تلاش کریں:</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="پروڈکٹ کا نام لکھیں..."
                className="search-input"
              />
            </div>

            <div className="control-group">
              <label>کیٹیگری:</label>
              <select 
                value={category} 
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="category-select"
              >
                <option value="تمام">تمام</option>
                <option value="الیکٹرانکس">الیکٹرانکس</option>
                <option value="تعلیم">تعلیم</option>
                <option value="فرنیچر">فرنیچر</option>
              </select>
            </div>

            <div className="control-group">
              <label>ترتیب دیں:</label>
              <select 
                value={sortBy} 
                onChange={(e) => handleSortChange(e.target.value)}
                className="sort-select"
              >
                <option value="name">نام کے لحاظ سے</option>
                <option value="price">قیمت کے لحاظ سے</option>
              </select>
            </div>
          </div>

          {/* Statistics */}
          <div className="statistics">
            <h4>📊 شماریات</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">کل مصنوعات:</span>
                <span className="stat-value">{statistics.totalProducts}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">کل قیمت:</span>
                <span className="stat-value">₹{statistics.totalValue}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">اوسط قیمت:</span>
                <span className="stat-value">₹{statistics.averagePrice}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">کیٹیگریز:</span>
                <span className="stat-value">{statistics.categories}</span>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="products-container">
            <h4>🛒 مصنوعات ({filteredProducts.length})</h4>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <h5>{product.name}</h5>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">₹{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🎯 Performance Comparison Demo
const PerformanceDemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  const [useMemoEnabled, setUseMemoEnabled] = useState(true);

  // With useMemo
  const expensiveCalculationWithMemo = useMemo(() => {
    console.log("🧠 useMemo کے ساتھ حساب چل رہا ہے...");
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    return number * 3;
  }, [number]);

  // Without useMemo
  const expensiveCalculationWithoutMemo = () => {
    console.log("🐌 useMemo کے بغیر حساب چل رہا ہے...");
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    return number * 3;
  };

  const currentCalculation = useMemoEnabled 
    ? expensiveCalculationWithMemo 
    : expensiveCalculationWithoutMemo();

  return (
    <div className="demo-section">
      <h3>⚡ Performance Comparison - useMemo کا فرق</h3>
      <p className="urdu-text">useMemo کے ساتھ اور بغیر performance کا موازنہ</p>

      <div className="demo-card">
        <div className="performance-demo">
          <div className="toggle-section">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={useMemoEnabled}
                onChange={(e) => setUseMemoEnabled(e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">
                {useMemoEnabled ? "🧠 useMemo آن" : "🐌 useMemo آف"}
              </span>
            </label>
          </div>

          <div className="input-group">
            <label>نمبر درج کریں:</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
              className="number-input"
            />
          </div>

          <div className="result-section">
            <h4>نتیجہ: {currentCalculation}</h4>
            <div className="performance-info">
              <p>
                <strong>useMemo {useMemoEnabled ? "آن" : "آف"}</strong>
              </p>
              <p className="info-text">
                {useMemoEnabled 
                  ? "✅ تھیم بدلنے پر calculation نہیں چلے گی" 
                  : "❌ ہر state change پر calculation چلے گی"
                }
              </p>
            </div>
          </div>

          <button 
            onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
            className="theme-btn"
          >
            {theme === "light" ? "🌙 تھیم بدلیں" : "☀️ تھیم بدلیں"}
          </button>

          <div className={`theme-box ${theme}`}>
            <p>
              {useMemoEnabled 
                ? "🎯 useMemo آن ہے: تھیم بدلنے سے console میں کوئی message نہیں آئے گا" 
                : "⚠️ useMemo آف ہے: تھیم بدلنے سے console میں calculation message آئے گا"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chapter14 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  // 🔹 Copy function for the syntax code block
  const copySyntaxCode = () => {
    const syntaxCode = `// useMemo Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback Syntax
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`;
    navigator.clipboard.writeText(syntaxCode);
    setCopyStatus("Syntax کوڈ کوپي ہو گیا!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const examples = [
    {
      id: 1,
      title: "مثال 1: useMemo - بھاری Calculation کو optimize کرنا",
      description: "useMemo بھاری calculations کے نتائج کو memorize کرتا ہے تاکہ unnecessary re-calculations سے بچا جا سکے۔",
      component: <HeavyCalculationDemo />,
      code: `// HeavyCalculationDemo.jsx - useMemo کی عملی مثال
import React, { useState, useMemo } from "react";

const HeavyCalculationDemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  // 🎯 useMemo کا مطلب: result کو یاد رکھنا جب تک number نہیں بدلتا
  const doubleNumber = useMemo(() => {
    console.log("بھاری حساب دوبارہ چل رہا ہے...");
    
    // فرضی بھاری calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    
    return number * 2;
  }, [number]); // 🎯 صرف number بدلنے پر calculation دوبارہ چلے گا

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="calculation-demo">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <h2>دگنا نتیجہ: {doubleNumber}</h2>
      <button onClick={toggleTheme}>تھیم تبدیل کریں</button>
      
      <div style={{ 
        backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "10px",
        margin: "15px 0"
      }}>
        <p>useMemo کا فائدہ: تھیم بدلنے سے calculation دوبارہ نہیں چلے گا ✨</p>
      </div>
    </div>
  );
};

export default HeavyCalculationDemo;`,
      css: `/* 🧮 useMemo Demo CSS */
.calculation-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.number-input {
  padding: 12px;
  font-size: 1.1rem;
  border: 2px solid #0078ff;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  transition: all 0.3s ease;
}

.number-input:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 120, 255, 0.3);
}

.result-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
}

.result-display h4 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.calculation-time {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.theme-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px 0;
}

.theme-btn:hover {
  background: #218838;
  transform: translateY(-2px);
}

@media (max-width: 430px) {
  .calculation-demo {
    padding: 15px;
  }
  
  .number-input {
    width: 100%;
    max-width: 200px;
  }
  
  .result-display {
    padding: 20px;
  }
}

@media (max-width: 390px) {
  .result-display h4 {
    font-size: 1.3rem;
  }
}

@media (max-width: 375px) {
  .calculation-demo {
    padding: 10px;
  }
  
  .result-display {
    padding: 15px;
  }
}`
    },
    {
      id: 2,
      title: "مثال 2: useCallback - Function Memorization",
      description: "useCallback functions کو memorize کرتا ہے تاکہ unnecessary re-renders کو روکا جا سکے، خاص طور پر جب functions child components میں pass ہو رہی ہوں۔",
      component: <CallbackDemo />,
      code: `// CallbackDemo.jsx - useCallback کی عملی مثال
import React, { useState, useCallback, useEffect } from "react";

const CallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  // 🎯 useCallback کا مطلب: function کو یاد رکھنا
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // 🎯 خالی dependency array - function کبھی نہیں بدلے گا

  // Without useCallback - ہر render پر نیا function
  const incrementWithoutCallback = () => {
    setCount((prev) => prev + 1);
  };

  // Render count track کرنے کے لیے
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [increment, incrementWithoutCallback]);

  return (
    <div className="callback-demo">
      <div className="counter-display">
        <h2>گنتی: {count}</h2>
        <p>کمپوننٹ re-render ہوا: {renderCount} بار</p>
      </div>

      <div className="button-group">
        <div className="callback-section">
          <h4>🎯 useCallback کے ساتھ</h4>
          <ChildButton onClick={increment} type="callback" />
          <p>Function ہر render پر نہیں بدلتا</p>
        </div>

        <div className="no-callback-section">
          <h4>❌ useCallback کے بغیر</h4>
          <ChildButton onClick={incrementWithoutCallback} type="no-callback" />
          <p>Function ہر render پر نیا بنتا ہے</p>
        </div>
      </div>
    </div>
  );
};

// 🎯 Child Component - React.memo کے ساتھ
const ChildButton = React.memo(({ onClick, type }) => {
  const [childRenderCount, setChildRenderCount] = useState(0);

  useEffect(() => {
    setChildRenderCount(prev => prev + 1);
  });

  return (
    <div className={\`child-button \${type}\`}>
      <button onClick={onClick} className="child-btn">
        {type === "callback" ? "useCallback والا بٹن" : "بغیر useCallback والا بٹن"}
      </button>
      <p>Child render ہوا: {childRenderCount} بار</p>
    </div>
  );
});

export default CallbackDemo;`,
      css: `/* ⚙️ useCallback Demo CSS */
.callback-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.counter-display {
  text-align: center;
  margin-bottom: 30px;
}

.counter-display h2 {
  color: #0078ff;
  margin-bottom: 10px;
}

.render-info {
  color: #6c757d;
  font-style: italic;
}

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.callback-section, .no-callback-section {
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.callback-section {
  background: #e8f5e8;
  border: 2px solid #28a745;
}

.no-callback-section {
  background: #f8e8e8;
  border: 2px solid #dc3545;
}

.callback-section h4 {
  color: #28a745;
  margin-bottom: 15px;
}

.no-callback-section h4 {
  color: #dc3545;
  margin-bottom: 15px;
}

.child-button {
  margin: 15px 0;
}

.child-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 250px;
}

.callback .child-btn {
  background: #28a745;
  color: white;
}

.no-callback .child-btn {
  background: #dc3545;
  color: white;
}

.child-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.child-render-count {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 8px 0 0 0;
}

.demo-note {
  font-size: 0.9rem;
  color: #555;
  margin: 10px 0 0 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .button-group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .callback-section, .no-callback-section {
    padding: 15px;
  }
}

@media (max-width: 430px) {
  .callback-demo {
    padding: 15px;
  }
  
  .child-btn {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  .callback-demo {
    padding: 10px;
  }
  
  .button-group {
    gap: 15px;
  }
}`
    },
    {
      id: 3,
      title: "مثال 3: Product List - دونوں Hooks کا مجموعہ",
      description: "ایسے scenario جہاں useMemo اور useCallback دونوں ایک ساتھ استعمال ہوتے ہیں - filtered product list جس میں search, filter اور sort کی سہولیات ہوں۔",
      component: <ProductListDemo />,
      code: `// ProductListDemo.jsx - useMemo + useCallback کا مجموعہ
import React, { useState, useMemo, useCallback } from "react";

const ProductListDemo = () => {
  const [products] = useState([
    { id: 1, name: "لیپ ٹاپ", price: 50000, category: "الیکٹرانکس" },
    { id: 2, name: "موبائل", price: 25000, category: "الیکٹرانکس" },
    { id: 3, name: "کتاب", price: 500, category: "تعلیم" },
    { id: 4, name: "قلم", price: 50, category: "تعلیم" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("تمام");
  const [sortBy, setSortBy] = useState("name");

  // 🎯 useMemo for filtered and sorted products
  const filteredProducts = useMemo(() => {
    console.log("🔍 Products filter ہو رہے ہیں...");
    
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "تمام") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

    return filtered;
  }, [products, searchTerm, category, sortBy]);

  // 🎯 useMemo for expensive calculations
  const statistics = useMemo(() => {
    console.log("📊 Statistics calculate ہو رہے ہیں...");
    
    const totalProducts = filteredProducts.length;
    const totalValue = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalProducts > 0 ? totalValue / totalProducts : 0;

    return {
      totalProducts,
      totalValue,
      averagePrice: averagePrice.toFixed(2)
    };
  }, [filteredProducts]);

  // 🎯 useCallback for event handlers
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSortBy(newSort);
  }, []);

  return (
    <div className="product-list-demo">
      {/* Controls with useCallback handlers */}
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="پروڈکٹ کا نام لکھیں..."
        />
        
        <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="تمام">تمام</option>
          <option value="الیکٹرانکس">الیکٹرانکس</option>
          <option value="تعلیم">تعلیم</option>
        </select>

        <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="name">نام کے لحاظ سے</option>
          <option value="price">قیمت کے لحاظ سے</option>
        </select>
      </div>

      {/* Statistics with useMemo */}
      <div className="statistics">
        <div className="stat-item">
          <span>کل مصنوعات: {statistics.totalProducts}</span>
        </div>
        <div className="stat-item">
          <span>کل قیمت: ₹{statistics.totalValue}</span>
        </div>
        <div className="stat-item">
          <span>اوسط قیمت: ₹{statistics.averagePrice}</span>
        </div>
      </div>

      {/* Product List with useMemo */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h5>{product.name}</h5>
            <p>{product.category}</p>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListDemo;`,
      css: `/* 🛍️ Product List Demo CSS */
.product-list-demo {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
}

.control-group {
  display: flex;
  flex-direction: column;
}

.control-group label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.search-input, .category-select, .sort-select {
  padding: 10px;
  border: 2px solid #0078ff;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus, .category-select:focus, .sort-select:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 120, 255, 0.3);
}

.statistics {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
}

.statistics h4 {
  margin: 0 0 15px 0;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 5px;
}

.stat-value {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
}

.products-container {
  margin-top: 20px;
}

.products-container h4 {
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-color: #0078ff;
}

.product-card h5 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.1rem;
}

.product-category {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0 0 8px 0;
}

.product-price {
  color: #28a745;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .controls {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 430px) {
  .product-list-demo {
    padding: 15px;
  }
  
  .controls {
    padding: 15px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 375px) {
  .product-list-demo {
    padding: 10px;
  }
  
  .product-card {
    padding: 15px;
  }
}`
    },
    {
      id: 4,
      title: "مثال 4: Performance Comparison - useMemo کا فرق",
      description: "useMemo کے ساتھ اور بغیر performance کا عملی موازنہ دکھانا تاکہ طلبہ واضح طور پر فرق سمجھ سکیں۔",
      component: <PerformanceDemo />,
      code: `// PerformanceDemo.jsx - useMemo کا فرق
import React, { useState, useMemo } from "react";

const PerformanceDemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  const [useMemoEnabled, setUseMemoEnabled] = useState(true);

  // With useMemo
  const expensiveCalculationWithMemo = useMemo(() => {
    console.log("🧠 useMemo کے ساتھ حساب چل رہا ہے...");
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    return number * 3;
  }, [number]); // 🎯 صرف number بدلنے پر چلے گا

  // Without useMemo
  const expensiveCalculationWithoutMemo = () => {
    console.log("🐌 useMemo کے بغیر حساب چل رہا ہے...");
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result = Math.sqrt(i) * Math.random();
    }
    return number * 3;
  };

  const currentCalculation = useMemoEnabled 
    ? expensiveCalculationWithMemo 
    : expensiveCalculationWithoutMemo();

  return (
    <div className="performance-demo">
      <div className="toggle-section">
        <label>
          <input
            type="checkbox"
            checked={useMemoEnabled}
            onChange={(e) => setUseMemoEnabled(e.target.checked)}
          />
          {useMemoEnabled ? "🧠 useMemo آن" : "🐌 useMemo آف"}
        </label>
      </div>

      <div className="input-group">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className="result-section">
        <h3>نتیجہ: {currentCalculation}</h3>
        <div className="performance-info">
          <p>
            <strong>useMemo {useMemoEnabled ? "آن" : "آف"}</strong>
          </p>
          <p>
            {useMemoEnabled 
              ? "✅ تھیم بدلنے پر calculation نہیں چلے گی" 
              : "❌ ہر state change پر calculation چلے گی"
            }
          </p>
        </div>
      </div>

      <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 تھیم بدلیں" : "☀️ تھیم بدلیں"}
      </button>

      <div className={\`theme-box \${theme}\`}>
        <p>
          {useMemoEnabled 
            ? "🎯 useMemo آن ہے: تھیم بدلنے سے console میں کوئی message نہیں آئے گا" 
            : "⚠️ useMemo آف ہے: تھیم بدلنے سے console میں calculation message آئے گا"
          }
        </p>
      </div>
    </div>
  );
};

export default PerformanceDemo;`,
      css: `/* ⚡ Performance Demo CSS */
.performance-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.toggle-section {
  margin-bottom: 25px;
}

.toggle-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}

.toggle-input {
  display: none;
}

.toggle-slider {
  width: 50px;
  height: 25px;
  background: #dc3545;
  border-radius: 25px;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-input:checked + .toggle-slider {
  background: #28a745;
}

.toggle-slider:before {
  content: "";
  position: absolute;
  width: 21px;
  height: 21px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: all 0.3s ease;
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateX(25px);
}

.toggle-text {
  font-size: 1.1rem;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.result-section {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
}

.result-section h3 {
  margin: 0 0 15px 0;
  font-size: 1.8rem;
}

.performance-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.info-text {
  margin: 10px 0 0 0;
  font-size: 0.95rem;
  line-height: 1.4;
}

.theme-box {
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  transition: all 0.3s ease;
}

.theme-box.light {
  background: #f8f9fa;
  color: #333;
  border: 2px solid #0078ff;
}

.theme-box.dark {
  background: #333;
  color: #fff;
  border: 2px solid #00c6ff;
}

.theme-box p {
  margin: 0;
  font-weight: bold;
}

@media (max-width: 430px) {
  .performance-demo {
    padding: 15px;
  }
  
  .result-section {
    padding: 20px;
  }
  
  .result-section h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 390px) {
  .toggle-text {
    font-size: 1rem;
  }
  
  .theme-box {
    padding: 15px;
  }
}

@media (max-width: 375px) {
  .performance-demo {
    padding: 10px;
  }
  
  .result-section {
    padding: 15px;
  }
}`
    }
  ];

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title2 text-break">
          📚 چيپٹر نمبر 14 – useMemo اور useCallback (پرفارمنس بہتر بنانا)
        </h1>
        <p className="chapter-subtitle2 text-break">
          React میں <strong>useMemo</strong> اور <strong>useCallback</strong> performance optimization کے لیے استعمال ہوتے ہیں تاکہ unnecessary re-renders اور re-calculations سے بچا جا سکے۔
        </p>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-card">
          <h3 className="intro-title">🎯 useMemo اور useCallback کا تعارف</h3>
          <p className="intro-text">
            جب بھی React میں کوئی state بدلتی ہے — تو پورا component دوبارہ render ہوتا ہے۔ useMemo اور useCallback اس مسئلے کا حل ہیں۔
          </p>
          
          <div className="comparison-section">
            <h4>🔄 دونوں Hooks کا موازنہ</h4>
            <div className="comparison-table">
              <div className="table-row header">
                <div className="table-cell">Hook</div>
                <div className="table-cell">مقصد</div>
                <div className="table-cell">کب استعمال کریں</div>
              </div>
              <div className="table-row">
                <div className="table-cell">useMemo</div>
                <div className="table-cell">حساب (calculation) یاد رکھنا</div>
                <div className="table-cell">جب بھاری calculation بار بار چل رہی ہو</div>
              </div>
              <div className="table-row">
                <div className="table-cell">useCallback</div>
                <div className="table-cell">فنکشن کو یاد رکھنا</div>
                <div className="table-cell">جب functions child components میں pass ہو رہی ہوں</div>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h4>🌟 کیوں استعمال کریں؟</h4>
            <p>دونوں hooks React applications کو تیز، سمجھدار اور کم re-render ہونے والا بناتے ہیں۔</p>
            <div className="highlight-text">
              🎯 useMemo → result یاد رکھو | useCallback → function یاد رکھو
            </div>
          </div>

          <div className="real-world-example">
            <h4>💡 حقیقی زندگی کی مثالیں</h4>
            <p>
              <strong>useMemo:</strong> جب آپ کے پاس بڑی product list ہو جس میں search, filter, sort کی سہولیات ہوں
            </p>
            <p>
              <strong>useCallback:</strong> جب آپ event handlers کو child components میں pass کر رہے ہوں
            </p>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        {/* 🔹 sidebar: تمام مثالوں کے buttons */}
        <div className="sidebar">
          <h3 className="text-break">مثالیں</h3>
          <ul className="example-list">
            {examples.map((example) => (
              <li key={example.id}>
                <button
                  className={`sidebar-btn text-break ${
                    activeTab === example.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(example.id)}
                >
                  مثال {example.id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/*🔹 main content: منتخب مثال دکھانا */}
        <div className="main-content">
          <div className="section-card">
            <h2 className="section-title text-break">
              {examples[activeTab - 1].title}
            </h2>
            <p className="section-text text-break">
              {examples[activeTab - 1].description}
            </p>

            {/* Live Demo Section */}
            <div className="demo-section">
              {examples[activeTab - 1].component}
            </div>

            {/* React Code */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">React کوڈ:</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].code, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`) ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{examples[activeTab - 1].code}</code>
                </pre>
              </div>
            </div>

            {/* CSS Code */}
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">CSS کوڈ:</span>
                <button
                  className="copy-btn"
                  onClick={() =>
                    copyToClipboard(examples[activeTab - 1].css, activeTab)
                  }
                >
                  {copyStatus.includes(`مثال ${activeTab}`) ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>

              <div className="code-block-wrapper">
                <pre className="css-code">
                  <code>{examples[activeTab - 1].css}</code>
                </pre>
              </div>
            </div>

            {copyStatus && <div className="copy-msg">{copyStatus}</div>}
          </div>

          {/* Syntax Section */}
          <div className="section-card">
            <h3 className="section-title text-break">
              📖 useMemo اور useCallback کا بنیادی syntax
            </h3>
            <div className="code-block-container">
              <div className="code-header">
                <span className="text-break">Syntax:</span>
                <button
                  className="copy-btn"
                  onClick={copySyntaxCode}
                >
                  {copyStatus === "Syntax کوڈ کوپي ہو گیا!" ? "کاپی ہوگیا ✅" : "📋 کاپی کریں"}
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">
                  <code>{`// useMemo Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback Syntax
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}</code>
                </pre>
              </div>
            </div>
            <div className="explanation-box">
              <h4 className="text-break">🔹 وضاحت:</h4>
              <ul>
                <li className="text-break">
                  <strong>useMemo:</strong> بھاری calculations کے نتائج کو memorize کرتا ہے
                </li>
                <li className="text-break">
                  <strong>useCallback:</strong> functions کو memorize کرتا ہے تاکہ unnecessary re-renders کم ہوں
                </li>
                <li className="text-break">
                  <strong>Dependency Array:</strong> بتاتا ہے کہ کن values کے بدلنے پر نئی calculation/function بنے گی
                </li>
                <li className="text-break">
                  <strong>Performance:</strong> دونوں hooks React applications کی performance بہتر بناتے ہیں
                </li>
              </ul>
            </div>
          </div>

          {/* سبق کا خلاصہ Section */}
          <div className="summary-card">
            <h3 className="section-title text-break">📌 سبق کا خلاصہ</h3>
            <div className="summary-content">
              <p className="text-break">
                <strong>useMemo</strong> بھاری calculations کے نتائج کو memorize کرتا ہے
              </p>
              <p className="text-break">
                <strong>useCallback</strong> functions کو memorize کرتا ہے
              </p>
              <p className="text-break">
                دونوں hooks <strong>unnecessary re-renders</strong> کو کم کرتے ہیں
              </p>
              <p className="text-break">
                <strong>حقیقی استعمال:</strong> Product lists, Data filtering, Event handlers, Complex calculations
              </p>
              <div className="highlight-text">
                💡 یاد رکھیں: useMemo = حساب یاد رکھو، useCallback = فنکشن یاد رکھو
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Copy Notification */}
      {copyStatus && (
        <div className="copy-notification">
          ✅ {copyStatus}
        </div>
      )}
    </div>
  );
};

export default Chapter14;