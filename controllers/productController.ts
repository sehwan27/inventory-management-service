import { Request, Response } from "express";
import productRepository from "../repositories/product.repository";

export const getProducts = async (req: Request, res: Response) => {
  const result = await productRepository.find();
  res.status(200).json(result);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await productRepository.findOne({ product_id: id });
  res.status(200).json(result);
};

export const createProduct = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await productRepository.create(payload);
  res.status(200).json(result);
};

export const updateProduct = async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.params;
  const result = await productRepository.findOneAndUpdate(
    { product_id: id },
    payload
  );
  res.status(200).json(result);
};
