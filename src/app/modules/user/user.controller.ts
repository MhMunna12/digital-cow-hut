import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user;
    // console.log(user);
    const result = await UserService.createUser(user);

    res.status(200).json({
      success: true,
      message: "cow created successfully!",
      data: result,
    });
    next();
  }
);
export const UserController = {
  createUser,
};
