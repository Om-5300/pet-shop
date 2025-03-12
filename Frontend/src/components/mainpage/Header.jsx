import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        <img className="logo" src="/image/Utopianew.png" alt="Logo" />

        <nav className={isMenuOpen ? "active" : ""}>
          {["Foods", "Dogs", "Cats", "Fish", "Other Pets"].map((item) => (
            <a key={item} href="#">
              {item} <img src="/image/downarrow.jpg" alt="arrow" />
            </a>
          ))}
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
