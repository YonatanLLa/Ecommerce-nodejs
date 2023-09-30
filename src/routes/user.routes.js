import { Router } from "express";
import { register, login } from "../controllers/user/postUser.js"; // Importa los controladores de "auth.js"
import { profile } from "../controllers/user/getProfile.js";

const userRouter = Router();

userRouter.post("/sign-up", register);
userRouter.get("/profile", profile);
userRouter.get("/login", login)

export default userRouter;
