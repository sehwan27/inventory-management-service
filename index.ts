import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
