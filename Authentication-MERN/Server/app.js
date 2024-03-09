import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import router from './controller/userRouter.js'
import cors from 'cors'

let app = express()
app.use(morgan('tiny'))

app.use(cors({ origin: "*" }))

// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//read/load configuration env variable - using dotenv package
dotenv.config({ path: './config/config.env' })
let port = process.env.PORT;
let host = process.env.HOST;
let mongodb_url = process.env.MongoDB_LOCAL_URL;


app.get("/", (req, resp) => {
    resp.send("Express- Root API........")
})

//router controllers request
app.use("/user", router)

mongoose.connect(mongodb_url)
    .then(() => {
        console.log(`MongoDB - connection successful`);
    })
    .catch((err) => {
        console.error(`MongoDB - connection failed: ${err.message}`);
    });

app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${host}:${port}`)
})



/* ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex : true
} */