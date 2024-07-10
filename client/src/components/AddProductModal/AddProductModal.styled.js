import styled from "styled-components";
import AddProductModal from "./AddProductModal";

const StyledAddProductModal = styled(AddProductModal)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 118px;
  /* top: 0; */
  z-index: 10;
  padding: 60px 20px;
  background-color: #ffffff;
  overflow: auto;

  & {
    div.modalContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 100px;
      position: relative;
    }
  }
`;

export default StyledAddProductModal;
