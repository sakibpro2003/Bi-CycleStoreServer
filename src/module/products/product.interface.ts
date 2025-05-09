import { Document, Types } from "mongoose";
interface IProduct extends Document {
  name: string;
  brand: string;
  discount:number;
  price: number;
  type: string;
  description: string;
  quantity: any;
  inStock: boolean;
  createdAt?: Date;
  updatedAt?: Date; 
}
export default IProduct;


