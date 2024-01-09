import { Request, Response } from "express";
import UserService from "../services/userService";
import userRepository from "../repositories/user.repository";
const userService = new UserService();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const payload = { name, email, password: hashedPassword };

    const result = await userService.createNewUser(payload);
    res.status(201).json("User registered successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const foundUser = await userRepository.findOne({ email });
    if (!foundUser) return res.status(401).send("User not found");

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ userId: foundUser.id }, "secretKey", {
      expiresIn: "1h",
    });
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
