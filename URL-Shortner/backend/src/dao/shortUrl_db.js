import urlSchema from "../models/shorturl.model.js";// data access object

export const saveShortUrl = async (shortUrl, fullUrl, userId) => {
  const newUrl = new urlSchema({// newUrl is an instance
    full_url: fullUrl,
    short_url: shortUrl,
  });

  // we the userid doesnt come it will bypass this if condition
  if (userId) {// here we are saving the url user
    newUrl.user_id = userId;
  }
  
  // If save() throws (e.g., DB connection error, duplicate key), the caller can catch it. controller is already wrapped with asyncHandler, so the error will go to your errorHandler middleware automatically (controller, then asyncHandler → errorHandler.).
  await newUrl.save(); // MongoDB generates _id here
  
};

export const getShortUrl = async (shortUrl) => {
  const url = await urlSchema.findOneAndUpdate({
    short_url: shortUrl,
  },{// increment
    $inc: {clicks: 1}
  });

  return url;
}

export const checkCustomShortUrl_slug = async (slug) => {
  // console.log("Checking slug in database:", slug);
  const url = await urlSchema.findOne({
    short_url: slug,
  });

  // console.log("Database query result:", url);
  return url;
}