import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  // console.log(user);
  const result = await User.create(user);
  console.log("result", result);
  if (!createUser) {
    throw new ApiError(400, "Failed to create user!");
  }
  return result;
};
const getAllUser = async () => {
  const result = await User.find({});
  return result;
};
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};
export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
};
