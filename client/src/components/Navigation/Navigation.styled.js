import styled from "styled-components";
import Navigation from "./Navigation";

const StyledNavigation = styled(Navigation)`
  display: flex;
  gap: 14px;

  & {
    a {
      text-transform: uppercase;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #9b9faa;
      transition: all 0.35s ease-in-out;

      & {
        &:hover:not(a.active) {
          color: #212121;
          transition: all 0.35s ease-in-out;
        }

        &.active {
          color: #a3cd48;
          font-weight: bold;
          font-size: 16px;
          transition: all 0.35s ease-in-out;
          cursor: not-allowed;
        }
      }
    }
  }

  @media (min-width: 768px) {
    gap: 24px;

    & {
      a {
        font-size: 16px;
        line-height: 20px;
      }

      a.active {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1280px) {
    & {
      a {
        font-size: 18px;
      }

      a.active {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

const AuthNavigation = styled(StyledNavigation)``;
const AppNavigation = styled(StyledNavigation)``;

export { AuthNavigation, AppNavigation };
