import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./bestseller.css";

const Seller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product") // Fetch all products
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set all products
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  

  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Explore Our Products</h1>
        <Link to="/products" className="shop">
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
        {products.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="product-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>£{item.price.discounted}</p>
              <Link to={`/product/${item._id}`} className="view-details">
                View Details
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Seller;
