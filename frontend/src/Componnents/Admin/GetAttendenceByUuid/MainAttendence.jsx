import React, { useState } from "react";
import StudentAttendance from "./StudentAttendance/StudentAttendance";
import StaffAttendance from "./StaffAttendance/StaffAttendance";

const MainAttendence = () => {
  const [uuid, setUuid] = useState("");
  const [active, setActive] = useState("");
  return (
    <div className="UuidUser">
      <div className="formdata">
        <label>User UUID</label>
        <input
          placeholder="User UUID"
          onChange={(e) => setUuid(e.target.value)}
        />
        <button onClick={() => setActive("user")}>Staff Attandence</button>
        <button onClick={() => setActive("student")}>Student Attandence</button>
      </div>
      <div className="userdet">
        {active === "student" && <StudentAttendance uuid={uuid} />}
        {active === "user" && <StaffAttendance uuid={uuid} />}
      </div>
    </div>
  );
};

export default MainAttendence;
