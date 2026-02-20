import React, { useState } from "react";
import "../App.css";

export default function Chapter32() {
  const [copyMessage, setCopyMessage] = useState("");

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

  // 🔸 createSlice کی تعریف اور فائدے
  const createSliceInfo = `// 🎯 createSlice کیا ہے؟
// =======================
// createSlice Redux Toolkit کا ایک اہم function ہے جو Redux reducer بنانے
// کا جدید اور آسان ترین طریقہ پیش کرتا ہے۔

// 🔹 createSlice کے تین حصے ہوتے ہیں:
// 1. name: slice کا نام (string)
// 2. initialState: ابتدائی state
// 3. reducers: تمام reducer functions

// 🚀 createSlice کے فائدے:
// ========================
// ✅ کم کوڈ: Traditional Redux کے مقابلے میں 70% کم کوڈ
// ✅ خودکار action creators: خودبخود actions بن جاتے ہیں
// ✅ Immer.js: State mutation آسان ہو جاتا ہے
// ✅ DevTools: Redux DevTools کے ساتھ مکمل compatibility
// ✅ TypeScript support: مکمل TypeScript سپورٹ

// 📊 Traditional Redux vs Redux Toolkit
// =====================================
// | روایتی Redux        | Redux Toolkit         |
// |---------------------|-----------------------|
// | 4-5 فائلیں          | 1 فائل                |
// | 50+ لائنیں          | 15-20 لائنیں          |
// | دستی action types   | خودکار action types  |
// | پیچیدہ setup        | آسان setup           |`;

  // Products Slice Example
  const productsSliceCode = `// 📁 src/features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔸 ابتدائی state (Initial State)
const initialState = {
  items: [],          // مصنوعات کی لسٹ
  status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,        // خرابی کا پیغام
  selectedProduct: null, // منتخب مصنوعات
  filters: {          // فلٹرز
    category: 'all',
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'price-asc'
  }
};

// 🔸 Async Thunk for API calls
// createAsyncThunk async operations کے لیے استعمال ہوتا ہے
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',  // action type
  async () => {
    // API call (fetch یا axios)
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;  // fulfilled action کے payload میں جائے گا
  }
);

// 🔸 createSlice کا استعمال
const productsSlice = createSlice({
  name: 'products',        // slice کا نام
  initialState,           // ابتدائی state
  reducers: {
    // 🔹 Sync Actions (بغیر async کے)
    
    // مصنوعات منتخب کرنا
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    
    // فلٹرز اپڈیٹ کرنا
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    
    // مصنوعات سرچ کرنا
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.items = state.items.map(product => ({
        ...product,
        visible: product.title.toLowerCase().includes(searchTerm)
      }));
    },
    
    // مصنوعات صاف کرنا
    clearProducts: (state) => {
      state.items = [];
      state.selectedProduct = null;
    }
  },
  
  // 🔸 Extra Reducers for Async Actions
  extraReducers: (builder) => {
    builder
      // Case 1: Loading state
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      
      // Case 2: Success state
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      
      // Case 3: Error state
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// 🔸 Export Actions (خودکار طور پر بن جاتے ہیں)
export const { 
  selectProduct, 
  updateFilters, 
  searchProducts, 
  clearProducts 
} = productsSlice.actions;

// 🔸 Export Reducer
export default productsSlice.reducer;

// 🔹 Action Types خودکار طور پر (دیکھنے کے لیے)
console.log(productsSlice.actions);
// {
//   selectProduct: (payload) => ({ type: 'products/selectProduct', payload }),
//   updateFilters: (payload) => ({ type: 'products/updateFilters', payload }),
//   ...
// }`;

  // Cart Slice Example
  const cartSliceCode = `// 📁 src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 🔸 Cart کی ابتدائی state
const initialState = {
  items: [],              // کارٹ میں اشیاء
  totalQuantity: 0,       // کل تعداد
  totalAmount: 0,         // کل رقم
  isCartOpen: false,      // کارٹ کھلا ہے یا بند
  shippingInfo: {         // ترسیل کی معلومات
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan'
  }
};

// 🔸 Helper function for calculations
const calculateTotals = (items) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { totalQuantity, totalAmount };
};

// 🔸 createSlice for Cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 🔹 کارٹ میں شے شامل کرنا
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // اگر شے پہلے سے موجود ہے، quantity بڑھائیں
        existingItem.quantity += 1;
      } else {
        // نئی شے شامل کریں
        state.items.push({
          ...newItem,
          quantity: 1,
          addedAt: new Date().toISOString()
        });
      }
      
      // کل مقدار اور رقم کا حساب لگائیں
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    // 🔹 کارٹ سے شے ہٹانا
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    // 🔹 Quantity اپڈیٹ کرنا
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        
        const { totalQuantity, totalAmount } = calculateTotals(state.items);
        state.totalQuantity = totalQuantity;
        state.totalAmount = totalAmount;
      }
    },
    
    // 🔹 پورا کارٹ صاف کرنا
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    
    // 🔹 کارٹ کھولنا/بند کرنا
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    
    // 🔹 ترسیل کی معلومات اپڈیٹ کرنا
    updateShippingInfo: (state, action) => {
      state.shippingInfo = { ...state.shippingInfo, ...action.payload };
    },
    
    // 🔹 کارٹ میں موجود تمام اشیاء کی quantity بڑھانا
    increaseAllQuantities: (state) => {
      state.items.forEach(item => {
        item.quantity += 1;
      });
      
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    }
  }
});

// 🔸 Export Actions
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  updateShippingInfo,
  increaseAllQuantities
} = cartSlice.actions;

// 🔸 Export Reducer
export default cartSlice.reducer;`;

  // Cart Thunks Example
  const cartThunksCode = `// 📁 src/features/cart/cartThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// 🔸 Async Thunk: کارٹ کو localStorage میں save کرنا
export const saveCartToLocalStorage = createAsyncThunk(
  'cart/saveCartToLocalStorage',
  async (cartData, { rejectWithValue }) => {
    try {
      // localStorage میں save کریں
      localStorage.setItem('shoppingCart', JSON.stringify(cartData));
      return { success: true, message: 'کارٹ محفوظ ہو گیا' };
    } catch (error) {
      return rejectWithValue({ 
        success: false, 
        message: 'کارٹ محفوظ کرنے میں خرابی' 
      });
    }
  }
);

// 🔸 Async Thunk: localStorage سے کارٹ load کرنا
export const loadCartFromLocalStorage = createAsyncThunk(
  'cart/loadCartFromLocalStorage',
  async (_, { rejectWithValue }) => {
    try {
      const savedCart = localStorage.getItem('shoppingCart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
      return null;
    } catch (error) {
      return rejectWithValue({ 
        success: false, 
        message: 'کارٹ لوڈ کرنے میں خرابی' 
      });
    }
  }
);

// 🔸 Async Thunk: سرور پر کارٹ save کرنا
export const saveCartToServer = createAsyncThunk(
  'cart/saveCartToServer',
  async (cartData, { rejectWithValue }) => {
    try {
      // API call to save cart
      const response = await fetch('/api/cart/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });
      
      if (!response.ok) {
        throw new Error('سرور نے جواب نہیں دیا');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔸 Async Thunk: Checkout process
export const checkoutCart = createAsyncThunk(
  'cart/checkout',
  async (checkoutData, { rejectWithValue }) => {
    try {
      // Step 1: Validate cart
      if (!checkoutData.items || checkoutData.items.length === 0) {
        throw new Error('کارٹ خالی ہے');
      }
      
      // Step 2: Process payment
      const paymentResponse = await fetch('/api/payment/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: checkoutData.totalAmount,
          items: checkoutData.items,
          shipping: checkoutData.shippingInfo
        }),
      });
      
      if (!paymentResponse.ok) {
        throw new Error('ادائیگی میں خرابی');
      }
      
      const paymentResult = await paymentResponse.json();
      
      // Step 3: Create order
      const orderResponse = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...checkoutData,
          paymentId: paymentResult.id,
          status: 'pending'
        }),
      });
      
      const orderResult = await orderResponse.json();
      
      return {
        success: true,
        orderId: orderResult.orderId,
        paymentId: paymentResult.id,
        message: 'آرڈر کامیابی سے مکمل ہوا'
      };
    } catch (error) {
      return rejectWithValue({
        success: false,
        message: error.message
      });
    }
  }
);

// 🔸 Async Thunk: کارٹ کی معلومات کو sync کرنا
export const syncCartWithServer = createAsyncThunk(
  'cart/syncCartWithServer',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { cart } = state;
      
      // سرور پر موجود کارٹ کی معلومات حاصل کریں
      const serverResponse = await fetch('/api/cart/sync');
      const serverCart = await serverResponse.json();
      
      // مقامی اور سرور کارٹ کو merge کریں
      const mergedCart = {
        ...cart,
        items: mergeCartItems(cart.items, serverCart.items)
      };
      
      return mergedCart;
    } catch (error) {
      return rejectWithValue('کارٹ sync کرنے میں خرابی');
    }
  }
);

// 🔸 Helper function: کارٹ items کو merge کرنا
const mergeCartItems = (localItems, serverItems) => {
  const merged = [...localItems];
  
  serverItems.forEach(serverItem => {
    const existingItem = merged.find(item => item.id === serverItem.id);
    if (!existingItem) {
      merged.push(serverItem);
    } else {
      // اگر دونوں جگہ موجود ہے، quantity کو زیادہ والی لے لو
      existingItem.quantity = Math.max(existingItem.quantity, serverItem.quantity);
    }
  });
  
  return merged;
};`;

  // Slice کے استعمال کی مثال - FIXED VERSION
  const sliceUsageExample = `// 🔸 React Component میں Slice کا استعمال

// 📁 src/components/ProductList.jsx (مثال)
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  selectProduct, 
  updateFilters 
} from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { saveCartToLocalStorage } from '../features/cart/cartThunks';

function ProductList() {
  const dispatch = useDispatch();
  
  // 🔹 useSelector سے state حاصل کریں
  const { items, status, error } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);
  
  useEffect(() => {
    // 🔹 Async action dispatch کریں
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  
  const handleAddToCart = (productItem) => {
    // 🔹 Sync action dispatch کریں
    dispatch(addToCart(productItem));
    
    // 🔹 Async thunk dispatch کریں
    dispatch(saveCartToLocalStorage({
      items: [...cartItems, productItem],
      timestamp: new Date().toISOString()
    }));
  };
  
  const handleSelectProduct = (productId) => {
    dispatch(selectProduct(productId));
  };
  
  const handleFilterChange = (filterType, value) => {
    dispatch(updateFilters({ [filterType]: value }));
  };
  
  if (status === 'loading') {
    return <div>لوڈ ہو رہا ہے...</div>;
  }
  
  if (status === 'failed') {
    return <div>خرابی: {error}</div>;
  }
  
  return (
    <div>
      <h2>مصنوعات</h2>
      <div className="filters">
        <select onChange={(e) => handleFilterChange('category', e.target.value)}>
          <option value="all">تمام زمروں</option>
          <option value="electronics">الیکٹرانکس</option>
          <option value="jewelery">زیورات</option>
        </select>
      </div>
      
      <div className="products">
        {items.map(productItem => (
          <div key={productItem.id} className="product-card">
            <h3>{productItem.title}</h3>
            <p>قیمت: \${productItem.price}</p>
            <button onClick={() => handleSelectProduct(productItem.id)}>
              تفصیلات
            </button>
            <button onClick={() => handleAddToCart(productItem)}>
              کارٹ میں شامل کریں
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;`;

  // createSlice کی عملی مثال
  const practicalSliceExample = `// 🎯 createSlice کی عملی مثال: User Authentication

// 📁 src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🔸 Initial State
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: false,
  error: null,
  profile: null
};

// 🔸 Async Thunks
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { user, token } = response.data;
      
      // Save token to localStorage
      localStorage.setItem('token', token);
      
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token');
      return { success: true };
    } catch (error) {
      return rejectWithValue('Logout failed');
    }
  }
);

// 🔸 createSlice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Sync reducers
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    
    clearError: (state) => {
      state.error = null;
    },
    
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Login Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Register Cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Logout Cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.profile = null;
      });
  }
});

// 🔸 Export Actions and Reducer
export const { setUser, clearError, updateProfile } = authSlice.actions;
export default authSlice.reducer;`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">📚 چيپٹر 32: Redux Toolkit کے بنیادی Concepts</h1>
        <p className="chapter-subtitle2">createSlice, Async Thunks اور فولڈر اسٹرکچر</p>
      </div>

      {copyMessage && (
        <div className="copy-notification">
          {copyMessage}
        </div>
      )}

      <div className="content-wrapper">
        <div className="main-content">
          {/* تعارف */}
          <div className="lesson-section">
            <h2 className="section-title">🎯 createSlice کیا ہے؟</h2>
            
            <div className="info-box">
              <pre className="urdu-text" style={{whiteSpace: 'pre-wrap'}}>
                {createSliceInfo}
              </pre>
            </div>

            <div className="concept-cards">
              <div className="concept-card">
                <h3>🧩 Slice کا مطلب</h3>
                <p className="urdu-text">
                  "Slice" کا مطلب ہے کہ آپ کی state کا ایک ٹکڑا۔ جیسے ایک بڑا cake ہے، 
                  اور ہر slice اس کا ایک حصہ ہے۔ Redux Toolkit میں ہر feature کے لیے 
                  ایک الگ slice بناتے ہیں۔
                </p>
              </div>

              <div className="concept-card">
                <h3>⚡ createAsyncThunk</h3>
                <p className="urdu-text">
                  Async operations (جیسے API calls) کے لیے استعمال ہوتا ہے۔ 
                  یہ تین states فراہم کرتا ہے: pending, fulfilled, rejected.
                </p>
              </div>

              <div className="concept-card">
                <h3>🔄 Immer.js کا فائدہ</h3>
                <p className="urdu-text">
                  Redux Toolkit میں Immer.js شامل ہے جو state کو mutate کرنے 
                  دیتا ہے، لیکن پیچھے immutable update کرتا ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Products Slice */}
          <div className="card">
            <h3>📦 Products Slice</h3>
            <p className="urdu-text">
              مصنوعات کی state کو manage کرنے کے لیے مکمل slice مثال۔ 
              اس میں async thunks, sync reducers اور extraReducers شامل ہیں۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/products/productsSlice.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productsSliceCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productsSliceCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 وضاحت:</h4>
              <ul className="urdu-text">
                <li><strong>initialState:</strong> slice کی ابتدائی state</li>
                <li><strong>fetchProducts:</strong> async thunk جو API سے ڈیٹا لاتا ہے</li>
                <li><strong>reducers:</strong> sync actions (selectProduct, updateFilters وغیرہ)</li>
                <li><strong>extraReducers:</strong> async actions کے لیے (pending, fulfilled, rejected)</li>
                <li><strong>productsSlice.actions:</strong> خودکار طور پر بننے والے action creators</li>
                <li><strong>productsSlice.reducer:</strong> مکمل reducer function</li>
              </ul>
            </div>
          </div>

          {/* Cart Slice */}
          <div className="card">
            <h3>🛒 Cart Slice</h3>
            <p className="urdu-text">
              خریداری کارٹ کی state کو manage کرنے کے لیے slice۔ 
              اس میں quantity updates, totals calculation اور shipping info شامل ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/cart/cartSlice.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(cartSliceCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{cartSliceCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 اہم نکات:</h4>
              <ul className="urdu-text">
                <li><strong>Helper functions:</strong> calculateTotals جیسے functions کو الگ رکھیں</li>
                <li><strong>Immer کا فائدہ:</strong> state.items.push() جیسے mutations استعمال کر سکتے ہیں</li>
                <li><strong>Complex logic:</strong> reducers میں complex logic لکھ سکتے ہیں</li>
                <li><strong>Multiple actions:</strong> ایک slice میں کئی actions بنا سکتے ہیں</li>
                <li><strong>State structure:</strong> state کو logical طریقے سے structure کریں</li>
              </ul>
            </div>
          </div>

          {/* Cart Thunks */}
          <div className="card">
            <h3>⚡ Cart Thunks</h3>
            <p className="urdu-text">
              Async operations کے لیے thunks کی فائل۔ 
              اس میں localStorage operations, API calls اور checkout process شامل ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/cart/cartThunks.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(cartThunksCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{cartThunksCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 Async Thunks کے فائدے:</h4>
              <ul className="urdu-text">
                <li><strong>API calls:</strong> async operations کو آسانی سے handle کرنا</li>
                <li><strong>Error handling:</strong> rejectWithValue سے errors handle کرنا</li>
                <li><strong>Multiple steps:</strong> checkout جیسے complex processes</li>
                <li><strong>Reusability:</strong> thunks کو مختلف جگہوں پر استعمال کرنا</li>
                <li><strong>State management:</strong> loading, success, error states</li>
              </ul>
            </div>
          </div>

          {/* Slice Usage Example - FIXED */}
          <div className="card">
            <h3>🎯 React میں Slice کا استعمال</h3>
            <p className="urdu-text">
              React components میں slices کو کیسے استعمال کریں۔ 
              useSelector, useDispatch اور async thunks کا عملی استعمال۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>React Component میں استعمال</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(sliceUsageExample)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{sliceUsageExample}</pre>
              </div>
            </div>
          </div>

          {/* Practical Example */}
          <div className="card">
            <h3>🔐 عملی مثال: Authentication Slice</h3>
            <p className="urdu-text">
              User authentication کے لیے مکمل slice مثال۔ 
              Login, register, logout اور token management شامل ہے۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>Authentication Slice</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(practicalSliceExample)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{practicalSliceExample}</pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="card success-box">
            <h3>🏆 Best Practices</h3>
            
            <div className="best-practices">
              <div className="practice-item">
                <h4>📁 فولڈر اسٹرکچر</h4>
                <ul className="urdu-text">
                  <li>ہر feature کے لیے الگ folder بنائیں</li>
                  <li>Slice اور thunks کو الگ فائلوں میں رکھیں</li>
                  <li>Constants اور helpers کو الگ رکھیں</li>
                  <li>Components کو features سے الگ رکھیں</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>⚡ Performance Tips</h4>
                <ul className="urdu-text">
                  <li>Memoized selectors کا استعمال کریں</li>
                  <li>Unnecessary re-renders سے بچیں</li>
                  <li>State normalization کریں</li>
                  <li>Large arrays پر avoid deep copies</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>🔧 Debugging Tips</h4>
                <ul className="urdu-text">
                  <li>Redux DevTools کا استعمال کریں</li>
                  <li>Action types کو meaningful بنائیں</li>
                  <li>Console میں state کو log کریں</li>
                  <li>Error boundaries استعمال کریں</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>🔄 Code Organization</h4>
                <ul className="urdu-text">
                  <li>Related logic کو ایک slice میں رکھیں</li>
                  <li>Helper functions کو export کریں</li>
                  <li>Typescript types شامل کریں</li>
                  <li>Documentation لکھیں</li>
                </ul>
              </div>
            </div>

            <div className="summary-box">
              <h4>📝 خلاصہ</h4>
              <p className="urdu-text">
                اس چيپٹر میں ہم نے Redux Toolkit کے بنیادی concepts سیکھے:
              </p>
              <ol className="urdu-text">
                <li><strong>createSlice:</strong> State, actions اور reducer ایک جگہ</li>
                <li><strong>Async Thunks:</strong> API calls اور async operations</li>
                <li><strong>Immer.js:</strong> State mutation آسان بنانا</li>
                <li><strong>Folder Structure:</strong> Professional way میں organize کرنا</li>
                <li><strong>Best Practices:</strong> Performance اور maintainability</li>
              </ol>
              
              <div className="action-buttons">
                <button className="primary-btn">عملی مشق شروع کریں</button>
                <button className="secondary-btn">کوڈ ڈاؤنلوڈ کریں</button>
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
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-left: 4px solid #4F46E5;
        }
        
        .concept-card h3 {
          color: #4F46E5;
          margin-bottom: 10px;
        }
        
        .explanation-box {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
          border-left: 4px solid #10B981;
        }
        
        .explanation-box h4 {
          color: #10B981;
          margin-bottom: 10px;
        }
        
        .explanation-box ul {
          padding-left: 20px;
        }
        
        .explanation-box li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
        
        .best-practices {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        
        .practice-item {
          background: white;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .practice-item h4 {
          color: #7C3AED;
          margin-bottom: 10px;
          font-size: 16px;
        }
        
        .practice-item ul {
          padding-left: 20px;
        }
        
        .practice-item li {
          margin-bottom: 5px;
          font-size: 14px;
        }
        
        .summary-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 12px;
          margin-top: 30px;
        }
        
        .summary-box h4 {
          font-size: 22px;
          margin-bottom: 15px;
        }
        
        .summary-box ol {
          padding-left: 20px;
          margin: 15px 0;
        }
        
        .summary-box li {
          margin-bottom: 10px;
          line-height: 1.6;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }
        
        .primary-btn, .secondary-btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 16px;
        }
        
        .primary-btn {
          background: #4F46E5;
          color: white;
        }
        
        .secondary-btn {
          background: white;
          color: #4F46E5;
          border: 2px solid #4F46E5;
        }
        
        .primary-btn:hover {
          background: #4338CA;
        }
        
        .secondary-btn:hover {
          background: #EEF2FF;
        }
      `}</style>
    </div>
  );
}