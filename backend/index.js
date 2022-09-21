import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//importing all Routes
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

//Intializing our application
const app = express();
dotenv.config();

//Connection Variable
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected Succesfully"))
    .catch((error) => {
      throw error;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/auth", authRoutes);

//extra middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    sucess: false,
    status,
    message,
  });
});

//setting our port
app.listen(8000, () => {
  connectDB();
  console.log("Connected!");
});
