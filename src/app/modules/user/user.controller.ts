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
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();
  res.status(200).json({
    success: true,
    message: "User retrieved successfully!",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getSingleUser(id);
  res.status(200).json({
    success: true,
    message: "Single User retrieved successfully!",
    data: result,
  });
});
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await UserService.updateUser(id, updateData);
  res.status(200).json({
    success: true,
    message: "Update User successfully!",
    data: result,
  });
});
export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
};
