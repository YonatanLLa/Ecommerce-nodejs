import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  expirationDate: Date,
});

export default mongoose.model("Discount", discountSchema);
