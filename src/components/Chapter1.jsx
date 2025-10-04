import React from 'react';

function Chapter1() {
  return (
    <div className="card urdu-text">
      <h2>Chapter 1. React کیا ہے؟ — تعارف</h2>
      <p>
        React ایک JavaScript لائبریری ہے جو یوزر انٹرفیس (UI) بنانے کے لیے
        استعمال ہوتی ہے، خصوصاً ویب ایپلیکیشنز کے لیے۔
      </p>
      <p>
        یہ Facebook نے بنائی، اور اس کا مقصد یہ ہے کہ آپ UI کو چھوٹے، قابلِ
        دوبارہ استعمال ہونے والے Components کی شکل میں بنائیں۔
      </p>
      <p>
        React Virtual DOM کا استعمال کرتا ہے تاکہ UI کی تبدیلیاں مؤثر انداز میں
        کی جائیں، یعنی صرف وہ حصے دوبارہ رینڈر ہوں جو تبدیل ہوئے ہیں۔
      </p>
      <p>
        React میں آپ JSX استعمال کرتے ہیں (جو JS + HTML مشابہت ہے) تاکہ آپ UI کو
        JavaScript کوڈ کے اندر لکھ سکیں۔
      </p>
      <p>
        React ایک view لائبریری ہے — یہ پورے اسٹیک کا framework نہیں ہے، یعنی
        routing، state management، data fetching وغیرہ کے لیے آپ کو دوسرے
        لائبریریاں استعمال کرنی ہوں گی (مثلاً React Router، Redux / Zustand /
        React Query وغیرہ)۔
      </p>
    </div>
  );
}

export default Chapter1;