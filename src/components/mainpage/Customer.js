import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./Customer.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

const reviewsData = [
  {
    text: "We've been purchasing pet supplies from this store for years, and the quality is always excellent! Their customer service is friendly, and our furry friends love their products.",
    author: "Happy Tails Pet Supplies",
  },
  {
    text: "The variety of pet food and accessories available here is fantastic. I always find everything I need, and the staff is super knowledgeable about pet care!",
    author: "Furry Friends Pet Shop",
  },
  {
    text: "I love shopping here for my cats! Their toys and treats are of great quality, and the prices are very reasonable. Highly recommended!",
    author: "Whiskers & Paws Pet Mart",
  },
  {
    text: "The best pet shop in town! They always have fresh food, and their grooming services are top-notch. My dog comes back happy and looking great!",
    author: "Pet Paradise Store",
  },
  {
    text: "The customer service is exceptional. They helped me choose the right products for my new puppy, and their recommendations were spot on!",
    author: "Furry Haven Pet Supplies",
  },
  {
    text: "The grooming services here are amazing! My dog always gets the best care, and their products keep his coat shiny and healthy.",
    author: "Fluffy Paws Grooming Studio",
  },
];

const Customer = () => {
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
          {reviewsData.map((review, index) => (
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