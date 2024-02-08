import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/index.js';

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Configure middleware for parsing JSON request bodies
app.use(express.json());

// Set server port
const applicationPort = process.env.PORT ||  5000;

// Start the server
app.listen(applicationPort, () => {
  console.log(`Server is working on port ${applicationPort}`);
});

// Root route handler
app.get('/', (req, res) => {
  res.send('Learning Node.js');
});
