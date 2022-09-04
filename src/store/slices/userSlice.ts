import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  status: "IDEAL",
  user: null,
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
  },
});

export const { setOnFailure, updateUser, logout } = UserSlice.actions;
export default UserSlice.reducer;
