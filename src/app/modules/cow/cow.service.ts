import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

const createCow = async (payload: ICow): Promise<ICow> => {
  const result = await Cow.create(payload);
  return result;
};

type IGenericResponses<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

// type ICowFilters = {
//   searchTerm?: string;
// };
const getAllCow = async (
  // filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponses<ICow[]>> => {
  // const { searchTerm } = filters;

  // console.log(searchTerm);
  // const cowSearchAbleFields = ["location", "breed", "category"];
  // const andConditions = [];
  // if (searchTerm) {
  //   andConditions.push({
  //     $or: cowSearchAbleFields.map((field) => ({
  //       [field]: {
  //         $regex: searchTerm,
  //         $operator: "i",
  //       },
  //     })),
  //   });
  // }
  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         location: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //       {
  //         breed: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //       {
  //         category: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //     ],
  //   },
  // ];

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await Cow.find().sort(sortConditions).skip(skip).limit(limit);
  const total = await Cow.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id);
  return result;
};
const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const CowService = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
};
