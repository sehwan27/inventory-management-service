import { Router } from "express";
const router = Router();
import { createUser, loginUser } from "../controllers/userController";

router.post('/register', createUser);
router.post('/login', loginUser);

export default router;
