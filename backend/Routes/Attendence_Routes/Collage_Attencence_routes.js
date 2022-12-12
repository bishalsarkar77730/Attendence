import express from "express";
import {
  AuthenticatedUser,
  verifyRole,
  verifiedStatus,
} from "../../Utils/Auth.js";

import {
  giveattendence,
  getUserAttendence,
  assignLeave,
  getallattendence,
  getSingleUserAttendence,
  getAllStudentAttendence,
  getsinglestudentAllAttendence,
} from "../../Controllers/Attendence_Controller/Collage_Attendence_Controler.js";

const router = express.Router();

router.post("/attendence", verifiedStatus, AuthenticatedUser, giveattendence);

router.get(
  "/userAttendence/:id",
  verifiedStatus,
  AuthenticatedUser,
  getUserAttendence
);

// Admin Routes

router.post(
  "/assignleave/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  assignLeave
);

router.get(
  "/getallAttendence",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getallattendence
);

router.get(
  "/singleUserattencence/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getSingleUserAttendence
);

router.get(
  "/AllStudentattendence",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getAllStudentAttendence
);

// Admin + Teacher Routes

router.get(
  "/single/Student/Allattendence/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin", "teacher"),
  getAllStudentAttendence
);

export default router;
