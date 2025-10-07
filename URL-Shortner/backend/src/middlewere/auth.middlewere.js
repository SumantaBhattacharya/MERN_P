// its a middlewere so it will include next
import jwt from "jsonwebtoken";
import { findUserById } from "../dao/user.dao.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// i. Extract Token
// ii. Check if Token Exists
// iii. Verify Token. jwt.verify will check if the access token matched to the environment variable signature
// iv. Find User in Database
// vi. Check if user Exists
// v. remove the stored password and refresh token when fetching the user

export const authMiddlewere = asyncHandler(async (req, res, next) => {
    try{

        //  "Authorization" (Standard HTTP header spelling)
        const token = req.header("Authorization")?.replace("Bearer ", ""); // extracting the token from the header

        if(!token){
            throw new ApiError(401, "Unauthorized access");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // if the token is valid it will return the decoded token else it will throw an error

        const user = await findUserById(decodedToken?._id); // finding the user by id from the decoded token

        if(!user){
            // asyncHandler will catch the error and format it consistently means no need of this return res.status(401).json({ message: "Unauthorized" });
            throw new ApiError(401, "Invalid access token");
        }

        const userObject = user.toObject(); // Convert mongoose document to plain object
        delete userObject.password; // Remove password field
        delete userObject.refreshToken; // Remove refreshToken field if it exists

        req.user = userObject; // attaching the user to the request object so that we can access it in the next middlewere or controller

        next(); // calling the next middlewere or controller

    }catch(err){
        // next(err);
        /*
        if (err.name === 'JsonWebTokenError') {
        throw new ApiError(401, "Invalid token");
        }
        if (err.name === 'TokenExpiredError') {
        throw new ApiError(401, "Token expired");
        }
        */
        throw new ApiError(401, err?.message || "Invalid access token ")
    }
});