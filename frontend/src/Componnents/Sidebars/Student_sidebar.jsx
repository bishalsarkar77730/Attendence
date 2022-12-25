import React from "react";
import axios from "axios";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { logout } from "../../redux/Slices/UserSlice";

const generator = new AvatarGenerator();
let Avatar = generator.generateRandomAvatar();

const Student_sidebar = () => {
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
                  <ion-icon name="settings-outline"></ion-icon> Settings
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="lock-closed-outline"></ion-icon> Give Attendence
                </a>
              </li>
              <li>
                <a href="javascriptvoid">
                  <ion-icon name="id-card-outline"></ion-icon> Get Your Attendence
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

export default Student_sidebar;
