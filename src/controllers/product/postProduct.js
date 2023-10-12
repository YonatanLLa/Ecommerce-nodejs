import Product from "../../models/product.js";
import Category from "../../models/category.js";
import mongoose from "mongoose";

export const postProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, colors, images, categoryId } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw new Error("Asigna la categoria");
    }

    const categoryExist = await Category.findById(categoryId);

    console.log();

    if (!categoryExist) {
      throw new Error(`La categoria ${categoryId} no exist`);
    }

    const newProduct = new Product({
      name,
      description,
      price,
      sizes,
      colors,
      images,
      categories: categoryExist,
    });
  const productSave =   await newProduct.save();
    res.status(200).json(productSave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

