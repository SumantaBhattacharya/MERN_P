import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'
    }}>
         <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center', margin: 0
      }}>Wellcome to Chai aur Code</h1>
         <button
          style={{padding: '12px 24px',fontSize: '1.1rem',fontWeight: '600',backgroundColor: isLoggedIn ? '#ef4444' : '#10b981',color: 'white',border: 'none',borderRadius: '8px',cursor: 'pointer',transition: 'all 0.3s ease',boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',':hover': {  transform: 'translateY(-2px)',  boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.4)'}}}
            onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 8px -1px rgba(0, 0, 0, 0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        }}
          onClick={()=>{
            setLoggedIn(!isLoggedIn)
          }}
         >Toggle login</button>
         <div>
          <h3>&& operator</h3>
          {isLoggedIn && <p>Welcome to Chai aur Code YT Video's</p>}
         </div>
         <div>
          <h3>Ternary operator</h3>
          {isLoggedIn ? <p>Welcome to Chai aur Code YT Video's</p> : <p>Please Login</p>}
         </div>
    </div>
  )
}

export default App
