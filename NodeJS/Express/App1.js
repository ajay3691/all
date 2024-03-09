//we are intilizing express app
var express = require('express')
var app = express()
// Basic Routing
app.get("/", (req, res) => {
    res.end("Root Requst")
}) 
/* 
API URL: localhost:5000/user
method : Get
field : No Required
Access Type : Public   */
app.get("/user", (req, res) => {
    res.end("User Data")
})
app.get("/employee", (req, res) => {
    res.end("Employee Data")
})
app.get("/employee/deatailes", (req, res) => {
    res.send("Employee deatils")
})

app.listen(5000, (err) => {
    if (err) throw err
    console.log("Server is running on port number : 5000")
})