import { Collection, model, Schema } from "mongoose";
import IProduct from "./product.interface";
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    type: {
      type:Schema.Types.ObjectId,
      required: true,
      trim: true,
      enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
    },
    description: { type: String, required: true, trim: true },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity must be a positive number"],
    },
    inStock: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: {
      createdAt: "created_at", // Custom name for createdAt
      updatedAt: "updated_at", // Custom name for updatedAt
    },
    collection: "Products",
  },
  
);
// db.getCollectionNames()


const Product = model<IProduct>("Product", productSchema);
export default Product;
