import express from "express";
import { getUserProfile, loginUser, registerUser } from "../Controllers/userController.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";


const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/profile",authMiddleware,getUserProfile);

export default router;