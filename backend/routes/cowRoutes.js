import express from 'express';
import Cow from '../models/Cow.js';

const router = express.Router();

// GET all cows
router.get('/', async (req, res) => {
  try {
    const cows = await Cow.find();
    res.json(cows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cows' });
  }
});

// GET cow by ID
router.get('/:id', async (req, res) => {
  try {
    const cow = await Cow.findById(req.params.id);
    if (!cow) return res.status(404).json({ error: 'Cow not found' });
    res.json(cow);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cow' });
  }
});

// POST new cow
router.post('/', async (req, res) => {
  try {
    const cow = new Cow(req.body);
    await cow.save();
    res.status(201).json(cow);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add cow' });
  }
});

// PUT (update) cow by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCow = await Cow.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCow) return res.status(404).json({ error: 'Cow not found' });
    res.json(updatedCow);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update cow' });
  }
});

// DELETE cow by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Cow.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Cow not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete cow' });
  }
});

export default router;
