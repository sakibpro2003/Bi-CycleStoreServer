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
      message: "Bicycles retrieved successfully",
      status: true,
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
    const productId = req.params.productId;
    const result = await userService.getSingleProduct(productId);
    res.json({
      message: "Bicycles retrieved successfully",
      status: true,
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
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await userService.updateProduct(productId,data);
    res.json({
      message: "Bicycle updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Product update failed!",
      error,
    });
  }
};


const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await userService.deleteProduct(productId);
    res.json({
      message: "Bicycle deleted successfully",
      status: true,
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Delete Failed",
      error,
    });
  }
};


export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
