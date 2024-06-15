import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(5000, () => {
    console.log("Server is running");
})
