import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import SelectState from "./components/SelectState";
import useGetReportData from "./hooks/getReportData";
import useGetReportIDs from "./hooks/getReportIDs";
import { RootState } from "./store/store";

const MainLayout = () => {
  useGetReportData();
  useGetReportIDs();
  const reports = useSelector((state: RootState) => state.reports.reports);

  useEffect(() => {
    console.log(reports);
  }, [reports]);

  return (
    <div>
      <Header />
      <SelectState />
      <div className="my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
