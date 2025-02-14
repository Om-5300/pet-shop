import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="mainheader">
        <nav>
          {['Foods', 'Dogs', 'Cats', 'Fish', 'Other Pets'].map((item) => (
            <a key={item}>{item} <img src="image/downarraow.svg" alt="arrow" /></a>
          ))}
        </nav>
        <img className="logo" src="image/Utopianew.png" alt="Logo" />
        <p className="contact">Contact Us</p>
        <div className="social">
          <a href="login.js"><img src="image/contacticon.svg" alt="contact" /></a>
          <a><img src="image/carticon.svg" alt="cart" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;