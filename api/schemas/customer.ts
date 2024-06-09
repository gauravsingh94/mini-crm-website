import { Document, Schema, model } from "mongoose";

export interface CusotmerType extends Document {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  totalSpends: number;
  visitCount: number;
  lastVisit: Date;
}

const customerSchema = new Schema<CusotmerType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  totalSpends: { type: Number, default: 0 },
  visitCount: { type: Number, default: 0 },
  lastVisit: { type: Date },
});

export default model<CusotmerType>("Customer", customerSchema);
