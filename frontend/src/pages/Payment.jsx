import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [method, setMethod] = useState('card');
  const [loading, setLoading] = useState(false);

  const address = location.state?.address || user?.address;

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      const orderData = {
        items: cart.map(item => ({
          food_id: item._id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total: getCartTotal() + 2.99,
        address: address
      };

      const res = await axios.post('http://localhost:5000/api/orders', orderData, {
        headers: { 'x-auth-token': user.token }
      });

      if (res.data) {
        clearCart();
        navigate('/order-success');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{maxWidth: '600px', padding: '40px 20px'}}>
      <h1 className="section-title">Payment Method</h1>
      
      <div className="cart-summary" style={{width: '100%'}}>
        <div 
          className={`form-group cart-item`} 
          style={{ cursor: 'pointer', border: method === 'card' ? '2px solid var(--primary)' : '1px solid #eee', padding: '15px' }}
          onClick={() => setMethod('card')}
        >
          <CreditCard size={24} style={{ color: method === 'card' ? 'var(--primary)' : '#666' }} />
          <div style={{marginLeft: '15px'}}>
            <h3>Credit / Debit Card</h3>
            <p style={{fontSize: '12px'}}>Visa, Mastercard, AMEX</p>
          </div>
        </div>

        <div 
          className="form-group cart-item" 
          style={{ cursor: 'pointer', border: method === 'upi' ? '2px solid var(--primary)' : '1px solid #eee', padding: '15px' }}
          onClick={() => setMethod('upi')}
        >
          <Smartphone size={24} style={{ color: method === 'upi' ? 'var(--primary)' : '#666' }} />
          <div style={{marginLeft: '15px'}}>
            <h3>UPI / Net Banking</h3>
            <p style={{fontSize: '12px'}}>Google Pay, PhonePe, Paytm</p>
          </div>
        </div>

        <div 
          className="form-group cart-item" 
          style={{ cursor: 'pointer', border: method === 'cod' ? '2px solid var(--primary)' : '1px solid #eee', padding: '15px' }}
          onClick={() => setMethod('cod')}
        >
          <Banknote size={24} style={{ color: method === 'cod' ? 'var(--primary)' : '#666' }} />
          <div style={{marginLeft: '15px'}}>
            <h3>Cash on Delivery</h3>
            <p style={{fontSize: '12px'}}>Pay when your food arrives</p>
          </div>
        </div>

        <div style={{marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px'}}>
            <p style={{marginBottom: '10px', fontSize: '14px', color: '#666'}}>Delivering to: <strong>{address}</strong></p>
            <h3>Total Payable: <span style={{color: 'var(--primary)'}}>${(getCartTotal() + 2.99).toFixed(2)}</span></h3>
            <button 
                onClick={handlePlaceOrder} 
                className="checkout-btn"
                disabled={loading}
            >
                {loading ? 'PROCESSING...' : 'PLACE ORDER'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
