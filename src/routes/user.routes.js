import { Router } from "express";
import { register, login, logout } from "../controllers/user/postUser.js"; // Importa los controladores de "auth.js"
import { profile } from "../controllers/user/getProfile.js";
import {authRequired} from '../middlewares/validateToken.js'

const userRouter = Router();

userRouter.post("/sign-in", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/profile", authRequired ,profile);

export default userRouter;
