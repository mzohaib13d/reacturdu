import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p style={{ marginTop: '20px', color: '#1a237e', fontSize: '18px' }}>
        لوڈ ہو رہا ہے...
      </p>
    </div>
  );
};

export default LoadingSpinner;