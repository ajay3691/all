import express from 'express'
import User from "../model/User.js"

let router = express.Router()

//impliment user Apis
router.get("/", (req, resp) => {
    resp.status(200).json({ "masg": "Hello,GM" })
})
router.get("/all", async (req, resp) => {
    try {
        let users = await User.find()
        resp.status(200).json(users)
    }
    catch(err) {
       resp.status(500).json({msg:err})
    }
})
export default router