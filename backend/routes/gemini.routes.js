import express from 'express';
import { generateContent } from '../controllers/gemini.controller.js'

const router = express.Router();

router.post('/gemini', generateContent);

export default router;