import Category from "../../models/category.js"

export const getAllCategory = async (req,res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category)
        console.log(category);
    } catch (error) {
        
    }
}