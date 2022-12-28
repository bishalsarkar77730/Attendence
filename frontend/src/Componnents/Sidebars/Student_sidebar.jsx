import React, { useState } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { logout } from "../../redux/Slices/UserSlice";

// import Components
import StudentProfile from "../Student/StudentProfile/Studentprofile";
import StuderntProfileEdit from "../Student/StudentProfile/StuderntProfileEdit";
import Scanner from "../Student/ScanQr/ScanQr";
import GetStudentAttendance from "../Student/Attendance/GetStudentAttendance";

const generator = new AvatarGenerator();
let Avatar = generator.generateRandomAvatar();

const Student_sidebar = () => {
  const [active, setActive] = useState("StudentProfilecard");
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const UserLogOut = async () => {
    await axios.post("/studentauth/signout");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div className="sidebar">
          <div className="top">
            <div className="profile">
              <img src={Avatar} alt="" />
              <div>
                <h2>
                  {currentUser ? (
                    <h2>
                      {currentUser.firstname} {currentUser.lastname}
                    </h2>
                  ) : (
                    "User Nmae"
                  )}
                </h2>
                <p>{currentUser ? <p>{currentUser.role}</p> : "@ User Role"}</p>
              </div>
            </div>
            <div className="bar">
              <ul>
                <li>
                  <Link to="/">
                    <ion-icon name="home-outline"></ion-icon> Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("StudentProfilecard")}>
                    <ion-icon name="person-circle-outline"></ion-icon> User
                    Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("StudentProfileEditcard")}>
                    <ion-icon name="settings-outline"></ion-icon> Settings
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("ScanerCard")}>
                    <ion-icon name="lock-closed-outline"></ion-icon> Give
                    Attendence
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("StudentOwnAttendanceCard")}>
                    <ion-icon name="id-card-outline"></ion-icon> Get Your
                    Attendence
                  </Link>
                </li>
                <li>
                  <Link onClick={UserLogOut}>
                    <ion-icon name="log-out-outline"></ion-icon> Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="left-side">
          {active === "StudentProfilecard" && <StudentProfile />}
          {active === "StudentProfileEditcard" && <StuderntProfileEdit />}
          {active === "ScanerCard" && <Scanner />}
          {active === "StudentOwnAttendanceCard" && <GetStudentAttendance />}
        </div>
      </div>
    </>
  );
};

export default Student_sidebar;
