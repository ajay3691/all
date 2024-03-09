const bcrypt = require('bcrypt')
let user = {
    name: "Srikanth",
    email: "sri@gmail.com",
    password: "123"
}
let salt = bcrypt.genSaltSync(10)
console.log(user)     /// get same data******

let newPassword = bcrypt.hashSync(user.password, 10)
console.log(newPassword) // get hsed password

let new_Password = bcrypt.hashSync(user.password, salt)
console.log(new_Password) // get hsed password

let new_Email = bcrypt.hashSync(user.email, salt)
console.log(new_Email) // get hsed Email

user = { ...user, password: new_Password }
console.log(user)  // get same tosame hasesd password********


if(bcrypt.compareSync("123",user.password)){
    console.log("Password-matched")   
}
else{
    console.log("Password-Not match")
}