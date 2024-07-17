import express from "express";
import {
  getAllUsers,
  registerUser,
  loginUser,
} from "../Controllers/userController.js";
const router = express.Router();

router.get("/allUser", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
