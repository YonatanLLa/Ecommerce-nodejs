# Ecommerce de node js
    Es una tienda de ropas para varones
## 1.- Rutas
### Ruta inicial 
```js
use("/", userRouter);
use("/product", productRouter)
```
- Ruta para usuario
```js
get("/all", getAllProduct)
post("/create",postProduct )
post("/category", postCategory)
put("/:idCategory", putCategories)
```




