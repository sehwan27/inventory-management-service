import { Router } from "express";
const router = Router();
import { createCategory, getCategories, getCategory, updateCategory } from "../controllers/categoryController";

router.post('/category', createCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategory);
router.put('/category/:id', updateCategory);

export default router;
