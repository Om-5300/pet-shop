import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/mainpage/Header.jsx";
import MainImage from "./components/mainpage/Mainimage.jsx";
import DogFoodBrands from "./components/mainpage/DogFoodBrands.jsx";
import Information from "./components/mainpage/information.jsx"; // Ensure correct case
import Seller from "./components/mainpage/bestseller.jsx"; // Ensure correct case
import AboutUs from "./components/mainpage/AboutUs.jsx";
import Customer from "./components/mainpage/Customer.jsx";
import MainProduct from "./components/mainpage/mainproduct.jsx";
import ExploreProduct from "./components/mainpage/Exploreproduct.jsx";
import Footer from "./components/mainpage/footer.jsx"; // Ensure correct case
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Profile from "./components/Profile/profile.jsx";
import ProfileDetail from "./components/Profile/profiledetail.jsx";
import AboutUsDetails from "./components/page/aboutusdetail.jsx";
import ProductDetail from "./components/page/productdetails.jsx"; // Import Product Details Page
import ShowAllProducts from "./components/page/showallproducts.jsx";

import "./App.css";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster


// ✅ Home Component with Correct Authentication Check
const Home = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false;

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

// ✅ About Us Page
const AboutUsDetailsPage = () => (
  <>
    <Header />
    <AboutUsDetails />
    <Footer />
  </>
);

const ProductDetailsPage = () => (
  <>
  <Header/>
  <ProductDetail/>
  <DogFoodBrands/>
  <AboutUs/>
  <Footer/>
  </>
)
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add Toaster here */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-detail" element={<ProfileDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us-details" element={<AboutUsDetailsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/showallproducts" element={<ShowAllProducts />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
