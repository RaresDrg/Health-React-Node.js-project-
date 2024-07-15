import express from "express";
import diaryController from "../../controller/diaryController.js";

const router = express.Router();

router.get("/dates/:currentDate", diaryController.getDiaryDate);

router.get("/possibleProducts", diaryController.getPossibleProducts);

router.post("/dates/:currentDate/products", diaryController.addProduct);

router.delete(
  "/dates/:currentDate/products/:productId",
  diaryController.deleteProduct
);

// router.post("/:date/products", diaryController.addProduct);

export default router;
