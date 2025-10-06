import express from 'express';
import { createShortUrl, RedirectUrl, createCustomShortUrl } from "../controllers/shortUrl.controller.js";
import {authMiddlewere} from '../middlewere/auth.middlewere.js';

const router = express.Router();

router.post("/create", authMiddlewere, createShortUrl);// http://localhost:4001/api/kt9D0fM
router.get("/:short_url", RedirectUrl);// 

router.post("/create-custom-url", authMiddlewere, createCustomShortUrl);// req.user is only set if your auth middleware runs before the controller and validates a JWT token (usually from Authorization header or a cookie).

export default router;