import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";
import ReportsPage from "./pages/ReportsPage";
import UploadPage from "./pages/UploadPage";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/report/:id" element={<ReportPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
