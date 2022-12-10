import express from "express";
import { AuthenticatedUser, verifiedStatus } from "../../Utils/Auth.js";

import {
  updateStudent,
  deleteStudent,
  getstudent,
} from "../../Controllers/User_controller/Student_user_controller.js";

const router = express.Router();

router.put("/:id", verifiedStatus, AuthenticatedUser, updateStudent);
router.get("/:id", verifiedStatus, AuthenticatedUser, getstudent);
router.delete("/:id", verifiedStatus, AuthenticatedUser, deleteStudent);

export default router;
