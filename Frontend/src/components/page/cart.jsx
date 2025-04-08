import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
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
    setTotalPrice(
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login", { state: { from: "/cart" } });
        return;
      }

      const response = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.put(
        `http://localhost:5000/api/cart/update/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
      setError("Failed to update quantity. Please try again.");
    }
  };

  const removeItem = async (itemId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item. Please try again.");
    }
  };

  const proceedToCheckout = () => navigate("/payment");

  if (loading) return <h2>Loading your cart...</h2>;

  if (error)
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchCart}>Try Again</button>
      </div>
    );

  if (cartItems.length === 0)
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button className="continue-shopping" onClick={() => navigate("/")}>
          <FaArrowLeft /> Continue Shopping
        </button>
      </div>
    );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>

      <div className="cart">
        <div className="cart-header-details">
          <div className="product-header">PRODUCT</div>
          <div className="quantity-header">QUANTITY</div>
          <div className="total-header">TOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <div className="product">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="product-details">
                <p>{item.title}</p>
                <p className="price">₹{item.price}</p>
              </div>
            </div>

            <div className="quantity">
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>
                -
              </button>
              <input type="text" value={item.quantity} readOnly />
              <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                +
              </button>
              <button className="delete" onClick={() => removeItem(item._id)}>
                <FaTrash />
              </button>
            </div>

            <div className="total">₹{(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping" onClick={() => navigate("/")}>
          <FaArrowLeft /> Continue Shopping
        </button>
      </div>

      <div className="checkout">
        <p className="estimated-total">
          Estimated Total: <span>₹{totalPrice.toFixed(2)}</span>
        </p>
        <p className="tax-info">
          Tax included. <a href="#">Shipping</a> and discounts calculated at checkout.
        </p>
        <button className="checkout-button" onClick={proceedToCheckout}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
