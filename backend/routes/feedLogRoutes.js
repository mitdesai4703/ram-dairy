import express from 'express';
import FeedLog from '../models/FeedLog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const feedLogs = await FeedLog.find().populate('cowId');
  res.json(feedLogs);
});

router.post('/', async (req, res) => {
  const feedLog = new FeedLog(req.body);
  await feedLog.save();
  res.status(201).json(feedLog);
});

export default router;
