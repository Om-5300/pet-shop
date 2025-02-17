import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const details = { name, email, password };

      const response = await axios.post("http://localhost:5000/register", details, {
          headers: { "Content-Type": "application/json" }
      });

      // ✅ Access response message from backend
      alert(response.data.msg);  // Shows "Success" from backend
      navigate("/login");

  } catch (error) {
      // ✅ If error occurs, check response message
      if (error.response && error.response.data) {
          alert(error.response.data.msg);  // Example: "Email already registered"
      } else {
          alert("Something went wrong. Please try again.");
      }
  }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Yorkshire Pet Shop</h2>
        <h3>Register</h3>
        <p>Create an account to continue</p>
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleRegister} disabled={!isFormValid}>
            Sign Up
          </button>
        </div>
        <a href="/login" className="login">
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
