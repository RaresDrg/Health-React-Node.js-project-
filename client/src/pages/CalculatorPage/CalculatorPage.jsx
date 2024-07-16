import { lazy, Suspense, useState } from "react";
import StyledDailyCaloriesForm from "../../components/DailyCaloriesForm/DailyCaloriesForm.styled";
import StyledRightSideBar from "../../components/RightSideBar/RightSideBar.styled";
import Container from "../../components/common/Container/Container.styled";
import { createPortal } from "react-dom";

const StyledDailyCalorieIntake = lazy(() =>
  import("../../components/DailyCalorieIntake/DailyCalorieIntake.styled")
);

const CalculatorPage = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={`${styles}mySection`}>
        <Container>
          <StyledDailyCaloriesForm openModal={() => setIsModalOpen(true)} />
        </Container>
      </section>
      <aside className={`${styles}myAside`}>
        <Container>
          <StyledRightSideBar />
        </Container>
      </aside>

      <Suspense>
        {isModalOpen &&
          createPortal(
            <StyledDailyCalorieIntake
              closeModal={() => setIsModalOpen(false)}
            />,
            document.body
          )}
      </Suspense>
    </>
  );
};

export default CalculatorPage;
