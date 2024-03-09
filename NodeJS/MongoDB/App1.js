import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';
//import UserRouter from './routes/UserRouter.js'
import User from './model/User.js'
dotenv.config({ path: './config/config.env' });

let port = process.env.PORT;
let host = process.env.HOSTNAME
let dburl = process.env.MONGODB_URL

//create expess app
const app = express();
//http logger
app.use(morgan('tiny'))

//impliment Apis
app.get('/', (req, res) => {
    res.send("Root request");
});
app.get("/users",async(req,resp)=>{
    console.log("Test case 123")
    let users=await User.find({})
    console.log(users)
    resp.status(200).json(users)
}) 

//app.use('/User', UserRouter);
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
    console.log(`Server is running on: http://${host}:${port}`);
});
