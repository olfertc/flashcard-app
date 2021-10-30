import React, { useState } from 'react';
import MatchingCard from '../matching-card/matching-card.component';
import { Character, MatchingCharacter, QuizCharacter } from "../../character.data";
import './matching-card-list.styles.scss';

type MatchingCardListProps = {
  kana_chars: MatchingCharacter[],
  setMatched: (answer: QuizCharacter) => void
}

const MatchingCardList = ({ kana_chars, setMatched }: MatchingCardListProps) => {
  const [active, setActive] = useState<MatchingCharacter>();

  const getKanaCards = () => {
    return kana_chars
      .filter((_kana_char: Character, index: number) => index < 15)
      .map((kana_char: Character) => <MatchingCard
        key={kana_char.id}
        kana_char={kana_char}
        setActiveCard={setActiveCard}
        active={active}
      />)
  }

  const setActiveCard = (card: MatchingCharacter) => {
    if (active) {
      if (active?.id === card.id) {
        setMatched(card)
      }
      return setActive(null);
    }

    return setActive(card);
  };

  return (
    <div className='matching-card-list'>
      {getKanaCards()}
    </div>
  );
}

export default MatchingCardList;