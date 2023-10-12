import { Router } from "express";
import {postCarts} from "../controllers/cart/postCarts.js"

const cartRouter = Router()

cartRouter.post("/add/:productId", postCarts)

export default cartRouter;