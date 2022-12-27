import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./YourAttendence.css";
import "../../../Styles/Datagrid.css"

const columns = [
  {
    field: "userID",
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

const YourAttendence = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get(
          `/collage/userAttendence/${currentUser._id}`
        );
        setTableData(Datares.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);
  return (
    <div className="Yatt">
      <Box sx={{ height: "80vh", width: "85%", padding: "22px 96px" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={tableData}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default YourAttendence;
