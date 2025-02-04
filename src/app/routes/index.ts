import { Router } from "express";
// import { BlogRoutes } from "../module/Blog/blog.route";
// import { AuthRoutes } from "../module/Auth/auth.route";
// import { AdminRoutes } from "../module/admin/admin.route";
import { productRoutes } from "../../module/products/product.router";
import { AuthRoutes } from "../../module/admin/Auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
  // {
  //   path: "/admin",
  //   route: AdminRoutes,
  // },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
