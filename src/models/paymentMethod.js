import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cardHolderName: String,
  // Se debe considerar la seguridad de almacenamiento de datos sensibles
  cardNumber: String, 
  expirationDate: String,
  // Otros campos relevantes para tu sistema de pago
});

export default mongoose.model("PaymentMethod", paymentMethodSchema);
