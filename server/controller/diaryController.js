import diaryService from "../service/diaryService.js";
import utils from "../utils/utils.js";

async function getDiaryDate(req, res, next) {
  try {
    const { currentDate } = req.params;
    const { id: owner } = req.user;

    if (
      new Date(currentDate) === "Invalid Date" ||
      new Date(currentDate).toISOString() !== currentDate
    ) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Date must be in ISO format",
      });
      return;
    }

    const date = new Date(currentDate).toLocaleDateString();
    const result = await diaryService.findDiaryDate(owner, date);

    if (!result) {
      res.status(404).json({
        status: "failed",
        code: 404,
        message: `There is no information for the date you selected !`,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Operation completed with success. Here are your diary date info !`,
      data: {
        date: result.date,
        dailyRate: result.dailyRate,
        left: result.left,
        consumed: result.consumed,
        rateOfNormal: result.rateOfNormal,
        products: result.products,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function getPossibleProducts(req, res, next) {
  try {
    const result = await diaryService.findAvaibleProducts();

    if (!result) {
      res.status(404).json({
        status: "failed",
        code: 404,
        message: `There is no available products !`,
      });
      return;
    }

    res.status(200).json({ status: "success", code: 200, products: result });
  } catch (error) {
    next(error);
  }
}

async function addProduct(req, res, next) {
  try {
    const { name, grams, kcal } = req.body;
    const hasAllRequiredFields = name && grams && kcal;

    if (!hasAllRequiredFields) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Missing fields. You must send: name, grams, and kcal !",
      });
      return;
    }

    const { currentDate } = req.params;
    if (
      new Date(currentDate) === "Invalid Date" ||
      new Date(currentDate).toISOString() !== currentDate
    ) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Date must be in ISO format",
      });
      return;
    }

    const date = new Date(currentDate).toLocaleDateString();
    const { id: owner, dailyCalorieIntake } = req.user;
    const result = await diaryService.findDiaryDate(owner, date);

    if (!result) {
      const left = (dailyCalorieIntake - kcal).toFixed(0);
      const consumed = (0 + kcal).toFixed(0);
      const rate = ((consumed / dailyCalorieIntake) * 100).toFixed(0);
      const rateOfNormal = `${rate} %`;

      const newDateInfo = {
        date,
        dailyRate: dailyCalorieIntake,
        left,
        consumed,
        rateOfNormal,
        products: [{ name, grams, kcal: kcal.toFixed(0) }],
        owner,
      };

      const newDiaryDate = await diaryService.createNewDate(newDateInfo);

      res.status(201).json({
        status: "success",
        code: 201,
        message: `Operation completed with success. Product added to your diary !`,
        data: {
          date: newDiaryDate.date,
          dailyRate: newDiaryDate.dailyRate,
          left: newDiaryDate.left,
          consumed: newDiaryDate.consumed,
          rateOfNormal: newDiaryDate.rateOfNormal,
          products: newDiaryDate.products,
        },
      });
      return;
    }

    const consumed = (result.consumed + kcal).toFixed(0);
    const left = (result.left - kcal).toFixed(0);
    const rate = ((consumed / result.dailyRate) * 100).toFixed(0);
    const rateOfNormal = `${rate} %`;
    const products = [
      { name, grams, kcal: kcal.toFixed(0) },
      ...result.products,
    ];

    const updates = {
      consumed,
      left,
      rateOfNormal,
      products,
    };

    const updatedDate = await diaryService.updateDate(owner, date, updates);

    res.status(201).json({
      status: "success",
      code: 201,
      message: `Operation completed with success. Product added to your diary !`,
      data: {
        date: updatedDate.date,
        dailyRate: updatedDate.dailyRate,
        left: updatedDate.left,
        consumed: updatedDate.consumed,
        rateOfNormal: updatedDate.rateOfNormal,
        products: updatedDate.products,
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

async function deleteProduct(req, res, next) {
  try {
    const { currentDate, productId } = req.params;

    if (
      new Date(currentDate) === "Invalid Date" ||
      new Date(currentDate).toISOString() !== currentDate
    ) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "Date must be in ISO format",
      });
      return;
    }

    const date = new Date(currentDate).toLocaleDateString();
    const { id: owner } = req.user;
    const result = await diaryService.findDiaryDate(owner, date);

    if (!result) {
      res.status(404).json({
        status: "failed",
        code: 404,
        message: `There is no information for the transmitted date !`,
      });
      return;
    }

    const savedProducts = result.products;
    const productToDelete = savedProducts.find((item) => item.id === productId);

    if (!productToDelete) {
      res.status(404).json({
        status: "failed",
        code: 404,
        message: `We couldn't find any product with that id !`,
      });
      return;
    }

    const updatedLeft = result.left + productToDelete.kcal;
    const updatedConsumed = result.consumed - productToDelete.kcal;
    const updateRate = ((updatedConsumed / result.dailyRate) * 100).toFixed(0);
    const updatedRateOfNormal = `${updateRate} %`;
    const updatedProducts = savedProducts.filter(
      (item) => item !== productToDelete
    );

    const updates = {
      left: updatedLeft,
      consumed: updatedConsumed,
      rateOfNormal: updatedRateOfNormal,
      products: updatedProducts,
    };

    const updatedDate = await diaryService.updateDate(owner, date, updates);

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Operation completed. Product deleted with success !`,
      data: {
        date: updatedDate.date,
        dailyRate: updatedDate.dailyRate,
        left: updatedDate.left,
        consumed: updatedDate.consumed,
        rateOfNormal: updatedDate.rateOfNormal,
        products: updatedDate.products,
      },
    });
  } catch (error) {
    next(error);
  }
}

const diaryController = {
  getDiaryDate,
  getPossibleProducts,
  addProduct,
  deleteProduct,
};

export default diaryController;
