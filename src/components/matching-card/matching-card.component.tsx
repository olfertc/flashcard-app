import React from 'react';
import { MatchingCharacter } from "../../character.data";
import './matching-card.styles.scss';

type CardProps = {
  kana_char: MatchingCharacter & { matched?: boolean },
  setActiveCard: (kana_char: MatchingCharacter) => void,
  active: MatchingCharacter
}

const MatchingCard = ({ kana_char, setActiveCard, active }: CardProps) => {
  const onClick = () => {
    setActiveCard(kana_char);
  }

  return (
    <div className="matching-card" onClick={onClick}>
      <div className={`card-front-matching ${active?.id === kana_char.id ? 'matching-card--active' : ''} ${kana_char?.matched ? 'matching-card--matched' : ''}`}>
        <h2 className="japanese">
          {kana_char.hiragana_char} / {kana_char.katakana_char}
        </h2>
      </div>
      <div className="card-back-matching" >
        <h2 className="english">{kana_char.romaji}</h2>
      </div>
    </div>
  )
}

export default MatchingCard;