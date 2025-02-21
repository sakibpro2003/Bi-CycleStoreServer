import httpStatus from "http-status";
import AppError from "../../app/error/AppError";
import Product from "../products/product.model";
import Order from "./order.model";
import { User } from "../User/user.model";
import { OrderPayload } from "../../types/OrderPayloadTypes";

const createOrder = async (payload: OrderPayload) => {
  if (!payload?.products?.length) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, "Order is not specified");
  }

  const getProductId = payload.products;
  const payloadQuantity = payload.quantity;
  const paymentMethod = payload.paymentMethod;
  const getProduct = await Product.findById(getProductId);
  if (!getProduct) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  // if (typeof getProduct.quantity !== "number") {
  //   throw new AppError(
  //     httpStatus.INTERNAL_SERVER_ERROR,
  //     "Product quantity is missing or invalid"
  //   );
  // }
  const availableQuantity = getProduct?.quantity as Number;
  if (payloadQuantity > availableQuantity) {
    throw new AppError(
      httpStatus.CONFLICT,
      `${availableQuantity} products in stock. But you have ordered ${payload.quantity}`
    );
  }

  const order = await Order.create({
    userId: payload.userId,
    products: payload.products,
    totalPrice: payload.totalPrice,
    quantity: payload.quantity,
    paymentMethod: paymentMethod,
  });

  if (getProduct) {
    getProduct.quantity -= payload.quantity as number;
  }

  if (getProduct.quantity === 0) {
    getProduct.inStock = false;
  }
  await getProduct?.save();

  return order;
};

// const getOrders = async () => {
//   const orders = await Order.find().populate("user").populate("products.product");
//   return orders;
// };

export const orderService = {
  createOrder,
  // getOrders,
};
