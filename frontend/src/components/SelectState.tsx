import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

const SelectState = () => {
  const navigate = useNavigate();

  const { reportIDs } = useSelector((state: RootState) => state.reports) || {
    reportIDs: [],
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    if (selectedId) {
      navigate(`/report/${selectedId}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-6">
      {/* View Reports Button */}
      <button
        onClick={() => navigate("/reports")}
        className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        View Reports
      </button>

      {/* Select Dropdown */}
      <select
        className="w-full md:w-auto border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        defaultValue=""
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select Category
        </option>
        {reportIDs.length > 0 ? (
          reportIDs.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))
        ) : (
          <option disabled>No Reports Available</option>
        )}
      </select>

      {/* Upload File Button */}
      <button
        onClick={() => navigate("/upload")}
        className="w-full md:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      >
        Upload File
      </button>
    </div>
  );
};

export default SelectState;
