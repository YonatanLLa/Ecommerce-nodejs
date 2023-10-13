import { Router } from "express";
import {getCart, postCarts} from "../controllers/cart/postCarts.js"

const cartRouter = Router()

cartRouter.get("/", getCart)
cartRouter.post("/add/:productId", postCarts)

export default cartRouter;