import mongoose from "mongoose";

const userShema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match:  /^\S+@\S+\.\S+$/
        },
        password:{
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        address: {
            street: String,
            city: String,
            zipCode: String
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order"
            }
        ]

    },{
        timestamps: true
    }
)

export default mongoose.model('User', userShema)