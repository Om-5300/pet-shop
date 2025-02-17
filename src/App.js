import React from 'react';
import Header from './components/mainpage/Header.js';
import MainImage from './components/mainpage/Mainimage.js';
import DogFoodBrands from './components/mainpage/DogFoodBrands.js';
import Information from './components/mainpage/information.js';
import Seller from './components/mainpage/bestseller.js';
import AboutUs from './components/mainpage/AboutUs.js';
import Customer from './components/mainpage/Customer.js';
import MainProduct from './components/mainpage/mainproduct.js';
import ExploreProduct from './components/mainpage/Exploreproduct.js';
import Footer from './components/mainpage/footer.js';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <MainImage />
      <DogFoodBrands />
      <Information />
      <Seller />
      <AboutUs />
      <Customer />
      <MainProduct/>
      <ExploreProduct/>
      <Footer/>
    </>
    
  );
};

export default App;