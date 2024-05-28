import { createSlice } from '@reduxjs/toolkit';


const employeesDataSlice = createSlice({
  name: 'employeeData',
  initialState: {
    companies: [],
    employees: [],
  },
  reducers: {
    addData(state, action) {
      console.log(action.payload)
      state.companies = action.payload?.companies;
      state.employees = action.payload?.employees;
    },
  },
});

export const { addData } = employeesDataSlice.actions;

export default employeesDataSlice.reducer;
