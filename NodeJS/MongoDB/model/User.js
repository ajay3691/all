import mongoose from "mongoose";
let userSchema = mongoose.Schema({
    email: {
        type: String, // Specify the data type for the email field (e.g., String)
        required: true, // Make the email field required
        unique: true, // Ensure email uniqueness
        lowercase: true, // Store emails in lowercase
        trim: true // Trim whitespace from the beginning and end of email
    },
    password: {
        type: String, // Specify the data type for the password field (e.g., String)
        required: true // Make the password field required
    }
})
let User = mongoose.model("users", userSchema)

export default User
//SQL
/*
create table user(email varchar(32), mobile int)
*/
