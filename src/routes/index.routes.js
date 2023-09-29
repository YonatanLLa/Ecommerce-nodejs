import { Router } from "express";
// import register from "../controllers/auth.controllers.js"; // Importa los controladores de "auth.js"
import userRouter from "./user.routes.js"

const router = Router();

router.use("/", userRouter);


export default router;