import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({ path: './config/config.env' })
let port = process.env.PORT
let host = process.env.HOSTNAME

let server = http.createServer((req, resp) => {
    let url = req.url
    console.log(url)

   // if (url === '/') {
        //fs.readFile(path.join(__dirname, "views", "index.html"), 'utf-8', (err, data) => {//es5..type:module pakage.json
        fs.readFile(path.join("views", "index.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
   // }
     if (url === "/contact") {
         fs.readFile(path.join( "views", "contact.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     }
     if (url === "/login") {
         fs.readFile(path.join( "views", "login.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     }
     if (url === "/about") {
         fs.readFile(path.join( "views", "about.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     }
     if (url === "/services") {
         fs.readFile(path.join( "views", "services.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     }
     if (url === "/employees") {
         fs.readFile(path.join( "views", "employees.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     }
     if (url === "/product") {
         fs.readFile(path.join( "views", "product.html"), 'utf-8', (err, data) => {
             resp.writeHead(200, { 'Content-Type': "text/html" })
             resp.end(data)
         })
     } 

})

server.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running sunday also: http://${host}:${port}`)

})
