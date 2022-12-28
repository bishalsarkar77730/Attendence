import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const StudentProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

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
  let verify = "";
  if (userdata.verified === true) {
    verify = "Verified";
  } else {
    verify = "Not Verified";
  }
  return (
    <>
      <div className="card">
        <div className="prodiv">
          <div className="img">
            <img src="https://picsum.photos/200" alt="a" />
          </div>
          <div className="infos">
            <div className="name">
              <h2>
                {userdata.firstname} {userdata.lastname}
              </h2>
              <h4>
                @ {userdata.role}, verified Status : {verify}
              </h4>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default StudentProfile;
