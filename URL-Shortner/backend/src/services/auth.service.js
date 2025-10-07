import { ConflictError } from "../utils/ApiError.js";
import { findUser, createUser, findUserById, removeRefreshToken, updateCurrentPassword, updateUserDetails } from "../dao/user.dao.js";
import { generateAccessAndRefreshToken } from "../utils/token.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = async ({username, email, password }) => {

    // 1. Check if user already exists
    const existedUser = await findUser({username, email}); // username: username, email: email

    if (existedUser) {// dont auto login here if the user exists i. Account Enumeration: Attackers can discover which emails/username are registered ii. This still reveals account existence through timing attacks
        throw new ConflictError("User with this username or email already exists");
    }

    const newUser = await createUser({
        username,
        email,
        password
    })

    // if the user comes directly into login page without registeration the auth meddilewere wont provide the user with email name is exits
    
    // auto-login after registration
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(newUser._id);

    // Remove sensitive data
    const currenntUser = newUser.toObject();
    delete currenntUser.password;
    delete currenntUser.refreshToken;

    return {
        user: currenntUser,
        accessToken,
        refreshToken
    };

}

export const loginUser = async({email, password})=>{ // const {username, password} = req.body

    // got the username and password now i. fetch the user information and compare the credentions for that i.i. we need to first find the user
    const user = await findUser({email});// find the user on the basis of hes username 

    if(!user){
        throw new ConflictError("User does not exist");
    }

    // to comapre hes password we will use the custom methods we defined earlier in user schema 
    const isPasswordValid = await user.comparePassword(password); // Use the comparePassword method on the user instance
    // comapre the user hashed password with the new input password 
    
    if(!isPasswordValid){
        throw new ConflictError("Invalid user credentials");
    }

    // generate access token and refresh token
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

    // Get user without sensitive data - FIXED THIS LINE
    const loggedInUser = user.toObject(); // Convert mongoose document to plain object
    delete loggedInUser.password; // Remove password field
    delete loggedInUser.refreshToken; // Remove refreshToken field if it exists

    return {
        user: loggedInUser,// Clean user data for UI
        accessToken, // For API authentication
        refreshToken // For getting new access tokens
    };// not saving it on db just sending the tokens

};

export const logoutUser = async(userId) => {
    await removeRefreshToken(userId);
    return { success: true };
}

export const refreshAccessTokenService = async(incomingRefreshToken) => {

    if(!incomingRefreshToken){
        throw new ConflictError("No refresh token provided");
    }

    // it's using the environment variable as the secret key to verify the token's cryptographic signature stored in cookies
   const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

   const user = await findUserById(decodedToken?._id);

  if (!user) {
    throw new ApiError(401, "User not found");
  }

  // comapring the incoming refresh token with the one stored in the database
  if (incomingRefreshToken !== user?.refreshToken) {
    throw new ApiError(401, "Refresh token expired or reused");
  }else{
    // generate access token and refresh token
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);
    return { accessToken, refreshToken };
  }

}


export const changeCurrentPasswordService = async(userId, {oldPassword, newPassword}) =>{
    
    const user = await findUserById(userId);
    
    // Compare entered oldPassword with stored hashed password - if the old password mathces with the saved password then only the user can change hes current password to a new password
    const isPasswordCorrect = await user.comparePassword(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
    }

    await updateCurrentPassword(userId, newPassword)
    return { message: "Password changed successfully" };
}

export const updateAccountDetailsService = async(userId, {username, email}) => {

    if (!username && !email) {
        throw new ApiError(400, "At least username or email is required"); // since the user may update just one field.
    }

    const user = await updateUserDetails(userId, {username, email});

    return {user,  message: "Account details updated successfully" };

}

