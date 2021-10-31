import React, { useState } from 'react';
import { QuizCharacter } from "../../character.data";
import './quiz-card.styles.scss';

type CardProps = {
  kana_char: QuizCharacter
  updateAnswer: (answer: QuizCharacter) => void
}

const QuizCard = ({ kana_char, updateAnswer }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleAnswerChanged = ($event: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer({
      ...kana_char,
      matched: $event.target.value === kana_char.romaji
    })
  }

  const onClick = () => {
    setFlipped(prev => !prev);
  }

  return (
    <div className='quiz-card'>
      <div className={`card-front ${kana_char.matched ? 'quiz-card--matched' : ''}`} onClick={onClick}>
        {!flipped && (
          <h2 className="japanese">
            {kana_char.hiragana_char} / {kana_char.katakana_char}
          </h2>
        )}

        {flipped && (
          <h2 className="japanese">
            {kana_char.romaji}
          </h2>
        )}
      </div>
      <input
        className='text-input'
        type='text'
        placeholder="enter romaji here..."
        onChange={handleAnswerChanged} />
    </div>
  );
}

export default QuizCard;