import express, { Request, Response } from "express";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser"; // For ES6
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bi-cycle-store-client-red.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api", router);

//Not Found Middleware
app.use("*", notFound);

app.use((err: any, req: Request, res: Response, next: express.NextFunction) => {
  globalErrorHandler(err, req, res, next);
});

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server running",
  });
});

export default app;
