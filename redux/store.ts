import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import loadingReducer from "./slices/loadingSlice";
import optionsSlice from "./slices/optionsSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    optionsLists: optionsSlice,
    user: UserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
