import styled from "styled-components";
import CalculatorPage from "./CalculatorPage";
import getBgLayer from "../../utils/getBgLayers";

const StyledCalculatorPage = styled(CalculatorPage)`
  &mySection {
    padding-top: 32px;
    padding-bottom: 42px;

    @media (min-width: 768px) {
      padding-top: 100px;
      padding-bottom: 50px;

      form {
        padding-bottom: 60px;

        & {
          button {
            bottom: 0;
          }
        }
      }
    }

    @media (min-width: 1280px) {
      width: 763px;
      padding-top: 165px;
      padding-bottom: 60px;

      &:has(> div) > div {
        width: initial;
      }
    }
  }

  &myAside {
    background-color: #f0f1f3;
    padding-top: 40px;
    padding-bottom: 52px;

    @media (min-width: 768px) {
      padding-top: 80px;
      padding-bottom: 80px;

      background-image: url(${getBgLayer("tablet", "sidebar")});
      background-repeat: no-repeat;
      background-position: center;
    }

    @media (min-width: 1280px) {
      width: 517px;
      padding-top: 165px;

      background-image: url(${getBgLayer("desktop", "sidebar")});
      background-repeat: no-repeat;
      background-position: bottom right;

      & > div {
        width: initial;
        padding-left: 106px;
        padding-right: 106px;
      }
    }
  }
`;

export default StyledCalculatorPage;
