import styled from "styled-components";
import HomePage from "./HomePage";
import getBgLayer from "../../utils/getBgLayers";

const StyledHomePage = styled(HomePage)`
  padding-top: 32px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 400px;

    width: 768px;
    margin: 0 auto;

    background-image: url(${getBgLayer("tablet", "banana")}),
      url(${getBgLayer("tablet", "leaves")}),
      url(${getBgLayer("tablet", "strawberry")}),
      url(${getBgLayer("tablet", "vector")});
    background-repeat: no-repeat;
    background-position: bottom right, bottom left, bottom 170px right 5px,
      bottom right;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    position: relative;
    padding-bottom: 190px;
    padding-top: calc(90px + 85px);
    background-image: url(${getBgLayer("desktop", "banana")}),
      url(${getBgLayer("desktop", "leaves")}),
      url(${getBgLayer("desktop", "strawberry")}),
      url(${getBgLayer("desktop", "vector")});
    background-repeat: no-repeat;
    background-position: top right, top -79px left 251px, bottom 50px right,
      bottom right;
  }
`;

export default StyledHomePage;
