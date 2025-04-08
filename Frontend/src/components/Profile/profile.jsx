import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("Loading...");
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [ordersError, setOrdersError] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
    } else {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email || "Guest"); // Fallback if email isn't in token
        
        // Set up axios authorization header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Fetch orders
        fetchOrders();
      } catch (error) {
        console.error("Invalid token:", error);
        navigate("/login", { replace: true });
      }
    }
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setOrdersError("No authentication token found. Please log in again.");
        navigate("/login");
        return;
      }

      const response = await axios.get("http://localhost:5000/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        setOrders(response.data);
        setOrdersLoading(false);
        setOrdersError(null);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      if (error.response?.status === 401) {
        setOrdersError("Your session has expired. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        setOrdersError(
          error.response?.data?.message ||
            "Failed to fetch orders. Please try again later."
        );
      }
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    navigate("/login", { replace: true });
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'failed':
        return 'status-failed';
      default:
        return '';
    }
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
                Profile
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
          <h1>Orders</h1>
          
          {ordersLoading ? (
            <div className="orders-loading">Loading your orders...</div>
          ) : ordersError ? (
            <div className="orders-error">{ordersError}</div>
          ) : orders.length === 0 ? (
            <div className="orderdetails">
              <h2>No orders yet</h2>
              <p>Go to store to place an order.</p>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-card">
                  <div className="order-header">
                    <div className="order-id">
                      <span>Order ID: </span>
                      <span className="id-value">{order._id}</span>
                    </div>
                    <div className="order-date">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                    <div className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <div className="item-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="item-details">
                          <h3>{item.title}</h3>
                          <p className="item-price">₹{item.price}</p>
                          <p className="item-quantity">Qty: {item.quantity}</p>
                          <p className="item-size">Size: {item.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-footer">
                    <div className="order-total">
                      <span>Total: </span>
                      <span className="total-value">₹{order.totalAmount}</span>
                    </div>
                    <div className="order-payment">
                      <span>Payment Method: </span>
                      <span className="payment-method">{order.paymentMethod}</span>
                      {order.upiId && (
                        <span className="upi-id">UPI ID: {order.upiId}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="profile-footer">
        <ul className="profile-footer-policies">
          <li><a href="#return-policy">Return policy</a></li>
          <li><a href="#shipping-policy">Shipping policy</a></li>
          <li><a href="#privacy-policy">Privacy policy</a></li>
          <li><a href="#terms-of-service">Terms of service</a></li>
          <li><a href="#cancellation-policy">Cancellation policy</a></li>
        </ul>
        <p>&copy; 2023 Utopia Pet Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
