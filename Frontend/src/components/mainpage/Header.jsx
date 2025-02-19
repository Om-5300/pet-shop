import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ State for menu toggle
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // ✅ Toggle menu open/close
  };

  return (
    <header className="header">
      <div className="mainheader">
        {/* Menu Icon (Clickable for Mobile) */}
        <img
          src="image/menuicon.svg"
          id="menubar"
          alt="menu"
          onClick={toggleMenu}
        />

        {/* Logo */}
        <img className="logo" src="image/Utopianew.png" alt="Logo" />

        {/* Navigation Menu (Including Logout for Mobile Only) */}
        <nav className={isMenuOpen ? "active" : ""}>
          {["Foods", "Dogs", "Cats", "Fish", "Other Pets"].map((item) => (
            <a key={item} href="#">
              {item} <img src="image/downarrow.jpg" alt="arrow" />
            </a>
          ))}
        </nav>

        {/* Social & Auth Icons (Desktop & Tablet) */}
        <div className="social">
          <a href="#">
            <img src="image/contacticon.png" alt="contact" />
          </a>

          {/* Show Logout in Desktop & Tablet Only */}
          {isAuthenticated ? (
            <button onClick={handleLogout}>
              <Link to="/logout" className="logout">
                <img src="image/logout.png" alt="logout" />
              </Link>{" "}
            </button>
          ) : (
            <Link to="/login">
              <img src="image/loginicon.svg" alt="Login" />
            </Link>
          )}

          <a href="#">
            <img src="image/carticon.svg" alt="cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
