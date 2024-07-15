import styled from "styled-components";
import DiaryProductItem from "./DiaryProductItem";

const StyledDiaryProductItem = styled(DiaryProductItem)`
  & {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.01px;
    letter-spacing: 0.04em;
    color: #212121;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    gap: 10px;

    & {
      & > span {
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 5px;
      }

      span:nth-of-type(1) {
        flex: 3 0 92px;
        /* max-width: 200px; */
      }

      span:nth-of-type(2) {
        flex: 1 0 45px;
        /* max-width: 80px; */

        & {
          span {
            font-size: 10px;
            line-height: 12.15px;
            margin-left: 5px;
          }
        }
      }

      span:nth-of-type(3) {
        flex: 1 0 60px;
        /* max-width: 80px; */

        span {
          font-size: 10px;
          line-height: 12.15px;
          margin-left: 5px;
          text-transform: lowercase;
        }
      }

      button {
        margin-bottom: 4px;
        width: 18px;
        height: 18px;
        color: black;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        align-items: center;
        align-self: center;
        transition: all 0.35s ease-in-out;

        &:hover {
          color: #ff003b;
          background-color: #eff1f3;
          transition: all 0.35s ease-in-out;
          transform: scale(1.5);

          & > svg {
            color: #ff003b;
            transition: all 0.35s ease-in-out;
          }
        }

        & > svg {
          color: #9b9faa;
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      & {
        & > span {
          padding-bottom: 15px;
        }

        span:nth-of-type(1) {
          max-width: 240px;
        }

        span:nth-of-type(2) {
          max-width: 105px;
          text-align: right;
        }

        span:nth-of-type(3) {
          max-width: 105px;
          text-align: right;
        }

        button {
          width: 20px;
          height: 20px;
          margin-left: -15px;

          & > svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`;

export default StyledDiaryProductItem;
