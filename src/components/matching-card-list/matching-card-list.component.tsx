import React, { useState } from 'react';
import MatchingCard from '../matching-card/matching-card.component';
import { Kana, MatchingKana, QuizKana } from "../../kana.data";
import './matching-card-list.styles.scss';

type MatchingCardListProps = {
  kana_chars: MatchingKana[],
  setMatched: (answer: QuizKana) => void
}

const MatchingCardList = ({ kana_chars, setMatched }: MatchingCardListProps) => {
  const [active, setActive] = useState<MatchingKana>();

  const getKanaCards = () => {
    return kana_chars
      .filter((_kana_char: Kana, index: number) => index < 15)
      .map((kana_char: Kana) => <MatchingCard
        key={kana_char.id}
        kana_char={kana_char}
        setActiveCard={setActiveCard}
        active={active}
      />)
  }

  const setActiveCard = (card: MatchingKana) => {
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