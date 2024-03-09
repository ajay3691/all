import express from "express";
let app = express()
/* const http = require('http')

const app = http.createServer((req, resp) => {
    resp.end("Hello http Server")
}) */
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from "./routers/authRoute.js";
import productRoute from "./routers/productRoute.js"
import morgan from 'morgan'
import cors from 'cors'

app.use(cors({ origin: "*" }))
//app.use(cors());
app.use(morgan('tiny'))

// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(bodyParser.json());

// Use the "authRoute" router for handling user-related routes
app.use("/user", authRoute);
app.use("/api", productRoute)

app.get("/", (req, resp) => {
    resp.send("Express App - Root APi.......")
})

dotenv.config({ path: './config/config.env' })
let port = process.env.PORT
let host = process.env.HOST
let mongodb_url = process.env.MONGODB_URL

mongoose.connect(mongodb_url/* , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} */)
    .then(() => {
        console.log(`Mongo db conection Succesfull`)
    })
    .catch((err) => {
        console.log(`Mongo db Conection failed`)
    })
app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${host}:${port}`)
})