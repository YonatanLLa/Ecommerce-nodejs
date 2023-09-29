import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  street: String,
  city: String,
  zipCode: String,
  // Otros campos relacionados con la dirección
});

export default mongoose.model("Address", addressSchema);
