import styled from "styled-components";
import NotFoundPage from "./NotFoundPage";

const StyledNotFoundPage = styled(NotFoundPage)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 80;
  padding: 50px;

  overflow: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: contrast(80%) brightness(35%);
  }

  div.goBack {
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 0;
    border-top: 100px solid #fc842d90;
    border-right: 100px solid transparent;
    transition: all 0.35s ease-in-out;
    mix-blend-mode: luminosity;
  }

  div.goBack:has(+ div.arrow:hover) {
    transition: all 0.35s ease-in-out;
    border-top: 100px solid #fc842d;
    mix-blend-mode: plus-lighter;
  }

  div.arrow {
    z-index: 80;
    transform: rotate(90deg);
    position: absolute;
    top: 2px;
    left: 2px;
    cursor: pointer;
  }

  h1 {
    color: #fff;
    mix-blend-mode: color-dodge;
    z-index: 50;
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  h2 {
    color: #fff;
    mix-blend-mode: hard-light;
    z-index: 50;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align: center;
  }

  p {
    font-style: italic;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.15em;
    color: #fff;
    mix-blend-mode: hard-light;
    z-index: 50;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    min-width: 220px;
    max-width: 480px;
    text-indent: 25px;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;

    h1 {
      font-size: 150px;
    }

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      max-width: 530px;
      line-height: 25px;
    }
  }

  @media (min-width: 1280px) {
    justify-content: space-evenly;
  }
`;

export default StyledNotFoundPage;
