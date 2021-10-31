import React, { useState } from 'react';
import { QuizCharacter, QuizCharacterState } from "../../character.data";
import './quiz-card.styles.scss';

type CardProps = {
  character: QuizCharacter
  updateAnswer: (answer: QuizCharacter) => void
}

const getQuizCharacterBorder = (state: QuizCharacterState) => {
  switch(state) {
    case QuizCharacterState.Invalid:
      return 'quiz-card--incorrect';
    case QuizCharacterState.Matched:
      return 'quiz-card--matched';
    default:
      return '';
  }
}

const QuizCard = ({ character, updateAnswer }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleAnswerChanged = ($event: React.ChangeEvent<HTMLInputElement>) => {
    const isMatched = $event.target.value === character.romaji

    updateAnswer({
      ...character,
      state: isMatched ? QuizCharacterState.Matched : QuizCharacterState.Invalid 
    })
  }

  const onClick = () => {
    setFlipped(prev => !prev);
  }

  return (
    <div className='quiz-card'>
      <div className={`card-front ${getQuizCharacterBorder(character.state)}`} onClick={onClick}>
        {!flipped && (
          <h2 className="japanese">
            {character.hiragana_char} / {character.katakana_char}
          </h2>
        )}

        {flipped && (
          <h2 className="japanese">
            {character.romaji}
          </h2>
        )}
      </div>
      <input
        disabled={character?.state === QuizCharacterState.Matched}
        className='text-input'
        type='text'
        placeholder="enter romaji here..."
        onChange={handleAnswerChanged} />
    </div>
  );
}

export default QuizCard;