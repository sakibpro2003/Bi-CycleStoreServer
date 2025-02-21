import { Types } from "mongoose";

const paymentMethods = ["bKash", "Nagad", "Cash on Delivery", "Card"] as const;

type PaymentMethod = (typeof paymentMethods)[number];

export type OrderPayload = {
    userId:Types.ObjectId | undefined;
  products: string;
  totalPrice: Number;
  quantity: Number;
  paymentMethod: PaymentMethod;
};
