import { Request, Response } from "express";
import Product from "./product.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await Product.create(payload);
    res.json({
      message: "success fully create",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "somthing went wrong",
      error,
    });
  }
};

export const productController = {
  createProduct,
};
