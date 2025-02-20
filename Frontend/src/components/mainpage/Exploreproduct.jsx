import React from "react";
import "./bestseller.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Seller = () => {
  const products = [
    { id: 1, image: "image/dogitem1.svg", title: "Dog Food", price: "£19.99 GBP" },
    { id: 2, image: "image/dogitem2.svg", title: "Chew Toy", price: "£14.99 GBP" },
    { id: 3, image: "image/dogitem3.svg", title: "Dog Collar", price: "£9.99 GBP" },
    { id: 4, image: "image/dogitem4.svg", title: "Dog Bed", price: "£29.99 GBP" },
    { id: 5, image: "image/dogitem5.svg", title: "Dog Shampoo", price: "£12.99 GBP" },
    { id: 6, image: "image/catitem1.svg", title: "Cat Litter", price: "£10.99 GBP" },
    { id: 7, image: "image/catitem2.svg", title: "Cat Toy", price: "£8.99 GBP" },
    { id: 8, image: "image/catitem3.svg", title: "Cat Bed", price: "£24.99 GBP" },
    { id: 9, image: "image/catitem4.svg", title: "Cat Scratcher", price: "£19.99 GBP" },
    { id: 10, image: "image/fishitem1.svg", title: "Fish Tank", price: "£59.99 GBP" },
    { id: 11, image: "image/fishitem2.svg", title: "Fish Food", price: "£4.99 GBP" },
    { id: 12, image: "image/fishitem3.svg", title: "Aquarium Light", price: "£19.99 GBP" }
  ];

  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Explore Our Products</h1>
        <div className="shop">
          <p>SHOP ALL</p>
          <img src="image/rightarrownew.svg" alt="arrow" />
        </div>
      </div>

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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
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
  );
};

export default Seller;
