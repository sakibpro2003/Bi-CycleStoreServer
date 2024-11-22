import express, { Request, Response } from "express";
import productRouter from "./module/products/product.router";
const app = express();


app.use(express.json())
app.use('/api/product',productRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server running fro",
  });
});
export default app;
