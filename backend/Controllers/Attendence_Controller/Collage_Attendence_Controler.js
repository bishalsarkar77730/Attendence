import CollageAttendence from "../../Models/Attendence_model/Collage-Attendence.js";
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
      day: day,
      date: date,
      time: time,
      attendence: true,
      dayType: dayType,
    };
    console.log(newdata);
    const newAttendence = new CollageAttendence({ ...newdata });
    await newAttendence.save();
    res.status(200).send("Your Attendence is registered Successfully");
  } catch (error) {
    next(error);
  }
};

export const getUserAttendence = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const userAttendence = await CollageAttendence.find({
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

// Admin

export const assignLeave = async (req, res, next) => {
  try {
    const profile = await CollageAttendence.findOne({ UuId: req.params.UuId });
    if (profile) {
      if (profile.leaveType == false) {
        profile.leaveType = true;
      } else if (profile.leaveType == true) {
        profile.leaveType = false;
      } else {
        profile.leaveType = profile.leaveType;
      }
      const result = await profile.save();
      return res.status(200).json(result.leaveType);
    }
  } catch (error) {
    next(error);
  }
};

export const getallattendence = async (req, res, next) => {
  try {
    const attendence = await CollageAttendence.find();
    res.status(200).json(attendence);
  } catch (error) {
    next(error);
  }
};

export const getSingleUserAttendence = async (req, res, next) => {
  try {
    const singleAttendence = await CollageAttendence.find({
      UuId: req.params.UuId,
    });
    res.status(200).json(singleAttendence);
  } catch (error) {
    next(error);
  }
};

export const getAllStudentAttendence = async (req, res, next) => {
  try {
    const allattendence = await StudentAttendence.find();
    res.status(200).json(allattendence);
  } catch (error) {
    next(error);
  }
};

// Admin + Teacher

export const getsinglestudentAllAttendence = async (req, res, next) => {
  try {
    const singleAttendence = await StudentAttendence.find({
      UuId: req.params.UuId,
    });
    res.status(200).json(singleAttendence);
  } catch (error) {
    next(error);
  }
};
