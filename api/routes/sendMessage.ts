import { Request, Response, Router } from "express";
import Audience from "../schemas/audience";
import CommunicationLog from "../schemas/communicationLog";

const router = Router();

function getRandomBoolean() {
  return Math.random() >= 0.5;
}
router.post("/:audienceId", async (req: Request, res: Response) => {
  const audienceId = req.params.audienceId;
  const message = req.body.message;
  try {
    const audience = await Audience.findById(audienceId).populate("customer");
    if (audience) {
      audience.customer.forEach(async (element) => {
        await CommunicationLog.create({
          audienceId: audienceId,
          //@ts-ignore
          customerId: element._id,
          //@ts-ignore
          message: `Hi ${element.name}, ${message}`,
          status: getRandomBoolean() ? "Sent" : "Failed",
        });
      });
      res.status(200).send({ message: "Messages sent successfully." });
    } else {
      res.status(404).send({ error: "Audience not found." });
    }
  } catch (error) {
    console.error("Error while sending message", error);
    res.status(500).send({ error: "Not able to send message." });
  }
});

export default router;
