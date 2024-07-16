import { lazy, Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useResponsive from "../../hooks/useResponsive";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/common/Container/Container.styled";
import StyledDiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.styled";
import StyledDiaryProductsList from "../../components/DiaryProductsList/DiaryProductsList.styled";
import StyledAddProductBtn from "../../components/AddProductBtn/AddProductBtn.styled";
import StyledDiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.styled";
import StyledRightSideBar from "../../components/RightSideBar/RightSideBar.styled";

import { useDispatch } from "react-redux";
import { updateUserWithDailyRate } from "../../redux/auth/operations.js";

const StyledDeleteProductModal = lazy(() =>
  import("../../components/DeleteProductModal/DeleteProductModal.styled")
);
const StyledAddProductModal = lazy(() =>
  import("../../components/AddProductModal/AddProductModal.styled")
);
const StyledRestrictedPageModal = lazy(() =>
  import("../../components/RestrictedPageModal/RestrictedPageModal.styled")
);

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

      <Suspense>
        {!user.dailyCalorieIntake &&
          createPortal(<StyledRestrictedPageModal />, document.body)}
      </Suspense>

      <Suspense>
        {isDeleteModalOpen &&
          createPortal(
            <StyledDeleteProductModal
              closeModal={() => setIsDeleteModalOpen(false)}
            />,
            document.body
          )}
      </Suspense>

      <Suspense>
        {isOnMobile &&
          isAddModalOpen &&
          createPortal(
            <StyledAddProductModal
              closeModal={() => setIsAddModalOpen(false)}
            />,
            document.body
          )}
      </Suspense>
    </>
  );
};

export default DiaryPage;
