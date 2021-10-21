import React, { useEffect, useState } from 'react';
import QuizCard from '../quiz-card/quiz-card.component';
import { Kana, QuizKana } from "../../kana.data";
import './quiz-card-list.styles.scss';

type QuizCardListProps = {
    kana_chars: QuizKana[];
    updateAnswer: (answer: QuizKana) => void
}

const QuizCardList = ({ kana_chars, updateAnswer }: QuizCardListProps) => {
    const [kanaChars, setKanaChars] = useState([])


    useEffect(() => {
        setKanaChars(kana_chars.sort(() => Math.random() - Math.random()).slice(0, 16))
    }, [])

    const getRandomKanaCards = () => {
        return kanaChars
            .map((kana_char: Kana) => <QuizCard key={kana_char.id} kana_char={kana_char} updateAnswer={updateAnswer} />)
    }

    return (
        <div className='quiz-card-list'>
            {getRandomKanaCards()}
        </div>
    );
}

export default QuizCardList;