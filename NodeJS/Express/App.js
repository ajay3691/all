//es6
//import express from "express";
//Es 5 -notation
const express = require("express")
const app = express()

//app.post("/signup",()=>{})
app.post("/signup", (req, res) => {
    //busines logic insert data         
    res.send("User registerd Succesfully")
})
app.get("/", (req, res) => {
    res.send(`<h1>Hello, Root Requirment</h1>`)
})


app.listen(5000, (err) => {
    if (err) throw err
    console.log("server running on port Number")
})