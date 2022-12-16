import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Components
import Home from "./Components/Home/Home";
import SignupsignIn from "./Components/Signup-SignIn/SignupSignIn";
// import GenrateQr from "./Components/Qr-Generator/Genrate-Qr";
// import Scanner from "./Components/Qr-Scanner/Scanner";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup-signin" element={<SignupsignIn />}></Route>
      </Routes>

      {/* <SignupSignIn />
    <div className="App">
      <div className="gen">
        <GenrateQr />
      </div>
      <div className="sca">
        <Scanner />
      </div>
    </div> */}
    </>
  );
};

export default App;
