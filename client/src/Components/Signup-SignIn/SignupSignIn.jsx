import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../../redux/Slices/userSlice";
import "./SignupSignIn.css";

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
      alert("Your Account is Created Please Login")
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
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <h1>Collage SignUp Login</h1>
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
              <button onClick={handleSignup}>Sign up</button>
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
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSignIn;
