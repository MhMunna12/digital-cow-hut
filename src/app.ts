import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./middleware/globalErrorHandler";
import ApiError from "./errors/ApiError";
import { CowRoutes } from "./app/modules/cow/cow.route";
const app: Application = express();
const port = 5000;
//cors
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//application routes
app.use("/api/v1/users/", UserRoutes);
app.use("/api/v1/cow/", CowRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello cow!");
// });
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // throw new ApiError(400, "error");
  // next("error");
});
//global error handler
app.use(globalErrorHandler);

export default app;
