import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="mainheader">
        {/* Menu Icon for Mobile */}
        <img
          src="image/menuicon.svg"
          id="menubar"
          onClick={toggleMenu}
          alt="menu"
        />

        {/* Navigation Menu */}
        <nav className={isOpen ? 'active' : ''}>
          {['Foods', 'Dogs', 'Cats', 'Fish', 'Other Pets'].map((item) => (
            <a key={item}>
              {item} <img src="image/downarraow.svg" alt="arrow" />
            </a>
          ))}
        </nav>

        {/* Logo */}
        <img className="logo" src="image/Utopianew.png" alt="Logo" />

        {/* Contact Us */}
        <p className="contact">Contact Us</p>

        {/* Social Icons */}
        <div className="social">
          <a href="login.js">
            <img src="image/contacticon.svg" alt="contact" />
          </a>
          <a>
            <img src="image/carticon.svg" alt="cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;