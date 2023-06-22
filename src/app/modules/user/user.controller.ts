import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const user = req.body.user;
    console.log(user);
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: "user created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create user",
    });
  }
};
export const UserController = {
  createUser,
};
