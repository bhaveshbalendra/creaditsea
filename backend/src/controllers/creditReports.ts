import { Request, Response } from "express";
import fs from "fs/promises";
import { CreditReportModel } from "../models/creditReports";
import parseXML from "../utils/xmlParser";

// Controller to handle file upload and XML parsing
const handleUploadXML = async (req: Request, res: Response): Promise<any> => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Check if file already exists in the database (you can use the file name or a hash)
    const existingReport = await CreditReportModel.findOne({
      fileName: req.file.originalname,
    });

    if (existingReport) {
      return res.status(400).json({
        success: false,
        message: `File "${req.file.originalname}" has already been uploaded.`,
      });
    }

    // Read the uploaded XML file
    const xmlData = await fs.readFile(req.file.path, "utf8");

    // Parse XML data
    console.log("Parsing XML...");
    const parsedData = await parseXML(xmlData);

    // Check if parsed data is valid
    if (!parsedData) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid XML structure" });
    }

    // Save parsed data into MongoDB
    const creditReport = await CreditReportModel.create({
      ...parsedData,
      fileName: req.file.originalname, // Save file name for future reference
    });
    await creditReport.save();

    // Delete the uploaded XML file
    await fs.unlink(req.file.path);
    console.log("Uploaded file deleted successfully.");

    // Respond with success message
    return res.status(200).json({
      message: "File uploaded, processed, and deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error processing XML file:", error);

    // Delete the file if an error occurs
    if (req.file) {
      await fs
        .unlink(req.file.path)
        .catch((err) => console.error("Error deleting file:", err));
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// Fetch all reports with selected fields
const handleGetReports = async (req: Request, res: Response): Promise<any> => {
  try {
    const reports = await CreditReportModel.find();
    res.json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Error fetching reports" });
  }
};

// Fetch a report by ID
const handleGetReportById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const report = await CreditReportModel.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(report);
  } catch (error) {
    console.error("Error fetching report:", error);
    res.status(500).json({ message: "Error fetching report" });
  }
};

const handleGetReportIds = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const reports = await CreditReportModel.find().select(
      "_id basicDetails.subscriberName"
    );

    if (!reports || reports.length === 0) {
      return res.status(404).json({ message: "Reports not found" });
    }

    const formattedReports = reports.map((report: any) => ({
      id: report._id.toString(),
      name: report.basicDetails?.subscriberName || "Unknown",
    }));

    res.json(formattedReports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Error fetching reports" });
  }
};

// handles delete report
const handleDeleteReportById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const report = await CreditReportModel.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: `No report found with ID: ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Report with ID: ${req.params.id} deleted successfully`,
    });
  } catch (error) {
    console.error(`Error deleting report with ID ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: "Internal server error while deleting the report",
    });
  }
};

export {
  handleDeleteReportById,
  handleGetReportById,
  handleGetReportIds,
  handleGetReports,
  handleUploadXML,
};
