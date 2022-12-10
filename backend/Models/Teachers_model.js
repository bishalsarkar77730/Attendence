// import mongoose from "mongoose";

// const TeacherSchema = new mongoose.Schema(
//   {
//     UuIds: {
//       type: String,
//       require: true,
//       unique: true,
//     },
//     classes: {
//       type: [String],
//     },
//     subjects: {
//       type: [String],
//     },
//     attendence: {
//       type: [String],
//     },
//     studentAtt: {
//       type: [String],
//     },
//   },
//   {
//     toJSON: {
//       transform(doc, ret) {
//         delete ret.createdAt;
//         delete ret.updatedAt;
//         delete ret.__v;
//       },
//     },
//     timestamps: true,
//   }
// );

// export default mongoose.model("Teacher", TeacherSchema);
