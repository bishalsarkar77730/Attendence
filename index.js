import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import https from 'https';
import fs from 'fs';

// import All Routes
import Collage_AuthRoutes from "./backend/Routes/Auth_routes/Collage_Auth_routes.js";
import Student_AuthRoutes from "./backend/Routes/Auth_routes/Student_Auth_routes.js";
import Collage_UserRoutes from "./backend/Routes/User_Routes/Collage_User_routes.js";
import Student_UserRoutes from "./backend/Routes/User_Routes/Student_user_routes.js";
import Collage_attendence_Routes from "./backend/Routes/Attendence_Routes/Collage_Attencence_routes.js";
import Student_attendence_Routes from "./backend/Routes/Attendence_Routes/Student_Attendence_routes.js";

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

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
app.use("/api/collage", Collage_attendence_Routes);
app.use("/api/student", Student_attendence_Routes);

https.createServer(options, app).listen(process.env.LOCAL_HOST_PORT, () => {
  connect();
  console.log(
    `server is running on https://localhost:${process.env.LOCAL_HOST_PORT}`
  );
});
