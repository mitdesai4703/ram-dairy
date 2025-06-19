import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('customerId');
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

export default router;
