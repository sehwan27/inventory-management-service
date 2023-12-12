import { Router } from "express";
const router = Router();
import { getCategories } from "../controllers/categoryController";

router.get('/', getCategories);

export default router;
