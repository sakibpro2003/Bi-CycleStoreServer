import { Router } from "express";
import { orderController } from "./order.controller";
import { orderService } from "./order.service";

const orderRouter = Router();

orderRouter.post('/',orderController.createOrder);
// orderRouter.get('/revenue', orderController.getRevenue);
orderRouter.get("/revenue", orderController.getRevenue);

export default orderRouter;