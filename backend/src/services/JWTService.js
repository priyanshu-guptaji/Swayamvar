const jwt =require("jsonwebtoken")
const JWT_AUTH_KEY = process.env.JWT_AUTH
class JWTService{
    static generateToken(_id){
        // generate token logic here
        const token = jwt.sign({userId:_id} , JWT_AUTH_KEY ,{
            expiresIn:"30d"
        })
        return token
    }


    static validateToken(token){
        // generate token logic here
        const payload = jwt.verify(token , JWT_AUTH_KEY)

        return payload.userId
    }

}

module.exports = JWTService;