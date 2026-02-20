import React, { useState } from "react";
import "../App.css";

export default function Chapter31() {
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

  // Installation Guide Code with Tailwind CSS v4.1
  const installationCode = `# 🔧 Redux Toolkit + Tailwind CSS v4.1 Installation

# Step 1: نیا React پروجیکٹ بنائیں (Vite استعمال کریں)
npm create vite@latest redux-shopping-cart -- --template react

# Step 2: پروجیکٹ فولڈر میں جائیں
cd redux-shopping-cart

# Step 3: Redux Toolkit packages انسٹال کریں
npm install @reduxjs/toolkit react-redux

# Step 4: Tailwind CSS v4.1 انسٹال کریں (آسان ترین طریقہ)
npm install tailwindcss@latest @tailwindcss/vite@latest

# Step 5: Additional packages (اختیاری لیکن مفید)
npm install react-icons  # آئیکنز کے لیے
npm install axios        # API calls کے لیے
npm install lucide-react # modern icons

# Step 6: Tailwind CSS Setup
# 1. tailwind.config.js بنائیں
echo "module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}" > tailwind.config.js

# 2. src/index.css میں Tailwind شامل کریں
echo "@import 'tailwindcss';" > src/index.css

# Step 7: پروجیکٹ چلائیں
npm run dev`;

  // Store Setup Code (Same)
  const storeSetupCode = `// 📁 src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

// Store بنانے کا جدید ترین طریقہ
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  
  // Development میں مفید features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ایسے actions جو serializable نہیں ہیں
        ignoredActions: ['cart/addToCart'],
      },
    }),
    
  // DevTools خودکار enable ہو جائیں گی
  devTools: process.env.NODE_ENV !== 'production',
});`;

  // Provider Setup Code - Updated for Tailwind
  const providerSetupCode = `// 📁 src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css'; // Tailwind CSS یہاں import ہوگا

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 🎯 یہاں Provider لگائیں - پورے app کو store فراہم کرتا ہے */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);`;

  // Main App Component with Tailwind CSS
  const appComponentCode = `// 📁 src/App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react';
import { toggleCart } from './features/cart/cartSlice';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();
  const { totalQuantity, isCartOpen } = useSelector((state) => state.cart);

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔝 Modern Navigation Bar with Tailwind */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cart to-primary-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">🛒 ریڈکس مارٹ</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="مصنوعات تلاش کریں..."
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors">
                <Heart size={20} />
                <span>پسندیدہ</span>
              </button>
              
              <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors">
                <User size={20} />
                <span>اکاؤنٹ</span>
              </button>
              
              {/* Cart Button with Badge */}
              <button 
                onClick={handleCartToggle}
                className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ShoppingCart size={24} />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-cart">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 🏠 Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-cart bg-clip-text text-transparent">
              🛒 ریڈکس شاپنگ کارٹ
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Redux Toolkit کا عملی استعمال - Tailwind CSS v4.1 کے ساتھ مکمل ای کامرس ایپ
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
              🚀 مصنوعات دیکھیں
            </button>
            <button className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
              📚 Tutorial
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 📦 Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">مصنوعات</h2>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>ترتیب دیں</option>
                    <option>قیمت: کم سے زیادہ</option>
                    <option>قیمت: زیادہ سے کم</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>تمام زمروں</option>
                    <option>الیکٹرانکس</option>
                    <option>زیورات</option>
                    <option>لباس</option>
                  </select>
                </div>
              </div>
              <ProductList />
            </div>
          </div>
          
          {/* 🛒 Cart Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Cart />
            </div>
          </div>
        </div>
        
        {/* ℹ️ Information Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Redux Toolkit Features Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 font-bold">SL</div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">createSlice</h4>
              <p className="text-sm text-gray-600">State + Actions + Reducer</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 font-bold">AT</div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">AsyncThunk</h4>
              <p className="text-sm text-gray-600">API calls async میں</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-purple-600 font-bold">CS</div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">configureStore</h4>
              <p className="text-sm text-gray-600">Store setup آسان</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-yellow-600 font-bold">US</div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">useSelector</h4>
              <p className="text-sm text-gray-600">State access</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 📱 Cart Modal (Mobile) */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCartToggle}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">آپ کا کارٹ</h3>
                <button 
                  onClick={handleCartToggle}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <Cart />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg">🚀 React + Redux Toolkit + Tailwind CSS v4.1</p>
            <p className="text-gray-400 mt-2">مکمل Professional Shopping Cart Application</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;`;

  // Product Component with Tailwind - FIXED VERSION
  const productComponentCode = `// 📁 src/components/ProductList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Star, Eye, Heart } from 'lucide-react';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    }));
  };

  const handleFavoriteClick = (productId) => {
    console.log('Add to favorites:', productId);
  };

  const handleQuickView = (productId) => {
    console.log('Quick view:', productId);
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">مصنوعات لوڈ ہو رہی ہیں...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-red-600 font-medium">❌ خرابی: {error}</p>
        <button 
          onClick={() => dispatch(fetchProducts())}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          دوبارہ کوشش کریں
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((product) => (
        <div 
          key={product.id} 
          className="product-card bg-white rounded-xl shadow-md hover:shadow-xl hover-lift transition-all duration-300"
        >
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-t-xl bg-gray-100">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-contain p-4 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
                {product.category}
              </span>
            </div>
            
            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button 
                onClick={() => handleFavoriteClick(product.id)}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-50"
              >
                <Heart size={16} />
              </button>
              <button 
                onClick={() => handleQuickView(product.id)}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-50"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
              {product.title}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating?.rate || 0) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({product.rating?.count || 0})
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  \${product.price ? product.price.toFixed(2) : '0.00'}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  \${product.price ? (product.price * 1.2).toFixed(2) : '0.00'}
                </span>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                🔥 20% OFF
              </span>
            </div>
            
            {/* Add to Cart Button */}
            <button 
              onClick={() => handleAddToCart(product)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cart text-white rounded-lg hover:bg-cart-hover transition-colors font-medium"
            >
              <ShoppingCart size={18} />
              <span>کارٹ میں شامل کریں</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;`;

  // Cart Component with Tailwind - FIXED VERSION
  const cartComponentCode = `// 📁 src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { removeFromCart, clearCart, updateQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (window.confirm('کیا آپ واقعی پورا کارٹ صاف کرنا چاہتے ہیں؟')) {
      dispatch(clearCart());
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">خالی کارٹ</h3>
        <p className="text-gray-600 mb-6">آپ کے کارٹ میں کوئی مصنوعات نہیں ہیں</p>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors w-full">
          مصنوعات دیکھیں
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Cart Header */}
      <div className="bg-gradient-to-r from-primary-600 to-cart p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">آپ کا کارٹ</h3>
            <p className="text-primary-100 text-sm mt-1">
              {totalQuantity} اشیاء
            </p>
          </div>
          <ShoppingBag size={24} />
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-6 max-h-[400px] overflow-y-auto">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center py-4 border-b border-gray-100 last:border-0"
          >
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-contain p-1"
              />
            </div>
            
            {/* Product Info */}
            <div className="ml-4 flex-1">
              <h4 className="font-medium text-gray-800 line-clamp-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              <p className="text-lg font-bold text-primary-600 mt-1">
                \${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Minus size={14} />
              </button>
              
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Plus size={14} />
              </button>
              
              <button 
                onClick={() => handleRemoveFromCart(item.id)}
                className="w-8 h-8 rounded-full border border-red-200 flex items-center justify-center hover:bg-red-50 text-red-500 ml-2"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="p-6 bg-gray-50">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">ذیلی کل:</span>
            <span className="font-medium">\${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ترسیل:</span>
            <span className="font-medium text-green-600">مفت</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ٹیکس:</span>
            <span className="font-medium">\${(totalAmount * 0.05).toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between text-lg font-bold">
              <span>کل:</span>
              <span className="text-primary-600">
                \${(totalAmount * 1.05).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            چیک آؤٹ کریں
          </button>
          
          <button 
            onClick={handleClearCart}
            className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            کارٹ صاف کریں
          </button>
          
          <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            خریداری جاری رکھیں
          </button>
        </div>
        
        {/* Security Badges */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-center space-x-6 text-gray-500">
            <div className="text-center">
              <div className="text-2xl">🔒</div>
              <p className="text-xs mt-1">محفوظ ادائیگی</p>
            </div>
            <div className="text-center">
              <div className="text-2xl">🚚</div>
              <p className="text-xs mt-1">تیز ترسیل</p>
            </div>
            <div className="text-center">
              <div className="text-2xl">↩️</div>
              <p className="text-xs mt-1">30 دن واپسی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;`;

  // فولڈر اسٹرکچر کوڈ
  const folderStructureCode = `text
redux-shopping-cart/
├── 📂 node_modules/          # تمام پیکجز اور ڈیپنڈنسیز
├── 📂 public/                # عوامی فائلیں (تصاویر، آئیکنز وغیرہ)
│   ├── vite.svg
│   └── index.html            # اصلی HTML فائل
│
├── 📂 src/                   # سورس کوڈ کی فائلیں
│   ├── 📂 app/               # ریڈکس ایپلیکیشن سیٹ اپ
│   │   └── store.js          # ریڈکس اسٹور کا سیٹ اپ - یہاں تمام ریڈیوسر جمع ہوتے ہیں
│   │
│   ├── 📂 features/          # فیچر بیسڈ ڈائریکٹری (Redux Toolkit کا بہترین طریقہ)
│   │   ├── 📂 products/      # مصنوعات سے متعلق تمام فائلیں
│   │   │   ├── productsSlice.js     # مصنوعات کا ریڈیوسر (state, actions, reducers)
│   │   │   └── productsAPI.js       # API calls کے لیے functions
│   │   │
│   │   └── 📂 cart/          # کارٹ سے متعلق تمام فائلیں
│   │       ├── cartSlice.js         # کارٹ کا ریڈیوسر
│   │       └── cartThunks.js        # کارٹ کے async functions
│   │
│   ├── 📂 components/        # تمام ری ایکٹ components
│   │   ├── ProductList.jsx          # مصنوعات کی لسٹ دکھانے والا component
│   │   ├── Cart.jsx                 # خریداری کارٹ component
│   │   ├── Navbar.jsx               # نیویگیشن بار (اوپر والا مینو)
│   │   ├── Footer.jsx               # نیچے والا حصہ
│   │   └── Modal.jsx                # دوبارہ استعمال ہونے والا پاپ اپ
│   │
│   ├── 📂 pages/             # مختلف صفحات کے components
│   │   ├── Home.jsx                 # ہوم پیج (اصلی صفحہ)
│   │   ├── Products.jsx             # صرف مصنوعات کا صفحہ
│   │   └── Checkout.jsx             # ادائیگی کا صفحہ
│   │
│   ├── 📂 hooks/             # Custom React Hooks
│   │   ├── useCart.js               # کارٹ کے لیے مخصوص hook
│   │   └── useProducts.js           # مصنوعات کے لیے مخصوص hook
│   │
│   ├── 📂 utils/             # مددگار فائلیں
│   │   ├── constants.js             # مستقل اقدار (رنگ، قیمتیں وغیرہ)
│   │   └── helpers.js               # چھوٹے چھوٹے مددگار functions
│   │
│   ├── App.jsx                      # Main App component - پوری ایپ کا ڈھانچہ
│   ├── main.jsx                     # ایپ انٹری پوائنٹ - یہاں سے ایپ شروع ہوتی ہے
│   └── index.css                    # Global styles (Tailwind + custom CSS)
│
├── tailwind.config.js               # ٹیل ونڈ CSS کی کنفیگریشن فائل (v4.1 کے لیے)
├── vite.config.js                   # Vite build tool کی کنفیگریشن
├── package.json                     # ڈیپنڈنسیز اور سکرپٹس
├── README.md                        # پروجیکٹ کی ڈاکیومینٹیشن
└── .gitignore                       # Git ignore فائل (کون سی فائلیں گٹ میں شامل نہ ہوں)`;

  // Vite کنفیگریشن کوڈ
  const viteConfigCode = `// vite.config.js میں یہ کوڈ شامل کریں
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ بس یہ ایک لائن شامل کرنی ہے
  ],
})`;

  // Tailwind CSS کنفیگریشن کوڈ
  const tailwindConfigCode = `/* src/index.css فائل میں صرف یہ ایک لائن لکھیں */
@import 'tailwindcss';

/* اپنے custom styles (اختیاری) */
@layer base {
  body {
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
  }
  
  .card-hover {
    @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}`;

  // رن کمانڈز
  const runCommandsCode = `# 🚀 پروجیکٹ چلانے کی کمانڈز

# ڈیولپمنٹ سرور شروع کریں (سب سے پہلے یہ کمانڈ چلائیں)
npm run dev

# پروڈکشن کے لیے build بنائیں
npm run build

# پروڈکشن build کو local پر چیک کریں
npm run preview

# اپنی ڈیپنڈنسیز چیک کریں
npm outdated

# تمام ڈیپنڈنسیز کو update کریں
npm update`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">📦 چيپٹر 31: Redux Toolkit عملی گائیڈ</h1>
        <p className="chapter-subtitle2">Tailwind CSS v4.1 کے ساتھ مکمل Shopping Cart App</p>
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
            <h2 className="section-title">🚀 Redux Toolkit + Tailwind CSS v4.1</h2>
            <p className="urdu-text">
              اس چيپٹر میں ہم Redux Toolkit اور Tailwind CSS v4.1 کی مکمل طاقت دیکھیں گے۔ ایک جدید اور responsive Shopping Cart App بنائیں گے جو professional UI کے ساتھ حقیقی پروجیکٹ کی طرح کام کرے گی۔
            </p>
            
            <div className="info-box">
              <h3>📚 اس چيپٹر میں کیا سیکھیں گے:</h3>
              <ul className="urdu-text">
                <li>✅ Redux Toolkit کا جدید ترین استعمال</li>
                <li>✅ Tailwind CSS v4.1 کا مکمل سیٹ اپ</li>
                <li>✅ Professional فولڈر اسٹرکچر</li>
                <li>✅ Responsive ڈیزائن کا عملی استعمال</li>
                <li>✅ API integration اور state management</li>
              </ul>
            </div>
          </div>

          {/* فولڈر اسٹرکچر */}
          <div className="card">
            <h3>📁 فولڈر اسٹرکچر (اردو وضاحت کے ساتھ)</h3>
            <p className="urdu-text">
              ایک بہترین پروجیکٹ کا فولڈر اسٹرکچر بہت اہم ہے۔ یہ آپ کے کوڈ کو منظم رکھتا ہے اور دوسرے ڈویلپرز کے لیے سمجھنا آسان بناتا ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>مکمل فولڈر اسٹرکچر</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(folderStructureCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{folderStructureCode}</pre>
              </div>
            </div>
          </div>

          {/* انسٹالیشن گائیڈ */}
          <div className="card">
            <h3>🔧 انسٹالیشن گائیڈ</h3>
            <p className="urdu-text">
              درج ذیل کمانڈز چلا کر آپ مکمل پروجیکٹ سیٹ اپ کر سکتے ہیں۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>انسٹالیشن کمانڈز</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(installationCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{installationCode}</pre>
              </div>
            </div>
          </div>

          {/* Vite کنفیگریشن */}
          <div className="card">
            <h3>⚙️ Vite کنفیگریشن (Tailwind v4.1 کے ساتھ)</h3>
            <p className="urdu-text">
              Tailwind CSS v4.1 کو Vite کے ساتھ استعمال کرنے کے لیے یہ کنفیگریشن درکار ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>vite.config.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(viteConfigCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{viteConfigCode}</pre>
              </div>
            </div>
          </div>

          {/* Tailwind CSS کنفیگریشن */}
          <div className="card">
            <h3>🎨 Tailwind CSS کنفیگریشن</h3>
            <p className="urdu-text">
              Tailwind v4.1 میں بس ایک لائن سے کام چل جاتا ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/index.css</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(tailwindConfigCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{tailwindConfigCode}</pre>
              </div>
            </div>
          </div>

          {/* ریڈکس اسٹور سیٹ اپ */}
          <div className="card">
            <h3>🛠 Redux Store سیٹ اپ</h3>
            <p className="urdu-text">
              یہ Redux Toolkit کا جدید ترین store setup ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/app/store.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(storeSetupCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{storeSetupCode}</pre>
              </div>
            </div>
          </div>

          {/* پرووائیڈر سیٹ اپ */}
          <div className="card">
            <h3>🎯 React میں Redux Provider سیٹ اپ</h3>
            <p className="urdu-text">
              پوری ایپ کو Redux store فراہم کرنے کے لیے یہ سیٹ اپ ضروری ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/main.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(providerSetupCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{providerSetupCode}</pre>
              </div>
            </div>
          </div>

          {/* Main App Component */}
          <div className="card">
            <h3>🚀 Main App Component باہول ڈیزائن</h3>
            <p className="urdu-text">
              یہ پوری ایپ کا مرکزی کامپونینٹ ہے جس میں navigation, products, cart سب کچھ شامل ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>Complete App.jsx (Tailwind v4.1)</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(appComponentCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{appComponentCode}</pre>
              </div>
            </div>
          </div>

          {/* Product Component */}
          <div className="card">
            <h3>📦 ProductList Component</h3>
            <p className="urdu-text">
              مصنوعات کی لسٹ دکھانے والا کامپونینٹ جو API سے ڈیٹا fetch کرتا ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>ProductList.jsx with Tailwind</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productComponentCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productComponentCode}</pre>
              </div>
            </div>
          </div>

          {/* Cart Component */}
          <div className="card">
            <h3>🛒 Cart Component</h3>
            <p className="urdu-text">
              خریداری کارٹ کا کامپونینٹ جس میں items کی تعداد، قیمت اور دیگر details دکھائی جاتی ہیں۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>Cart.jsx with Tailwind</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(cartComponentCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{cartComponentCode}</pre>
              </div>
            </div>
          </div>

          {/* رن کمانڈز */}
          <div className="card">
            <h3>🚀 پروجیکٹ چلانے کی کمانڈز</h3>
            <p className="urdu-text">
              پروجیکٹ کو چلانے اور maintain کرنے کے لیے ضروری کمانڈز۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>npm کمانڈز</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(runCommandsCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{runCommandsCode}</pre>
              </div>
            </div>
          </div>

          {/* Final Instructions */}
          <div className="card success-box">
            <h3>🎉 پروجیکٹ چلانے کے آخری مراحل</h3>
            
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Vite پروجیکٹ بنائیں</h4>
                <p className="urdu-text">npm create vite@latest redux-shopping-cart -- --template react</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Tailwind v4.1 انسٹال کریں</h4>
                <p className="urdu-text">npm install tailwindcss@latest @tailwindcss/vite@latest</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Redux Toolkit انسٹال کریں</h4>
                <p className="urdu-text">npm install @reduxjs/toolkit react-redux</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>اضافی پیکجز</h4>
                <p className="urdu-text">npm install lucide-react axios react-icons</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>کوڈ کاپی کریں</h4>
                <p className="urdu-text">اوپر دیے گئے تمام کوڈ بلاکس کاپی پیسٹ کریں</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>ایپ چلائیں</h4>
                <p className="urdu-text">
                  <code>npm run dev</code> چلائیں اور <code>http://localhost:5173</code> کھولیں
                </p>
              </div>
            </div>
            
            <div style={{marginTop: '30px', textAlign: 'center', padding: '20px'}}>
              <h4>🎉 مبارک ہو! آپ کی جدید ترین Shopping Cart App تیار ہے! 🎉</h4>
              <p className="urdu-text" style={{fontSize: '18px', fontWeight: 'bold', marginTop: '10px'}}>
                اب آپ Redux Toolkit + Tailwind CSS v4.1 کی مکمل طاقت استعمال کر رہے ہیں!
              </p>
              
              <div style={{marginTop: '20px'}}>
                <h5>📱 Features جو آپ نے implement کیے:</h5>
                <div className="features-grid">
                  <div className="feature-item">✅ Responsive Design</div>
                  <div className="feature-item">✅ Modern UI with Tailwind</div>
                  <div className="feature-item">✅ State Management with Redux</div>
                  <div className="feature-item">✅ API Integration</div>
                  <div className="feature-item">✅ Shopping Cart Functionality</div>
                  <div className="feature-item">✅ Professional Folder Structure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}