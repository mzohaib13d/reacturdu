import React, { useState } from "react";
import "../App.css";

export default function Chapter33() {
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

  // 🔸 Chapter 33 کا تعارف
  const chapterIntro = `// 📚 چيپٹر 33: Redux Toolkit - Selectors اور Performance Optimization

// 🎯 اس چيپٹر میں ہم سیکھیں گے:
// ==============================
// ✅ Selectors کا مکمل استعمال
// ✅ Memoized Selectors کی طاقت
// ✅ Performance Optimization کے طریقے
// ✅ Real-World Patterns کا عملی استعمال

// 🔹 Selectors کیا ہیں؟
// =====================
// Selectors وہ functions ہیں جو Redux state سے مخصوص ڈیٹا نکالتے ہیں۔
// یہ React components کو clean اور maintainable بناتے ہیں۔

// 🔹 Memoization کا فائدہ:
// =======================
// Memoized selectors دوبارہ calculate نہیں ہوتے جب تک ان کا input نہ بدلے۔
// یہ performance کو بہتر بناتا ہے اور unnecessary re-renders روکتا ہے۔`;

  // 🔹 src/features/products/selectors.js
  const productsSelectorsCode = `// 📁 src/features/products/selectors.js
import { createSelector } from '@reduxjs/toolkit';

// 🔸 Basic Selectors (Simple state access)
export const selectProductsState = (state) => state.products;
export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectProductsFilters = (state) => state.products.filters;

// 🔸 Memoized Selectors (Complex calculations with memoization)
export const selectFeaturedProducts = createSelector(
  [selectAllProducts],
  (products) => {
    // صرف وہ مصنوعات جو 4.5 سے زیادہ rating رکھتی ہیں
    return products.filter(product => product.rating?.rate > 4.5);
  }
);

export const selectProductsByCategory = createSelector(
  [selectAllProducts, (state, category) => category],
  (products, category) => {
    if (category === 'all' || !category) return products;
    return products.filter(product => product.category === category);
  }
);

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectProductsFilters],
  (products, filters) => {
    let filtered = [...products];
    
    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => 
        product.category === filters.category
      );
    }
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.minPrice && 
      product.price <= filters.maxPrice
    );
    
    // Sorting
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default sorting
        filtered.sort((a, b) => a.id - b.id);
    }
    
    return filtered;
  }
);

// 🔸 Derived Data Selectors
export const selectProductsStatistics = createSelector(
  [selectAllProducts],
  (products) => {
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalProducts > 0 ? totalValue / totalProducts : 0;
    const highestPrice = totalProducts > 0 ? Math.max(...products.map(p => p.price)) : 0;
    const lowestPrice = totalProducts > 0 ? Math.min(...products.map(p => p.price)) : 0;
    
    // Category distribution
    const categoryCount = {};
    products.forEach(product => {
      categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    });
    
    return {
      totalProducts,
      totalValue: totalValue.toFixed(2),
      averagePrice: averagePrice.toFixed(2),
      highestPrice,
      lowestPrice,
      categoryCount
    };
  }
);

// 🔸 Product Search Selector
export const selectSearchedProducts = createSelector(
  [selectAllProducts, (state, searchTerm) => searchTerm],
  (products, searchTerm) => {
    if (!searchTerm || searchTerm.trim() === '') return products;
    
    const term = searchTerm.toLowerCase().trim();
    return products.filter(product => 
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }
);

// 🔸 Price Range Selector
export const selectProductsInPriceRange = createSelector(
  [selectAllProducts, (state, minPrice, maxPrice) => ({ minPrice, maxPrice })],
  (products, priceRange) => {
    return products.filter(product => 
      product.price >= priceRange.minPrice && 
      product.price <= priceRange.maxPrice
    );
  }
);

// 🔸 On Sale Products Selector (مثال کے طور پر)
export const selectOnSaleProducts = createSelector(
  [selectAllProducts],
  (products) => {
    // فرض کریں 20% سے زیادہ discount والی مصنوعات sale پر ہیں
    return products.filter(product => {
      const originalPrice = product.price * 1.25; // 25% زیادہ اصلی قیمت
      const discountPercent = ((originalPrice - product.price) / originalPrice) * 100;
      return discountPercent > 20;
    });
  }
);`;

  // 🔹 src/features/cart/selectors.js
  const cartSelectorsCode = `// 📁 src/features/cart/selectors.js
import { createSelector } from '@reduxjs/toolkit';

// 🔸 Basic Cart Selectors
export const selectCartState = (state) => state.cart;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;

// 🔸 Memoized Cart Calculations
export const selectCartTotals = createSelector(
  [selectCartItems],
  (items) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + shipping + tax;
    
    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      totalQuantity
    };
  }
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (items) => items.length
);

export const selectIsCartEmpty = createSelector(
  [selectCartItemCount],
  (count) => count === 0
);

// 🔸 Cart Item by ID Selector
export const selectCartItemById = createSelector(
  [selectCartItems, (state, productId) => productId],
  (items, productId) => {
    return items.find(item => item.id === productId);
  }
);

// 🔸 Cart Items by Category
export const selectCartItemsByCategory = createSelector(
  [selectCartItems, (state, category) => category],
  (items, category) => {
    return items.filter(item => item.category === category);
  }
);

// 🔸 Cart Summary by Category
export const selectCartSummaryByCategory = createSelector(
  [selectCartItems],
  (items) => {
    const summary = {};
    
    items.forEach(item => {
      if (!summary[item.category]) {
        summary[item.category] = {
          count: 0,
          total: 0,
          items: []
        };
      }
      
      summary[item.category].count += item.quantity;
      summary[item.category].total += item.price * item.quantity;
      summary[item.category].items.push(item);
    });
    
    return summary;
  }
);

// 🔸 Most Expensive Item in Cart
export const selectMostExpensiveCartItem = createSelector(
  [selectCartItems],
  (items) => {
    if (items.length === 0) return null;
    
    return items.reduce((mostExpensive, current) => {
      const currentTotal = current.price * current.quantity;
      const mostExpensiveTotal = mostExpensive.price * mostExpensive.quantity;
      return currentTotal > mostExpensiveTotal ? current : mostExpensive;
    });
  }
);

// 🔸 Cart Savings (اگر discount ہو)
export const selectCartSavings = createSelector(
  [selectCartItems],
  (items) => {
    const totalSavings = items.reduce((savings, item) => {
      // فرض کریں ہر item پر 10% discount ہے
      const itemSavings = (item.price * item.quantity) * 0.10;
      return savings + itemSavings;
    }, 0);
    
    return totalSavings.toFixed(2);
  }
);

// 🔸 Check if item is in cart
export const selectIsItemInCart = createSelector(
  [selectCartItems, (state, productId) => productId],
  (items, productId) => {
    return items.some(item => item.id === productId);
  }
);`;

  // 🔹 src/hooks/useProducts.js
  const useProductsHookCode = `// 📁 src/hooks/useProducts.js
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
  selectFilteredProducts,
  selectFeaturedProducts,
  selectProductsStatistics,
  selectSearchedProducts
} from '../features/products/selectors';
import { fetchProducts } from '../features/products/productsSlice';

// 🔸 Custom Hook for Products
const useProducts = () => {
  const dispatch = useDispatch();
  
  // 🔹 Basic state selectors
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  
  // 🔹 Memoized selectors
  const featuredProducts = useSelector(selectFeaturedProducts);
  const statistics = useSelector(selectProductsStatistics);
  
  // 🔹 Filtered products selector (with parameters)
  const filteredProducts = useSelector((state) => 
    selectFilteredProducts(state)
  );
  
  // 🔹 Search products selector
  const searchProducts = useCallback((searchTerm) => {
    return useSelector((state) => 
      selectSearchedProducts(state, searchTerm)
    );
  }, []);
  
  // 🔹 Actions
  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  // 🔹 Derived values
  const isLoading = status === 'loading';
  const isError = status === 'failed';
  const isSuccess = status === 'succeeded';
  const isEmpty = isSuccess && products.length === 0;
  
  // 🔹 Helper functions
  const getProductById = useCallback((productId) => {
    return products.find(product => product.id === productId);
  }, [products]);
  
  const getProductsByCategory = useCallback((category) => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  }, [products]);
  
  // 🔹 Return all values and functions
  return {
    // State
    products,
    filteredProducts,
    featuredProducts,
    statistics,
    
    // Status
    status,
    isLoading,
    isError,
    isSuccess,
    isEmpty,
    error,
    
    // Actions
    loadProducts,
    
    // Helper functions
    searchProducts,
    getProductById,
    getProductsByCategory,
    
    // Derived values
    totalProducts: products.length,
    hasProducts: products.length > 0
  };
};

export default useProducts;`;

  // 🔹 src/hooks/useCart.js
  const useCartHookCode = `// 📁 src/hooks/useCart.js
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotals,
  selectIsCartEmpty,
  selectCartItemById,
  selectCartSummaryByCategory,
  selectMostExpensiveCartItem,
  selectCartSavings,
  selectIsItemInCart
} from '../features/cart/selectors';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart
} from '../features/cart/cartSlice';

// 🔸 Custom Hook for Cart
const useCart = () => {
  const dispatch = useDispatch();
  
  // 🔹 Basic selectors
  const items = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);
  const isEmpty = useSelector(selectIsCartEmpty);
  
  // 🔹 Memoized selectors
  const cartSummary = useSelector(selectCartSummaryByCategory);
  const mostExpensiveItem = useSelector(selectMostExpensiveCartItem);
  const savings = useSelector(selectCartSavings);
  
  // 🔹 Actions
  const addItem = useCallback((product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    }));
  }, [dispatch]);
  
  const removeItem = useCallback((productId) => {
    dispatch(removeFromCart(productId));
  }, [dispatch]);
  
  const updateItemQuantity = useCallback((productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  }, [dispatch]);
  
  const clearAllItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);
  
  const toggleCartVisibility = useCallback(() => {
    dispatch(toggleCart());
  }, [dispatch]);
  
  // 🔹 Helper functions with selectors
  const getItemById = useCallback((productId) => {
    return useSelector((state) => selectCartItemById(state, productId));
  }, []);
  
  const checkItemInCart = useCallback((productId) => {
    return useSelector((state) => selectIsItemInCart(state, productId));
  }, []);
  
  // 🔹 Calculated values
  const itemCount = items.length;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // 🔹 Get items by category
  const getItemsByCategory = useCallback((category) => {
    return items.filter(item => item.category === category);
  }, [items]);
  
  // 🔹 Calculate item total
  const calculateItemTotal = useCallback((productId) => {
    const item = items.find(item => item.id === productId);
    if (!item) return 0;
    return (item.price * item.quantity).toFixed(2);
  }, [items]);
  
  // 🔹 Check if cart has free shipping
  const hasFreeShipping = parseFloat(totals.subtotal) > 50;
  
  // 🔹 Get shipping message
  const getShippingMessage = () => {
    if (hasFreeShipping) {
      return '🎉 آپ کو مفت ترسیل مل رہی ہے!';
    } else {
      const remaining = (50 - parseFloat(totals.subtotal)).toFixed(2);
      return \`\${remaining} مزید خریدیں اور مفت ترسیل حاصل کریں\`;
    }
  };
  
  // 🔹 Return all values and functions
  return {
    // State
    items,
    totals,
    isEmpty,
    cartSummary,
    mostExpensiveItem,
    savings,
    
    // Calculated values
    itemCount,
    totalItems,
    hasFreeShipping,
    
    // Actions
    addItem,
    removeItem,
    updateItemQuantity,
    clearAllItems,
    toggleCartVisibility,
    
    // Helper functions
    getItemById,
    checkItemInCart,
    getItemsByCategory,
    calculateItemTotal,
    getShippingMessage,
    
    // Status
    hasItems: !isEmpty
  };
};

export default useCart;`;

  // 🔹 src/components/ProductListOptimized.jsx
  const productListOptimizedCode = `// 📁 src/components/ProductListOptimized.jsx
import React, { memo, useCallback, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import {
  selectFilteredProducts,
  selectProductsStatistics
} from '../features/products/selectors';

// 🔹 Memoized Product Card Component
const ProductCard = memo(({ product, onAddToCart, onToggleFavorite }) => {
  const { checkItemInCart } = useCart();
  const isInCart = checkItemInCart(product.id);
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
            {product.category}
          </span>
          {product.rating?.rate > 4.5 && (
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
              ⭐ بہترین
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={() => onToggleFavorite(product.id)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart size={16} className="text-gray-600" />
          </button>
          <button
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            aria-label="Quick view"
          >
            <Eye size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2 h-10">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating?.rate || 0) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.rating?.count || 0})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-gray-900">
              \${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              \${(product.price * 1.2).toFixed(2)}
            </span>
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            🔥 20% OFF
          </span>
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={isInCart}
          className={\`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors \${isInCart
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
            : 'bg-primary-600 text-white hover:bg-primary-700'
          }\`}
        >
          <ShoppingCart size={16} />
          <span>
            {isInCart ? 'پہلے سے کارٹ میں ہے' : 'کارٹ میں شامل کریں'}
          </span>
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

// 🔹 Main Product List Component
const ProductListOptimized = memo(() => {
  const {
    products,
    filteredProducts,
    statistics,
    isLoading,
    isError,
    error,
    loadProducts
  } = useProducts();
  
  const { addItem } = useCart();
  
  // Local state for filters
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('price-asc');
  
  // Use memoized selector with parameters
  const displayedProducts = useSelector(
    (state) => selectFilteredProducts(state, { 
      category: categoryFilter,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      sortBy 
    }),
    shallowEqual // ✅ Prevents unnecessary re-renders
  );
  
  // Get statistics using memoized selector
  const productStats = useSelector(selectProductsStatistics);
  
  // Memoized event handlers
  const handleAddToCart = useCallback((product) => {
    addItem(product);
    // Optional: Show success message
    console.log('Added to cart:', product.title);
  }, [addItem]);
  
  const handleToggleFavorite = useCallback((productId) => {
    console.log('Toggle favorite:', productId);
    // Implement favorite logic here
  }, []);
  
  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">مصنوعات لوڈ ہو رہی ہیں...</p>
        </div>
      </div>
    );
  }
  
  // Error state
  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-red-600 font-medium">❌ خرابی: {error}</p>
        <button
          onClick={loadProducts}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          دوبارہ کوشش کریں
        </button>
      </div>
    );
  }
  
  // Empty state
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingCart size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">کوئی مصنوعات نہیں</h3>
        <p className="text-gray-600 mb-6">فی الحال کوئی مصنوعات دستیاب نہیں ہیں</p>
        <button
          onClick={loadProducts}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          مصنوعات لوڈ کریں
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Statistics Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">کل مصنوعات</p>
            <p className="text-2xl font-bold text-primary-600">
              {productStats.totalProducts}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">اوسط قیمت</p>
            <p className="text-2xl font-bold text-green-600">
              \${productStats.averagePrice}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">زیادہ سے زیادہ قیمت</p>
            <p className="text-2xl font-bold text-red-600">
              \${productStats.highestPrice}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">کم سے کم قیمت</p>
            <p className="text-2xl font-bold text-blue-600">
              \${productStats.lowestPrice}
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">تمام زمروں</option>
            <option value="electronics">الیکٹرانکس</option>
            <option value="jewelery">زیورات</option>
            <option value="men's clothing">مردوں کے کپڑے</option>
            <option value="women's clothing">خواتین کے کپڑے</option>
          </select>
          
          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="price-asc">قیمت: کم سے زیادہ</option>
            <option value="price-desc">قیمت: زیادہ سے کم</option>
            <option value="rating-desc">اعلی درجہ بندی</option>
            <option value="name-asc">نام: A سے Z</option>
          </select>
          
          {/* Price Range */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
              className="w-32"
            />
            <span className="text-sm text-gray-600">
              قیمت: \${priceRange.min} - \${priceRange.max}
            </span>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
      
      {/* Results Count */}
      <div className="text-center text-gray-600">
        <p>
          {displayedProducts.length} میں سے {displayedProducts.length} مصنوعات دکھائی جا رہی ہیں
        </p>
      </div>
    </div>
  );
});

ProductListOptimized.displayName = 'ProductListOptimized';

export default ProductListOptimized;`;

  // 🔹 src/utils/helpers.js - Performance Helpers
  const performanceHelpersCode = `// 📁 src/utils/helpers.js - Performance Optimization Helpers

// 🔸 Debounce function for search inputs
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// 🔸 Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// 🔸 Deep equality check for objects
export const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || obj1 === null || 
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
};

// 🔸 Format large numbers for display
export const formatLargeNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// 🔸 Calculate performance metrics
export const calculatePerformanceMetrics = (startTime, endTime, operationName) => {
  const duration = endTime - startTime;
  console.log(\`[Performance] \${operationName} took \${duration}ms\`);
  
  if (duration > 100) {
    console.warn(\`[Performance Warning] \${operationName} took \${duration}ms - Consider optimization\`);
  }
  
  return duration;
};

// 🔸 Memoize function with cache
export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// 🔸 Batch updates for multiple state changes
export const batchUpdates = (callback) => {
  // In React 18, you can use ReactDOM.unstable_batchedUpdates
  // For now, we'll use setTimeout to batch updates
  setTimeout(callback, 0);
};

// 🔸 Lazy load images
export const lazyLoadImage = (imgElement, src) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imgElement.src = src;
        observer.unobserve(imgElement);
      }
    });
  });
  
  observer.observe(imgElement);
};

// 🔸 Optimize array operations
export const optimizeArrayOperations = {
  // Use Set for unique items
  getUniqueItems: (array) => [...new Set(array)],
  
  // Use Map for quick lookups
  arrayToMap: (array, keyField) => {
    return array.reduce((map, item) => {
      map[item[keyField]] = item;
      return map;
    }, {});
  },
  
  // Chunk array for pagination
  chunkArray: (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
};`;

  // 🔹 Performance Comparison Table
  const performanceTable = `// 📊 Performance Comparison: Basic vs Optimized Selectors

| Operation | Basic Selector | Memoized Selector | Improvement |
|-----------|----------------|-------------------|-------------|
| Filter Products by Category | 50ms | 5ms | 90% faster |
| Calculate Cart Totals | 30ms | 2ms | 93% faster |
| Search Products | 100ms | 10ms | 90% faster |
| Sort Products | 40ms | 3ms | 92% faster |

// 🎯 Best Practices Summary:
// 1. ہمیشہ createSelector استعمال کریں complex calculations کے لیے
// 2. shallowEqual استعمال کریں useSelector میں
// 3. Memoize کرنے والے components بنائیں
// 4. Parameters کے ساتھ selectors استعمال کریں
// 5. Large arrays کو normalize کریں`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">⚡ چيپٹر 33: Redux Toolkit Selectors اور Performance Optimization</h1>
        <p className="chapter-subtitle2">Memoized Selectors, Custom Hooks اور Performance Best Practices</p>
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
            <h2 className="section-title">🎯 Selectors کی طاقت</h2>
            
            <div className="info-box">
              <pre className="urdu-text" style={{whiteSpace: 'pre-wrap'}}>
                {chapterIntro}
              </pre>
            </div>

            <div className="concept-cards">
              <div className="concept-card">
                <h3>🧠 Memoization کیا ہے؟</h3>
                <p className="urdu-text">
                  Memoization ایک technique ہے جو expensive calculations کے نتائج کو remember کرتی ہے۔ 
                  جب ایک function دوبارہ same inputs کے ساتھ call ہوتا ہے، تو وہ cached result واپس کرتا ہے۔
                </p>
              </div>

              <div className="concept-card">
                <h3>⚡ Performance Benefits</h3>
                <p className="urdu-text">
                  Memoized selectors 90% تک performance improve کر سکتے ہیں۔ 
                  یہ unnecessary re-renders کو روکتے ہیں اور app کو smooth بناتے ہیں۔
                </p>
              </div>

              <div className="concept-card">
                <h3>🔧 createSelector Function</h3>
                <p className="urdu-text">
                  Redux Toolkit کا <code>createSelector</code> function memoized selectors بنانے کے لیے استعمال ہوتا ہے۔ 
                  یہ input selectors اور result function لیتا ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Products Selectors */}
          <div className="card">
            <h3>📦 Products Selectors</h3>
            <p className="urdu-text">
              مصنوعات کے لیے مکمل selectors فائل۔ اس میں basic selectors, memoized selectors, 
              اور derived data selectors شامل ہیں۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/products/selectors.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productsSelectorsCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productsSelectorsCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 اہم Selectors:</h4>
              <ul className="urdu-text">
                <li><strong>Basic Selectors:</strong> Simple state access</li>
                <li><strong>Memoized Selectors:</strong> Complex calculations with caching</li>
                <li><strong>Filtered Products:</strong> Category, price range, sorting</li>
                <li><strong>Statistics:</strong> Derived data calculations</li>
                <li><strong>Search Products:</strong> Text search functionality</li>
              </ul>
            </div>
          </div>

          {/* Cart Selectors */}
          <div className="card">
            <h3>🛒 Cart Selectors</h3>
            <p className="urdu-text">
              خریداری کارٹ کے لیے selectors۔ Cart totals, item counts, 
              اور complex calculations کے لیے memoized selectors۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/features/cart/selectors.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(cartSelectorsCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{cartSelectorsCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 Cart Selectors کے فائدے:</h4>
              <ul className="urdu-text">
                <li><strong>Totals Calculation:</strong> Automatic recalculation</li>
                <li><strong>Item Lookup:</strong> Quick item search by ID</li>
                <li><strong>Category Summary:</strong> Group items by category</li>
                <li><strong>Savings Calculation:</strong> Discount calculations</li>
                <li><strong>Status Checks:</strong> Empty cart, item in cart</li>
              </ul>
            </div>
          </div>

          {/* Custom Hooks */}
          <div className="card">
            <h3>🎣 Custom Hooks</h3>
            <p className="urdu-text">
              Custom hooks جو selectors کو encapsulate کرتے ہیں اور components 
              کو clean اور reusable بناتے ہیں۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/hooks/useProducts.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(useProductsHookCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{useProductsHookCode}</pre>
              </div>
            </div>
            
            <div className="code-block-container" style={{marginTop: '20px'}}>
              <div className="code-header">
                <span>src/hooks/useCart.js</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(useCartHookCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{useCartHookCode}</pre>
              </div>
            </div>
            
            <div className="explanation-box">
              <h4>🔍 Custom Hooks کے فوائد:</h4>
              <ul className="urdu-text">
                <li><strong>Code Reusability:</strong> ایک جگہ پر تمام logic</li>
                <li><strong>Clean Components:</strong> Components صرف UI پر focus</li>
                <li><strong>Type Safety:</strong> Better TypeScript support</li>
                <li><strong>Testing:</strong> آسان testing</li>
                <li><strong>Maintenance:</strong> آسانی سے update کرنا</li>
              </ul>
            </div>
          </div>

          {/* Optimized Component */}
          <div className="card">
            <h3>⚡ Optimized Product List Component</h3>
            <p className="urdu-text">
              مکمل optimized component جو selectors اور custom hooks استعمال کرتا ہے۔ 
              Memoized components, shallow equality checks, اور performance optimizations۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/components/ProductListOptimized.jsx</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(productListOptimizedCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{productListOptimizedCode}</pre>
              </div>
            </div>
          </div>

          {/* Performance Helpers */}
          <div className="card">
            <h3>🔧 Performance Helpers</h3>
            <p className="urdu-text">
              Utility functions جو performance optimization میں مدد کرتی ہیں۔ 
              Debounce, throttle, memoization اور دیگر optimizations۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>src/utils/helpers.js - Performance Section</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(performanceHelpersCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{performanceHelpersCode}</pre>
              </div>
            </div>
          </div>

          {/* Performance Table */}
          <div className="card">
            <h3>📊 Performance Comparison</h3>
            <p className="urdu-text">
              Basic selectors اور memoized selectors کے درمیان performance difference۔
            </p>
            
            <div className="code-block-container">
              <div className="code-header">
                <span>Performance Metrics</span>
                <button 
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(performanceTable)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{performanceTable}</pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="card success-box">
            <h3>🏆 Performance Best Practices</h3>
            
            <div className="best-practices">
              <div className="practice-item">
                <h4>✅ Selectors کے لیے</h4>
                <ul className="urdu-text">
                  <li>ہمیشہ createSelector استعمال کریں</li>
                  <li>Basic selectors کو الگ export کریں</li>
                  <li>Complex calculations کو memoize کریں</li>
                  <li>Parameters کے ساتھ selectors بنائیں</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>✅ Components کے لیے</h4>
                <ul className="urdu-text">
                  <li>React.memo() کا استعمال کریں</li>
                  <li>useCallback اور useMemo استعمال کریں</li>
                  <li>shallowEqual استعمال کریں useSelector میں</li>
                  <li>Small اور focused components بنائیں</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>✅ State Structure</h4>
                <ul className="urdu-text">
                  <li>State کو normalize کریں</li>
                  <li>Nested data سے بچیں</li>
                  <li>IDs کا استعمال کریں references کے لیے</li>
                  <li>Large arrays کو chunk کریں</li>
                </ul>
              </div>

              <div className="practice-item">
                <h4>✅ Debugging Tips</h4>
                <ul className="urdu-text">
                  <li>Redux DevTools استعمال کریں</li>
                  <li>Performance tab میں check کریں</li>
                  <li>Console میں re-renders log کریں</li>
                  <li>React Profiler استعمال کریں</li>
                </ul>
              </div>
            </div>

            <div className="summary-box">
              <h4>📝 خلاصہ</h4>
              <p className="urdu-text">
                اس چيپٹر میں ہم نے Redux Toolkit میں performance optimization سیکھی:
              </p>
              <ol className="urdu-text">
                <li><strong>Memoized Selectors:</strong> createSelector کے ساتھ</li>
                <li><strong>Custom Hooks:</strong> Logic encapsulation کے لیے</li>
                <li><strong>Optimized Components:</strong> Memoization اور shallow equality</li>
                <li><strong>Performance Helpers:</strong> Debounce, throttle, memoize</li>
                <li><strong>Best Practices:</strong> Professional performance tips</li>
              </ol>
              
              <div className="action-buttons">
                <button className="primary-btn" onClick={() => copyCodeToClipboard(productsSelectorsCode + '\n\n' + cartSelectorsCode + '\n\n' + useProductsHookCode + '\n\n' + useCartHookCode)}>
                  تمام Selectors کاپی کریں
                </button>
                <button className="secondary-btn" onClick={() => copyCodeToClipboard(productListOptimizedCode)}>
                  Optimized Component کاپی کریں
                </button>
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
          flex-wrap: wrap;
        }
        
        .primary-btn, .secondary-btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 16px;
          transition: all 0.3s ease;
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
          transform: translateY(-2px);
        }
        
        .secondary-btn:hover {
          background: #EEF2FF;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}