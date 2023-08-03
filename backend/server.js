import express from "express";
import dotenv from "dotenv";
import userRoute from "./src/routes/userRoutes.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
