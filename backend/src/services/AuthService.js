const { UserModel, ProfileModel } = require("../models");
const ApiError = require("../utils/ApiError");
const {default:httpStatus} = require("http-status");
const bcrypt = require("bcrypt");
const JWTService = require("./JWTService");
class AuthService{

    static async registerUser(body){

        const {name,email,password} =body
        // check user is already exist or not 
       
        const checkExist = await UserModel.findOne({email:email.toLowerCase()})
        if(checkExist){
            throw new ApiError(httpStatus.BAD_REQUEST,"User Is Already Exist with this Email Account ")
        }
        // create new user
         const user =  await UserModel.create({
            name,
            email,
            password
        })
        // create a profile model
        await ProfileModel.create({
            user:user_id
        })




    
            // email for verification
            // jwt token for login
            const token = await JWTService.generateToken(user_id)

        return {
            "msg":"User Register Successfully"
            token
        }
    }


    static async loginUser(body){
        const {email,password} = body
        const user = await UserModel.findOne({email:email.toLowerCase()})
        if(!user){
            throw new ApiError(httpStatus.BAD_REQUEST,"User Is Not Exist with this Email Account ")
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Credentials")
        }

        // generate jwt token

        const token = await JWTService.generateToken(user_id)
        // return token
        return {
            msg:"Login Success",
            token
        }
    }
}

module.exports = AuthService;