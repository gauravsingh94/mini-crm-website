import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customerRoutes from "./routes/customer";
import orderRoutes from "./routes/order";
import audienceRoutes from "./routes/audience";
import sendMessageRoute from "./routes/sendMessage";
import communicationLogRoute from "./routes/communicationLog";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [`${process.env.CLIENT_URL}`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use("/audience", audienceRoutes);
app.use("/send/message", sendMessageRoute);
app.use("/logs", communicationLogRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
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
