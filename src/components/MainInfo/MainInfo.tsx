import * as React from "react";
import "./MainInfo.css";
import Planet from "../Planet/Planet";

const MainInfo = () => {
  return (
    <div className="main">
      <div className="main-left">
        <Planet />

        <div className="main-left__title">Explore Your own planet</div>
        <div className="main-left__title">In our New metaverse</div>
        <div className="main-left__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="main-right">
        <span className="main-right__title">Roadmap stats</span>

        <div className="main-right__item">
          <span className="main-right__item-title">12, 345</span>
          <span className="main-right__item-text">Lorem ipsum dolor</span>
        </div>

        <div className="main-right__item">
          <span className="main-right__item-title">12, 345</span>
          <span className="main-right__item-text">Lorem ipsum dolor</span>
        </div>

        <div className="main-right__item">
          <span className="main-right__item-title">12, 345</span>
          <span className="main-right__item-text">Lorem ipsum dolor</span>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
