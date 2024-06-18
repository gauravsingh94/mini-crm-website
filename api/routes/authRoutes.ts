import express, { Router, Request, Response } from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const router: Router = express.Router();

interface CustomRequest extends Request {
  admin?: any;
}

router.get("/login/success", (req: CustomRequest, res: Response) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    return res
      .status(200)
      .json({ message: "User authenticated", admin: req.user });
  } else {
    return res.status(401).json({ message: "User not authenticated" });
  }
});

router.get("/login/failed", (_req: Request, res: Response) => {
  res.status(401).json({ message: "Log in faiure." });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).send("An error occurred while logging out");
    }
    res.status(200).json({ message: "Successfully logged out" });
  });
});


export default router;
