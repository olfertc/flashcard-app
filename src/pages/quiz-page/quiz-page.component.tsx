import React, { useState } from 'react';
import QuizCardList from '../../components/quiz-card-list/quiz-card-list.component';
import CHARACTERS, { QuizCharacter } from '../../character.data';

import './quiz-page.styles.scss';

const NUM_OF_CARDS = 16;

const QuizPage = () => {
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
      <QuizCardList kana_chars={quizChars} updateAnswer={handleUpdateAnswer} />
    </div>
  );
}

export default QuizPage;