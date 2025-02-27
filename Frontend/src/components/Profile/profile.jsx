import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("Loading...");
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="headerdetails">
          <h1>Utopia Pet Shop</h1>
          <nav className="profile-navbar">
            <a href="#shop">Shop</a>
            <a href="#orders">Orders</a>
          </nav>
        </div>
        <div className="profile-user-dropdown" ref={dropdownRef}>
          <button className="profile-user-button" onClick={toggleDropdown}>
            {userEmail}
          </button>
          {isDropdownOpen && (
            <div className="profile-dropdown-menu">
              <button
                onClick={() => navigate("/profiledetail")}
                className="profile-dropdown-item"
              >
                Profile{" "}
              </button>
              <button className="profile-dropdown-item" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="profile-main-content">
        <section className="profile-orders-section">
          <h1>Order</h1>
          <div className="orderdetails">
            <h2>No orders yet</h2>
            <p>Go to store to place an order.</p>
          </div>
        </section>
      </main>

      <footer className="profile-footer">
        <ul className="profile-footer-policies">
          <li>
            <a href="#return-policy">Return policy</a>
          </li>
          <li>
            <a href="#shipping-policy">Shipping policy</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy policy</a>
          </li>
          <li>
            <a href="#terms-of-service">Terms of service</a>
          </li>
          <li>
            <a href="#cancellation-policy">Cancellation policy</a>
          </li>
        </ul>
        <p>&copy; 2023 Utopia Pet Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
