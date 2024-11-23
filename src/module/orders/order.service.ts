import { userService } from "../products/product.service";
import IOrder from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { product, quantity } = payload;
  await userService.updateInventory(product, quantity);
  const result = await Order.create(payload);
  return result;
};

export const orderService = {
  createOrder,
};
