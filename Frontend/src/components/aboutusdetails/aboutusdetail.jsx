import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutusdetail.css";

const AboutUsDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      {/* Back Button */}
      {/* Main Image Under Header */}
      <div className="main-image-container">
        <img
          src="/image/aboutusdetailsmain.webp"
          alt="Main About Us"
          className="main-image"
        />
      </div>
      {/* OUR STORY */}
      <section className="section story">
        <div className="content">
          <h2>OUR STORY</h2>
          <p>
            Our journey started with a deep love for animals and a vision to
            make pet care effortless for owners. What began as a small idea has
            grown into a trusted brand, serving pet lovers worldwide. We believe
            pets are family and deserve the best. Through our dedication to
            quality and innovation, we continue to provide exceptional products
            and support, making life better for both pets and their owners.
          </p>
          <button className="explore-btn">EXPLORE NOW</button>
        </div>
        <div className="image">
          <img src="/image/aboutusdetails2.webp" alt="Our Story" />
        </div>
      </section>
      {/* OUR MISSION */}
      <section className="section mission">
        <div className="content">
          <h2>OUR MISSION</h2>
          <p>
            At Utopia Pet Shop, we are committed to enhancing the lives of pets
            and their owners. We provide high-quality pet supplies, from
            nutritious food to engaging toys and cozy bedding, ensuring your
            pet’s happiness and well-being. Our mission is to create a trusted
            space where pet parents find everything they need while promoting
            responsible pet care through expert advice and education. Your pet’s
            health, comfort, and joy are our top priorities.
          </p>
          <button className="explore-btn">EXPLORE NOW</button>
        </div>
        <div className="image">
          <img src="/image/aboutusdetails4.webp" alt="Our Mission" />
        </div>
      </section>



      {/* OUR APPROACH */}
      <section className="section approach">
        <div className="content">
          <h2>OUR APPROACH</h2>
          <p>
            Our approach is simple: Quality, Care, and Innovation. We carefully
            select premium products, ensuring safety and sustainability. Every
            pet is unique, so we offer tailored solutions for different needs.
            Beyond selling products, we educate pet owners, build a community,
            and prioritize ethical sourcing. Your pet’s happiness is our
            ultimate goal.
          </p>
          <button className="explore-btn">EXPLORE NOW</button>
        </div>
        <div className="image">
          <img src="/image/aboutusdetails3.webp" alt="Our Approach" />
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetails;
