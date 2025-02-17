import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="mainheader">
        <img src="image/menuicon.svg" id="menubar" alt="menu" />

        <img className="logo" src="image/Utopianew.png" alt="Logo" />

        <nav>
          {["Foods", "Dogs", "Cats", "Fish", "Other Pets"].map((item) => (
            <a key={item} href="#">
              {item} <img src="image/downarrow.jpg" alt="arrow" />
            </a>
          ))}
        </nav>

        <div className="social">
          <a href="#">
            <img src="image/contacticon.png" alt="contact" />
          </a>

          {isAuthenticated ? (
            <button onClick={handleLogout} className="Logout">
              Logout
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
