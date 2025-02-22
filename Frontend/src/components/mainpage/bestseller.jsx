import React, { useState, useEffect } from "react";
import "./bestseller.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Seller = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bestsellers")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching bestsellers:", error));
  }, []);

  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Our Bestsellers</h1>
        <div className="shop">
          <p>SHOP ALL</p>
          <img src="image/rightarrownew.svg" alt="arrow" />
        </div>
      </div>

      {categories.map((category, index) => (
        <div key={index} className={category.className}>
          <h1>{category.title}</h1>
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
                <div className="product-item">
                  <img src={item.image} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <a href="#">View Details</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Seller;
