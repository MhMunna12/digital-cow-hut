import { RequestHandler } from "express";
import { CowService } from "./cow.service";

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const { ...cowData } = req.body;
    const result = await CowService.createCow(cowData);
    res.status(200).json({
      success: true,
      message: "cow created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const CowController = {
  createCow,
};
