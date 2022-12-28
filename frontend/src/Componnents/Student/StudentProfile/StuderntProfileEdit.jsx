import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Slices/UserSlice";
import axios from "axios";

const StuderntProfileEdit = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resdata = await axios.get(`/student/${currentUser._id}`);
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [currentUser]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        firstname: firstname === "" ? userdata.firstname : firstname,
        lastname: lastname === "" ? userdata.lastname : lastname,
        email: email === "" ? userdata.email : email,
        number: number === "" ? userdata.number : number,
        username: username === "" ? userdata.username : username,
        address: address === "" ? userdata.address : address,
        department: department === "" ? userdata.department : department,
      };
      await axios.put(`/student/${currentUser._id}`, payload);
      navigate("/student");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you sure you want to Delete Your Account")) {
        await axios.delete(`/student/${currentUser._id}`);
        await axios.post("/studentauth/signout");
        dispatch(logout());
        navigate("/");
      } else {
        alert("Cancel Deletion");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="container2">
      <h1 class="title">Edit Your Profile</h1>
      <div class="grid">
        <div className="grid1">
          <label className="labes">First Name</label>
          <input
            className="likhan"
            placeholder={userdata.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label className="labes">Last Name</label>
          <input
            className="likhan"
            placeholder={userdata.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label className="labes">Email</label>
          <input
            className="likhan"
            placeholder={userdata.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labes2">Department</label>
        </div>
        <div className="grid2">
          <label className="labes">Phone</label>
          <input
            className="likhan"
            placeholder={userdata.number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label className="labes">Username</label>
          <input
            className="likhan"
            placeholder={userdata.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="labes">Address</label>
          <input
            className="likhan"
            placeholder={userdata.address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <select onChange={(e) => setDepartment(e.target.value)}>
            <option>{userdata.department}</option>
            <option value="BSC(CS)">BSC(CS)</option>
            <option value="plane(Bsc)">plane(Bsc)</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="BCA">BCA</option>
            <option value="BA">BA</option>
            <option value="Bcom">Bcom</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button class="button2" onClick={handleUpdate}>
          Update
        </button>
        <button class="button3" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default StuderntProfileEdit;
