import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./Exploreproduct.css";

const Seller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        const limitedProducts = data.flatMap((category) =>
          category.items.slice(0, 3) // Get only first 3 products from each category
        );
        setProducts(limitedProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Explore Our Products</h1>
        <Link to="/showallproducts" className="shop">
          <p>SHOP ALL</p>
          <img src="/image/rightarrownew.svg" alt="Arrow Right" />
        </Link>
      </div>

      <Swiper
        cssMode={true}
        navigation
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {products.length > 0 ? (
          products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-item">
                <img
                  src={item.images?.[0] || "/default-image.jpg"}
                  alt={item.title || "Product"}
                />
                <h2>{item.title || "No Title"}</h2>
                <p>₹{item.price?.discounted ?? "N/A"}</p>
                <Link to={`/product/${item.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </Swiper>
    </div>
  );
};

export default Seller;
