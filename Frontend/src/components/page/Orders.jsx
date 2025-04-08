import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        if (!token) {
          console.log('No token found, redirecting to login');
          navigate('/login');
          return;
        }

        console.log('Making API request to fetch orders...');
        const response = await axios.get('http://localhost:5000/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('API Response:', response.data);

        if (!response.data) {
          throw new Error('No data received from server');
        }

        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Detailed error:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status
        });

        if (err.response?.status === 401) {
          console.log('Unauthorized, redirecting to login');
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          setError(err.response?.data?.message || 'Failed to fetch orders. Please try again later.');
        }
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <p>You haven't placed any orders yet.</p>
        <button className="button" onClick={() => navigate('/')}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>Order #{order._id.slice(-6).toUpperCase()}</h3>
                <p className="order-date">Ordered on {formatDate(order.createdAt)}</p>
              </div>
              <span className={`status-badge ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="order-items">
              {order.items.map((item) => (
                <div key={item._id} className="order-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                    <p className="item-price">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-footer">
              <div className="total-amount">
                Total Amount: <span className="amount">₹{order.totalAmount}</span>
              </div>
              <div className="payment-info">
                <p>Payment Method: {order.paymentMethod}</p>
                {order.upiId && <p>UPI ID: {order.upiId}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders; 