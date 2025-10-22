import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import errorHandler from "errorhandler";
import ticketRouter from "./routes/ticket_routes.js";

// Load environment variables from .env file
dotenv.config();

//Set up database connection
await mongoose.connect(process.env.MONGO_URI);


//Set up express app
const app = express();

//Middleware to parse JSON bodies
app.use(express.json());

// Use error handler
app.use(errorHandler({ log: false }));


//Use ticket routes
app.use(ticketRouter)


//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});