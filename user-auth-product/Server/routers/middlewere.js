import jwt from 'jsonwebtoken'

//const middleware = function (req, resp, next) {
// export default function (req, resp, next) {
function middleware(req, resp, next) {
    try {
        let token = req.header('x-token')
        if (!token) {
            return resp.status(400).send("Token Not found")
        }

        // Verify and decode the JWT token
        let decode = jwt.verify(token, 'AJR')

        // Attach the user data from the payload to req.user
        req.userT = decode.userT
        next()
    }
    catch (err) {
        console.log(err)
        return resp.status(400).send("invalid token")
    }
}
export default middleware



