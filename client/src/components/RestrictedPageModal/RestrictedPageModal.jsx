import { useNavigate } from "react-router-dom";
import { CTAButton } from "../common/FormButton/FormButton.styled";

import UseAnimations from "react-useanimations";
import alertOctagon from "react-useanimations/lib/alertOctagon";
import { useEffect } from "react";

const RestrictedPageModal = ({ className: styles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className={styles}>
      <div className="modalContent">
        <UseAnimations
          animation={alertOctagon}
          size={60}
          strokeColor={"#ff003b"}
        />

        <p>
          In order to track the food you eat daily, you must first calculate
          your daily caloric intake.
        </p>

        <CTAButton
          type={"button"}
          text={"Go to Calculator"}
          handlerFunction={() => navigate("/calculator")}
        />
      </div>
    </div>
  );
};

export default RestrictedPageModal;
