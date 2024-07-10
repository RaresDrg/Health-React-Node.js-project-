import styled from "styled-components";
import DailyCalorieIntake from "./DailyCalorieIntake";

const StyledDailyCalorieIntake = styled(DailyCalorieIntake)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 78px;
  /* top: 0; */
  z-index: 10;
  padding: 80px 20px;
  background-color: #ffffff;
  overflow: auto;

  & {
    div.modalContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 80px;

      & {
        .closeBtn {
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 40px;
          padding: 10px 20px;
          background-color: #eff1f3;

          & {
            button {
              width: 20px;
              height: 20px;
              background: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.35s ease-in-out;

              & {
                &:hover {
                  opacity: 0.8;
                  transition: all 0.35s ease-in-out;
                  transform: scale(1.5);
                }

                &:hover {
                  svg {
                    color: #ff003b;
                    transition: all 0.35s ease-in-out;
                  }
                }

                svg {
                  color: #000000;
                  transition: all 0.35s ease-in-out;
                }
              }
            }
          }
        }

        p.title {
          font-size: 18px;
          line-height: 25.2px;
          text-align: left;
          color: #212121;
          text-align: center;
        }

        p.kcal {
          margin-top: 42px;
          margin-bottom: 32px;
          font-size: 48px;
          line-height: 58.34px;
          letter-spacing: 0.04em;
          text-align: center;
          color: #264061;

          display: flex;
          justify-content: center;
          align-items: baseline;
          gap: 10px;

          & span {
            font-size: 26px;
            line-height: 31.6px;
          }
        }

        div.recomandation {
          margin-bottom: 40px;
          width: 100%;

          &::before {
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            background-color: #e0e0e0;
            margin-bottom: 20px;
          }

          p {
            color: #212121;
            font-size: 14px;
            line-height: 17.01px;
            letter-spacing: 0.04em;
            margin-bottom: 20px;
          }

          ol {
            list-style-position: inside;
            font-size: 14px;
            font-weight: 400;
            line-height: 17.01px;
            letter-spacing: 0.04em;
            color: #9b9faa;

            & li:not(:nth-last-of-type(1)) {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-color: rgba(33, 33, 33, 0.5);
    top: 0;
    display: grid;
    place-items: center;

    & {
      div.modalContent {
        position: relative;
        /* width: 672px;
        height: 572px; */
        padding: 64px 82px 80px 82px;
        background-color: #ffffff;
        border: 2px solid orange;
        box-shadow: 0px 22px 40px 0px #fc842d80;

        & {
          .closeBtn {
            background-color: transparent;
            top: 20px;
            right: 20px;
            padding: 0;
            width: 25px;
            height: 25px;

            & {
              button {
                width: 100%;
                height: 100%;
                border-radius: 50%;

                &:hover {
                  background-color: #eff1f3;
                }

                svg {
                  width: 100%;
                  height: 100%;
                  color: #000000;
                }
              }
            }
          }

          p.title {
            width: 450px;
            font-size: 30px;
            line-height: 36.4px;
          }

          p.kcal {
            margin-top: 20px;
            margin-bottom: 44px;
          }

          div.recomandation {
            width: 330px;

            &::before {
              margin-bottom: 12px;
            }
          }

          div.recomandation + button {
            position: initial;
            width: 250px;
            padding: 15px 25px;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    & {
      div.modalContent {
        & {
          div.recomandation + button {
            transform: translateX(0);
          }
        }
      }
    }
  }
`;

export default StyledDailyCalorieIntake;
