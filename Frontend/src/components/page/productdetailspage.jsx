import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./productdetailspage.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get Product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`) // Fetch product by ID
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); // Set product data
      })
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);
  

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      {/* Left: Product Images */}
      <div className="product-left">
        <Swiper spaceBetween={10} slidesPerView={1}>
          {product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={product.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Product Info */}
      <div className="product-right">
        <h1>{product.title}</h1>
        <p className="price">
          <span className="discounted">£{product.price.discounted}</span>
          <span className="base">£{product.price.base}</span>
          <span className="save">Save {product.price.save}</span>
        </p>

        {/* Weight Selection */}
        <div className="weights">
          {product.weights.map((w, index) => (
            <button key={index}>{w}</button>
          ))}
        </div>

        <button className="add-to-cart">ADD TO BAG</button>

        {/* Product Details */}
        <div className="details">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>

        {/* Related Products */}
        <div className="related">
          <h3>Pair It With...</h3>
          <div className="related-items">
            {product.relatedProducts.map((p) => (
              <div key={p._id} className="related-item">
                <img src={p.image} alt={p.title} />
                <p>{p.title}</p>
                <p>£{p.price.discounted}</p>
                <button>Add to Bag</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
