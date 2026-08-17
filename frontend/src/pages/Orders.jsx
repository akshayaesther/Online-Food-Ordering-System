import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, MapPin, RefreshCw } from 'lucide-react';

const getOrderStatus = (createdAt) => {
  const orderTime = new Date(createdAt);
  const now = new Date();
  const minutesElapsed = (now - orderTime) / (1000 * 60);

  if (minutesElapsed < 10) return 'Confirmed';
  if (minutesElapsed < 25) return 'Preparing';
  if (minutesElapsed < 45) return 'Out for Delivery';
  return 'Delivered';
};

const getStatusStep = (status) => {
  const steps = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];
  return steps.indexOf(status);
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrdersAndFoods = async () => {
      try {
        const [ordersRes, foodsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/orders', {
            headers: { 'x-auth-token': user.token }
          }),
          axios.get('http://localhost:5000/api/food')
        ]);
        setOrders(ordersRes.data);
        setFoods(foodsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchOrdersAndFoods();
  }, [user]);

  const handleReorder = (orderItems) => {
    orderItems.forEach(item => {
      const fullFood = foods.find(f => f._id === item.food_id);
      if (fullFood) {
        addToCart(fullFood);
        for (let i = 1; i < item.quantity; i++) {
          addToCart(fullFood);
        }
      } else {
        const fallbackFood = {
          _id: item.food_id,
          name: item.name,
          price: item.price,
          image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
          category: 'Main'
        };
        addToCart(fallbackFood);
        for (let i = 1; i < item.quantity; i++) {
          addToCart(fallbackFood);
        }
      }
    });
    navigate('/cart');
  };

  if (loading) return <div className="container" style={{padding: '100px'}}>Loading your orders...</div>;

  const steps = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];
  const stepEmojis = ['✅', '👨‍🍳', '🛵', '🎉'];

  return (
    <>
      <style>{`
        .orders-page-container {
          background: #f5f5f5;
          min-height: 100vh;
          padding: 20px 0;
        }
        .orders-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .orders-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1a1a1a;
        }
        .swiggy-order-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          margin-bottom: 20px;
          overflow: hidden;
          transition: 0.2s ease;
        }
        .swiggy-order-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .order-card-status-Confirmed { border-left: 4px solid #3B82F6; }
        .order-card-status-Preparing { border-left: 4px solid #F97316; }
        .order-card-status-OutforDelivery { border-left: 4px solid #8B5CF6; }
        .order-card-status-Delivered { border-left: 4px solid #22C55E; }
        
        .badge-Confirmed { background: #EFF6FF; color: #3B82F6; }
        .badge-Preparing { background: #FFF7ED; color: #F97316; }
        .badge-OutforDelivery { background: #F5F3FF; color: #8B5CF6; }
        .badge-Delivered { background: #F0FDF4; color: #22C55E; }

        .order-card-header {
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
        }
        .order-card-header-left h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }
        .order-card-header-left p {
          font-size: 13px;
          color: #999;
          margin: 4px 0 0 0;
        }
        .status-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          height: fit-content;
        }
        
        .timeline-container {
          padding: 20px 24px;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          position: relative;
        }
        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 25%;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e0e0e0;
          margin-bottom: 8px;
        }
        .timeline-dot.active {
          background: #E8730C;
        }
        .timeline-line {
          position: absolute;
          top: 6px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: #e0e0e0;
          z-index: -1;
        }
        .timeline-line.active {
          background: #E8730C;
        }
        .timeline-label {
          font-size: 12px;
          color: #666;
          text-align: center;
          white-space: nowrap;
        }
        
        .order-items-section {
          padding: 16px 20px;
        }
        .items-label {
          font-size: 13px;
          font-weight: 600;
          color: #666;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .item-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          border-bottom: 1px dashed #f0f0f0;
        }
        .item-row:last-child {
          border-bottom: none;
        }
        .item-name {
          font-size: 14px;
          color: #333;
        }
        .item-price {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
        }
        
        .order-card-footer {
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-address {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #666;
        }
        .footer-total {
          text-align: center;
        }
        .footer-total-label {
          font-size: 13px;
          color: #666;
        }
        .footer-total-amount {
          font-size: 18px;
          font-weight: 700;
          color: #E8730C;
        }
        .reorder-btn {
          background: white;
          border: 2px solid #E8730C;
          color: #E8730C;
          border-radius: 8px;
          padding: 8px 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: 0.2s;
        }
        .reorder-btn:hover {
          background: #E8730C;
          color: white;
        }
        
        .empty-orders {
          text-align: center;
          margin-top: 80px;
        }
        .empty-icon {
          font-size: 64px;
          margin-bottom: 10px;
        }
        .empty-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }
        .empty-sub {
          font-size: 14px;
          color: #999;
          margin-top: 8px;
          margin-bottom: 24px;
        }
        .browse-btn {
          background: #E8730C;
          color: white;
          padding: 10px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
        
        @media (max-width: 640px) {
          .order-card-header, .timeline-container, .order-items-section, .order-card-footer {
            padding: 12px;
          }
          .order-card-footer {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          .footer-total {
            text-align: left;
          }
        }
      `}</style>

      <div className="orders-page-container">
        <div className="orders-wrapper">
          <h1 className="orders-title">My Orders</h1>
          
          {orders.length === 0 ? (
            <div className="empty-orders">
              <div className="empty-icon">📦</div>
              <div className="empty-title">No orders yet!</div>
              <div className="empty-sub">Your order history will appear here</div>
              <button className="browse-btn" onClick={() => navigate('/')}>Browse Menu</button>
            </div>
          ) : (
            orders.map(order => {
              const currentStatus = getOrderStatus(order.created_at);
              const currentStepIndex = getStatusStep(currentStatus);
              const shortId = `#FD-${order._id.substring(order._id.length - 4).toUpperCase()}`;
              
              let statusClass = currentStatus.replace(/ /g, '');
              
              const addressParts = order.address.split(',');
              const shortAddress = addressParts.length > 1 
                ? `${addressParts[0]}, ${addressParts[1]}` 
                : order.address;

              return (
                <div key={order._id} className={`swiggy-order-card order-card-status-${statusClass}`}>
                  <div className="order-card-header">
                    <div className="order-card-header-left">
                      <h3>{shortId}</h3>
                      <p>{new Date(order.created_at).toLocaleString()}</p>
                    </div>
                    <div className={`status-badge badge-${statusClass}`}>
                      {currentStatus}
                    </div>
                  </div>
                  
                  <div className="timeline-container">
                    {steps.map((step, idx) => (
                      <div key={step} className="timeline-item">
                        <div className={`timeline-dot ${idx <= currentStepIndex ? 'active' : ''}`}></div>
                        <div className="timeline-label">
                          {stepEmojis[idx]} {step}
                        </div>
                        {idx < steps.length - 1 && (
                          <div className={`timeline-line ${idx < currentStepIndex ? 'active' : ''}`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-items-section">
                    <div className="items-label">Items Ordered</div>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="item-row">
                        <div className="item-name">• {item.quantity}x {item.name}</div>
                        <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-card-footer">
                    <div className="footer-address">
                      <span>📍</span> {shortAddress}
                    </div>
                    <div className="footer-total">
                      <div className="footer-total-label">Total Paid</div>
                      <div className="footer-total-amount">${order.total.toFixed(2)}</div>
                    </div>
                    <button 
                      className="reorder-btn"
                      onClick={() => handleReorder(order.items)}
                    >
                      <span>🔁</span> Reorder
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
