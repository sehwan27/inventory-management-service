import { Router } from "express";
const router = Router();

import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import userRoutes from './userRoutes'
import { authentication } from "../middleware/authentication";

// sequence matters
router.use('/', userRoutes)
router.use('/', categoryRoutes)
router.use('/', authentication, productRoutes)

export default router;
