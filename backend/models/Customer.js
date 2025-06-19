import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: String,
  phoneNumber: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: String,
  city: { type: String, required: true },
  state: String,
  postalCode: String,
  mapsLink: String,
  joinDate: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema);
