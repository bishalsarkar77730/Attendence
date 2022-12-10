import React from "react";
import QRCode from "react-qr-code";

const App = () => {
  let value = JSON.stringify({ email: 'bishalsarkar.ml@gmail.com', name: 'Bishal Sarkar', class: 'BCA Final', Attendence: 'Present' })

  return (
    <div
      style={{ height: "auto", margin: "auto", marginTop:"100px", maxWidth: 64, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default App;
