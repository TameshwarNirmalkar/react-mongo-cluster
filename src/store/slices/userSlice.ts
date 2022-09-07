import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  status: "IDEAL",
  user: null,
  isScrollValueMoreThanHeaderHeight: false,
};

export const UserSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    logout(state, { payload }) {
      state.user = null;
      state.status = "IDEAL";
      state.error = null;
    },
    setOnFailure(state, { payload }) {
      state.user = null;
      state.error = payload;
      state.status = "FAILURE";
    },
    updateUser(state, { payload }) {
      state.user = payload || null;
    },
    updateIsScrollHeight(state, { payload }) {
      state.isScrollValueMoreThanHeaderHeight = payload;
    },
  },
});

export const { setOnFailure, updateUser, logout, updateIsScrollHeight } =
  UserSlice.actions;
export default UserSlice.reducer;
