import express from 'express';
import { getChatbotResponse } from '../controller/chatbotController.js';

const router = express.Router();

router.post('/', getChatbotResponse); // Route for receiving messages

export default router;
