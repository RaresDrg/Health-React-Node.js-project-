import { IoReturnDownBackSharp } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import { useEffect } from "react";
import useResponsive from "../../hooks/useResponsive";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import { useDispatch } from "react-redux";
import { deleteDiaryDateProduct } from "../../redux/diary/operations";
import useDiary from "../../hooks/useDiary";
import { toast } from "react-toastify";

const DeleteProductModal = ({ className: styles, closeModal }) => {
  const { isOnMobile } = useResponsive();
  const dispatch = useDispatch();
  const { diary } = useDiary();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", addCloseEvent);

    function addCloseEvent(event) {
      event.key === "Escape" && closeModal();
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", addCloseEvent);
    };
  });

  function handleDelete() {
    dispatch(deleteDiaryDateProduct(diary.productToDelete._id))
      .unwrap()
      .then((value) => {
        toast.success(value.message);
      })
      .catch((error) => {
        const errorNotification =
          error?.response?.data?.message || "Internal server error";
        toast.error(errorNotification);
      })
      .finally(() => closeModal());
  }

  return (
    <div
      className={styles}
      onClick={(event) => event.currentTarget === event.target && closeModal()}
    >
      <div className="modalContent">
        <div className="closeBtn">
          <button type="button" onClick={() => closeModal()}>
            {isOnMobile ? <IoReturnDownBackSharp /> : <HiX />}
          </button>
        </div>
        <h2>
          Are you sure you want to remove this product from your diary list?
        </h2>

        <div className="buttonWrapper">
          <OrangeButton
            type={"button"}
            text={"Delete"}
            handlerFunction={handleDelete}
          />

          <WhiteButton
            type="button"
            text={"Cancel"}
            handlerFunction={() => {
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
