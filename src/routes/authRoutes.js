import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";
// import { registerUser, loginUser } from "./controller/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
