import express from "express";
// Corrected the import path for userControllers.js
import { handleContactForm, handleSubscribeEmail, loginUser, myProfile,  signUpUser,  verifyUser } from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",signUpUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);
router.post("/handleSubscribe",handleSubscribeEmail);
router.post("/contact",handleContactForm);

export default router;
