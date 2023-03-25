import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Authentication.css";
import "./Home.css";

// Redux Imports
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../../redux/Slices/UserSlice";
import bg1 from "../../images/bg1.png";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [active, setActive] = useState("initialUser");
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

  var current = new Date();
  var a = current.getHours();
  var greeting = "";
  if (a < 12) {
    greeting = "Good morning";
  } else if (a < 18) {
    greeting = "Good Noon";
  } else {
    greeting = "Good evening";
  }

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
      const create = await axios.post("/collageauth/signup", {
        username,
        firstname,
        lastname,
        address,
        email,
        number,
        department,
        password,
      });
      toast.success(create.data, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
      });
      setActive("initialUser");
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
      toast.success("Login success", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
      });
      setActive("initialUser");
    } catch (error) {
      dispatch(loginFailure());
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
      });
      setActive("initialUser");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {active === "initialUser" && (
        <>
          <header id="topHeader">
            <ul id="topInfo">
              <li>+91 7773015690</li>
              <li>bishalsarkar.ml@gmail.com</li>
            </ul>
            <nav>
              <span className="logo">Qr-Attendence</span>
              <div className="mainMenu">
                <Link to="/">
                  <span>Home</span>
                </Link>
                <Link to="/student">
                  <span>Student Section</span>
                </Link>
                <Link to="/collage">
                  <span>Admin or Teacher Section</span>
                </Link>
                <Link>
                  {currentUser ? (
                    <span>
                      {currentUser.firstname}, {currentUser.role}
                    </span>
                  ) : (
                    <span onClick={() => setActive("loginCard")}>
                      Signup & Signin
                    </span>
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
                  <Link>
                    {currentUser ? (
                      (() => setActive("initialUser"),
                      (
                        <span className="brand-btn">
                          {greeting}, {currentUser.firstname}
                        </span>
                      ))
                    ) : (
                      <span
                        className="brand-btn"
                        onClick={() => setActive("loginCard")}
                      >
                        Signup & Signin
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div id="development-img">
              <img src={bg1} alt="" />
            </div>
          </section>
          <ToastContainer />
        </>
      )}
      {active === "loginCard" && (
        <>
          <div className="box">
            <div className="main2">
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
                  <button onClick={handleSignup}>
                    Collage & Staff -- Sign up
                  </button>
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
                  <button onClick={handleLogin}>
                    Collage & Staff -- Login
                  </button>
                  <button onClick={handleStuLogin}>Student Login</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
