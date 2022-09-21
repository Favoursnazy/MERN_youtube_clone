import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATING A USER ROUTE
router.post("/signup", signup);

//SIGN IN A USER ROUTE
router.post("/signin", signin);

//GOOLE SIGN IN ROUTE
router.post("/google", googleAuth);

export default router;
