import React from 'react';
import Header from './components/Header.js';
import MainImage from './components/Mainimage.js';
import DogFoodBrands from './components/DogFoodBrands.js';
import Information from './components/information.js';
import Seller from './components/bestseller.js';
import AboutUs from './components/AboutUs.js';
import Customer from './components/Customer.js';
import MainProduct from './components/mainproduct.js';
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
    </>
  );
};

export default App;