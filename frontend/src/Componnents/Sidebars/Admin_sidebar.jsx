import React, {useState} from "react";
import axios from "axios";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { logout } from "../../redux/Slices/UserSlice";

// Import Components
import Profile from "../Admin/Profile/Profile";
import EditProfile from "../Admin/Profile/EditProfile";

const generator = new AvatarGenerator();
let Avatar = generator.generateRandomAvatar();

const Admin_sidebar = () => {
  const [active, setActive] = useState("ProfileCard")

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
                    <ion-icon name="qr-code-outline"></ion-icon> Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("ProfileCard")}>
                    <ion-icon name="person-circle-outline"></ion-icon> User Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActive("EditCard")}>
                    <ion-icon name="settings-outline"></ion-icon> User Settings
                  </Link>
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
                  <Link onClick={UserLogOut}>
                    <ion-icon name="log-out-outline"></ion-icon> Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="left-side">
          {active === "ProfileCard" && <Profile />}
          {active === "EditCard" && <EditProfile />}
        </div>
      </div>
    </>
  );
};

export default Admin_sidebar;
