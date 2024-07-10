import styled from "styled-components";
import Header from "./Header";

const StyledHeader = styled(Header)`
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;

  & {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
  }

  @media (min-width: 1280px) {
    border: none;
    padding-top: 35px;
    padding-bottom: 0;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;

    & {
      div {
        justify-content: flex-start;
      }
    }
  }
`;

export default StyledHeader;
