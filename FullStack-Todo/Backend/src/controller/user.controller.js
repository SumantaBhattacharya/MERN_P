import User from "../models/user.model.js"; // Always include the file extension (.js) in imports when using ES modules in Node.js. This is a common source of errors.

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";
import { asyncHandler } from "../utils/asyncHandler.js"; // control  + i
import { registerUserSchema } from "../utils/validationSchema.js";

// In your user.controller.js file
import { generateAccessAndRefreshToken } from "../../jwt/token.js";

export const register = asyncHandler(async (req, res) => {
  // Zod Checks for Required Fields: By default, all fields in a Zod schema are required.
  /*if ([email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }*/

  const validationResult = registerUserSchema.safeParse(req.body); // "safe" parsing (doesn't throw error if validation fails)

  if (!validationResult.success) {
    // throw new ApiError(400, validationResult.error.message);
    // error is an object of objects and errors are individual objects stoing each object message naming them err to errorMessages
    const errorMessages = validationResult.error.errors.map(
      (err) => err.message
    ); // this error meesage are predefined by us in the utils > validation

    //throw new ApiError(400, "Validation failed", errorMessages);
    return res.status(400).json({
      errors: errorMessages,
    });
  }

  // console.log("Register function called");
  //const { email, username, password } = req.body; // req.body is coming from the client (like Postman) when you send a POST, PUT, or PATCH request.

  // IF VALIDATION PASSES, EXTRACT THE CLEAN, VALIDATED DATA
  const { email, username, password } = validationResult.data;

  /*
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  */

  // check if user already exists: username,email
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const newUser = await User.create({
    username: username,
    email: email,
    password: password,
  });

   // Generate tokens for the newly registered user
   const {accessToken, refreshToken} = generateAccessAndRefreshToken(newUser._id);


  // FETCH THE USER WITHOUT THE PASSWORD TO SEND IN RESPONSE
  // This is crucial because of `select: false` on the password field
  const createdUser = await User.findById(newUser._id).select("-password -refreshToken");

  return res
    .status(201)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/"
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/"
    })
    .json(new ApiResponse(201, "User registered successfully", createdUser));
});

export const login = asyncHandler(async (req, res) => {
  // console.log("Login function called-Request body:", req.body); // Log the entire request body

  const { email, password } = req.body;

  // console.log("Extracted -", "email:", email, "password:", password); // Log extracted values

  if (!email) {
    throw new ApiError(400, "email is not found");
  }

  /*
  // to find the previous password and email of the user we first need to find the user
  const user = await User.findOne({// overrode the select: false by doing .select("+password").
    $or: [{ username }, { email }], // + passowrd is due to the select were we removed the password from the database fetech (and client side in register)
  }).select("+password"); //finding on the basis of email || username

  if (!user) {
    throw new ApiError(401, "User does not exist");
  }
    */

  const user = await User.findOne({ email }).select("+password");

  // we could have also used directly bcrypt.compare doing the same job here
  // comparePassword is coming from user schema
  const isMatch = await user.comparepassword(password); // Mongoose automatically makes this method available on all document instances of that model.

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials, Password is incorrect");
  }

  // now we have to send the response to the client with the passowrd

  const userWithoutPassword = await User.findById(user._id).select("-password"); // Use _id for database operations (queries, updates)
  // user.password = undefined; // we could also done this doing the same thing

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: userWithoutPassword }, "Login successful")
    );// ApiResponse: status code, data, message
});

export const logout = asyncHandler(async (req, res) => {
  console.log("Logout function called");
});

/*
Intuition
Even if the refresh token expired from the cookie, it is still in the cookie and DB too. How is it expiring then? I know what I got is the refresh token stored in the cookie. After it expires, the previous token is still stored in the DB, but the cookie previously stored in the DB is used or just stored for validating the refresh token from the cookie. But when the refresh token from the cookie expires, doesn’t the refresh token from the DB become redundant? Saving it in the DB initially will be good to validate the refresh token from the cookie compared with the DB refresh token cookie. But when the user comes after so many days and inputs their credentials like email and password, they get a new access and refresh token, right? That refresh token has to be updated in the database refresh token. Isn’t the logic like this?
*/