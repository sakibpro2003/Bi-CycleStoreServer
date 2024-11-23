import { Router } from "express";
import { productController } from "./product.controller";

const productRouter = Router()

productRouter.post('/create-product',productController.createProduct)
productRouter.get('/',productController.getProduct)
productRouter.get('/:productId',productController.getSingleProduct)

export default productRouter;