import useDiary from "../../hooks/useDiary";
import StyledDiaryProductItem from "../DiaryProductItem.jsx/DiaryProductItem.styled";
import StyledLoadingSpinner from "../common/LoadingSpinner/LoadingSpinner.styled";

const DiaryProductsList = ({ className: styles, openModal }) => {
  const { products, diary } = useDiary();

  const noProductsMessage =
    "You haven't added any products yet. Click the “ + ” button to add daily items to the diary. They will be displayed here.";

  return (
    <div className={styles}>
      {diary.isLoading ? (
        <StyledLoadingSpinner />
      ) : products.length === 0 ? (
        <p>{noProductsMessage}</p>
      ) : (
        products.map((item) => (
          <StyledDiaryProductItem
            key={item._id}
            product={item}
            openModal={openModal}
          />
        ))
      )}
    </div>
  );
};

export default DiaryProductsList;
