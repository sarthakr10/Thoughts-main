import BLOG from "../Models/blogModel.js";
import USER from "../Models/userModel.js";

// get all blogs
export const allBlogs = async (req, res) => {
  try {
    const data = await BLOG.find({});

    if (!data) {
      return res.status(200).json({
        sucess: false,
        message: "no blogs found",
      });
    }

    return res.status(200).json({
      sucess: true,
      noOfBlogs: data.length,
      message: "all blog fetch sucess fully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to fetch data",
    });
  }
};

// create blog
export const createBlog = async (req, res) => {
  try {
    const { title, description, image, uid } = req.body;

    //validation
    if (!title || !description || !image || !uid) {
      return res.json({
        sucess: false,
        message: "all fields required",
      });
    }

    const data = await BLOG.create({ title, description, image, author: uid });

    const updateUser = await USER.findByIdAndUpdate(
      { _id: uid },
      { $push: { blogs: data._id } },
      { new: true }
    );

    return res.json({
      sucess: true,
      message: "blog created sucessfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to create blog",
    });
  }
};

//update blogs

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    const data = await BLOG.findByIdAndUpdate(
      { _id: id },
      { title, description, image },
      { new: true }
    );

    return res.status(200).json({
      sucess: true,
      massage: "blog updated sucessfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to update blog",
    });
  }
};

//get single blog

export const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BLOG.findById({ _id: id });

    return res.status(200).json({
      sucess: true,
      message: "sucessfully fetched",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to fetch blog",
    });
  }
};

//delete blog

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BLOG.findOneAndDelete({ _id: id }).populate("author");

    await USER.updateOne({ _id: data.author._id }, { $pull: { blogs: id } });
    return res.status(200).json({
      sucess: true,
      message: "sucessfully deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to delete blog",
    });
  }
};

// find all blogs of user
export const userAllBlogs = async (req, res) => {
  try {
    const data = await USER.findById(req.params.id).populate("blogs");
    if (!data) {
      return res.status(404).json({
        sucess: false,
        message: "blog or user not found",
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "all blogs fetch sucessfully",
      totalBlogs: data.blogs.length,
      data: data.blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "unable to find blog",
    });
  }
};
