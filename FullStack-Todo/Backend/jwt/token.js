import User from "../src/models/user.model.js";

export const generateAccessAndRefreshToken = async (userId) => {
  // here we will pass the user._id to find the user and genearte bhes tokens
  // generateAccessAndRefreshToken is not an Express route handler. it is a helper function no need of async halder because after using it in another function like login and register there the async hanlder automatically haldes it. try-catch when you want to catch and transform the error into something more meaningful for the calling function.

  try {
    // Mongoose automatically makes this method available on all document instances of that model.

    const user = await User.findById(userId);

    if (!user) throw new ApiError(404, "User not found");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // even if the access token expired the refresh token and access token will still be stored inside the cookie and jwt.verify() throw an TokenExpiredError
    // If refresh token expires → user must log in again with credentials. this will re genarte the access token and update the previous refresh token stored in database
    // jwt.verify comapres if refresh token saved in cookie and database if match then only it lets you pass
    // if access token is not expired the browser will automatically lets you in without re-putting the credentials

    /*
jwt.verify() checks if the access token is present and valid.
If the access token is valid → the user is allowed to enter the website.
If the access token is expired → it then checks if a refresh token is present.
If the refresh token is valid → jwt.verify verifies the refresh token, then compares it with the refresh token stored in the database.
If the refresh token is also expired → the user must re-enter their credentials. Logging in again will generate a new access token and refresh token, which are saved in the cookie, and the old refresh token in the database is updated with the new one.
In any case, the access token and refresh token are never removed from the cookie until new ones are issued to replace them.
*/

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong due to generating refresh and access token"
    );
  }
};

/*

import jwt from "jsonwebtoken";

export const = generateTokenAndSaveInCookies = (userId, res) => {
  
  const token = jwt.sign({
   
     userId,
     
  
  },
  process.env.JWT_SECRET_KEY,
  {
  expiredIn = "10d"
  }
  );

  res.cookie("jwt", token, {
   
     httpOnly: true,
     //expiredIn: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days expiry date 24 hours 60 min 60 seconds 1sec(1000 miliseconds)
     secure: false,
     sameSite: "lax",
     path: "/"
  })
  
  }

*/
