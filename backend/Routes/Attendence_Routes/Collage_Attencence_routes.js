import express from "express";
import {
  AuthenticatedUser,
  verifyRole,
  verifiedStatus,
} from "../../Utils/Auth.js";

import {
  giveattendence,
  getUserAttendence,
  getallattendence,
  getSingleUserAttendence,
  getAllStudentAttendence,
  getsinglestudentAllAttendence,
} from "../../Controllers/Attendence_Controller/Collage_Attendence_Controler.js";

const router = express.Router();

// Admin Routes

router.get(
  "/getallAttendence",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getallattendence
);

router.get(
  "/single/User/attendence/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getSingleUserAttendence
);

router.get(
  "/AllStudent/attendence",
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
  getsinglestudentAllAttendence,
);

router.post("/attendence", verifiedStatus, AuthenticatedUser, giveattendence);

router.get(
  "/userAttendence/:id",
  verifiedStatus,
  AuthenticatedUser,
  getUserAttendence
);

export default router;
