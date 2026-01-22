import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  const mobileLinkStyle = {
    fontSize: "15vw",
    textTransform: "uppercase",
    cursor: "pointer",
    margin: "10px 0",
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  return (
    <>
      <style>{`
        .nav-link-item {
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 16px;
          text-transform: capitalize;
          position: relative;
          transition: all ease 0.3s;
          overflow: hidden;
          display: inline-block;
          z-index: 10;
        }

        /* Fixed: targets the Link component specifically */
        .nav-link-item .link-text {
          text-decoration: none;
          color: white;
          position: relative;
          z-index: 11;
          transition: color 0.3s ease;
        }

        .nav-link-item::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: white;
          left: 0;
          bottom: -100%;
          border-radius: 50%;
          transition: all ease 0.4s;
          z-index: 9;
        }

        .nav-link-item:hover::after {
          bottom: 0;
          border-radius: 0;
        }

        .nav-link-item:hover .link-text {
          color: black;
        }

        @media (max-width: 768px) {
          .nav-part2 { display: none; }
          .menu-btn { display: block !important; }
          .logo-text { font-size: 26px !important; }
        }
      `}</style>

      {/* Fullscreen Mobile Menu */}
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          backgroundColor: "#EFEAE3",
          zIndex: 999,
          top: isMenuOpen ? "0" : "-100%",
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 0.8s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        {/* Mobile Links matching your Routes */}
        <Link to="/" onClick={toggleMenu} style={mobileLinkStyle}>Home</Link>
        <Link to="/cart" onClick={toggleMenu} style={mobileLinkStyle}>Cart</Link>
      </div>

      {/* Navbar */}
      <nav
        style={{width: "100%", padding: "20px 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 1000, transition: "all 0.3s ease",
          backgroundColor: isMenuOpen ? "transparent" : "#282c34",
          borderBottom: isMenuOpen ? "none" : "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* TEXT LOGO */}
        <Link
          to="/"
          className="logo-text"
          style={{fontSize: "32px", fontWeight: "700", letterSpacing: "1px", margin: 0, cursor: "pointer", zIndex: 1001, textDecoration: "none",
            color: isMenuOpen ? "black" : "white",
          }}
        >
          Scatch
        </Link>

        {/* Mobile Menu Button */}
        <h3
          className="menu-btn"
          onClick={toggleMenu}
          style={{display: "none", padding: "8px 25px", borderRadius: "50px", fontWeight: "400", fontSize: "16px", cursor: "pointer", margin: 0, zIndex: 1001,
            border: isMenuOpen ? "1px solid rgba(0,0,0,0.5)" : "1px solid rgba(255,255,255,0.5)",
            color: isMenuOpen ? "black" : "white",
          }}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </h3>

        {/* Desktop Links */}
        <div className="nav-part2">
          <ul style={{ display: "flex", listStyle: "none", gap: "15px", margin: 0, padding: 0 }}>
            <li className="nav-link-item">
              <Link to="/" className="link-text">Home</Link>
            </li>
            <li className="nav-link-item">
              <Link to="/cart" className="link-text">Cart</Link>
            </li>
            <li className="nav-link-item"
                id="cart-items"
                tabIndex={-1}
                // adds the programatical navigation
            >
              <span className="link-text" style={{ cursor: 'default' }}>CART ITEMS: 0</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;