import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    }
})
let User = mongoose.model ("userReg",userSchema)
 
/* let productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    }
})
let Product = mongoose.model ("userProduct", productSchema)
  */
export default User