import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetUsers.css";

const User = ({ uuid }) => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resdata = await axios.get(`/user/admin/singleuser/${uuid}`);
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [uuid]);
  return (
    <div className="uls">
      <ul className="stats">
        <li>
          <h3>UserName :</h3>
          <h4>{userdata.username}</h4>
        </li>
        <li>
          <h3>UuId :</h3>
          <h4>{userdata.UuId}</h4>
        </li>
        <li>
          <h3>Address :</h3>
          <h4>{userdata.address}</h4>
        </li>
      </ul>
      <ul className="stats">
        <li>
          <h3>E-mail :</h3>
          <h4>{userdata.email}</h4>
        </li>
        <li>
          <h3>Number :</h3>
          <h4>91+ {userdata.number}</h4>
        </li>
        <li>
          <h3>Department :</h3>
          <h4>{userdata.department}</h4>
        </li>
      </ul>
    </div>
  );
};

export default User;
