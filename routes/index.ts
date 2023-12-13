import { Router } from "express";
const router = Router();
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'

router.use('/', categoryRoutes)
router.use('/', productRoutes)

export default router;
