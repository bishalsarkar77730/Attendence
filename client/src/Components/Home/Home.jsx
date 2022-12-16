import React from "react";
import axios from "axios";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slices/userSlice";

// Import images
import bg1 from "../../images/bg-1.svg";
// import NoWork from "./NoWork";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const UserLogOut = async () => {
    if (currentUser.role === "admin") {
      await axios.post("/collageauth/signout");
      dispatch(logout());
      navigate("/signup-signin");
    } else if (currentUser.role === "teacher") {
      await axios.post("/collageauth/signout");
      dispatch(logout());
      navigate("/signup-signin");
    } else {
      await axios.post("/studentauth/signout");
      dispatch(logout());
      navigate("/signup-signin");
    }
  };

  var current = new Date();
  var a = current.getHours();
  var greeting = "";
  if (a < 10) {
    greeting = "Good morning";
  } else if (a < 18) {
    greeting = "Good Noon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
      <header id="topHeader">
        <ul id="topInfo">
          <li>+91 7773015690</li>
          <li>bishalsarkar.ml@gmail.com</li>
        </ul>

        <nav>
          <span className="logo">Qr-Attendence</span>
          <div className="menu-btn-3">
            <span></span>
          </div>
          <div className="mainMenu">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/">
              <span>Student Section</span>
            </Link>
            <Link to="/">
              <span>Teacher Section</span>
            </Link>
            <Link to="/">
              <span>Admin Section</span>
            </Link>
            <Link to="/signup-signin">
              {currentUser ? (
                <spam onClick={UserLogOut}>
                  Log Out {currentUser.firstname}
                </spam>
              ) : (
                <Link to="/signup-signin">
                  <span>Signup & Signin</span>
                </Link>
              )}
            </Link>
          </div>
        </nav>
      </header>

      <section id="intro">
        <div id="intro-info">
          <div>
            <h1>Attendence Managment</h1>
            <div id="intro-tag-btn">
              <h2>QR-Based Attendence Giving</h2>
              <Link to="/signup-signin">
                {currentUser ? (
                  <span className="brand-btn">
                    {greeting}, {currentUser.firstname}
                  </span>
                ) : (
                  <Link to="/signup-signin">
                    <span className="brand-btn">Signup & Signin</span>
                  </Link>
                )}
              </Link>
            </div>
          </div>
        </div>

        <div id="development-img">
          <img src={bg1} alt="" />
        </div>
      </section>
      {/* <NoWork /> */}
    </>
  );
};

export default Home;
