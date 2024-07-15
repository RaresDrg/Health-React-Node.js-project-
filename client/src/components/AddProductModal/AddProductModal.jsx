import { useEffect } from "react";
import StyledDiaryAddProductForm from "../DiaryAddProductForm/DiaryAddProductForm.styled";

const AddProductModal = ({ className: styles, closeModal }) => {
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
    <div className={styles}>
      <div className="modalContent">
        <StyledDiaryAddProductForm closeModal={closeModal} />
      </div>
    </div>
  );
};

export default AddProductModal;
