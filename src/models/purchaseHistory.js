import mongoose from "mongoose";

const purchaseHistoryShema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // Refencia al modelo de Usuario
    ref: "User",
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      //Referencia al modelo de pedido   
      ref: "Order",
    },
  ],
});

export default mongoose.model("PurchaseHistory", purchaseHistoryShema)
