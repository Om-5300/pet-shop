import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/scrolltotop";
import MainImage from "./components/mainpage/Mainimage";
import DogFoodBrands from "./components/mainpage/DogFoodBrands";
import Information from "./components/mainpage/information";
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
import Orders from "./components/page/Orders";
import UPIPayment from "./components/page/payment";
import VeterinaryDoctors from "./components/page/VeterinaryDoctors";
import "./App.css";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
      <MainImage />
      <DogFoodBrands />
      <Information />
      <ExploreProduct />
      <AboutUs />
      <Customer />
      <MainProduct />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

const ProductDetailsPage = () => (
  <>
    <ProductDetail />
    <DogFoodBrands />
  </>
);

const AboutUsDetailsPage = () => <AboutUsDetails />;

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppContent = () => {
  const location = useLocation();
  const hideLayoutRoutes = ["/login", "/register"];

  return (
    <>
      <ScrollToTop />
      {hideLayoutRoutes.includes(location.pathname) ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-detail" element={<ProfileDetail />} />
            <Route path="/about-us-details" element={<AboutUsDetailsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/showallproducts" element={<ShowAllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <UPIPayment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctors"
              element={
                <ProtectedRoute>
                  <VeterinaryDoctors />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default App;
