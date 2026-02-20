import React, { useState } from "react";
import "../App.css";

export default function Chapter34() {
  const [copyMessage, setCopyMessage] = useState("");

  const copyCodeToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopyMessage("✅ کوڈ کاپی ہو گیا ہے");
        setTimeout(() => setCopyMessage(""), 3000);
      })
      .catch((err) => {
        console.error("کاپی کرنے میں خرابی:", err);
      });
  };

  // 🔸 Chapter 34 کا تعارف
  const chapterIntro = `// 📚 چيپٹر 34: Redux Shopping Cart - مکمل پروجیکٹ فائلیں
// ===========================================================
// 🎯 اس چيپٹر میں ہم پروجیکٹ کی تمام missing فائلیں مکمل کریں گے۔

// 📁 مکمل فائل لسٹ:
// ==================
// 1. 📄 main.jsx          - ایپ انٹری پوائنٹ
// 2. 📄 Products.jsx      - Products صفحہ
// 3. 📄 Checkout.jsx      - ادائیگی کا صفحہ
// 4. 📄 Navbar.jsx        - Navigation bar
// 5. 📄 Footer.jsx        - Footer component
// 6. 📄 Modal.jsx         - Reusable modal
// 7. 📄 Home.jsx          - ہوم پیج
// 8. 📄 constants.js      - مستقل اقدار
// 9. 📄 productsAPI.js    - API calls
// 10. 📄 README.md        - پروجیکٹ ڈاکیومینٹیشن

// ✅ ہر فائل مکمل کوڈ اور اردو وضاحت کے ساتھ`;

  // 🔹 1. main.jsx - ایپ انٹری پوائنٹ
  const mainJsxCode = `// 📁 src/main.jsx - ایپ انٹری پوائنٹ
// ==========================================
// ✨ یہ فائل سب سے پہلے run ہوتی ہے۔
// ✨ پوری ایپ کو Redux store سے connect کرتی ہے۔
// ✨ Tailwind CSS کو global طور پر include کرتی ہے۔

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

// 🔹 React 18 کا جدید طریقہ
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ Root element not found!');
}

const root = ReactDOM.createRoot(rootElement);

// 🔹 Provider کے اندر App کو wrap کریں
// یہ پوری ایپ کو Redux store تک رسائی دیتا ہے
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 📝 اردو وضاحت:
// ================
// 1. <Provider> component پوری ایپ کو Redux store فراہم کرتا ہے
// 2. store.js سے Redux store import کیا گیا ہے
// 3. index.css میں Tailwind CSS شامل ہے
// 4. React.StrictMode development میں مفید features دیتا ہے`;

  // 🔹 2. src/pages/Products.jsx
  const productsPageCode = `// 📁 src/pages/Products.jsx - مصنوعات کا صفحہ
// ============================================
// ✨ یہ صفحہ صرف مصنوعات کی لسٹ دکھاتا ہے۔
// ✨ فلٹرز، سرچ اور سورٹنگ features شامل ہیں۔

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import { Filter, Search, SortAsc } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');
  
  const { items: products } = useSelector((state) => state.products);
  
  // فلٹر شدہ مصنوعات
  const filteredProducts = products.filter(product => {
    // Category فلٹر
    if (category !== 'all' && product.category !== category) return false;
    
    // سرچ فلٹر
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // سورٹنگ
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-desc':
        return b.rating?.rate - a.rating?.rate;
      case 'name-asc':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
  
  // منفرد categories
  const categories = ['all', ...new Set(products.map(p => p.category))];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* ہیڈر */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📦 تمام مصنوعات
          </h1>
          <p className="text-gray-600">
            {sortedProducts.length} میں سے {filteredProducts.length} مصنوعات دکھائی جا رہی ہیں
          </p>
        </div>
        
        {/* فلٹرز اور سرچ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* سرچ بار */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="مصنوعات تلاش کریں..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Category فلٹر */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Filter className="h-4 w-4 mr-2" />
                زمرہ
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'تمام زمروں' : cat}
                  </option>
                ))}
              </select>
            </div>
            
            {/* سورٹنگ */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <SortAsc className="h-4 w-4 mr-2" />
                ترتیب
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="price-asc">قیمت: کم سے زیادہ</option>
                <option value="price-desc">قیمت: زیادہ سے کم</option>
                <option value="rating-desc">اعلی درجہ بندی</option>
                <option value="name-asc">نام: A سے Z</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* مصنوعات کی لسٹ */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                کوئی مصنوعات نہیں ملیں
              </h3>
              <p className="text-gray-600 mb-6">
                آپ کی سرچ کے مطابق کوئی مصنوعات نہیں ملیں
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategory('all');
                }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                فلٹرز صاف کریں
              </button>
            </div>
          ) : (
            <ProductList products={sortedProducts} />
          )}
        </div>
        
        {/* صفحے کے بارے میں معلومات */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            ℹ️ صفحے کے بارے میں
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">فلٹرز</h4>
              <p className="text-sm text-gray-600">
                زمرے، قیمت اور درجہ بندی کے مطابق مصنوعات فلٹر کریں
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">سرچ</h4>
              <p className="text-sm text-gray-600">
                مصنوعات کے نام، تفصیلات میں تلاش کریں
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">سورٹنگ</h4>
              <p className="text-sm text-gray-600">
                قیمت، درجہ بندی یا نام کے مطابق ترتیب دیں
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// 📝 اردو وضاحت:
// ================
// 1. یہ صرف مصنوعات کا dedicated صفحہ ہے
// 2. فلٹرز، سرچ اور سورٹنگ features شامل ہیں
// 3. Redux state سے مصنوعات fetch ہوتی ہیں
// 4. Responsive design ہے
// 5. Empty state handling شامل ہے`;

  // 🔹 3. src/pages/Checkout.jsx - ERROR FIXED VERSION
  const checkoutPageCode = `// 📁 src/pages/Checkout.jsx - ادائیگی کا صفحہ
// ============================================
// ✨ یہ صفحہ صارف کو ادائیگی کی process دکھاتا ہے۔
// ✨ Shipping information, payment method اور order summary شامل ہے۔

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle, Lock } from 'lucide-react';
import { clearCart } from '../features/cart/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { items, totalAmount } = useSelector((state) => state.cart);
  
  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan',
    phone: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      
      // Clear cart after successful order
      dispatch(clearCart());
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };
  
  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            آپ کا کارٹ خالی ہے
          </h1>
          <p className="text-gray-600 mb-6">
            ادائیگی کے لیے پہلے کارٹ میں مصنوعات شامل کریں
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            مصنوعات دیکھیں
          </button>
        </div>
      </div>
    );
  }
  
  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 آرڈر کامیابی سے مکمل ہوا!
          </h1>
          <p className="text-gray-600 mb-6">
            آپ کا آرڈر نمبر: <strong>{"ORD-" + Date.now().toString().slice(-8)}</strong>
          </p>
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700">
              ہم نے آپ کی ادائیگی کی تصدیق کر لی ہے۔ آپ کو confirmation email موصول ہوگی۔
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors w-full"
          >
            واپس ہوم پیج پر جائیں
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💳 ادائیگی
          </h1>
          <p className="text-gray-600">
            آخری مرحلہ: اپنی معلومات درج کریں اور آرڈر مکمل کریں
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* بائیں کالم: فارم */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center mb-6">
                <Truck className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">
                  ترسیل کی معلومات
                </h2>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      پورا نام
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="احمد رضا"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ای میل
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      پتہ
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="مکمل پتہ"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شہر
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="کراچی"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      پوسٹل کوڈ
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="74000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      فون نمبر
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0300-1234567"
                    />
                  </div>
                </div>
                
                {/* ادائیگی کا طریقہ */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-6 w-6 text-primary-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800">
                      ادائیگی کا طریقہ
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="h-4 w-4 text-primary-600"
                      />
                      <div className="ml-3">
                        <span className="font-medium">کریڈٹ/ڈیبٹ کارڈ</span>
                        <p className="text-sm text-gray-600">
                          Visa, MasterCard, American Express
                        </p>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="jazzcash"
                        checked={paymentMethod === 'jazzcash'}
                        onChange={() => setPaymentMethod('jazzcash')}
                        className="h-4 w-4 text-primary-600"
                      />
                      <div className="ml-3">
                        <span className="font-medium">JazzCash</span>
                        <p className="text-sm text-gray-600">
                          JazzCash والٹ سے ادائیگی
                        </p>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="easypaisa"
                        checked={paymentMethod === 'easypaisa'}
                        onChange={() => setPaymentMethod('easypaisa')}
                        className="h-4 w-4 text-primary-600"
                      />
                      <div className="ml-3">
                        <span className="font-medium">EasyPaisa</span>
                        <p className="text-sm text-gray-600">
                          EasyPaisa والٹ سے ادائیگی
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* محفوظ ادائیگی */}
                <div className="flex items-center justify-center mb-6 p-4 bg-blue-50 rounded-lg">
                  <Lock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-700">
                    256-bit SSL encryption کے ذریعے محفوظ ادائیگی
                  </span>
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      پروسیس ہو رہا ہے...
                    </span>
                  ) : (
                    '$' + totalAmount.toFixed(2) + ' کی ادائیگی کریں'
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* دائیں کالم: آرڈر سماری */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                آرڈر سماری
              </h2>
              
              {/* مصنوعات */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-medium text-gray-800 line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × \${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="font-medium">
                     \${(item.price * item.quantity).toFixed(2)}
                  </div>
                  </div>
                ))}
              </div>
              
              {/* حساب کتاب */}
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">ذیلی کل</span>
                  <span className="font-medium">\${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ترسیل</span>
                  <span className="font-medium text-green-600">مفت</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ٹیکس (5%)</span>
                  <span className="font-medium">
                    \${(totalAmount * 0.05).toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>کل</span>
                    <span className="text-primary-600">
                      \${(totalAmount * 1.05).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* واپسی کی پالیسی */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">
                  🔄 30 دن واپسی
                </h4>
                <p className="text-xs text-gray-600">
                  آرڈر وصول ہونے کے 30 دنوں کے اندر واپسی کا اختیار حاصل ہے۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// 📝 اردو وضاحت:
// ================
// 1. یہ ادائیگی کا مکمل process دکھاتا ہے
// 2. Shipping information form شامل ہے
// 3. مختلف payment methods
// 4. Order summary دکھاتا ہے
// 5. Success state دکھاتا ہے
// 6. Empty cart handling شامل ہے`;

  // 🔹 4. src/components/Navbar.jsx - ERROR FIXED VERSION
  const navbarCode = `// 📁 src/components/Navbar.jsx - Navigation Bar
// ============================================
// ✨ یہ component ہر صفحے کے اوپر دکھتا ہے۔
// ✨ Logo, navigation links اور cart button شامل ہے۔

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { toggleCart } from '../features/cart/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { totalQuantity } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/products?search=' + searchQuery);
      setSearchQuery('');
    }
  };
  
  const handleCartClick = () => {
    dispatch(toggleCart());
  };
  
  const navLinks = [
    { path: '/', label: 'ہوم', icon: '🏠' },
    { path: '/products', label: 'مصنوعات', icon: '📦' },
    { path: '/categories', label: 'زمرے', icon: '🏷️' },
    { path: '/about', label: 'ہمارے بارے', icon: 'ℹ️' },
    { path: '/contact', label: 'رابطہ', icon: '📞' },
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo اور برانڈ */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 mr-2 text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-cart rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800 hidden md:block">
                🛒 ریڈکس مارٹ
              </span>
              <span className="text-xl font-bold text-gray-800 md:hidden">
                🛒
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
          
          {/* سرچ بار (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="مصنوعات تلاش کریں..."
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-primary-600"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-primary-600 transition-colors">
              <Heart size={20} />
            </button>
            
            <button className="text-gray-600 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
            
            {/* Cart Button with Badge */}
            <button 
              onClick={handleCartClick}
              className="relative text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={handleCartClick}
              className="relative text-gray-600 hover:text-primary-600"
            >
              <ShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <form onSubmit={handleSearch} className="px-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="تلاش کریں..."
                  className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            
            <div className="space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-4 px-4">
                <button className="flex items-center text-gray-700 hover:text-primary-600 w-full py-3">
                  <Heart size={20} className="mr-3" />
                  پسندیدہ
                </button>
                <button className="flex items-center text-gray-700 hover:text-primary-600 w-full py-3">
                  <User size={20} className="mr-3" />
                  اکاؤنٹ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// 📝 اردو وضاحت:
// ================
// 1. Responsive navigation bar
// 2. Desktop اور mobile versions
// 3. Search functionality
// 4. Cart button with badge
// 5. Navigation links
// 6. Mobile menu toggle`;

  // 🔹 5. src/components/Footer.jsx - ERROR FIXED VERSION
  const footerCode = `// 📁 src/components/Footer.jsx - Footer Component
// ============================================
// ✨ یہ component ہر صفحے کے نیچے دکھتا ہے۔
// ✨ Links, copyright اور social media شامل ہے۔

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    'مصنوعات': [
      { label: 'تمام مصنوعات', path: '/products' },
      { label: 'نئی آمد', path: '/products?filter=new' },
      { label: 'بہترین فروخت', path: '/products?filter=best' },
      { label: 'خصوصی آفرز', path: '/products?filter=special' },
    ],
    'کاروبار': [
      { label: 'ہمارے بارے', path: '/about' },
      { label: 'رابطہ', path: '/contact' },
      { label: 'پریس', path: '/press' },
      { label: 'کیریئر', path: '/careers' },
    ],
    'مدد': [
      { label: 'اکاؤنٹ', path: '/account' },
      { label: 'ترسیل', path: '/shipping' },
      { label: 'واپسی', path: '/returns' },
      { label: 'FAQ', path: '/faq' },
    ],
    'قوانین': [
      { label: 'رازداری کی پالیسی', path: '/privacy' },
      { label: 'استعمال کی شرائط', path: '/terms' },
      { label: 'کوکیز', path: '/cookies' },
      { label: 'سائیٹ میپ', path: '/sitemap' },
    ],
  };
  
  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://instagram.com' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-cart rounded-lg mr-3"></div>
              <h2 className="text-2xl font-bold">🛒 ریڈکس مارٹ</h2>
            </div>
            <p className="text-gray-400 mb-6">
              پاکستان کی سب سے بڑی آن لائن شاپنگ مارکیٹ۔ 
              Redux Toolkit اور React پر بنی جدید ترین ایپ۔
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3" />
                <span>0300-1234567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3" />
                <span>info@reduxmart.pk</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                <span>پلاٹ نمبر 123، کمرشیل ایونیو، کراچی، پاکستان</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ریڈکس مارٹ. تمام حقوق محفوظ ہیں.
            </p>
          </div>
          
          {/* Payment Methods */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-400 text-sm">قبول کردہ ادائیگی:</span>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">Visa</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">MC</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">JC</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">EP</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            ❤️ Built with: React • Redux Toolkit • Tailwind CSS • Vite
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            API: Fake Store API • Icons: Lucide React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// 📝 اردو وضاحت:
// ================
// 1. مکمل responsive footer
// 2. چار columns میں links
// 3. Contact information
// 4. Social media links
// 5. Copyright information
// 6. Payment methods display
// 7. Technology stack mention`;

  // 🔹 6. src/components/Modal.jsx - ERROR FIXED VERSION
  const modalCode = `// 📁 src/components/Modal.jsx - Reusable Modal Component
// ======================================================
// ✨ یہ component دوبارہ استعمال ہونے والا modal ہے۔
// ✨ مختلف جگہوں پر استعمال ہو سکتا ہے۔

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  showCloseButton = true,
  closeOnOutsideClick = true,
  className = ''
}) => {
  
  // Escape key سے بند کرنا
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  // Background پر click سے بند کرنا
  const handleBackdropClick = (e) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  // Modal sizes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div 
        className={\`bg-white rounded-2xl shadow-2xl w-full \${sizeClasses[size]} animate-slide-up \${className}\`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h3 className="text-xl font-bold text-gray-900">
                {title}
              </h3>
            )}
            
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}
        
        {/* Modal Content */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Modal Footer (اگر children میں نہیں ہے) */}
        {!className.includes('no-footer') && (
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              بند کریں
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 🔹 Modal کا استعمال - مثال
const ModalUsageExample = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-primary-600 text-white rounded-lg"
      >
        Modal کھولیں
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="مثال Modal"
        size="md"
      >
        <p className="text-gray-600 mb-4">
          یہ ایک reusable modal component کی مثال ہے۔
        </p>
        <button
          onClick={() => {
            alert('Modal میں action!');
            setIsModalOpen(false);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          عمل کریں
        </button>
      </Modal>
    </>
  );
};

export { ModalUsageExample };
export default Modal;

// 📝 اردو وضاحت:
// ================
// 1. Reusable modal component
// 2. مختلف sizes (sm, md, lg, xl, full)
// 3. Escape key سے بند ہوتا ہے
// 4. Outside click سے بند ہوتا ہے
// 5. Animation effects شامل ہیں
// 6. Customizable header, content, footer`;

  // 🔹 7. src/pages/Home.jsx - ERROR FIXED VERSION
  const homePageCode = `// 📁 src/pages/Home.jsx - ہوم پیج
// ======================================
// ✨ یہ ایپ کا مرکزی ہوم پیج ہے۔
// ✨ Hero section, featured products اور categories شامل ہیں۔

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shield, 
  RefreshCw,
  Star,
  ArrowRight 
} from 'lucide-react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../features/products/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  
  // Featured products (top rated)
  const featuredProducts = products
    .filter(product => product.rating?.rate > 4)
    .slice(0, 6);
  
  // Categories
  const categories = [
    { name: 'electronics', label: 'الیکٹرانکس', icon: '📱', count: 6 },
    { name: 'jewelery', label: 'زیورات', icon: '💎', count: 4 },
    { name: "men's clothing", label: 'مردوں کے کپڑے', icon: '👔', count: 4 },
    { name: "women's clothing", label: 'خواتین کے کپڑے', icon: '👗', count: 6 },
  ];
  
  // Features
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'مفت ترسیل',
      description: '$50 سے زیادہ کے آرڈرز پر'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'محفوظ ادائیگی',
      description: '256-bit SSL encryption'
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: '30 دن واپسی',
      description: 'آسان واپسی پالیسی'
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: '10,000+ مصنوعات',
      description: 'وسیع انتخاب'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🔝 Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-cart text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="block">🛒 جدید ترین</span>
                <span className="block">آن لائن شاپنگ</span>
                <span className="block text-primary-200">تجربہ</span>
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Redux Toolkit پر بنی پاکستان کی بہترین شاپنگ ایپ۔ 
                10,000+ مصنوعات، محفوظ ادائیگی اور تیز ترسیل۔
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2" size={20} />
                  مصنوعات دیکھیں
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/categories"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-bold text-lg"
                >
                  زمرے دیکھیں
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div 
                        key={i} 
                        className="bg-white/20 rounded-xl p-4 backdrop-blur-sm animate-float"
                        style={{ animationDelay: i * 0.2 + 's' }}
                      >
                        <div className="w-12 h-12 bg-white rounded-lg mb-3 mx-auto"></div>
                        <p className="text-center text-sm">Featured Product {i}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 📦 Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⭐ نمایاں مصنوعات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4+ درجہ بندی والی بہترین مصنوعات
            </p>
          </div>
          
          {status === 'loading' ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">مصنوعات لوڈ ہو رہی ہیں...</p>
              </div>
            </div>
          ) : featuredProducts.length > 0 ? (
            <ProductList products={featuredProducts} />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                فی الحال کوئی مصنوعات نہیں
              </h3>
              <p className="text-gray-600">جلد ہی نمایاں مصنوعات شامل کی جائیں گی</p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              تمام مصنوعات دیکھیں
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* 🏷️ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🏷️ خریداری کے زمرے
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اپنی پسند کے زمرے میں مصنوعات تلاش کریں
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link
                key={category.name}
                to={'/products?category=' + category.name}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600">
                  {category.label}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} مصنوعات
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ✅ Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 🛒 Cart Summary (اگر items ہوں) */}
      {cartItems.length > 0 && (
        <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    🛒 آپ کے کارٹ میں {cartItems.length} اشیاء ہیں
                  </h3>
                  <p className="text-gray-600">
                    ادائیگی مکمل کریں یا خریداری جاری رکھیں
                  </p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <Link
                    to="/cart"
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    کارٹ دیکھیں
                  </Link>
                  <Link
                    to="/checkout"
                    className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    ادائیگی کریں
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 📱 App Download CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            📱 ایپ ڈاؤنلوڈ کریں
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            ہمارے موبائل ایپ کے ذریعے زیادہ آسانی سے خریداری کریں۔ 
            خصوصی آفرز اور notifications حاصل کریں۔
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Google Play
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
              App Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// 📝 اردو وضاحت:
// ================
// 1. ایپ کا مرکزی ہوم پیج
// 2. Hero section باہول ڈیزائن
// 3. Featured products display
// 4. Categories section
// 5. Features highlights
// 6. Cart summary (اگر items ہوں)
// 7. App download CTA
// 8. Responsive design`;

  // 🔹 8. src/utils/constants.js - ERROR FIXED VERSION
  const constantsCode = `// 📁 src/utils/constants.js - مستقل اقدار
// =========================================
// ✨ یہ فائل app میں استعمال ہونے والی constant values رکھتی ہے۔
// ✨ Colors, API endpoints, messages وغیرہ۔

// 🔹 API Constants
export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  ENDPOINTS: {
    PRODUCTS: '/products',
    PRODUCT_BY_ID: '/products/:id',
    CATEGORIES: '/products/categories',
    PRODUCTS_BY_CATEGORY: '/products/category/:category',
    CARTS: '/carts',
    USERS: '/users',
    LOGIN: '/auth/login'
  },
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3
};

// 🔹 رنگوں کی لسٹ (Tailwind کے مطابق)
export const COLORS = {
  // Primary colors
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  
  // Cart colors
  CART: {
    DEFAULT: '#10b981', // Emerald-500
    HOVER: '#059669',   // Emerald-600
    LIGHT: '#d1fae5'    // Emerald-100
  },
  
  // Status colors
  STATUS: {
    SUCCESS: '#10b981',
    ERROR: '#ef4444',
    WARNING: '#f59e0b',
    INFO: '#3b82f6'
  },
  
  // Text colors
  TEXT: {
    PRIMARY: '#111827',
    SECONDARY: '#6b7280',
    LIGHT: '#9ca3af',
    WHITE: '#ffffff'
  }
};

// 🔹 Products کے لیے constants
export const PRODUCT_CONSTANTS = {
  // Sorting options
  SORT_OPTIONS: [
    { value: 'price-asc', label: 'قیمت: کم سے زیادہ' },
    { value: 'price-desc', label: 'قیمت: زیادہ سے کم' },
    { value: 'rating-desc', label: 'اعلی درجہ بندی' },
    { value: 'name-asc', label: 'نام: A سے Z' },
    { value: 'name-desc', label: 'نام: Z سے A' }
  ],
  
  // Categories (FakeStoreAPI categories)
  CATEGORIES: [
    { value: 'all', label: 'تمام زمروں' },
    { value: 'electronics', label: 'الیکٹرانکس' },
    { value: 'jewelery', label: 'زیورات' },
    { value: "men's clothing", label: 'مردوں کے کپڑے' },
    { value: "women's clothing", label: 'خواتین کے کپڑے' }
  ],
  
  // Price ranges
  PRICE_RANGES: [
    { min: 0, max: 50, label: '$50 تک' },
    { min: 50, max: 100, label: '$50 - $100' },
    { min: 100, max: 200, label: '$100 - $200' },
    { min: 200, max: 500, label: '$200 - $500' },
    { min: 500, max: 1000, label: '$500 سے زیادہ' }
  ],
  
  // Product status messages
  STATUS_MESSAGES: {
    LOADING: 'مصنوعات لوڈ ہو رہی ہیں...',
    ERROR: 'مصنوعات لوڈ کرنے میں خرابی',
    EMPTY: 'کوئی مصنوعات نہیں ملیں',
    SUCCESS: 'مصنوعات کامیابی سے لوڈ ہو گئیں'
  }
};

// 🔹 Cart کے لیے constants
export const CART_CONSTANTS = {
  // Shipping rates
  SHIPPING: {
    FREE_THRESHOLD: 50,
    STANDARD: 5.99,
    EXPRESS: 12.99,
    INTERNATIONAL: 25.99
  },
  
  // Tax rates
  TAX: {
    PAKISTAN: 0.05,    // 5%
    INTERNATIONAL: 0.10 // 10%
  },
  
  // Cart messages
  MESSAGES: {
    ADD_SUCCESS: 'مصنوعات کارٹ میں شامل ہو گئی',
    REMOVE_SUCCESS: 'مصنوعات کارٹ سے ہٹا دی گئی',
    CLEAR_SUCCESS: 'کارٹ صاف ہو گیا',
    EMPTY: 'آپ کا کارٹ خالی ہے',
    QUANTITY_UPDATED: 'مقدار اپڈیٹ ہو گئی'
  },
  
  // Checkout steps
  CHECKOUT_STEPS: [
    { id: 1, label: 'کارٹ', description: 'آپ کے کارٹ میں اشیاء' },
    { id: 2, label: 'معلومات', description: 'ترسیل کی معلومات' },
    { id: 3, label: 'ادائیگی', description: 'ادائیگی کا طریقہ' },
    { id: 4, label: 'تصدیق', description: 'آرڈر کی تصدیق' }
  ]
};

// 🔹 Error messages
export const ERROR_MESSAGES = {
  NETWORK: 'نیٹ ورک کنکشن میں خرابی۔ براہ کرم چیک کریں۔',
  API: 'سرور سے ڈیٹا حاصل کرنے میں خرابی۔',
  VALIDATION: {
    REQUIRED: 'یہ فیلڈ ضروری ہے۔',
    EMAIL: 'درست ای میل درج کریں۔',
    PHONE: 'درست فون نمبر درج کریں۔',
    MIN_LENGTH: (min) => 'کم از کم ' + min + ' حروف درج کریں۔',
    MAX_LENGTH: (max) => 'زیادہ سے زیادہ ' + max + ' حروف درج کریں۔'
  },
  AUTH: {
    LOGIN_FAILED: 'لاگ ان ناکام ہوا۔ براہ کرم چیک کریں۔',
    SESSION_EXPIRED: 'سیشن ختم ہو گیا ہے۔ دوبارہ لاگ ان کریں۔'
  }
};

// 🔹 Success messages
export const SUCCESS_MESSAGES = {
  ORDER: {
    PLACED: 'آرڈر کامیابی سے مکمل ہوا!',
    CONFIRMED: 'آرڈر کی تصدیق ہو گئی۔',
    SHIPPED: 'آرڈر روانہ کر دیا گیا۔',
    DELIVERED: 'آرڈر ڈیلیور ہو گیا۔'
  },
  CART: {
    SAVED: 'کارٹ محفوظ ہو گیا۔',
    UPDATED: 'کارٹ اپڈیٹ ہو گیا۔'
  },
  PROFILE: {
    UPDATED: 'پروفائل اپڈیٹ ہو گیا۔',
    SAVED: 'ترجیحات محفوظ ہو گئیں۔'
  }
};

// 🔹 App settings
export const APP_SETTINGS = {
  NAME: 'ریڈکس مارٹ',
  VERSION: '1.0.0',
  DESCRIPTION: 'Redux Toolkit پر بنی جدید ترین شاپنگ ایپ',
  AUTHOR: 'React Developers Pakistan',
  YEAR: new Date().getFullYear(),
  
  // Local storage keys
  STORAGE_KEYS: {
    CART: 'redux_mart_cart',
    USER: 'redux_mart_user',
    TOKEN: 'redux_mart_token',
    SETTINGS: 'redux_mart_settings'
  },
  
  // Feature flags
  FEATURES: {
    ENABLE_WISHLIST: true,
    ENABLE_COMPARE: true,
    ENABLE_QUICK_VIEW: true,
    ENABLE_SOCIAL_LOGIN: false,
    ENABLE_GUEST_CHECKOUT: true
  }
};

// 🔹 Routing paths
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CATEGORIES: '/categories',
  CART: '/cart',
  CHECKOUT: '/checkout',
  CHECKOUT_SUCCESS: '/checkout/success',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  ORDERS: '/orders',
  WISHLIST: '/wishlist'
};

// 📝 اردو وضاحت:
// ================
// 1. تمام constant values ایک جگہ
// 2. API configuration
// 3. Colors for consistent design
// 4. Product-related constants
// 5. Cart-related constants
// 6. Error and success messages
// 7. App settings
// 8. Routing paths`;

  // 🔹 9. src/features/products/productsAPI.js - ERROR FIXED VERSION
  const productsAPICode = `// 📁 src/features/products/productsAPI.js
// =========================================
// ✨ یہ فائل Fake Store API سے ڈیٹا fetch کرتی ہے۔
// ✨ تمام API calls یہاں centralize ہیں۔

import axios from 'axios';
import { API_CONFIG } from '../../utils/constants';

// 🔹 Axios instance بنائیں
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 🔹 Request interceptor (logs, authentication, etc.)
api.interceptors.request.use(
  (config) => {
    // Request سے پہلے کچھ کرنا ہو تو
    console.log('[API Request] ' + config.method.toUpperCase() + ' ' + config.url);
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// 🔹 Response interceptor (error handling)
api.interceptors.response.use(
  (response) => {
    console.log('[API Response] ' + response.status + ' ' + response.config.url);
    return response;
  },
  (error) => {
    console.error('[API Response Error]', error);
    
    // Better error messages
    if (error.response) {
      // Server responded with error
      switch (error.response.status) {
        case 401:
          error.message = 'غیر مجاز رسائی۔';
          break;
        case 404:
          error.message = 'ڈیٹا نہیں ملا۔';
          break;
        case 500:
          error.message = 'سرور میں خرابی۔';
          break;
        default:
          error.message = 'سرور نے ' + error.response.status + ' جواب دیا۔';
      }
    } else if (error.request) {
      // Request was made but no response
      error.message = 'سرور سے رابطہ نہیں ہو سکا۔';
    } else {
      // Something else happened
      error.message = 'API call میں خرابی۔';
    }
    
    return Promise.reject(error);
  }
);

// 🔹 تمام مصنوعات fetch کریں
export const fetchProductsFromAPI = async () => {
  try {
    console.log('[API] Fetching all products...');
    
    const response = await api.get(API_CONFIG.ENDPOINTS.PRODUCTS);
    
    // ڈیٹا کو transform کریں (اگر ضرورت ہو)
    const products = response.data.map(product => ({
      ...product,
      // اضافی fields
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0,
      isNew: Math.random() > 0.5,
      stock: Math.floor(Math.random() * 100) + 10
    }));
    
    console.log('[API] Successfully fetched ' + products.length + ' products');
    return products;
    
  } catch (error) {
    console.error('[API Error] fetchProductsFromAPI:', error);
    throw error;
  }
};

// 🔹 مخصوص category کی مصنوعات fetch کریں
export const fetchProductsByCategory = async (category) => {
  try {
    if (!category || category === 'all') {
      return fetchProductsFromAPI();
    }
    
    console.log('[API] Fetching products for category: ' + category);
    
    const response = await api.get(
      API_CONFIG.ENDPOINTS.PRODUCTS_BY_CATEGORY.replace(':category', category)
    );
    
    console.log('[API] Found ' + response.data.length + ' products in ' + category);
    return response.data;
    
  } catch (error) {
    console.error('[API Error] fetchProductsByCategory:', error);
    throw error;
  }
};

// 🔹 Single product fetch کریں
export const fetchProductById = async (id) => {
  try {
    console.log('[API] Fetching product with ID: ' + id);
    
    const response = await api.get(
      API_CONFIG.ENDPOINTS.PRODUCT_BY_ID.replace(':id', id)
    );
    
    console.log('[API] Product details fetched successfully');
    return response.data;
    
  } catch (error) {
    console.error('[API Error] fetchProductById:', error);
    throw error;
  }
};

// 🔹 تمام categories fetch کریں
export const fetchCategories = async () => {
  try {
    console.log('[API] Fetching categories...');
    
    const response = await api.get(API_CONFIG.ENDPOINTS.CATEGORIES);
    
    // 'all' category شامل کریں
    const categories = ['all', ...response.data];
    
    console.log('[API] Found ' + categories.length + ' categories');
    return categories;
    
  } catch (error) {
    console.error('[API Error] fetchCategories:', error);
    
    // Fallback categories
    return ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
  }
};

// 🔹 Products سرچ کریں
export const searchProducts = async (query) => {
  try {
    if (!query || query.trim() === '') {
      return fetchProductsFromAPI();
    }
    
    console.log('[API] Searching products for: "' + query + '"');
    
    // FakeStoreAPI میں سرچ نہیں ہے، اس لیے ہم تمام fetch کر کے filter کریں گے
    const allProducts = await fetchProductsFromAPI();
    
    const searchTerm = query.toLowerCase().trim();
    const results = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
    
    console.log('[API] Found ' + results.length + ' products matching "' + query + '"');
    return results;
    
  } catch (error) {
    console.error('[API Error] searchProducts:', error);
    throw error;
  }
};

// 🔹 Products کو limit اور sort کے ساتھ fetch کریں
export const fetchProductsWithParams = async (params = {}) => {
  try {
    console.log('[API] Fetching products with params:', params);
    
    let url = API_CONFIG.ENDPOINTS.PRODUCTS;
    const queryParams = [];
    
    // Limit
    if (params.limit) {
      queryParams.push('limit=' + params.limit);
    }
    
    // Sort
    if (params.sort) {
      queryParams.push('sort=' + params.sort);
    }
    
    // Query string بنائیں
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    
    const response = await api.get(url);
    console.log('[API] Fetched ' + response.data.length + ' products with params');
    return response.data;
    
  } catch (error) {
    console.error('[API Error] fetchProductsWithParams:', error);
    throw error;
  }
};

// 🔹 Fake آرڈر پوسٹ کریں (مثال کے طور پر)
export const placeOrder = async (orderData) => {
  try {
    console.log('[API] Placing order:', orderData);
    
    // FakeStoreAPI میں orders endpoint نہیں ہے
    // Real API میں یہاں POST request ہوگی
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Fake response
    const fakeResponse = {
      success: true,
      orderId: 'ORD-' + Date.now(),
      message: 'آرڈر کامیابی سے مکمل ہوا',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    };
    
    console.log('[API] Order placed successfully');
    return fakeResponse;
    
  } catch (error) {
    console.error('[API Error] placeOrder:', error);
    throw error;
  }
};

// 🔹 API functions کو export کریں
export default {
  fetchProductsFromAPI,
  fetchProductsByCategory,
  fetchProductById,
  fetchCategories,
  searchProducts,
  fetchProductsWithParams,
  placeOrder
};

// 📝 اردو وضاحت:
// ================
// 1. تمام API calls centralize ہیں
// 2. Axios instance for configuration
// 3. Request/Response interceptors
// 4. Error handling
// 5. Transform data if needed
// 6. Fake responses for missing endpoints
// 7. Logging for debugging`;

  // 🔹 10. README.md - ERROR FIXED VERSION
  const readmeCode = `# 🛒 Redux Shopping Cart

## 📖 اردو میں وضاحت

ایک جدید ترین شاپنگ کارٹ ایپ جو Redux Toolkit، React اور Tailwind CSS v4.1 پر بنی ہے۔

## 🚀 فوری شروع

### ضروریات
- Node.js 16+
- npm یا yarn

### انسٹالیشن
\`\`\`bash
# پروجیکٹ clone کریں
git clone https://github.com/yourusername/redux-shopping-cart.git
cd redux-shopping-cart

# ڈیپنڈنسیز انسٹال کریں
npm install

# ایپ چلائیں
npm run dev
\`\`\`

### کمانڈز
\`\`\`bash
# ڈیولپمنٹ سرور
npm run dev

# پروڈکشن build
npm run build

# Build کو preview کریں
npm run preview

# Lint چلائیں
npm run lint

# Tests چلائیں
npm run test
\`\`\`

## 📁 پروجیکٹ اسٹرکچر

\`\`\`
redux-shopping-cart/
├── src/
│   ├── app/           # Redux store configuration
│   ├── features/      # Redux slices and thunks
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── public/            # Static files
└── config files       # Vite, Tailwind, etc.
\`\`\`

## 🎯 فیچرز

### 🛍️ مصنوعات
- ✅ تمام مصنوعات دیکھیں
- ✅ Category-wise فلٹرنگ
- ✅ سرچ functionality
- ✅ درجہ بندی اور reviews
- ✅ قیمت کے لحاظ سے ترتیب

### 🛒 خریداری کارٹ
- ✅ مصنوعات کارٹ میں شامل کریں/ہٹائیں
- ✅ Quantity update
- ✅ کل قیمت کا حساب
- ✅ ترسیل اور ٹیکس کا حساب
- ✅ کارٹ کو localStorage میں save کریں

### 💳 ادائیگی
- ✅ Shipping information form
- ✅ Multiple payment methods
- ✅ آرڈر summary
- ✅ آرڈر confirmation
- ✅ آرڈر history

### 📱 Responsive Design
- ✅ Mobile-friendly
- ✅ Tablet optimized
- ✅ Desktop experience
- ✅ Dark mode ready

### 🔧 Technical Features
- ✅ Redux Toolkit state management
- ✅ Tailwind CSS v4.1 for styling
- ✅ React Router for navigation
- ✅ Axios for API calls
- ✅ Error handling
- ✅ Loading states
- ✅ Form validation

## 🛠️ ٹیکنالوجیز

### Core
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation

### Styling
- **Tailwind CSS v4.1** - Utility-first CSS
- **Lucide React** - Icons
- **CSS Animations** - Smooth transitions

### Tools
- **Vite** - Build tool
- **ESLint** - Code quality
- **Prettier** - Code formatting

### APIs
- **Fake Store API** - Sample products data
- **Axios** - HTTP client

## 📦 فائل وضاحت

### Redux Store
\`\`\`javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  }
});
\`\`\`

### Products Slice
\`\`\`javascript
// src/features/products/productsSlice.js
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    // Sync actions
  },
  extraReducers: (builder) => {
    // Async actions
  }
});
\`\`\`

### Cart Slice
\`\`\`javascript
// src/features/cart/cartSlice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addToCart: (state, action) => {
      // Add item logic
    }
  }
});
\`\`\`

## 🎨 Tailwind CSS کنفیگریشن

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          600: '#2563eb'
        },
        cart: '#10b981'
      }
    }
  }
};
\`\`\`

## 🔗 API انٹیگریشن

### Products API
\`\`\`javascript
// src/features/products/productsAPI.js
export const fetchProductsFromAPI = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};
\`\`\`

### API Constants
\`\`\`javascript
// src/utils/constants.js
export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  ENDPOINTS: {
    PRODUCTS: '/products',
    CATEGORIES: '/products/categories'
  }
};
\`\`\`

## 📱 Components

### ProductList Component
\`\`\`jsx
// src/components/ProductList.jsx
const ProductList = () => {
  const { items } = useSelector((state) => state.products);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
\`\`\`

### Cart Component
\`\`\`jsx
// src/components/Cart.jsx
const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  
  return (
    <div>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
     <div>کل: ${"$"}{totalAmount.toFixed(2)}</div>
    </div>
  );
};
\`\`\`

## 🧪 Testing

### Unit Tests
\`\`\`javascript
// Tests for reducers
describe('productsSlice', () => {
  it('should handle initial state', () => {
    expect(productsReducer(undefined, {})).toEqual({
      items: [],
      status: 'idle',
      error: null
    });
  });
});
\`\`\`

### Component Tests
\`\`\`javascript
// Tests for ProductList
test('renders product list', () => {
  render(<ProductList />);
  expect(screen.getByText('مصنوعات')).toBeInTheDocument();
});
\`\`\`

## 📊 State Structure

### Products State
\`\`\`javascript
{
  products: {
    items: [
      {
        id: 1,
        title: 'Product Title',
        price: 29.99,
        category: 'electronics',
        rating: { rate: 4.5, count: 120 }
      }
    ],
    status: 'succeeded',
    error: null,
    filters: {
      category: 'all',
      minPrice: 0,
      maxPrice: 1000
    }
  }
}
\`\`\`

### Cart State
\`\`\`javascript
{
  cart: {
    items: [
      {
        id: 1,
        title: 'Product Title',
        price: 29.99,
        quantity: 2,
        image: 'url'
      }
    ],
    totalQuantity: 2,
    totalAmount: 59.98,
    isCartOpen: false
  }
}
\`\`\`

## 🔧 Custom Hooks

### useProducts Hook
\`\`\`javascript
// src/hooks/useProducts.js
const useProducts = () => {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  
  return { products, status, isLoading: status === 'loading' };
};
\`\`\`

### useCart Hook
\`\`\`javascript
// src/hooks/useCart.js
const useCart = () => {
  const items = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);
  
  return { items, totals, itemCount: items.length };
};
\`\`\`

## 🚀 Deployment

### Vercel
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Netlify
\`\`\`bash
# Build project
npm run build

# Deploy build folder
netlify deploy --prod
\`\`\`

## 📝 لائسنس

MIT لائسنس - [LICENSE](LICENSE) فائل دیکھیں۔

## 🤝 تعاون

1. Repository fork کریں
2. نیا branch بنائیں
3. اپنے changes کریں
4. Tests چلائیں
5. Pull request بنائیں

## 📞 رابطہ

- **ای میل**: contact@example.com
- **ٹویٹر**: [@react_pk](https://twitter.com/react_pk)
- **GitHub**: [issues](https://github.com/yourusername/redux-shopping-cart/issues)

## 🙏 شکریہ

- [Fake Store API](https://fakestoreapi.com) برائے sample ڈیٹا
- [Redux Toolkit](https://redux-toolkit.js.org) team
- [Tailwind CSS](https://tailwindcss.com) team
- تمام contributors

---

**نوٹ**: یہ ایک tutorial پروجیکٹ ہے جو Redux Toolkit سیکھنے کے لیے بنایا گیا ہے۔`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">
          📦 چيپٹر 34: Redux Shopping Cart - تمام فائلیں مکمل
        </h1>
        <p className="chapter-subtitle2">
          مکمل پروجیکٹ کی تمام missing فائلیں اردو وضاحت کے ساتھ
        </p>
      </div>

      {copyMessage && <div className="copy-notification">{copyMessage}</div>}

      <div className="content-wrapper">
        <div className="main-content">
          {/* تعارف */}
          <div className="lesson-section">
            <h2 className="section-title">🚀 پروجیکٹ کی تمام فائلیں</h2>

            <div className="info-box">
              <pre className="urdu-text" style={{ whiteSpace: "pre-wrap" }}>
                {chapterIntro}
              </pre>
            </div>

            <div className="concept-cards">
              <div className="concept-card">
                <h3>✅ فائل لسٹ مکمل</h3>
                <p className="urdu-text">
                  اب ہمارے پاس پروجیکٹ کی تمام required فائلیں موجود ہیں۔ ہر
                  فائل مکمل کوڈ اور اردو وضاحت کے ساتھ۔
                </p>
              </div>

              <div className="concept-card">
                <h3>🎯 ہر فائل کا مقصد</h3>
                <p className="urdu-text">
                  ہر فائل کا ایک واضح مقصد ہے۔ Components, pages, hooks,
                  utilities سب الگ الگ organized ہیں۔
                </p>
              </div>

              <div className="concept-card">
                <h3>⚡ تیار پروجیکٹ</h3>
                <p className="urdu-text">
                  اب آپ کے پاس مکمل functional shopping cart app ہے۔ بس کاپی
                  پیسٹ کریں اور استعمال کریں۔
                </p>
              </div>
            </div>
          </div>

          {/* 1. main.jsx */}
          <div className="card">
            <h3>1. 📄 main.jsx - ایپ انٹری پوائنٹ</h3>
            <p className="urdu-text">
              یہ وہ فائل ہے جو سب سے پہلے run ہوتی ہے۔ پوری ایپ کو Redux store
              سے connect کرتی ہے۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/main.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(mainJsxCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{mainJsxCode}</pre>
              </div>
            </div>
          </div>

          {/* 2. Products.jsx */}
          <div className="card">
            <h3>2. 📄 Products.jsx - مصنوعات کا صفحہ</h3>
            <p className="urdu-text">
              صرف مصنوعات کی لسٹ دکھانے والا dedicated صفحہ۔ فلٹرز، سرچ اور
              سورٹنگ features۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/pages/Products.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productsPageCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productsPageCode}</pre>
              </div>
            </div>
          </div>

          {/* 3. Checkout.jsx */}
          <div className="card">
            <h3>3. 📄 Checkout.jsx - ادائیگی کا صفحہ</h3>
            <p className="urdu-text">
              مکمل checkout process۔ Shipping information, payment methods,
              order summary۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/pages/Checkout.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(checkoutPageCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{checkoutPageCode}</pre>
              </div>
            </div>
          </div>

          {/* 4. Navbar.jsx */}
          <div className="card">
            <h3>4. 📄 Navbar.jsx - Navigation Bar</h3>
            <p className="urdu-text">
              Responsive navigation bar جو ہر صفحے پر دکھتا ہے۔ Logo, links,
              search, cart button۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/components/Navbar.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(navbarCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{navbarCode}</pre>
              </div>
            </div>
          </div>

          {/* 5. Footer.jsx */}
          <div className="card">
            <h3>5. 📄 Footer.jsx - Footer Component</h3>
            <p className="urdu-text">
              مکمل footer باہول ڈیزائن۔ Links, contact info, social media,
              copyright۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/components/Footer.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(footerCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{footerCode}</pre>
              </div>
            </div>
          </div>

          {/* 6. Modal.jsx */}
          <div className="card">
            <h3>6. 📄 Modal.jsx - Reusable Modal</h3>
            <p className="urdu-text">
              دوبارہ استعمال ہونے والا modal component۔ مختلف sizes, animations,
              customization۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/components/Modal.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(modalCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{modalCode}</pre>
              </div>
            </div>
          </div>

          {/* 7. Home.jsx */}
          <div className="card">
            <h3>7. 📄 Home.jsx - ہوم پیج</h3>
            <p className="urdu-text">
              ایپ کا مرکزی ہوم پیج۔ Hero section, featured products, categories,
              features۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/pages/Home.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(homePageCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{homePageCode}</pre>
              </div>
            </div>
          </div>

          {/* 8. constants.js */}
          <div className="card">
            <h3>8. 📄 constants.js - مستقل اقدار</h3>
            <p className="urdu-text">
              تمام constant values ایک جگہ۔ API config, colors, messages,
              routes۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/utils/constants.js</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(constantsCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{constantsCode}</pre>
              </div>
            </div>
          </div>

          {/* 9. productsAPI.js */}
          <div className="card">
            <h3>9. 📄 productsAPI.js - API Calls</h3>
            <p className="urdu-text">
              Fake Store API سے ڈیٹا fetch کرنے کی تمام functions۔ Axios
              instance, interceptors۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/products/productsAPI.js</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productsAPICode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productsAPICode}</pre>
              </div>
            </div>
          </div>

          {/* 10. README.md */}
          <div className="card">
            <h3>10. 📄 README.md - ڈاکیومینٹیشن</h3>
            <p className="urdu-text">
              مکمل پروجیکٹ ڈاکیومینٹیشن۔ Installation, features, structure,
              deployment۔
            </p>

            <div className="code-block-container">
              <div className="code-header">
                <span>README.md (اردو میں)</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(readmeCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{readmeCode}</pre>
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="card success-box">
            <h3>🎉 مکمل پروجیکٹ تیار!</h3>

            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-number">10</div>
                <div className="summary-text">مکمل فائلیں</div>
              </div>

              <div className="summary-item">
                <div className="summary-number">1000+</div>
                <div className="summary-text">لائنیں کوڈ</div>
              </div>

              <div className="summary-item">
                <div className="summary-number">اردو</div>
                <div className="summary-text">مکمل وضاحت</div>
              </div>

              <div className="summary-item">
                <div className="summary-number">✅</div>
                <div className="summary-text">ہر فائل مکمل</div>
              </div>
            </div>

            <div className="final-instructions">
              <h4>🚀 پروجیکٹ چلانے کے لیے:</h4>
              <ol className="urdu-text">
                <li>اوپر دیے گئے تمام کوڈ blocks کاپی کریں</li>
                <li>اپنے پروجیکٹ میں متعلقہ فائلوں میں پیسٹ کریں</li>
                <li>Package.json میں dependencies شامل کریں</li>
                <li>
                  <code>npm run dev</code> چلائیں
                </li>
                <li>
                  <code>http://localhost:5173</code> کھولیں
                </li>
              </ol>

              <div className="features-list">
                <h4>🎯 پروجیکٹ کی خصوصیات:</h4>
                <div className="features-grid">
                  <div className="feature">✅ Redux Toolkit</div>
                  <div className="feature">✅ Tailwind CSS v4.1</div>
                  <div className="feature">✅ Responsive Design</div>
                  <div className="feature">✅ Fake Store API</div>
                  <div className="feature">✅ Shopping Cart</div>
                  <div className="feature">✅ Checkout Process</div>
                  <div className="feature">✅ Product Filters</div>
                  <div className="feature">✅ Search Functionality</div>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  className="primary-btn"
                  onClick={() =>
                    copyCodeToClipboard(
                      mainJsxCode +
                      "\n\n" +
                      productsPageCode +
                      "\n\n" +
                      checkoutPageCode +
                      "\n\n" +
                      navbarCode +
                      "\n\n" +
                      footerCode +
                      "\n\n" +
                      modalCode +
                      "\n\n" +
                      homePageCode +
                      "\n\n" +
                      constantsCode +
                      "\n\n" +
                      productsAPICode,
                    )
                  }
                >
                  تمام فائلیں کاپی کریں
                </button>
                <button
                  className="secondary-btn"
                  onClick={() => copyCodeToClipboard(readmeCode)}
                >
                  README.md کاپی کریں
                </button>
              </div>

              <div className="success-message">
                <h4>🎉 مبارک ہو!</h4>
                <p className="urdu-text">
                  اب آپ کے پاس Redux Toolkit پر بنی مکمل Shopping Cart App موجود
                  ہے۔ پروجیکٹ کو customize کریں، نئے features شامل کریں، اور
                  Redux Toolkit کی مکمل طاقت کو سیکھیں۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .concept-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .concept-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #4f46e5;
        }

        .concept-card h3 {
          color: #4f46e5;
          margin-bottom: 10px;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .summary-item {
          background: white;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .summary-number {
          font-size: 32px;
          font-weight: bold;
          color: #4f46e5;
          margin-bottom: 10px;
        }

        .summary-text {
          color: #6b7280;
          font-size: 14px;
        }

        .final-instructions {
          margin-top: 30px;
        }

        .final-instructions ol {
          padding-left: 20px;
          margin: 20px 0;
        }

        .final-instructions li {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .features-list {
          margin: 30px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-top: 15px;
        }

        .feature {
          background: #ecfdf5;
          border: 1px solid #10b981;
          color: #065f46;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          text-align: center;
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .primary-btn {
          background: #4f46e5;
          color: white;
        }

        .secondary-btn {
          background: white;
          color: #4f46e5;
          border: 2px solid #4f46e5;
        }

        .primary-btn:hover {
          background: #4338ca;
          transform: translateY(-2px);
        }

        .secondary-btn:hover {
          background: #eef2ff;
          transform: translateY(-2px);
        }

        .success-message {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 12px;
          margin-top: 30px;
        }

        .success-message h4 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .success-message p {
          font-size: 16px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
