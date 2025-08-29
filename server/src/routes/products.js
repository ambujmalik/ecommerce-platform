import { Router } from 'express';
import Product from '../models/Product.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const r = Router();

// Public
r.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// Admin only
r.post('/', requireAuth, requireAdmin, async (req, res) => {
  const p = await Product.create(req.body);
  res.status(201).json(p);
});

r.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
});

r.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default r;
