import React, { useState } from "react";
import "./GetUsers.css";

import User from "./User";
import Student from "./Student";

const GetUsers = () => {
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
        <button onClick={() => setActive("user")}>Collage User Data</button>
        <button onClick={() => setActive("student")}>Student Data</button>
      </div>
      <div className="userdet">
        {active === "user" && <User uuid={uuid} />}
        {active === "student" && <Student uuid={uuid} />}
      </div>
    </div>
  );
};

export default GetUsers;
