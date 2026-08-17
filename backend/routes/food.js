const express = require('express');
const FoodItem = require('../models/FoodItem');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const foods = await FoodItem.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const food = await FoodItem.findById(req.params.id);
    if (!food) return res.status(404).json({ error: 'Food item not found' });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
