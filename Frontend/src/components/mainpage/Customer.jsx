import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./Customer.css";

const Customer = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  return (
    <div className="customer">
      <div className="customermain">
        <img src="image/customermainstar.svg" alt="Main Star" />
        <h1>Over 300,000+ Happy Customers</h1>
        <p>Let’s Hear What Our Customers Have To Say</p>
      </div>
      <div className="customerframe">
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-slide">
                <div className="slide">
                  <p>{review.text}</p>
                </div>
                <div className="user">
                  <h3>{review.author}</h3>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="image/singlestar.svg"
                      alt="star"
                      className="star-img"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
