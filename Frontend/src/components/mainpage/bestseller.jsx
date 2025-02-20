import React from "react";
import "./bestseller.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Seller = () => {
  const categories = [
    {
      title: "For Dogs",
      className: "fordog",
      items: [
        {
          id: 1,
          image: "image/dogitem1.svg",
          title: "Dog Food",
          price: "\u00a319.99 GBP",
        },
        {
          id: 2,
          image: "image/dogitem2.svg",
          title: "Chew Toy",
          price: "\u00a314.99 GBP",
        },
        {
          id: 3,
          image: "image/dogitem3.svg",
          title: "Dog Collar",
          price: "\u00a39.99 GBP",
        },
        {
          id: 4,
          image: "image/dogitem4.svg",
          title: "Dog Bed",
          price: "\u00a329.99 GBP",
        },
        {
          id: 5,
          image: "image/dogitem5.svg",
          title: "Dog Shampoo",
          price: "\u00a312.99 GBP",
        },
      ],
    },
    {
      title: "For Cats",
      className: "forcat",
      items: [
        {
          id: 1,
          image: "image/catitem1.svg",
          title: "Cat Litter",
          price: "\u00a310.99 GBP",
        },
        {
          id: 2,
          image: "image/catitem2.svg",
          title: "Cat Toy",
          price: "\u00a38.99 GBP",
        },
        {
          id: 3,
          image: "image/catitem3.svg",
          title: "Cat Bed",
          price: "\u00a324.99 GBP",
        },
        {
          id: 4,
          image: "image/catitem4.svg",
          title: "Cat Scratcher",
          price: "\u00a319.99 GBP",
        },
        {
          id: 5,
          image: "image/catitem5.svg",
          title: "Cat Treats",
          price: "\u00a35.99 GBP",
        },
      ],
    },
    {
      title: "For Fish",
      className: "forfish",
      items: [
        {
          id: 1,
          image: "image/fishitem1.svg",
          title: "Fish Tank",
          price: "\u00a359.99 GBP",
        },
        {
          id: 2,
          image: "image/fishitem2.svg",
          title: "Fish Food",
          price: "\u00a34.99 GBP",
        },
        {
          id: 3,
          image: "image/fishitem3.svg",
          title: "Aquarium Light",
          price: "\u00a319.99 GBP",
        },
        {
          id: 4,
          image: "image/fishitem4.svg",
          title: "Water Filter",
          price: "\u00a329.99 GBP",
        },
        {
          id: 5,
          image: "image/fishitem5.svg",
          title: "Fish Net",
          price: "\u00a36.99 GBP",
        },
      ],
    },
  ];

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
            {category.items.map((item) => (
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
      ))}
    </div>
  );
};

export default Seller;
