import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // Referecia a user
        ref: "User",
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        // Referencia al modelo De Direction
        ref: "Address",
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "peding",   
    }
})

export default mongoose.model("Order", orderSchema)