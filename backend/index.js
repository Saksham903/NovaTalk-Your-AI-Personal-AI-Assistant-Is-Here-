import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import cors from 'cors';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); 
app.use(cors());


app.use(cors({
  origin: 'http://localhost:5173', // or whatever your frontend port is
  credentials: true
}));
const PORT=process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
dbConnect();

//using the routes
app.use('/api/user', userRoutes);
app.use('/api/chat',chatRoutes);