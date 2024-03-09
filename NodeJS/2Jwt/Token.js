// generate token
const jwt = require('jsonwebtoken')
let user = {
    email: "jai@gmail.com",
    password: "123"
}
let payload = {
    id: user.email,
}
let secreatKey = "Ajai"
let token = jwt.sign(payload, secreatKey, { expiresIn: 60 * 60 })
console.log(token)

//how to verify the token
jwt.verify(token,secreatKey,(err,newPayload)=>{
    if (err) throw err;
    console.log(newPayload)
})