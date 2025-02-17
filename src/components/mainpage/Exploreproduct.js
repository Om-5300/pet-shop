import React, { Component } from "react";
import './Exploreproduct.css'

const ExploreProduct = () => {
    return (
        <div className="exploreproduct">
            <div className="exploreproductheading">
                <h1>Explore Our Product</h1>
                <div className='shop'>
                    <p>SHOP ALL</p>
                    <img src="image/rightarrownew.svg" alt="arrow" />
                </div>
            </div>
            <div className="product">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className={`item${num}`}>
                        <img src={`image/dogitem${num}.svg`} alt={`dogitem${num}`} />
                        <h2>Product Title {num}</h2>
                        <p>£19.99 GBP</p>
                        <a>View Details</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreProduct;