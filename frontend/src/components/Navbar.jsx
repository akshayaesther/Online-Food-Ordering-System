import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ShoppingCart, User, LogOut, Package, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Food<span>Dash</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-item" onClick={closeMenu} end>
            Menu
          </NavLink>
          {user ? (
            <>
              <NavLink to="/orders" className="nav-item" onClick={closeMenu}>
                <Package size={20} />
                <span>My Orders</span>
              </NavLink>
              <NavLink to="/cart" className="nav-item cart-btn" onClick={closeMenu}>
                <ShoppingCart size={20} />
                <span className="cart-badge">{cartCount}</span>
              </NavLink>
              <div className="user-menu">
                <User size={20} />
                <span style={{ fontWeight: '500' }}>{user.name}</span>
                <button onClick={() => { logout(); closeMenu(); }} className="logout-btn" title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className="nav-item login-link" onClick={closeMenu}>
                Login
              </NavLink>
              <NavLink to="/register" className="nav-item register-btn" onClick={closeMenu}>
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
