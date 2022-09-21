import Users from "../models/Users.js";
import Video from "../models/Video.js";
import { createError } from "../utils/errors.js";

export const addVideo = async (req, res, next) => {
  const newvideo = new Video({ userId: req.user.id, ...req.body });

  try {
    const savedVideo = await newvideo.save();

    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(400, "Video was not found!"));

    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You cant Update This video!!"));
    }
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(400, "Video was not found!"));

    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);

      res.status(200).json("Video has been delted!");
    } else {
      return next(createError(403, "You cant delete This video!!"));
    }
  } catch (error) {
    next(error);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(400, "Video does not exist!"));

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const addViews = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    if (!video) return next(createError(400, "The views has been increased!"));

    res.status(200).json(video);
  } catch (error) {}
};

export const trendingVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });

    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const randomVideos = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([
      {
        $sample: { size: 40 },
      },
    ]);

    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const subVideos = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};

export const tagsVideos = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);

    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const searchVideos = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    });

    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
