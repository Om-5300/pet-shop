import React from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutus">
      <div className="aboutusdetails">
        <h1>About Us</h1>
        <p>
          At Utopia Pet Shop, we are passionate about providing the best
          products for your pets. Whether you have dogs, cats, fish, or small
          animals, our goal is to offer top-quality food, toys, accessories, and
          health care items. With years of experience in the pet industry, we
          prioritize customer satisfaction and pet well-being.
        </p>
        <button
          className="aboutusexplore"
          onClick={() => navigate("/about-us-details")} // Ensure path matches App.js
        >
          Explore Now
        </button>
        <div className="aboutusimg">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <img
              key={num}
              src={`image/aboutimg${num}.png`}
              className={`aboutimg aboutimg${num} ${
                index > 2 ? "hide-mobile" : ""
              }`}
              alt={`img${num}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
