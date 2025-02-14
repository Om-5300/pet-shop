import React from 'react';
import './bestseller.css';

const Seller = () => {
  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Our Bestsellers</h1>
        <a>SHOP ALL <img src="image/rightarrownew.svg" alt="arrow" /></a>
      </div>
      <div className="fordog">
        <h1>For Dogs</h1>
        <div className="dogitem">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className={`dogitem${num}`}>
              <img src={`image/dogitem${num}.svg`} alt={`dogitem${num}`} />
              <h2>Product Title {num}</h2>
              <p>£19.99 GBP</p>
              <a>View Details</a>
            </div>
          ))}
        </div>
      </div>
      <div className="forcat">
        <h1>For Cats</h1>
        <div className="catitem">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className={`catitem${num}`}>
              <img src={`image/catitem${num}.svg`} alt={`catitem${num}`} />
              <h2>Product Title {num}</h2>
              <p>£19.99 GBP</p>
              <a>View Details</a>
            </div>
          ))}
        </div>
      </div>
      <div className="forfish">
        <h1>For Fish</h1>
        <div className="fishitem">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className={`fishitem${num}`}>
              <img src={`image/fishitem${num}.svg`} alt={`fishitem${num}`} />
              <h2>Product Title {num}</h2>
              <p>£19.99 GBP</p>
              <a>View Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;