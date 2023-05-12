import { configureStore } from "@reduxjs/toolkit";
import allEmployee from "./employeeSlice";

export const store = configureStore({
  reducer: {
    allEmployee: allEmployee,
  },
});
