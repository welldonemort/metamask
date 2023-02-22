import * as React from "react";
import "./Planet.css";
const planet = require("../../assets/planet.png") as string;

type PlanetProps = {
  noText?: boolean;
};

const Planet = ({ noText = false }: PlanetProps) => {
  return (
    <div
      className="planet"
      style={{ top: noText ? "28%" : "0", right: noText ? "-6%" : "0" }}
    >
      <div className="circle-wrap">
        <div className="circle">
          <div className="dot" />
          <div className="dot-right" />
          <div className="dot-bottom" />

          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle" />
        </div>
      </div>

      <img src={planet} alt="planet" className="main-left__planet" />

      <div className="main-left__planet-bg-big" />
      <div className="main-left__planet-bg" />

      <div className="main-left__planet-bg-medium" />
      <div className="main-left__planet-ring-big" />
      <div className="main-left__planet-ring-small" />
      {!noText && (
        <div
          className="main-left__filter"
          style={{ backgroundImage: `url(${planet})` }}
        >
          <div className="main-left__filter-title">
            Explore Your own planet
            <div className="main-left__filter-title">In our New metaverse</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planet;
