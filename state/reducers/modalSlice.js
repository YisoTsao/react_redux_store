import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  title: "",
  body: "",
  withButtons: false,
  actionButton: "Confirm",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      return {
        ...state,
        isShow: true,
        ...action.payload,
      };
    },
    hideModal: (state, action) => {
      return { ...state, isShow: false, ...action.payload };
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
