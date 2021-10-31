import React, { useState } from "react";
import { Character } from "../../character.data";
import "./flip-card.styles.scss";

interface CardProps {
  character: Character
}

const FlipCard = ({ character }: CardProps) => {
  const [show_back, toggleCardBack] = useState<boolean>(false);

  return (
    <div
      className="card-container"
      onClick={() => toggleCardBack(!show_back)}
    >
      <div className="card">
        {show_back ? (
          <div className="back">
            <h2 className="english">{character.romaji}</h2>
          </div>
        ) : (
          <div className="front">
            <h2 className="japanese">
              {character.hiragana_char} / {character.katakana_char}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipCard;
