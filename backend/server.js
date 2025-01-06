import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

//App configuration

const app = express();
const port = process.env.PORT || 3000;
connectDB()
connectCloudinary()

//Middleware

app.use(cors());
app.use(express.json());

//API configuration

app.get("/", (req, res) => {
    res.send("Server is running");
});
//Listen

app.listen(port, () => console.log(`Server running on port ${port}`));
//Database connection