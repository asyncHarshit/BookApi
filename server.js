import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import bookRoute from './routes/book.route.js'

dotenv.config();

const app = express();

connectDB();


// middleware
app.use(express.json());


// route here

app.use('/api/books',bookRoute);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})
