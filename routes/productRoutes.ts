import { Router } from "express";
const router = Router();
import { createProduct, getProducts, getProduct, updateProduct } from "../controllers/productController";

router.post('/product', createProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);

export default router;
