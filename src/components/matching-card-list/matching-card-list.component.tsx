import React from 'react';
import MatchingCard from '../matching-card/matching-card.component';
import { Kana, MatchingKana } from "../../kana.data";
import './matching-card-list.styles.scss';

type MatchingCardListProps = {
  kana_chars: MatchingKana[]
}

const QuizCardList = ({ kana_chars }: MatchingCardListProps) => {
  const getKanaCards = () => {
    return kana_chars
      .filter((_kana_char: Kana, index: number) => index < 15)
      .map((kana_char: Kana) => <MatchingCard key={kana_char.id} kana_char={kana_char} />)
  }

  return (
    <div className='matching-card-list'>
      {getKanaCards()}
    </div>
  );
}

export default QuizCardList;