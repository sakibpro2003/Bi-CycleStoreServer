import express, { Request, Response } from "express";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app = express();

app.use(express.json());

// API Routes
app.use("/api", router);

// 404 Not Found Middleware
app.use("*", notFound); // ✅ Fix applied here

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server running",
  });
});

export default app;
