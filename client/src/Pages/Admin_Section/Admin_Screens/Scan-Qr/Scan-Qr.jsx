import { useState } from "react";
import axios from "axios";
import "./Scanner.css";
import QrReader from "react-qr-reader";

const Scanner = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    if (scanData && scanData !== "") {
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleAttendence = async() =>{
    try {
      const senddata = await axios.post(data)
      alert(senddata.data)
    } catch (error) {
      console.log(error)
    }
    console.log(data.URL)
  }

  return (
    <div className="App">
      <h1>Scan the Qr Code To Give Attendence</h1>
      <h2>
        Camera Type:
        {selected}
      </h2>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
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
      {loadingScan && <p>Loading</p>}
      {data !== "" && <button onClick={handleAttendence}>Send Attendence</button>}
    </div>
  );
};

export default Scanner;
