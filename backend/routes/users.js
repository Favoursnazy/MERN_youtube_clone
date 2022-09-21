import express from "express";

//importing user contollers
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscriber,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//update user
router.put("/update/:id", verifyToken, updateUser);

//delete user
router.delete("/delete/:id", verifyToken, deleteUser);

//get a single user
router.get("/find/:id", getUser);

//subscriber to a user
router.put("/subscribe/:id", verifyToken, subscriber);

//unsubscribe to a user
router.put("/unsubscribe/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
