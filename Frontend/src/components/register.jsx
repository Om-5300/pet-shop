import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./register.css";
import axios from "axios";

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
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      toast.success(response.data.msg || "Registration successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      const errMsg = error.response?.data?.msg || "Something went wrong.";
      toast.error(errMsg);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Utopia Pet Shop</h2>
        <h3>Register</h3>
        <p>Create an account to continue</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
