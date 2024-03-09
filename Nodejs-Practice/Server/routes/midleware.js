import Jwt from "jsonwebtoken";

function middleware(req, resp, next) {
    try {
        let token = req.header('x-token')
        if (!token) {
            return resp.status(400).send("Token Not found")
        }
        // Verify and decode the JWT token
        let decode = Jwt.verify(token, 'AJR')

        req.usert = decode.usert
        next()
    }
    catch (err) {
        console.log(err)
        return resp.status(400).send("invalid token")
    }

}
export default middleware