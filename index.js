import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

// import All Routes
import Collage_AuthRoutes from "./backend/Routes/Auth_routes/Collage_Auth_routes.js";
import Student_AuthRoutes from "./backend/Routes/Auth_routes/Student_Auth_routes.js";
import Collage_UserRoutes from "./backend/Routes/User_Routes/Collage_User_routes.js";
import Student_UserRoutes from "./backend/Routes/User_Routes/Student_user_routes.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/collageauth", Collage_AuthRoutes);
app.use("/api/studentauth", Student_AuthRoutes);
app.use("/api/user", Collage_UserRoutes);
app.use("/api/student", Student_UserRoutes);

app.listen(process.env.LOCAL_HOST_PORT, () => {
  connect();
  console.log(
    `server is running on http://localhost:${process.env.LOCAL_HOST_PORT}`
  );
});