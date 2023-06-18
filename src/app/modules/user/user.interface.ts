import { Model } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
};
export type IUSer = {
  phoneNumber: string;
  role: "seller" | "buyer";
  password: string;
  name: UserName;
  address: string;
  budget: string;
  income: string;
};

export type UserModel = Model<IUSer, Record<string, unknown>>;
