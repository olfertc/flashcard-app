import React, { useState } from 'react';
import CHARACTERS, { MatchingCharacter } from '../../character.data';

import './matching-page.styles.scss';
import MatchingCard from '../matching-card/matching-card.component';
import { randomizeCharacters } from '../../utils';

const NUM_OF_CARDS = 15;

const randomizedCharacters = randomizeCharacters(CHARACTERS).slice(0, NUM_OF_CARDS);

const Matching = () => {
  const [matchingChars, setMatchingChars] = useState<MatchingCharacter[]>(randomizedCharacters);
  const [active, setActive] = useState<MatchingCharacter>();

  const getKanaCards = () => {
    return matchingChars
      .filter((_c: MatchingCharacter, index: number) => index < 15)
      .map((kana_char: MatchingCharacter) => <MatchingCard
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

  // setMatchingChars(matchingChars);
  const setMatched = (card: MatchingCharacter) => {
    const matched = matchingChars.map((c: MatchingCharacter) => {
      if (c.id === card.id) {
        return {
          ...c,
          matched: true
        }
      }

      return c;
    })

    setMatchingChars(matched)
  }

  const score = matchingChars.filter((c: MatchingCharacter) => c.matched).length

  return (
    <div className="matching-page">
      <h1>Let's Learn Japanese!</h1>
      <h2>Matching</h2>
      <h3>click on two cards to match the kana with the romaji translation</h3>
      <span className='score'>Score: {score + "/15"}</span>
      <div className='matching-card-list'>
        {getKanaCards()}
      </div>
    </div>
  )
}


export default Matching;