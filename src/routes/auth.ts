import { register } from "@/controllers/users";
import { Router } from "express";
const router = Router();

router.post("/register", register);

export default router;
