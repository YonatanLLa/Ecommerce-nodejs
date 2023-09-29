import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        // Referecia a la categoria
        ref: "Category"
    },
    sizes: [String],
    colors: [String],
    images: [String],
    inventory: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            // Referecia al review
            ref: "Review"
        }
    ]
})

export default mongoose.model("Product", productSchema)