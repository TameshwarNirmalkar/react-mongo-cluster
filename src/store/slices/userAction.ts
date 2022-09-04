import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "./service";
import { setOnFailure, updateUser } from "./userSlice";

export const fetchUser = createAsyncThunk(
  "GET_USER",
  async (arg, { dispatch }) => {
    try {
      const response = await loginAPI(arg);
      dispatch(updateUser(response));
      return response;
    } catch (err: any) {
      dispatch(setOnFailure(err.toString()));
      return err;
    }
  }
);
