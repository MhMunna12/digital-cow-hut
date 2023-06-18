import { IUSer } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUSer): Promise<IUSer | null> => {
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error("Failed to create user");
  }
  return createdUser;
};
export const UserService = {
  createUser,
};
