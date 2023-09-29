import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Shipping", shippingSchema);
