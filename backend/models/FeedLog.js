import mongoose from 'mongoose';

const FeedLogSchema = new mongoose.Schema({
  cowId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cow', required: true },
  date: { type: Date, required: true },
  feedType: String,
  quantity: Number,
}, { timestamps: true });

export default mongoose.model('FeedLog', FeedLogSchema);
