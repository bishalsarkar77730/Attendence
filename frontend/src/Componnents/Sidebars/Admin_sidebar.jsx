import React from "react";
import axios from "axios";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { logout } from "../../redux/Slices/UserSlice";

const generator = new AvatarGenerator();
let Avatar = generator.generateRandomAvatar();

const Admin_sidebar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const UserLogOut = async () => {
    await axios.post("/collageauth/signout");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
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
                  <ion-icon name="qr-code-outline"></ion-icon> Home
                </Link>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="settings-outline"></ion-icon> Settings
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="lock-closed-outline"></ion-icon> Verify &
                  Change Role
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="id-card-outline"></ion-icon> User UUID
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="people-circle-outline"></ion-icon> All Users
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="id-card-outline"></ion-icon> Student UUID
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="people-circle-outline"></ion-icon> All
                  Students
                </a>
              </li>
              <li>
                <Link to="/admin-Qr">
                  <ion-icon name="qr-code-outline"></ion-icon> Qr-Genrate
                </Link>
              </li>
              <li>
                <Link to="/admin-scan">
                  <ion-icon name="scan-circle-outline"></ion-icon> Scan-Qr
                </Link>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="grid-outline"></ion-icon> Your Attendence
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="apps-outline"></ion-icon> Collage Attendence
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="apps-outline"></ion-icon> Student Attendence
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="id-card-outline"></ion-icon> Attendence UUID
                </a>
              </li>
              <li>
                <span onClick={UserLogOut}>
                  <ion-icon name="log-out-outline"></ion-icon> Log Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_sidebar;
