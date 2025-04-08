import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        // Store token and user info
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: response.data.user.email,
            id: response.data.user._id
          })
        );

        // Set default axios headers for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        toast.success("Login successful!", { duration: 3000 });
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Utopia Pet Shop</h2>
        <h3>Log in</h3>
        <p>Enter your email and password to continue</p>
        <div className="input-container">
          <input
            type="email"
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
          <button onClick={handleLogin} disabled={!email || !password || loading}>
            {loading ? "Logging in..." : "Continue"}
          </button>
        </div>
        <Link to="/register" className="Register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
