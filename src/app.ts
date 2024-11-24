import express, { Request, Response } from "express";
import productRouter from "./module/products/product.router";
import orderRouter from "./module/orders/order.router";
const app = express();

app.use(express.json());
//Product related routes
app.use("/api/products", productRouter);

//Order related routes
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server running from",
  });
});
export default app;
