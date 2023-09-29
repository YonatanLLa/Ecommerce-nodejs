import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    // Refencia al model de usuario que hizo la reseña
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    // Referencia al modelo de producto que se esta calificando
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: String,
});

export default mongoose.model("Review", reviewSchema);
