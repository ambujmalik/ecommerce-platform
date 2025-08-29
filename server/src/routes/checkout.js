import { Router } from 'express';
import Stripe from 'stripe';
import { requireAuth } from '../middleware/auth.js';

const r = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

r.post('/create-intent', requireAuth, async (req, res) => {
  const { amount, currency = 'usd' } = req.body; // amount in cents
  try {
    const pi = await stripe.paymentIntents.create({ amount, currency });
    res.json({ clientSecret: pi.client_secret });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default r;
