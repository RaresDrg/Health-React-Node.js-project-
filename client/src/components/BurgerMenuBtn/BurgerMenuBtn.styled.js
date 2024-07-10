import styled from "styled-components";
import BurgerMenuBtn from "./BurgerMenuBtn";

const StyledBurgerMenuBtn = styled(BurgerMenuBtn)`
  margin-left: 48px;
  width: 24px;
  height: 24px;
  transition: all 0.35s ease-in-out;

  & {
    &:hover {
      opacity: 0.5;
      transition: all 0.35s ease-in-out;
    }

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
      cursor: pointer;

      & {
        &:checked + div.hamburgerLines span {
          background-color: #ff003b;
          transition: all 0.35s ease-in-out;

          &:nth-child(1) {
            transform: rotate(45deg);
            transform-origin: 0 0;
            border-radius: 0;
          }

          &:nth-child(2) {
            transform: scale(0);
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
            transform-origin: 0 100%;
            border-radius: 0;
          }
        }
      }
    }

    div.hamburgerLines {
      margin-left: auto;
      margin-right: auto;
      width: 18px;
      height: 14px;
      display: flex;
      flex-direction: column;

      & {
        span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #212121;
          border-radius: 10px;
          transition: all 0.35s ease-in-out;
        }
      }
    }
  }
`;

export default StyledBurgerMenuBtn;
