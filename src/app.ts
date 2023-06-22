import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
const app: Application = express();
const port = 5000;
//cors
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//application routes
app.use("/api/v1/users/", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello cow!");
});

export default app;
