import { Request, Response } from "express";
import Category from "../models/category";

export const getCategories = async (req: Request, res: Response) => {
  const result = await Category.find();
  res.status(200).json(result);
};
