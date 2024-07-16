import Container from "../../components/common/Container/Container.styled";
import { lazy, Suspense, useState } from "react";
import { createPortal } from "react-dom";
import StyledDailyCaloriesForm from "../../components/DailyCaloriesForm/DailyCaloriesForm.styled";

const StyledDailyCalorieIntake = lazy(() =>
  import("../../components/DailyCalorieIntake/DailyCalorieIntake.styled")
);

const HomePage = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles}>
        <Container>
          <StyledDailyCaloriesForm openModal={() => setIsModalOpen(true)} />
        </Container>
      </section>

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

export default HomePage;
