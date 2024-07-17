import { response } from "express";
import USER from "../Models/userModel.js";
import bcrypt from "bcrypt";

//get all user

export const getAllUsers = async (req, res) => {
  try {
    const users = await USER.find({});
    return res.status(200).json({
      sucess: true,
      message: "all user fetch sucessfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "error while fetching the user",
    });
  }
};

//register user

export const registerUser = async (req, res) => {
  try {
    //getting the data
    const { username, email, password } = req.body;

    //validation

    if (!username || !password || !email) {
      return res.json({
        sucess: false,
        message: "all fields are required",
      });
    }

    // checking already exist

    const existingUser = await USER.findOne({ email: email });

    if (existingUser) {
      return res.json({
        sucess: false,
        message: "user is already exist",
      });
    }

    // register the user
    const hashPassword = await bcrypt.hash(password, 10);
    const data = await USER.create({ username, email, password: hashPassword });
    return res.status(200).json({
      sucess: true,
      message: "user created sucessfuly",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "error while registering user",
    });
  }
};

//login user

export const loginUser = async (req, res) => {
  try {
    //getting the user
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).json({
        sucess: true,
        message: "all fields are required",
      });
    }

    // login the user
    const user = await USER.findOne({ email: email });

    if (!user) {
      return res.json({
        sucess: false,
        message: "user not found ",
      });
    }

    // checking the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        sucess: false,
        message: "password is incorrect",
      });
    }

    res.status(200).json({
      sucess: true,
      message: "user logedIn sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "error while login user",
    });
  }
};
