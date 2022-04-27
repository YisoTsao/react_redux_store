import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: ["Gary", "Mei"],
  company: "ABB",
  isActive: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggledActive: (state) => {
      state.isActive = !state.isActive;
    },
    addUser: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
  },
});

export const { toggledActive, addUser } = userSlice.actions;
export default userSlice.reducer;
