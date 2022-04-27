import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: ["three pig", "white princess"],
  isActive: true,
};

export const bookSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggledActive: (state) => {
      state.isActive = !state.isActive;
    },
    addBook: (state, action) => {
      state.bookList = [...state.bookList, action.payload];
    },
  },
});

export const { toggledActive, addBook } = bookSlice.actions;
export default bookSlice.reducer;
