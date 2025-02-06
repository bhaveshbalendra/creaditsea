import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../constants/baseURL";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      // Validate file type (only XML)
      if (!selectedFile.name.endsWith(".xml")) {
        setError("⚠ Please select a valid XML file.");
        setFile(null);
      } else {
        setFile(selectedFile);
        setError(null);
      }
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setError("⚠ Please select a file first.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("xmlFile", file);

    try {
      const response = await axios.post(`${baseURL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (response.data.success) {
        setMessage("File uploaded successfully!");
        setError(null);

        // First navigate to the reports page, then reload
        navigate("/reports");
        window.location.reload();
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError("⚠ Error uploading file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-6">Upload XML File</h1>

        <input
          type="file"
          accept=".xml"
          onChange={handleFileChange}
          className="block w-full border p-2 rounded-md"
        />

        {file && <p className="mt-2 text-gray-600">{file.name}</p>}

        <button
          className={`mt-4 w-full px-4 py-2 rounded-md text-white ${
            file
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          } transition`}
          onClick={handleUpload}
          disabled={!file || isUploading}
        >
          {isUploading ? "Uploading..." : "Upload File"}
        </button>

        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default UploadPage;
