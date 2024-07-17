import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "BLOG" }],
  },
  { timestamps: true }
);

const USER = mongoose.model("USER", userSchema);

export default USER;
