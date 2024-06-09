import { Document, Schema, model } from "mongoose";

export interface CommunicationLogType extends Document {
  audienceId: Schema.Types.ObjectId;
  customerId: Schema.Types.ObjectId;
  message: string;
  status: "Sent" | "Failed";
  createdAt: Date;
}

const CommunicationLogType = new Schema<CommunicationLogType>({
  audienceId: { type: Schema.Types.ObjectId, ref: "Audience", required: true },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  message: { type: String, required: true },
  status: { type: String, required: true, enum: ["Sent", "Failed"] },
  createdAt: { type: Date, default: Date.now },
});

export default model<CommunicationLogType>(
  "CommunicationLog",
  CommunicationLogType
);
