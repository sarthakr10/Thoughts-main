import express from "express";
import {
  allBlogs,
  deleteBlog,
  createBlog,
  singleBlog,
  updateBlog,
  userAllBlogs,
} from "../Controllers/blogController.js";

const router2 = express.Router();

router2.get("/allBlogs", allBlogs);
router2.delete("/delete/:id", deleteBlog);
router2.post("/createBlog", createBlog);
router2.get("/singleBlog/:id", singleBlog);
router2.put("/updateBlog/:id", updateBlog);
router2.delete("/deleteBlog/:id", deleteBlog);
router2.get("/userBlogs/:id", userAllBlogs);

export default router2;
