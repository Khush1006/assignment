import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/employeeDataSlice";
import company from '../company.json';
import employee from '../employee.json'
const EmployeeData = () => {
  const dispatch = useDispatch();
  const { companies, employees } = useSelector((state) => state?.employeeData);

  const getCompanyName = (companyId) => {
    const company = companies.find((company) => company.id === companyId);
    return company ? company.name : "Unknown";
  };
  useEffect(() => {

    console.log("weedac")
    dispatch(addData({ companies:company, employees:employee }));
  }, []);
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", padding: 4, fontSize: 20 }}
      >
        EMPLOYEE INFORMATION
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Employee data table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Employee Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Company
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees?.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{getCompanyName(employee?.companyId)}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default EmployeeData;
