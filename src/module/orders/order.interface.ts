import { Types } from "mongoose";

interface IOrder {
  email: string;
  product: string;
  // product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IOrder;
