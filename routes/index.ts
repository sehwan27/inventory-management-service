import { Router } from "express";
const router = Router();

import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import userRoutes from './userRoutes'

router.use('/', categoryRoutes)
router.use('/', productRoutes)
router.use('/', userRoutes)

export default router;
