// import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (isUrl) => {
    try{
        const response = await axiosInstance.post("/create", {// During production: proxy won’t exist, so CORS is required.
            url: isUrl
        })
         
        return response.data.data.shortUrl;
    }catch(err){
        console.error("Error creating short URL: ", err);
        throw err;
    }
}

export const createCustomShortUrl = async (isUrl, customUrl) => {
    try{
        const response = await axiosInstance.post("api/create-custom-url", {
            url: isUrl,
            customUrl: customUrl
        })
        return response.data.data.shortUrl;
    }catch(err){
        console.error("Error creating custom URL: ", err.message);
        throw err;
    }
};

/*
export const loginUser = async (password, email) => {

    const {data} = await axiosInstance.post("api/login", {

        email: email,
        password: password
    
    })
    
}

export const registerUser = async (username, email, password) => {

    const {data} = await axiosInstance.post("api/login", {

        username: username 
        email: email,
        password: password
    
    })
    
}

*/