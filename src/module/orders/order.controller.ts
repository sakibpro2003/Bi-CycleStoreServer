import { Request, Response } from "express";
// import { OrderService } from "./order.service"; // Assuming OrderService handles DB logic
// import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { orderService } from "./order.service";
import { User } from "../User/user.model";
import { OrderPayload } from "../../types/OrderPayloadTypes";
import { ObjectId } from "mongoose";

//productId, userId,totalPrice
const createOrder = catchAsync(async (req: Request, res: Response) => {
  // Ensure req.user exists and contains _id
  // console.log(req.user, "from controller");
  if (!req.user) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized: User ID not found in token.",
    });
  }
  const email = req.user.email;
  const getUser = await User.findOne({ email: email });
  const userId = getUser?._id;
  const products = req.body.products;
  const totalPrice = req.body.totalPrice;
  const quantity = req.body.quantity;
  const paymentMethod =  req.body.paymentMethod;
  console.log(userId)
  const payload:OrderPayload = {
    quantity,
    products, totalPrice,
    userId,
    paymentMethod,
  }


  const newOrder = await orderService.createOrder(payload);

  return res.status(httpStatus.CREATED).json({
    success: true,
    message: "Order created successfully!",
    data: newOrder,
  });
});

// const getOrders = catchAsync(async (req: Request, res: Response) => {
//   const orders = await orderService.getOrders();
//   return res.status(httpStatus.OK).json({
//     success: true,
//     message: "Orders retrieved successfully!",
//     data: orders,
//   });
// });

export const orderController = {
  createOrder,
  // getOrders,
};
