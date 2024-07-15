import styled from "styled-components";
import RestrictedPageModal from "./RestrictedPageModal";

const StyledRestrictedPageModal = styled(RestrictedPageModal)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 60px 20px;
  overflow: auto;
  background-color: rgba(33, 33, 33, 0.85);
  display: grid;
  place-items: center;

  & {
    div.modalContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      background-color: #ffffff;
      border: 2px solid orange;
      box-shadow: 0px 22px 40px 0px #fc842d80;
      max-width: 420px;

      & {
        p {
          font-size: 18px;
          font-style: italic;
          text-align: center;
          line-height: 24px;
          color: #212121;
          letter-spacing: 0.04em;
          white-space: pre-wrap;
          margin-top: 20px;
          margin-bottom: 70px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      div.modalContent {
        padding: 60px 50px;
        max-width: 520px;

        & {
          p {
            font-size: 22px;
            line-height: 28px;

            margin-top: 60px;
            margin-bottom: 110px;
          }

          button {
            position: initial;
            width: initial;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    & {
      div.modalContent {
        padding: 45px 30px;
        max-width: 720px;

        & {
          p {
            font-size: 24px;
            line-height: 30px;
            margin-top: 40px;
            margin-bottom: 85px;
          }

          button {
            transform: translateX(0);
          }
        }
      }
    }
  }
`;

export default StyledRestrictedPageModal;
