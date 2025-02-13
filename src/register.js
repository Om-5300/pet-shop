import { useState } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Yorkshire Pet Shop</h2>
        <h3>Register</h3>
        <p>Create an account to continue</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fullname"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="confirmpassword"
          />
          <button disabled={!isFormValid}>Sign Up</button>
        </div>
        <a href="login.js" className="login">Login</a>
      </div>
    </div>
  );
};

export default Register;
