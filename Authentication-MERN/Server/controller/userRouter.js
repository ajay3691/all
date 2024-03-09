import express from 'express'
let router = express.Router()
import User from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import middlewere from './middlewere.js'

router.get("/users", async (req, resp) => {
    try {
        let user = await User.find({ User: User });
        resp.status(200).json(user);
    } catch (err) {
        resp.status(500).json({ errors: [{ msg: " Server Error" }] });
    }
});

router.delete("/:id", async (req, resp) => {
    try {
        let userid = req.params.id;
        let user = await User.findByIdAndDelete(userid)
        resp.status(200).json({ msg: "Delete buddy" })
    }
    catch (err) {
    }
})
/* 
use : create new user 
url:localhost:8080/user/add
method:POST
req fields:name,email, password
*/
router.post("/register", async (req, resp) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        //  user  exists or not
        let user = await User.findOne({ email: email });
        if (user) {
            return resp.status(401).json({ error: "User already exists" });
        }
        if (password !== confirmpassword) {
            return resp.status(401).json({ error: "Passwords not match" });
        }
        let hashedPassword = bcrypt.hashSync(password, 10)

        let newuser = new User({
            name,
            email,
            password: hashedPassword,
            confirmpassword
        });
        newuser = await newuser.save();
        resp.status(200).json({ result: "registerd successfully" });
    }
    catch (err) {
        resp.status(500).json({ msg: "Internal server error" });
    }
});


router.post("/login", async (req, resp) => {
    try {
        let { email, password } = req.body
        // verify email exists or not
        let user = await User.findOne({ email: email })
        if (user) {
            // compare  password
            let user = await User.findOne({ password: password })
            if (user) {
                // If the email and password are correct, generate a JWT token
                const payload = {
                    usert: {
                        id: user.id
                    },
                };
                // jwt.sign({ id: user.id }, 'AJR', { expiresIn: 60 * 60 }, (err, token) => {
                jwt.sign(payload, 'AJR', { expiresIn: 60 * 60 }, (err, token) => {
                    if (err) {
                        console.log("jwt token err")
                        return resp.status(500).json({ msg: "JWT token generation error" });
                    }
                    return resp.status(200).json({ token });
                    // return resp.status(200).json({ msg: "Login Success" })
                });
            }
            else {
                return resp.status(401).json({ msg: "Incorrect password" })
            }

        }
        else {
            return resp.status(401).json({ msg: "Email/user account not exist" })
        }
    }
    catch (err) {
        console.error(err)
        resp.status(500).json({ msg: "An error occurred during login" })
    }
})
// Protected route: Access user's profile
router.get("/myprofile", middlewere, async (req, resp) => {
    try {
        let userx = await User.findById(req.usert.id)
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

export default router