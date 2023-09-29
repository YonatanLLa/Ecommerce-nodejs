import { Router } from "express";
import { postProduct, postCategory } from "../controllers/postProduct.js"
const productRouter = Router()

productRouter.post("/create",postProduct )
productRouter.post("/category", postCategory)

export default productRouter