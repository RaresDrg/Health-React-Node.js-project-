import { HiX } from "react-icons/hi";
import { setProductToDelete } from "../../redux/diary/slice";
import { useDispatch } from "react-redux";

const DiaryProductItem = ({ className: styles, product, openModal }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setProductToDelete(product));
    openModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles} key={product.id}>
      <span>{product.name}</span>
      <span>
        {product.grams}
        <span>g</span>
      </span>
      <span>
        {product.kcal}
        <span>Kcal</span>
      </span>
      <button type="button" onClick={handleClick}>
        <HiX />
      </button>
    </div>
  );
};

export default DiaryProductItem;
