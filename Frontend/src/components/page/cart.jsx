import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
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

  // Function to clean price and convert to a number
  const parsePrice = (price) => {
    return parseFloat(price.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="product-info">
                  <img src={item.image} alt={item.title} className="cart-image" />
                  <div>
                    <h2>{item.title}</h2>
                    <p>₹{parsePrice(item.price)}</p>
                  </div>
                </td>
                <td>
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </td>
                <td>₹{(parsePrice(item.price) * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p className="total-price">Estimated Total: ₹{calculateTotal()}</p>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Check out
          </button>
        </div>
      )}

      {/* Continue Shopping Button */}
      <button className="continue-shopping-btn" onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
