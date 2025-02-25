import express from "express";
import auth from "../../app/middlewares/auth";
import { USER_ROLE } from "./user.constant";
import { UserController } from "./user.controller";
// import { AuthValidation } from "./auth.validation";
// import { AuthControllers } from "./auth.controller";
// import validateRequest from "../../../app/middlewares/validateRequest";
// import { UserController } from "../../User/user.controller";
// import auth from "../../../app/middlewares/auth";
// import { USER_ROLE } from "../../User/user.constant";

const router = express.Router();

router.get("/get-all-user", auth(USER_ROLE.ADMIN), UserController.getAllUser);
router.put("/change-user-status", auth(USER_ROLE.ADMIN), UserController.changeUserStatus);

// router.put(
//   "/change-password",
//   auth(USER_ROLE.CUSTOMER),
//   validateRequest(AuthValidation.passwordChangeValidationSchema),
//   UserController.changePassword
// );

// router.post("/register", UserController.createUser);

export const UserRoutes = router;
