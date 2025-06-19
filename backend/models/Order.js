import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  orderDate: { type: Date, required: true },
  scheduledDeliveryStart: Date,
  scheduledDeliveryEnd: Date,
  items: [{
    product: String,
    quantityPerDay: Number,
    totalPrice: Number
  }],
  subtotal: Number,
  deliveryCharge: Number,
  discount: Number,
  grandTotal: Number,
  orderStatus: { type: String, default: 'Pending' },
  paymentStatus: { type: String, default: 'Pending' },
  notes: String,
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
