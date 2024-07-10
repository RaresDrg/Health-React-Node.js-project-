import bananaLayerOnDesktop from "../assets/backgorunds/desktop-bg-layers/banana-layer.png";
import leavesLayerOnDesktop from "../assets/backgorunds/desktop-bg-layers/leaves-layer.png";
import strawberryLayerOnDesktop from "../assets/backgorunds/desktop-bg-layers/strawberry-layer.png";
import vectorLayerOnDesktop from "../assets/backgorunds/desktop-bg-layers/vector-layer.svg";

import bananaLayerOnTablet from "../assets/backgorunds/tablet-bg-layers/banana-layer.png";
import leavesLayerOnTablet from "../assets/backgorunds/tablet-bg-layers/leaves-layer.png";
import strawberryLayerOnTablet from "../assets/backgorunds/tablet-bg-layers/strawberry-layer.png";
import vectorLayerOnTablet from "../assets/backgorunds/tablet-bg-layers/vector-layer.svg";

import sideBarLayerOnTablet from "../assets/backgorunds/side-bar/side-bar-layer-tablet.png";
import sideBarLayerOnDesktop from "../assets/backgorunds/side-bar/side-bar-layer-desktop.png";

function getBgLayer(screen, name) {
  if (screen === "desktop") {
    if (name === "banana") return bananaLayerOnDesktop;
    if (name === "leaves") return leavesLayerOnDesktop;
    if (name === "strawberry") return strawberryLayerOnDesktop;
    if (name === "vector") return vectorLayerOnDesktop;
    if (name === "sidebar") return sideBarLayerOnDesktop;
  }

  if (screen === "tablet") {
    if (name === "banana") return bananaLayerOnTablet;
    if (name === "leaves") return leavesLayerOnTablet;
    if (name === "strawberry") return strawberryLayerOnTablet;
    if (name === "vector") return vectorLayerOnTablet;
    if (name === "sidebar") return sideBarLayerOnTablet;
  }
}

export default getBgLayer;
