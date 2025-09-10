import { Router } from "express";
import { productRoutes } from "../../module/products/product.router";
import { AuthRoutes } from "../../module/admin/Auth/auth.route";
import OrderRoutes from "../../module/orders/order.router";
import { UserRoutes } from "../../module/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/admin",
    route: UserRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
