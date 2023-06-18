import { Schema, model } from "mongoose";
import { IUSer, UserModel } from "./user.interface";

const userSchema = new Schema<IUSer, UserModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["seller", "buyer"],
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    income: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUSer, UserModel>("User", userSchema);
