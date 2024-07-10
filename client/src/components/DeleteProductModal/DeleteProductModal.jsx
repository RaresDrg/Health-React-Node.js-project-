import { IoReturnDownBackSharp } from "react-icons/io5";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import { HiX } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const DeleteProductModal = ({ className: styles, closeModal }) => {
  const isOnMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
            type={"submit"}
            text={"Delete"}
            // todo:
            // handlerFunction={sterge produsul si se inchide modala}
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
