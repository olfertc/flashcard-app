import React from 'react';
import { QuizKana } from "../../kana.data";
import './quiz-card.styles.scss';

type CardProps = {
  kana_char: QuizKana
  updateAnswer: (answer: QuizKana) => void
}

const QuizCard = ({ kana_char, updateAnswer }: CardProps) => {

  const handleAnswerChanged = ($event: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer({
      ...kana_char,
      matched: $event.target.value === kana_char.romaji
    })
  }

  return (
    <div className='quiz-card'>
      <div className={`card-front ${kana_char.matched ? 'quiz-card--matched' : ''}`}>
        <h2 className="japanese">
          {kana_char.hiragana_char} / {kana_char.katakana_char}
        </h2>
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