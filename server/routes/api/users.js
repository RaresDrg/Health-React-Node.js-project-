import express from "express";
import usersController from "../../controller/usersController.js";
import validateAuth from "../../config/config-passport.js";

const router = express.Router();

router.post("/register", usersController.register);

router.get("/verify/:verificationToken", usersController.verifyRegistration);

router.post("/login", usersController.login);

router.get("/logout", validateAuth, usersController.logout);

router.get("/current", validateAuth, usersController.getCurrentUserData);

router.post("/calcDailyRate", usersController.calculateDailyRate);

router.patch(
  "/current/dailyRate",
  validateAuth,
  usersController.updateUserDailyRate
);

export default router;
