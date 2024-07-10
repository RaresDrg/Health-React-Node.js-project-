import { createPortal } from "react-dom";
import StyledDiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.styled";
import StyledDiaryProductsList from "../../components/DiaryProductsList/DiaryProductsList.styled";
import Container from "../../components/common/Container/Container.styled";

import { useState } from "react";
import StyledDeleteProductModal from "../../components/DeleteProductModal/DeleteProductModal.styled";
import { useMediaQuery } from "react-responsive";
import StyledAddProductBtn from "../../components/AddProductBtn/AddProductBtn.styled";
import StyledAddProductModal from "../../components/AddProductModal/AddProductModal.styled";
import StyledRightSideBar from "../../components/RightSideBar/RightSideBar.styled";
import StyledDiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.styled";

const DiaryPage = ({ className: styles }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const isOnMobile = useMediaQuery({ maxWidth: 767 });
  const isNotOnMobile = useMediaQuery({ minWidth: 768 });

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
              handlerFunction={() => setIsAddModalOpen(true)}
            />
          )}
        </Container>
      </section>
      <aside className={`${styles}myAside`}>
        <Container>
          <StyledRightSideBar />
        </Container>
      </aside>

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
