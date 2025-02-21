import { Types } from "mongoose";

export type TOrder = {
  userId: Types.ObjectId;
  products: { productId: Types.ObjectId };
  totalPrice: number;
  quantity: number;
  paymentMethod: "bKash | Nagad | Cash on Delivery | Card";
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
};
