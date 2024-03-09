import express from "express";
//Create server/app
let app = express();

import dotenv from 'dotenv'
import mongoose from "mongoose";
import  morgan  from "morgan";
import cors from 'cors'
import UserRouter from "./routes/UserRouter.js";

//app.use(cors()); // Enable CORS
app.use(cors({ origin: "*" }))

// Middleware  .... HTTP logger
//app.use(morgan('dev')); 
app.use(morgan('tiny'))


// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use("/user", UserRouter)

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})


//loading env varible using dotenv pakage
dotenv.config({ path: './config/config.env' })
const port = process.env.PORT
const host = process.env.host
const dburl = process.env.MONGODB_URL

//connect Mongodb
mongoose.connect(dburl/* , {
    useNewUrlParser: true,
    useUnifiedTopology: true
} */)

    .then((resp) => {
        console.log("mongodb connection succesfull")
    })
    .catch((err) => {
        console.log("Mongodb connection Faild")
    })

app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${host}:${port}`)
})

