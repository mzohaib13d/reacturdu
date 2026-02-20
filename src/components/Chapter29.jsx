import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../App.css";

// 🔸 1. Zod ویریفکیشن رولز - سادہ فارم
const simpleSchema = z.object({
  email: z.string().min(1, "ای میل ضروری ہے").email("درست ای میل لکھیں"),
  password: z.string().min(6, "پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے"),
});

// 🔸 2. Zod ویریفکیشن رولز - ایڈوانس فارم
const formSchema = z
  .object({
    email: z.string().min(1, "ای میل ضروری ہے").email("درست ای میل لکھیں"),
    password: z
      .string()
      .min(8, "پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے")
      .regex(/[^A-Za-z0-9]/, "پاس ورڈ میں ایک اسپیشل کریکٹر لازمی ہے"),
    confirmPassword: z.string().min(1, "کنفرم پاس ورڈ ضروری ہے"),
    gender: z.string().min(1, "جینڈر منتخب کریں"),
    hobbies: z.array(z.string()).min(1, "کم از کم ایک مشغلہ منتخب کریں"),
    cnic: z
      .string()
      .regex(/^[0-9]{13}$/, "شناختی کارڈ نمبر 13 ہندسوں کا ہونا چاہیے"),
    hasLaptop: z.string().min(1, "یہ فیلڈ لازمی ہے"),
    about: z.string().min(1, "اپنا تعارف لکھیں"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "پاس ورڈ مماثل نہیں!",
    path: ["confirmPassword"],
  });

export default function Chapter29() {
  const [copyMessage, setCopyMessage] = useState("");

  // 🔸 سادہ فارم سیٹ اپ
  const {
    register: simpleRegister,
    handleSubmit: simpleHandleSubmit,
    formState: { errors: simpleErrors },
  } = useForm({
    resolver: zodResolver(simpleSchema),
  });

  // 🔸 ایڈوانس فارم سیٹ اپ
  const {
    register: advancedRegister,
    handleSubmit: advancedHandleSubmit,
    formState: { errors: advancedErrors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // 🔸 فارم سبمٹ ہونے پر
  const onSimpleSubmit = (data) => {
    alert("سادہ فارم درست ہے ✅");
    console.log(data);
  };

  const onAdvancedSubmit = (data) => {
    alert("ایڈوانس فارم درست ہے ✅");
    console.log(data);
  };

  // 🔸 کوڈ کاپی کرنے کا فنکشن
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

  // انسٹالیشن کوڈ
  const installationCode = `npm install zod react-hook-form @hookform/resolvers`;

  // سادہ فارم کوڈ
  const simpleFormCode = `import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔸 ویریفکیشن رولز
const schema = z.object({
  email: z
    .string()
    .min(1, "ای میل ضروری ہے")
    .email("درست ای میل لکھیں"),
  password: z
    .string()
    .min(6, "پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    alert("فارم درست ہے ✅");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>لاگ اِن فارم</h3>

      <label>ای میل:</label>
      <input type="text"   autocomplete="username" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <label>پاس ورڈ:</label>
      <input type="password" autocomplete="current-password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">لاگ اِن کریں</button>
    </form>
  );
}`;

  // ایڈوانس فارم کوڈ
  const advancedFormCode = `import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🧩 Zod Schema
const formSchema = z
  .object({
    email: z.string().min(1, "ای میل ضروری ہے").email("درست ای میل لکھیں"),
    password: z
      .string()
      .min(8, "پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے")
      .regex(/[^A-Za-z0-9]/, "پاس ورڈ میں ایک اسپیشل کریکٹر لازمی ہے"),
    confirmPassword: z.string().min(1, "کنفرم پاس ورڈ ضروری ہے"),
    gender: z.string().min(1, "جینڈر منتخب کریں"),
    hobbies: z.array(z.string()).min(1, "کم از کم ایک مشغلہ منتخب کریں"),
    cnic: z.string().regex(/^[0-9]{13}$/, "شناختی کارڈ نمبر 13 ہندسوں کا ہونا چاہیے"),
    hasLaptop: z.string().min(1, "یہ فیلڈ لازمی ہے"),
    about: z.string().min(1, "اپنا تعارف لکھیں"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "پاس ورڈ مماثل نہیں!",
    path: ["confirmPassword"],
  });

export default function ModernForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    alert("فارم درست ہے ✅");
    console.log(data);
  };

  return (
    <div className="form-container">
      <form className="modern-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>🧾 رجسٹریشن فارم</h2>

        <div className="form-group">
          <label>ای میل</label>
          <input type="text" autocomplete="username" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>پاس ورڈ</label>
          <input type="password" autocomplete="current-password" {...register("password")} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>کنفرم پاس ورڈ</label>
          <input type="password" autocomplete="current-password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        <div className="form-group">
          <label>جینڈر</label>
          <div className="options">
            <label><input type="radio" value="male" {...register("gender")} /> مرد</label>
            <label><input type="radio" value="female" {...register("gender")} /> عورت</label>
          </div>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        <div className="form-group">
          <label>مشاغل</label>
          <div className="options">
            <label><input type="checkbox" value="reading" {...register("hobbies")} /> مطالعہ</label>
            <label><input type="checkbox" value="traveling" {...register("hobbies")} /> سفر</label>
            <label><input type="checkbox" value="coding" {...register("hobbies")} /> کوڈنگ</label>
          </div>
          {errors.hobbies && <p className="error">{errors.hobbies.message}</p>}
        </div>

        <div className="form-group">
          <label>شناختی کارڈ نمبر</label>
          <input type="text"   autocomplete="username" {...register("cnic")} />
          {errors.cnic && <p className="error">{errors.cnic.message}</p>}
        </div>

        <div className="form-group">
          <label>کیا آپ کے پاس لیپ ٹاپ ہے؟</label>
          <select {...register("hasLaptop")}>
            <option value="">منتخب کریں</option>
            <option value="yes">ہاں</option>
            <option value="no">نہیں</option>
          </select>
          {errors.hasLaptop && <p className="error">{errors.hasLaptop.message}</p>}
        </div>

        <div className="form-group">
          <label>اپنا تعارف</label>
          <textarea rows="3" {...register("about")}></textarea>
          {errors.about && <p className="error">{errors.about.message}</p>}
        </div>

        <button type="submit" className="submit-btn">فارم جمع کریں</button>
      </form>
    </div>
  );
}`;

  // CSS کوڈ
  const cssCode = `/* 🌈 بنیادی اسٹائل */
.form-container {
  width: 100%;
  max-width: 500px;
  padding: 20px;
}

.modern-form {
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  padding: 30px 25px;
  animation: fadeIn 1s ease-in-out;
}

.modern-form h2 {
  text-align: center;
  color: #00796b;
  margin-bottom: 20px;
  font-weight: 600;
}

/* 🧱 فارم گروپ */
.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
}

/* 🎯 ان پٹ اور سیلیکٹ فیلڈز */
input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 15px;
}

input:focus, select:focus, textarea:focus {
  border-color: #00796b;
  box-shadow: 0 0 6px #00796b77;
  outline: none;
}

/* 🎨 ریڈیو اور چیک باکس گروپ */
.options label {
  display: inline-block;
  margin-right: 15px;
  font-weight: 400;
  color: #444;
}

/* ❌ ایرر میسجز */
.error {
  color: crimson;
  font-size: 13px;
  margin-top: 4px;
}

/* 🚀 سبمٹ بٹن */
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #00796b;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background: #005f56;
  transform: scale(1.02);
}

/* ✨ اینیمیشن */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 📱 موبائل ویو (iPhone 12, 14) */
@media (max-width: 430px) {
  .modern-form {
    padding: 20px;
  }
  
  h2 {
    font-size: 18px;
  }
  
  input, select, textarea {
    font-size: 14px;
    padding: 8px;
  }
  
  .submit-btn {
    font-size: 15px;
    padding: 10px;
  }
}`;

  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <h1 className="chapter-title2">📚 چيپٹر 29: Zod فارم ویلیڈیشن</h1>
        <p className="chapter-subtitle2">فارم ڈیٹا کی چیکنگ کو آسان بنائیں</p>
      </div>

      {/* کاپی میسج */}
      {copyMessage && <div className="copy-notification">{copyMessage}</div>}

      <div className="content-wrapper">
        <div className="main-content">
          {/* تعارف */}
          <div className="lesson-section">
            <h2 className="section-title">🧠 Zod کیا ہے؟</h2>
            <p className="urdu-text">
              Zod ایک جاوا اسکرپٹ لائبریری ہے جو چیک کرتی ہے کہ فارم میں لکھا
              گیا ڈیٹا درست ہے یا نہیں۔
            </p>
            <p className="urdu-text">
              <strong>مثلاً:</strong> اگر فارم میں ای میل پوچھا گیا ہے تو Zod یہ
              دیکھے گا کہ واقعی ای میل لکھی گئی ہے یا نہیں۔
            </p>
          </div>

          {/* انسٹالیشن */}
          <div className="learning-outcomes">
            <h2 className="section-title">🧰 مرحلہ 2: Zod کو انسٹال کریں</h2>
            <p className="urdu-text">
              سب سے پہلے اپنے React پروجیکٹ کے ٹرمینل میں یہ کمانڈ لکھیں:
            </p>
            <div className="code-block-container">
              <div className="code-header">
                <span>Terminal Command</span>
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

          {/* سادہ فارم ڈیمو */}
          <div className="demo-section">
            <h2 className="section-title">🎯 سادہ لاگ ان فارم</h2>
            <p className="urdu-text">
              ذیل میں Zod سے بنایا گیا سادہ لاگ ان فارم ہے۔ آزمائیں:
            </p>

            <div className="demo-card">
              <form
                onSubmit={simpleHandleSubmit(onSimpleSubmit)}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "20px auto",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  background: "white",
                }}
              >
                <h3 style={{ textAlign: "center", color: "#0078ff" }}>
                  لاگ اِن فارم
                </h3>

                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    ای میل:
                  </label>
                  <input
                    type="text"
                    {...simpleRegister("email")}
                    style={{
                      width: "90%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                  {simpleErrors.email && (
                    <p
                      style={{
                        color: "red",
                        margin: "5px 0 0 0",
                        fontSize: "14px",
                      }}
                    >
                      {simpleErrors.email.message}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    پاس ورڈ:
                  </label>
                  <input
                    type="password"
                    {...simpleRegister("password")}
                    style={{
                      width: "90%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                  {simpleErrors.password && (
                    <p
                      style={{
                        color: "red",
                        margin: "5px 0 0 0",
                        fontSize: "14px",
                      }}
                    >
                      {simpleErrors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    background: "#0078ff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  لاگ اِن کریں
                </button>
              </form>
            </div>

            {/* سادہ فارم کوڈ */}
            <div className="code-block-container" style={{ marginTop: "20px" }}>
              <div className="code-header">
                <span>Simple LoginForm.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(simpleFormCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{simpleFormCode}</pre>
              </div>
            </div>
          </div>

          {/* ایڈوانس فارم ڈیمو */}
          <div className="demo-section" style={{ background: "#f0f8ff" }}>
            <h2 className="section-title">🚀 پیشہ ورانہ رجسٹریشن فارم</h2>
            <p className="urdu-text">
              ذیل میں مکمل پیشہ ورانہ رجسٹریشن فارم ہے جو موبائل اور ڈیسک ٹاپ
              دونوں پر کام کرتا ہے:
            </p>

            {/* ایڈوانس فارم */}
            <div className="demo-card">
              <div
                className="form-container"
                style={{ maxWidth: "500px", margin: "0 auto" }}
              >
                <form
                  className="modern-form"
                  onSubmit={advancedHandleSubmit(onAdvancedSubmit)}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                    padding: "30px 25px",
                    animation: "fadeIn 1s ease-in-out",
                  }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#00796b",
                      marginBottom: "20px",
                    }}
                  >
                    🧾 رجسٹریشن فارم
                  </h2>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      ای میل
                    </label>
                    <input
                      type="text"
                      {...advancedRegister("email")}
                      style={{
                        width: "90%",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        direction: "ltr!impotant",
                        fontSize: "15px",
                      }}
                    />
                    {advancedErrors.email && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      پاس ورڈ
                    </label>
                    <input
                      type="password"
                      {...advancedRegister("password")}
                      style={{
                        width: "90%",
                        direction: "ltr!impotant",
                        textAlign: "left",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        fontSize: "15px",
                      }}
                    />
                    {advancedErrors.password && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      کنفرم پاس ورڈ
                    </label>
                    <input
                      type="password"
                      {...advancedRegister("confirmPassword")}
                      style={{
                        width: "90%",
                        direction: "ltr!impotant",
                        textAlign: "left",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        fontSize: "15px",
                      }}
                    />
                    {advancedErrors.confirmPassword && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      جینڈر
                    </label>
                    <div
                      className="options"
                      style={{ display: "flex", gap: "15px" }}
                    >
                      <label
                        style={{
                          display: "inline-block",
                          fontWeight: "400",
                          color: "#444",
                        }}
                      >
                        <input
                          type="radio"
                          value="male"
                          {...advancedRegister("gender")}
                        />{" "}
                        مرد
                      </label>
                      <label
                        style={{
                          display: "inline-block",
                          fontWeight: "400",
                          color: "#444",
                        }}
                      >
                        <input
                          type="radio"
                          value="female"
                          {...advancedRegister("gender")}
                        />{" "}
                        عورت
                      </label>
                    </div>
                    {advancedErrors.gender && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.gender.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      مشاغل
                    </label>
                    <div
                      className="options"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <label
                        style={{
                          display: "inline-block",
                          fontWeight: "400",
                          color: "#444",
                        }}
                      >
                        <input
                          type="checkbox"
                          value="reading"
                          {...advancedRegister("hobbies")}
                        />{" "}
                        مطالعہ
                      </label>
                      <label
                        style={{
                          display: "inline-block",
                          fontWeight: "400",
                          color: "#444",
                        }}
                      >
                        <input
                          type="checkbox"
                          value="traveling"
                          {...advancedRegister("hobbies")}
                        />{" "}
                        سفر
                      </label>
                      <label
                        style={{
                          display: "inline-block",
                          fontWeight: "400",
                          color: "#444",
                        }}
                      >
                        <input
                          type="checkbox"
                          value="coding"
                          {...advancedRegister("hobbies")}
                        />{" "}
                        کوڈنگ
                      </label>
                    </div>
                    {advancedErrors.hobbies && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.hobbies.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      شناختی کارڈ نمبر
                    </label>
                    <input
                      type="text"
                      {...advancedRegister("cnic")}
                      style={{
                        width: "90%",
                        direction: "ltr!impotant",
                        textAlign: "left",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        fontSize: "15px",
                      }}
                    />
                    {advancedErrors.cnic && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.cnic.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      کیا آپ کے پاس لیپ ٹاپ ہے؟
                    </label>
                    <select
                      {...advancedRegister("hasLaptop")}
                      style={{
                        width: "90%",
                        direction: "ltr!impotant",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        fontSize: "15px",
                      }}
                    >
                      <option value="">منتخب کریں</option>
                      <option value="yes">ہاں</option>
                      <option value="no">نہیں</option>
                    </select>
                    {advancedErrors.hasLaptop && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.hasLaptop.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: "18px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      اپنا تعارف
                    </label>
                    <textarea
                      rows="3"
                      {...advancedRegister("about")}
                      style={{
                        width: "90%",
                        direction: "ltr!impotant",
                        textAlign: "left",
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "10px",
                        fontSize: "15px",
                        resize: "vertical",
                      }}
                    ></textarea>
                    {advancedErrors.about && (
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "13px",
                          marginTop: "4px",
                        }}
                      >
                        {advancedErrors.about.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "#00796b",
                      color: "white",
                      fontSize: "16px",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    فارم جمع کریں
                  </button>
                </form>
              </div>
            </div>

            {/* ایڈوانس فارم کوڈ */}
            <div className="code-block-container" style={{ marginTop: "20px" }}>
              <div className="code-header">
                <span>ModernForm.jsx</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(advancedFormCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{advancedFormCode}</pre>
              </div>
            </div>

            {/* CSS کوڈ */}
            <div className="code-block-container" style={{ marginTop: "20px" }}>
              <div className="code-header">
                <span>ModernForm.css</span>
                <button
                  className="copy-btn"
                  onClick={() => copyCodeToClipboard(cssCode)}
                >
                  کاپی کریں
                </button>
              </div>
              <div className="code-block-wrapper">
                <pre className="english-code">{cssCode}</pre>
              </div>
            </div>
          </div>

          {/* نتیجہ */}
          <div className="summary-content2">
            <h2 className="section-title">🧾 نتیجہ:</h2>
            <p className="urdu-text">
              اگر آپ خالی فارم جمع کرائیں گے تو ایرر میسج آئے گا:
            </p>
            <ul className="urdu-text">
              <li>❌ "ای میل ضروری ہے"</li>
              <li>❌ "پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے"</li>
            </ul>
            <p className="urdu-text">
              اگر آپ درست فارم لکھیں گے تو alert آئے گا:
            </p>
            <p
              className="urdu-text"
              style={{ color: "green", fontWeight: "bold" }}
            >
              ✅ "فارم درست ہے"
            </p>
          </div>

          {/* سمجھنے کے لیے */}
          <div className="explanation-section">
            <h2 className="section-title">📘 سمجھنے کے لیے یاد رکھیں:</h2>
            <ul className="urdu-text">
              <li>
                <strong>Zod</strong> صرف قوانین (rules) چیک کرتا ہے۔
              </li>
              <li>
                <strong>react-hook-form</strong> فارم کا ڈیٹا کنٹرول کرتا ہے۔
              </li>
              <li>
                <strong>zodResolver</strong> ان دونوں کو جوڑ دیتا ہے۔
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .copy-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #27ae60;
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .modern-form input:focus,
        .modern-form select:focus,
        .modern-form textarea:focus {
          border-color: #00796b;
          box-shadow: 0 0 6px #00796b77;
          outline: none;
        }
        
        .submit-btn:hover {
          background: #005f56;
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
