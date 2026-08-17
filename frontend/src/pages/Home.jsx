import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard';
import { Search, MapPin } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  
  const { user } = useContext(AuthContext);
  const { cart, getCartTotal } = useContext(CartContext);

  const [locationInput, setLocationInput] = useState(user?.address || '');
  const [toastMessage, setToastMessage] = useState('');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/food');
        setFoods(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);
  
  useEffect(() => {
    if (user?.address && !locationInput) {
      setLocationInput(user.address);
    }
  }, [user]);

  const handleFindFood = () => {
    if (!locationInput.trim()) {
      alert("Please enter a delivery address");
      return;
    }
    localStorage.setItem("deliveryAddress", locationInput);
    setToastMessage(`📍 Delivering to: ${locationInput}`);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const categories = ['All', 'Pizza', 'Burger', 'Indian', 'Thai', 'Healthy', 'Bowls'];

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || food.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="container" style={{ padding: '100px' }}>Loading delicious food...</div>;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a1a1a',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '24px',
          fontSize: '14px',
          fontWeight: 500,
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          {toastMessage}
        </div>
      )}
      
      {/* Hero Section */}
      <div className="hero-section container">
        <div className="hero-content">
          <h1>Hungry? We've got you covered.</h1>
          <div className="hero-search-bar">
            <MapPin size={20} className="pin-icon" />
            <input
              type="text"
              placeholder="Enter your delivery location..."
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            <button className="find-food-btn" onClick={handleFindFood}>Find Food</button>
          </div>
        </div>
      </div>

      <div className="menu-section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '20px' }}>
          <h1 className="section-title" style={{ marginBottom: 0 }}>Popular Dishes</h1>

          <div style={{ position: 'relative', width: '340px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: search ? '#E8730C' : '#9e9e9e',
                zIndex: 1,
                transition: 'color 0.2s'
              }}
            />
            <input
              type="text"
              placeholder="Search for dishes, cuisines..."
              className="form-group"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                height: '46px',
                paddingLeft: '42px',
                paddingRight: '90px',
                marginBottom: 0,
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#E8730C';
                e.target.style.boxShadow = '0 2px 16px rgba(232,115,12,0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
              }}
            />
            <button
              onClick={() => setSearch(search)}
              style={{
                position: 'absolute',
                right: '6px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#E8730C',
                border: 'none',
                borderRadius: '8px',
                height: '34px',
                padding: '0 14px',
                color: 'white',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#d4660a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#E8730C'}
            >
              <Search size={14} />
              Search
            </button>
          </div>
        </div>

        {/* Category Pills Row */}
        <div className="category-pills">
          {categories.map(c => (
            <button
              key={c}
              className={`category-pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="food-grid" style={{ marginBottom: '80px' }}>
          {filteredFoods.map(food => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px', color: '#686b78', marginBottom: '80px' }}>
            <h3>No dishes found. Try a different search or category.</h3>
          </div>
        )}
      </div>

      {/* Sticky Cart Bar */}
      {totalItems > 0 && (
        <div className="sticky-cart-bar">
          <div className="sticky-cart-container container">
            <span className="cart-bar-left">{totalItems} {totalItems === 1 ? 'item' : 'items'} added</span>
            <Link to="/cart" className="cart-bar-right">
              View Cart &rarr; ${getCartTotal().toFixed(2)}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
