import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import cowRoutes from './routes/cowRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import feedLogRoutes from './routes/feedLogRoutes.js';
import milkLogRoutes from './routes/milkLogRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9002;

app.use(cors());
app.use(express.json());


app.use('/api/cows', cowRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/feedlogs', feedLogRoutes);
app.use('/api/milklogs', milkLogRoutes);


mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));
})
.catch((err) => console.error('MongoDB error:', err));
