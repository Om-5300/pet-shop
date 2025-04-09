import React, { useState, useEffect } from 'react';
import "./payment.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UPIPayment = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState('');
  const [cartId, setCartId] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);

  useEffect(() => {
    // Fetch cart details when component mounts
    const fetchCartDetails = async () => {
      setIsCartLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("Cart response:", response.data);

        if (response.data && response.data.items) {
          setCartItems(response.data.items);
          
          let total = 0;
          if (response.data.items.length > 0) {
            total = response.data.items.reduce(
              (sum, item) => sum + (Number(item.price) * Number(item.quantity)), 
              0
            );
          }
          
          console.log("Calculated total:", total);
          setTotalAmount(total);
        } else {
          setError('Your cart is empty. Add items to your cart before checkout.');
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        setError('Failed to load cart details. Please try again.');
      } finally {
        setIsCartLoading(false);
      }
    };

    fetchCartDetails();
  }, [navigate]);

  const validateForm = () => {
    if (!upiId.trim()) {
      setError('Please enter your UPI ID');
      return false;
    }
    
    if (!pin.trim()) {
      setError('Please enter your UPI PIN');
      return false;
    }
    
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/;
    if (!upiRegex.test(upiId)) {
      setError('Please enter a valid UPI ID (e.g., username@ybl)');
      return false;
    }
    
    const pinRegex = /^\d{4,6}$/;
    if (!pinRegex.test(pin)) {
      setError('PIN must be 4-6 digits');
      return false;
    }
    
    if (cartItems.length === 0) {
      setError('Your cart is empty. Add items to your cart before checkout.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }

      console.log("Sending payment request with cart items:", cartItems);

      const response = await axios.post(
        'http://localhost:5000/api/payment/process',
        {
          upiId,
          pin,
          items: cartItems
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      console.log("Payment response:", response.data);
      
      if (response.data && response.data.success) {
        setPaymentStatus({
          success: true,
          orderId: response.data.orderId,
          message: response.data.message || 'Payment successful'
        });
        localStorage.removeItem('cart');
      } else {
        setError(response.data.message || 'Payment failed. Please try again.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      const errorMessage = err.response?.data?.message || 'Payment failed. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewPayment = () => {
    setUpiId('');
    setPin('');
    setPaymentStatus(null);
    setError('');
  };

  if (paymentStatus?.success) {
    return (
      <div className="payment-container success">
        <div className="payment-success">
          <div className="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Order ID: {paymentStatus.orderId}</p>
          <p>{paymentStatus.message}</p>
          <button onClick={() => navigate('/orders')} className="button">
            View Orders
          </button>
          <button onClick={() => navigate('/')} className="button secondary">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-form-wrapper">
        <h1>Complete Your Payment</h1>
        <p className="payment-subtitle">Secure UPI Payment</p>
        
        {isCartLoading ? (
          <div className="loading">Loading cart details...</div>
        ) : (
          <>
            {cartItems.length > 0 ? (
              <div className="cart-summary">
                <p className="total-amount">Total Amount: ₹{totalAmount.toFixed(2)}</p>
                <p className="item-count">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</p>
              </div>
            ) : (
              <div className="empty-cart-message">
                Your cart is empty. Please add items to your cart before checkout.
              </div>
            )}
          </>
        )}
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="username@upi"
              disabled={isLoading || isCartLoading || cartItems.length === 0}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pin">UPI PIN</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter your UPI PIN"
              disabled={isLoading || isCartLoading || cartItems.length === 0}
              required
            />
            <p className="pin-info">Your PIN is encrypted and secure</p>
          </div>
          
          <button 
            type="submit" 
            className="button payment-button" 
            disabled={isLoading || isCartLoading || cartItems.length === 0}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        
        <div className="payment-footer">
          <p>Your payment is secured with end-to-end encryption</p>
          <div className="payment-methods">
            <span className="payment-icon">UPI</span>
            <span className="payment-icon">BHIM</span>
            <span className="payment-icon">GPay</span>
            <span className="payment-icon">PhonePe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;

