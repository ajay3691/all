import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ProductRouter from './routes/ProductRouter.js';

dotenv.config({ path: './config/config.env' });

let port = process.env.PORT;
let host = process.env.HOSTNAME;
let dburl = process.env.MONGODB_URL;

// Create an Express app
const app = express();

// Configure Express to receive form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define a root API route
app.get("/", (req, resp) => {
    resp.send("Express app - is running successfully");
});

// Use the ProductRouter with the "/products" base path
app.use("/products", ProductRouter);

mongoose.connect(dburl)
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch((err) => {
        console.error("MongoDB Connection Failed", err);
    });

app.listen(port, host, (err) => {
    if (err) {
        console.error("Server startup failed:", err);
    } else {
        console.log(`Server is Running: http://${host}:${port}`);
    }
});
