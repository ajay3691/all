import mongoose from 'mongoose'

//create schema and mode 

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }, //unique:true
    password: { type: String, required: true },
   confirmpassword: { type: String, required: true }
})
let User = mongoose.model("usersReg", userSchema)  //collection name

export default User