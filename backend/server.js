import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bcrypt from "bcrypt";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(201).json({ succes: true, message: "Hello World" });
});

const PORT = process.env.PORT;

app.use("/api", userRoutes);

app.listen(PORT, console.log(`is running on port ${PORT}`));
