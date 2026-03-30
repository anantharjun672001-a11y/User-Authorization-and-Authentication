import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/dbConfig.js";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the User Authorization and Authentication API!");
});

const PORT = process.env.PORT || 5000;

connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});