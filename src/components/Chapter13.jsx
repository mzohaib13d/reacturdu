import React, { useState, useReducer, useEffect } from "react";
import '../App.css';
import '../App9211.css';

// 🍔 Restaurant Order System Component - useReducer کی advanced مثال
const RestaurantOrderSystem = () => {
  const orderReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_ORDER':
        const existingItem = state.currentOrder.items.find(
          item => item.id === action.payload.id
        );
        
        if (existingItem) {
          return {
            ...state,
            currentOrder: {
              ...state.currentOrder,
              items: state.currentOrder.items.map(item =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            }
          };
        }
        
        return {
          ...state,
          currentOrder: {
            ...state.currentOrder,
            items: [...state.currentOrder.items, { ...action.payload, quantity: 1 }]
          }
        };

      case 'REMOVE_FROM_ORDER':
        return {
          ...state,
          currentOrder: {
            ...state.currentOrder,
            items: state.currentOrder.items.filter(item => item.id !== action.payload)
          }
        };

      case 'UPDATE_QUANTITY':
        return {
          ...state,
          currentOrder: {
            ...state.currentOrder,
            items: state.currentOrder.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: action.payload.quantity }
                : item
            )
          }
        };

      case 'UPDATE_CUSTOMER_INFO':
        return {
          ...state,
          currentOrder: {
            ...state.currentOrder,
            [action.payload.field]: action.payload.value
          }
        };

      case 'SUBMIT_ORDER':
        const orderTotal = state.currentOrder.items.reduce(
          (total, item) => total + (item.price * item.quantity), 0
        );
        
        const newOrder = {
          ...state.currentOrder,
          id: Date.now(),
          total: orderTotal,
          status: 'پینڈنگ',
          timestamp: new Date().toLocaleString()
        };

        return {
          ...state,
          orders: [...state.orders, newOrder],
          currentOrder: {
            items: [],
            customerName: '',
            tableNumber: '',
            specialInstructions: ''
          },
          totalRevenue: state.totalRevenue + orderTotal
        };

      case 'UPDATE_ORDER_STATUS':
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === action.payload.orderId
              ? { ...order, status: action.payload.status }
              : order
          )
        };

      case 'CANCEL_ORDER':
        const cancelledOrder = state.orders.find(order => order.id === action.payload);
        const refundAmount = cancelledOrder ? cancelledOrder.total : 0;
        
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload),
          totalRevenue: state.totalRevenue - refundAmount
        };

      default:
        return state;
    }
  };

  // SVG-based placeholder images for menu items
  const createPlaceholderSVG = (text, bgColor, textColor = 'white') => {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="${bgColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="${textColor}">${text}</text></svg>`;
  };

  const initialState = {
    orders: [],
    currentOrder: {
      items: [],
      customerName: '',
      tableNumber: '',
      specialInstructions: ''
    },
    menu: [
      { id: 1, name: 'چکن بریانی', price: 300, category: 'مکمل کھانا' },
      { id: 2, name: 'بیف کڑاہی', price: 450, category: 'مکمل کھانا' },
      { id: 3, name: 'سبزیاں', price: 200, category: 'مکمل کھانا' },
      { id: 4, name: 'چکن تکہ', price: 350, category: 'اشتہا انگیز' },
      { id: 5, name: 'پاپڑ', price: 50, category: 'اشتہا انگیز' },
      { id: 6, name: 'سلاد', price: 100, category: 'اشتہا انگیز' },
      { id: 7, name: 'کوک', price: 80, category: 'مشروبات' },
      { id: 8, name: 'لیسی', price: 120, category: 'مشروبات' }
    ],
    totalRevenue: 0
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  const addToOrder = (menuItem) => {
    dispatch({ type: 'ADD_TO_ORDER', payload: menuItem });
  };

  const removeFromOrder = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_ORDER', payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromOrder(itemId);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const updateCustomerInfo = (field, value) => {
    dispatch({ type: 'UPDATE_CUSTOMER_INFO', payload: { field, value } });
  };

  const submitOrder = () => {
    if (state.currentOrder.items.length === 0) {
      alert('براہ کرم کم از کم ایک آئٹم شامل کریں');
      return;
    }
    if (!state.currentOrder.customerName || !state.currentOrder.tableNumber) {
      alert('براہ کرم کسٹمر کا نام اور ٹیبل نمبر درج کریں');
      return;
    }
    dispatch({ type: 'SUBMIT_ORDER' });
    alert('آرڈر کامیابی سے جمع ہو گیا!');
  };

  const updateOrderStatus = (orderId, status) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { orderId, status } });
  };

  const cancelOrder = (orderId) => {
    if (window.confirm('کیا آپ واقعی یہ آرڈر کینسل کرنا چاہتے ہیں؟')) {
      dispatch({ type: 'CANCEL_ORDER', payload: orderId });
    }
  };

  const currentOrderTotal = state.currentOrder.items.reduce(
    (total, item) => total + (item.price * item.quantity), 0
  );

  const getOrdersByStatus = (status) => {
    return state.orders.filter(order => order.status === status);
  };

  const menuByCategory = state.menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="demo-section">
      <h3>🍔 ریسٹورینٹ آرڈر سسٹم - useReducer کی advanced مثال</h3>
      <p className="urdu-text">مکمل ریسٹورینٹ مینجمنٹ سسٹم جس میں useReducer کے ساتھ complex state management دکھایا گیا ہے</p>

      <div className="demo-card">
        <div className="restaurant-container">
          <div className="menu-section">
            <h4>📋 ریسٹورنٹ مینو</h4>
            {Object.entries(menuByCategory).map(([category, items]) => (
              <div key={category} className="card" style={{ marginBottom: '20px' }}>
                <h5 style={{ color: '#0078ff', borderBottom: '2px solid #0078ff', paddingBottom: '8px' }}>
                  {category}
                </h5>
                <div className="menu-grid">
                  {items.map(item => (
                    <div key={item.id} className="menu-item">
                      <img 
                        src={createPlaceholderSVG(item.name, '#FF6B6B')}
                        alt={item.name}
                      />
                      <h6>{item.name}</h6>
                      <p className="item-price">روپے {item.price}</p>
                      <button 
                        onClick={() => addToOrder(item)}
                        className="add-to-order-btn"
                      >
                        ➕ آرڈر کریں
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="order-section">
            <h4>🛒 موجودہ آرڈر</h4>
            
            {/* Customer Information */}
            <div className="card" style={{ marginBottom: '15px' }}>
              <h6>کسٹمر معلومات</h6>
              <input
                type="text"
                placeholder="کسٹمر کا نام"
                value={state.currentOrder.customerName}
                onChange={(e) => updateCustomerInfo('customerName', e.target.value)}
                style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
              />
              <input
                type="text"
                placeholder="ٹیبل نمبر"
                value={state.currentOrder.tableNumber}
                onChange={(e) => updateCustomerInfo('tableNumber', e.target.value)}
                style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
              />
              <textarea
                placeholder="خصوصی ہدایات (اختیاری)"
                value={state.currentOrder.specialInstructions}
                onChange={(e) => updateCustomerInfo('specialInstructions', e.target.value)}
                style={{ width: '100%', minHeight: '60px', padding: '8px' }}
              />
            </div>

            {/* Order Items */}
            <div className="card">
              {state.currentOrder.items.length === 0 ? (
                <div className="empty-order">
                  <p>📝 ابھی تک کوئی آئٹم شامل نہیں کیا گیا</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    مینو سے آئٹمز منتخب کریں
                  </p>
                </div>
              ) : (
                <div className="order-items">
                  {state.currentOrder.items.map(item => (
                    <div key={item.id} className="order-item">
                      <img 
                        src={createPlaceholderSVG(item.name, '#4ECDC4', 'white')}
                        alt={item.name}
                        style={{ width: '50px', height: '50px', borderRadius: '5px' }}
                      />
                      <div className="item-info">
                        <h6>{item.name}</h6>
                        <p>روپے {item.price} x {item.quantity}</p>
                      </div>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <div className="item-total">
                        روپے {item.price * item.quantity}
                      </div>
                      <button 
                        onClick={() => removeFromOrder(item.id)}
                        className="remove-item-btn"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Summary */}
              {state.currentOrder.items.length > 0 && (
                <div className="order-summary">
                  <div className="total-section">
                    <h6>کل رقم:</h6>
                    <strong>روپے {currentOrderTotal}</strong>
                  </div>
                  <button 
                    onClick={submitOrder}
                    className="checkout-btn"
                    style={{ width: '100%', marginTop: '10px' }}
                  >
                    ✅ آرڈر جمع کریں
                  </button>
                </div>
              )}
            </div>

            {/* Orders Management */}
            <div className="card" style={{ marginTop: '20px' }}>
              <h5>📊 آرڈرز مینجمنٹ</h5>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                <div style={{ textAlign: 'center', background: '#e8f4fd', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0078ff' }}>
                    {getOrdersByStatus('پینڈنگ').length}
                  </div>
                  <div style={{ fontSize: '0.8rem' }}>پینڈنگ</div>
                </div>
                <div style={{ textAlign: 'center', background: '#fff3cd', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffc107' }}>
                    {getOrdersByStatus('تیاری').length}
                  </div>
                  <div style={{ fontSize: '0.8rem' }}>تیاری</div>
                </div>
                <div style={{ textAlign: 'center', background: '#d1edff', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0078ff' }}>
                    روپے {state.totalRevenue}
                  </div>
                  <div style={{ fontSize: '0.8rem' }}>کل آمدنی</div>
                </div>
              </div>

              {/* Orders List */}
              {state.orders.length > 0 && (
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {state.orders.map(order => (
                    <div key={order.id} style={{ 
                      border: '1px solid #ddd', 
                      borderRadius: '6px', 
                      padding: '10px', 
                      marginBottom: '8px',
                      background: order.status === 'مکمل' ? '#e8f5e8' : '#f8f9fa'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <strong>{order.customerName}</strong> - ٹیبل {order.tableNumber}
                          <br />
                          <small>روپے {order.total} - {order.timestamp}</small>
                        </div>
                        <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                          <select 
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                            style={{ fontSize: '0.7rem', padding: '2px' }}
                          >
                            <option value="پینڈنگ">پینڈنگ</option>
                            <option value="تیاری">تیاری</option>
                            <option value="مکمل">مکمل</option>
                          </select>
                          <button 
                            onClick={() => cancelOrder(order.id)}
                            style={{ 
                              fontSize: '0.7rem', 
                              padding: '2px 6px',
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '3px'
                            }}
                          >
                            کینسل
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🛍️ Shopping Cart Component - useReducer کی عملی مثال
const ShoppingCart = () => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price
          };
        }
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price
        };

      case 'REMOVE_ITEM':
        const itemToRemove = state.items.find(item => item.id === action.payload);
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - (itemToRemove.price * itemToRemove.quantity)
        };

      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + state.items.find(item => item.id === action.payload).price
        };

      case 'DECREASE_QUANTITY':
        const itemToDecrease = state.items.find(item => item.id === action.payload);
        if (itemToDecrease.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload),
            total: state.total - itemToDecrease.price
          };
        }
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - itemToDecrease.price
        };

      case 'CLEAR_CART':
        return {
          items: [],
          total: 0
        };

      default:
        return state;
    }
  };

  // SVG-based placeholder images
  const createPlaceholderSVG = (text, bgColor, textColor = 'white') => {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="${bgColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="${textColor}">${text}</text></svg>`;
  };

  const initialProducts = [
    {
      id: 1,
      name: "ڈیزائنر شلوار قمیض سیٹ",
      price: 2500,
      image: createPlaceholderSVG("شلوار قمیض", "#FF69B4"),
      description: "پرنٹڈ شلوار قمیض سیٹ، اعلیٰ کوالٹی کا کپڑا"
    },
    {
      id: 2,
      name: "ایمبروئڈری والا سوٹ",
      price: 3500,
      image: createPlaceholderSVG("ایمبروئڈری سوٹ", "#FF1493"),
      description: "ہاتھ سے بنی ہوئی ایمبروئڈری، پریمیم کوالٹی"
    },
    {
      id: 3,
      name: "کاٹن شلوار سوٹ",
      price: 1800,
      image: createPlaceholderSVG("کاٹن سوٹ", "#DB7093"),
      description: "آرام دہ کاٹن سوٹ، گرمیوں کے لیے مثالی"
    },
    {
      id: 4,
      name: "پارٹی وئیر سوٹ",
      price: 4200,
      image: createPlaceholderSVG("پارٹی سوٹ", "#C71585"),
      description: "خصوصی مواقع کے لیے خوبصورت سوٹ"
    }
  ];

  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const increaseQuantity = (productId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="demo-section">
      <h3>🛍️ فی میل شلوار سوٹ شاپ</h3>
      <p className="urdu-text">useReducer کے ساتھ Shopping Cart کا عملی مظاہرہ</p>

      <div className="demo-card">
        <div className="demo-container">
          <section className="demo-products-section">
            <h4>📦 ہمارے مصنوعات</h4>
            <div className="demo-products-grid">
              {initialProducts.map(product => (
                <div key={product.id} className="demo-product-card">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      // Fallback if SVG fails
                      e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%23f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="%23666">${product.name}</text></svg>`;
                    }}
                  />
                  <div className="demo-product-info">
                    <h5>{product.name}</h5>
                    <p className="demo-product-description">{product.description}</p>
                    <p className="demo-product-price">قیمت: ₹{product.price}</p>
                    <button 
                      className="demo-add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      🛒 کارٹ میں شامل کریں
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="demo-cart-section">
            <div className="demo-cart-header">
              <h4>🛒 آپ کا شاپنگ کارٹ</h4>
              {cartState.items.length > 0 && (
                <button className="demo-clear-cart-btn" onClick={clearCart}>
                  🗑️ کارٹ خالی کریں
                </button>
              )}
            </div>

            {cartState.items.length === 0 ? (
              <div className="demo-empty-cart">
                <p>📝 آپ کا کارٹ خالی ہے</p>
                <p>مصنوعات شامل کرنے کے لیے "کارٹ میں شامل کریں" بٹن پر کلک کریں</p>
              </div>
            ) : (
              <div className="demo-cart-items">
                {cartState.items.map(item => (
                  <div key={item.id} className="demo-cart-item">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><rect width="50" height="50" fill="%23f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="8" fill="%23666">${item.name}</text></svg>`;
                      }}
                    />
                    <div className="demo-item-details">
                      <h6>{item.name}</h6>
                      <p>قیمت: ₹{item.price}</p>
                    </div>
                    <div className="demo-quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                      <span className="demo-quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>➕</button>
                    </div>
                    <div className="demo-item-total">
                      ₹{item.price * item.quantity}
                    </div>
                    <button 
                      className="demo-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ❌
                    </button>
                  </div>
                ))}
                
                <div className="demo-cart-summary">
                  <div className="demo-total-section">
                    <h5>کل رقم: ₹{cartState.total}</h5>
                    <button className="demo-checkout-btn">
                      💳 آرڈر کریں
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

// ⏱️ Custom Hook - useTimer
const useTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return seconds;
};

// 🎯 Custom Hook Example Component
const TimerExample = () => {
  const seconds = useTimer();

  return (
    <div className="demo-section">
      <h3>⏱️ Custom Hook Example — useTimer</h3>
      <p className="urdu-text">اپنا hook خود بنانے کا عملی مظاہرہ</p>
      
      <div className="demo-card">
        <div className="timer-display">
          <h1>{seconds} سیکنڈ گزر چکے ⏳</h1>
        </div>
        
        <div className="explanation-box">
          <p className="urdu-text">
            <strong>💡 Custom Hook کیا ہے؟</strong>
            <br />
            Custom Hook ایک ایسا فنکشن ہوتا ہے جو "use" سے شروع ہوتا ہے 
            اور کسی خاص logic کو دوبارہ استعمال کے لیے تیار کرتا ہے۔
            ہم نے useTimer بنایا جو خود بخود ہر سیکنڈ بعد count بڑھاتا ہے۔
          </p>
        </div>
      </div>
    </div>
  );
};

// 🧭 useReducer + Custom Hook Together - Smart Timer
const useSmartTimer = () => {
  const timerReducer = (state, action) => {
    switch (action.type) {
      case "start":
        return { ...state, running: true };
      case "stop":
        return { ...state, running: false };
      case "tick":
        return { ...state, time: state.time + 1 };
      case "reset":
        return { running: false, time: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(timerReducer, {
    time: 0,
    running: false,
  });

  useEffect(() => {
    let interval;
    if (state.running) {
      interval = setInterval(() => dispatch({ type: "tick" }), 1000);
    }
    return () => clearInterval(interval);
  }, [state.running]);

  return { state, dispatch };
};

const SmartTimerExample = () => {
  const { state, dispatch } = useSmartTimer();

  return (
    <div className="demo-section">
      <h3>🧭 useReducer + Custom Hook Example</h3>
      <p className="urdu-text">دونوں hooks کو ملا کر Smart Timer بنانا</p>
      
      <div className="demo-card">
        <div className="timer-display">
          <h1>{state.time} سیکنڈ</h1>
        </div>

        <div className="timer-controls">
          <button onClick={() => dispatch({ type: "start" })}>▶️ Start</button>
          <button onClick={() => dispatch({ type: "stop" })}>⏸️ Stop</button>
          <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
        </div>

        <div className="explanation-box">
          <p className="urdu-text">
            <strong>🎯 Advanced Concept:</strong>
            <br />
            یہاں ہم نے useReducer اور Custom Hook کو ملا کر "Smart Timer" بنایا۔
            useReducer logic سنبھال رہا ہے جبکہ Custom Hook repeatable code بن گیا ہے۔
            اب ہم اس Smart Timer کو کسی بھی component میں استعمال کر سکتے ہیں۔
          </p>
        </div>
      </div>
    </div>
  );
};

// 🧠 Concepts Example Component
const ConceptsExample = () => {
  return (
    <div className="demo-section">
      <h3>🧠 Advanced Hooks Concepts</h3>
      <div className="concept-grid">
        <div className="concept-card">
          <h4>🔄 useReducer</h4>
          <p className="urdu-text">
            <strong>State management کا advanced طریقہ:</strong>
            <br />
            • Complex state کے لیے بہترین
            <br />
            • Actions کے ذریعے state میں تبدیلی
            <br />
            • Predictable state updates
            <br />
            • Reducer function logic کو centralize کرتا ہے
          </p>
        </div>
        
        <div className="concept-card">
          <h4>🎣 Custom Hooks</h4>
          <p className="urdu-text">
            <strong>اپنا reusable logic بنائیں:</strong>
            <br />
            • Logic کو components سے الگ کریں
            <br />
            • "use" سے شروع ہونا ضروری
            <br />
            • کسی بھی hook کو استعمال کر سکتے ہیں
            <br />
            • Clean اور maintainable code
          </p>
        </div>
        
        <div className="concept-card">
          <h4>🚀 Combined Power</h4>
          <p className="urdu-text">
            <strong>دونوں کو ملا کر استعمال کریں:</strong>
            <br />
            • Custom hook کے اندر useReducer
            <br />
            • Complex logic کو encapsulate کریں
            <br />
            • پورے app میں reuse کریں
            <br />
            • Professional-level code structure
          </p>
        </div>
      </div>
    </div>
  );
};

const Chapter13 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = (code, exampleNum) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(`مثال ${exampleNum} کوپي ہو گئی!`);
    setTimeout(() => setCopyStatus(""), 2000);
  };

  // 🔹 Copy function for the syntax code block
  const copySyntaxCode = () => {
    const syntaxCode = `// useReducer Syntax
const [state, dispatch] = useReducer(reducer, initialState);

// Custom Hook Syntax
const useCustomHook = () => {
  // your hook logic here
  return value;
};`;
    navigator.clipboard.writeText(syntaxCode);
    setCopyStatus("Syntax کوڈ کوپي ہو گیا!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const examples = [
    {
      id: 1,
      title: "مثال 1: Shopping Cart System - useReducer کی عملی مثال",
      description: "یہ ایک مکمل شاپنگ کارٹ سسٹم ہے جس میں useReducer کے ذریعے complex state management دکھایا گیا ہے۔ آئٹمز شامل کریں، ہٹائیں، quantity تبدیل کریں اور مکمل کارٹ مینج کریں۔",
      component: <ShoppingCart />,
      code: `// ShoppingCart.jsx - useReducer کے ساتھ Shopping Cart
import React, { useReducer } from 'react';

// 🎯 Reducer Function - Shopping Cart کا دماغ
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      };

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };

    default:
      return state;
  }
};

const ShoppingCart = () => {
  // 🎯 useReducer Hook استعمال کیا
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div>
      {/* UI Code یہاں آئے گا */}
    </div>
  );
};

export default ShoppingCart;`,
      css: `/* 🛍️ Shopping Cart CSS */
.demo-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}

.demo-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.demo-product-card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.demo-product-card:hover {
  transform: translateY(-3px);
}

.demo-product-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.demo-add-to-cart-btn {
  background: #0078ff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}

.demo-cart-section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
}

.demo-cart-item {
  display: grid;
  grid-template-columns: 50px 1fr auto auto auto;
  gap: 10px;
  align-items: center;
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .demo-products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .demo-cart-item {
    grid-template-columns: 40px 1fr auto;
    gap: 8px;
  }
}

@media (max-width: 430px) {
  .demo-product-card {
    padding: 12px;
  }
  
  .demo-cart-section {
    padding: 15px;
  }
}

@media (max-width: 390px) {
  .demo-products-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 375px) {
  .demo-product-card {
    padding: 10px;
  }
}`
    },
    {
      id: 2,
      title: "مثال 2: Restaurant Order System - useReducer کی advanced مثال",
      description: "ریسٹورینٹ آرڈر سسٹم جس میں useReducer کے ساتھ ڈسکاؤنٹ سسٹم، quantity اپڈیٹ اور مکمل آرڈر مینجمنٹ شامل ہے۔",
      component: <RestaurantOrderSystem />,
      code: `// RestaurantOrderSystem.jsx - useReducer کے ساتھ ریسٹورینٹ
import React, { useReducer } from 'react';

// 🎯 Reducer Function - ریسٹورینٹ کا آرڈر مینجمنٹ
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      };

    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discount: action.payload,
        finalTotal: state.total - (state.total * action.payload / 100)
      };

    default:
      return state;
  }
};

const RestaurantOrderSystem = () => {
  // 🎯 useReducer Hook استعمال کیا
  const [orderState, dispatch] = useReducer(orderReducer, {
    items: [],
    total: 0,
    discount: 0,
    finalTotal: 0
  });

  const addToOrder = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div>
      {/* UI Code یہاں آئے گا */}
    </div>
  );
};

export default RestaurantOrderSystem;`,
      css: `/* 🍔 Restaurant Order CSS */
.restaurant-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.menu-item {
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.add-to-order-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}

.order-item {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 10px;
  align-items: center;
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-controls button {
  background: #0078ff;
  color: white;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 768px) {
  .restaurant-container {
    grid-template-columns: 1fr;
  }
  
  .order-item {
    grid-template-columns: 1fr auto;
    gap: 8px;
  }
  
  .quantity-controls {
    grid-column: 1 / -1;
    justify-self: start;
    margin-top: 8px;
  }
}

@media (max-width: 430px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
  
  .discount-section {
    justify-content: center;
  }
  
  .total-section {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 390px) {
  .menu-item {
    padding: 12px;
  }
}

@media (max-width: 375px) {
  .menu-item {
    padding: 10px;
  }
}`
    },
    {
      id: 3,
      title: "مثال 3: Custom Hook - useTimer بنانا",
      description: "اپنا custom hook بنانے کی سادہ مثال۔ useTimer ہر سیکنڈ بعد count بڑھاتا ہے اور اسے کسی بھی component میں reuse کیا جا سکتا ہے۔",
      component: <TimerExample />,
      code: `// useTimer.js - Custom Hook
import { useState, useEffect } from "react";

// 🎯 Custom Hook - useTimer
const useTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup - صفحہ بند ہونے پر timer بند ہو جائے
    return () => clearInterval(timer);
  }, []);

  return seconds;
};

export default useTimer;

// App.jsx - Custom Hook استعمال کرنا
import React from "react";
import useTimer from "./useTimer";

function App() {
  const seconds = useTimer(); // custom hook استعمال کیا

  return (
    <div>
      <h1>{seconds} سیکنڈ گزر چکے ⏳</h1>
    </div>
  );
}

export default App;`,
      css: `/* ⏱️ Timer CSS */
.timer-display {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  margin: 20px 0;
}

.timer-display h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
}

.explanation-box {
  background: #e8f4fd;
  border: 2px solid #3498db;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

@media (max-width: 430px) {
  .timer-display h1 {
    font-size: 2rem;
  }
}

@media (max-width: 390px) {
  .timer-display h1 {
    font-size: 1.8rem;
  }
  
  .timer-display {
    padding: 20px;
  }
}

@media (max-width: 375px) {
  .timer-display h1 {
    font-size: 1.6rem;
  }
  
  .timer-display {
    padding: 15px;
  }
}`
    },
    {
      id: 4,
      title: "مثال 4: Smart Timer - useReducer + Custom Hook کا مجموعہ",
      description: "دونوں advanced concepts کو ملا کر ایک smart timer بنانا۔ useReducer state سنبھال رہا ہے اور custom hook reusable logic فراہم کر رہا ہے۔",
      component: <SmartTimerExample />,
      code: `// useSmartTimer.js - Custom Hook with useReducer
import { useReducer, useEffect } from "react";

// 🎯 Reducer Function for Timer
const timerReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, running: true };
    case "stop":
      return { ...state, running: false };
    case "tick":
      return { ...state, time: state.time + 1 };
    case "reset":
      return { running: false, time: 0 };
    default:
      return state;
  }
};

// 🎯 Custom Hook with useReducer
const useSmartTimer = () => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 0,
    running: false,
  });

  useEffect(() => {
    let interval;
    if (state.running) {
      interval = setInterval(() => dispatch({ type: "tick" }), 1000);
    }
    return () => clearInterval(interval);
  }, [state.running]);

  return { state, dispatch };
};

export default useSmartTimer;

// App.jsx - Smart Timer استعمال کرنا
import React from "react";
import useSmartTimer from "./useSmartTimer";

function App() {
  const { state, dispatch } = useSmartTimer();

  return (
    <div>
      <h1>{state.time} سیکنڈ</h1>
      <button onClick={() => dispatch({ type: "start" })}>▶️ Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>⏸️ Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
}

export default App;`,
      css: `/* 🧭 Smart Timer CSS */
.timer-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.timer-controls button {
  background: #0078ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.timer-controls button:hover {
  background: #005fcc;
  transform: translateY(-2px);
}

@media (max-width: 430px) {
  .timer-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .timer-controls button {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 390px) {
  .timer-controls button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  .timer-controls button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}`
    },
    {
      id: 5,
      title: "مثال 5: Concepts اور Code Examples",
      description: "useReducer اور Custom Hooks کے بنیادی concepts، syntax اور مختلف use cases کے code examples۔",
      component: <ConceptsExample />,
      code: `// 🎯 useReducer Basic Example
import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "add") {
    return { count: state.count + 1 };
  } else if (action.type === "subtract") {
    return { count: state.count - 1 };
  } else if (action.type === "reset") {
    return { count: 0 };
  } else {
    return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>➕ Add</button>
      <button onClick={() => dispatch({ type: "subtract" })}>➖ Subtract</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
}`,
      css: `/* 🎯 Concepts CSS */
.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 1.5rem;
}

.concept-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  border-color: #0078ff;
}

@media (max-width: 768px) {
  .concept-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 430px) {
  .concept-card {
    padding: 20px;
  }
}

@media (max-width: 390px) {
  .concept-card {
    padding: 15px;
  }
}

@media (max-width: 375px) {
  .concept-card {
    padding: 12px;
  }
}`
    }
  ];

  return (
    <div className="chapter-container urdu-text">
      <div className="chapter-header">
        <h1 className="chapter-title text-break">
          📚 چيپٹر نمبر 13 – Advanced Hooks: useReducer & Custom Hooks
        </h1>
        <p className="chapter-subtitle2 text-break">
          React میں <strong>useReducer</strong> اور <strong>Custom Hooks</strong> advanced concepts ہیں جو complex state management اور reusable logic کے لیے استعمال ہوتے ہیں۔
        </p>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-card">
          <h3 className="intro-title">🎯 Advanced Hooks کا تعارف</h3>
          <p className="intro-text">
            React میں جیسے جیسے آپ آگے بڑھتے ہیں، آپ کو اپنی ایپ کے اندر state منیج کرنے کے اور بھی سمجھدار طریقے ملتے ہیں۔ آج ہم دو نئے concepts سیکھیں گے:
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
                <div className="table-cell">useReducer</div>
                <div className="table-cell">complex state manage کرنے کے لیے</div>
                <div className="table-cell">جب state پر کئی actions اثر ڈالیں</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Custom Hook</div>
                <div className="table-cell">logic reuse کرنے کے لیے</div>
                <div className="table-cell">جب ایک ہی code مختلف جگہوں پر چاہیے ہو</div>
              </div>
            </div>
          </div>

                    <div className="benefits-section" style={ {backgroundColor: "#705CBB" }}>
            <h4>🌟 دونوں کو ایک ہی چیپٹر میں کیوں؟</h4>
            <p>دونوں topics — Custom Hooks اور useReducer Hook — آپس میں قریب المعانی ہیں، کیونکہ دونوں کا تعلق state کو سمجھداری سے منیج کرنے سے ہے۔</p>
            <div className="highlight-text">
              🎯 دونوں "state + logic management کو بہتر اور منظم طریقے سے لکھنے" کا طریقہ سکھاتے ہیں۔
            </div>
          </div>

          <div className="real-world-example">
            <h4>🍔 حقیقی زندگی کی مثال</h4>
            <p>
              سوچیں آپ ایک <strong>ریسٹورینٹ</strong> میں کام کر رہے ہیں۔ گاہک آتا ہے اور کہتا ہے: "Add burger", "Remove fries", "Reset order"۔
            </p>
            <p>
              اگر آپ <strong>useState</strong> استعمال کریں تو آپ کو بار بار state update کرنے کے الگ الگ طریقے لکھنے پڑیں گے۔ مگر <strong>useReducer</strong> میں آپ ایک ریسپشنسٹ (reducer function) رکھتے ہیں جو سنبھالتا ہے کہ کون سا ایکشن آیا ہے، اور کیا کرنا ہے۔
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
              📖 useReducer اور Custom Hooks کا بنیادی syntax
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
                  <code>{`// useReducer Syntax
const [state, dispatch] = useReducer(reducer, initialState);

// Custom Hook Syntax
const useCustomHook = () => {
  // your hook logic here
  return value;
};`}</code>
                </pre>
              </div>
            </div>
            <div className="explanation-box">
              <h4 className="text-break">🔹 وضاحت:</h4>
              <ul>
                <li className="text-break">
                  <strong>useReducer:</strong> جب state complex ہو جائے (مثلاً objects یا کئی actions ہوں)
                </li>
                <li className="text-break">
                  <strong>Custom Hook:</strong> جب ایک ہی logic بار بار استعمال ہو رہا ہو
                </li>
                <li className="text-break">
                  <strong>Reducer:</strong> ایک فنکشن ہے جو فیصلہ کرتا ہے کہ کون سا action آنے پر state کیسے بدلے گی
                </li>
                <li className="text-break">
                  <strong>dispatch():</strong> وہ پیغام بھیجتا ہے کہ "اب یہ کام کرو"
                </li>
              </ul>
            </div>
          </div>

          {/* سبق کا خلاصہ Section */}
          <div className="summary-card">
            <h3 className="section-title text-break">📌 سبق کا خلاصہ</h3>
            <div className="summary-content">
              <p className="text-break">
                <strong>useReducer</strong> React کا Hook ہے جو complex state کو منظم طریقے سے handle کرتا ہے
              </p>
              <p className="text-break">
                <strong>Custom Hooks</strong> آپ کو reusable logic بنانے کی طاقت دیتے ہیں
              </p>
              <p className="text-break">
                دونوں کو ملا کر آپ <strong>professional-level code</strong> لکھ سکتے ہیں
              </p>
              <p className="text-break">
                <strong>حقیقی استعمال:</strong> Shopping Cart, Game Score, Timer Apps, Form Handling
              </p>
              <div className="highlight-text">
                💡 یاد رکھیں: useReducer = ریسٹورینٹ کا ریسپشنسٹ، Custom Hook = آپ کا ذاتی اسسٹنٹ
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

export default Chapter13;
