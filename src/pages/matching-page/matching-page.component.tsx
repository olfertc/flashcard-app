import React, { useState } from 'react';
import MatchingCardList from '../../components/matching-card-list/matching-card-list.component';
import KANA_DATA, { MatchingKana } from '../../kana.data';

import './matching-page.styles.scss';

const NUM_OF_CARDS = 15;

const MatchingPage = () => {
  const [matchingChars, setMatchingChars] = useState<MatchingKana[]>(KANA_DATA.slice(0, NUM_OF_CARDS));

  // setMatchingChars(matchingChars);

  return (
    <div className="matching-page">
      <h1>Let's Learn Japanese!</h1>
      <h2>Matching</h2>
      <h3>click on two cards to match the kana with the romaji translation</h3>
      <span className='score'>Score: {+ "/15"}</span>
      <MatchingCardList kana_chars={matchingChars} />
    </div>
  )
}


export default MatchingPage;