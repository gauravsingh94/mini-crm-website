import { Router, Request, Response } from "express";
import Customer from "../schemas/customer";

const router = Router();

router.post("/new", async (req: Request, res: Response) => {
  const { name, email, phone, address, totalSpends, visitCount } = req.body;
  const lastVisit = Date.now();
  try {
    const newCustomer = await Customer.create({
      name,
      email,
      phone,
      address,
      totalSpends,
      visitCount,
      lastVisit,
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

router.get("/filter", async (req: Request, res: Response) => {
  const minTotalSpends = parseInt(req.query.minTotalSpends as string) || 0;
  const maxTotalSpends =
    parseInt(req.query.maxTotalSpends as string) || Number.MAX_SAFE_INTEGER;
  const maxVisits =
    parseInt(req.query.maxVisits as string) || Number.MAX_SAFE_INTEGER;
  const notVisitedInLastMonths =
    parseInt(req.query.notVisitedInLastMonths as string) || 0;
  const lessThanMonth = new Date();
  lessThanMonth.setMonth(lessThanMonth.getMonth() - notVisitedInLastMonths);

  try {
    const customers = await Customer.find({
      $and: [
        {
          totalSpends: { $gte: minTotalSpends, $lte: maxTotalSpends },
          visitCount: { $lte: maxVisits },
          lastVisit: { $lt: new Date(lessThanMonth) },
        },
      ],
    });
  res.json(customers);
  } catch (error) {
    console.error("Error filtering customers:", error);
    res.status(500).send({ error: "Not able to filter customers." });
  }
});

export default router;
