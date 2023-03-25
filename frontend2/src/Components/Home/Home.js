import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import Signup from "./Signup";

const Home = () => {
  const [active, setActive] = useState("Home");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    if (!username) {
      toast.error("Username is required", {
        className:"toast-error"
      });
    }
    if (!password) {
      toast.error("Password is required", {
        className:"toast-error"
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // handle form submission
    }
  };

  return (
    <div className="container">
      {active === "Home" && (
        <>
          <div className="right-section">
            <div className="right-section-wrapper">
              <h1 className="title">Attendance Using-QR</h1>
              <h3 className="description">
                Scan the Qr-code and Give your Attendance (No manual work just
                scan and its done)
              </h3>
            </div>
          </div>
          <div className="left-section">
            <div className="left-section-wrapper">
              <div className="form">
                <form autoComplete="off">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <div className="pass-in2">
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <div className="iconss2">
                      {showPassword ? (
                        <FaEyeSlash onClick={togglePasswordVisibility} />
                      ) : (
                        <FaEye onClick={togglePasswordVisibility} />
                      )}
                    </div>
                  </div>
                  <div className="btns">
                    <button className="form-btn" onClick={handleSubmit}>
                      <span className="form-btn-text">Login</span>
                    </button>
                    <span className="sign">
                      Doesn't have account
                      <span
                        className="signup-btn"
                        onClick={() => setActive("signupcard")}
                      >
                        {" "}
                        Signup
                      </span>{" "}
                      to create one
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      )}
      {active === "signupcard" && (
        <>
          <Signup />
        </>
      )}
    </div>
  );
};

export default Home;
