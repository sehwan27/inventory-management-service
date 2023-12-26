import { Request, Response } from "express";
import categoryRepository from "../repositories/category.repository";

export const getCategories = async (req: Request, res: Response) => {
  const result = await categoryRepository.find();
  res.status(200).json(result);
};

export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await categoryRepository.findOne({ id });
  res.status(200).json(result);
};

export const createCategory = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await categoryRepository.create(payload);
  res.status(200).json(result);
};

export const updateCategory = async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.params;
  const result = await categoryRepository.findOneAndUpdate(
    { category_id: id },
    payload
  );
  res.status(200).json(result);
};
