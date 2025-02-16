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
        <img
          src="image/menuicon.svg"
          id="menubar"
          onClick={toggleMenu}
          alt="menu"
        />

        <img className="logo" src="image/Utopianew.png" alt="Logo" />
        <nav className={isOpen ? 'active' : ''}>
          {['Foods', 'Dogs', 'Cats', 'Fish', 'Other Pets'].map((item) => (
            <a key={item} href="#">
              {item} <img src="image/downarrow.jpg" alt="arrow" />
            </a>
          ))}
        </nav>

        <div className="social">
          <a href="#">
            <img src="image/contacticon.png" alt="contact" />
          </a>
          <a href="login.js">
            <img src="image/loginicon.svg" alt="contact" />
          </a>
          <a href="#">
            <img src="image/carticon.svg" alt="cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;