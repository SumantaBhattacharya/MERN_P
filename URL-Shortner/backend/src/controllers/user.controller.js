import { ApiResponse } from "../utils/ApiResposne.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { registerUserValidationSchema } from "../utils/validationSchema.js";
import { registerUser, loginUser, logoutUser, refreshAccessTokenService, changeCurrentPasswordService, updateAccountDetailsService } from "../services/auth.service.js";

import {cookieOptions} from "../config/config.js";

export const register = asyncHandler(async (req, res) => {

    // console.log("Request body:", req.body);
    // console.log("Request headers:", req.headers);

    const validateUserInfo = registerUserValidationSchema.safeParse(req.body);

    if (!validateUserInfo.success) {

        // console.log("Validation error:", validateUserInfo.error);
        // console.log("Error structure:", JSON.stringify(validateUserInfo.error, null, 2));
        
        const errorMessages = validateUserInfo.error.issues.map((err) => err.message);

        return res
        .status(400)
        .json(new ApiResponse(400, errorMessages, "Validation failed"));
    }

    // or we could have de-structured here too
    const newUser = await registerUser(validateUserInfo.data);

    // the re-direction is handled in frontend
    return res
        .status(201)
        .cookie("refreshToken", newUser.refreshToken, cookieOptions)
        .json(new ApiResponse(201, {
            user: newUser.user, 
            accessToken: newUser.accessToken 
        }, "User registered successfully"));
});


export const login = asyncHandler(async (req, res) => { 

    const {user, accessToken, refreshToken} = await loginUser(req.body);

    // set the refresh token in cookie
    res.status(200)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(new ApiResponse(200, {user, accessToken}, "User logged in successfully")); // not saving the access token in cookie instead sending it in json

});

export const logout = asyncHandler(async (req, res) => {

    /*
    if (!req.body) {
        throw new ApiError(400, "Request body is required");
    }

    const { userId } = req.body;
    
    await logoutUser(userId);
    */

    await logoutUser(req.user._id);

    res
    .status(200)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
})

export const refreshAccessToken = asyncHandler(async (req, res) => {
    // access through cookies
    // const {refreshToken} = req.cookies;

   const incomingRefreshToken = req.cookies.refreshToken;

   const {accessToken, refreshToken} = await refreshAccessTokenService(incomingRefreshToken);

    return res
    .status(200)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(new ApiResponse(200, { accessToken }, "Access token refreshed successfully"));

})

export const changeCurrentPassword = asyncHandler(async(req,res) => {

    // we will be sending oldPassword and newPassword thorugh postman
    const {oldPassword, newPassword} = req.body;

    // userId comes from auth middleware (req.user._id), This waits for the service to complete
    const result = await changeCurrentPasswordService(req.user._id, {oldPassword, newPassword})// directly sending the value

    return res.status(200)
        .json(new ApiResponse(200, {}, result.message));

})

export const getCurrentUser = asyncHandler(async (req, res) => {
    // req.user is already set by auth middleware and should not contain password/refreshToken
    return res.status(200)
        .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

export const updateAccountDetails = asyncHandler(async (req, res) => {
    // takes the fields of the model from the req.body that allowed to change by the user in a de-structured way
    const {username, email} = req.body;

   // to update it user details it will takes the user id and hes/her field values and wait for the service to complete. the req.user come from middlewere
   const updatedUserAccountDetails = await updateAccountDetailsService(req.user._id, {username, email});// we are not de-strcuturing here

   return res.status(200).json(new ApiResponse(200, updatedUserAccountDetails.user, updatedUserAccountDetails.message));

})