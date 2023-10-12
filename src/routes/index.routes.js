import { Router } from "express";
// import register from "../controllers/auth.controllers.js"; // Importa los controladores de "auth.js"
import userRouter from "./user.routes.js"
import productRouter from "./product.routes.js"
import cartRouter from "./cart.routes.js";
const router = Router();

router.use("/", userRouter);
router.use("/product", productRouter)
router.use("/cart", cartRouter)


export default router;