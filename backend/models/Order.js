const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  food_id: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  total: { type: Number, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'delivered'] },
  address: { type: String, required: true },
  items: [orderItemSchema],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
