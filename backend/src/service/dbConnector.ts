import { config } from "dotenv";
import mongoose from "mongoose";

config();
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/DatabaseName";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
