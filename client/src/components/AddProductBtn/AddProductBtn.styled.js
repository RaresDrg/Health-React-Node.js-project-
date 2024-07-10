import styled from "styled-components";
import AddProductBtn from "./AddProductBtn";

const StyledAddProductBtn = styled(AddProductBtn)`
  margin: 0 auto;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 10px 0px #fc842d80;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
  border-radius: 100%;
  background-color: #fc842d;
  transition: all 0.35s ease-in-out;

  & {
    svg {
      width: 100%;
      height: 100%;
      transition: all 0.35s ease-in-out;
    }
  }

  &:hover:not(:disabled) {
    transition: all 0.35s ease-in-out;
    background-color: #fff;
    transform: scale(1.2);
    border: 1px solid orange;
  }

  &:hover:not(:disabled) > svg {
    transform: scale(1.2);
    fill: #fc842d;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
    transition: all 0.35s ease-in-out;
  }
`;

export default StyledAddProductBtn;
