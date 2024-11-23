import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try{
    const payload = req.body;
  const result = await orderService.createOrder(payload);
  res.json({
    message: "Order created successfully",
    status: true,
    data: result,
  });
  }catch(error){
    res.json({
        message: "Order created failed",
        status: false,
        data: error,
      });
  }
};


export const orderController = {
    createOrder,
}
