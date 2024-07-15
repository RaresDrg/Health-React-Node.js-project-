import styled from "styled-components";
import DiaryProductsList from "./DiaryProductsList";

const StyledDiaryProductsList = styled(DiaryProductsList)`
  & {
    margin-bottom: 60px;

    .loadingSpinner {
      display: flex;
      justify-content: center;
    }
  }

  &:has(> div) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-right: 10px;
    scrollbar-color: #264061 #f0f1f3;
    scrollbar-width: thin;
    max-height: 195px;
  }

  &:has(> p) > p {
    font-size: 18px;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: #212121;
    font-style: italic;
  }

  @media (min-width: 768px) {
    & {
      margin-bottom: 0;
      width: 610px;
    }

    &:has(> div) {
      max-height: 245px;
      padding-right: 25px;
    }

    &:has(> p) > p {
      text-indent: 50px;
    }
  }
`;

export default StyledDiaryProductsList;
