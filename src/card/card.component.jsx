import React from "react";
import "./card.styles.css";

const Card = (props) => ( // renders one card
  <div className="card-container" onClick={() => this.handleClick()}>
    <div className="front">
      <h2 className="japanese">{ props.kana_char.hiragana_char } / { props.kana_char.katakana_char }</h2>
    </div>
    <div className="back">
      <h2 className="english">{ props.kana_char.romaji}</h2>
    </div>
  </div>
);

export default Card;
