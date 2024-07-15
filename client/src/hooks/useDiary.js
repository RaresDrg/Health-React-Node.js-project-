import { useSelector } from "react-redux";
import {
  selectDiary,
  selectDiaryDate,
  selectProducts,
} from "../redux/diary/selectors";

const useDiary = () => {
  const currentDate = useSelector(selectDiaryDate);
  const diary = useSelector(selectDiary);
  const products = useSelector(selectProducts);

  return {
    currentDate,
    diary,
    products,
  };
};

export default useDiary;
