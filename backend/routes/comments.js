import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../utils/verifyToken.js";

//importing user contollers

const router = express.Router();

//add a comment
router.post("/", verifyToken, addComment);

//get comments
router.get("/:id", verifyToken, getComments);

//delte comments
router.delete("/:id", verifyToken, deleteComment);

export default router;
