import { Schema, model } from "mongoose";
import { CowModel, ICow } from "./cow.interface";

const CowSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: [
        "Dhaka",
        "Chattogram",
        "Barishal",
        "Rajshahi",
        "Sylhet",
        "Comilla",
        "Rangpur",
        "Mymensingh",
      ],
    },
    breed: {
      type: String,
      required: true,
      enum: [
        "Brahman",
        "Nellore",
        "Sahiwal",
        "Gir",
        "Indigenous",
        "Tharparkar",
        "Kankrej",
      ],
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Dairy", "Beef", "DualPurpose"],
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
export const Cow = model<ICow, CowModel>("Cow", CowSchema);
