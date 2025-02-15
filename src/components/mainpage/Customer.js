import React, { useState } from 'react';
import './Customer.css';

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
  const [index, setIndex] = useState(0);
  const reviewsPerSlide = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + reviewsPerSlide < reviewsData.length ? prevIndex + reviewsPerSlide : 0));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - reviewsPerSlide >= 0 ? prevIndex - reviewsPerSlide : reviewsData.length - reviewsPerSlide));
  };

  return (
    <div className="customer">
      <div className="customermain">
        <img src="image/customermainstar.svg" alt="Main Star" />
        <h1>Over 300,000+ Happy Customers</h1>
        <p>Let’s Hear What Our Customers Have To Say</p>
      </div>
      <div className="customerframe">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div className="reviews-container">
          {reviewsData.slice(index, index + reviewsPerSlide).map((review, i) => (
            <div key={i} className="review-slide">
              <div className="slide">
                <p>{review.text}</p>
              </div>
              <div className="user">
                <h3>{review.author}</h3>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="image/singlestar.svg" alt="star" className="star-img" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Customer;
