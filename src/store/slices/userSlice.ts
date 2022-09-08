import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateI } from './constant';

const initialState: UserStateI = {
  error: null,
  status: 'IDEAL',
  user: null,
  isScrollValueMoreThanHeaderHeight: false,
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
  },
});

export const { setOnFailure, updateUser, logout, updateIsScrollHeight } = UserSlice.actions;
export default UserSlice.reducer;
