import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Successfully connected to the database.");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
