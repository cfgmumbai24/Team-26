import express from "express";
import { 
    createUser,
    getProfile,
    login
 } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup",createUser);
router.post("/login",login);
router.get("/profile",getProfile);


export default router;
