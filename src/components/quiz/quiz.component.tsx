import React, { useState } from 'react';
import CHARACTERS, { QuizCharacter } from '../../character.data';

import './quiz-page.styles.scss';
import QuizCard from '../quiz-card/quiz-card.component';

const NUM_OF_CARDS = 16;

type QuizCardListProps = {
  kana_chars: QuizCharacter[];
  updateAnswer: (answer: QuizCharacter) => void
}

const Quiz = () => {
  const [quizChars, setQuizChars] = useState<QuizCharacter[]>(CHARACTERS.slice(0, NUM_OF_CARDS)); // need to get random here

  const handleUpdateAnswer = (answer: QuizCharacter) => {
    const updatedAnswers = quizChars.map((kana: QuizCharacter) => {
      if (kana.id === answer.id) {
        return {
          ...kana,
          ...answer
        }
      }
      return kana;
    });
    setQuizChars(updatedAnswers)
  };

  const getRandomKanaCards = () => {
    return quizChars
        .map((kana_char: QuizCharacter) => <QuizCard key={kana_char.id} kana_char={kana_char} updateAnswer={handleUpdateAnswer} />)
  }

  const getTotalMatched = () => {
    return quizChars
      .filter((char: QuizCharacter) => char.matched)
      .length;
  }

  return (
    <div className='home-page'>
      <h1> Let's Learn Japanese! </h1>
      <h2>Quiz</h2>
      <h3>enter the correct romaji translation for each kana</h3>
      <span className='score'>Score: {getTotalMatched() + "/16"}</span>
      <div className='quiz-card-list'>
        {getRandomKanaCards()}
      </div>
    </div>
  );
}

export default Quiz;