import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"


export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.Header("Authorization")?.replace("Bearer","");
    
        if(!token){
            throw new ApiError(401,"UNauthorized request")
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findOne(decodedToken?._id).select(
            "-password -refreshToken"
        
        )
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token")
        }
        req.user = user;
        next();
    } 
    catch (error) {
        throw new ApiError(401, error?.message||"INavlid access Token")
    }
});