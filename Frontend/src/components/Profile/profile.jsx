import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("Loading..."); // Default state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          console.log("Parsed User:", parsedUser); // Debugging
          setUserEmail(parsedUser?.email || "Guest");
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUserEmail("Guest");
        }
      } else {
        setUserEmail("Guest");
      }
    };

    setTimeout(fetchUserEmail, 100); // Ensure data is available before rendering
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profilecontainer">
      <header className="profileheader">
        <h1>Utopia Pet Shop</h1>
        <div className="profile-user-dropdown">
          <button className="profile-user-button" onClick={toggleDropdown}>
            {userEmail}
          </button>
          {isDropdownOpen && (
            <div className="profile-dropdown-menu">
              <a href="#profile" className="profile-dropdown-item">
                Profile
              </a>
              <button className="profile-dropdown-item" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </header>

      <nav className="profilenavbar">
        <a href="#shop">Shop</a>
        <a href="#orders">Orders</a>
      </nav>

      <main className="profile-main-content">
        <section className="profile-orders-section">
          <h2>Orders</h2>
          <p>No orders yet</p>
          <p>Go to store to place an order.</p>
        </section>

        <section className="profile-policies-section">
          <h2>Policies</h2>
          <ul>
            <li><a href="#return-policy">Return policy</a></li>
            <li><a href="#shipping-policy">Shipping policy</a></li>
            <li><a href="#privacy-policy">Privacy policy</a></li>
            <li><a href="#terms-of-service">Terms of service</a></li>
            <li><a href="#cancellation-policy">Cancellation policy</a></li>
          </ul>
        </section>

        <section className="profile-contact-section">
          <h2>Contact Information</h2>
          <p>Email: info@utopiapet.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </main>

      <footer className="profile-footer">
        <p>&copy; 2023 Yorkshire Pet Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
