import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./EditProfile.css";

const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resdata = await axios.get(`/user/${currentUser._id}`);
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    fetchdata();
  }, [currentUser, navigate]);

  return (
    <div class="container2">
      <h1 class="title">Edit Your Profile</h1>
      <div class="grid">
        <div className="grid1">
          <label className="labes">First Name</label>
          <input className="likhan" placeholder={userdata.firstname} />
          <label className="labes">Last Name</label>
          <input className="likhan" placeholder={userdata.lastname} />
          <label className="labes">Email</label>
          <input className="likhan" placeholder={userdata.email} />
          <label className="labes2">Department</label>
        </div>
        <div className="grid2">
          <label className="labes">Phone</label>
          <input className="likhan" placeholder={userdata.number} />
          <label className="labes">Username</label>
          <input className="likhan" placeholder={userdata.username} />
          <label className="labes">Address</label>
          <input className="likhan" placeholder={userdata.address} />
          <select>
            <option>{userdata.department}</option>
            <option value="BSC(CS)">BSC(CS)</option>
            <option value="plane(Bsc)">plane(Bsc)</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="BCA">BCA</option>
            <option value="BA">BA</option>
            <option value="Bcom">Bcom</option>
            <option value="collageStaff">collageStaff</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button class="button2">Update</button>
        <button class="button3">Delete Account</button>
      </div>
    </div>
  );
};

export default EditProfile;
