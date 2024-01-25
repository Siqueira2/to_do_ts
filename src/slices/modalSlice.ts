import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  modal: boolean;
};

const initialState: ModalState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open_modal: (state) => {
      state.modal = true;
    },

    close_modal: (state) => {
      state.modal = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { open_modal, close_modal } = modalSlice.actions;
