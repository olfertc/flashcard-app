import React, { useState } from "react";
import { Kana } from "../kana.data";
import "./card.styles.css";

interface CardProps {
  kana_char: Kana
}

const Card = (props: CardProps) => {
  const [show_front, toggleCardBack] = useState<boolean>(false);

  return (
    <div
      className="card-container"
      onClick={() => toggleCardBack(!show_front)}
    >
      <div className="card">
        {show_front ? (
          <div className="front">
            <h2 className="japanese">
              {props.kana_char.hiragana_char} / {props.kana_char.katakana_char}
            </h2>
          </div>
        ) : (
          <div className="back">
            <h2 className="english">{props.kana_char.romaji}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
