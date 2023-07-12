import { NextFunction, Request, Response } from "express";
import { CowService } from "./cow.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { ICow } from "./cow.interface";

const createCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...cowData } = req.body;
    const result = await CowService.createCow(cowData);
    res.status(200).json({
      success: true,
      message: "cow created successfully!",
      data: result,
    });
    next();
  }
);
const getAllCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, [
      "page",
      "limit",
      "sortBy",
      "sortOrder",
    ]);
    const result = await CowService.getAllCow(paginationOptions);
    sendResponse<ICow[]>(res, {
      statusCode: 200,
      success: true,
      message: "Cow retrieved successfully!",
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);
export const CowController = {
  createCow,
  getAllCow,
};
