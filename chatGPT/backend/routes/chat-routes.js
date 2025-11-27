import express from "express";

import { chat, generate_chatId, chatToChatGPT } from "../controllers/chat-controller.js";

const router = express.Router();

// generate an id
router.post("/generate-chatId", generate_chatId);

// redirect the user to their personal chat
router.get("/:chatId", chat);

router.post("/chat-to-chatGPT", chatToChatGPT)

export default router;