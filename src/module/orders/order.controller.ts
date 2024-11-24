import { Request, Response } from "express";
import { orderService } from "./order.service";


//Order create response
const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.createOrder(payload);
    res.json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    res.json({
      message: "Order creation failed",
      status: false,
      data: errorMessage,
    });
  }
};


const getRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderService.calculateRevenue();
    res.json({
      message: "Revenue calculated successfully",
      status: true,
      data: { revenue },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to calculate revenue",
      status: false,
      error: error.message,
    });
  }
};
export const orderController = {
  createOrder,
  getRevenue,
};
