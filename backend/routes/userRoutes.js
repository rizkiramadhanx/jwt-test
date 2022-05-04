import express from "express";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json({
      message: "add data success",
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    res.status(401).json(error);
  }
});

router.post("/users/:id", async (req, res) => {
  const id = req.params.id;
  const token = req.body.token;

  if (!token) {
    res.status(501).json({ message: "maaf token disi duluu" });
  }
  try {
    let decoded = jwt.verify();
  } catch (error) {
    console.log(error);
  }
});

export default router;
