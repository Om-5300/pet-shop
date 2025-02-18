import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user details
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid email or password. Please register if you don’t have an account.");
      }

    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Utopia Pet Shop</h2>
        <h3>Log in</h3>
        <p>Enter your email and password to continue</p>
        <div className="input-container">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin} disabled={!email || !password}>Continue</button>
        </div>
        <Link to="/register" className="Register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
