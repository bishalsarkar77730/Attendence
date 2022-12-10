import StudentUser from "../../Models/Users/Student_User.js";

export const updateStudent = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const dataupdate = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        number: req.body.number,
      };
      const updatedUser = await StudentUser.findByIdAndUpdate(
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

export const deleteStudent = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await StudentUser.findByIdAndDelete(req.params.id);
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

export const getstudent = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await StudentUser.findById(req.params.id);
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

