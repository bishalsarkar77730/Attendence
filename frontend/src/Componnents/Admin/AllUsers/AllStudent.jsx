import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "../../../Styles/Datagrid.css";

const columns = [
  {
    field: "username",
    headerName: "UserName",
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
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 300,
  },
  {
    field: "number",
    headerName: "Contact",
    width: 150,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
  },
  {
    field: "role",
    headerName: "User Role",
    width: 150,
  },
  {
    field: "verified",
    headerName: "Status",
    width: 150,
  },
];

const AllStudent = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get("/user/allstudents");
        setTableData(Datares.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
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
  );
};

export default AllStudent;
