import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "";

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert("User already exists. Please log in.");
      navigate("/login");
      return;
    }

    existingUsers.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Yorkshire Pet Shop</h2>
        <h3>Register</h3>
        <p>Create an account to continue</p>
        <div className="input-container">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button onClick={handleRegister} disabled={!isFormValid}>Sign Up</button>
        </div>
        <a href="/login" className="login">Login</a>
      </div>
    </div>
  );
};

export default Register;
