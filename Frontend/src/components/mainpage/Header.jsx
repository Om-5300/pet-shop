import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === true
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after clicking
  };
  return (
    <header className="header">
      <div className="mainheader">
        <img
          src="/image/menuicon.svg"
          id="menubar"
          alt="menu"
          onClick={toggleMenu}
        />

        <img className="logo" src="/image/Utopianew.png" alt="Logo" onClick={() => navigate("/")} />

        <nav className={isMenuOpen ? "active" : ""}>
          <button onClick={() => handleNavigation("/showallproducts")}>
            Dogs <img src="/image/downarrow.jpg" alt="arrow" />
          </button>
          <button onClick={() => handleNavigation("/showallproducts")}>
            Cats <img src="/image/downarrow.jpg" alt="arrow" />
          </button>
          <button onClick={() => handleNavigation("/showallproducts")}>
            Fish <img src="/image/downarrow.jpg" alt="arrow" />
          </button>
          <button onClick={() => handleNavigation("/showallproducts")}>
            Other Pets <img src="/image/downarrow.jpg" alt="arrow" />
          </button>
        </nav>

        <div className="social">
          <a href="#">
            <img src="/image/contacticon.png" alt="contact" />
          </a>

          {isAuthenticated ? (
            <button
              onClick={() => navigate("/profile")}
              className="profile-btn"
            >
              <img src="/image/profileicon.svg" alt="Profile" />
            </button>
          ) : (
            <Link to="/login">
              <img src="/image/loginicon.svg" alt="Login" />
            </Link>
          )}

          <button onClick={() => navigate("/cart")} className="cart-btn">
            <img src="/image/carticon.svg" alt="cart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
