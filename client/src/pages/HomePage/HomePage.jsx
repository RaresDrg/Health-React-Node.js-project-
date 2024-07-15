import Container from "../../components/common/Container/Container.styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import StyledDailyCaloriesForm from "../../components/DailyCaloriesForm/DailyCaloriesForm.styled";
import StyledDailyCalorieIntake from "../../components/DailyCalorieIntake/DailyCalorieIntake.styled";

const HomePage = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles}>
        <Container>
          <StyledDailyCaloriesForm openModal={() => setIsModalOpen(true)} />
        </Container>
      </section>

      {isModalOpen &&
        createPortal(
          <StyledDailyCalorieIntake closeModal={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default HomePage;
