import Product from "../../models/product.js"

export const getAllProduct = async (req, res) =>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(200).json({error: "error"})
    }
}