import mongoose from "mongoose";

const CollageAttendenceSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    UserUuid: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      require: true,
    },
    Day: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    attendence: {
      type: Boolean,
      default: false,
    },
    leaveType: {
      type: Boolean,
      default: false,
    },
    dayType: {
      type: String,
      enum: ["holiday", "weekend", "halfday", "workday"],
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

export default mongoose.model("CollageAttendence", CollageAttendenceSchema);
