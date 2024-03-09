import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
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
    },
})
let Product = mongoose.model("userProduct", productSchema)

export default Product