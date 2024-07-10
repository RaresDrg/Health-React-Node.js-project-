import styled from "styled-components";
import DailyCaloriesForm from "./DailyCaloriesForm";

const StyledDailyCaloriesForm = styled(DailyCaloriesForm)`
  & {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      & {
        h1 {
          color: #212121;
          font-size: 18px;
          line-height: 25.2px;
          text-align: center;
          margin-bottom: 30px;
        }

        div.field {
          width: 100%;
          height: 70px;
          margin-bottom: 15px;

          & {
            label {
              display: inline-block;
              line-height: 17px;
              letter-spacing: 0.04em;
              transition: all 0.45s ease-in-out;
              font-size: 14px;
              font-weight: 400;
              color: #9b9faa;

              transform: translate(20px, 27px);
              cursor: pointer;

              & {
                &:has(+ input:not(:placeholder-shown)),
                &:has(+ input:focus) {
                  transform: translate(0, 0);
                  /* cursor: pointer; */
                  font-size: 16px;
                  font-weight: 700;
                  color: black;
                  transition: all 0.45s ease-in-out;
                }
              }
            }

            input {
              width: 100%;
              appearance: none;
              border: none;
              outline: none;
              background-color: transparent;
              border-bottom: 1px solid #e0e0e0;
              font-size: 14px;
              font-weight: 700;
              line-height: 17px;
              letter-spacing: 0.04em;
              color: black;
              margin-top: 5px;
              padding: 5px 20px;
              transition: all 0.45s ease-in-out;
              color: #20b602;

              & {
                &:focus {
                  border-bottom: 1px solid black;
                  transition: all 0.45s ease-in-out;
                }

                &::placeholder {
                  opacity: 0;
                  transition: all 0.45s ease-in-out;
                }

                &:focus::placeholder {
                  color: #9b9faa;
                  opacity: 1;
                  transition: all 0.45s ease-in-out;
                }
              }
            }

            div.error {
              color: #ff003b;
              font-style: italic;
              font-size: 12px;
              margin-top: 2px;
              text-transform: lowercase;
            }
          }
        }

        div.field.onError {
          & {
            input {
              color: #ff003b;
            }
          }
        }

        div.radioField {
          margin-top: 5px;
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          row-gap: 10px;
          column-gap: 25px;

          & {
            p {
              flex: 1 0 100%;
              text-align: center;
              color: black;
              font-size: 16px;
              font-weight: 700;
              line-height: 17px;
              letter-spacing: 0.04em;
            }

            div {
              display: flex;
              align-items: center;
              gap: 5px;

              & {
                label {
                  color: #9b9faa;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 17px;
                  letter-spacing: 0.04em;
                  cursor: pointer;
                  transition: all 0.35s ease-in-out;

                  &:has(+ input:checked) {
                    color: #fc842d;
                    font-size: 15px;
                    font-weight: 700;
                    transition: all 0.35s ease-in-out;
                  }
                }

                input {
                  appearance: none;
                  outline: none;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #ffffff;
                  border: 1px solid #e0e0e0;
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  &:hover:not(:checked)::after {
                    content: "";
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #e0e0e0;
                    border-radius: 50%;
                  }

                  &:checked::after {
                    content: "";
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #fc842d;
                    border-radius: 50%;
                    transition: all 0.35s ease-in-out;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      form {
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        column-gap: 35px;
        position: relative;

        & {
          h1 {
            font-size: 34px;
            line-height: 47.6px;
            margin-bottom: 54px;
            flex: 1 0 100%;
            text-align: left;
            max-width: 530px;
          }

          div.field {
            width: 265px;
            margin-bottom: 30px;

            & {
              label {
                font-size: 17px;

                & {
                  &:has(+ input:not(:placeholder-shown)),
                  &:has(+ input:focus) {
                    font-size: 20px;
                  }
                }
              }

              input {
                font-size: 17px;
              }

              div.error {
                font-size: 14px;
              }
            }
          }

          div.radioField {
            width: 265px;
            row-gap: 20px;

            & {
              p {
                text-align: left;
                font-size: 19px;
              }

              div {
                & {
                  label {
                    font-size: 17px;

                    &:has(+ input:checked) {
                      font-size: 18px;
                    }
                  }

                  input {
                    width: 26px;
                    height: 26px;

                    &:hover:not(:checked)::after {
                      width: 13px;
                      height: 13px;
                    }

                    &:checked::after {
                      width: 13px;
                      height: 13px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    & {
      form {
        width: 565px;

        & {
          div.radioField {
            margin-left: auto;
            margin-right: auto;

            & {
              p {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledDailyCaloriesForm;
