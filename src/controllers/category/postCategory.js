import Category from "../../models/product.js"

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
  