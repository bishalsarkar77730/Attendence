import React from "react";
import "./App.css";

// Import Components
// import SignupSignIn from "./Components/Signup-SignIn/SignupSignIn";
import Home from "./Components/Home/Home";
// import GenrateQr from "./Components/Qr-Generator/Genrate-Qr";
// import Scanner from "./Components/Qr-Scanner/Scanner";

const App = () => {
  return (
    <>
    <Home />
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
