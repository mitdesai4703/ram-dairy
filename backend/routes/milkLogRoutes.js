import express from 'express';
import MilkLog from '../models/MilkLog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const logs = await MilkLog.find().populate('cowId');
  res.json(logs);
});

router.post('/', async (req, res) => {
  const log = new MilkLog(req.body);
  await log.save();
  res.status(201).json(log);
});

export default router;
