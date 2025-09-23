// import User from "../src/models/user.model.js"

// import { ApiError } from "../src/utils/ApiError.js"
// import { asyncHandler } from "../src/utils/asyncHandler.js"
// // no need of api response in verify token as we are not going to send a user repond of it

// export const verifyToken = asyncHandler(async (req, res, next)=>{

//     const token = req.cookies?.

// })

/*
req.header("Authorization") generating suppose like this "Bearer eyJhbGciOiJIUzI1NiIs..." 
.replace("Bearer ", "") removes the "Bearer " part, leaving only the raw token.
*/