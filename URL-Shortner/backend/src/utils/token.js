import {User} from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
// import jwt from "jsonwebtoken";

export const generateAccessAndRefreshToken = async (userId) => {
    // here we will pass the user._id to find the user and genearte the tokens
    // generateAccessAndRefreshToken is not an Express route handler. it is a helper function no need of async halder because after using it in another function like login and register there the async hanlder automatically haldes it. try-catch when you want to catch and transform the error into something more meaningful for the calling function.

    try {
        // Mongoose automatically makes this method available on all document instances of that model.

        const user = await User.findById(userId);

        if(!user) throw new ApiError(404,"User not found");

        const accessToken = user.generateAccessToken(); 
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave:false});

        return {accessToken,refreshToken};

    }catch(error){
        throw new ApiError(500,"Something went wrong due to generating refresh and access token: " + error.message);
    }
}