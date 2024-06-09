import { Router, Request, Response } from "express";
import Order from "../schemas/order";
const router = Router();

router.post("/:customerId", async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  const { amount, items } = req.body;
  try {
    const newOrder = await Order.create({
      customerId,
      amount,
      items,
    });
    if (newOrder) {
      res.json(newOrder);
    }
  } catch (error) {
    console.error("Error while creating order", error);
    res.status(500).send({ error: "Not able to create the order." });
  }
});

router.get("/:customerId", async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  try {
    const orders = await Order.find({ customerId: customerId });
    if (orders) {
      res.json(orders);
    }
  } catch (error) {
    console.error("Error while creating order", error);
    res.status(500).send({ error: "Not able to get the order." });
  }
});

export default router;
