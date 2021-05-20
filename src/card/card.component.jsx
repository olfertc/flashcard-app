import React from "react";
import "./card.styles.css";

const Card = (props) => ( // renders one card
  <div className="card-container">
    <div className="card">
      <button className="card-button">
        <div className="front">
          <h2 className="japanese">
            {props.kana_char.hiragana_char} / {props.kana_char.katakana_char}
          </h2>
        </div>
        <div className="back">
          <h2 className="english">{props.kana_char.romaji}</h2>
        </div>
      </button>
    </div>
  </div>
);

export default Card;
