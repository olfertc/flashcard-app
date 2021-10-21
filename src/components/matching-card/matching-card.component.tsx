import React, { useState } from 'react';
import { MatchingKana } from "../../kana.data";
import './matching-card.styles.scss';

type CardProps = {
  kana_char: MatchingKana
}

const MatchingCard = ({ kana_char }: CardProps) => {
  const [firstSelected, setFirstSelected] = useState();
  const [secondSelected, setSecondSelected] = useState();

  return (
    <div className='matching-card'>
      <div className='card-front-matching' >
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