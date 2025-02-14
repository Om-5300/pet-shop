import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="mainheader">
        <nav>
          {['Foods', 'Dogs', 'Cats', 'Fish', 'Other Pets'].map((item) => (
            <a key={item}>{item} <img src="image/downarraow.svg" alt="arrow" /></a>
          ))}
        </nav>
        <img className="logo" src="image/Utopianew.png" alt="Logo" />
        <p className="contact">Contact Us</p>
        <div class="social">
          {/* <a><img src="image/searchicon.svg" alt="search"/></a> */}
          <a href="login.js"><img src="image/contacticon.svg" alt="contact" /></a>
          <a><img src="image/carticon.svg" alt="cart" /></a>
        </div>
      </div>
    </header>
  );
};

const MainImage = () => {
  return (
    <div className="mainimage">
      <h1>Discover a world of delicious options for your furry friends at our pet shop</h1>
      <p>From premium pet food to tasty treats, we've got everything your pets need to stay happy and healthy. Visit us today and treat your beloved companions to the best!</p>
      <div className="mainimagebutton">
      </div>
    </div>
  );
};

const DogFoodBrands = () => {
  return (
    <div className="dogfoodbrands">
      <h1>Dog Food Brands we Stock</h1>
      <div className="dogfoodbrandslogo">
        {[1, 2, 3, 4].map((num) => (
          <img key={num} src={`image/brand${num}.svg`} className={`brand${num}`} alt={`dogbrand${num}`} />
        ))}
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <div className="information">
      <div className="leftinformation">
        <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros tortor, semper nec sodales at, ullamcorper ut mi. In accumsan arcu ut semper porttitor. Etiam ac purus velit.</p>
        <div className="leftbutton">
          <h2>LOREM IPSUM</h2>
        </div>
      </div>
      <div className="rightinformation">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`right${num}`}>
            <img src={`image/infovector${num}.svg`} alt={`info ${num}`} />
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Seller = () => {
  return (
    <div className="seller">
      <div className="sellerheading">
        <h1>Our Bestsellers</h1>
        <a>SHOP ALL <img src="image/rightarrownew.svg" alt="arrow" /></a>
      </div>
      <div className="fordog">
        <h1>For Dogs</h1>
        <div className="dogitem">
          <div className="dogitem1">
            <img src={"image/dogitem1.svg"} />
            <h2>Winter Ward Dog Jacket</h2>
            <p>£19.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="dogitem2">
            <img src="image/dogitem2.svg" />
            <h2>Pet Comfortable Warm Bed - Brown</h2>
            <p>£9.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="dogitem3">
            <img src="image/dogitem3.svg" />
            <h2>Tactical Military Style Dog Harness</h2>
            <p>£34.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="dogitem4">
            <img src="image/dogitem4.svg" />
            <h2>Snoozzzeee Dog fleece Donut Pet Bed</h2>
            <p>£29.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="dogitem5">
            <img src="image/dogitem5.svg" />
            <h2>Dog Seat Belt - Car seat belt harness</h2>
            <p>£5.99 GBP</p>
            <a>View Details</a>
          </div>
        </div>
      </div>
      <div className="forcat">
        <h1>For Cats</h1>
        <div className="catitem">
          <div className="catitem1">
            <img src="image/catitem1.svg" />
            <h2>Super Cat Bed Warm Sleeping Cat</h2>
            <p>£19.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="catitem2">
            <img src="image/catitem2.svg" />
            <h2>Colourful Cat Collar Necklass - Purple</h2>
            <p>£9.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="catitem3">
            <img src="image/catitem3.svg" />
            <h2>Pennine Pillow Pad - Light Blue</h2>
            <p>£34.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="catitem4">
            <img src="image/catitem4.svg" />
            <h2>FunPets Adjustable Cat Collar With Bell - Purple</h2>
            <p>£29.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="catitem5">
            <img src="image/catitem5.svg" />
            <h2>Cat Scratchers Ball</h2>
            <p>£5.99 GBP</p>
            <a>View Details</a>
          </div>
        </div>
      </div>
      <div className="forfish">
        <h1>For Fish</h1>
        <div className="fishitem">
          <div className="fishitem1">
            <img src="image/fishitem1.svg" />
            <h2>Creative Rockery, Fish Tank Ornament</h2>
            <p>£19.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="fishitem2">
            <img src="image/fishitem2.svg" />
            <h2>Skull Decoration - Fish Tank</h2>
            <p>£9.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="fishitem3">
            <img src="image/fishitem3.svg" />
            <h2>Resin aquarium Decoration</h2>
            <p>£34.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="fishitem4">
            <img src="image/fishitem4.svg" />
            <h2>3 Pcs Artificial Aquarium Plants</h2>
            <p>£29.99 GBP</p>
            <a>View Details</a>
          </div>
          <div className="fishitem5">
            <img src="image/fishitem5.svg" />
            <h2>Artificial Bridge</h2>
            <p>£5.99 GBP</p>
            <a>View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutusdetails">
        <h1>About Us</h1>
        <p>At Utopia Pet Shop, we are passionate about providing the best products for your pets. Whether you have dogs, cats, fish, or small animals, our goal is to offer top-quality food, toys, accessories, and health care items. With years of experience in the pet industry, we prioritize customer satisfaction and pet well-being.
        </p>
        <div className="aboutusimg">
          <img src="image/aboutimg1.png" className="aboutimg1" alt="img1" />
          <img src="image/aboutimg2.png" className="aboutimg2" alt="img2" />
          <img src="image/aboutimg3.png" className="aboutimg3" alt="img3" />
          <img src="image/aboutimg4.png" className="aboutimg4" alt="img4" />
          <img src="image/aboutimg5.png" className="aboutimg5" alt="img5" />
        </div>
      </div>
    </div>
  );
};

const Customer = () => {
  return (
    <div className="customer">
      <div className="customermain">
        <img src="image/customermainstar.svg" alt="Main Star" />
        <h1>Over 300,000+ Happy Customers</h1>
        <p>Let’s Hear What Our Customers Have To Say</p>
      </div>
      <div className="customerframe">
        <div className="reviews-container">
          {reviewsData.map((review, index) => (
            <div key={index}>
              <div className="slide">
                <p>{review.text}</p>
              </div>
              <div className="user">
                <h3>{review.author}</h3>
              </div>
              <div className="stars">
                {[...Array(1)].map((_, i) => (
                  <img key={i} src="image/customermainstar2.svg" alt="star" className="star-img" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


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
  // {
  //   text: "The best pet shop in town! They always have fresh food, and their grooming services are top-notch. My dog comes back happy and looking great!",
  //   author: "Pet Paradise Store",
  // },
  // {
  //   text: "The customer service is exceptional. They helped me choose the right products for my new puppy, and their recommendations were spot on!",
  //   author: "Furry Haven Pet Supplies",
  // },
  // {
  //   text: "The grooming services here are amazing! My dog always gets the best care, and their products keep his coat shiny and healthy.",
  //   author: "Fluffy Paws Grooming Studio",
  // },
];




const App = () => {
  return (
    <>
      <Header />
      <MainImage />
      <DogFoodBrands />
      <Information />
      <Seller />
      <AboutUs />
      <Customer />
      {/* <Register/>
      <Login/> */}
    </>
  );
};

export default App;
