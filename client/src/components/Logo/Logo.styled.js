import styled from "styled-components";
import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  display: flex;
  /* gap: 5px; */

  & {
    img {
      width: 30px;
      height: 34px;
    }

    p {
      color: #212121;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 0.04em;
    }

    p span:nth-of-type(2) {
      color: #fc842d;
      /* color: #a3cd48; */
    }
  }

  @media (min-width: 768px) {
    & {
      p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1280px) {
    & {
      img {
        width: 40px;
        height: 43px;
      }

      p {
        font-size: 23px;
        line-height: 50px;
      }

      &:after {
        content: "";
        display: block;
        width: 2px;
        height: 32px;
        background-color: #e0e0e0;
        margin-left: 20px;
        margin-right: 20px;
        align-self: center;
      }
    }
  }
`;

export default StyledLogo;
