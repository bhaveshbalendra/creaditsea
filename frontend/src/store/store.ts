import { configureStore } from "@reduxjs/toolkit";
import reportsSlice from "./slices/creditReportSlice";
export const store = configureStore({
  reducer: {
    reports: reportsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
