import Users from "../models/Users.js";
import Video from "../models/Video.js";
import { createError } from "../utils/errors.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      //sending response
      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    return next(createError(403, "You can only update your account!"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await Users.findByIdAndDelete(req.params.id);

      //sending response
      res.status(200).json("User has been deleted");
    } catch (error) {}
  } else {
    return next(createError(403, "You can only delete your account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) return next(createError(400, "User does not exist!!"));

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const subscriber = async (req, res, next) => {
  try {
    await Users.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });

    await Users.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Subscribed Successfully");
  } catch (error) {
    next(error);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    await Users.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });

    await Users.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });

    res.status(200).json("unSubscribed Successfully");
  } catch (error) {
    next(error);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;

  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { disLikes: id },
    });

    res.status(200).json("video has benn liked!");
  } catch (error) {
    next(error);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;

  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { disLikes: id },
      $pull: { likes: id },
    });

    res.status(200).json("video has benn disliked!");
  } catch (error) {
    next(error);
  }
};
