import { Router } from "express";
import {register} from "../controllers/user/postUser.js"; // Importa los controladores de "auth.js"

const userRouter = Router()

userRouter.post("/sign-up", register)

export default userRouter