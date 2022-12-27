import React, { useState } from "react";
import axios from "axios";
import "./Verify_ChangeRole.css";

const VerifyChangeRole = () => {
  const [uuid, setUuid] = useState("");
  const [role, setRole] = useState("");

  const HandleUpdateRole = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/user/admin/${uuid}`, {
        role,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/user/admin/verifyuser/${uuid}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdateStuStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/user/collage/verifystudent/${uuid}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Editform">
      <div className="roleform">
        <label>User UUID</label>
        <input
          placeholder="User UUID"
          onChange={(e) => setUuid(e.target.value)}
        />
        <label>Role Selection</label>
        <select onChange={(e) => setRole(e.target.value)}>
          <option>Select Role</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
        </select>
        <button onClick={HandleUpdateRole}>Change Role</button>
      </div>
      <div className="verifyform">
        <label>User UUID</label>
        <input
          placeholder="User UUID"
          onChange={(e) => setUuid(e.target.value)}
        />
        <button onClick={HandleUpdateStatus}>Verify User</button>
      </div>
      <div className="verifyStudent">
        <label>Student UUID</label>
        <input
          placeholder="Student UUID"
          onChange={(e) => setUuid(e.target.value)}
        />
        <button onClick={HandleUpdateStuStatus}>Verify Student</button>
      </div>
    </div>
  );
};

export default VerifyChangeRole;
