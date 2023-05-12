import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  employeeList: [],
  teamMembers: [],
};

export const productSlice = createSlice({
  name: "allEmployee",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.employeeList = [...action.payload];
    },
    addToTeam: (state, action) => {
      const check = state.teamMembers.some((el) => el.id === action.payload.id);
      console.log(check);
      if (check) {
        toast.error("Already in team");
      } else {
        toast.success(
          `${action.payload.last_name} added to your team successfully!`
        );
        state.teamMembers = [...state.teamMembers, action.payload];
      }
    },
    deleteTeamMember: (state, action) => {
      toast.success(
        `${action.payload.last_name} removed from your team successfully!`
      );
      const index = state.teamMembers.findIndex(
        (el) => el._id === action.payload
      );
      state.teamMembers.splice(index, 1);
      console.log(index);
    },
  },
});

export const { setDataProduct, addToTeam, deleteTeamMember } =
  productSlice.actions;

export default productSlice.reducer;
