import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container success-screen">
        <div style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'rgba(232, 115, 12, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto'
        }}>
          <ShoppingBag size={72} style={{color: '#FFB347'}} />
        </div>
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="checkout-btn" style={{maxWidth: '250px', margin: '30px auto'}}>Browse the menu</Link>
      </div>
    );
  }

  const total = getCartTotal();

  return (
    <div className="container cart-container">
      <div className="cart-items-list">
        <h1 className="section-title">Your Cart</h1>
        {cart.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.image_url} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="food-category">{item.category}</p>
              <div className="cart-controls">
                <button className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity - 1)}><Minus size={16}/></button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity + 1)}><Plus size={16}/></button>
                
                <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>${item.price.toFixed(2)} each</span>
                  <span className="food-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                
                <button className="remove-btn" onClick={() => removeFromCart(item._id)}><Trash2 size={18}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2 style={{marginBottom: '20px'}}>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <span>${(total + 2.99).toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="checkout-btn">PROCEED TO CHECKOUT</Link>
      </div>
    </div>
  );
};

export default Cart;
