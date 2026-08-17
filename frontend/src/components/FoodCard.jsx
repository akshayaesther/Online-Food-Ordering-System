import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Plus, Minus, Clock, Utensils } from 'lucide-react';

const getMockDetails = (name) => {
  switch (name) {
    case "Classic Margherita Pizza": return { rating: "4.3", time: "20-30 min" };
    case "Spicy Pepperoni Pizza": return { rating: "4.5", time: "25-35 min" };
    case "Double Cheeseburger": return { rating: "4.2", time: "15-25 min" };
    case "Crispy Chicken Sandwich": return { rating: "4.4", time: "15-25 min" };
    case "Chicken Tikka Masala": return { rating: "4.7", time: "30-40 min" };
    case "Paneer Butter Masala": return { rating: "4.6", time: "30-40 min" };
    case "Sushi Boat Deluxe": return { rating: "4.8", time: "35-45 min" };
    case "Pad Thai Bowls": return { rating: "4.3", time: "25-35 min" };
    default: return { rating: "4.4", time: "25-35 min" };
  }
};

const FoodCard = ({ food }) => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [imgError, setImgError] = useState(false);

  const cartItem = cart.find(item => item._id === food._id);
  const { rating, time } = getMockDetails(food.name);

  let dealBadge = null;
  if (food.name === "Classic Margherita Pizza" || food.name === "Chicken Tikka Masala") {
    dealBadge = <span className="deal-badge best-seller">🔥 Best Seller</span>;
  } else if (food.name === "Spicy Pepperoni Pizza") {
    dealBadge = <span className="deal-badge discount">20% OFF</span>;
  }

  return (
    <div className="food-card">
      <div className="food-card-img-container">
        {dealBadge}
        {imgError ? (
          <div className="food-img-placeholder">
            <Utensils size={36} />
            <span>{food.name}</span>
          </div>
        ) : (
          <img 
            src={food.image_url} 
            alt={food.name} 
            className="food-img" 
            onError={() => setImgError(true)} 
          />
        )}
      </div>

      <div className="food-info">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-category">{food.category}</p>
        <p className="food-desc">{food.description}</p>
        
        {/* Rating and Delivery Badges */}
        <div className="food-meta">
          <span className="rating-badge">★ {rating}</span>
          <span className="delivery-badge">
            <Clock size={14} />
            <span>{time}</span>
          </span>
        </div>

        <div className="food-footer">
          <span className="food-price">${food.price.toFixed(2)}</span>
          
          {cartItem ? (
            <div className="quantity-counter">
              <button onClick={() => updateQuantity(food._id, cartItem.quantity - 1)}>
                <Minus size={14} />
              </button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => updateQuantity(food._id, cartItem.quantity + 1)}>
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button className="add-btn" onClick={() => addToCart(food)}>
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
