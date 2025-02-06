import cors from "cors";
import { config } from "dotenv";
import express, { Express, Request, Response } from "express";
import creditReportRoutes from "./routes/creditReports";
import connectDB from "./service/dbConnector";

config();

export const app: Express = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "https://creaditsea-assignment-frontend.vercel.app", // Allow frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // If using cookies or authentication
  })
);

// Default Route
app.get("/", (request: Request, response: Response) => {
  response.send("hello");
});
app.use("/api", creditReportRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
