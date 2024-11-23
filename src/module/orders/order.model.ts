import { model, Schema } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true, unique: true },
  product: { type: String },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const Order = model<IOrder>("Order", orderSchema);
export default model;
