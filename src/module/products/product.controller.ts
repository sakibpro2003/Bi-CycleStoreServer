import { Request, Response } from "express";
import Product from "./product.model";
import { userService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createProduct(payload);
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
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await userService.getProduct();
    res.json({
      message: "Product retrieve successfull",
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
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    // const id = req.params;
    const result = await userService.getSingleProduct();
    res.json({
      message: "Product retrieve successfull",
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
  getProduct,
  getSingleProduct,
};
