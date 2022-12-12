import StudentAttendence from "../../Models/Attendence_model/Student-Attendence.js";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];
let date = date.format("D/MM/YYYY");
let time = d.toLocaleTimeString();
let dayType = "holiday";
if (day == "Sunday") {
  dayType = "weekend";
} else if (day == "Saturday") {
  dayType = "halfday";
} else {
  dayType = "workday";
}

export const giveattendence = async (req, res, next) => {
  try {
    const newdata = {
      userId: req.user.id,
      UserUuid: req.user.uuid,
      department: req.user.department,
      TeacherUserId: req.body.TeacherUserId,
      TeacherUuid: req.body.TeacherUuid,
      day: day,
      date: date,
      time: time,
      attendence: true,
      dayType: dayType,
    };
    console.log(newdata);
    const newAttendence = new StudentAttendence({ ...newdata });
    await newAttendence.save();
    res.status(200).send("Your Attendence is registered Successfully");
  } catch (error) {
    next(error);
  }
};

export const getallYourAttendence = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const userAttendence = await StudentAttendence.find({
        userId: req.params.id,
      });
      res.status(200).json(userAttendence);
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can view only Your Attendence",
      success: false,
    });
  }
};
