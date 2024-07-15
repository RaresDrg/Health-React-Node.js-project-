import styled from "styled-components";
import RightSideBar from "./RightSideBar";

const StyledRightSideBar = styled(RightSideBar)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 40px;
  width: 280px;

  & {
    div.summary {
      h3 {
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.04em;
        color: #212121;
        margin-bottom: 20px;
        /* text-align: center; */
      }

      div.columns {
        display: flex;
        justify-content: space-between;
        gap: 35px;

        div {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 0.04em;
          color: #9b9faa;
        }

        div:nth-of-type(2) {
          align-items: flex-end;
        }

        & {
          span.toMuch {
            color: red;
            font-weight: 700;
          }
        }
      }
    }

    div.recomandation {
      h3 {
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.04em;
        color: #212121;
        margin-bottom: 20px;
        /* text-align: center; */
      }

      div {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        gap: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0.04em;
        color: #9b9faa;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    width: 610px;
    margin: 0;
    justify-content: space-between;

    & {
      div.summary {
        & {
          h3 {
            text-align: left;
            font-size: 16px;
            margin-bottom: 30px;
          }

          div.columns {
            gap: 75px;
          }
        }
      }

      div.recomandation {
        & {
          h3 {
            text-align: left;
            font-size: 16px;
            margin-bottom: 30px;
          }

          div {
            align-items: flex-start;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 60px;
    align-items: flex-start;
    width: initial;

    & {
      div.summary {
        h3 {
          font-size: 20px;
          line-height: 23px;
          margin-bottom: 35px;
        }

        div.columns {
          div {
            gap: 13px;
            font-size: 17px;
            line-height: 20px;
          }
        }
      }

      div.recomandation {
        h3 {
          font-size: 20px;
          line-height: 23px;
          margin-bottom: 35px;
        }

        div {
          gap: 13px;
          font-size: 17px;
          line-height: 20px;
        }
      }
    }
  }
`;

export default StyledRightSideBar;
