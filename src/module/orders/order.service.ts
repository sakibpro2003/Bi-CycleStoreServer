import Product from "../products/product.model";
import { userService } from "../products/product.service";
import IOrder from "./order.interface";
import Order from "./order.model";


const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { product, quantity } = payload;

  // Checking if product exists or not
  const productInStock = await Product.findById(product);
  if (!productInStock) {
    throw new Error("Product not found");
  }

  // Quantity is available in stock or not
  if (productInStock.quantity < quantity) {
    throw new Error("Insufficient stock available for the requested quantity");
  }

  // updating the inventory
  await userService.updateInventory(product, quantity);
  const result = await Order.create(payload);
  return result;
};

const calculateRevenue = async (): Promise<{ totalRevenue: number }> => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: "Products", 
        localField: "product",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails",
    },
    {
      $project: {
        totalPrice: {
          $multiply: ["$quantity", "$productDetails.price"],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" }, 
      },
    },
    {
      $project: {
        _id: 0, 
        totalRevenue: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0] : { totalRevenue: 0 };
};
export const orderService = {
  createOrder,
  calculateRevenue
};
