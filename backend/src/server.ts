import cors from "cors";
import { config } from "dotenv";
import express from "express";
import creditReportRoutes from "./routes/creditReports";
import connectDB from "./service/dbConnector";

config();

export const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Default Route
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api", creditReportRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
