import React from "react";
import "./Generate-Qr.css";
import QRCode from "react-qr-code";

const GenrateQr = () => {
  let value = JSON.stringify({
    URL: "http://localhost:3001/api/student/giveattendence",
    Teacher: {
      TeacherUserId: "6396d0c33ba9fcc107baee34",
      TeacherUuid: "8VnmDe",
    },
  });

  return (
    <div className="QrCodeee">
      <h1>Hello Teacher</h1>
      <h2>Students, Please Scan These Qr Code To Give Your Attendence</h2>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default GenrateQr;
