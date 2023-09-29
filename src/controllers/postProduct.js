import Product from "../models/product";

export const postProduct = async (res, req) => {
  try {
    const { name, description, price, sizes, colors, images } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      sizes,
      colors,
      images,
    });
    await newProduct.save();
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};
