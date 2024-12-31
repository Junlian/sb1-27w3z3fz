import express from 'express';
import cors from 'cors';
import { config } from './config/env';
import { connectDB } from './config/database';
import authRoutes from './routes/auth.routes';
import paperRoutes from './routes/paper.routes';

const app = express();

// Middleware
app.use(cors({
  origin: config.clientUrl,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/papers', paperRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});