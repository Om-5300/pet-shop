import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
  }, [cartItems]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError("");
      
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isAuthenticated) {
        navigate("/login", { state: { from: "/cart" } });
        return;
      }
      
      const storedUser = localStorage.getItem("users");
      if (!storedUser) throw new Error("User data not found");
      
      const parsedUser = JSON.parse(storedUser);
      const email = parsedUser[0].email;
      if (!email) throw new Error("Invalid user data");
      
      const response = await axios.get("http://localhost:5000/api/cart",{
        headers: { email }
      }); 
      
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to load your cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      await axios.put(`http://localhost:5000/api/cart/update/${itemId}`, { quantity: newQuantity });
      
      setCartItems(prevItems => prevItems.map(item =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    } catch (err) {
      console.error("Error updating quantity:", err);
      setError("Failed to update quantity. Please try again.");
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`);
      
      setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item. Please try again.");
    }
  };

  const proceedToCheckout = () => navigate("/checkout");

  if (loading) return <h2>Loading your cart...</h2>;
  if (error) return <div className="error-container"><p>{error}</p><button onClick={fetchCart}>Try Again</button></div>;
  if (cartItems.length === 0) return <div className="empty-cart"><h2>Your cart is empty</h2><button onClick={() => navigate("/")}>Continue Shopping</button></div>;

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Size: {item.size}</p>
              <p className="item-price">${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item._id)}>Remove</button>
            </div>
            <div className="item-subtotal">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
        <div className="summary-row"><span>Shipping</span><span>$5.99</span></div>
        <div className="summary-row total"><span>Total</span><span>${(totalPrice + 5.99).toFixed(2)}</span></div>
        <button className="checkout-btn" onClick={proceedToCheckout}>Proceed to Checkout</button>
        <button className="continue-shopping" onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
