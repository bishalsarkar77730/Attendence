import React, { useState } from "react";
import axios from "axios";
import "./QrMain.css";
import GenrateQr from "./GenrateQr/GenrateQr";

const QrMain = () => {
  const [active, setActive] = useState("");

  const handleAttendence = async () => {
    try {
      const senddata = await axios.post("collage/attendence");
      alert(senddata.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainQr">
      <div className="qrbut">
        <button onClick={() => setActive("qrgenrate")}>Genrate Qr</button>
        <button onClick={handleAttendence}>Staff Give Attendence</button>
      </div>
      <div className="qrs">{active === "qrgenrate" && <GenrateQr />}</div>
    </div>
  );
};

export default QrMain;
