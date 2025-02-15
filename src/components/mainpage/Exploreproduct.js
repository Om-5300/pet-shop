import React, { useState } from "react";
import "./Exploreproduct.css";

const productData = [
  { id: 1, image: "image/dogitem1.svg", title: "Product Title 1", price: "£19.99 GBP" },
  { id: 2, image: "image/dogitem2.svg", title: "Product Title 2", price: "£29.99 GBP" },
  { id: 3, image: "image/dogitem3.svg", title: "Product Title 3", price: "£39.99 GBP" },
  { id: 4, image: "image/dogitem4.svg", title: "Product Title 4", price: "£49.99 GBP" },
  { id: 5, image: "image/dogitem5.svg", title: "Product Title 5", price: "£59.99 GBP" },
  { id: 6, image: "image/dogitem5.svg", title: "Product Title 5", price: "£59.99 GBP" },
];

const ExploreProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= productData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? productData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="exploreproduct">
      <div className="exploreproductheading">
        <h1>Explore the Products</h1>
        <a href="#">SHOP ALL <img src="image/rightarrownew.svg" alt="arrow" /></a>
      </div>

      <div className="product-slider">
        <button className="slider-btn prev-btn" onClick={prevSlide}>&#8249;</button>

        <div className="product-container">
          {productData
            .slice(currentIndex, currentIndex + 3)
            .map((product, index) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <a href="#">View Details</a>
              </div>
            ))}
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default ExploreProduct;
