import { Router } from "express";
const router = Router();
import { createUser } from "../controllers/userController";

router.post('/register', createUser);

export default router;
