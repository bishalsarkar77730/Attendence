import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Home.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // Regex to check email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Regex to check phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmailError(!validateEmail(email));
  };

  const handlePhoneChange = (event) => {
    const phone = event.target.value;
    setPhoneError(!validatePhone(phone));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if email and phone are valid
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);

    if (!isValidEmail) {
      setEmailError(true);
    }

    if (!isValidPhone) {
      setPhoneError(true);
    }

    if (isValidEmail && isValidPhone) {
      // submit form
    }
  };

  return (
    <div className="left-section-wrapper2">
      <div className="form2">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="alag0">
            <div className="alag1">
              <input placeholder="User name" />
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Address" />
              <button>Teacher & Staff -- Sign up</button>
            </div>
            <div className="alag2">
              <input
                placeholder="Email"
                name="email"
                onChange={handleEmailChange}
              />
              {emailError && (
                <div className="error-message">Invalid email address</div>
              )}
              <input
                placeholder="Phone Number"
                name="phone"
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <div className="error-message">
                  Invalid phone number (must be 10 digits)
                </div>
              )}
              <select>
                <option>Select Department</option>
                <option value="BSC(CS)">BSC(CS)</option>
                <option value="plane(Bsc)">plane(Bsc)</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="BCA">BCA</option>
                <option value="BA">BA</option>
                <option value="Bcom">Bcom</option>
                <option value="collageStaff">collageStaff</option>
              </select>
              <div className="pass-in">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <div className="iconss">
                  {showPassword ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
              <button>Student Signup</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
