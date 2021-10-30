import React, { useState } from 'react';
import MatchingCardList from '../../components/matching-card-list/matching-card-list.component';
import CHARACTERS, { MatchingCharacter } from '../../character.data';

import './matching-page.styles.scss';

const NUM_OF_CARDS = 15;

const MatchingPage = () => {
  const [matchingChars, setMatchingChars] = useState<MatchingCharacter[]>(CHARACTERS.slice(0, NUM_OF_CARDS));

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
      <MatchingCardList kana_chars={matchingChars} setMatched={setMatched} />
    </div>
  )
}


export default MatchingPage;