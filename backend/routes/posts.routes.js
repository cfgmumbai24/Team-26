import express from 'express';
import { createPost, getPosts } from '../controllers/posts.controller.js'

const router = express.Router();

router.post('/posts', createPost);
router.post("/",getPosts);

export default router;