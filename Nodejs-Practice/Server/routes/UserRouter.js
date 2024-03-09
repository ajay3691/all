import express from "express";
import User from "../model/User.js";
const router = express.Router();
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";

router.get("/", (req, resp) => {
    resp.send("<h1>User Page</h1>")
})
//Localhst:8080/user/all
router.get("/users", async (req, resp) => {
    try {
        let users = await User.find()
        resp.status(200).json(users)
    }
    catch (err) {
        resp.status(500).json({ "masg": "Not Get Data err" })
    }
})

// Localhost:9000/user/register
router.post("/register", async (req, resp) => {
    try {
        const { email, password, confirmpassword } = req.body;
        let user = await User.findOne({ email: email })
        if (user) {
            return resp.status(401).json({ err: "user allredy Exist" })
        }
        if (password !== confirmpassword) {
            return resp.status(401).json({ err: "password not match" })
        }
        else {
            //const hashedPassword = bcrypt.hashSync(password, 10)
            let new_user = new User({
                email,
                password/* : hashedPassword */,
                confirmpassword
            })
            new_user = await new_user.save()
            resp.status(200).json({ result: "registerd successfully" });
        }
    }
    catch (err) {
        resp.status(500).json({ msg: "Internal server error" });

    }
})
router.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body

        //verify email exist or not
        let userE = await User.findOne({ email: email })
        if (userE) {
            let userp = await User.findOne({ password: password })
            if (userp) {
                // If the email and password are correct, generate a JWT token
                const payload = {
                    usert: {
                        id: userp.id
                    }
                }
                Jwt.sign(payload, 'AJR', { expiresIn: 100 * 100 }, (err, token) => {
                    if (err) {
                        console.log(err)
                        resp.status(500).json({ msg: "JWT Token generation Err" })
                    }
                    resp.status(200).json({ token })
                })
            }
            else {
                resp.status(401).json({ mas: "incorrect password" })
            }
        }
        else {
            resp.status(401).json({ mas: "email/User not existed" })
        }
    }
    catch {
        console.log(err)
        resp.status(500).json({ msg: "An err acured due to login" })
    }

})
router.get('/myprofile',middleware, async (req, resp) => {

    let userx = User.findById(req.usert.id)
    try {
        if (!userx) {
            resp.status(400).json({ msg: "user not found" })
        }
        resp.json(userx)
    }
    catch (err) {
        console.log(err)
        return resp.status(500).send('server Eror')
    }
})

export default router