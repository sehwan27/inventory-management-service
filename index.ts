import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import cors from 'cors'
import { databaseConnection } from "./middleware/database";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

databaseConnection()
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
