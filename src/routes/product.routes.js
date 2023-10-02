import { Router } from "express";
import { postProduct, postCategory } from "../controllers/product/postProduct.js"
import { getAllProduct } from "../controllers/product/getProducts.js"
import { putCategories } from "../controllers/product/putProducts.js"

const productRouter = Router()

productRouter.get("/all", getAllProduct)
productRouter.post("/create",postProduct )
productRouter.post("/category", postCategory)
productRouter.put("/:idCategory", putCategories)

export default productRouter