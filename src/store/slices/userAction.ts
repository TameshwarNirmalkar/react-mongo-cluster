import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAPI, loginAPI } from './service';
import { setIsLoading, setOnFailure, updateUser, updateUserList } from './userSlice';
const KEY = 'API';
export const fetchUser = createAsyncThunk(`${KEY}_USER_LOGIN`, async (arg, { dispatch }) => {
  try {
    const response = await loginAPI(arg);
    dispatch(updateUser(response));
    return response;
  } catch (err: any) {
    dispatch(setOnFailure(err.toString()));
    return err;
  }
});

export const getUserList = createAsyncThunk(`${KEY}_USER_LIST`, async (arg, { dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    const response = await getUserAPI();
    dispatch(updateUserList(response));
    return response;
  } catch (err: any) {
    dispatch(setOnFailure(err.toString()));
    return err;
  } finally {
    dispatch(setIsLoading(false));
  }
});
