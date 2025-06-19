import mongoose from 'mongoose';

const CowSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  dateOfBirth: Date,
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  breed: String,
  lactationStatus: String, 
  motherName: String,
  fatherName: String,
  description: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Cow', CowSchema);
