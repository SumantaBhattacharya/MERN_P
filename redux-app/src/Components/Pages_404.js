import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  // 1. Track window width for responsiveness
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 640;

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      padding: '0 20px',
      backgroundColor: '#282C34',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      {/* Responsive Font Size for 404 */}
      <h1 style={{ fontSize: isMobile ? '64px' : '96px', 
        fontWeight: 'bold', 
        color: '#6b7280', 
        margin: 0,
        transition: 'font-size 0.3s' 
      }}>
        404
      </h1>
      
      <div style={{ height: '4px', width: '64px', borderRadius: '9999px', backgroundColor: '#6b7280', margin: '20px 0' }}></div>
      
      <p style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#fff', margin: 0 }}>
        Page Not Found
      </p>

      <p style={{ 
        fontSize: '14px',
        marginTop: '16px',
        color: '#6b7280',
        maxWidth: '448px',
        lineHeight: '1.5'
      }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Button Container - Stacks on Mobile */}
      <div 
      style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', // Stacks buttons vertically on mobile
        alignItems: 'center', 
        gap: '12px', 
        marginTop: '32px',
        width: isMobile ? '100%' : 'auto'
      }}>
        <Link
          to="/"
          style={{ 
            backgroundColor: '#1f2937', 
            padding: '12px 28px', 
            color: 'white', 
            borderRadius: '6px', 
            textDecoration: 'none',
            width: isMobile ? '100%' : 'auto', // Full width buttons on mobile
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          Return Home
        </Link>
        <Link
          to="/contact"
          style={{ 
            border: '1px solid #d1d5db', 
            padding: '12px 28px', 
            color: '#fff', 
            borderRadius: '6px', 
            textDecoration: 'none',
            width: isMobile ? '100%' : 'auto',
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default Page404;