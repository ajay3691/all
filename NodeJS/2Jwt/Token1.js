const jwt = require('jsonwebtoken');

let user = {
  email: "jai@gmail.com",
  password: "123"
};

// Generate the token

/*const secretKey = 'ccccfds'; 
  const expiresIn = 60 * 60;  */
jwt.sign(user, 'ccccfds', { expiresIn: 60 * 60 }, (err, token) => {
  if (err) throw err
  console.log(token)
});