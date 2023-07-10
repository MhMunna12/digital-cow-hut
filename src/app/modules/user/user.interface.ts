import { Model } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
};

export type IUser = {
  phoneNumber: string;
  role: "seller" | "buyer";
  password: string;
  name: UserName;
  address: string;
  budget: string;
  income: string;
};
export type UserModel = Model<IUser, object>;