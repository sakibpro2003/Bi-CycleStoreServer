import express from "express";
import { AuthValidation } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../../app/middlewares/validateRequest";
import { UserController } from "../../User/user.controller";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post("/register", UserController.createUser);

export const AuthRoutes = router;
