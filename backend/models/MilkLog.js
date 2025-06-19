import mongoose from 'mongoose';

const MilkLogSchema = new mongoose.Schema({
  cowId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cow', required: true },
  date: { type: Date, required: true },
  timeOfDay: String, 
  quantityLiters: Number,
  fatPercentage: Number,
  proteinPercentage: Number,
  notes: String,
}, { timestamps: true });

export default mongoose.model('MilkLog', MilkLogSchema);
