import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICreditReport } from "../../types/creditReportsTypes";

interface ReportID {
  id: string;
  name: string;
}

interface ReportsState {
  reports: ICreditReport[] | null;
  reportIDs: ReportID[];
  report: ICreditReport | null;
}

const initialState: ReportsState = {
  reports: null,
  reportIDs: [],
  report: null,
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    setReports: (state, action: PayloadAction<ICreditReport[]>) => {
      state.reports = action.payload;
    },
    setReportsIds: (state, action: PayloadAction<ReportID[]>) => {
      state.reportIDs = [...action.payload];
    },
    setReport: (state, action: PayloadAction<ICreditReport>) => {
      state.report = { ...action.payload };
    },
  },
});

export const { setReports, setReportsIds, setReport } = reportsSlice.actions;
export default reportsSlice.reducer;
