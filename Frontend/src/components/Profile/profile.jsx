import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./profile.css";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (!token || !user) {
      navigate("/login", { replace: true });
    } else {
      setUserEmail(user.email);
      fetchProfileData();
    }
  }, [navigate]);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setUserData({
          name: response.data.name || "",
          phone: response.data.phone || "",
          address: response.data.address || ""
        });
        setFormData({
          name: response.data.name || "",
          phone: response.data.phone || "",
          address: response.data.address || ""
        });
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      if (error.response?.status === 401) {
        setError("Your session has expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else if (error.response?.status === 404) {
        setError("Profile not found. Please try again later.");
      } else {
        setError("Failed to load profile data. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        setUserData(formData);
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
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
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="headerdetails">
          <h1>Utopia Pet Shop</h1>
          <nav className="profile-navbar">
            
            <button 
              className="orders-button"
              onClick={() => navigate("/orders")}
            >
              Orders
            </button>
           
          </nav>
        </div>
        <div className="profile-user-dropdown" ref={dropdownRef}>
          <button className="profile-user-button" onClick={toggleDropdown}>
            {userEmail}
          </button>
          {isDropdownOpen && (
            <div className="profile-dropdown-menu">
              <button className="profile-dropdown-item" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="profile-main-content">
        <section className="profile-section">
          <h1>Your Profile</h1>
          
          {loading ? (
            <div className="profile-loading">Loading your profile data...</div>
          ) : error ? (
            <div className="profile-error">{error}</div>
          ) : (
            <div className="profile-details-container">
              {isEditing ? (
                <form className="profile-edit-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address (Optional)</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-primary">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setFormData(userData);
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-info-display">
                  <div className="profile-field">
                    <h3>Name</h3>
                    <p>{userData.name}</p>
                  </div>

                  <div className="profile-field">
                    <h3>Phone Number</h3>
                    <p>{userData.phone || <span className="empty-field">Not added yet</span>}</p>
                  </div>

                  <div className="profile-field">
                    <h3>Address</h3>
                    <p>{userData.address || <span className="empty-field">Not added yet</span>}</p>
                  </div>

                  <button
                    className="btn-primary edit-profile-btn"
                    onClick={() => {
                      setFormData(userData);
                      setIsEditing(true);
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
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
