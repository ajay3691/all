//create server -http: node js core module 
const http = require("http")

const server = http.createServer((req, resp) => {
   // resp.writeHead(200, { "Content-Type": "text/plain" })
    resp.end("Hello, HTTP Server") //(`<h1>Hello http Server</h1>`)
}) 

server.listen(8000, (err) => {
    if (err) throw err
    console.log("Server running...")//(`Server is Running on : http://localhost:8080`)
})
