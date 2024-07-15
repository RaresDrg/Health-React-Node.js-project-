import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useResponsive from "../../hooks/useResponsive";
import useAuth from "../../hooks/useAuth";

import Container from "../../components/common/Container/Container.styled";
import StyledRestrictedPageModal from "../../components/RestrictedPageModal/RestrictedPageModal.styled";
import StyledDiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.styled";
import StyledDiaryProductsList from "../../components/DiaryProductsList/DiaryProductsList.styled";
import StyledAddProductBtn from "../../components/AddProductBtn/AddProductBtn.styled";
import StyledDiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.styled";
import StyledAddProductModal from "../../components/AddProductModal/AddProductModal.styled";
import StyledDeleteProductModal from "../../components/DeleteProductModal/DeleteProductModal.styled";
import StyledRightSideBar from "../../components/RightSideBar/RightSideBar.styled";

import { useDispatch } from "react-redux";
import { updateUserWithDailyRate } from "../../redux/auth/operations.js";

const DiaryPage = ({ className: styles }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dailyCalorieIntake = localStorage.getItem("dailyCalorieIntake");

    if (dailyCalorieIntake) {
      dispatch(updateUserWithDailyRate({ dailyCalorieIntake }));
      localStorage.removeItem("dailyCalorieIntake");
    }
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { isOnMobile, isNotOnMobile } = useResponsive();
  const { user } = useAuth();

  return (
    <>
      <section className={`${styles}mySection`}>
        <Container>
          <StyledDiaryDateCalendar />
          {isNotOnMobile && <StyledDiaryAddProductForm />}

          <StyledDiaryProductsList
            openModal={() => setIsDeleteModalOpen(true)}
          />

          {isOnMobile && (
            <StyledAddProductBtn
              type={"button"}
              handlerFunction={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsAddModalOpen(true);
              }}
            />
          )}
        </Container>
      </section>
      <aside className={`${styles}myAside`}>
        <Container>
          <StyledRightSideBar />
        </Container>
      </aside>

      {!user.dailyCalorieIntake &&
        createPortal(<StyledRestrictedPageModal />, document.body)}

      {isDeleteModalOpen &&
        createPortal(
          <StyledDeleteProductModal
            closeModal={() => setIsDeleteModalOpen(false)}
          />,
          document.body
        )}

      {isOnMobile &&
        isAddModalOpen &&
        createPortal(
          <StyledAddProductModal closeModal={() => setIsAddModalOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default DiaryPage;
