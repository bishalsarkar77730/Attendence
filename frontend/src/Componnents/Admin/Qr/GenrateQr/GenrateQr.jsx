import React from "react";
import { useSelector } from "react-redux";
import "./GenrateQr.css";
import QRCode from "react-qr-code";

const GenrateQr = () => {
  const { currentUser } = useSelector((state) => state.user);
  let id = currentUser._id;
  let UUID = currentUser.UuId;
  let value = JSON.stringify({
    TeacherUserId: id,
    TeacherUuid: UUID,
  });

  return (
    <div className="QrCodeee">
      <h2>Students, Please Scan These Qr Code To Give Your Attendence</h2>
      <QRCode
        size={300}
        style={{ maxWidth: "100%", width: "100%", marginBottom: "30px" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default GenrateQr;
