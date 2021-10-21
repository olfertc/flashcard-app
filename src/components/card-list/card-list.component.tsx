import React from 'react';
import FlipCard from '../flip-card/flip-card.component';
import { Kana } from "../../kana.data";
import './card-list.styles.scss';

interface CardListProps {
    kana_chars: Kana[]
  }

const CardList = (props: CardListProps) => { // renders the list of all cards
    // console.log(props);

    return (
    <div className='card-list'>
    { props.kana_chars.map(kana_char => 
        <FlipCard key={kana_char.id} kana_char={kana_char} />
    )}
        </div>
    );
}

export default CardList;
