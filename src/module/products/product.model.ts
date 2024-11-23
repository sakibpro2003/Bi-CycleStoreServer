import { model, Schema } from "mongoose";

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  type: {
    type: String,
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
});

const Product = model<IProduct>("Product", productSchema);
export default Product;