import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import axios from "axios";
import "./GetStudentAttendance.css";

const columns = [
  {
    field: "userId",
    headerName: "userID",
    width: 250,
  },
  {
    field: "UserUuid",
    headerName: "UserUuid",
    width: 150,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
  },
  {
    field: "TeacherUserId",
    headerName: "Teachers Id",
    width: 250,
  },
  {
    field: "TeacherUuid",
    headerName: "Teacher UUID",
    width: 150,
  },
  {
    field: "firstname",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "day",
    headerName: "Day",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "time",
    headerName: "Time",
    width: 150,
  },
  {
    field: "attendence",
    headerName: "Attendence",
    width: 150,
  },
  {
    field: "dayType",
    headerName: "Day Type",
    width: 150,
  },
];

const GetStudentAttendance = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resdata = await axios.get(
          `student/getallyourAttendence/${currentUser._id}`
        );
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [currentUser]);
  return (
    <div className="Attn">
      <Box sx={{ height: "70vh", width: "85%", padding: "22px 96px" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={userdata}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default GetStudentAttendance;
