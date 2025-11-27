import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResposne.js";
import { ApiError } from "../utils/ApiError.js";

import { generateNanoId } from "../utils/helper.js";

import path from 'path';
import { fileURLToPath } from 'url';

import { generate } from "../chatbot.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generate_chatId = asyncHandler(async (req, res) => {
    const chatId = generateNanoId(35);

    return res.status(200).json(new ApiResponse(200, {chatId}, "Chat ID generated successfully"));

})

// The URL itself is your persistence mechanism
// we needing the fileURLToPath for only this controller
export const chat = asyncHandler(async (req, res) => {
    
    const { chatId } = req.params;

    // console.log('__dirname:', __dirname);
    // console.log('Target path:', path.join(__dirname, '../../chat.html'));
    
    return res.sendFile(path.join(__dirname, '../../chat.html'));

})

export const chatToChatGPT = asyncHandler(async (req, res) => {
    const {msg, threadId} = req.body;
    
    // todo: validate above fields
    if (!msg || !threadId) {
        return res.status(400).json(new ApiError(400, "All fields are required"));
    }
    
    console.log('Message: ', msg);
    
    const result = await generate({userMessage: msg, threadId});

    return res.status(200).json(new ApiResponse(200, {message: result}, "Message received successfully"));
});
