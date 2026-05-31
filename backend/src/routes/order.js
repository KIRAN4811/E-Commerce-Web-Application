const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Create new order
router.post('/', authMiddleware, async (req, res) => {
  const { items } = req.body;
  let total = 0;
  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product || product.stock < item.quantity) return res.status(400).json({ message: 'Product not found or insufficient stock' });
    total += product.price * item.quantity;
    product.stock -= item.quantity;
    await product.save();
  }
  const order = await Order.create({ user: req.user.id, items, total });
  res.status(201).json(order);
});

// Get user's orders
router.get('/my', authMiddleware, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

// Admin: get all orders
router.get('/', authMiddleware, (req, res, next) => req.user.role !== 'admin' ? res.status(403).json({ message: 'Admin only' }) : next(), async (req, res) => {
  const orders = await Order.find().populate('user items.product');
  res.json(orders);
});

// Update order status (admin)
router.put('/:id', authMiddleware, (req, res, next) => req.user.role !== 'admin' ? res.status(403).json({ message: 'Admin only' }) : next(), async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!order) return res.status(404).json({ message: 'Not found' });
  res.json(order);
});

module.exports = router;
