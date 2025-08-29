import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import checkoutRoutes from './routes/checkout.js';
import { requireAuth, requireAdmin } from './middleware/auth.js';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL?.split(',') ?? '*', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/checkout', checkoutRoutes);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    if (!process.env.MONGO_URI) throw new Error('Missing MONGO_URI');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`API on :${PORT}`));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
start();
