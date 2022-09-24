import { AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import user from './slices/userSlice';

const reducer = combineReducers({ user });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export type ReduxState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useTypedDispatch: () => AppDispatch = useDispatch;

export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;

export const useTypedDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();

export default store;
