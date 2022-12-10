import StudentUser from "../../Models/Users/Student_User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const validateUsername = async (username) => {
  const user = await StudentUser.findOne({ username });
  return user ? false : true;
};

const validateNumber = async (number) => {
  const user = await StudentUser.findOne({ number });
  return user ? false : true;
};

export const signup = async (req, res, next) => {
  try {
    const usernameNotTaken = await validateUsername(req.body.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: "username is already taken",
        success: false,
      });
    }
    const numberNotTaken = await validateNumber(req.body.number);
    if (!numberNotTaken) {
      return res.status(400).json({
        message: "Phone Number already taken",
        success: false,
      });
    }

    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const newdata = {
      UuId: makeid(6),
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      email: req.body.email,
      number: req.body.number,
      role: "student",
      verified: false,
    };

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new StudentUser({ ...newdata, password: hash });
    await newUser.save();
    res.status(200).send("user has been created please Login");
  } catch (error) {
    next(error);
  }
};

// login user
export const signin = async (req, res, next) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({
        message: "please Enter Username & password",
        success: false,
      });
    }
    const user = await StudentUser.findOne({ username }).select("+password");
    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(401).json({
        message: "Invalid Username or password",
        success: false,
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        uuid: user.UuId,
        role: user.role,
        verified: user.verified,
      },
      process.env.JWT
    );
    // const details = user
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 60 * 1000,
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};

// logout

export const LogOut = (req, res, next) => {
  try {
    res.cookie("access_token", null, {
      expiresIn: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
};
