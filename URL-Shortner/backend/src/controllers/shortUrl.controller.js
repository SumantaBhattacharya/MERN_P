// import { nanoid } from "nanoid";
import { getShortUrl } from "../dao/shortUrl_db.js";
import { BadRequestError } from "../utils/ApiError.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { shortUrlServiceWithoutUser, shortUrlServiceWithUser } from "../services/short_url.service.js";

const createShortUrl = asyncHandler(async (req, res) => { // Controller → no next, no try/catch, just throw errors.
  // req.body comes in post, req.querry comes in get

  // console.log(req.user._id); 
  // console.log(req.user.username); 
  
  const { url } = req.body; // without destructure { url: 'https://www.google.com' }

  if (!url) {
    throw new BadRequestError("URL is required");
  }

  // console.log("url", url);

  let shortUrl; // ← Declare variable outside if/else

  if(req.user){// Set by your auth middleware after verifying JWT token
    shortUrl = await shortUrlServiceWithUser(url, req.user._id); // passing user id to the service
  }else{
    shortUrl = await shortUrlServiceWithoutUser(url);
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { shortUrl: process.env.API_URL + "api/" + shortUrl }, "URL shortened successfully"));

});

const RedirectUrl = asyncHandler(async (req,res)=>{
  const {short_url} = req.params; // :short_url

  if (!short_url) {
    throw new BadRequestError("Short URL parameter is required");
  }

  const url = await getShortUrl(short_url);
  // console.log(url);
  
  if(url){//when it is matching the id it is redirecting the the saved full-url
    return res.redirect(url.full_url);
  }else{
    throw new ApiError(404, "Short URL not found");
  }

})

const createCustomShortUrl = asyncHandler(async (req, res) => {

  // hardcoded
  // req.user = { _id: "64cfa07ace29b0dbada30060" }; // access token is not in cookie so postman will not work operations are done by access token only

  // getting url and customUrl from React
  const { url, customUrl } = req.body; // Destructure both url and customUrl from the request body

  // Validation using ApiError
  if (!url || !customUrl) {
    throw new BadRequestError("Both URL and custom customUrl are required");
  }

  if(req.user){// Set by your auth middleware after verifying JWT token
    const shortUrl = await shortUrlServiceWithUser(url, req.user._id, customUrl); // Pass customUrl to the service
   
    console.log("Generated shortUrl:", shortUrl);

    return res
      .status(201)
      .json(new ApiResponse(201, { shortUrl: process.env.API_URL + "api/" + shortUrl }, "Custom URL shortened successfully"));
  }else {
      // If user is not authenticated, return 401 Unauthorized
      return res.status(401).json(new ApiError(401, "Unauthorized: Only authenticated users can create custom URLs."));
    }

});

export { createShortUrl, RedirectUrl, createCustomShortUrl };