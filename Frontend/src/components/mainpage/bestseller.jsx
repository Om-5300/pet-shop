import React from "react";
import "./bestseller.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Seller = () => {
  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Our Bestsellers</h1>
        <div className="shop">
          <p>SHOP ALL</p>
          <img src="image/rightarrownew.svg" alt="arrow" />
        </div>
      </div>

      {/* For Dogs Section with Pagination & Navigation */}
      <div className="fordog">
        <h1>For Dogs</h1>
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".dog-swiper-next",
            prevEl: ".dog-swiper-prev",
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <div className="dogitem">
                <img src={`image/dogitem${num}.svg`} alt={`dogitem${num}`} />
                <h2>Product Title {num}</h2>
                <p>£19.99 GBP</p>
                <a href="#">View Details</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="dog-swiper-prev swiper-button-prev"></div>
        <div className="dog-swiper-next swiper-button-next"></div>
      </div>

      {/* For Cats Section */}
      <div className="forcat">
        <h1>For Cats</h1>
        <div className="catitem">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className={`catitem${num}`}>
              <img src={`image/catitem${num}.svg`} alt={`catitem${num}`} />
              <h2>Product Title {num}</h2>
              <p>£19.99 GBP</p>
              <a href="#">View Details</a>
            </div>
          ))}
        </div>
      </div>

      {/* For Fish Section */}
      <div className="forfish">
        <h1>For Fish</h1>
        <div className="fishitem">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className={`fishitem${num}`}>
              <img src={`image/fishitem${num}.svg`} alt={`fishitem${num}`} />
              <h2>Product Title {num}</h2>
              <p>£19.99 GBP</p>
              <a href="#">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;
