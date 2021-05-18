import React from "react";
import "./card.styles.css";

const Card = ({ front, back }) => (
  <div className="card">
    <div className="front">
      <div className="japanese">{front}</div>
    </div>
    {/*<div className="back">
      <div className="english">{back}</div>}
    </div>*/}
  </div>
);

export default Card;
