import React from "react";
import "./Genrate-qr.css";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const GenrateQr = () => {
  const { currentUser } = useSelector((state) => state.user);
  let value = JSON.stringify({
    URL: "http://localhost:3001/api/collage/attendence",
    // Teacher: {
    //   TeacherUserId: currentUser.id,
    //   TeacherUuid: currentUser.uuid,
    // },
  });

  return (
    <div className="box">
      <h1>Hello {currentUser.role}</h1>
      <h2>Teachers, Please Scan These Qr Code To Give Your Attendence</h2>
      <div className="QrCodeee">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default GenrateQr;
