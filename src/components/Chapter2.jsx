import React from 'react';

function Chapter2() {
  return (
    <div className="card urdu-text">
      <h2>Chapter 2. Create React App (CRA) اور اس کی ڈپریکیٹشن</h2>
      <p>
        پہلے React-based ایپس بنانے کے لیے create-react-app ایک بہت مقبول tool
        تھی، جو آپ کو zero-config کے ساتھ React ایپ شروع کرنے دیتی تھی۔
      </p>
      <p>
        لیکن 14 فروری 2025 کو React ٹیم نے اعلان کیا کہ Create React App کو
        ڈپریکیٹ کیا جا رہا ہے، یعنی نئے پروجیکٹس کے لیے اسے مزید فعال ترقی نہیں
        دی جائے گی۔
      </p>
      <blockquote className="english-quote">
        "Starting today, if you install a new app, you will see a deprecation
        warning: create-react-app is deprecated." — React Team
      </blockquote>
      <p>
        یہ مطلب ہے کہ CRA کو ریٹائر کرنا شروع کردیا گیا ہے — وہ کام کرے گی، پر
        نئے فیچرز شامل نہیں کیے جائیں گے، اور React ٹیم ترغیب دے رہی ہے کہ نئے
        پروجیکٹس modern build tools (Vite, Parcel وغیرہ) استعمال کریں۔
      </p>
    </div>
  );
}

export default Chapter2;