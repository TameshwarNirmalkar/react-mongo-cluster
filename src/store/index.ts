import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";

const reducer = combineReducers({ user });

const Store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export default Store;
