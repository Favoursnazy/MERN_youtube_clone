import Jwt from "jsonwebtoken";
import { createError } from "./errors.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  //if there is no token
  if (!token) return next(createError(401, "You are not authenticated!"));

  //if there is a token, verify first
  Jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));

    req.user = user;
    next();
  });
};
