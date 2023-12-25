import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice.jsx";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});