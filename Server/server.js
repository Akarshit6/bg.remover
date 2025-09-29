import 'dotenv/config';
import express from 'express';
import cors from 'cors';    
import { connect } from 'mongoose';
import connectDB from './configs/mongodb.js';


//APP Config

const PORT = process.env.PORT || 4000;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
await connectDB()

// API routes
app.get('/',(req,res)=>res.send('API Working'));


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));