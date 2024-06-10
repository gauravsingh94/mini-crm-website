import { Document, Schema, model } from "mongoose";

export interface AudienceType extends Document {
  name: string;
  createdAt: Date;
  customer: Schema.Types.ObjectId[];
  size: number;
}

const AudienceSchema = new Schema<AudienceType>({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  customer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
  size: { type: Number, required: true, default: 0 },
});

export default model<AudienceType>("Audience", AudienceSchema);
