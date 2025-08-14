import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      ssl: true,
      tls: true,
      tlsAllowInvalidCertificates: true // Only use this in development
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;