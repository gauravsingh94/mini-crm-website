import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
import Admin from "./schemas/admin";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (_accessToken: string, _refreshToken: string, profile: any, done) => {
      const admin = await Admin.findById(profile.id);
      if (admin) {
        return done(null, admin);
      } else {
        const newAdmin = await Admin.create({
          adminname: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
          _id: profile.id,
        });
        return done(null, newAdmin);
      }
    }
  )
);

passport.serializeUser((admin: any, done) => {
  done(null, admin.id);
});

passport.deserializeUser(async (id: string, done) => {
  const admin = await Admin.findById(id);
  done(null, admin);
});
