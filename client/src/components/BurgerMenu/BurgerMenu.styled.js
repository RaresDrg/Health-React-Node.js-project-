import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const StyledBurgerMenu = styled(BurgerMenu)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 78px;
  /* top: 0; */
  z-index: 10;
  padding: 80px 20px;
  background-color: #264061;
  overflow: auto;

  & {
    div.modalContent {
      padding-bottom: 80px;

      &:has(> div) > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;

        & {
          a {
            font-size: 18px;
            line-height: 21.88px;
          }

          a.active {
            color: #fff;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 100px 20px;

    & {
      div.modalContent {
        &:has(> div) > div {
          gap: 24px;

          & {
            a {
              font-size: 24px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
`;

export default StyledBurgerMenu;
