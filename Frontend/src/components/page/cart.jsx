import React, { useState, useEffect } from "react";
import "./cart.css";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity + change > 0) {
      updatedCart[index].quantity += change;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const parsePrice = (price) =>
    parseFloat(price.toString().replace(/[^0-9.]/g, "")) || 0;

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <button className="continue-shopping" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty</h2>
      ) : (
        <div className="cart">
          <div className="cart-header-details">
            <div className="product-header">PRODUCT</div>
            <div className="quantity-header">QUANTITY</div>
            <div className="total-header">TOTAL</div>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="product">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="product-details">
                  <p>{item.title}</p>
                  <p className="price">₹{parsePrice(item.price)}</p>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(index, -1)}>
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleQuantityChange(index, 1)}>
                  +
                </button>
                <button
                  className="delete"
                  onClick={() => handleRemoveItem(index)}
                >
                  <FaTrash />
                </button>
              </div>
              <div className="total">
                ₹{(parsePrice(item.price) * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="checkout">
          <p className="estimated-total">
            Estimated Total: <span>₹{calculateTotal()}</span>
          </p>
          <p className="tax-info">
            Tax included. <a href="#">Shipping</a> and discounts calculated at
            checkout.
          </p>
          <button className="checkout-button">Check Out</button>
          <div className="payment-buttons">
            <button className="shop-pay">
              shop<span>Pay</span>
            </button>
            <button className="g-pay">
              G<span>Pay</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
