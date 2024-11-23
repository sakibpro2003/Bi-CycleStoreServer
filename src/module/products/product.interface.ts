import { Document } from "mongoose";
interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: Date; // Custom name for createdAt
  updatedAt?: Date; // Custom name for updatedAt

}
export default IProduct;


