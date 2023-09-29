import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // Referencia al user
        ref: "User",
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity:{
                type: Number,
                required: true,
                default: 1,
            }
        }
    ],
    total: {
        type: Number,
        default: 0,
    }
})

export default mongoose.model("Cart", cartSchema)