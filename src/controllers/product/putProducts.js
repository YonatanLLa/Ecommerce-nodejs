import Category from "../../models/category.js";

export const putCategories = async (req, res) => {
  const { idCategory } = req.params;
  const { name } = req.body;

  try {
    if (!name) throw new Error("nombre no introducido");
    const nameCategory = name.toUpperCase().trim();
    if (!idCategory) throw new Error("Id del parametro no enviado");

    const editProduct = await Category.findById(idCategory);
    if (!editProduct) {
      throw new Error("Dato no encontrado");
    }

    const updatedCategory = await Category.findOneAndUpdate(
      { _id: idCategory },
      { $set: { name: nameCategory } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Categoría actualizada", category: updatedCategory });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
