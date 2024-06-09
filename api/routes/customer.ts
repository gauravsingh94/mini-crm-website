import { Router, Request, Response } from "express";
import Customer from "../schemas/customer";

const router = Router();

router.post("/new", async (req: Request, res: Response) => {
  const { name, email, phone, address, totalSpends, visitCount } = req.body;
  try {
    const newCustomer = await Customer.create({
      name,
      email,
      phone,
      address,
      totalSpends,
      visitCount,
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).send({ error: "Not able to create the customer." });
  }
});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const Customers = await Customer.find({});
    if (Customers) {
      res.json(Customers);
    }
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).send({ error: "Not able to create the customer." });
  }
});

export default router;
