import { Document, Types } from "mongoose";
interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  type: string;
  // type: Types.ObjectId;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: Date;
  updatedAt?: Date; 
}
export default IProduct;


