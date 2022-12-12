import CollageUser from "../../Models/Users/Collage_User.js";
import StudentUser from "../../Models/Users/Student_User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const dataupdate = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        number: req.body.number,
        department: req.body.department,
      };
      const updatedUser = await CollageUser.findByIdAndUpdate(
        req.params.id,
        {
          ...dataupdate,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can update only your account!",
      success: false,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await CollageUser.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can Delete only your account!",
      success: false,
    });
  }
};

export const getUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await CollageUser.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(200).json({
      message: "You can access only your account!",
      success: false,
    });
  }
};

// Admin routes

export const getsingleUser = async (req, res, next) => {
  try {
    const user = await CollageUser.findOne({ UuId: req.params.UuId });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllusers = async (req, res, next) => {
  try {
    const users = await CollageUser.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const editUserRole = async (req, res, next) => {
  try {
    const newrole = {
      role: req.body.role,
    };

    const updatedrole = await CollageUser.findOneAndUpdate(
      req.params.UuId,
      newrole,
      {
        new: true,
      }
    );
    res.status(200).json(updatedrole.role);
  } catch (error) {
    next(error);
  }
};

export const verifyuser = async (req, res, next) => {
  try {
    const profile = await CollageUser.findOne({ UuId: req.params.UuId });
    if (profile) {
      if (profile.verified == false) {
        profile.verified = true;
      } else if (profile.verified == true) {
        profile.verified = false;
      } else {
        profile.verified = profile.verified;
      }
      const result = await profile.save();
      return res.status(200).json(result.verified);
    }
  } catch (error) {
    return res.status(400).json({ message: "Verification Failed" });
  }
};

// Admin + Teacher Routes

export const getsingleStudent = async (req, res, next) => {
  try {
    const user = await StudentUser.findOne({ UuId: req.params.UuId });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const verifyStudents = async (req, res, next) => {
  try {
    const profile = await StudentUser.findOne({ UuId: req.params.UuId });
    if (profile) {
      if (profile.verified == false) {
        profile.verified = true;
      } else if (profile.verified == true) {
        profile.verified = false;
      } else {
        profile.verified = profile.verified;
      }
      const result = await profile.save();
      return res.status(200).json(result.verified);
    }
  } catch (error) {
    return res.status(400).json({ message: "Verification Failed" });
  }
};

export const getallstudents = async (req, res, next) => {
  try {
    const students = await StudentUser.find();
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};
