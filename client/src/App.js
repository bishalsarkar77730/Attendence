import React from "react";
import "./App.css";

// Import Components
import GenrateQr from "./Components/Qr-Generator/Genrate-Qr";
import Scanner from "./Components/Qr-Scanner/Scanner";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Folks</h1>
      <div className="gen">
        <GenrateQr />
      </div>
      <div className="sca">
        <Scanner />
      </div>
    </div>
  );
};

export default App;
