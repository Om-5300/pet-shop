import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/mainpage/Header.jsx";
import MainImage from "./components/mainpage/Mainimage.jsx";
import DogFoodBrands from "./components/mainpage/DogFoodBrands.jsx";
import Information from "./components/mainpage/information.jsx";
import Seller from "./components/mainpage/bestseller.jsx";
import AboutUs from "./components/mainpage/AboutUs.jsx";
import Customer from "./components/mainpage/Customer.jsx";
import MainProduct from "./components/mainpage/mainproduct.jsx";
import ExploreProduct from "./components/mainpage/Exploreproduct.jsx";
import Footer from "./components/mainpage/footer.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import "./App.css";
import Profile from "./components/Profile/profile.jsx";
const Home = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? (
    <>
      <Header />
      <MainImage />
      <DogFoodBrands />
      <Information />
      <Seller />
      <AboutUs />
      <Customer />
      <MainProduct />
      <ExploreProduct />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
