import React, { useState } from "react";
import CHARACTERS, {
  Character,
  QuizCharacter,
  QuizCharacterState,
} from "../../character.data";
import { randomizeCharacters } from "../../utils";

import "./quiz.styles.scss";
import QuizCard from "../quiz-card/quiz-card.component";
import Confetti from "react-confetti";

const NUM_OF_CARDS = 16;

const randomizedCharacters = randomizeCharacters(CHARACTERS)
  .slice(0, NUM_OF_CARDS)
  .map((c: Character) => ({
    ...c,
    state: QuizCharacterState.NotMatched,
  }));

const Quiz = () => {
  const [quizChars, setQuizChars] =
    useState<QuizCharacter[]>(randomizedCharacters);
  const handleUpdateAnswer = (answer: QuizCharacter) => {
    const updatedAnswers = quizChars.map((kana: QuizCharacter) => {
      if (kana.id === answer.id) {
        return {
          ...kana,
          ...answer,
        };
      }
      return kana;
    });
    setQuizChars(updatedAnswers);
  };

  const getTotalMatched = () => {
    return quizChars.filter(
      (char: QuizCharacter) => char.state === QuizCharacterState.Matched
    ).length;
  };

  const allMatched = quizChars.every(
    (c: QuizCharacter) => c.state === QuizCharacterState.Matched
  );

  return (
    <div className="home-page">
      <Confetti
        initialVelocityX={10}
        initialVelocityY={10}
        gravity={0.1}
        run={allMatched}
      />
      <h1>Let's Learn Japanese!</h1>
      <h2>Quiz</h2>
      <h3>enter the correct romaji translation for each kana</h3>
      <span className="score">Score: {getTotalMatched() + "/16"}</span>
      <div className="quiz-card-list">
        {quizChars.map((character: QuizCharacter) => (
          <QuizCard
            key={character.id}
            character={character}
            updateAnswer={handleUpdateAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
function useWindowSize(): { width: any; height: any } {
  throw new Error("Function not implemented.");
}
