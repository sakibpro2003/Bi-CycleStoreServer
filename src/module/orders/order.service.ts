import Product from "../products/product.model";
import { userService } from "../products/product.service";
import IOrder from "./order.interface";
import Order from "./order.model";


const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { product, quantity } = payload;

  // Check if product exists
  const productInStock = await Product.findById(product);
  if (!productInStock) {
    throw new Error("Product not found");
  }

  // Check if the order quantity is available in stock
  if (productInStock.quantity < quantity) {
    throw new Error("Insufficient stock available for the requested quantity");
  }

  // Update the inventory by reducing the stock
  await userService.updateInventory(product, quantity);
  
  // Create the order after inventory is updated
  const result = await Order.create(payload);
  return result;
};

// const createOrder = async (payload: IOrder): Promise<IOrder> => {
//   const { product, quantity } = payload;
//   await userService.updateInventory(product, quantity);
  
//   const result = await Order.create(payload);
//   return result;
// };
const calculateRevenue = async (): Promise<{ totalRevenue: number }> => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: "Products", // Matches the defined collection name in product model
        localField: "product", // Matches the product field in orders
        foreignField: "_id", // The _id field in Products collection
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails", // Flatten productDetails array
    },
    {
      $project: {
        totalPrice: {
          $multiply: ["$quantity", "$productDetails.price"], // price * quantity
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" }, // Sum totalPrice across orders
      },
    },
    {
      $project: {
        _id: 0, // Exclude _id
        totalRevenue: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0] : { totalRevenue: 0 }; // Default to 0 if no data
};
export const orderService = {
  createOrder,
  calculateRevenue
};
