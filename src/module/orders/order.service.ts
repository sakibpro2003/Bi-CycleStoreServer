import httpStatus from "http-status";
import AppError from "../../app/error/AppError";
import Product from "../products/product.model";
import Order from "./order.model";
import { User } from "../User/user.model";
import { OrderPayload } from "../../types/OrderPayloadTypes";
import { ObjectId } from "mongoose";

const createOrder = async (payload: OrderPayload) => {
  if (!payload?.products?.length) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, "Order is not specified");
  }

  const getProductId = payload.products;
  const payloadQuantity = payload.quantity;
  const paymentMethod = payload.paymentMethod;
  const phone = payload.phone;
  const address = payload.address;
  const getProduct = await Product.findById(getProductId);
  if (!getProduct) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

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
    phone: payload.phone,
    address: payload.address,
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

const getOrders = async (userId:ObjectId) => {

  const orders = await Order.find(userId).populate("userId","-password").populate("products");
  // const orders = await Order.find().populate("userId").populate("products");
  return orders;
};

export const orderService = {
  createOrder,
  getOrders,
};
