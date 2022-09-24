import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateI } from './constant';

const initialState: UserStateI = {
  isLoading: false,
  error: null,
  status: 'IDEAL',
  user: null,
  isScrollValueMoreThanHeaderHeight: false,
  userList: [],
};

export const UserSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'IDEAL';
      state.error = null;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setOnFailure(state, { payload }: PayloadAction<string>) {
      state.user = null;
      state.error = payload;
      state.status = 'FAILURE';
    },
    updateUser(state, { payload }: PayloadAction<UserStateI>) {
      state.user = payload || null;
    },
    updateIsScrollHeight(state, { payload }: PayloadAction<boolean>) {
      state.isScrollValueMoreThanHeaderHeight = payload;
    },
    updateUserList(state, { payload }: PayloadAction<Array<object>>) {
      state.userList = payload;
    },
  },
});

export const { setIsLoading, setOnFailure, updateUser, logout, updateIsScrollHeight, updateUserList } =
  UserSlice.actions;
export default UserSlice.reducer;
