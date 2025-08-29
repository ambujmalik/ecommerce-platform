import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  stock: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);

