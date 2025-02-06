import { NextFunction, Request, Response, Router } from "express";
import {
  handleDeleteReportById,
  handleGetReportById,
  handleGetReportIds,
  handleGetReports,
  handleUploadXML,
} from "../controllers/creditReports";
import upload from "../middlewares/multer";

const router = Router();

// Middleware to handle file upload errors properly
router.post(
  "/upload",
  (request: Request, response: Response, next: NextFunction) => {
    console.log("route");
    upload.single("xmlFile")(request, response, function (err) {
      if (err) {
        return response
          .status(400)
          .json({ success: false, message: err.message });
      }
      next();
    });
  },
  handleUploadXML
);
router.get("/reports", handleGetReports);
router.get("/report/:id", handleGetReportById);
router.get("/get-ids", handleGetReportIds);
router.delete("/report/:id", handleDeleteReportById);
export default router;
