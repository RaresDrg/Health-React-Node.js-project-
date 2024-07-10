import { useEffect } from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import { CTAButton } from "../common/FormButton/FormButton.styled";
import { useMediaQuery } from "react-responsive";

const DailyCalorieIntake = ({ className: styles, closeModal }) => {
  // todo: kcal din db sau o calculez eu
  const kcal = 2800;

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
        <p className="title">Your recommended daily calorie intake is</p>
        <p className="kcal">
          {kcal} <span>kcal</span>
        </p>

        <div className="recomandation">
          <p>Foods you should not eat</p>
          <ol>
            <li>Flour products</li>
            <li>Milk</li>
            <li>Red mea</li>
            <li>Smoked meats</li>
          </ol>
        </div>

        <CTAButton
          // onClick={handlerFunction}
          type={"button"}
          text={"Start losing weight"}
          // handlerFunction={}
        />
      </div>
    </div>
  );
};

export default DailyCalorieIntake;
