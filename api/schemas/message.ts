import { Document, Schema, model } from "mongoose";

export interface MessageType extends Document {
  content: string;
}

const MessageSchema = new Schema<MessageType>({
  content: { type: String, required: true },
});

export default model<MessageType>("Message", MessageSchema);
