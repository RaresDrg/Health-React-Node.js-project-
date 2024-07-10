import styled from "styled-components";
import UserInfo from "./UserInfo";

const StyledUserInfo = styled(UserInfo)`
  display: flex;
  gap: 16px;

  @media (max-width: 767px) {
    padding: 4px 20px;
    background-color: #eff1f3;
    justify-content: end;
  }

  & {
    span {
      color: #212121;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      display: flex;
      align-items: center;
      gap: 16px;
      text-align: right;
      text-transform: capitalize;
    }

    span::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 32px;
      background-color: #e0e0e0;
    }

    button {
      color: #9b9faa;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      font-weight: 700;
      transition: all 0.35s ease-in-out;

      display: block;
      width: 32px;
    }

    button:hover {
      transition: all 0.35s ease-in-out;
      color: #ff003b;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    margin-left: 35px;
  }

  @media (min-width: 1280px) {
    margin-left: auto;
    gap: 16px;
  }
`;

export default StyledUserInfo;
