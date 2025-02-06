import fs from "fs";
import multer from "multer";
import path from "path";

// Ensure 'uploads/' directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Store files in 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter (only allow XML files)
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (file.mimetype === "text/xml" || file.mimetype === "application/xml") {
    cb(null, true);
  } else {
    cb(new Error("Only XML files are allowed"), false);
  }
};

// Initialize multer with storage and file filter
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

export default upload;
