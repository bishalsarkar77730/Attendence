import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidEmail = validateEmail(email);

  const validatePhone = (number) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const isValidPhone = validatePhone(number);

  const validateForm = () => {
    if (!username) {
      toast.error("Username is required", {
        className: "toast-error",
      });
    }
    if (!firstname) {
      toast.error("Firstname is required", {
        className: "toast-error",
      });
    }
    if (!lastname) {
      toast.error("Lastname is required", {
        className: "toast-error",
      });
    }
    if (!address) {
      toast.error("Address is required", {
        className: "toast-error",
      });
    }
    if (!email) {
      toast.error("Email is required", {
        className: "toast-error",
      });
    }
    if (!isValidEmail) {
      toast.error("Email is not valid", {
        className: "toast-error",
      });
    }
    if (!number) {
      toast.error("Phone Number is required", {
        className: "toast-error",
      });
    }
    if (!isValidPhone) {
      toast.error("Phone Number is Not valid", {
        className: "toast-error",
      });
    }
    if (!department) {
      toast.error("Department Not Selected", {
        className: "toast-error",
      });
    }
    if (department === "Select Department") {
      toast.error("Department Not Selected", {
        className: "toast-error",
      });
    }
    if (!password) {
      toast.error("password is required", {
        className: "toast-error",
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
    <div className="left-section-wrapper2">
      <div className="form2">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            placeholder="User name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <select onChange={(e) => setDepartment(e.target.value)}>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="iconss">
              {showPassword ? (
                <FaEyeSlash onClick={togglePasswordVisibility} />
              ) : (
                <FaEye onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
          <button>Signup</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
