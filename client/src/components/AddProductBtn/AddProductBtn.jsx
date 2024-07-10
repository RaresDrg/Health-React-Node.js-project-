import { FaPlus } from "react-icons/fa6";

const AddProductBtn = ({
  className: styles,
  type,
  handlerFunction,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      className={styles}
      onClick={handlerFunction}
      disabled={isDisabled}
    >
      <FaPlus color="#ffffff" />
    </button>
  );
};

export default AddProductBtn;
