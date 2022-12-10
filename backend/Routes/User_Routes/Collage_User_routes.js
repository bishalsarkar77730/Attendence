import express from "express";
import {
  AuthenticatedUser,
  verifyRole,
  verifiedStatus,
} from "../../Utils/Auth.js";
import {
  update,
  deleteUser,
  getUser,
  getsingleUser,
  getAllusers,
  editUserRole,
  verifyuser,
  getsingleStudent,
  verifyStudents,
  getallstudents,
} from "../../Controllers/User_controller/Collage_user_controller.js";

const router = express.Router();

// Admin routes
router.get(
  "/admin/singleuser/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getsingleUser
);
router.get(
  "/",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  getAllusers
);
router.put(
  "/admin/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  editUserRole
);
router.put(
  "/admin/verifyuser/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin"),
  verifyuser
);

// Admin + Teacher Routes

router.get(
  "/collage/student/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin", "teacher"),
  getsingleStudent
);

router.put(
  "/collage/verifystudent/:UuId",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin", "teacher"),
  verifyStudents
);

router.get(
  "/allstudents",
  verifiedStatus,
  AuthenticatedUser,
  verifyRole("admin", "teacher"),
  getallstudents
);

router.put("/:id", verifiedStatus, AuthenticatedUser, update);
router.delete("/:id", verifiedStatus, AuthenticatedUser, deleteUser);
router.get("/:id", verifiedStatus, AuthenticatedUser, getUser);

export default router;
