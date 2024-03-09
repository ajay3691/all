import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';
import UserRouter from './routes/UserRouter.js'
dotenv.config({ path: './config/config.env' });

let port = process.env.PORT;
let host = process.env.HOSTNAME
let dburl = process.env.MONGODB_URL

//create expess app
const app = express();

//http logger
app.use(morgan('tiny'))

// Use the UserRouter for routes starting with '/User'
app.use('/User', UserRouter);

// Connect to MongoDB
mongoose.connect(dburl)
    .then(() => {
        console.log("Mongodb Connection Succesfull")
    })
    .catch((err) => {
        console.log("Mongodb connection Fail", err)
    })

// Start the Express server
app.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`Server is running on port:${5000}`);
});

