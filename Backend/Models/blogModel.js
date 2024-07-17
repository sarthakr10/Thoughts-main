import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requird: [true, "title is required"],
    },
    description: {
      type: String,
      requird: [true, "description is required"],
    },
    image: {
      type: String,
      requird: [true, "image link is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER",
      requird: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

const BLOG = mongoose.model("BLOG", blogSchema);

export default BLOG;
