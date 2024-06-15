import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(`Error occured during connection: ${err}`);
    });


const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(5000, () => {
    console.log("Server is running");
})
