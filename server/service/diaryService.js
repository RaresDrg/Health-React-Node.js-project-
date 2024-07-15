import DiaryDate from "./schemas/diarySchema.js";
import Product from "./schemas/productsSchema.js";

function findDiaryDate(owner, date) {
  return DiaryDate.findOne({ owner, date });
}

function findAvaibleProducts() {
  return Product.find({}, { title: 1, calories: 1, _id: 0 });
}

function createNewDate(dateInfo) {
  return DiaryDate.create(dateInfo);
}

function updateDate(owner, date, updates) {
  return DiaryDate.findOneAndUpdate({ owner, date }, updates, {
    new: true,
    runValidators: true,
  });
}

const diaryService = {
  findDiaryDate,
  findAvaibleProducts,
  createNewDate,
  updateDate,
};

export default diaryService;
