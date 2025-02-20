import React from 'react';
import './profile.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Yorkshire Pet Shop</h1>
      </header>

      <nav className="navbar">
        <a href="#shop">Shop</a>
        <a href="#orders">Orders</a>
      </nav>

      <main className="main-content">
        <section className="orders-section">
          <h2>Orders</h2>
          <p>No orders yet</p>
          <p>Go to store to place an order.</p>
        </section>

        <section className="policies-section">
          <h2>Policies</h2>
          <ul>
            <li><a href="#return-policy">Return policy</a></li>
            <li><a href="#shipping-policy">Shipping policy</a></li>
            <li><a href="#privacy-policy">Privacy policy</a></li>
            <li><a href="#terms-of-service">Terms of service</a></li>
            <li><a href="#cancellation-policy">Cancellation policy</a></li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Contact Information</h2>
          <p>Email: info@yorkshirepetshop.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Yorkshire Pet Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;