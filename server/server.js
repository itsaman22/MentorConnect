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
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));