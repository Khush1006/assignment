import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/employeeDataSlice";
import company from "../utils/company.json";
import employee from "../utils/employee.json";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Roots = styled('div')(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "uppercase"
}));

const TableHeadCell = ({ children }) => (
  <TableCell>
    <Roots>{children}</Roots>
  </TableCell>
);

const EmployeeData = () => {
  const dispatch = useDispatch();
  const { companies, employees } = useSelector((state) => state?.employeeData);

  const getCompanyName = (companyId) => {
    const company = companies.find((company) => company.id === companyId);
    return company?.name ?? "Unknown";
  };

  useEffect(() => {
    dispatch(addData({ companies: company, employees: employee }));
  }, [dispatch]);

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
                <TableHeadCell>Employee Name</TableHeadCell>
                <TableHeadCell>Company</TableHeadCell>
                <TableHeadCell>Position</TableHeadCell>
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
