import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

router.post('/', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
});

export default router;
