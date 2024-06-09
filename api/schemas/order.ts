import { Document, Schema, model } from "mongoose";

export interface OrderType extends Document {
  cusotmerId: Schema.Types.ObjectId;
  orderDate: Date;
  amount: number;
  items: {
    productName: string;
  }[];
}
const OrderSchema = new Schema<OrderType>({
  cusotmerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  orderDate: { type: Date, default: Date.now },
  amount: { type: "Number", required: true },
  items: [
    {
      productId: Schema.Types.ObjectId,
      quantity: Number,
    },
  ],
});

export default model<OrderType>("Order", OrderSchema);
