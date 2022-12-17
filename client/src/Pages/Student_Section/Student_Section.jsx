import React from "react";
import axios from "axios";
import "../Main.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { logout } from "../../redux/Slices/userSlice";

const generator = new AvatarGenerator();
let Avatar = generator.generateRandomAvatar();

const Student_Section = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const UserLogOut = async () => {
    await axios.post("studentauth/signout");
    dispatch(logout());
    navigate("/studentsignup-signin");
  };

  return (
    <>
      <div className="container">
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
                  <a href="javascriptvoid">
                    <ion-icon name="flower-outline"></ion-icon> General
                  </a>
                </li>
                <li>
                  <a href="javascriptvoid">
                    <ion-icon name="lock-closed-outline"></ion-icon> Password
                  </a>
                </li>
                <li>
                  <a href="javascriptvoid">
                    <ion-icon name="mail-outline"></ion-icon> Invitations
                  </a>
                </li>
                <li>
                  <a href="javascriptvoid">
                    <ion-icon name="cash-outline"></ion-icon> Billing
                  </a>
                </li>
                <li>
                  <a href="javascriptvoid">
                    <ion-icon name="apps-outline"></ion-icon> Apps
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
      </div>
    </>
  );
};

export default Student_Section;
