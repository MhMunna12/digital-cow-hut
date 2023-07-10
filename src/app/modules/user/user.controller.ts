import { RequestHandler } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (req, res, next) => {
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
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createUser,
};
