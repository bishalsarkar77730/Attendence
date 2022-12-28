import { useState } from "react";
import axios from "axios";
import "./ScanQr.css";
import QrReader from "react-qr-reader";

const Scanner = () => {
  const [selected, setSelected] = useState(" environment");
  const [startScan, setStartScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  let ab = data && JSON.parse(data);
  let TeacherUserId = ab.TeacherUserId;
  let TeacherUuid = ab.TeacherUuid;

  const handleAttendence = async () => {
    try {
      const senddata = await axios.post("/student/giveattendence", {
        TeacherUserId,
        TeacherUuid,
      });
      alert(senddata.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ScanComp">
      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select className="gro" onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}> Back Camera</option>
            <option value={"user"}> Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "300px" }}
          />
        </>
      )}
      {data !== "" && (
        <button onClick={handleAttendence}>Send Attendence</button>
      )}
    </div>
  );
};

export default Scanner;
