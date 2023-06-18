import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { ...userData } = req.body;
    const result = await UserService.createUser(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to create user",
    });
  }
};
export const UserController = {
  createUser,
};
