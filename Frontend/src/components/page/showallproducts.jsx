import React, { useState, useEffect } from "react";
import "./showallproducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ShowAllProducts = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="show-all-products">
      <h1 className="main-heading">All Products</h1>

      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <Swiper
            cssMode={true}
            navigation
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            slidesPerView="auto"
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              820: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {category.items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="product-card">
                  <img src={item.images[0]} alt={item.title} className="product-image" />
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">
                    <span className="discounted-price">{item.price.discounted}</span>{" "}
                    <span className="base-price">{item.price.base}</span>
                    <span className="save-price">Save {item.price.save}</span>
                  </p>
                  <button className="view-details">View Details</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default ShowAllProducts;
