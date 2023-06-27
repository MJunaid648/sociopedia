import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "./posts.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();
// READ
router.get("/", verifyToken, getFeedPosts);
router.get("./:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);