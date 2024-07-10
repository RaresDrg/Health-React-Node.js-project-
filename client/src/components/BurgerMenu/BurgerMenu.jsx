import { useEffect } from "react";
import { AppNavigation } from "../Navigation/Navigation.styled";

const BurgerMenu = ({ className: styles, closeModal }) => {
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

  const handleCloseModal = ({ target }) => {
    if (target.nodeName !== "A") return;

    target.nodeName === "A" &&
      !target.classList.contains("active") &&
      closeModal();
  };

  return (
    <div className={styles}>
      <div className="modalContent" onClick={handleCloseModal}>
        <AppNavigation />
      </div>
    </div>
  );
};

export default BurgerMenu;
