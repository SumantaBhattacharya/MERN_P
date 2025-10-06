import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { checkCustomShortUrl_slug, saveShortUrl } from "../dao/shortUrl_db.js";
import { BadRequestError } from "../utils/ApiError.js";

export const shortUrlServiceWithoutUser = async (url) => {
  try {
    // Check if URL already exists in database
    const existingUrl = await urlSchema.findOne({ full_url: url });

    if (existingUrl) {
      return existingUrl.short_url;
    }

    const shortUrl = generateNanoId(7);

    if(!shortUrl){
      throw new BadRequestError("URL is required");
    }

    // console.log(shortUrl);

    await saveShortUrl(shortUrl, url)

    return shortUrl;

  } catch (error) {
    throw new ApiError(500, "Failed to create short URL", [error.message]);
  }
};

// only the registered user can create the custom-url
export const shortUrlServiceWithUser = async(url, userId, customUrl = null) => {// it is not required to always pass customUrl, so it is null by default

  // if the custom url is null then it will take generateNanoId(7)
  let slug = customUrl || generateNanoId(7);

  // console.log("2. Slug:", slug);

  const CustomShortUrl_slugExists = await checkCustomShortUrl_slug(customUrl);

  if(CustomShortUrl_slugExists){
    throw new BadRequestError("Custom URL slug already exists. Please choose a different one.");
  }// my persnsal inituition was that a random id will be genearted first the the custom url will be not but what we actually doing is we are directly assigning either custom short url or generated random short url

  await saveShortUrl(slug, url, userId);

  return slug;// returning either the random or custom slug

}