import usersService from "../service/usersService.js";
import utils from "../utils/utils.js";
import sendConfirmRegistrationEmail from "../config/config-nodemailder.js";

async function register(req, res, next) {
  try {
    const result = await usersService.addUsertoDB({ ...req.body });

    if (result === "user already exists") {
      res.status(409).json({
        status: "failed",
        code: 409,
        message: "This email is already used",
      });
      return;
    }

    // todo: cu send grid
    sendConfirmRegistrationEmail(result.email, result.verificationToken);

    res.status(201).json({
      status: "success",
      code: 201,
      user: {
        name: result.name,
        email: result.email,
      },
      message:
        "User created successfully. Now, check your email and confirm the registration.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      utils.handleValidationError(res, error.message);
      return;
    }

    next(error);
  }
}

async function verifyRegistration(req, res, next) {
  try {
    const { verificationToken } = req.params;
    const result = await usersService.findUser({ verificationToken });

    if (!result) {
      res.status(404).json({ code: 404, message: "User not found" });
      return;
    }

    if (result.verify === true) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Verification has already been passed",
      });
      return;
    }

    await usersService.updateUser(result.id, { verify: true });

    res.status(200).json({
      status: "succes",
      code: 200,
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Missing fields. You must enter: email and password !",
      });
      return;
    }

    const result = await usersService.checkUserLoginData({ email, password });

    if (result === "email is wrong" || result === "password is wrong") {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: result,
      });
      return;
    }

    if (result.verify === false) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Confirm your registration first, then you can log in.",
      });
      return;
    }

    const token = await usersService.addUserToken(result);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Logged in successfully",
      data: {
        token,
        user: {
          email: result.email,
          name: result.name,
          dailyCalorieIntake: result.dailyCalorieIntake,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    await usersService.updateUser(req.user.id, { token: null });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function getCurrentUserData(req, res, next) {
  try {
    const { email, name, dailyCalorieIntake } = req.user;

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        user: {
          name,
          email,
          dailyCalorieIntake,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

async function calculateDailyRate(req, res, next) {
  try {
    const { height, age, currentWeight, desiredWeight, bloodType } = req.body;

    const hasAllRequiredFields =
      height && age && currentWeight && desiredWeight && bloodType;

    if (!hasAllRequiredFields) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message:
          "Missing fields. You must enter: height, age, currentWeight, desiredWeight and bloodType.",
      });
      return;
    }

    const dailyCalorieIntake =
      10 * Number(desiredWeight) + 6.25 * Number(height) - 5 * Number(age) + 5;

    res.status(201).json({
      status: "success",
      code: 200,
      message: "Operation completed with success !",
      data: { dailyCalorieIntake: dailyCalorieIntake.toFixed(0) },
    });
  } catch (error) {
    next(error);
  }
}

async function updateUserDailyRate(req, res, next) {
  try {
    const { dailyCalorieIntake } = req.body;
    const userId = req.user.id;

    if (!dailyCalorieIntake) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Missing data. You must send your daily calorie intake",
      });
      return;
    }

    const updatedUser = await usersService.updateUser(userId, {
      dailyCalorieIntake,
    });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "User's daily caloric intake updated with success !",
      data: {
        email: updatedUser.email,
        name: updatedUser.name,
        dailyCalorieIntake: updatedUser.dailyCalorieIntake,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      utils.handleValidationError(res, error.message);
      return;
    }

    next(error);
  }
}

const usersController = {
  register,
  verifyRegistration,
  login,
  logout,
  getCurrentUserData,
  calculateDailyRate,
  updateUserDailyRate,
};

export default usersController;
