import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Authentication.css";

// Redux Imports
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../../redux/Slices/UserSlice";


const SignupSignIn = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Student Signup and Login Part

  const handleStuSignup = async (e) => {
    e.preventDefault();
    if (department === "collageStaff") {
      alert(
        "You are Going to Student SignUp Side Plz Change Your Department CollageStaff Is Not Student Department"
      );
      window.location.reload();
    } else {
      try {
        await axios.post("/studentauth/signup", {
          username,
          firstname,
          lastname,
          address,
          email,
          number,
          department,
          password,
        });
        alert("Your Account is Created Please Login");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleStuLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/studentauth/signin", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/student");
    } catch (error) {
      dispatch(loginFailure());
      alert(error.response.data.message);
    }
  };

  // Collage Signup and Login Part

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/collageauth/signup", {
        username,
        firstname,
        lastname,
        address,
        email,
        number,
        department,
        password,
      });
      alert("Your Account is Created Please Login");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/collageauth/signin", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/collage");
    } catch (error) {
      dispatch(loginFailure());
      alert(error.response.data.message);
    }
  };

  return (
    <div className="box">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <div className="alag0">
              <div className="alag1">
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
              </div>
              <div className="alag2">
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
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleSignup}>Collage & Staff -- Sign up</button>
            <button onClick={handleStuSignup}>Student Signup</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Collage & Staff -- Login</button>
            <button onClick={handleStuLogin}>Student Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupSignIn;
