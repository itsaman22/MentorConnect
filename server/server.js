import express from 'express';
import dotenv from 'dotenv';
import * as process from 'process';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Simple CORS middleware - this must come first
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mentor-connect-mauve.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cache-Control');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

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