import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Home.css";
import Signup from "./Signup";

const Home = () => {
  const [active, setActive] = useState("Home");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: null });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Username"
                    />
                    {formErrors.username && (
                      <span className="error">{formErrors.username}</span>
                    )}
                  </div>
                  <div className="form-group pass-in2">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                    />
                    <div className="iconss2">
                      {showPassword ? (
                        <FaEyeSlash onClick={togglePasswordVisibility} />
                      ) : (
                        <FaEye onClick={togglePasswordVisibility} />
                      )}
                    </div>
                    {formErrors.password && (
                      <span className="error">{formErrors.password}</span>
                    )}
                  </div>
                  <div className="btns">
                    <div className="login-btns">
                      <button type="submit" className="form-btn">
                        <span className="form-btn-text">Login Teacher</span>
                      </button>
                      <button type="submit" className="form-btn">
                        <span className="form-btn-text">Login Student</span>
                      </button>
                    </div>
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
        </>
      )}
      {active === "signupcard" && (
        <>
          <Signup setActive={setActive} />
        </>
      )}
    </div>
  );
};

export default Home;
