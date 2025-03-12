import React from 'react';
import './DogFoodBrands.css';

const DogFoodBrands = () => {
  return (
    <div className="dogfoodbrands">
      <h1>Dog Food Brands we Stock</h1>
      <div className="dogfoodbrandslogo">
        {[1, 2, 3, 4].map((num) => (
          <img key={num} src={`/image/brand${num}.svg`} alt={`dogbrand${num}`} />
        ))}
      </div>
    </div>
  );
};

export default DogFoodBrands;