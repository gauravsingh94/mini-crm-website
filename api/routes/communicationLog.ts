import { Router, Request, Response } from "express";
import CommunicationLog from "../schemas/communicationLog";
const router = Router();

router.get("/:audienceId", async (req: Request, res: Response) => {
  const audienceId = req.params.audienceId;
  try {
    const logs = await CommunicationLog.find({audienceId:audienceId}).populate('customerId');
    if (logs) {
      res.json(logs);
    }
  } catch (error) {
    console.error("Error while getting logs.", error);
    res.status(500).send({ error: "Error while getting the logs." });
  }
});

export default router;
