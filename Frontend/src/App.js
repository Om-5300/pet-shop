import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/scrolltotop";
import MainImage from "./components/mainpage/Mainimage";
import DogFoodBrands from "./components/mainpage/DogFoodBrands";
import Information from "./components/mainpage/information";
import Seller from "./components/mainpage/bestseller";
import AboutUs from "./components/mainpage/AboutUs";
import Customer from "./components/mainpage/Customer";
import MainProduct from "./components/mainpage/mainproduct";
import ExploreProduct from "./components/mainpage/Exploreproduct";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/Profile/profile";
import ProfileDetail from "./components/Profile/profiledetail";
import AboutUsDetails from "./components/page/aboutusdetail";
import ProductDetail from "./components/page/productdetails";
import ShowAllProducts from "./components/page/showallproducts";
import Cart from "./components/page/cart";
import "./App.css";
import { Toaster } from "react-hot-toast";

// ✅ Home Component
const Home = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false;

  return isAuthenticated ? (
    <>
      <MainImage />
      <DogFoodBrands />
      <Information />
      <Seller />
      <AboutUs />
      <Customer />
      <MainProduct />
      <ExploreProduct />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

// ✅ Product Details Page
const ProductDetailsPage = () => (
  <>
    <ProductDetail />
    <DogFoodBrands />
  </>
);

// ✅ About Us Page
const AboutUsDetailsPage = () => <AboutUsDetails />;

// ✅ App Component
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <ScrollToTop />
        <Layout> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-detail" element={<ProfileDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us-details" element={<AboutUsDetailsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/showallproducts" element={<ShowAllProducts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
