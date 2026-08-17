import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="container success-screen">
      <CheckCircle size={80} className="success-icon" />
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for choosing FoodDash. Your food is being prepared.</p>
      <div style={{marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <Link to="/orders" className="checkout-btn" style={{maxWidth: '200px'}}>TRACK ORDER</Link>
        <Link to="/" className="add-btn" style={{padding: '15px 30px', borderRadius: '4px', display: 'flex', alignItems: 'center'}}>CONTINUE SHOPPING</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
