import { Router } from "express";
import { postProduct } from "../controllers/product/postProduct.js";
import { postCategory } from "../controllers/category/postCategory.js";
import { getAllProduct, getAllProductDetail } from "../controllers/product/getProducts.js";
import { putCategories } from "../controllers/category/putCategory.js";
import { getAllCategory } from "../controllers/category/getCategory.js";

const productRouter = Router();

// Product
productRouter.get("/all", getAllProduct);
productRouter.get("/all/:idDetail", getAllProductDetail);

productRouter.post("/create", postProduct);

//Category
productRouter.get("/category", getAllCategory);
productRouter.post("/category", postCategory);
productRouter.put("/:idCategory", putCategories);

export default productRouter;
