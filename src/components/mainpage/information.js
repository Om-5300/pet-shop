import React from 'react';
import './information.css';

const Information = () => {
  return (
    <div className="information">
      <div className="leftinformation">
        <h1>Your Trusted Partner for Pet Care</h1>
        <p>
          We provide high-quality pet products and services to ensure your furry, feathered, and finned friends live happy and healthy lives. From nutritious food to cozy accessories, we've got everything your pet needs!
        </p>
      </div>
      <div className="rightinformation">
        <div className="right1">
          <img src="image/infovector1.svg" alt="Nutritious Pet Food" />
          <h3>Nutritious Pet Food</h3>
          <p>Choose from a variety of high-quality food options to keep your pets healthy and energetic.</p>
        </div>
        <div className="right2">
          <img src="image/infovector2.svg" alt="Dog Essentials" />
          <h3>Dog Essentials</h3>
          <p>Find everything from chew toys to comfortable beds and grooming supplies for your beloved dogs.</p>
        </div>
        <div className="right3">
          <img src="image/infovector3.svg" alt="Cat Accessories" />
          <h3>Cat Accessories</h3>
          <p>Scratching posts, litter boxes, and premium cat food to keep your feline friend purring with joy.</p>
        </div>
        <div className="right4">
          <img src="image/infovector4.svg" alt="Fish & Aquarium Care" />
          <h3>Fish & Aquarium Care</h3>
          <p>Explore our collection of fish tanks, filters, and premium fish food to maintain a vibrant aquatic environment.</p>
        </div>
      </div>
    </div>
  );
};

export default Information;