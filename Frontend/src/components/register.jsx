import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ Import toast
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
      toast.error("Passwords do not match!"); // ✅ Show toast error
      return;
    }

    try {
      const details = { name, email, password };

      const response = await axios.post("http://localhost:5000/register", details, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.msg || "Registration successful!"); // ✅ Success toast
      setTimeout(() => navigate("/login"), 1000); // ✅ Delay navigation to allow toast to be seen

    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.msg || "Something went wrong."); // ✅ Error toast
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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
