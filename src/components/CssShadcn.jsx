import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import zohaibImage from "../assets/zohaibImage.png";

const CssShadcn = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [showPortfolio, setShowPortfolio] = useState(false);

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const portfolioVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 120, 255, 0.4)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="shadcn-guide chapter-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: '100vh',
        direction: 'rtl',
        fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Verdana, Tahoma, sans-serif',
        background: '#fdfdfd',
        color: '#222'
      }}
    >
      {/* Header Section */}
      <motion.header 
        className="guide-header chapter-header"
        variants={itemVariants}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '70px 0',
          textAlign: 'center',
          marginBottom: '30px'
        }}
      >
        <div className="container">
          <motion.h1 
            className="section-title2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.15em',
              wordSpacing: '0.8rem',
              lineHeight: '1.4',
              '@media (max-width: 430px)': {
                fontSize: '2.2rem',
                wordSpacing: '0.4rem',
                letterSpacing: '0.08em',
                padding: '0 15px'
              },
              '@media (max-width: 390px)': {
                fontSize: '2rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.06em'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.8rem',
                wordSpacing: '0.25rem',
                letterSpacing: '0.05em'
              }
            }}
          >
            Chapter 28 — Complete Guide to shadcn/ui
          </motion.h1>
          <motion.p 
            className="chapter-subtitle2"
            variants={itemVariants}
            style={{
              fontSize: '1.4rem',
              opacity: 0.95,
              maxWidth: '800px',
              margin: '0 auto',
              letterSpacing: '0.01em',
              wordSpacing: '0.6rem',
              lineHeight: '1.6',
              fontWeight: '400',
              '@media (max-width: 430px)': {
                fontSize: '1.1rem',
                wordSpacing: '0.3rem',
                padding: '0 15px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '0.95rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            Build beautiful, accessible React components with complete control
          </motion.p>
        </div>
      </motion.header>

      {/* Introduction Section */}
      <motion.section 
        className="intro-section lesson-section"
        variants={itemVariants}
      >
        <div className="container">
          <motion.h2 
            className="urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            shadcn/ui کا مکمل تعارف
          </motion.h2>
          <div className="content-grid">
            <div className="text-content">
              <motion.p 
                className="urdu-text"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    wordSpacing: '0.25rem',
                    letterSpacing: '0.02em',
                    lineHeight: '1.8',
                    fontSize: '0.95rem',
                    padding: '0 10px'
                  },
                  '@media (max-width: 390px)': {
                    wordSpacing: '0.2rem',
                    fontSize: '0.9rem'
                  },
                  '@media (max-width: 375px)': {
                    wordSpacing: '0.15rem',
                    fontSize: '0.85rem'
                  }
                }}
              >
                <strong>shadcn/ui</strong> ایک عام UI لائبریری نہیں ہے۔ یہ درحقیقت <em>ری اِیسبل کمپوننٹس کا ایک سیٹ</em> ہے جسے آپ اپنے پراجیکٹ میں <em>کاپی اور پیسٹ</em> کر سکتے ہیں۔ یہ <strong>Radix UI</strong> جیسے accessibility-focused پرائمٹیوز اور <strong>Tailwind CSS</strong> کے سٹائلنگ فریم ورک پر بنایا گیا ہے۔
              </motion.p>
              
              <motion.div 
                className="english-quote"
                variants={itemVariants}
                style={{
                  '@media (max-width: 430px)': {
                    fontSize: '0.9rem',
                    padding: '12px',
                    margin: '10px'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '0.85rem',
                    padding: '10px'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '0.8rem',
                    padding: '8px'
                  }
                }}
              >
                "shadcn/ui is not a traditional UI library. It's actually a collection of reusable components that you can copy and paste into your project. Built on accessibility-focused primitives like Radix UI and Tailwind CSS styling framework."
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Personal Introduction Section with Image - DISPLAY PICTURE HIDDEN ON MOBILE */}
    <motion.section
  className="personal-intro-section card"
  variants={cardVariants}
>
  <div className="container">
    <div className="personal-intro-grid">
      {/* Image Section - Hidden on screens <= 430px via CSS */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="zohaib-image-container"
      >
        <motion.img
          src={zohaibImage}
          alt="Zohaib Farooq"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="zohaib-image"
        />
        <motion.h3
          className="zohaib-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          زوہیب فرق
        </motion.h3>
      </motion.div>

      {/* Urdu Text and Project Links Container */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="urdu-content-container"
      >
        {/* Urdu Heading */}
        <motion.h2 className="urdu-heading">
          میری مہارتیں
        </motion.h2>
        
        {/* Urdu Paragraphs */}
        <motion.p 
          className="urdu-paragraph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          میں <strong>ایچ ٹی ایم ایل</strong>، <strong>سی ایس ایس</strong>، <strong>جاوا اسکرپٹ</strong> اور <strong>مرن اسٹیک</strong> میں مہارت رکھتا ہوں۔
        </motion.p>

        <motion.p 
          className="urdu-paragraph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          میری <strong>ویب اینیمیشنز</strong> میں مہارت اس بات کا منہ بولتہ ثبوت ہے میرے بنائے پراجیکٹس کی مثالیں پیش خدمت ہیں۔
        </motion.p>

        {/* Project Links - Arranged in one column below 430px via CSS */}
        <motion.div
          className="project-links-grid"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[
            {
              name: "cssanimations01.web.app",
              url: "https://cssanimations01.web.app/",
            },
            {
              name: "amazing-clone01.web.app",
              url: "https://amazing-clone01.web.app/",
            },
            {
              name: "githuburdu.netlify.app",
              url: "https://githuburdu.netlify.app/",
            },
            {
              name: "mypolice.netlify.app",
              url: "https://mypolice.netlify.app/",
            },
            {
              name: "mzohaib13d.github.io/cssurdu",
              url: "https://mzohaib13d.github.io/cssurdu/",
            },
            {
              name: "foodiesbootstrap.web.app",
              url: "https://foodiesbootstrap.web.app/",
            },
          ].map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="project-link"
            >
              {project.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Comparison Table Section */}
      <motion.section 
        className="comparison-section card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            دیگر UI لائبریریز کے مقابلے میں shadcn/ui کے فوائد
          </motion.h2>
          <motion.p 
            className="urdu-text" 
            style={{
              textAlign: 'center', 
              marginBottom: '20px',
              wordSpacing: '0.5rem',
              letterSpacing: '0.03em',
              lineHeight: '2',
              '@media (max-width: 430px)': {
                fontSize: '0.95rem',
                wordSpacing: '0.25rem',
                lineHeight: '1.8',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '0.9rem',
                wordSpacing: '0.2rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '0.85rem',
                wordSpacing: '0.15rem'
              }
            }}
            variants={itemVariants}
          >
            ذیل کے جدول میں shadcn/ui کے Ant Design اور Material UI (MUI) کے مقابلے میں اہم فوائد دیکھ سکتے ہیں۔
          </motion.p>
          <motion.div 
            className="file-table"
            variants={itemVariants}
          >
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice">
                ← → Scroll horizontally to view complete table
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="urdu-text-left">معیار</th>
                  <th className="urdu-text-left">shadcn/ui</th>
                  <th className="urdu-text-left">Ant Design</th>
                  <th className="urdu-text-left">Material UI (MUI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="urdu-text-left">فلسفہ اور کنٹرول</td>
                  <td className="urdu-text-left">مکمل کنٹرول، آپ کا کوڈ آپ کے پاس</td>
                  <td className="urdu-text-left">پہلے سے طے شدہ ڈیزائن سسٹم، کم کنٹرول</td>
                  <td className="urdu-text-left">پہلے سے طے شدہ ڈیزائن، کم کنٹرول</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">اپنی مرضی کے مطابق تبدیلی</td>
                  <td className="urdu-text-left">بہت آسان، براہ راست Tailwind کلاسز سے</td>
                  <td className="urdu-text-left">مشکل، ڈیزائن سسٹم کو سمجھنا ضروری</td>
                  <td className="urdu-text-left">درمیانی، theme اور override کی ضرورت</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">کارکردگی</td>
                  <td className="urdu-text-left">بہترین، صرف وہی کمپوننٹس استعمال ہوتے ہیں جو آپ کو چاہیں</td>
                  <td className="urdu-text-left">درمیانی، بڑا bundle سائز</td>
                  <td className="urdu-text-left">درمیانی، بڑا bundle سائز</td>
                </tr>
                <tr>
                  <td className="urdu-text-left">سب سے بہتر کس کے لیے ہے؟</td>
                  <td className="urdu-text-left">وہ پراجیکٹس جن میں منفرد ڈیزائن اور مکمل کنٹرول درکار ہو</td>
                  <td className="urdu-text-left">بڑے انٹرپرائز ایپلیکیشنز</td>
                  <td className="urdu-text-left">وہ ایپس جنہیں Material Design کے مطابق ہونا ہے</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Teacher's Method Section */}
      <motion.section 
        className="teacher-method-section explanation-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            سر علی آفتاب شیخ کا بتایا ہوا طریقہ
          </motion.h2>
          <div className="method-steps">
            
            <motion.div 
              className="step-card"
              variants={itemVariants}
              style={{
                '@media (max-width: 430px)': {
                  padding: '15px',
                  margin: '10px'
                },
                '@media (max-width: 390px)': {
                  padding: '12px',
                  margin: '8px'
                },
                '@media (max-width: 375px)': {
                  padding: '10px',
                  margin: '6px'
                }
              }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                  style={{
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    lineHeight: '2',
                    '@media (max-width: 430px)': {
                      fontSize: '1.2rem',
                      wordSpacing: '0.25rem',
                      lineHeight: '1.8'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '1.1rem',
                      wordSpacing: '0.2rem'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '1rem',
                      wordSpacing: '0.15rem'
                    }
                  }}
                >
                  jsconfig.json بنائیں
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>jsconfig.json</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`, 'jsconfig')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        '@media (max-width: 430px)': {
                          padding: '6px 10px',
                          fontSize: '11px'
                        },
                        '@media (max-width: 390px)': {
                          padding: '5px 8px',
                          fontSize: '10px'
                        }
                      }}
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        fontSize: '10px'
                      },
                      '@media (max-width: 375px)': {
                        fontSize: '9px'
                      }
                    }}>
{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '10px'
                      }
                    }}>
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              variants={itemVariants}
              style={{
                '@media (max-width: 430px)': {
                  padding: '15px',
                  margin: '10px'
                },
                '@media (max-width: 390px)': {
                  padding: '12px',
                  margin: '8px'
                },
                '@media (max-width: 375px)': {
                  padding: '10px',
                  margin: '6px'
                }
              }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                  style={{
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    lineHeight: '2',
                    '@media (max-width: 430px)': {
                      fontSize: '1.2rem',
                      wordSpacing: '0.25rem',
                      lineHeight: '1.8'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '1.1rem',
                      wordSpacing: '0.2rem'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '1rem',
                      wordSpacing: '0.15rem'
                    }
                  }}
                >
                  vite.config.js میں path alias شامل کریں
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>vite.config.js</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`, 'vite-config')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        '@media (max-width: 430px)': {
                          padding: '6px 10px',
                          fontSize: '11px'
                        },
                        '@media (max-width: 390px)': {
                          padding: '5px 8px',
                          fontSize: '10px'
                        }
                      }}
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        fontSize: '10px'
                      },
                      '@media (max-width: 375px)': {
                        fontSize: '9px'
                      }
                    }}>
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '10px'
                      }
                    }}>
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              variants={itemVariants}
              style={{
                '@media (max-width: 430px)': {
                  padding: '15px',
                  margin: '10px'
                },
                '@media (max-width: 390px)': {
                  padding: '12px',
                  margin: '8px'
                },
                '@media (max-width: 375px)': {
                  padding: '10px',
                  margin: '6px'
                }
              }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <motion.h3 
                  className="urdu-text-left"
                  variants={itemVariants}
                  style={{
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    lineHeight: '2',
                    '@media (max-width: 430px)': {
                      fontSize: '1.2rem',
                      wordSpacing: '0.25rem',
                      lineHeight: '1.8'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '1.1rem',
                      wordSpacing: '0.2rem'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '1rem',
                      wordSpacing: '0.15rem'
                    }
                  }}
                >
                  shadcn/ui initialization
                </motion.h3>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>Terminal Command</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard('npx shadcn@latest init', 'shadcn-init')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        '@media (max-width: 430px)': {
                          padding: '6px 10px',
                          fontSize: '11px'
                        },
                        '@media (max-width: 390px)': {
                          padding: '5px 8px',
                          fontSize: '10px'
                        }
                      }}
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        fontSize: '10px'
                      },
                      '@media (max-width: 375px)': {
                        fontSize: '9px'
                      }
                    }}>
{`npx shadcn@latest init`}
                    </pre>
                  </div>
                </motion.div>
                <motion.div 
                  className="info-box urdu-text-left success-box"
                  variants={itemVariants}
                  style={{
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    lineHeight: '2',
                    '@media (max-width: 430px)': {
                      fontSize: '0.85rem',
                      padding: '12px',
                      wordSpacing: '0.25rem'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '0.8rem',
                      padding: '10px',
                      wordSpacing: '0.2rem'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '0.75rem',
                      padding: '8px',
                      wordSpacing: '0.15rem'
                    }
                  }}
                >
                  <strong>انتخابات:</strong><br/>
                  - Would you like to use TypeScript? » No<br/>
                  - Which style would you like to use? » Default<br/>
                  - Which color would you like to use as the base color? » Slate<br/>
                  - Where is your global CSS file? » ./src/index.css<br/>
                  - Would you like to use CSS variables for theming? » No<br/>
                  - Where is your tailwind.config.js located? » tailwind.config.js<br/>
                  - Configure the import alias for components: » @/components<br/>
                  - Configure the import alias for utils: » @/lib/utils
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* File Structure Section */}
      <motion.section 
        className="file-structure-section card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            مکمل فائل ڈھانچہ
          </motion.h2>
          <motion.p 
            className="urdu-text" 
            style={{
              textAlign: 'center', 
              marginBottom: '20px',
              wordSpacing: '0.5rem',
              letterSpacing: '0.03em',
              lineHeight: '2',
              '@media (max-width: 430px)': {
                fontSize: '0.95rem',
                wordSpacing: '0.25rem',
                lineHeight: '1.8',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '0.9rem',
                wordSpacing: '0.2rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '0.85rem',
                wordSpacing: '0.15rem'
              }
            }}
            variants={itemVariants}
          >
            آپ کا پروجیکٹ اس طرح دکھائی دینا چاہیے:
          </motion.p>
          
          <motion.div 
            className="code-block-container"
            variants={itemVariants}
          >
            <div className="code-header">
              <span>File Structure Tree</span>
              <motion.button 
                className="copy-btn pulse-button"
                onClick={() => copyToClipboard(
`my-shadcn-app/
├── node_modules/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── jsconfig.json          
├── vite.config.js         
├── tailwind.config.js
├── package.json
└── components.json        (shadcn/ui init کے بعد بنے گی)`, 'file-structure')}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  '@media (max-width: 430px)': {
                    padding: '6px 10px',
                    fontSize: '11px'
                  },
                  '@media (max-width: 390px)': {
                    padding: '5px 8px',
                    fontSize: '10px'
                  }
                }}
              >
                Copy Structure
              </motion.button>
            </div>
            <div className="code-block-wrapper">
              <pre className="english-code" style={{
                fontFamily: 'monospace', 
                fontSize: '14px', 
                lineHeight: '1.4',
                '@media (max-width: 430px)': {
                  fontSize: '11px'
                },
                '@media (max-width: 390px)': {
                  fontSize: '10px'
                },
                '@media (max-width: 375px)': {
                  fontSize: '9px'
                }
              }}>
{`my-shadcn-app/
├── node_modules/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── jsconfig.json          
├── vite.config.js         
├── tailwind.config.js
├── package.json
└── components.json        (shadcn/ui init کے بعد بنے گی)`}
              </pre>
            </div>
            <div className="code-scroll-notice-parent">
              <div className="code-scroll-notice" style={{
                '@media (max-width: 430px)': {
                  fontSize: '10px'
                }
              }}>
                ← → Scroll to view complete structure
              </div>
            </div>
          </motion.div>

          {/* File Descriptions Table */}
          <motion.div 
            style={{marginTop: '30px'}}
            variants={itemVariants}
          >
            <motion.h3 
              className="urdu-text" 
              style={{
                textAlign: 'center', 
                marginBottom: '15px',
                wordSpacing: '0.5rem',
                letterSpacing: '0.03em',
                lineHeight: '2',
                '@media (max-width: 430px)': {
                  fontSize: '1.2rem',
                  wordSpacing: '0.25rem'
                },
                '@media (max-width: 390px)': {
                  fontSize: '1.1rem',
                  wordSpacing: '0.2rem'
                },
                '@media (max-width: 375px)': {
                  fontSize: '1rem',
                  wordSpacing: '0.15rem'
                }
              }}
              variants={itemVariants}
            >
              فائل کی تفصیلات
            </motion.h3>
            <motion.div 
              className="file-table"
              variants={itemVariants}
            >
              <div className="code-scroll-notice-parent">
                <div className="code-scroll-notice" style={{
                  '@media (max-width: 430px)': {
                    fontSize: '10px'
                  }
                }}>
                  ← → Scroll horizontally to view complete table
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="urdu-text-left">فائل/فولڈر</th>
                    <th className="urdu-text-left">تفصیل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>my-shadcn-app/</code></td>
                    <td className="urdu-text-left">مین پروجیکٹ ڈائریکٹری</td>
                  </tr>
                  <tr>
                    <td><code>node_modules/</code></td>
                    <td className="urdu-text-left">تمام انسٹال شدہ packages</td>
                  </tr>
                  <tr>
                    <td><code>src/</code></td>
                    <td className="urdu-text-left">سورس کوڈ فولڈر</td>
                  </tr>
                  <tr>
                    <td><code>src/components/</code></td>
                    <td className="urdu-text-left">شادن کے تمام کمپوننٹس</td>
                  </tr>
                  <tr>
                    <td><code>src/components/ui/</code></td>
                    <td className="urdu-text-left">UI کمپوننٹس</td>
                  </tr>
                  <tr>
                    <td><code>src/components/ui/button.jsx</code></td>
                    <td className="urdu-text-left">بٹن کمپوننٹ</td>
                  </tr>
                  <tr>
                    <td><code>src/App.jsx</code></td>
                    <td className="urdu-text-left">مین ایپلیکیشن فائل</td>
                  </tr>
                  <tr>
                    <td><code>src/main.jsx</code></td>
                    <td className="urdu-text-left">ایپلیکیشن انٹری پوائنٹ</td>
                  </tr>
                  <tr>
                    <td><code>src/index.css</code></td>
                    <td className="urdu-text-left">گلوبل CSS فائل</td>
                  </tr>
                  <tr>
                    <td><code>jsconfig.json</code></td>
                    <td className="urdu-text-left">JS کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>vite.config.js</code></td>
                    <td className="urdu-text-left">Vite کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>tailwind.config.js</code></td>
                    <td className="urdu-text-left">Tailwind کنفیگریشن</td>
                  </tr>
                  <tr>
                    <td><code>package.json</code></td>
                    <td className="urdu-text-left">پروجیکٹ کی تفصیلات</td>
                  </tr>
                  <tr>
                    <td><code>components.json</code></td>
                    <td className="urdu-text-left">(shadcn/ui init کے بعد بنے گی)</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Complete Installation Section */}
      <motion.section 
        className="complete-installation-section learning-outcomes"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            مکمل انسٹالیشن گائیڈ
          </motion.h2>
          
          <motion.div 
            className="step-card"
            variants={itemVariants}
            style={{
              '@media (max-width: 430px)': {
                padding: '15px',
                margin: '10px'
              },
              '@media (max-width: 390px)': {
                padding: '12px',
                margin: '8px'
              },
              '@media (max-width: 375px)': {
                padding: '10px',
                margin: '6px'
              }
            }}
          >
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    fontSize: '1.2rem',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.8'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '1.1rem',
                    wordSpacing: '0.2rem'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '1rem',
                    wordSpacing: '0.15rem'
                  }
                }}
              >
                نیا Vite پراجیکٹ بنائیں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install`, 'step1')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                    >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '10px'
                    }
                  }}>
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
            style={{
              '@media (max-width: 430px)': {
                padding: '15px',
                margin: '10px'
              },
              '@media (max-width: 390px)': {
                padding: '12px',
                margin: '8px'
              },
              '@media (max-width: 375px)': {
                padding: '10px',
                margin: '6px'
              }
            }}
          >
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    fontSize: '1.2rem',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.8'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '1.1rem',
                    wordSpacing: '0.2rem'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '1rem',
                    wordSpacing: '0.15rem'
                  }
                }}
              >
                Tailwind CSS انسٹال اور کنفیگر کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Commands</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
npx tailwindcss init -p`, 'step2')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                    >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
npx tailwindcss init -p`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '10px'
                    }
                  }}>
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-box"
                variants={itemVariants}
              >
                <motion.h4 
                  className="urdu-text-left"
                  variants={itemVariants}
                  style={{
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    lineHeight: '2',
                    '@media (max-width: 430px)': {
                      fontSize: '1rem',
                      wordSpacing: '0.25rem'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '0.95rem',
                      wordSpacing: '0.2rem'
                    }
                  }}
                >
                  tailwind.config.js Configuration
                </motion.h4>
                <motion.div 
                  className="code-block-container"
                  variants={itemVariants}
                >
                  <div className="code-header">
                    <span>JavaScript</span>
                    <motion.button 
                      className="copy-btn pulse-button"
                      onClick={() => copyToClipboard(
`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`, 'tailwind-config')}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        '@media (max-width: 430px)': {
                          padding: '6px 10px',
                          fontSize: '11px'
                        },
                        '@media (max-width: 390px)': {
                          padding: '5px 8px',
                          fontSize: '10px'
                        }
                      }}
                    >
                      Copy Code
                    </motion.button>
                  </div>
                  <div className="code-block-wrapper">
                    <pre className="english-code" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        fontSize: '10px'
                      },
                      '@media (max-width: 375px)': {
                        fontSize: '9px'
                      }
                    }}>
{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    </pre>
                  </div>
                  <div className="code-scroll-notice-parent">
                    <div className="code-scroll-notice" style={{
                      '@media (max-width: 430px)': {
                        fontSize: '10px'
                      }
                    }}>
                      ← → Scroll to view complete code
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
            style={{
              '@media (max-width: 430px)': {
                padding: '15px',
                margin: '10px'
              },
              '@media (max-width: 390px)': {
                padding: '12px',
                margin: '8px'
              },
              '@media (max-width: 375px)': {
                padding: '10px',
                margin: '6px'
              }
            }}
          >
            <div className="step-number">3</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    fontSize: '1.2rem',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.8'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '1.1rem',
                    wordSpacing: '0.2rem'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '1rem',
                    wordSpacing: '0.15rem'
                  }
                }}
              >
                index.css فائل اپ ڈیٹ کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>src/index.css</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`@import "tailwindcss";`, 'index-css')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`@import "tailwindcss";`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Usage Examples Section */}
      <motion.section 
        className="usage-section homework-section"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            استعمال کی مثالیں
          </motion.h2>
          
          <motion.div 
            className="step-card"
            variants={itemVariants}
            style={{
              '@media (max-width: 430px)': {
                padding: '15px',
                margin: '10px'
              },
              '@media (max-width: 390px)': {
                padding: '12px',
                margin: '8px'
              },
              '@media (max-width: 375px)': {
                padding: '10px',
                margin: '6px'
              }
            }}
          >
            <div className="step-number">1</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    fontSize: '1.2rem',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.8'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '1.1rem',
                    wordSpacing: '0.2rem'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '1rem',
                    wordSpacing: '0.15rem'
                  }
                }}
              >
                بٹن (Button) کمپوننٹ شامل کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add button', 'add-button')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`npx shadcn@latest add button`}
                  </pre>
                </div>
              </motion.div>

              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>App.jsx میں استعمال</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard(
`import { Button } from '@/components/ui/button';

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
export default App;`, 'button-usage')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`import { Button } from '@/components/ui/button';

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
export default App;`}
                  </pre>
                </div>
                <div className="code-scroll-notice-parent">
                  <div className="code-scroll-notice" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '10px'
                    }
                  }}>
                    ← → Scroll to view complete code
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={itemVariants}
            style={{
              '@media (max-width: 430px)': {
                padding: '15px',
                margin: '10px'
              },
              '@media (max-width: 390px)': {
                padding: '12px',
                margin: '8px'
              },
              '@media (max-width: 375px)': {
                padding: '10px',
                margin: '6px'
              }
            }}
          >
            <div className="step-number">2</div>
            <div className="step-content">
              <motion.h3 
                className="urdu-text-left"
                variants={itemVariants}
                style={{
                  wordSpacing: '0.5rem',
                  letterSpacing: '0.03em',
                  lineHeight: '2',
                  '@media (max-width: 430px)': {
                    fontSize: '1.2rem',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.8'
                  },
                  '@media (max-width: 390px)': {
                    fontSize: '1.1rem',
                    wordSpacing: '0.2rem'
                  },
                  '@media (max-width: 375px)': {
                    fontSize: '1rem',
                    wordSpacing: '0.15rem'
                  }
                }}
              >
                Navigation Menu شامل کریں
              </motion.h3>
              <motion.div 
                className="code-block-container"
                variants={itemVariants}
              >
                <div className="code-header">
                  <span>Terminal Command</span>
                  <motion.button 
                    className="copy-btn pulse-button"
                    onClick={() => copyToClipboard('npx shadcn@latest add navigation-menu', 'add-nav')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      '@media (max-width: 430px)': {
                        padding: '6px 10px',
                        fontSize: '11px'
                      },
                      '@media (max-width: 390px)': {
                        padding: '5px 8px',
                        fontSize: '10px'
                      }
                    }}
                  >
                    Copy Code
                  </motion.button>
                </div>
                <div className="code-block-wrapper">
                  <pre className="english-code" style={{
                    '@media (max-width: 430px)': {
                      fontSize: '11px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '10px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '9px'
                    }
                  }}>
{`npx shadcn@latest add navigation-menu`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Live Demo Section */}
      <motion.section 
        className="demo-live-section card"
        variants={cardVariants}
        style={{marginTop: '40px'}}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            This is live demo of Shadcn example
          </motion.h2>
          
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <motion.button 
              className="pulse-button"
              onClick={togglePortfolio}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: 'linear-gradient(135deg, #0078ff 0%, #00c6ff 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '8px',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'sans-serif',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0, 120, 255, 0.3)',
                margin: '20px 0',
                '@media (max-width: 430px)': {
                  padding: '12px 20px',
                  fontSize: '16px'
                },
                '@media (max-width: 390px)': {
                  padding: '10px 18px',
                  fontSize: '15px'
                },
                '@media (max-width: 375px)': {
                  padding: '8px 15px',
                  fontSize: '14px'
                }
              }}
            >
              {showPortfolio ? '❌ Close Portfolio' : '🚀 Live Example - View Portfolio'}
            </motion.button>
          </div>

          <AnimatePresence>
            {showPortfolio && (
              <motion.div 
                className="portfolio-demo"
                variants={portfolioVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '40px',
                  borderRadius: '15px',
                  marginTop: '20px',
                  textAlign: 'center',
                  '@media (max-width: 430px)': {
                    padding: '25px 15px'
                  },
                  '@media (max-width: 390px)': {
                    padding: '20px 12px'
                  },
                  '@media (max-width: 375px)': {
                    padding: '15px 10px'
                  }
                }}
              >
                <motion.h3 
                  style={{
                    color: 'white', 
                    marginBottom: '20px', 
                    fontSize: '24px',
                    '@media (max-width: 430px)': {
                      fontSize: '20px'
                    },
                    '@media (max-width: 390px)': {
                      fontSize: '18px'
                    },
                    '@media (max-width: 375px)': {
                      fontSize: '16px'
                    }
                  }}
                  variants={itemVariants}
                >
                  🎨 My Portfolio - Built with shadcn/ui
                </motion.h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginBottom: '30px',
                  '@media (max-width: 430px)': {
                    gridTemplateColumns: '1fr',
                    gap: '15px'
                  }
                }}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)',
                      '@media (max-width: 430px)': {
                        padding: '15px'
                      }
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px', fontSize: 'clamp(16px, 4vw, 18px)'}}>✨ Beautiful Buttons</h4>
                    <p style={{fontSize: 'clamp(13px, 3vw, 14px)'}}>shadcn/ui کے خوبصورت بٹنز</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)',
                      '@media (max-width: 430px)': {
                        padding: '15px'
                      }
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px', fontSize: 'clamp(16px, 4vw, 18px)'}}>🎯 Responsive Design</h4>
                    <p style={{fontSize: 'clamp(13px, 3vw, 14px)'}}>ہر سکرین سائز پر کامل ڈسپلے</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)',
                      '@media (max-width: 430px)': {
                        padding: '15px'
                      }
                    }}
                  >
                    <h4 style={{color: '#ffd700', marginBottom: '10px', fontSize: 'clamp(16px, 4vw, 18px)'}}>⚡ Fast Performance</h4>
                    <p style={{fontSize: 'clamp(13px, 3vw, 14px)'}}>تیز رفتار اور optimized</p>
                  </motion.div>
                </div>

                <motion.div 
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '25px',
                    borderRadius: '10px',
                    marginTop: '20px',
                    '@media (max-width: 430px)': {
                      padding: '20px 15px'
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 style={{color: '#ffd700', marginBottom: '15px', fontSize: 'clamp(16px, 4vw, 18px)'}}>🚀 shadcn/ui Features Used</h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: 'center'
                  }}>
                    {['Button Components', 'Card Layouts', 'Navigation', 'Typography'].map((feature, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        style={{
                          background: 'rgba(255,255,255,0.3)',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: 'clamp(12px, 2.5vw, 14px)',
                          '@media (max-width: 430px)': {
                            padding: '6px 12px',
                            fontSize: '11px'
                          }
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.p 
                  style={{
                    marginTop: '20px',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    lineHeight: '2.2',
                    opacity: '0.9',
                    wordSpacing: '0.5rem',
                    letterSpacing: '0.03em',
                    padding: '0 10px',
                    '@media (max-width: 430px)': {
                      fontSize: '13px',
                      lineHeight: '1.8',
                      wordSpacing: '0.25rem'
                    }
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  یہ portfolio shadcn/ui کے تمام components کو استعمال کرتی ہے اور دکھاتی ہے کہ کس طرح آپ professional UI بنا سکتے ہیں۔
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section 
        className="summary-section summary-card"
        variants={cardVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title urdu-heading"
            variants={itemVariants}
            style={{
              wordSpacing: '0.6rem',
              letterSpacing: '0.05em',
              '@media (max-width: 430px)': {
                fontSize: '1.5rem',
                wordSpacing: '0.3rem',
                letterSpacing: '0.03em',
                padding: '0 10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '1.4rem',
                wordSpacing: '0.25rem'
              },
              '@media (max-width: 375px)': {
                fontSize: '1.3rem',
                wordSpacing: '0.2rem'
              }
            }}
          >
            خلاصہ
          </motion.h2>
          <div className="summary-content2">
            <motion.p 
              className="urdu-text" 
              style={{
                color: '#fefefe', 
                fontSize: 'clamp(14px, 3vw, 16px)',
                lineHeight: '2.2',
                wordSpacing: '0.5rem',
                letterSpacing: '0.03em',
                padding: '0 10px',
                '@media (max-width: 430px)': {
                  fontSize: '13px',
                  lineHeight: '1.8',
                  wordSpacing: '0.25rem'
                }
              }}
              variants={itemVariants}
            >
              <strong>shadcn/ui</strong> ایک جدید اور طاقتور UI حل ہے جو آپ کو مکمل کنٹرول دیتا ہے۔ یہ Ant Design اور Material UI جیسی لائبریریوں کے مقابلے میں زیادہ لچکدار اور کارکردگی والا حل پیش کرتا ہے۔
            </motion.p>
            <motion.p 
              className="urdu-text" 
              style={{
                color: '#fefefe', 
                fontSize: 'clamp(14px, 3vw, 16px)',
                lineHeight: '2.2',
                wordSpacing: '0.5rem',
                letterSpacing: '0.03em',
                padding: '0 10px',
                '@media (max-width: 430px)': {
                  fontSize: '13px',
                  lineHeight: '1.8',
                  wordSpacing: '0.25rem'
                }
              }}
              variants={itemVariants}
            >
              اس گائیڈ میں آپ نے سیکھا کہ کس طرح React Vite ایپ میں shadcn/ui کو انسٹال کریں، کنفیگر کریں، اور استعمال کریں۔ اب آپ اپنی مرضی کے مطابق خوبصورت UI کمپوننٹس بنا سکتے ہیں۔
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        variants={itemVariants}
        style={{
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          padding: '40px 0',
          textAlign: 'center',
          marginTop: '50px',
          '@media (max-width: 768px)': {
            padding: '35px 0',
            marginTop: '40px'
          },
          '@media (max-width: 430px)': {
            padding: '30px 15px',
            marginTop: '30px'
          },
          '@media (max-width: 390px)': {
            padding: '25px 12px'
          },
          '@media (max-width: 375px)': {
            padding: '20px 10px'
          }
        }}
      >
        <div className="container">
          <motion.p 
            style={{ 
              marginBottom: '15px', 
              fontSize: 'clamp(13px, 3vw, 16px)',
              '@media (max-width: 430px)': {
                fontSize: '14px'
              },
              '@media (max-width: 390px)': {
                fontSize: '13px'
              },
              '@media (max-width: 375px)': {
                fontSize: '12px'
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            ✨ Built with React & shadcn/ui
          </motion.p>
          <motion.p 
            style={{ 
              fontSize: 'clamp(11px, 2.5vw, 14px)', 
              opacity: '0.8',
              '@media (max-width: 430px)': {
                fontSize: '12px'
              },
              '@media (max-width: 390px)': {
                fontSize: '11px'
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            © 2024 زوہیب - تمام حقوق محفوظ ہیں
          </motion.p>
        </div>
      </motion.footer>

      {/* Copy Notification */}
      <AnimatePresence>
        {copiedCode && (
          <motion.div 
            className="copy-notification"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            style={{
              fontSize: 'clamp(11px, 2.5vw, 13px)',
              padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 15px)',
              bottom: 'clamp(5px, 2vw, 10px)',
              right: 'clamp(5px, 2vw, 10px)',
              '@media (max-width: 430px)': {
                fontSize: '12px',
                padding: '8px 15px',
                bottom: '10px',
                right: '10px'
              },
              '@media (max-width: 390px)': {
                fontSize: '11px',
                padding: '6px 12px'
              }
            }}
          >
            ✓ {copiedCode}  کاپی ہو گیا ہے!
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default CssShadcn;