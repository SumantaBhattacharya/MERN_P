import express from "express";

import { chat, generate_chatId, chatToChatGPT, generateThreadId } from "../controllers/chat-controller.js";

const router = express.Router();

// generate an id
router.post("/generate-chatId", generate_chatId);

router.route("/generate-threadId").get(generateThreadId);

router.post("/chat-to-chatGPT", chatToChatGPT)

// redirect the user to their personal chat
router.get("/:chatId", chat);

export default router;