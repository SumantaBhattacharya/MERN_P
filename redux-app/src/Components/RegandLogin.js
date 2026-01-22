import React, { useState, useEffect } from 'react';

const RegandLogin = () => {
  const [hoverReg, setHoverReg] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [activeTab, setActiveTab] = useState('register'); // For mobile toggle

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main 
      aria-label="Registration and Login page"
      style={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#282c34',
        color: 'white',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Mobile Toggle for Register/Login */}
      {!isDesktop && (
        <div 
          role="tablist" 
          aria-label="Authentication type"
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '400px',
            marginBottom: '30px',
            borderBottom: '1px solid #4b5563'
          }}
        >
          <button
            role="tab"
            aria-selected={activeTab === 'register'}
            aria-controls="register-panel"
            id="register-tab"
            onClick={() => setActiveTab('register')}
            style={{
              flex: 1,
              padding: '16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'register' ? '2px solid #60a5fa' : 'none',
              color: activeTab === 'register' ? '#60a5fa' : '#9ca3af',
              fontSize: '1rem',
              fontWeight: activeTab === 'register' ? '600' : '400',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            Register
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'login'}
            aria-controls="login-panel"
            id="login-tab"
            onClick={() => setActiveTab('login')}
            style={{
              flex: 1,
              padding: '16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'login' ? '2px solid #60a5fa' : 'none',
              color: activeTab === 'login' ? '#60a5fa' : '#9ca3af',
              fontSize: '1rem',
              fontWeight: activeTab === 'login' ? '600' : '400',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Register Section */}
      {(isDesktop || activeTab === 'register') && (
        <section 
          role="tabpanel"
          id="register-panel"
          aria-labelledby="register-tab"
          tabIndex={0}
          style={{
            width: isDesktop ? '50%' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px', padding: '0 30px' }}>
            <header>
              {/* ✅ Correct: h1 for main page heading */}
              <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#fff' }}>
                Welcome to{' '}
                <span style={{ color: '#6B7280', fontWeight: 600 }}>Scatch</span>
              </h1>
              {/* ✅ Correct: h2 for section heading */}
              <h2
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '25px',
                  color: '#6B7280',
                }}
              >
                Create your account
              </h2>
            </header>

            <form 
              aria-label="Registration form"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle registration
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="fullName"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  aria-required="true"
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-required="true"
                  autoComplete="email"
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label 
                  htmlFor="password"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  aria-required="true"
                  autoComplete="new-password"
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                aria-label="Create my account"
                onMouseEnter={() => setHoverReg(true)}
                onMouseLeave={() => setHoverReg(false)}
                onFocus={() => setHoverReg(true)}
                onBlur={() => setHoverReg(false)}
                style={{
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  width: isDesktop ? 'auto' : '100%',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    left: 0,
                    bottom: hoverReg ? '0' : '-100%',
                    borderRadius: hoverReg ? '0%' : '50%',
                    transition: 'all ease 0.4s',
                    zIndex: 9,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'relative',
                    zIndex: 11,
                    color: hoverReg ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Create My Account
                </span>
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Login Section */}
      {(isDesktop || activeTab === 'login') && (
        <section 
          role="tabpanel"
          id="login-panel"
          aria-labelledby="login-tab"
          tabIndex={0}
          style={{
            width: isDesktop ? '50%' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            boxSizing: 'border-box',
            borderLeft: isDesktop ? '1px solid #4b5563' : 'none',
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px', padding: '0 30px' }}>
            <header>
              {/* ✅ Correct: h2 for section heading */}
              <h2
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  color: '#6B7280',
                }}
              >
                Login to your account
              </h2>
            </header>

            <form 
              aria-label="Login form"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle login
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="loginEmail"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Email Address
                </label>
                <input
                  id="loginEmail"
                  name="loginEmail"
                  type="email"
                  aria-required="true"
                  autoComplete="email"
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label 
                  htmlFor="loginPassword"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Password
                </label>
                <input
                  id="loginPassword"
                  name="loginPassword"
                  type="password"
                  aria-required="true"
                  autoComplete="current-password"
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                aria-label="Login to your account"
                onMouseEnter={() => setHoverLogin(true)}
                onMouseLeave={() => setHoverLogin(false)}
                onFocus={() => setHoverLogin(true)}
                onBlur={() => setHoverLogin(false)}
                style={{
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  width: isDesktop ? 'auto' : '100%',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    left: 0,
                    bottom: hoverLogin ? '0' : '-100%',
                    borderRadius: hoverLogin ? '0%' : '50%',
                    transition: 'all ease 0.4s',
                    zIndex: 9,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'relative',
                    zIndex: 11,
                    color: hoverLogin ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Login
                </span>
              </button>

              {/* Accessibility: Forgot password link */}
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a
                  href="/forgot-password"
                  style={{
                    color: '#60a5fa',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline'
                    }
                  }}
                  aria-label="Forgot password? Reset it here"
                >
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default RegandLogin;