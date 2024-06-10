import { Router, Request, Response } from "express";
import Audience from "../schemas/audience";
const router = Router();

router.post("/new", async (req: Request, res: Response) => {
  const { name, customer, size } = req.body;
  try {
    const newAudience = await Audience.create({
      name,
      customer,
      size,
    });

    if (newAudience) {
      res.json(newAudience);
    }
  } catch (error) {
    console.error("Error while creating audience.", error);
    res.status(500).send({ error: "Not able to create the audience." });
  }
});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const allAudience = await Audience.find({}).populate("customer");
    if (allAudience) {
      res.json(allAudience);
    }
  } catch (error) {
    console.error("Error while getting all audience.", error);
    res.status(500).send({ error: "Not able to get the all audience." });
  }
});

router.get("/:audienceId", async (req: Request, res: Response) => {
  const audienceId = req.params.audienceId;
  try {
    const audience = await Audience.findById(audienceId).populate("customer");
    if (audience) {
      res.json(audience);
    }
  } catch (error) {
    console.error("Error while getting audience.", error);
    res.status(500).send({ error: "Not able to get the audience." });
  }
});

export default router;
