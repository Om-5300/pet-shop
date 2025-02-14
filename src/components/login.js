import {useState} from "react";
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if both fields are filled
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Yorkshire Pet Shop</h2>
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
          <button disabled={!isFormValid}>Continue</button>
        </div>
        <a href="register.js" className="Register">Register</a>
      </div>
    </div>
  );
};

export default Login;
