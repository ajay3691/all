//Es5
const fs = require('fs')

// read file synchrones
let data = fs.readFileSync("abc.txt", "utf-8")
console.log(data)

//write file 
fs.writeFileSync('xyz.txt', data)
console.log("Written Successfully")



//read file asynchrones
fs.readFile("abc.txt", "utf-8", (err, newData) => {
    //if (err) throw err
    console.log(newData)

    //Write file
    fs.writeFile("one.txt", newData,'utf-8', (err) => {
        if (err) throw err
        console.log("Writing file succesfully")
    })
}) 
