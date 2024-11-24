import { model, Schema, Types } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    
    email: { type: String, required: true },
    // product: { type: String },
    product: { type: Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at", 
      updatedAt: "updated_at", 
    },
  }
);

const Order = model<IOrder>("Order", orderSchema);
export default Order;
