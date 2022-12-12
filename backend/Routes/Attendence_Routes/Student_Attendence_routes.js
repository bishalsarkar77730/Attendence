import express from "express";
import { AuthenticatedUser, verifiedStatus } from "../../Utils/Auth.js";
import {
  giveattendence,
  getallYourAttendence,
} from "../../Controllers/Attendence_Controller/Student_Attendence_Controller.js";

const router = express.Router();

router.post(
  "/giveattendence",
  AuthenticatedUser,
  verifiedStatus,
  giveattendence
);

router.get(
  "/getallyourAttendence/:id",
  AuthenticatedUser,
  verifiedStatus,
  getallYourAttendence
);

export default router;
