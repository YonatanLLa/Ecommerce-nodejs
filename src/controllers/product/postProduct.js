import Product from "../../models/product.js";
import Category from "../../models/category.js";
import mongoose from "mongoose";

export const postProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, colors, images, ...categoryId } =
      req.body;

    console.log({
      name,
      description,
      price,
      sizes,
      colors,
      images,
      categoryId,
    });

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw new Error("Asigna la categoria");
    }

    const categoryExist = await Category.findById(categoryId);

    console.log(new mongoose.Types.ObjectId(categoryExist));

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
      category: categoryExist,
    });
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new Error("Nombre de categoría no proporcionado");
    }

    const nameCategory = name.toUpperCase().trim();
    const verifyCategory = await Category.findOne({ name: nameCategory });

    if (verifyCategory) throw new Error("Categoria existente");

    const newCategoria = new Category({
      name: nameCategory,
    });
    await newCategoria.save();
    res.status(200).json({ messge: "Category created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
