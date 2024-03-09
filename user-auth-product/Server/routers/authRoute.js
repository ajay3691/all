import express from "express";
let authRouter = express.Router()

import User from "../model/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import middleware from "./middlewere.js";

authRouter.get("/users", async (req, resp) => {
    try {
        let user = await User.find({ User: User })
        resp.status(200).json(user)
    }
    catch (err) {
        resp.status(500).json({ msg: "Server Err" })
    }
})

authRouter.post("/register", async (req, resp) => {
    try {
        const { email, password, confirmpassword } = req.body

        // Check if the user already exists
        let user = await User.findOne({ email: email })
        if (user) {
            return resp.status(401).json({ err: "user allredy Exist" })
        }
        if (password !== confirmpassword) {
            return resp.status(401).json({ err: "password not match" })
        }

        // Create a new user
        else {
            //let hashedPassword = bcrypt.hashSync(password, 10)
            let newUser = new User({
                email,
                password/* : hashedPassword */,
                confirmpassword
            })
            await newUser.save()
            resp.status(200).json({ message: "User registered succesfully" })
        }
    }
    catch (err) {
        console.log(err)
        resp.status(500).json({ err: "Internal Server err1" })
    }
})
authRouter.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body

        //verify email exist or not
        let userE = await User.findOne({ email: email })
        if (userE) {
            let userP = await User.findOne({ password: password })
            if (userP) {
                // If the email and password are correct, generate a JWT token
                const payload = {
                    userT: {
                        id: userP.id
                    },
                }
                jwt.sign(payload,'AJR',{expiresIn :100*100},(err,token)=>{
                    if (err){
                        console.log(err)
                        resp.status(500).json({msg:"JWT Token generation Err"})
                    }
                    resp.status(200).json({token})
                })
                //resp.status(200).json({ mag: "login success" })
            }
            else {
                resp.status(401).json({ mas: "incorrect password" })
            }
        }
        else {
            resp.status(401).json({ mas: "email/User not existed" })
        }
    }
    catch (err) {
        console.log(err)
        resp.status(500).json({ msg: "An err acured due to login" })
    }
})
// Protected route: Access user's profile
authRouter.get("/myprofile", middleware, async (req, resp) => {
    try {
        let userx = await User.findById(req.userT.id)
        if (!userx) {
            return resp.status(401).json({ msg: "user not found" })
        }
        resp.json(userx)
    }
    catch (err) {
        console.log(err)
        return resp.status(500).send('server Eror')
    }
})

export default authRouter