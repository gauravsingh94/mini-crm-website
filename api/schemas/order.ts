import { Document, Schema, model } from "mongoose";

export interface OrderType extends Document {
  customerId: Schema.Types.ObjectId;
  orderDate: Date;
  amount: number;
  items: string;
}
const OrderSchema = new Schema<OrderType>({
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  orderDate: { type: Date, default: Date.now },
  amount: { type: "Number", required: true },
  items: { type: String, required: true },
});

export default model<OrderType>("Order", OrderSchema);
