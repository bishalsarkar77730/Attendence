import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Components
import Home from "./Components/Home/Home";
import SignupsignIn from "./Components/Signup-SignIn/SignupSignIn";
import StudentSignupSignIn from "./Components/Signup-SignIn/StudentSignupSignin";
import AdminSection from "./Pages/Admin_Section/Admin_Section";
import GenrateQr from "./Pages/Admin_Section/Admin_Screens/Qr/Genrate-Qr";
import Scanner from "./Pages/Admin_Section/Admin_Screens/Scan-Qr/Scan-Qr";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup-signin" element={<SignupsignIn />}></Route>
        <Route
          exact
          path="/studentsignup-signin"
          element={<StudentSignupSignIn />}
        ></Route>
      </Routes>
      <div id="Admin-main">
        <AdminSection />
        <div className="Admin-main2">
          <Routes>
          <Route exact path="/admin-scan" element={<Scanner />}></Route>
            <Route exact path="/admin-Qr" element={<GenrateQr />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
