import express from "express";
import {
  addVideo,
  addViews,
  deleteVideo,
  getVideo,
  randomVideos,
  searchVideos,
  subVideos,
  tagsVideos,
  trendingVideos,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";

//importing user contollers
import {} from "../controllers/video.js";

const router = express.Router();

//Post a video
router.post("/upload/", verifyToken, addVideo);

//delete video
router.delete("/delete/:id", verifyToken, deleteVideo);

//edit video
router.put("/edit/:id", verifyToken, updateVideo);

//get a video
router.get("/find/:id", getVideo);

//get views of video
router.put("/views/:id", addViews);

//get trending videos
router.get("/trend", trendingVideos);

//random videos
router.get("/random", randomVideos);

//subscribed channels
router.get("/sub", verifyToken, subVideos);

//get videos by tags
router.post("/tags", tagsVideos);

//get vides by title
router.post("/search", searchVideos);

export default router;
