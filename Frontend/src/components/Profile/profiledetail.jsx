import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./profiledetail.css";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserEmail(parsedUser?.email || "Guest");
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUserEmail("Guest");
        }
      } else {
        setUserEmail("Guest");
      }
    }
  }, [navigate]);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Utopia Pet Shop</h1>
        <nav className="profile-navbar">
          <a href="#shop">Shop</a>
          <a href="#orders">Orders</a>
        </nav>
      </header>

      <main className="profile-content">
        <h2>Profile</h2>
        <div className="profile-card">
          <p><strong>Name</strong> <span className="edit-icon">✎</span></p>
          <p><strong>Email</strong><br />{userEmail}</p>
        </div>

        <div className="address-section">
          <h3>Addresses <span className="add-address">+ Add</span></h3>
          <div className="no-address">No addresses added</div>
        </div>
      </main>

      <footer className="profile-footer">
        <ul>
          <li><a href="#refund-policy">Refund policy</a></li>
          <li><a href="#shipping-policy">Shipping policy</a></li>
          <li><a href="#privacy-policy">Privacy policy</a></li>
          <li><a href="#terms-of-service">Terms of service</a></li>
          <li><a href="#cancellation-policy">Cancellation policy</a></li>
          <li><a href="#contact-information">Contact information</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Profile;
