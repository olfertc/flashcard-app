import React from 'react';
import QuizCard from '../quiz-card/quiz-card.component';
import { Character, QuizCharacter } from "../../character.data";
import './quiz-card-list.styles.scss';

type QuizCardListProps = {
    kana_chars: QuizCharacter[];
    updateAnswer: (answer: QuizCharacter) => void
}

const QuizCardList = ({ kana_chars, updateAnswer }: QuizCardListProps) => {
    const getRandomKanaCards = () => {
        return kana_chars
            .map((kana_char: Character) => <QuizCard key={kana_char.id} kana_char={kana_char} updateAnswer={updateAnswer} />)
    }

    return (
        <div className='quiz-card-list'>
            {getRandomKanaCards()}
        </div>
    );
}

export default QuizCardList;