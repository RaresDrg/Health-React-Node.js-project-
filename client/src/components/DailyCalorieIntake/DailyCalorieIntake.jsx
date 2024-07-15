import { useEffect } from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import { CTAButton } from "../common/FormButton/FormButton.styled";
import useResponsive from "../../hooks/useResponsive";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const DailyCalorieIntake = ({ className: styles, closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const dailyCalorieIntake =
    location.pathname === "/calculator"
      ? user.dailyCalorieIntake
      : localStorage.getItem("dailyCalorieIntake");

  const { isOnMobile } = useResponsive();

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
          {dailyCalorieIntake} <span>kcal</span>
        </p>

        <div className="recomandation">
          <p>Foods you should not eat</p>
          <ol>
            <li>Flour products</li>
            <li>Milk</li>
            <li>Red meat</li>
            <li>Smoked meats</li>
          </ol>
        </div>

        <CTAButton
          type={"button"}
          text={"Start losing weight"}
          handlerFunction={() => navigate("/diary")}
        />
      </div>
    </div>
  );
};

export default DailyCalorieIntake;
