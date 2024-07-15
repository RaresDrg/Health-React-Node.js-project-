import styled from "styled-components";
import DiaryAddProductForm from "./DiaryAddProductForm";

const StyledDiaryAddProductForm = styled(DiaryAddProductForm)`
  & {
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      & {
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
                &:has(+ div > div > div > div > input:focus),
                &:has(+ div > div > div > div.react-select__single-value),
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
          }

          div.error {
            color: #ff003b;
            font-style: italic;
            font-size: 12px;
            margin-top: 2px;
            text-transform: lowercase;
          }

          & > div.react-select-container {
            & .react-select__ {
              &control {
                margin: 0;
                padding: 0 0 0 20px;
                appearance: none;
                outline: none;
                border: none;
                background-color: transparent;
                box-shadow: none;
                cursor: text;
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #e0e0e0;
                transition: all 0.35s ease-in-out;

                &:has(> div > div > input:focus) {
                  border-bottom: 1px solid black;
                  transition: all 0.35s ease-in-out;
                }

                &:hover {
                  border-bottom: 1px solid black;
                  transition: all 0.35s ease-in-out;
                }
              }

              &value-container {
                margin: 0;
                padding: 0;

                &:has(> div > input:focus) + div > div {
                  transition: all 0.35s ease-in-out;
                  color: black;
                }
              }

              &placeholder {
                margin: 0;
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 17.01px;
                letter-spacing: 0.04em;
                color: #9b9faa;
                opacity: 0;
                transition: all 0.45s ease-in-out;

                &:has(+ div > input:focus) {
                  opacity: 1;
                  transition: all 0.45s ease-in-out;
                }
              }

              &input-container {
                margin: 0;
                padding: 0;
                margin: 0;
                padding: 0;
                font-size: 14px;
                font-weight: 700;
                line-height: 17.01px;
                letter-spacing: 0.04em;
                color: black;
              }

              &indicator-separator {
                display: none;
              }

              &indicator {
                cursor: pointer;
                color: #e0e0e0;
                transition: all 0.35s ease-in-out;
              }

              &menu {
                background-color: #fff;
                border-radius: 0;
                margin: 0;
                z-index: 50;
              }

              &menu-list {
                color: black;
                scrollbar-color: #264061 #f0f1f3;
                scrollbar-width: thin;
              }

              &single-value {
                color: #20b602;
                margin-left: 0;
              }

              &option {
                cursor: pointer;
                /* transition: all 0.2s ease-in-out; */

                &:hover {
                  background-color: #fc842d;
                  /* transition: all 0.2s ease-in-out; */
                  color: #fff;
                }
              }

              &option--is-selected {
                background-color: #9b9faa;
              }
            }
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

      div.buttonWrapper {
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
    }
  }

  @media (min-width: 768px) {
    & {
      width: 610px;

      form {
        flex-direction: row;
        margin-bottom: 45px;

        & {
          div.field {
          }

          div.field:nth-of-type(1) {
            width: 240px;

            & > div {
              width: 240px;
            }
          }

          div.field:nth-of-type(2) {
            width: 250px;
            margin-left: 41px;

            & {
              input {
                padding-bottom: 10px;
              }
            }
          }
        }

        button {
          margin-right: 0;
          margin-bottom: 22px;
        }
      }
    }
  }
`;

export default StyledDiaryAddProductForm;
