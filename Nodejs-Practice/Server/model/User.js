import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
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
});
let User = mongoose.model('User', UserSchema)

export default User