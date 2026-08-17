import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { cart, getCartTotal } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedAddress = localStorage.getItem("deliveryAddress");
    if (savedAddress) {
      setAddress(savedAddress);
    } else if (user) {
      setAddress(user.address || '');
    }
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [user, cart, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we'd save this to a 'draft' order or session
    // For now, we just pass the address to the payment page via state or just proceed
    navigate('/payment', { state: { address } });
  };

  const total = getCartTotal() + 2.99;

  return (
    <div className="container" style={{maxWidth: '800px', padding: '40px 20px'}}>
      <h1 className="section-title">Delivery Address</h1>
      <div className="cart-container" style={{gridTemplateColumns: '1fr'}}>
        <div className="cart-summary" style={{width: '100%'}}>
           <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Address Details</label>
                <textarea 
                  required 
                  rows="4"
                  placeholder="Enter your full address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div style={{marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px'}}>
                <h3>Payable Amount: <span style={{color: 'var(--primary)'}}>${total.toFixed(2)}</span></h3>
                <button type="submit" className="checkout-btn">PROCEED TO PAYMENT</button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
