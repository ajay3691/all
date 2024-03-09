import express from 'express'
let router = express.Router()
import User from '../model/User.js'
//import bcrypt from 'bcrypt'

/* router.get("/all", (req, resp) => {
    console.log(`app - running!`)
    resp.send("Test API......")

}) */
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
        const { name, email, password } = req.body;
        //  user  exists or not
        let user = await User.findOne({ email: email });
        if (user) {
            return resp.status(401).json({ error: "User already exists" });
        }
        // const hashedPassword = await bcrypt.hashSync(password, salt);
        user = new User({ name, email, password /* : hashedPassword */ });
        user = await user.save();
        resp.status(200).json({ result: "registerd successfully", user: user });
    }
    catch (err) {
        resp.status(500).json({ msg: "Unable to register user", error: err.message });
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
                return resp.status(200).json({ msg: "Login Success" })
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

export default router