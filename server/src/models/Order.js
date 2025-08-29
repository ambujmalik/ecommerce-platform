import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, qty: Number, price: Number }],
  amount: Number,
  status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  paymentId: String
}, { timestamps: true });
export default mongoose.model('Order', orderSchema);
