// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeDataReducer from './employeeDataSlice';

const store = configureStore({
  reducer: {
    employeeData: employeeDataReducer,
  },
});

export default store;

