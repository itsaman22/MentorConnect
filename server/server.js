import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as process from 'process';
import connectDB from './config/db.js';  // Add .js extension
import authRoutes from './routes/auth.js';  // Add .js extension

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// Configure CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://mentor-connect-mauve.vercel.app/' // Add your Vercel frontend URL
  ],
  credentials: true
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));