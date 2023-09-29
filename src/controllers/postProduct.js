import Product from "../models/product.js";
import Category from "../models/category.js"

export const postProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, colors, images } = req.body;

    console.log({ name, description, price, sizes, colors, images });

    const newProduct = new Product({
      name,
      description,
      price,
      sizes,
      colors,
      images,
    });
    await newProduct.save();
    res.status(200).json({message: "Producto registrado correctamente"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export const postCategory = async (req, res) => {
  try {
    const { name } = req.body
    const newCategoria = new Category({
      name
    })
    await newCategoria.save()
    res.status(200).json({messge: "Category created"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}