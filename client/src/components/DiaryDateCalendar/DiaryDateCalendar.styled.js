import styled from "styled-components";
import DiaryDateCalendar from "./DiaryDateCalendar";

const StyledDiaryDateCalendar = styled(DiaryDateCalendar)`
  margin-bottom: 32px;
  display: flex;

  .react-datepicker__input-container {
    display: flex;
    flex-direction: row-reverse;

    & {
      input {
        appearance: none;
        background-color: transparent;
        border: none;
        outline: none;
        color: #212121;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        padding: 0;
        width: 105px;
        cursor: pointer;
        margin-right: 20px;
        transition: all 0.35s ease-in-out;

        &:hover {
          transition: all 0.35s ease-in-out;
          color: #fc842d;
        }
      }

      img {
        width: 20px;
        height: 20px;
        position: static;
        padding: 0;
        cursor: pointer;
        transition: all 0.35s ease-in-out;

        &:hover {
          transition: all 0.35s ease-in-out;
          transform: scale(1.2);
        }
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 60px;

    .react-datepicker__input-container {
      align-items: baseline;
      & {
        input {
          width: 175px;
          font-size: 34px;
          line-height: 41.32px;
        }
      }
    }
  }
`;

export default StyledDiaryDateCalendar;
