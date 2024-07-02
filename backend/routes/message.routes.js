import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
// protectRoute is the authentication middleware to make sure the sender is logged in and assign user data to the request
router.post("/send/:id", protectRoute, sendMessage);

export default router;
