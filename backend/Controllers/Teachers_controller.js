// import Teacher from "../Models/Teachers_model.js";

// export const addTdata = async (req, res, next) => {
//   if (req.params.id === req.user.id) {
//     const newdata = new Teacher({
//       UuIds: req.user.uuid,
//       ...req.body,
//     });
//     try {
//       const saveTeacher = await newdata.save();
//       res.status(200).json(saveTeacher);
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     return res.status(400).json({
//       message: "You can update only your account!",
//       success: false,
//     });
//   }
// };

// export const updateTeacher = async (req, res, next) => {
//   if (req.params.id === req.user.id) {
//     try {
//       const dataupdata = {
//         classes: req.body.classes,
//         subjects: req.body.subjects,
//         attendence: req.body.attendence,
//         studentAtt: req.body.studentAtt,
//       };
//       const updatedTeacher = await Teacher.findByIdAndUpdate(
//         req.params.id,
//         { ...dataupdata },
//         { new: true }
//       );
//       res.status(200).json(updatedTeacher);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return res.status(400).json({
//       message: "You can update only your account!",
//       success: false,
//     });
//   }
// };
