import express from "express";
import mongoose from "mongoose";
import customerRoutes from "./routes/customer";
import orderRoutes from "./routes/order";
import audienceRoutes from "./routes/audience";
import sendMessageRoute from "./routes/sendMessage";
import communicationLogRoute from "./routes/communicationLog";

const app = express();
app.use(express.json());

app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use("/audience", audienceRoutes);
app.use("/send/message", sendMessageRoute);
app.use("/logs", communicationLogRoute);

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
