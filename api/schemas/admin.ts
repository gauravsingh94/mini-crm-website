import { Document, Schema, model } from "mongoose";

export interface IAdmin extends Document {
  adminname: string;
  email: string;
  profilePic: string;
}

const UserSchema = new Schema<IAdmin>(
  {
    adminname: { type: String, required: true },
    email: { type: String, required: true },
    profilePic: { type: String },
    _id: { type: String, require: true },
  },
  { timestamps: true }
);

export default model<IAdmin>("Admin", UserSchema);
