import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice";
import charReducer from "./reducers/charSlice";

export const store = configureStore({
  reducer: { char: charReducer, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
