import Product from "../../models/product.js"

export const getAllProduct = async (req, res) =>{
    try {
        const products = await Product.find()
        const productHome = products.map((product)=>({
            name: product.name,
            price: product.price,
            images: product.images
        }))
        console.log(productHome);
        res.status(200).json(productHome)
    } catch (error) {
        res.status(200).json({error: "error"})
    }
}

export const getAllProductDetail = async (req, res) => {
    const {idDetail} = req.params
    try {
        
        const productDetail = await Product.findById( idDetail)
        
        if (!productDetail) {
            throw new Error("Producto no encontrado")
        }
        res.status(200).json(productDetail)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: "ID inválido" });
          }
        res.status(404).json({error: error.message})
    }
}

