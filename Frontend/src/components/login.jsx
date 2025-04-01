import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast"; // ✅ Import toast
import { Link, useNavigate } from "react-router-dom";
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

      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user details

        toast.success("Login successful!", { duration: 3000 }); // ✅ Toast message

        setTimeout(() => navigate("/"), 1000); // ✅ Delay navigation to ensure toast is visible
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong. Please try again.");
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
