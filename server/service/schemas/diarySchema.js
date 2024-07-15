import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    date: {
      type: String,
      default: null,
      required: [true, "=> date is required"],
    },
    dailyRate: {
      type: Number,
      default: null,
      required: [true, "=> is required"],
    },
    left: {
      type: Number,
      default: null,
      required: [true, "=> is required"],
    },
    consumed: {
      type: Number,
      default: null,
      required: [true, "=> is required"],
    },
    rateOfNormal: {
      type: String,
      default: null,
      required: [true, "=> is required"],
    },
    products: [
      {
        name: {
          type: String,
          default: null,
          required: [true, "=> is required"],
        },
        grams: {
          type: Number,
          default: null,
          required: [true, "=> is required"],
        },
        kcal: {
          type: Number,
          default: null,
          required: [true, "=> is required"],
        },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false }
);

const DiaryDate = model("diary-date", schema);

export default DiaryDate;
