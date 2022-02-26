import { createSlice } from "@reduxjs/toolkit";

const currentPage = createSlice({
  name: "currentPage",
  initialState: { page: "Leave Ukraine", menuOpen: false },
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload.page;
      state.menuOpen = false;
    },
    openMenu: (state, action) => {
      state.menuOpen = action.payload.menuOpen;
    },
  },
});

export const { setCurrentPage, openMenu } = currentPage.actions;

export default currentPage.reducer;
