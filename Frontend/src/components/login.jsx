import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    try{
      const details = { email, password };

      const response = await axios.get("http://localhost:5000/register", details, {
        headers: { "Content-Type": "application/json" }
    }); 
    }
    catch(error){
      alert("Invalid email or password");
    }
    const user = existingUsers.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password. Please register if you don’t have an account.");
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
