import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customerRoutes from "./routes/customer";
import orderRoutes from "./routes/order";
import audienceRoutes from "./routes/audience";
import sendMessageRoute from "./routes/sendMessage";
import communicationLogRoute from "./routes/communicationLog";
import authRoutes from "./routes/authRoutes";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import "./passport";
dotenv.config();

const app = express();
app.use(
  session({
    secret: `${process.env.SECRET}`,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(helmet());
app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use("/audience", audienceRoutes);
app.use("/send/message", sendMessageRoute);
app.use("/logs", communicationLogRoute);
app.use("/auth", authRoutes);

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
